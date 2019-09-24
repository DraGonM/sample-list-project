import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import entities from './entities'
import statuses from './statuses'

export default (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  entities,
  statuses
})
