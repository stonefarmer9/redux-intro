import * as actions from '../actions/commentsActions'

export const initialState = {
  loading: false,
  hasErrors: false,
  comments: []
}

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case action.GET_COMMENTS:
      return { ...state, loading: true}
    case action.GET_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload, loading: false, hasErrors: false}
    case action.GET_COMMENTS_FAILURE:
      return { ...state, loading: false, hasErrors: true}
    default:
      return state
  }
}
