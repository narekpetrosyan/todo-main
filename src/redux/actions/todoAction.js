import {ADD_TODO, CREATE_TODO, SET_TODO, SET_TODOS, TODOS_FETCH, UPDATE_TODO} from "../types";

// fetch todos
export const todosFetch = (userId) => ({
    type: TODOS_FETCH,
    payload: userId

})
//set fetched todos
export const setTodos = (data) => ({
    type: SET_TODOS,
    payload: data

})
// create todo in db
export const createTodo = (data) => ({
    type: CREATE_TODO,
    payload: data
})
// update todo in db
export const updateTodo = (data) => ({
    type: UPDATE_TODO,
    payload: data
})
//add created todo to list
export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: data
})
// update edited todo to list
export const setTodo = (data) => ({
    type: SET_TODO,
    payload: data
})