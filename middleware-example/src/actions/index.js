import { FETCH_USERS } from './types'

export function fetchUsers () {
    return {
        type: FETCH_USERS,
        payload: [
            {name: 'James'},
            {name: 'John'},
            {name: 'Bob'},
            {name: 'Sally'}
        ]
    }
}
