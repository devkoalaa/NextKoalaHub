/* eslint-disable @next/next/no-img-element */
import * as React from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import {
    Box,
    Container,
    CssBaseline,
    TextField,
    ThemeProvider,
} from '@mui/material'
import styles from './style.module.scss'
import { dark } from '@mui/material/styles/createPalette'
import { useCallback, useEffect, useState } from 'react'

interface PokemonInterface {
    name: string
    id?: number
    types?: [
        {
            slot: number
            type: {
                name: string
            }
        }
    ]
    sprites?: {
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
    const [pokemon, setPokemon] = useState<PokemonInterface>()
    const [pokemonBuscado, setPokemonBuscado] = useState('')
    const [listPkm, setListPkm] = useState<PokemonInterface[]>([])

    const pesquisarPokemon = (event: any) => {
        event.preventDefault()

        if (pokemonBuscado) {
            fetch(URL_API + pokemonBuscado).then((response) => {
                response.json().then((data) => {
                    setPokemon({
                        ...data,
                        name:
                            data.name[0].toUpperCase() + data.name.substring(1),
                    })
                })
            })
        }

        setPokemonBuscado('')
    }

    useEffect(() => {
        pokemon && setListPkm((d) => [...d, pokemon])
    }, [pokemon])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ height: '100vh', margin: '15px' }}>
                    <form onSubmit={pesquisarPokemon}>
                        <TextField
                            sx={{ marginBottom: '10px' }}
                            id="outlined-search"
                            label="Buscar Pokémon!"
                            type="search"
                            onChange={(e) =>
                                setPokemonBuscado(e.target.value.toLowerCase())
                            }
                            value={pokemonBuscado}
                        />
                    </form>
                    <ImageList sx={{ width: 500, height: 'fill' }}>
                        {listPkm.map((item, index) => (
                            <ImageListItem key={item.name + index}>
                                <img
                                    src={
                                        item.sprites?.other['official-artwork']
                                            .front_default
                                    }
                                    alt={item.name}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title={item.name}
                                    position="below"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Container>
        </React.Fragment>
    )
}
