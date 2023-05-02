import { PkmInterface } from '@/interfaces/PkmInterface'
import { Center, Container, Image, Select } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { PokemonApi } from '../api/pokemon'

export default function PokemonDetail() {
   const router = useRouter()
   const idPkm = router.asPath.split('/')[2]
   const [pkm, setPkm] = useState<PkmInterface>()
   const [spriteSize, setSpriteSize] = useState('')
   const [spriteUrl, setSpriteUrl] = useState<string>()

   useEffect(() => {
      idPkm != '[id]' && searchPkm(idPkm)
   }, [idPkm])

   const searchPkm = async (id: string) => {
      setPkm(await PokemonApi(id))
   }

   useEffect(() => {
      pkm && setSpriteUrl(pkm.sprites.other['official-artwork'].front_default)

      //   pkm && console.log('galinha: ', Object.keys(pkm.sprites))

      if (pkm) {
         console.log(
            Object.keys(pkm.sprites).filter((p) => {
               if (p === 'other') Object.keys((pkm.sprites as any)['other'])

               console.log((pkm.sprites as any)[p])

               return (pkm.sprites as any)[p] !== null
            })
         )
      }
   }, [pkm])

   function handleSprite(valueSelected: any) {
      if (!pkm) return
      switch (valueSelected) {
         case 0:
            setSpriteUrl(pkm.sprites.front_default)
            setSpriteSize('200px')
            break
         case 1:
            setSpriteUrl(pkm.sprites.other['official-artwork'].front_default)
            setSpriteSize('')
            break
         case 2:
            setSpriteUrl(pkm.sprites.other['official-artwork'].front_shiny)
            setSpriteSize('')
            break
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
