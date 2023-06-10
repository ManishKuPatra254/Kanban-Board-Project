import { configureStore } from "@reduxjs/toolkit";
import listSlice from './ListSlice';

const store = configureStore({
    reducer: {
        listSlice: listSlice
    }

})

export default store;