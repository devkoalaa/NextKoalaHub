import Nav from '@/components/Navbar'
import '@/styles/globals.scss'
import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
   return (
      <ChakraProvider>
         <Nav />
         <Component {...pageProps} />
      </ChakraProvider>
   )
}
