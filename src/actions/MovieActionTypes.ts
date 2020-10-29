export const MOVIE_LIST_LOADING = 'MOVIE_LIST_LOADING'
export const MOVIE_LIST_FAIL = 'MOVIE_LIST_FAIL'
export const MOVIE_LIST_SUCCESS = 'MOVIE_LIST_SUCCESS'

// export const MOVIE_DETAILS_LOADING = 'MOVIE_DETAILS_LOADING'
// export const MOVIE_DETAILS_FAIL = 'MOVIE_DETAILS_FAIL'
// export const MOVIE_DETAILS_SUCCESS = 'MOVIE_DETAILS_SUCCESS'

// export interface MovieType {
//   loading: boolean
//   movie: Movie[]
// }

export interface Movie {
  id: number
  original_title: string
  overview: string
  poster_path: string
  backdrop_path: string
  release_date: string
}

export interface MoviesLoading {
  type: typeof MOVIE_LIST_LOADING
}
export interface MoviesFail {
  type: typeof MOVIE_LIST_FAIL
}

export interface MoviesSuccess {
  type: typeof MOVIE_LIST_SUCCESS
  payload: Movie[]
}

export type MovieDispatchTypes = MoviesLoading | MoviesFail | MoviesSuccess
