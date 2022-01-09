import { createStore } from "redux";
import CakeReducer from "./cake/CakeReducer";


const store=createStore(CakeReducer)

export default store;