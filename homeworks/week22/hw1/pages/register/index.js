import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SignUp } from '../../WebAPI'
import {
  FormContainer,
  Form,
  FormTitle,
  Button,
  Input,
  ErrorMessage
} from '../../components/components'

export default function Register() {
  const [errorMessage, setErrorMessage] = useState('')
  let isLoading = false
  const history = useHistory()
  const [inputs, setInputs] = useState([
    {
      label: 'Nickname',
      value: ''
    },
    {
      label: 'Username',
      value: ''
    },
    {
      label: 'Password',
      value: ''
    }
  ])
  const handleInputChange = (e) => {
    const obj = [...inputs]
    obj.forEach((input) => {
      if (input.label === e.target.name) input.value = e.target.value
    })
    setInputs(obj)
  }
  async function handleRegister() {
    if (isLoading) return
    isLoading = true
    const nickname = inputs[0].value
    const username = inputs[1].value
    const password = inputs[2].value
    const res = await SignUp(nickname, username, password)
    if (res.ok) {
      setErrorMessage('')
      history.push('/login')
    } else {
      setErrorMessage(res.message)
    }
    isLoading = false
  }
  return (
    <FormContainer>
      <Form>
        <FormTitle>註冊</FormTitle>
        {inputs.map((input, index) => (
          <Input
            key={index}
            input={input}
            handleInputChange={handleInputChange}
          />
        ))}
        <Button onClick={handleRegister}>提交</Button>
      </Form>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </FormContainer>
  )
}
