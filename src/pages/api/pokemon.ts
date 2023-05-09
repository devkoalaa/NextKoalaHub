const URL_API = 'https://pokeapi.co/api/v2/pokemon/'

export async function PokemonApi(id: string) {
   try {
      const data = await fetch(URL_API + id).then(async (response) => {
         return await response.json()
      })

      return {
         ...data,
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
