import C from "./constants"
import appReducer from "./store/reducers"
import initialState from './initialState.json'
import { createStore } from 'redux'

let store = createStore(appReducer, initialState)

console.log("initial State", store.getState())

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "some resort",
        "date": "2017-11-11",
        "powder": false,
        "backcountry": true
    }
})

console.log("Final State", store.getState())