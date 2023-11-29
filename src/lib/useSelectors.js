import { useMemo } from 'react'

export const useSelectors = (state, selectors) =>
  useMemo(() => selectors.map((selector) => selector(state)), [state])
export default useSelectors
