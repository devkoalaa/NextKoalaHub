import { PkmInterface } from '@/interfaces/PkmInterface'
import { Container, Image, Select } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function PokemonDetail() {
    const URL_API = 'https://pokeapi.co/api/v2/pokemon/'
    const router = useRouter()
    const idPkm = router.asPath.split('/')[2]
    const [pkm, setPkm] = useState<PkmInterface>()
    const [spriteUrl, setSpriteUrl] = useState<string>()

    useEffect(() => {
        searchPkm()
    }, [])

    function searchPkm() {
        fetch(URL_API + idPkm).then((response) => {
            response.json().then((data) => {
                setPkm({
                    ...data,
                    name: data.name[0].toUpperCase() + data.name.substring(1),
                })
            })
        })
    }

    function handleSprite(valueSelected: any) {
        console.log('valueSelected: ', valueSelected)

        if (pkm && valueSelected == 0) {
            setSpriteUrl(pkm?.sprites.front_default)
        }

        if (pkm && valueSelected == 1) {
            setSpriteUrl(pkm?.sprites.other['official-artwork'].front_default)
        }

        if (pkm && valueSelected == 2) {
            setSpriteUrl(pkm?.sprites.other['official-artwork'].front_shiny)
        }
    }

    return (
        <Container p={5}>
            <Select
                onChange={(e) => handleSprite(e.target.value)}
                placeholder="Escolha um Sprite"
            >
                <option value={0}>Ingame</option>
                <option value={1}>Arte Oficial</option>
                <option value={2}>Arte Oficial Shiny</option>
            </Select>
            {spriteUrl && pkm && <Image alt={pkm.name} src={spriteUrl} />}
        </Container>
    )
}
