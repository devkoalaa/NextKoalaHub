export default interface PkmInterface {
   id: number
   name: string
   height: number
   weight: number
   species: Species
   sprites: Sprites
   types: Type[]
}

export interface Species {
   name: string
   url: string
}

export interface Sprites {
   front_default: string
   front_shiny: string
   other: { 'official-artwork': { front_default: string; front_shiny: string } }
}

export interface Type {
   slot: number
   type: { name: string; url: string }
}

const jsonResult = {
   id: 94,
   name: 'gengar',
   height: 15,
   weight: 405,
   species: {
      name: 'gengar',
      url: 'https://pokeapi.co/api/v2/pokemon-species/94/',
   },
   sprites: {
      front_default:
         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      front_shiny:
         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
      other: {
         'official-artwork': {
            front_default:
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
            front_shiny:
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/25.png',
         },
      },
   },
   types: [
      {
         slot: 1,
         type: { name: 'ghost', url: 'https://pokeapi.co/api/v2/type/8/' },
      },
      {
         slot: 2,
         type: { name: 'poison', url: 'https://pokeapi.co/api/v2/type/4/' },
      },
   ],
}
