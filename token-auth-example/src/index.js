import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import RequireAuth from './components/require_authentication'
import { AUTH_USER } from './actions/types'

import App from './components/app'
import Feature from './components/feature'
import Welcome from './components/welcome'
import Signin from './components/auth/signin'
import Signout from './components/auth/signout'
import Signup from './components/auth/signup'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('access_token')

if (token) {
  store.dispatch({type: AUTH_USER})
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={RequireAuth(Signout)} />
        <Route path="signup" component={Signup} />
        <Route path="features" component={RequireAuth(Feature)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'))
