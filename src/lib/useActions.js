import { useMemo } from 'react'

export const useActions = (dispatch, actions) =>
  useMemo(
    () =>
      actions.map(
        (action) =>
          (...args) =>
            dispatch(action(...args))
      ),
    [dispatch]
  )
export default useActions
