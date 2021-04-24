import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {dictionaryReducer} from './reducers'

const reducers = combineReducers({
    dictionary: dictionaryReducer
})

const initialState = {}

const store =  createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
)

export default store