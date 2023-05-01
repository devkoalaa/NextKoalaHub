export interface PkmInterface {
    name: string
    id: number
    types: [
        {
            slot: number
            type: {
                name: string
            }
        }
    ]
    sprites: {
        back_default: string
        back_female: string
        back_shiny: string
        back_shiny_female: string
        front_default: string
        front_female: string
        front_shiny: string
        front_shiny_female: string
        other: {
            dream_world: {
                front_default: string
                front_female: string
            }
            home: {
                front_default: string
                front_female: string
                front_shiny: string
                front_shiny_female: string
            }
            'official-artwork': {
                front_default: string
                front_shiny: string
            }
        }
    }
}
