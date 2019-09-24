import { makeAsyncAction, makeAsyncTypes } from './actionsHelpers'
import { getGamesApi, addGameApi } from '../../api'
import { AsyncTypes, GamesFilters, GameNormalized } from '../../types'

export const loadGamesTypes: AsyncTypes = makeAsyncTypes('LOAD_GAMES')
const loadGamesAction = makeAsyncAction(loadGamesTypes, getGamesApi)
export const loadGames = (filters?: GamesFilters) => loadGamesAction(filters)

export const addGameTypes: AsyncTypes = makeAsyncTypes('ADD_GAME')
const addGameAction = makeAsyncAction(addGameTypes, addGameApi)
export const addGame = (game: GameNormalized) => addGameAction(game)
