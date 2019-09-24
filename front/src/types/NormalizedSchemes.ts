import { schema } from 'normalizr'

export interface NormalizedSchemes {
    Game: schema.Entity,
    Games: schema.Array,
    Genre: schema.Entity,
    Genres: schema.Array,
}