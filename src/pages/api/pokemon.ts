import { PkmInterface } from '@/interfaces/PkmInterface'
import { useState } from 'react'

export function PokemonApi(id: string) {
    const URL_API = 'https://pokeapi.co/api/v2/pokemon/'
    const [pkm, setPkm] = useState<PkmInterface>()

    fetch(URL_API + id).then((response) => {
        response.json().then((data) => {
            setPkm({
                ...data,
                name: data.name[0].toUpperCase() + data.name.substring(1),
            })
        })
    })

    console.log('pkm: ', pkm)

    return pkm
}
