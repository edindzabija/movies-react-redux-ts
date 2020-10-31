export const SHOW_LIST_LOADING = 'SHOW_LIST_LOADING'
export const SHOW_LIST_FAIL = 'SHOW_LIST_FAIL'
export const SHOW_LIST_SUCCESS = 'SHOW_LIST_SUCCESS'

export const SHOW_DETAILS_LOADING = 'SHOW_DETAILS_LOADING'
export const SHOW_DETAILS_FAIL = 'SHOW_DETAILS_FAIL'
export const SHOW_DETAILS_SUCCESS = 'SHOW_DETAILS_SUCCESS'

export interface Show {
  id: number
  name: string
  overview: string
  poster_path: string
  backdrop_path: string
  release_date: string
}

export interface ShowsLoading {
  type: typeof SHOW_LIST_LOADING
}
export interface ShowsFail {
  type: typeof SHOW_LIST_FAIL
  payload: Error
}

export interface ShowsSuccess {
  type: typeof SHOW_LIST_SUCCESS
  payload: Show[]
}

export interface ShowDetailsLoading {
  type: typeof SHOW_DETAILS_LOADING
}
export interface ShowDetailsFail {
  type: typeof SHOW_DETAILS_FAIL
  payload: Error
}

export interface ShowDetailsSuccess {
  type: typeof SHOW_DETAILS_SUCCESS
  payload: Show
}

export type ShowDispatchTypes =
  | ShowsLoading
  | ShowsFail
  | ShowsSuccess
  | ShowDetailsLoading
  | ShowDetailsFail
  | ShowDetailsSuccess
