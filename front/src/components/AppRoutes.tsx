import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'
import * as React from 'react'
import GamesRoutes from './Games'

type AllProps = RouteComponentProps

class AppRoutes extends React.PureComponent<AllProps> {
  render() {
    const { location } = this.props

    return (
        <Switch>
            <Route path={`/games`} component={GamesRoutes} />
            <Redirect exact from={`/`} to={{ ...location, pathname: '/games' }} />
        </Switch> 
    )
  }
}

export default AppRoutes
