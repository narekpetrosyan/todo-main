import {CLEAR_USER, SET_USER, SET_USERS, UPDATE_USER} from "../types";

const initialState = {
    data: null,
    active: null,
    activeUserName: '',
};
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        //set fetched users
        case SET_USERS:
            return {
                ...state,
                data: action.payload
            }
        //set active user
        case SET_USER:
            return {
                ...state,
                active: action.payload.id,
                activeUserName: action.payload.name
            }
        //clear active user
        case CLEAR_USER:
            return {
                ...state,
                active: null,
                activeUserName: ''
            }
        //update user info
        case UPDATE_USER:
            let newData = state.data.map((user) => {
                if (user.id === state.active) {
                    user[action.payload]++
                }
                return user
            })
            return {
                ...state,
                data: newData
            }
        default:
            return state
    }
}
export default userReducer