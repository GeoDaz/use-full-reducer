import React from 'react'
import ReactDOM from 'react-dom'
import useFullReducer from '../src/lib/useFullReducer'
import usePrevious from '../src/lib/usePrevious'

const SET_STATE = 'SET_STATE'
const SET_VALUE = 'SET_VALUE'

const setFormAction = (value) => ({ type: SET_STATE, value })
const setValueAction = (name, value) => ({ type: SET_VALUE, name, value })

const getLengthSelector = (form) => Object.keys(form).length

// state is automaticaly given by dispatch, only action is settable in dispatch params
const formReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_VALUE:
      return { ...state, [action.name]: action.value } || state

    case SET_STATE:
      return action.value || state
    default:
      return state
  }
}

const App = () => {
  const [form, [setForm, setValue], [getLength]] = useFullReducer(
    formReducer,
    [setFormAction, setValueAction],
    [getLengthSelector],
    {},
    (form) => ({ ...form, id: 1 })
  )
  const prevForm = usePrevious(form)

  if (form.id === 1) {
    setForm({ ...form, name: 'test' })
    setValue('id', form.id + 1)
  }
  return (
    <ul>
      <li>id : {form.id}</li>
      <li>prevId : {prevForm.id}</li>
      <li>length : {getLength()}</li>
    </ul>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
