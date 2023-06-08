import { createSlice } from "@reduxjs/toolkit";


const CardSlice = createSlice({
    name:"card",
    initialState:{
        Card:[]
    },
    reducers:{
        addCard:(state,action)=>{
            if(action.payload!==''){
            state.Card.push(action.payload);
            }
        }
    }
});

export const { addCard } = CardSlice.actions;
export default CardSlice.reducer;