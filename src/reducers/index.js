import {combineReducers} from "redux";
import nameReducer from './nameReducer'
// import emailReducer from './emailReducer'
// import passwordReducer from './passwordReducer'

export default combineReducers({
    name: nameReducer
})
