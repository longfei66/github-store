import { combineReducers } from 'redux'
import escReducer from './escReducer.js'


export default combineReducers({
    esc : escReducer
})