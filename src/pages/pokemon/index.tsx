import { CustomInput } from '@/components/CustomInput'
import { useEffect, useState, useRef } from 'react'

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

    const inputRef = useRef(null)

    function pesquisarPokemon() {
        inputRef.current.value & setPokemonBuscado(inputRef.current.value)
        
        fetch(URL_API + pokemonBuscado).then((response) => {
            response.json().then((data) => {
                setPokemon(data)
                console.log('pokemon: ', data)
            })
        })
    }

    return (
        <>
            <div>
                <h1>Pokémon!</h1>
                <label>Qual Pokémon deseja</label>
             </div>
             <div>
                <input ref={inputRef} placeholder="Nome do Pokémon"/>
            </div>
            <div>
                <button onClick={pesquisarPokemon}>PESQUISAR</button>
            </div>
            {pokemon && <img src={pokemon.sprites.front_default} />}
        </>
    )
}
