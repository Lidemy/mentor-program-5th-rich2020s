import styled from 'styled-components'

const TodoContainer = styled.div`
  margin: 20px auto;
  justify-content: space-between;
  flex-direction: row;
  .done {
    text-decoration: line-through;
    color: lightgray;
  }
`
const Todo = styled.span`
  padding-right: 30px;
  max-width: 80%;
`
export default function TodoList({ todos, deleteTodo, toggleTodo }) {
  return todos.map((todo, index) => (
    <TodoContainer key={index}>
      <Todo
        onClick={() => {
          toggleTodo(todo.id)
        }}
        className={todo.isDone ? 'done' : ''}
      >
        {todo.id}. {todo.content}
      </Todo>
      <button
        onClick={() => {
          deleteTodo(todo.id)
        }}
      >
        delete
      </button>
    </TodoContainer>
  ))
}
