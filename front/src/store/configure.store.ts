import { routerMiddleware } from 'connected-react-router'
import { History } from 'history'
import { applyMiddleware, compose, createStore, Store } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createRootReducer from './reducers'
import { State } from '../types'

export default function configureStore(history: History): Store<State> {
  const initialState = {}

  const store = createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware, 
        routerMiddleware(history)
      )
    ),
  )

  return store
}