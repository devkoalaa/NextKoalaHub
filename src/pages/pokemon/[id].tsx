import { PkmInterface } from '@/interfaces/PkmInterface'
import { Center, Container, Image, Select } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function PokemonDetail() {
    const router = useRouter()
    const idPkm = router.asPath.split('/')[2]
    const [pkm, setPkm] = useState<PkmInterface>()
    const [spriteSize, setSpriteSize] = useState('')
    const [spriteUrl, setSpriteUrl] = useState<string>()
    const URL_API = 'https://pokeapi.co/api/v2/pokemon/'

    useEffect(() => {
        idPkm != '[id]' &&
            fetch(URL_API + idPkm).then((response) => {
                response.json().then((data) => {
                    setPkm({
                        ...data,
                        name:
                            data.name[0].toUpperCase() + data.name.substring(1),
                    })
                })
            })
    }, [idPkm])

    useEffect(() => {
        pkm &&
            setSpriteUrl(pkm?.sprites.other['official-artwork'].front_default)

        // pkm && console.log('galinha: ', Object.keys(pkm.sprites))

        if (pkm) {
            for (var item in pkm.sprites) {
                if (item == null) {
                    console.log('é null: ', item)
                } else {
                    console.log('fodase: ', item)
                }
            }
        }
    }, [pkm])

    function handleSprite(valueSelected: any) {
        if (pkm && valueSelected == 0) {
            setSpriteUrl(pkm.sprites.front_default)
            setSpriteSize('200px')
        }

        if (pkm && valueSelected == 1) {
            setSpriteUrl(pkm.sprites.other['official-artwork'].front_default)
            setSpriteSize('')
        }

        if (pkm && valueSelected == 2) {
            setSpriteUrl(pkm.sprites.other['official-artwork'].front_shiny)
            setSpriteSize('')
        }
    }

    return (
        <Container p={5}>
            <Select
                onChange={(e) => handleSprite(e.target.value)}
                placeholder="Escolha um Sprite"
                defaultValue={1}
            >
                <option value={0}>Ingame</option>
                <option value={1}>Arte Oficial</option>
                <option value={2}>Arte Oficial Shiny</option>
            </Select>
            <Center>
                {spriteUrl && pkm && (
                    <Image alt={pkm.name} width={spriteSize} src={spriteUrl} />
                )}
            </Center>
        </Container>
    )
}
