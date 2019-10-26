import {combineReducers} from "redux"
import contatoReducers from './contatoReducers'

const reducers = combineReducers({
    contato : contatoReducers,
})
export default reducers