import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import {
   Badge,
   Box,
   Button,
   Center,
   Container,
   FormControl,
   FormErrorMessage,
   FormHelperText,
   Grid,
   GridItem,
   Image,
   Input,
   Stack,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { PkmInterface } from '../../interfaces/PkmInterface'
import { PokemonApi } from '../api/pokemon'
import s from './styles.module.scss'

export default function Pokemon() {
   const [pkm, setPkm] = useState<PkmInterface>()
   const [listPkm, setListPkm] = useState<PkmInterface[]>([])
   const [searchedPkm, setSearchedPkm] = useState('')
   const [isError, setIsError] = useState(false)
   const [isSubmitting, setIsSubmitting] = useState(false)

   useEffect(() => {
      const storageListPkm = localStorage.getItem('@NKH:listPkm')
      storageListPkm && setListPkm(JSON.parse(storageListPkm))
   }, [])

   useEffect(() => {
      if (listPkm.length <= 0) return
      localStorage.setItem('@NKH:listPkm', JSON.stringify(listPkm))
      setIsSubmitting(false)
   }, [listPkm])

   const searchPkm = async (event: any) => {
      event.preventDefault()

      setIsSubmitting(true)

      const result = await PokemonApi(searchedPkm)

      result.hasOwnProperty('abilities') && setPkm(result)
      result.hasOwnProperty('isError') && setIsSubmitting(result.isSubmitting),
         setIsError(result.isError)

      // setPkm(await PokemonApi(searchedPkm))

      setSearchedPkm('')
   }

   const searchPkm2 = async () => {
      setIsSubmitting(true)

      const result = await PokemonApi(searchedPkm)

      result.hasOwnProperty('abilities') && setPkm(result)
      result.hasOwnProperty('isError') && setIsSubmitting(result.isSubmitting),
         setIsError(result.isError)

      // setPkm(await PokemonApi(searchedPkm))

      setSearchedPkm('')
   }

   useEffect(() => {
      pkm && setListPkm((e) => [pkm, ...e])
   }, [pkm])

   const handleKey = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
         searchPkm2()
      }
   }

   return (
      <Container paddingBottom={5}>
         <Head>
            <title>Koala Hub | Pokemon</title>
         </Head>
         <FormControl isInvalid={isError} onSubmit={searchPkm}>
            <Stack direction={'row'} paddingY="20px">
               <Stack>
                  <Input
                     autoFocus
                     onFocus={() => setIsError(false)}
                     value={searchedPkm}
                     placeholder="Adicionar Pokémon!"
                     onChange={(e) =>
                        setSearchedPkm(e.target.value.toLowerCase())
                     }
                     onKeyUp={(e) => handleKey(e)}
                  />
                  {isError && (
                     <FormErrorMessage>Pokémon não encontrado</FormErrorMessage>
                  )}
               </Stack>
               <Button
                  colorScheme="blue"
                  onClick={searchPkm}
                  isLoading={isSubmitting}
               >
                  <AddIcon />
               </Button>
               <Button
                  colorScheme="red"
                  onClick={() => {
                     setListPkm([]), localStorage.clear()
                  }}
               >
                  <DeleteIcon />
               </Button>
            </Stack>
         </FormControl>
         <Container>
            <Center>
               <Grid
                  templateColumns={{
                     base: 'repeat(2, 1fr)',
                     sm: 'repeat(3, 1fr)',
                     md: 'repeat(4, 1fr)',
                     lg: 'repeat(5, 1fr)',
                     xl: 'repeat(6, 1fr)',
                     '2xl': 'repeat(8, 1fr)',
                  }}
                  gap={3}
               >
                  {listPkm &&
                     listPkm.map((pkm, index) => {
                        return (
                           // <a href={'pokemon/' + pkm.id.toString()} key={index}>
                           <div key={index}>
                              <GridItem className={s.container}>
                                 <div className={s.front}>
                                    <Box borderWidth="1px" borderRadius="lg">
                                       <Image
                                          src={
                                             pkm.sprites.other[
                                                'official-artwork'
                                             ].front_default
                                          }
                                          alt={pkm.name}
                                       />
                                       <Box p="2">
                                          <Box
                                             className={s.type}
                                             alignItems="space-between"
                                          >
                                             <Stack direction={'row'}>
                                                {pkm.types.map((type) => {
                                                   return (
                                                      <Badge
                                                         borderRadius="full"
                                                         colorScheme="teal"
                                                         px="2"
                                                         key={type.slot}
                                                      >
                                                         {type.type.name}
                                                      </Badge>
                                                   )
                                                })}
                                             </Stack>
                                          </Box>
                                          <Box
                                             fontWeight="semibold"
                                             lineHeight="tight"
                                             noOfLines={1}
                                             as="h4"
                                             ml="2"
                                          >
                                             {pkm.name}
                                          </Box>
                                       </Box>
                                    </Box>
                                 </div>
                                 <div className={s.back}>
                                    <Box borderWidth="1px" borderRadius="lg">
                                       <Image
                                          src={
                                             pkm.sprites.other[
                                                'official-artwork'
                                             ].front_shiny
                                          }
                                          alt={pkm.name}
                                       />
                                       <Box p="2">
                                          <Box
                                             className={s.type}
                                             alignItems="space-between"
                                          >
                                             <Stack direction={'row'}>
                                                {pkm.types.map((type) => {
                                                   return (
                                                      <Badge
                                                         borderRadius="full"
                                                         colorScheme="teal"
                                                         px="2"
                                                         key={type.slot}
                                                      >
                                                         {type.type.name}
                                                      </Badge>
                                                   )
                                                })}
                                             </Stack>
                                          </Box>
                                          <Box
                                             fontWeight="semibold"
                                             lineHeight="tight"
                                             noOfLines={1}
                                             as="h4"
                                             ml="2"
                                          >
                                             {pkm.name}
                                          </Box>
                                       </Box>
                                    </Box>
                                 </div>
                              </GridItem>
                           </div>
                        )
                     })}
               </Grid>
            </Center>
         </Container>
      </Container>
   )
}
