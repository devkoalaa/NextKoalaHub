// import { CustomInput } from '@/components/CustomInput'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import s from './style.module.scss'
import * as SSPLIB from '@ssplib/react-components'
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

export default function Pokemon() {
    const [pokemon, setPokemon] = useState<PokemonInterface>()
    const [pokemonBuscado, setPokemonBuscado] = useState('')

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
        // // console.log(pokemon)
    }, [pokemon])

    return (
        <div className={s.container}>
            <div className={s.box}>
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
                {pokemon && <h1>{pokemon.name}</h1>}
                {pokemon && (
                    <Image
                        src={
                            pokemon.sprites.other['official-artwork']
                                .front_default
                        }
                        alt={pokemon.name}
                        width={200}
                        height={200}
                    />
                )}
            </div>
        </div>
    )
}
