import C from "../constants"
import { combineReducers } from 'redux'

export const goal = (state=10, action) => {
    if (action.type === C.SET_GOAL) {
        return parseInt(action.payload)
    }
    return state
}

export const skiDay = (state=null, action) => {
    if (action.type === C.ADD_DAY) {
        return action.payload
    }
    return state
}

export const errors = (state=[], action) => {
    switch(action.type) {
        case C.ADD_ERROR :
            return [...state, action.payload]
        case C.CLEAR_ERROR :
            return state.filter((messate, i) => i !== action.payload)
        default :
            return state
    }
    if (action.type === C.ADD_DAY) {
        return action.payload
    }
    return state
}

export const allSkiDays = (state=[], action) => {
    switch(action.type) {
        case C.ADD_DAY : 
            const hasDay = state.some(skiDay => skiDay.date === action.payload.date)
            return (hasDay) ?
                state :
                [
                    ...state,
                    skiDay(null, action)
                ].sort((a, b) => new Date(b.date) - new Date(a.date))

        case C.REMOVE_DAY :
            return state.filter(skiDay => skiDay.date !== action.payload)     

        default:
            return state
    }
}

export const fetching = (state=false, action) => {
    switch(action.type) {
        case C.FETCH_RESORT_NAMES :
            return true

        case C.CANCEL_FETCHING :
            return false 

        case C.CHANGE_SUGGESTIONS :
            return false   

        default:
            return state
    }
}

export const suggestions = (state=[], action) => {
    switch(action.type) {
        case C.CLEAR_SUGGESTIONS :
            return []
        case C.CHANGE_SUGGESTIONS :
            return action.payload  
        default :
            return state
    }
}

export default combineReducers({
    allSkiDays,
    goal,
    skiDay,
    errors,
    resortNames: combineReducers({
        fetching,
        suggestions
    })
})