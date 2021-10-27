/* eslint-disable */
import { ADD_TODO, DELETE_ALL, DELETE_TODO, TOGGLE_TODO } from '../actionTypes'

const initialState = {
  todos: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload
      const { todos } = state
      return {
        todos: [...todos, { id, content, isDone: false }],
      }
    }
    case DELETE_TODO: {
      const { id } = action.payload
      const { todos } = state
      return {
        todos: todos.filter((todo) => {
          if (todo.id !== id) return todo
          return
        }),
      }
    }
    case TOGGLE_TODO: {
      const { todos } = state
      const { id } = action.payload
      return {
        todos: todos.map((todo) => {
          if (todo.id !== id) return todo
          return {
            id: todo.id,
            content: todo.content,
            isDone: todo.isDone === false ? true : false,
          }
        }),
      }
    }
    case DELETE_ALL: {
      return {
        todos: [],
      }
    }
    default:
      return state
  }
}
