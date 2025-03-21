import { ActionCreatorsMapObject, bindActionCreators, Dispatch } from 'redux'
import { useMemo } from 'react'

export const useActions = <A, M extends ActionCreatorsMapObject<A>>(
  dispatch: Dispatch,
  actions: M
): M => {
  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [dispatch, ...Object.values(actions)]
  )
}

export default useActions
