# use-full-reducer

> Wrap useReducer hook to manage actions and selectors

[![NPM](https://img.shields.io/npm/v/use-full-reducer.svg)](https://www.npmjs.com/package/use-full-reducer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-full-reducer
```

## Usage

### useFullReducer

```jsx
import { useFullReducer } from 'use-full-reducer'
import { createSlice } from '@reduxjs/toolkit'

// Create a slice with @reduxjs/toolkit
const mySlice = createSlice({
  name: 'myReducer',
  initialState: { /* your initial state */ },
    // Your reducers here
  reducers: {
    setForm: (state, {payload: form}) => form || state,
    setValue: {
      reducer: (state, {payload: {name, value}}) => {
        state[name] = value
      },
      prepare: (name, value) => ({payload: {name, value}})
    }
  }
})

// Use the hook
const defaultValue = {};
const initValue = (value) => {...value, /* some changes */};

const [form, formActions] = useFullReducer(
  mySlice,
  defaultValue,
  initValue
)
const { setForm, setValue } = formActions;

// Then use the state and actions
const handleClick = e => {
  setValue(name, e.target.value)
}
```

### useActions

```jsx
import { useActions } from 'use-full-reducer'

// dispatch can come from useDispatch or useReducer hooks
const actions = useActions(dispatch, [myAction])
```

Example:

```jsx
import { useDispatch } from 'react-redux'
import { useActions } from 'use-full-reducer'
import { mySlice } from '../reducers/myReducer'

const dispatch = useDispatch()
const { myAction } = useActions(dispatch, mySlice.actions)

// Now you can use the actions
const handleClick = () => {
  myAction('new value')
}
```

### usePrevious

```jsx
import { usePrevious } from 'use-full-reducer'

const prevEntity = usePrevious(entity)

useEffect(() => {
  if (prevEntity.id) {
    // change of entity
  } else {
    // entity has been set from void
  }
}, [entity.id])
```

## TypeScript Support

This package is fully written in TypeScript and provides type definitions out of the box.

## License

MIT © [GeoDaz](https://github.com/GeoDaz)
