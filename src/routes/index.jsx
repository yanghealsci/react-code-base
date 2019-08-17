import {browserHistory, Router, Route, IndexRedirect} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import store from 'store'

const history = syncHistoryWithStore(browserHistory, store)

export default class Routes extends React.Component {
  render () {
    return (
      <Router history={history}>
        <Route path={'/'}>
          <IndexRedirect to='home' />
          <Route path='home' getComponents={(nextState, cb) => {
            import(/* webpackChunkName: "home" */ 'containers/DemoHomePage')
              .then(module => cb(null, module.default))
              .catch(e => console.error(e))
          }} />
        </Route>
      </Router>
    )
  }
}
