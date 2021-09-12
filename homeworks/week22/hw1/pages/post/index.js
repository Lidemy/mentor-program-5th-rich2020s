import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { NewPost } from '../../components/components'
import { addPost } from '../../WebAPI'

export default function Post() {
  let isLoading = false
  const history = useHistory()
  const [postContent, setPostContent] = useState({
    title: '',
    content: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const handlePostChange = (e, tag) => {
    const obj = { ...postContent }
    obj[tag] = e.target.value
    setPostContent(obj)
  }
  const handleAddNewPost = () => {
    if (isLoading) return
    isLoading = true
    if (postContent.title === '' || postContent.content === '') {
      setErrorMessage('文章標題或內容不得為空')
      return
    }
    addPost(postContent.title, postContent.content).then((data) => {
      if (data.ok === 0) {
        setErrorMessage(data.message)
        return
      }
      isLoading = false
      history.push('/')
    })
  }
  return (
    <NewPost
      handlePostChange={handlePostChange}
      postContent={postContent}
      handleAddNewPost={handleAddNewPost}
      errorMessage={errorMessage}
    />
  )
}
