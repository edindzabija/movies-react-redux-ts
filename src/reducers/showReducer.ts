import {
  ShowDispatchTypes,
  SHOW_LIST_LOADING,
  SHOW_LIST_SUCCESS,
  SHOW_LIST_FAIL,
  SHOW_DETAILS_LOADING,
  SHOW_DETAILS_FAIL,
  SHOW_DETAILS_SUCCESS,
  Show,
} from '../actions/ShowActionTypes'

interface DefaultStateI {
  loading: boolean
  shows?: Show[]
  error?: Error
}

const defaultState: DefaultStateI = {
  loading: false,
  shows: [],
}

interface DefaultDetailsStateI {
  loading?: boolean
  show?: Show
  error?: Error
}

const defaultDetailsState: DefaultDetailsStateI = {
  loading: false,
}

export const showReducer = (
  state: DefaultStateI = defaultState,
  action: ShowDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case SHOW_LIST_LOADING:
      return {
        loading: true,
        shows: [],
      }
    case SHOW_LIST_SUCCESS:
      return {
        loading: false,
        shows: action.payload,
      }
    case SHOW_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const showDetailsReducer = (
  state: DefaultDetailsStateI = defaultDetailsState,
  action: ShowDispatchTypes
): DefaultDetailsStateI => {
  switch (action.type) {
    case SHOW_DETAILS_LOADING:
      return { loading: true, ...state }
    case SHOW_DETAILS_SUCCESS:
      return { loading: false, show: action.payload }
    case SHOW_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
