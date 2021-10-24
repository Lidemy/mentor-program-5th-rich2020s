import React from 'react'
import Todo from './containers/todo'
import TodoList from './containers/todoList'
import styled from 'styled-components'
import Filter from './containers/filter'

const Container = styled.div`
  margin: 50px auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 800px;
`
export default function TodoApp() {
  return (
    <Container>
      <Todo />
      <Filter />
      <TodoList />
    </Container>
  )
}
