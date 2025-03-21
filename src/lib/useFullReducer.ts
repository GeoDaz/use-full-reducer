import { useReducer } from 'react'
import { useActions } from './useActions'
import { Slice, SliceCaseReducers } from '@reduxjs/toolkit'
import { Dispatch } from 'redux'

/** Use it when you need actions and selectors */
export const useFullReducer = <
  S,
  A extends { type: string },
  CR extends SliceCaseReducers<S>
>(
  slice: Slice<S, CR>,
  initializerArg: A,
  initializer: (i: A) => S
) => {
  const [state, dispatch] = useReducer(
    slice.reducer,
    initializerArg,
    initializer
  )

  // Bind action creators to dispatch
  const actions = useActions(
    dispatch as Dispatch,
    slice.actions
  )

  // Return state and actions but not selectors as they don't exist on Slice type
  return [state, actions]
}

export default useFullReducer
