import { makeAsyncAction, makeAsyncTypes } from './actionsHelpers'
import { getGenresApi } from '../../api'
import { AsyncTypes } from '../../types'

export const loadGenresTypes: AsyncTypes = makeAsyncTypes('LOAD_GENRES')
const loadGenresAction = makeAsyncAction(loadGenresTypes, getGenresApi)
export const loadGenres = () => loadGenresAction()
