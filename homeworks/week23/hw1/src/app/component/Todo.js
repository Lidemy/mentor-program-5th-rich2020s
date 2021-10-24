import React, { useState } from 'react'
import styled from 'styled-components'

const Title = styled.h1``
const Button = styled.button`
  padding: 6px 12px;
  margin-left: 10px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: white;
`
const FlexContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
const TodoInput = styled.input`
  width: 50%;
  height: 40px;
`
export default function Todos({ addTodo }) {
  const [input, setInput] = useState('')
  return (
    <>
      <Title>My last Todo-List</Title>
      <FlexContainer>
        <TodoInput
          onChange={(e) => {
            setInput(e.target.value)
          }}
          value={input}
        />
        <Button
          onClick={() => {
            addTodo(input)
            setInput('')
          }}
        >
          Add Todo
        </Button>
      </FlexContainer>
    </>
  )
}
