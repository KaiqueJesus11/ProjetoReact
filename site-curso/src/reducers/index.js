import {combineReducers} from "redux"
import contatoReducers from './contatoReducers'
import cursoReducer from './cursoReducers'

const reducers = combineReducers({
    contato : contatoReducers,
    curso: cursoReducer
})
export default reducers