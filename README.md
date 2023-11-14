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
import useFullReducer from 'use-full-reducer'

const [reducerValue, actions, selectors] = useFullReducer(
  reducerName,
  [myAction],
  [mySelector],
  initialReducerValue,
  initialReducerFunc
)
```

Example :

```jsx
import useFullReducer from 'use-full-reducer'
import { setFormAction, setValueAction } from '../actions/form'
import { selectFormData } from '../selectors/form'

const defaultValue = {};
const initValue = (value) => {...value, /* some changes */};
const [
  form,
  [setForm, setValue],
  [getFormData]
] = useFullReducer(
  formReducer,
  [setFormAction, setValueAction],
  [selectFormData],
  defaultValue,
  initValue
)
```

### useActions

```jsx
import { useActions } from 'use-full-reducer'

// dispatch can come from useDispatch or useReducer hooks
const actions = useActions(dispatch, [myAction])
```

Example :

```jsx
import { useDispatch } from 'react-redux'
import { useActions } from 'use-full-reducer'
import { setObjectAction, setValueAction } from '../actions'

const dispatch = useDispatch()
const [setObject, setValue] = useActions(dispatch, [
  setObjectAction,
  setValueAction
])
```

### useSelectors

```jsx
import { useSelectors } from 'use-full-reducer'

// reducerValue can come from useReducer or useSelector hooks
const selector = useSelectors(reducerValue, [mySelector])
```

Example :

```jsx
import { useSelectors } from 'use-full-reducer'
import { count } from '../selectors'

const [state, dispatch] = useReducer(reducer, initialState)
const [countValues] = useSelectors(state, [count])
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

## License

MIT © [GeoDaz](https://github.com/GeoDaz)
