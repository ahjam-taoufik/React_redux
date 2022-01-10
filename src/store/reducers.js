import LoggedReducer from "./LoggedReducer";
import counterReducer from "./counterReducer";
import { combineReducers } from "redux";


const reducers=combineReducers({
    counter:counterReducer,
    logged:LoggedReducer
})

export default reducers;