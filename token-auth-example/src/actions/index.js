import axios from 'axios'
import { browserHistory } from 'react-router'
import { AUTH_USER, AUTH_ERROR, DEAUTH_USER } from './types'

const config = require('../../config.js')


const ROOT_URL = 'http://localhost:8000/api/v1'
const grant_type = 'password'


export function signinUser (email, password) {
    const sendData = {
        grant_type,
        client_id: config.client_id,
        client_secret: config.client_secret,
        username: email,
        password,
    }
    return function (dispatch) {
        axios.post(`${ROOT_URL}/oauth/token`, sendData)
            .then(response => {
                dispatch({ type: AUTH_USER })
                localStorage.setItem('access_token', response.data.access_token)
                browserHistory.push('/features')
            })
            .catch(() => {
                dispatch(authError('Bad login info!'))
            })
    }
}

export function signupUser ({ email, password, password_confirmation }) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/users`, {email, password, password_confirmation})
            .then(response => {
                dispatch({ type: AUTH_USER })
                browserHistory.push('/features')
            })
            .catch(error => dispatch(authError(error.response.data)))
    }
}

export function authError (error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser () {
    localStorage.removeItem('access_token')

    return {type: DEAUTH_USER}
}
