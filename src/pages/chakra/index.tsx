import {
    Badge,
    Box,
    Button,
    Center,
    Grid,
    GridItem,
    Image,
    Input,
    Stack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import s from './styles.module.scss'

interface PkmInterface {
    name: string
    id: number
    types: [
        {
            slot: number
            type: {
                name: string
            }
        }
    ]
    sprites: {
        front_default: string
        front_shiny: string
        other: {
            'official-artwork': {
                front_default: string
                front_shiny: string
            }
        }
    }
}

export default function Chakra() {
    const [pkm, setPkm] = useState<PkmInterface>()
    const [listPkm, setListPkm] = useState<PkmInterface[]>([])
    const [searchedPkm, setSearchedPkm] = useState('')

    useEffect(() => {
        const storageListPkm = localStorage.getItem('@NKH:listPkm')
        storageListPkm && setListPkm(JSON.parse(storageListPkm))
    }, [])

    useEffect(() => {
        if (listPkm.length <= 0) return
        localStorage.setItem('@NKH:listPkm', JSON.stringify(listPkm))
    }, [listPkm])

    const URL_API = 'https://pokeapi.co/api/v2/pokemon/'

    const searchPkm = (event: any) => {
        event.preventDefault()

        searchedPkm &&
            fetch(URL_API + searchedPkm).then((response) => {
                response.json().then((data) => {
                    setPkm({
                        ...data,
                        name:
                            data.name[0].toUpperCase() + data.name.substring(1),
                    })
                })
            })

        setSearchedPkm('')
    }

    useEffect(() => {
        pkm && setListPkm((e) => [...e, pkm])
    }, [pkm])

    return (
        <>
            <Center margin="10px" marginBottom={'50px'}>
                <form onSubmit={searchPkm}>
                    <Stack direction={'row'}>
                        <Input
                            autoFocus
                            value={searchedPkm}
                            placeholder="Buscar Pokémon!"
                            color="black"
                            borderColor="black"
                            onChange={(e) =>
                                setSearchedPkm(e.target.value.toLowerCase())
                            }
                        />
                        <Button colorScheme="blue" onClick={searchPkm}>
                            Buscar
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={(e) => {
                                setListPkm([]), localStorage.clear()
                            }}
                        >
                            Limpar
                        </Button>
                    </Stack>
                </form>
            </Center>
            <Center>
                <Grid templateColumns="repeat(6, 1fr)" gap={3}>
                    {listPkm &&
                        listPkm.map((pkm) => {
                            return (
                                <div className={s.container} key={pkm.id}>
                                    <GridItem className={s.front}>
                                        <Box
                                            borderWidth="1px"
                                            borderRadius="lg"
                                        >
                                            <Image
                                                src={
                                                    pkm.sprites.other[
                                                        'official-artwork'
                                                    ].front_default
                                                }
                                                alt={pkm.name}
                                            />
                                            <Box p="6">
                                                <Box alignItems="space-between">
                                                    <Stack direction={'row'}>
                                                        {pkm.types.map(
                                                            (type) => {
                                                                return (
                                                                    <Badge
                                                                        justifyContent="space-between"
                                                                        key={
                                                                            type.slot
                                                                        }
                                                                        borderRadius="full"
                                                                        px="2"
                                                                        colorScheme="teal"
                                                                    >
                                                                        {
                                                                            type
                                                                                .type
                                                                                .name
                                                                        }
                                                                    </Badge>
                                                                )
                                                            }
                                                        )}
                                                    </Stack>
                                                    <Box
                                                        color="gray.500"
                                                        fontWeight="semibold"
                                                        letterSpacing="wide"
                                                        fontSize="xs"
                                                        textTransform="uppercase"
                                                        ml="2"
                                                    ></Box>
                                                </Box>

                                                <Box
                                                    mt="1"
                                                    fontWeight="semibold"
                                                    as="h4"
                                                    lineHeight="tight"
                                                    noOfLines={1}
                                                >
                                                    {pkm.name}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </GridItem>
                                    <GridItem className={s.back}>
                                        <Box
                                            borderWidth="1px"
                                            borderRadius="lg"
                                        >
                                            <Image
                                                src={
                                                    pkm.sprites.other[
                                                        'official-artwork'
                                                    ].front_shiny
                                                }
                                                alt={pkm.name}
                                            />

                                            <Box p="6">
                                                <Box
                                                    display="flex"
                                                    alignItems="space-between"
                                                >
                                                    <Stack direction={'row'}>
                                                        {pkm.types.map(
                                                            (type) => {
                                                                return (
                                                                    <Badge
                                                                        justifyContent="space-between"
                                                                        key={
                                                                            type.slot
                                                                        }
                                                                        borderRadius="full"
                                                                        px="2"
                                                                        colorScheme="teal"
                                                                    >
                                                                        {
                                                                            type
                                                                                .type
                                                                                .name
                                                                        }
                                                                    </Badge>
                                                                )
                                                            }
                                                        )}
                                                    </Stack>
                                                    <Box
                                                        color="gray.500"
                                                        fontWeight="semibold"
                                                        letterSpacing="wide"
                                                        fontSize="xs"
                                                        textTransform="uppercase"
                                                        ml="2"
                                                    ></Box>
                                                </Box>
                                                <Box
                                                    mt="1"
                                                    fontWeight="semibold"
                                                    as="h4"
                                                    lineHeight="tight"
                                                    noOfLines={1}
                                                >
                                                    {pkm.name}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </GridItem>
                                </div>
                            )
                        })}
                </Grid>
            </Center>
        </>
    )
}
