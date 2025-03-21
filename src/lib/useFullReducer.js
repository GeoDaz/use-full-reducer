import { useReducer } from 'react'

/** Use it when you need actions and selectors */
export const useFullReducer = (slice, initializerArg, initializer) => {
  const [state, dispatch] = useReducer(
    slice.reducer,
    initializerArg,
    initializer
  )

  // Bind action creators to dispatch
  const actions = bindActionCreators(slice.actions, dispatch)

  return [state, actions, slice.selectors]
}

export default useFullReducer
