import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {
  FormContainer,
  Form,
  FormTitle,
  Button,
  Input,
  ErrorMessage
} from '../../components/components'
import { login } from '../../WebAPI'
import { AuthContext } from '../../context'

export default function Login() {
  const [errorMessage, setErrorMessage] = useState('')
  let isLoading = false
  const history = useHistory()
  const { setIsLogin } = useContext(AuthContext)
  const [inputs, setInputs] = useState([
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
  async function handleLogin() {
    if (isLoading) return
    isLoading = true
    const username = inputs[0].value
    const password = inputs[1].value
    const res = await login(username, password)
    if (res.ok) {
      localStorage.setItem('user_token', res.token)
      setIsLogin(true)
      history.push('/')
    } else {
      setErrorMessage(res.message)
    }
    isLoading = false
  }
  return (
    <FormContainer>
      <Form>
        <FormTitle>登入</FormTitle>
        {inputs.map((input, index) => (
          <Input
            key={index}
            input={input}
            handleInputChange={handleInputChange}
          />
        ))}
        <Button onClick={handleLogin}>提交</Button>
      </Form>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </FormContainer>
  )
}
