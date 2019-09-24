import { AnyAction } from 'redux'
import { Entities } from '../../types'
import {
  loadGamesTypes,
  addGameTypes,
  loadGenresTypes
} from '../actions'
import { normalize } from 'normalizr'
import Schemes from '../schemes'

const entities = (
  state: Entities = {
    games: {},
    genres: {}
  },
  action: AnyAction,
): Entities => {
  switch (action.type) {
    case loadGamesTypes.success: {
      const { payload } = action
      const gamesNormalized = normalize(payload, Schemes.Games).entities
      
      console.log('----loadGamesTypes.success----')
      console.log('payload:', payload)
      console.log('state:', state)
      console.log('gamesNormalized:', gamesNormalized)

      // const mergedState = merge({}, state, currentEntitiesNormalized, updatedEntitiesNormalized)
      const mergedState = {
        ...state,
        ...gamesNormalized
      }

      console.log('mergedState:', mergedState)

      return mergedState
    }

    case addGameTypes.success: {
      console.log('----addGameTypes----')
      console.log('action.payload', action.payload)
      console.log('state', state)
      console.log('normalized:', normalize(action.payload, Schemes.Game).entities)

      return {
        ...state,
        ...normalize(action.payload, Schemes.Game).entities
      }
    }

    case loadGenresTypes.success: {
      console.log('----loadGenresTypes----')
      console.log('action.payload', action.payload)
      console.log('state', state)
      console.log('normalized:', normalize(action.payload, Schemes.Genres).entities)

      return {
        ...state,
        ...normalize(action.payload, Schemes.Genres).entities
      }
    }

    default:
      return state
  }
}

export default entities
