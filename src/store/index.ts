import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
//import {configureStore} from '@reduxjs/toolkit'
import reducers from './reducers'

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk)) // createStore deprecated
//export const store = configureStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;