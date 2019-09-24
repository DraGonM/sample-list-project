import * as React from 'react'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'
import GamesList from './GamesList'

class GamesRoutes extends React.PureComponent<RouteComponentProps> {
  render() {
    const { location, match } = this.props

    return <Switch>
      <Route path={`${match.url}/list`} component={GamesList} />
      <Redirect exact to={{ ...location, pathname: `${match.url}/list` }} />
    </Switch>
  }
}

export default GamesRoutes