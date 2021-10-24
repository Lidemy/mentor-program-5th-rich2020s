import { addTodo } from '../action'
import { connect } from 'react-redux'
import Todos from '../component/Todo'
export default connect(null, { addTodo })(Todos)
