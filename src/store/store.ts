import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducer'

const middlewares = [
  thunkMiddleware,
  createLogger()
]

console.log(123)

export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  return store
}