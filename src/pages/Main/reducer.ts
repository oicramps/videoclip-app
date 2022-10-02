import { Genre } from '../../../types'

export type FilterState = {
  search: string
  genre: Genre[]
  year?: number
}

export type FilterValue = string | Genre[] | number

export type FilterAction = {
  value?: FilterValue
  type: FilterActionTypes
}

export enum FilterActionTypes {
  UPDATE_SEARCH = 'UPDATE_SEARCH',
  UPDATE_GENRE = 'UPDATE_GENRE',
  UPDATE_YEAR = 'UPDATE_YEAR',
  CLEAR = 'CLEAR',
}

export const filterInitialState: FilterState = {
  search: '',
  genre: [],
  year: undefined,
}

const filterReducer = (state: FilterState, action: FilterAction) => {
  switch (action.type) {
    case FilterActionTypes.UPDATE_SEARCH:
      return { ...state, search: action.value as string }
    case FilterActionTypes.UPDATE_GENRE:
      return { ...state, genre: action.value as Genre[] }
    case FilterActionTypes.UPDATE_YEAR:
      return { ...state, year: action.value as number }
    case FilterActionTypes.CLEAR:
      return filterInitialState
  }
}

export default filterReducer
