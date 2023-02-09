import { createStore } from "redux";
import { combineReducers } from "redux";
import homeReducer from "./reducers/homeReducer";
import personalReducer from "./reducers/personalReducer";
 const rootReducer=combineReducers(
{
    homeState:homeReducer,
    personalState:personalReducer})
    const store= createStore(rootReducer)
 export default store