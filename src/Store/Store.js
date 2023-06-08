import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Slice';
import cardReducer from './Slice2';

const store = configureStore({
    reducer:{
        todo: todoReducer,
        card: cardReducer
    }
});


export default store;