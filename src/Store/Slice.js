import {createSlice} from "@reduxjs/toolkit";

const listSlice = createSlice({
    name:'listSlice',
    initialState:{
        List:[]
    },
    reducers:{
        addList:(state,action) => {
            if(action.payload!== ''){
            state.List.push(action.payload)
            // console.log("action called",action)
            }
        }
    }
})
export const {addList} = listSlice.actions;
export default listSlice.reducer;