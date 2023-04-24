import { CustomInput } from '@/components/CustomInput'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

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
    }
}

export default function Pokemon() {
    const [pokemon, setPokemon] = useState<PokemonInterface>()
    const [pokemonBuscado, setPokemonBuscado] = useState('')

    const URL_API = 'https://pokeapi.co/api/v2/pokemon/'

    const pesquisarPokemon = (event: any) => {
        event.preventDefault()

        if (pokemonBuscado) {
            fetch(URL_API + pokemonBuscado).then((response) => {
                response.json().then((data) => {
                    setPokemon(data)
                })
            })
        }

        setPokemonBuscado('')
    }

    useEffect(() => {
        console.log('Pokemon: ', pokemon)
    }, [pokemon])

    return (
        <>
            <div>
                <h1>Pokémon!</h1>
                <label>Qual Pokémon deseja buscar</label>
            </div>
            <div>
                <form onSubmit={pesquisarPokemon}>
                    <input
                        onChange={(e) => setPokemonBuscado(e.target.value)}
                        placeholder="Nome do Pokémon"
                        value={pokemonBuscado}
                    />
                    &nbsp;
                    <button type="submit">PESQUISAR</button>
                </form>
            </div>
            {pokemon && <img src={pokemon.sprites.front_default} />}
            {pokemon && <h1>{pokemon.name}</h1>}
        </>
    )
}
