import { Genre, GameNormalized } from ".";

export interface Entities {
    readonly games: { [key: string]: GameNormalized }
    readonly genres: { [key: string]: Genre }
}