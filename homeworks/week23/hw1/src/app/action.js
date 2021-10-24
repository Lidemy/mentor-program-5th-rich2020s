import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  DELETE_ALL,
} from './actionTypes'

let todoId = 0
export const addTodo = (content) => {
  return {
    type: ADD_TODO,
    payload: {
      id: ++todoId,
      content,
    },
  }
}
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: { id },
  }
}
export const deleteAll = () => {
  return {
    type: DELETE_ALL,
  }
}
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
})
export const setFilter = (filter) => ({ type: SET_FILTER, payload: { filter } })
