import * as queryString from 'query-string'
import fetcher from './fetcher'
import { Game, GamesFilters, GameNormalized } from '../types'

const gamesApi: string = '/games'

export const getGamesApi = (filters: GamesFilters = {}): Promise<Game[]> =>
    fetcher.get(`${gamesApi}?${queryString.stringify(filters)}`)

export const addGameApi = (game: GameNormalized): Promise<Game> => 
    fetcher.post(gamesApi, game)
