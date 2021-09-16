import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getThatPage } from '../../WebAPI'

import {
  PageController,
  PostContainer,
  Post,
  ErrorMessage
} from '../../components/components'

export default function AllPost() {
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const { page } = useParams()
  const [totalPostCount, setTotalPostCount] = useState('')
  useEffect(() => {
    async function fetchData() {
      let res = await getThatPage(Number(page))
      if (!res.ok) return setErrorMessage(res.message)
      setTotalPostCount(res.headers.get('x-total-count'))
      res = await res.json()
      setPosts(res)
      setIsLoading(false)
    }
    fetchData()
    setErrorMessage('')
  }, [page])
  useEffect(() => {
    window.scroll(0, 0)
  }, [posts])
  function handleClickPage() {
    setIsLoading(true)
    setPosts([])
  }
  return (
    <PostContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      {!isLoading && (
        <PageController
          currentPage={Number(page)}
          totalPostCount={totalPostCount}
          handleClickPage={handleClickPage}
        />
      )}
    </PostContainer>
  )
}
