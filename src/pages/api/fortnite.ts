import FortPlayerInterface from '@/interfaces/FortPlayerInterface'

const URL_API = 'https://fortnite-api.com/v2/stats/br/v2/?'

export async function FortGetAll(player: string) {
   try {
      const data: FortPlayerInterface = await fetch(
         URL_API + new URLSearchParams({ name: player }),
         {
            headers: { Authorization: '3a924cb0-69a8-43d5-aa6d-69fc12b40991' },
         }
      ).then(async (response) => {
         return await response.json()
      })

      return data
   } catch (error) {
      return {
         error: error,
         isError: true,
         errorMsg: 'Erro ao buscar dados do player',
      }
   }
}

export async function FortGetSeason(player: string) {
   try {
      const data: FortPlayerInterface = await fetch(
         URL_API + new URLSearchParams({ name: player, timeWindow: 'season' }),
         {
            headers: { Authorization: '3a924cb0-69a8-43d5-aa6d-69fc12b40991' },
         }
      ).then(async (response) => {
         return await response.json()
      })

      return data
   } catch (error) {
      return {
         error: error,
         isError: true,
         errorMsg: 'Erro ao buscar dados do player',
      }
   }
}
