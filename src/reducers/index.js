// import { combineReducers } from 'redux'
import initialState from '../fixture/'

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_USER': {
      return {
        ...state,
        fetchState: 'FETCHING'
      }
    }
    case 'FETCHED_USER': {
      return {
        ...state,
        users: action.payload,
        fetchState: 'FETCHED'
      }
    }
    case 'FETCH_USER_ERROR': {
      return {
        ...state,
        error: action.payload,
        fetchState: 'FETCH_ERROR'
      }
    }
  }
  return state
}
