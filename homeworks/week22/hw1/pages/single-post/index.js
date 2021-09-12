import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import {
  PostContainer,
  PostTitle,
  ErrorMessage
} from '../../components/components'
import { getSinglePost } from '../../WebAPI'

export default function SinglePost() {
  const [errorMessage, setErrorMessage] = useState('')
  const slug = useParams()
  const [postValue, setPostValue] = useState({
    title: '',
    time: '',
    content: ''
  })
  useEffect(() => {
    async function fetchData() {
      let res = await getSinglePost(slug.id)
      if (!res.ok) setErrorMessage(res.message)
      res = res[0]
      const time = new Date(res.createdAt).toLocaleString()
      setPostValue({
        title: res.title,
        time,
        content: res.body
      })
    }
    fetchData()
  }, [slug.id])
  return (
    <PostContainer>
      <PostTitle>{postValue.title}</PostTitle>
      <div>{postValue.time}</div>
      <p style={{ lineHeight: '30px' }}>{postValue.content}</p>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </PostContainer>
  )
}
