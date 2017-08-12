import C from "./constants"
import { skiDay, errors } from "./store/reducers"

const state = null

const errorState = [
    "user not authorized",
    "wrong type of variable has been passed"
]

const action = {
    "type": C.ADD_DAY,
    "payload": {
        "resort": "Some Resort",
        "date": "2017-11-11",
        "powder": false,
        "backcountry": true
    },
}

const nextState = skiDay(state, action)

console.log(nextState)

const errorAction = {
    "type": C.ADD_ERROR,
    "payload": "Cannot connect to server",
}

const errorNextState = errors(errorState, errorAction)

console.log(errorNextState)

const errorClearAction = {
    "type": C.CLEAR_ERROR,
    "payload": 0,
}

const errorClearNextState = errors(errorState, errorClearAction)

console.log(errorClearNextState)