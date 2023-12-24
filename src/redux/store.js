import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./TodoReducer";

export const store = configureStore({
    reducer : combineReducers({
        todo: TodoReducer
    }),
     devTools:{name:'todo'}
})