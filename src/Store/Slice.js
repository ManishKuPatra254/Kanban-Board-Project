import {createSlice} from "@reduxjs/toolkit";

const listSlice = createSlice({
    name:'listSlice',
    initialState:{
        list:[]
    },
    reducers:{
        addList:(state,action) => {
            state.list.push(action.payload)
            console.log("action called",action)
        }
    }
})
export const {addList} = listSlice.actions;
export default listSlice.reducer