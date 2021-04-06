import {USERS_FETCH, SET_USER, SET_USERS, UPDATE_USER, CLEAR_USER,} from "../types";

//fetch users
export const usersFetch = () => ({
    type: USERS_FETCH
})
//set fetched users
export const setUsers = (data) => ({
    type: SET_USERS,
    payload: data
})
//set active user
export const setUser = (data) => ({
    type: SET_USER,
    payload: data
})
//clear active user
export const clearUser = () => ({
    type: CLEAR_USER
})
//update user info
export const updateUser = (field) => ({
    type: UPDATE_USER,
    payload: field
})
