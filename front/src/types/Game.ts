import { Genre } from ".";

export interface Game {
    id: string
    name: string
    releaseDate: string
    genre: Genre
    rating?: number
    hasMultiplayer: boolean
    icon?: any
}