import axios from 'axios'
import { browserHistory } from 'react-router'
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

            })
            .catch(() => {

            })
    }
}
