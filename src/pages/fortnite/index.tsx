import FortPlayerInterface from '@/interfaces/FortPlayerInterface'
import { SearchIcon } from '@chakra-ui/icons'
import {
   Container,
   IconButton,
   Input,
   Stack,
   StackDivider,
   Stat,
   StatLabel,
   StatNumber,
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
   Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { FortGetAll, FortGetSeason } from '../api/fortnite'
import styles from './style.module.scss'

export default function Fortnite() {
   const [playerSeason, setPlayerSeason] = useState<FortPlayerInterface>()
   const [playerAll, setPlayerAll] = useState<FortPlayerInterface>()
   const [searchedPlayer, setSearchedPlayer] = useState('')

   const handleSearchPlayer = async (event: any) => {
      event.preventDefault()

      if (searchedPlayer) {
         setSearchedPlayer('')

         const resultSeason = (await FortGetSeason(
            searchedPlayer
         )) as FortPlayerInterface

         const resultAll = (await FortGetAll(
            searchedPlayer
         )) as FortPlayerInterface

         if (resultSeason.hasOwnProperty('data')) {
            console.log(resultSeason)
            setPlayerSeason(resultSeason)
         }

         if (resultSeason.hasOwnProperty('error')) {
            console.log(resultSeason)
         }
      }
   }

   return (
      <Container paddingY={2}>
         <form onSubmit={handleSearchPlayer}>
            <Stack direction="row">
               <Input
                  placeholder="Pesquisar player"
                  value={searchedPlayer}
                  onChange={(e) => setSearchedPlayer(e.target.value)}
               />
               <IconButton
                  aria-label="Search Player"
                  colorScheme="blue"
                  icon={<SearchIcon />}
                  type="submit"
               />
            </Stack>
         </form>

         {/* {playerSeason && ( */}
         <Container paddingTop={2}>
            <Text className={styles['fortnite-font']} p={2}>
               brkoala
               {/* {playerSeason.data.account.name} */}
            </Text>

            <Tabs
               borderWidth={'1px'}
               borderRadius={'lg'}
               isFitted
               variant="enclosed"
            >
               <TabList mb="1em">
                  <Tab>Season</Tab>
                  <Tab>All</Tab>
               </TabList>
               <TabPanels>
                  <TabPanel>
                     <Stat p={2}>
                        <Stack divider={<StackDivider />}>
                           <Stack
                              direction="row"
                              justifyContent="space-between"
                           >
                              <StatLabel>Nível</StatLabel>
                              <StatNumber>
                                 118
                                 {/* £0.00{playerSeason.data.battlePass.level} */}
                              </StatNumber>
                           </Stack>
                           <Stack
                              direction="row"
                              justifyContent="space-between"
                           >
                              <StatLabel>Vitórias</StatLabel>
                              <StatNumber>
                                 19
                                 {/* £0.00{playerSeason.data.battlePass.level} */}
                              </StatNumber>
                              <StatLabel>Partidas</StatLabel>
                              <StatNumber>
                                 211
                                 {/* £0.00{playerSeason.data.battlePass.level} */}
                              </StatNumber>
                           </Stack>
                           <Stack
                              direction="row"
                              justifyContent="space-between"
                           >
                              <StatLabel>Eliminações</StatLabel>
                              <StatNumber>
                                 588
                                 {/* £0.00{playerSeason.data.battlePass.level} */}
                              </StatNumber>
                              <StatLabel>Win Rate</StatLabel>
                              <StatNumber>
                                 9,01%
                                 {/* £0.00{playerSeason.data.battlePass.level} */}
                              </StatNumber>
                           </Stack>
                        </Stack>
                     </Stat>
                  </TabPanel>
                  <TabPanel>
                     <Stat p={2}>
                        <Stack
                           divider={<StackDivider borderColor="gray.200" />}
                        >
                           <Stack
                              direction="row"
                              justifyContent="space-between"
                           >
                              <StatLabel>Vitórias</StatLabel>
                              <StatNumber>
                                 170
                                 {/* £0.00{playerSeason.data.battlePass.level} */}
                              </StatNumber>
                              <StatLabel>Partidas</StatLabel>
                              <StatNumber>
                                 3996
                                 {/* £0.00{playerSeason.data.battlePass.level} */}
                              </StatNumber>
                           </Stack>
                           <Stack
                              direction="row"
                              justifyContent="space-between"
                           >
                              <StatLabel>Eliminações</StatLabel>
                              <StatNumber>
                                 6427
                                 {/* £0.00{playerSeason.data.battlePass.level} */}
                              </StatNumber>
                              <StatLabel>Win Rate</StatLabel>
                              <StatNumber>
                                 4,25%
                                 {/* £0.00{playerSeason.data.battlePass.level} */}
                              </StatNumber>
                           </Stack>
                        </Stack>
                     </Stat>
                  </TabPanel>
               </TabPanels>
            </Tabs>
         </Container>
         {/* )} */}
      </Container>
   )
}
