import { deleteTodo, toggleTodo } from '../action'
import { connect } from 'react-redux'
import TodoList from '../component/TodoList'
import { getTodosByFilterState } from '../selector'
const mapStateToProps = (store) => {
  return {
    todos: getTodosByFilterState(store),
  }
}
export default connect(mapStateToProps, { deleteTodo, toggleTodo })(TodoList)
