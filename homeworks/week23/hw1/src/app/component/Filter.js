import styled from 'styled-components'
import { VISIBILITY_FILTERS } from '../constants'

const FlexContainer = styled.div`
  display: flex;
  margin-top: 35px;
  .active {
    color: white;
    background-color: #0d6efd;
  }
`
const Button = styled.button`
  padding: 6px 12px;
  margin-left: 20px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: white;
`
const ToggleButton = styled(Button)`
  background-color: white;
  border-color: #0d6efd;
  color: #0d6efd;
  :hover {
    color: white;
    background-color: #0d6efd;
    transition: 0.3s;
  }
`
const RedButton = styled(Button)`
  margin-left: 0;
  background: red;
  color: white;
  border: none;
`
export default function Filter({ state, setFilter, deleteAll }) {
  return (
    <FlexContainer>
      <RedButton
        onClick={() => {
          deleteAll()
        }}
      >
        清空 Todo
      </RedButton>
      <ToggleButton
        className={state === 'all' ? 'active' : ''}
        onClick={() => {
          setFilter(VISIBILITY_FILTERS.ALL)
        }}
      >
        全部
      </ToggleButton>
      <ToggleButton
        className={state === 'complete' ? 'active' : ''}
        onClick={() => {
          setFilter(VISIBILITY_FILTERS.COMPLETE)
        }}
      >
        已完成
      </ToggleButton>
      <ToggleButton
        className={state === 'incomplete' ? 'active' : ''}
        onClick={() => {
          setFilter(VISIBILITY_FILTERS.INCOMPLETE)
        }}
      >
        未完成
      </ToggleButton>
    </FlexContainer>
  )
}
