import { useEffect, useState } from 'react'

interface iPokemon {
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
}

export default function Pokemon() {
    const [pokemon, setPokemon] = useState<iPokemon>()

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
        <div>
            <h1>Pokémon!</h1>
            {/* {if (pokemon != null) {<h2>{pokemon.name}</h2>}} */}
        </div>
    )
}
