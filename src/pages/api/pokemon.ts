const URL_API = 'https://pokeapi.co/api/v2/pokemon/'

export async function PokemonApi(id: string) {
   try {
      const data = await fetch(URL_API + id).then(async (response) => {
         return await response.json()
      })

      return {
         ...data,
         name: data.name[0].toUpperCase() + data.name.substring(1),
      }
   } catch {
      return { isSubmitting: false, isError: true }
   }
}
