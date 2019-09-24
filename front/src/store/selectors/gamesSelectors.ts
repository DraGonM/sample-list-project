import { createSelector } from 'reselect'
import { State, Game, Entities, GameNormalized } from '../../types'
import { denormalize } from 'normalizr'
import Schemes from '../schemes'
import { flatten } from '../../helpers'

const entitiesSelector = (state: State): Entities => state.entities
const gamesSelector = (state: State) => state.entities.games

export const getNormalizedGames = createSelector<
  State,
  Entities['games'],
  GameNormalized[]
>([gamesSelector], stateGames => flatten(stateGames))

export const getGames = createSelector<
State,
GameNormalized[],
Entities,
Game[]
>([getNormalizedGames, entitiesSelector], (gamesNormalized, entities) => 
    denormalize(gamesNormalized, Schemes.Games, entities))
