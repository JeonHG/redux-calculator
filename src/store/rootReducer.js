import {combineReducers} from '@reduxjs/toolkit'
import calculatorReducer from '../calculator/state'

export const rootReducer = combineReducers({
  calculator: calculatorReducer
})