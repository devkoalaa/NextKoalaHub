import ModalPkm from '@/components/ModalPkm/index'
import { DeleteIcon, QuestionIcon, SearchIcon } from '@chakra-ui/icons'
import {
   AlertDialog,
   AlertDialogBody,
   AlertDialogCloseButton,
   AlertDialogContent,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogOverlay,
   Badge,
   Box,
   Button,
   Center,
   Container,
   FormControl,
   FormErrorMessage,
   Grid,
   GridItem,
   IconButton,
   Image,
   Input,
   Modal,
   ScaleFade,
   Skeleton,
   Stack,
   useDisclosure,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import PkmInterface from '@/interfaces/PkmInterface'
import PokemonApi from '../api/pokemon'
import s from './styles.module.scss'

export default function Pokemon() {
   const [pkm, setPkm] = useState<PkmInterface>()
   const [pkmSelected, setPkmSelected] = useState<PkmInterface>()
   const [listPkm, setListPkm] = useState<PkmInterface[]>([])
   const [searchedPkm, setSearchedPkm] = useState('')
   const [isLoaded, setIsLoaded] = useState(false)
   const [isError, setIsError] = useState(false)
   const [errorMsg, setErrorMsg] = useState('')
   const [focusBorderColor, setFocusBorderColor] = useState('blue.300')
   const [btnAddPkmSubmitting, setBtnAddPkmSubmitting] = useState(false)
   const [btnRdmPkmSubmitting, setBtnRdmPkmSubmitting] = useState(false)
   const { isOpen: isOpenFade, onOpen: onOpenFade } = useDisclosure()
   const cancelRef = useRef<any>()
   const {
      isOpen: isOpenDialog,
      onOpen: onOpenDialog,
      onClose: onCloseDialog,
   } = useDisclosure()
   const {
      isOpen: isOpenModal,
      onOpen: onOpenModal,
      onClose: onCloseModal,
   } = useDisclosure()

   useEffect(() => {
      const storageListPkm = localStorage.getItem('@NKH:listPkm')
      if (storageListPkm) {
         setListPkm(JSON.parse(storageListPkm))
      }
      setTimeout(() => {
         setIsLoaded(true)
      }, 1000)
   }, [])

   useEffect(() => {
      pkm && setListPkm((e) => [...e, pkm])
   }, [pkm])

   useEffect(() => {
      if (listPkm.length <= 0) return
      localStorage.setItem('@NKH:listPkm', JSON.stringify(listPkm))
      onOpenFade()
   }, [listPkm, onOpenFade])

   useEffect(() => {
      isError && setFocusBorderColor('red.300')
      !isError && setFocusBorderColor('blue.300')
   }, [isError])

   const searchPkm = async (event: any) => {
      event.preventDefault()
      setBtnAddPkmSubmitting(true)

      if (!searchedPkm) {
         setIsError(true)
         setErrorMsg('Digite o nome do Pokémon')
      }

      if (searchedPkm) {
         const result = await PokemonApi(searchedPkm)

         if (result.hasOwnProperty('isError')) {
            setIsError(result.isError)
            setErrorMsg(result.errorMsg)
         }

         if (result.hasOwnProperty('id')) {
            setPkm(result)
            setSearchedPkm('')
         }
      }

      setBtnAddPkmSubmitting(false)
      setIsLoaded(true)
   }

   const addRandomPkm = async (id: string) => {
      setBtnRdmPkmSubmitting(true)
      const result = await PokemonApi(id)
      setPkm(result)
      setBtnRdmPkmSubmitting(false)
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
                        focusBorderColor={focusBorderColor}
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
                     icon={<SearchIcon />}
                     colorScheme="blue"
                     isLoading={btnAddPkmSubmitting}
                     aria-label="Add Pkm"
                     onClick={searchPkm}
                  />
                  <IconButton
                     icon={<QuestionIcon />}
                     colorScheme="yellow"
                     aria-label="Random Pkm"
                     isLoading={btnRdmPkmSubmitting}
                     onClick={() => {
                        addRandomPkm(
                           (Math.floor(Math.random() * 1000) + 1).toString()
                        )
                     }}
                  />
                  <IconButton
                     icon={<DeleteIcon />}
                     colorScheme="red"
                     aria-label="Delete All Pkm"
                     isDisabled={listPkm.length <= 0}
                     onClick={() => {
                        onOpenDialog()
                     }}
                  />
                  {/* <IconButton
                     icon={<QuestionIcon />}
                     colorScheme="green"
                     aria-label="---"
                     onClick={() => {
                        onOpenModal()
                     }}
                  /> */}
               </Stack>
            </form>
         </FormControl>

         <AlertDialog
            size={{
               base: 'xs',
               sm: 'sm',
               md: 'md',
            }}
            leastDestructiveRef={cancelRef}
            onClose={onCloseDialog}
            isOpen={isOpenDialog}
            motionPreset="slideInBottom"
            isCentered
         >
            <AlertDialogOverlay backdropFilter="blur(10px)" />
            <AlertDialogContent>
               <AlertDialogHeader>Limpar lista</AlertDialogHeader>
               <AlertDialogCloseButton />
               <AlertDialogBody>
                  Tem certeza que deseja limpar a lista de Pokémons?
               </AlertDialogBody>
               <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onCloseDialog}>
                     Não
                  </Button>
                  <Button
                     colorScheme="red"
                     ml={3}
                     onClick={() => {
                        localStorage.setItem('@NKH:listPkm', ''),
                           setListPkm([]),
                           onCloseDialog()
                     }}
                  >
                     Sim
                  </Button>
               </AlertDialogFooter>
            </AlertDialogContent>
         </AlertDialog>

         {pkmSelected && (
            <Modal
               isOpen={isOpenModal}
               onClose={onCloseModal}
               motionPreset="slideInRight"
               blockScrollOnMount={false}
               size={{
                  base: 'xs',
                  sm: 'sm',
                  md: 'md',
               }}
            >
               <ModalPkm pkmSelected={pkmSelected} />
            </Modal>
         )}

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
                        <ScaleFade key={index} initialScale={5} in={isOpenFade}>
                           <Skeleton
                              isLoaded={isLoaded}
                              fadeDuration={1}
                              borderRadius="lg"
                           >
                              <GridItem
                                 className={s.container}
                                 onClick={() => {
                                    onOpenModal(), setPkmSelected(pkm)
                                 }}
                              >
                                 <Box
                                    className={s.front}
                                    borderWidth="1px"
                                    borderRadius="lg"
                                 >
                                    <Image
                                       fallbackSrc="/imgPlaceHolder.png"
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
                                       fallbackSrc="/imgPlaceHolder.png"
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
                           </Skeleton>
                        </ScaleFade>
                     )
                  })}
            </Grid>
         </Center>
      </Container>
   )
}
