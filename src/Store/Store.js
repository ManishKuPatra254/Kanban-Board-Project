import {configureStore} from "@reduxjs/toolkit";
import listSlice from "./Slice";
import cardSlice from "./Slice2";

const store = configureStore ({
    reducer:{
        listSlice:listSlice,
        listCard: cardSlice
    }
})
export default store;