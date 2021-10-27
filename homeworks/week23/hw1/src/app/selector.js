import { VISIBILITY_FILTERS } from './constants'
export const getTodoList = (store) => store.todoList.todos
export const getFilterState = (store) => store.filter.state

export const getTodosByFilterState = (store) => {
  const allTodos = getTodoList(store)
  const filterState = getFilterState(store)
  switch (filterState) {
    case VISIBILITY_FILTERS.ALL:
      return allTodos
    case VISIBILITY_FILTERS.COMPLETE:
      return allTodos.filter((todo) => todo.isDone)
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.isDone)
    default:
      return allTodos
  }
}
