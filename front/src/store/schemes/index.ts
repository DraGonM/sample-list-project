import { schema } from 'normalizr'
import { NormalizedSchemes } from '../../types'

const gameSchema = new schema.Entity('games')
const genreSchema = new schema.Entity('genres')

gameSchema.define({
  genre: genreSchema,
})

export const Schemes: NormalizedSchemes = {
  Game: gameSchema,
  Games: new schema.Array(gameSchema),
  Genre: genreSchema,
  Genres: new schema.Array(genreSchema),
}

export default Schemes