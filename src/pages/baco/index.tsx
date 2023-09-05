import {
   Card,
   CardBody,
   Stack,
   Heading,
   Divider,
   CardFooter,
   ButtonGroup,
   Button,
   Text,
   Image,
   Container,
   HStack,
   Grid,
   GridItem,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'

interface Item {
   id: string
   name: string
   image: string
   quantity: number
}

export default function Baco() {
   const [items, setItems] = useState<Item[]>([])
   let newItems: Item[] = []

   useEffect(() => {
      console.log('Galinha!')
      loadItems()
   }, [])

   const loadItems = async () => {
      try {
         const data: Item = await fetch(
            'https://baco-api.up.railway.app/items'
         ).then(async (response) => {
            return await response.json()
         })

         const newData = JSON.parse(JSON.stringify(data))

         setItems(newData)
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <Container paddingBottom={5} marginY={5}>
         <Head>
            <title>Koala Hub | Pokemon</title>
         </Head>
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
            {items.map((item, index) => (
               <GridItem key={index}>
                  <Card maxW="sm" marginY={5}>
                     <CardBody>
                        <Image
                           src={item.image}
                           alt={item.name}
                           borderRadius="lg"
                        />
                        <Stack mt="6" spacing="3" alignItems="center">
                           <Heading size="md">{item.name}</Heading>
                           <HStack>
                              <Text fontWeight={'bold'}>Quantidade:</Text>
                              <Text>{item.quantity}</Text>
                           </HStack>
                        </Stack>
                     </CardBody>
                     <Divider />
                     <CardFooter>
                        <ButtonGroup spacing="2">
                           <Button variant="solid" colorScheme="red">
                              Deletar
                           </Button>
                        </ButtonGroup>
                     </CardFooter>
                  </Card>
               </GridItem>
            ))}
         </Grid>
      </Container>
   )
}
