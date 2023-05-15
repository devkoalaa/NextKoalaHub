import FortPlayerInterface from '@/interfaces/FortPlayerInterface'
import { SearchIcon } from '@chakra-ui/icons'
import {
   Container,
   IconButton,
   Input,
   Stack,
   Stat,
   StatGroup,
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

         if (resultAll.hasOwnProperty('data')) {
            console.log(resultAll)
            setPlayerAll(resultAll)
         }

         if (resultSeason.hasOwnProperty('error')) {
            console.log(resultSeason)
         }

         if (resultAll.hasOwnProperty('error')) {
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

         {playerSeason && playerAll && (
            <Container paddingTop={2}>
               <Text className={styles['fortnite-font']} p={2}>
                  {playerSeason.data.account.name}
               </Text>

               <Tabs
                  isFitted
                  variant="enclosed"
                  borderRadius={'lg'}
                  borderWidth={'1px'}
               >
                  <TabList mb="1em">
                     <Tab>Season</Tab>
                     <Tab>All</Tab>
                  </TabList>
                  <TabPanels>
                     <TabPanel>
                        <Stat>
                           <StatGroup>
                              <Stat>
                                 <StatLabel>Nível</StatLabel>
                                 <StatNumber>
                                    {playerSeason.data.battlePass.level}
                                 </StatNumber>
                              </Stat>
                           </StatGroup>
                           <StatGroup>
                              <Stat>
                                 <StatLabel>Vitórias</StatLabel>
                                 <StatNumber>
                                    {playerSeason.data.stats.all.overall.wins}
                                 </StatNumber>
                              </Stat>
                              <Stat>
                                 <StatLabel>Partidas</StatLabel>
                                 <StatNumber>
                                    {
                                       playerSeason.data.stats.all.overall
                                          .matches
                                    }
                                 </StatNumber>
                              </Stat>
                           </StatGroup>
                           <StatGroup>
                              <Stat>
                                 <StatLabel>Eliminações</StatLabel>
                                 <StatNumber>
                                    {playerSeason.data.stats.all.overall.kills}
                                 </StatNumber>
                              </Stat>
                              <Stat>
                                 <StatLabel>Win Rate</StatLabel>
                                 <StatNumber>
                                    {
                                       playerSeason.data.stats.all.overall
                                          .winRate
                                    }
                                 </StatNumber>
                              </Stat>
                           </StatGroup>
                        </Stat>
                     </TabPanel>
                     <TabPanel>
                        <StatGroup>
                           <Stat>
                              <StatLabel>Vitórias</StatLabel>
                              <StatNumber>
                                 {playerAll.data.stats.all.overall.wins}
                              </StatNumber>
                           </Stat>
                           <Stat>
                              <StatLabel>Partidas</StatLabel>
                              <StatNumber>
                                 {playerAll.data.stats.all.overall.matches}
                              </StatNumber>
                           </Stat>
                        </StatGroup>
                        <StatGroup>
                           <Stat>
                              <StatLabel>Eliminações</StatLabel>
                              <StatNumber>
                                 {playerAll.data.stats.all.overall.kills}
                              </StatNumber>
                           </Stat>
                           <Stat>
                              <StatLabel>Win Rate</StatLabel>
                              <StatNumber>
                                 {playerAll.data.stats.all.overall.winRate}
                              </StatNumber>
                           </Stat>
                        </StatGroup>
                     </TabPanel>
                  </TabPanels>
               </Tabs>
            </Container>
         )}
      </Container>
   )
}
