import { State, Entities, Genre } from "../../types"
import { createSelector } from "reselect"
import { flatten } from "../../helpers"

const genresSelector = (state: State) => state.entities.genres

export const getNormalizedGenres = createSelector<
  State,
  Entities['genres'],
  Genre[]
>([genresSelector], stateGenres => flatten(stateGenres))