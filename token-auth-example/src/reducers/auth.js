import { AUTH_USER, DEAUTH_USER, AUTH_ERROR, FETCH_USER } from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true }
    case FETCH_USER:
      return { ...state, user: action.payload }
    case DEAUTH_USER:
      return { ...state, authenticated: false }
    case AUTH_ERROR:
      return { ...state, error: action.payload }
  }

  return state
}
