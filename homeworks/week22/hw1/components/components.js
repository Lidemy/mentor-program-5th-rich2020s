import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FormContainer = styled.div`
  max-width: 800px;
  min-height: 600px;
  margin: 20px auto;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  div + div {
    margin-top: 30px;
  }
`
export const FormTitle = styled.h1`
  text-align: left;
  margin-top: 0;
`
export const Button = styled.a`
  display: block;
  text-align: center;
  background: #ddd;
  padding: 5px;
  border: none;
  margin-top: 30px;
  transition: all 0.3s;
  font-size: 16px;
  :hover {
    cursor: pointer;
    background: white;
  }
`
export const Input = ({ input, handleInputChange }) => {
  let isPassword = false
  if (input.label === 'Password') isPassword = true
  return (
    <div>
      <div>{input.label}:</div>
      <input
        placeholder={`您的 ${input.label}`}
        name={input.label}
        value={input.value}
        onChange={handleInputChange}
        type={isPassword === true ? 'password' : undefined}
      />
    </div>
  )
}
export const PostContainer = styled.div`
  max-width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  div + div {
    margin-top: 30px;
  }
`
export const PostTitle = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const ErrorMessage = styled.div`
  color: red;
  margin-top: 20px;
`
const NewPostInputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
const PostContent = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 30px;
`
export const Post = ({ post }) => {
  const time = new Date(post.createdAt).toLocaleString()
  return (
    <div
      style={{
        paddingBottom: '20px',
        borderBottom: '1px solid #ccc',
        width: '60%'
      }}
    >
      <PostTitle>{post.title}</PostTitle>
      <div>{time}</div>
      <PostContent>{post.body}</PostContent>
      <Link
        to={`/posts/${post.id}`}
        style={{
          cursor: 'pointer',
          color: 'black'
        }}
      >
        繼續閱讀
      </Link>
    </div>
  )
}
export const NewPost = ({
  postContent,
  handlePostChange,
  handleAddNewPost,
  errorMessage
}) => (
  <FormContainer
    style={{
      justifyContent: 'flex-start',
      height: '100%'
    }}
  >
    <FormTitle style={{ marginTop: '30px' }}>新增文章</FormTitle>
    <Form
      style={{
        width: '90%',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <NewPostInputContainer>
        <h3>文章標題：</h3>
        <input
          style={{ height: '29px' }}
          placeholder="標題"
          value={postContent.title}
          onChange={(e) => {
            handlePostChange(e, 'title')
          }}
        />
      </NewPostInputContainer>
      <FormTitle as="h3">文章內容</FormTitle>
      <textarea
        value={postContent.content}
        style={{
          margin: '0 auto',
          height: '230px',
          width: '80%'
        }}
        onChange={(e) => {
          handlePostChange(e, 'content')
        }}
      />
      <div
        style={{
          display: 'visibility',
          margin: '10px auto',
          color: 'red'
        }}
      >
        {errorMessage}
      </div>
      <Button
        style={{
          margin: '30px auto',
          padding: '10px',
          width: '70px',
          borderRadius: '3px'
        }}
        onClick={handleAddNewPost}
      >
        新增
      </Button>
    </Form>
  </FormContainer>
)
const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 80px;
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  div + div {
    margin-left: 20px;
  }
  a + a {
    margin-left: 20px;
  }
`
const ActivePage = styled.div`
  border-radius: 50%;
  height: 30px;
  width: 30px;
  margin: 0 20px;
  text-align: center;
  line-height: 30px;
  background-color: #ddd;
  color: black;
`
const PageLinks = styled(Link)`
  color: black;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`
export const PageController = ({
  currentPage,
  totalPostCount,
  handleClickPage
}) => {
  let pageCount = Math.floor(totalPostCount / 5)
  if (totalPostCount % 5 !== 0) pageCount += 1
  return (
    <ControlPanel>
      <FlexContainer>
        {currentPage === 1
          ? (
              ''
            )
          : (
          <PageLinks
            onClick={handleClickPage}
            to={`/all-post/${currentPage - 1}`}
          >
            上一頁
          </PageLinks>
            )}
        {currentPage - 2 >= 1
          ? (
          <PageLinks
            onClick={handleClickPage}
            to={`/all-post/${currentPage - 2}`}
          >
            {currentPage - 2}
          </PageLinks>
            )
          : (
              ''
            )}
        {currentPage - 1 >= 1
          ? (
          <PageLinks
            onClick={handleClickPage}
            to={`/all-post/${currentPage - 1}`}
          >
            {currentPage - 1}
          </PageLinks>
            )
          : (
              ''
            )}
        <ActivePage>{currentPage}</ActivePage>
        {pageCount - currentPage >= 1
          ? (
          <PageLinks
            onClick={handleClickPage}
            to={`/all-post/${currentPage + 1}`}
          >
            {currentPage + 1}
          </PageLinks>
            )
          : (
              ''
            )}
        {pageCount - currentPage >= 2
          ? (
          <PageLinks
            onClick={handleClickPage}
            to={`/all-post/${currentPage + 2}`}
          >
            {currentPage + 2}
          </PageLinks>
            )
          : (
              ''
            )}
        {pageCount - currentPage >= 1
          ? (
          <PageLinks
            onClick={handleClickPage}
            to={`/all-post/${currentPage + 1}`}
          >
            下一頁
          </PageLinks>
            )
          : (
              ''
            )}
      </FlexContainer>
      <FlexContainer>
        {currentPage !== 1
          ? (
          <PageLinks onClick={handleClickPage} to={'/all-post/1'}>
            第一頁
          </PageLinks>
            )
          : (
              ''
            )}
        {currentPage !== pageCount
          ? (
          <PageLinks onClick={handleClickPage} to={`/all-post/${pageCount}`}>
            最後一頁
          </PageLinks>
            )
          : (
              ''
            )}
      </FlexContainer>
    </ControlPanel>
  )
}
