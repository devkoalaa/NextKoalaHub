export interface PkmInterface {
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
   back_default: string
   back_female: string
   back_shiny: string
   back_shiny_female: string
   front_default: string
   front_female: string
   front_shiny: string
   front_shiny_female: string
   other: Other
}

export interface Other {
   dream_world: DreamWorld
   home: Home
   'official-artwork': OfficialArtwork
}

export interface DreamWorld {
   front_default: string
   front_female: any
}

export interface Home {
   front_default: string
   front_female: string
   front_shiny: string
   front_shiny_female: string
}

export interface OfficialArtwork {
   front_default: string
   front_shiny: string
}

export interface Type {
   slot: number
   type: Type2
}

export interface Type2 {
   name: string
   url: string
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
      back_default:
         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
      back_female:
         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/25.png',
      back_shiny:
         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
      back_shiny_female:
         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/25.png',
      front_default:
         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      front_female:
         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/25.png',
      front_shiny:
         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
      front_shiny_female:
         'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png',
      other: {
         dream_world: {
            front_default:
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
            front_female: null,
         },
         home: {
            front_default:
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
            front_female:
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/female/25.png',
            front_shiny:
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/25.png',
            front_shiny_female:
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/female/25.png',
         },
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

// export interface PkmInterface {
//     name: string
//     id: number
//     types: [
//         {
//             slot: number
//             type: {
//                 name: string
//             }
//         }
//     ]
//     sprites: {
//         back_default: string
//         back_female: string
//         back_shiny: string
//         back_shiny_female: string
//         front_default: string
//         front_female: string
//         front_shiny: string
//         front_shiny_female: string
//         other: {
//             dream_world: {
//                 front_default: string
//                 front_female: string
//             }
//             home: {
//                 front_default: string
//                 front_female: string
//                 front_shiny: string
//                 front_shiny_female: string
//             }
//             'official-artwork': {
//                 front_default: string
//                 front_shiny: string
//             }
//         }
//     }
// }
