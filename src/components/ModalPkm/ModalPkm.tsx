import { PkmInterface } from '@/interfaces/PkmInterface'
import { StarIcon } from '@chakra-ui/icons'
import {
   Box,
   Heading,
   IconButton,
   Image,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalHeader,
   ModalOverlay,
   Stack,
   StackDivider,
   Text,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function ModalPkm({
   pkmSelected,
}: {
   pkmSelected: PkmInterface
}) {
   const [showSprite, setShowSprite] = useState(true)

   return (
      <>
         <ModalOverlay backdropFilter="blur(10px)" />
         <ModalContent paddingBottom={2}>
            <ModalHeader>{pkmSelected.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               {showSprite && (
                  <Image
                     alt={pkmSelected.name}
                     src={
                        pkmSelected.sprites.other['official-artwork']
                           .front_default
                     }
                  />
               )}
               {!showSprite && (
                  <Image
                     alt={pkmSelected.name}
                     src={
                        pkmSelected.sprites.other['official-artwork']
                           .front_shiny
                     }
                  />
               )}
               <Stack direction={'row'} justifyContent={'end'}>
                  <IconButton
                     icon={<StarIcon />}
                     colorScheme="yellow"
                     aria-label="Shiny Pkm"
                     onClick={() => setShowSprite(!showSprite)}
                  />
               </Stack>
               <Stack divider={<StackDivider />} spacing="2">
                  <Box>
                     <Heading size="xs" textTransform="uppercase">
                        ID
                     </Heading>
                     <Text pt="2" fontSize="sm">
                        {pkmSelected.id}
                     </Text>
                  </Box>
                  <Box>
                     <Heading size="xs" textTransform="uppercase">
                        Altura
                     </Heading>
                     <Text pt="2" fontSize="sm">
                        {pkmSelected.height}m
                     </Text>
                  </Box>
                  <Box>
                     <Heading size="xs" textTransform="uppercase">
                        Peso
                     </Heading>
                     <Text pt="2" fontSize="sm">
                        {pkmSelected.weight}kg
                     </Text>
                  </Box>
                  <Box>
                     <Heading size="xs" textTransform="uppercase">
                        Tipagem
                     </Heading>
                     <Stack direction={'row'} spacing={1}>
                        {pkmSelected.types.map((type, index) => {
                           return (
                              <Text
                                 key={type.slot}
                                 textTransform="capitalize"
                                 fontSize="sm"
                                 pt="2"
                              >
                                 {index > 0 && '& '}
                                 {type.type.name}
                              </Text>
                           )
                        })}
                     </Stack>
                  </Box>
               </Stack>
            </ModalBody>
         </ModalContent>
      </>
   )
}

{
   /* {pkmSelected && (
            <Modal
               isOpen={isOpenModal}
               onClose={onCloseModal}
               motionPreset="slideInRight"
               allowPinchZoom
               size={{
                  base: 'xs',
                  sm: 'sm',
                  md: 'md',
               }}
            >
               <ModalOverlay backdropFilter="blur(10px)" />
               <ModalContent paddingBottom={2}>
                  <ModalHeader>{pkmSelected.name}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                     {showSprite && (
                        <Image
                           alt={pkmSelected.name}
                           src={
                              pkmSelected.sprites.other['official-artwork']
                                 .front_default
                           }
                        />
                     )}
                     {!showSprite && (
                        <Image
                           alt={pkmSelected.name}
                           src={
                              pkmSelected.sprites.other['official-artwork']
                                 .front_shiny
                           }
                        />
                     )}
                     <Stack direction={'row'} justifyContent={'end'}>
                        <IconButton
                           icon={<StarIcon />}
                           colorScheme="yellow"
                           aria-label="Shiny Pkm"
                           onClick={() => setShowSprite(!showSprite)}
                        />
                     </Stack>
                     <Stack divider={<StackDivider />} spacing="2">
                        <Box>
                           <Heading size="xs" textTransform="uppercase">
                              ID
                           </Heading>
                           <Text pt="2" fontSize="sm">
                              {pkmSelected.id}
                           </Text>
                        </Box>
                        <Box>
                           <Heading size="xs" textTransform="uppercase">
                              Altura
                           </Heading>
                           <Text pt="2" fontSize="sm">
                              {pkmSelected.height}m
                           </Text>
                        </Box>
                        <Box>
                           <Heading size="xs" textTransform="uppercase">
                              Peso
                           </Heading>
                           <Text pt="2" fontSize="sm">
                              {pkmSelected.weight}kg
                           </Text>
                        </Box>
                        <Box>
                           <Heading size="xs" textTransform="uppercase">
                              Tipagem
                           </Heading>
                           <Stack direction={'row'} spacing={1}>
                              {pkmSelected.types.map((type, index) => {
                                 return (
                                    <Text
                                       key={type.slot}
                                       textTransform="capitalize"
                                       fontSize="sm"
                                       pt="2"
                                    >
                                       {index > 0 && '& '}
                                       {type.type.name}
                                    </Text>
                                 )
                              })}
                           </Stack>
                        </Box>
                     </Stack>
                  </ModalBody>
               </ModalContent>
            </Modal>
         )} */
}
