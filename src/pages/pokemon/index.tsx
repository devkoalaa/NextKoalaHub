import { CustomInput } from '@/components/BotaoCu'
import { useEffect, useState } from 'react'

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
    const [pokemonBuscado, setPokemonUsado] = useState('')

    const URL_API = 'https://pokeapi.co/api/v2/pokemon/ditto'

    useEffect(() => {
        fetch(URL_API).then((response) => {
            response.json().then((data) => {
                setPokemon(data)
                console.log('pokemon: ', data)
                console.log('var pokemon: ', pokemon)
            })
        })
    }, [])

    return (
        <>
            <div>
                <h1>Pokémon!</h1>
                <CustomInput
                    title="Qual Pokémon deseja buscar?"
                    placeholder="Digite o nome do Pokémon"
                    type="text"
                />
                <CustomInput
                    title="Qual Pokémon deseja buscar?"
                    placeholder="Digite o nome do Pokémon"
                    type="text"
                />
            </div>
            <div>{pokemon && <img src={pokemon.sprites.front_default} />}</div>
        </>
    )
}
