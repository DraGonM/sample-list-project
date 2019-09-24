import { createBrowserHistory, History } from 'history'
import * as React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import configureStore from './store/configure.store'
import './styles/index.scss'

const history: History = createBrowserHistory()
const store = configureStore(history)
const rootElement = document.getElementById('root')

render(
  <Root store={store} history={history} />,
  rootElement,
)