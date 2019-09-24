import fetcher from './fetcher'
import { Genre } from '../types'

const genresApi: string = '/genres'

export const getGenresApi = (): Promise<Genre[]> => fetcher.get(`${genresApi}`)
