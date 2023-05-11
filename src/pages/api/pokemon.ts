import { PkmInterface } from '@/interfaces/PkmInterface'

const URL_API = 'https://pokeapi.co/api/v2/pokemon/'

export async function PokemonApi(id: string) {
   try {
      const data: PkmInterface = await fetch(URL_API + id).then(
         async (response) => {
            return await response.json()
         }
      )

      const newData = JSON.parse(
         JSON.stringify(data, [
            'id',
            'name',
            'height',
            'species',
            'url',
            'weight',
            'types',
            'sprites',
            'other',
            'front_default',
            'front_shiny',
            'official-artwork',
            'type',
            'slot',
         ])
      )

      return {
         ...newData,
         name: data.name[0].toUpperCase() + data.name.substring(1),
         height: data.height / 10,
         weight: data.weight / 10,
      }
   } catch {
      return {
         isError: true,
         errorMsg: 'Pokémon não encontrado',
      }
   }
}
