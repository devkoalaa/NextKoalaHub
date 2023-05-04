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
   IconButton,
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
   const [errorMsg, setErrorMsg] = useState('')
   const [isError, setIsError] = useState(false)
   const [isSubmitting, setIsSubmitting] = useState(false)

   useEffect(() => {
      const storageListPkm = localStorage.getItem('@NKH:listPkm')
      storageListPkm && setListPkm(JSON.parse(storageListPkm))
   }, [])

   useEffect(() => {
      pkm && setListPkm((e) => [pkm, ...e])
   }, [pkm])

   useEffect(() => {
      if (listPkm.length <= 0) return
      localStorage.setItem('@NKH:listPkm', JSON.stringify(listPkm))
   }, [listPkm])

   const searchPkm = async (event: any) => {
      event.preventDefault()
      setIsSubmitting(true)
      !searchedPkm && setIsError(true), setErrorMsg('Digite o nome do Pokémon')

      if (searchedPkm) {
         const result = await PokemonApi(searchedPkm)

         if (result.hasOwnProperty('isError')) {
            setIsError(result.isError)
            setErrorMsg(result.errorMsg)
         }

         if (result.hasOwnProperty('abilities')) {
            setPkm(result)
            setSearchedPkm('')
         }
      }

      setIsSubmitting(false)
   }

   return (
      <Container paddingBottom={5}>
         <Head>
            <title>Koala Hub | Pokemon</title>
         </Head>
         <FormControl isInvalid={isError}>
            <form onSubmit={searchPkm}>
               <Stack direction={'row'} paddingY="20px">
                  <Stack width={'100%'}>
                     <Input
                        autoFocus
                        onFocus={() => setIsError(false)}
                        value={searchedPkm}
                        placeholder="Adicionar Pokémon!"
                        onChange={(e) => {
                           setSearchedPkm(e.target.value.toLowerCase()),
                              setIsError(false)
                        }}
                     />
                     {isError && (
                        <FormErrorMessage>{errorMsg}</FormErrorMessage>
                     )}
                  </Stack>
                  <IconButton
                     icon={<AddIcon />}
                     colorScheme="blue"
                     isLoading={isSubmitting}
                     aria-label="Add Pkm"
                     onClick={searchPkm}
                  />
                  <IconButton
                     icon={<DeleteIcon />}
                     colorScheme="red"
                     aria-label="Delete All Pkm"
                     onClick={() => {
                        setListPkm([]), localStorage.clear()
                     }}
                  />
               </Stack>
            </form>
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
                           <GridItem key={index} className={s.container}>
                              <Box
                                 className={s.front}
                                 borderWidth="1px"
                                 borderRadius="lg"
                              >
                                 <Image
                                    p={2}
                                    alt={pkm.name}
                                    src={
                                       pkm.sprites.other['official-artwork']
                                          .front_default
                                    }
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
                                    <Box fontWeight="semibold" ml="2">
                                       {pkm.name}
                                    </Box>
                                 </Box>
                              </Box>
                              <Box
                                 className={s.back}
                                 borderWidth="1px"
                                 borderRadius="lg"
                              >
                                 <Image
                                    p={2}
                                    alt={pkm.name}
                                    src={
                                       pkm.sprites.other['official-artwork']
                                          .front_shiny
                                    }
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
                                    <Box fontWeight="semibold" ml="2">
                                       {pkm.name}
                                    </Box>
                                 </Box>
                              </Box>
                           </GridItem>
                        )
                     })}
               </Grid>
            </Center>
         </Container>
      </Container>
   )
}
