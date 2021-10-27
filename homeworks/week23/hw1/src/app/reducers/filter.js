/* eslint-disable */
import { SET_FILTER } from '../actionTypes'
import { VISIBILITY_FILTERS } from '../constants'
const initialState = {
  state: VISIBILITY_FILTERS.ALL,
}
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_FILTER: {
      return {
        state: action.payload.filter,
      }
    }
    default:
      return state
  }
}
