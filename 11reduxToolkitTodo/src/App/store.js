import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/Todo/Todoslice';

export const store= configureStore({
    reducer: todoReducer
})

//here we are not usind any local storage.............this file creates a Redux storage....so the data we save right now will only persist for that particular session