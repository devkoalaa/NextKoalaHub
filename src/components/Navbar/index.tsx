import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
   Box,
   Button,
   Flex,
   Image,
   Link,
   Stack,
   useColorMode,
   useColorModeValue,
} from '@chakra-ui/react'

export default function Nav() {
   const { colorMode, toggleColorMode } = useColorMode()
   return (
      <>
         <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
               <Box>
                  <Link href="/">
                     <Image
                        alt="Logo de Coala"
                        src="/koalaLogo.png"
                        height={10}
                     />
                  </Link>
               </Box>

               <Flex alignItems={'center'}>
                  <Stack direction={'row'} spacing={7}>
                     <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                     </Button>
                  </Stack>
               </Flex>
            </Flex>
         </Box>
      </>
   )
}
