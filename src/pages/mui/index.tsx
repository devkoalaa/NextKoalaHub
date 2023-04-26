/* eslint-disable @next/next/no-img-element */
import {
    Box,
    Button,
    Container,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Stack,
    TextField,
} from '@mui/material'
import { Fragment, useEffect, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

interface PokemonInterface {
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
        other: {
            'official-artwork': {
                front_default: string
            }
        }
    }
}

const URL_API = 'https://pokeapi.co/api/v2/pokemon/'

export default function Mui() {
    const [pkmSearched, setPkmSearched] = useState('')
    const [pkm, setPkm] = useState<PokemonInterface>()
    const [listPkm, setListPkm] = useState<PokemonInterface[]>([])

    useEffect(() => {
        const storageListPkm = localStorage.getItem('@NKH:listPkm')
        storageListPkm && setListPkm(JSON.parse(storageListPkm))
    }, [])

    useEffect(() => {
        if (listPkm.length <= 0) return
        localStorage.setItem('@NKH:listPkm', JSON.stringify(listPkm))
    }, [listPkm])

    const searchPkm = (event: any) => {
        event.preventDefault()

        pkmSearched &&
            fetch(URL_API + pkmSearched).then((response) => {
                response.json().then((data) => {
                    setPkm({
                        ...data,
                        name:
                            data.name[0].toUpperCase() + data.name.substring(1),
                    })
                })
            })

        setPkmSearched('')
    }

    useEffect(() => {
        pkm && setListPkm((d) => [...d, pkm])
    }, [pkm])

    return (
        <Fragment>
            <Container maxWidth="sm">
                <Box sx={{ height: '100vh', margin: '15px' }}>
                    <form onSubmit={searchPkm}>
                        <Stack direction="row" spacing={2}>
                            <TextField
                                sx={{ marginBottom: '10px' }}
                                label="Buscar Pokémon!"
                                type="search"
                                value={pkmSearched}
                                onChange={(e) =>
                                    setPkmSearched(e.target.value.toLowerCase())
                                }
                            />
                            <Button
                                size="small"
                                color="secondary"
                                startIcon={<DeleteIcon />}
                                onClick={() => {
                                    localStorage.clear(), setListPkm([])
                                }}
                            >
                                Limpar
                            </Button>
                        </Stack>
                    </form>
                    <ImageList>
                        {listPkm.map((pkm, index) => (
                            <ImageListItem key={pkm.name + index}>
                                <img
                                    src={
                                        pkm.sprites.other['official-artwork']
                                            .front_default
                                    }
                                    alt={pkm.name}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={pkm.name}
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Container>
        </Fragment>
    )
}
