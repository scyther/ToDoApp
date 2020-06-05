import {ADD_TODO,REMOVE_TODO} from './action-types'

export const addtodo = (todo) => ({
    type : ADD_TODO,
    payload: todo
})

export const removetodo = (id) => ({
    type : REMOVE_TODO,
    payload: id
})