import {configureStore} from "@reduxjs/toolkit";
import listSlice from "./Slice";

const store = configureStore ({
    reducer:{
        listSlice:listSlice
    }
})
export default store;