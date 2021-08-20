import {configureStore} from '@reduxjs/toolkit'

import logger from 'redux-logger'
import {rootReducer} from './rootReducer'

const middleware = [logger]

const createStore = () => {
  const store = configureStore({
    middleware,
    reducer: rootReducer
  })
  return store
}

export default createStore