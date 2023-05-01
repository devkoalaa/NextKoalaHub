import {
    Badge,
    Box,
    Button,
    Center,
    Container,
    Grid,
    GridItem,
    Image,
    Input,
    Stack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import s from './styles.module.scss'
import { PokemonApi } from '../api/pokemon'
import { PkmInterface } from '../../interfaces/PkmInterface'

// interface PkmInterface {
//     name: string
//     id: number
//     types: [
//         {
//             slot: number
//             type: {
//                 name: string
//             }
//         }
//     ]
//     sprites: {
//         front_default: string
//         front_shiny: string
//         other: {
//             'official-artwork': {
//                 front_default: string
//                 front_shiny: string
//             }
//         }
//     }
// }

export default function Pokemon() {
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

        // setPkm(PokemonApi(searchedPkm))

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
        <Container>
            <Container>
                <form onSubmit={searchPkm}>
                    <Stack direction={'row'} paddingY="10px">
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
            </Container>
            <Container>
                <Center>
                    <Grid
                        templateColumns={{
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(5, 1fr)',
                        }}
                        gap={3}
                    >
                        {listPkm &&
                            listPkm.map((pkm, index) => {
                                return (
                                    <a
                                        href={'pokemon/' + pkm.id.toString()}
                                        key={index}
                                    >
                                        <GridItem className={s.container}>
                                            <div className={s.front}>
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
                                                            <Stack
                                                                direction={
                                                                    'row'
                                                                }
                                                            >
                                                                {pkm.types.map(
                                                                    (type) => {
                                                                        return (
                                                                            <Badge
                                                                                borderRadius="full"
                                                                                colorScheme="teal"
                                                                                px="2"
                                                                                key={
                                                                                    type.slot
                                                                                }
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
                                                        </Box>
                                                        <Box
                                                            fontWeight="semibold"
                                                            lineHeight="tight"
                                                            noOfLines={1}
                                                            as="h4"
                                                            ml="2"
                                                        >
                                                            {pkm.name}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </div>
                                            <div className={s.back}>
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
                                                            alignItems="space-between"
                                                            display="flex"
                                                        >
                                                            <Stack
                                                                direction={
                                                                    'row'
                                                                }
                                                            >
                                                                {pkm.types.map(
                                                                    (type) => {
                                                                        return (
                                                                            <Badge
                                                                                borderRadius="full"
                                                                                colorScheme="teal"
                                                                                px="2"
                                                                                key={
                                                                                    type.slot
                                                                                }
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
                                                        </Box>
                                                        <Box
                                                            fontWeight="semibold"
                                                            lineHeight="tight"
                                                            noOfLines={1}
                                                            as="h4"
                                                            mt="1"
                                                        >
                                                            {pkm.name}
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </div>
                                        </GridItem>
                                    </a>
                                )
                            })}
                    </Grid>
                </Center>
            </Container>
        </Container>
    )
}
