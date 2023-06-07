import {createSlice} from '@reduxjs/toolkit';

const cardSlice = createSlice ({
    name:'cardSlice',
    initialState:{
        Card:[]
    },
    reducers:{
        addCard:(state,action) =>{
            if(action.payload!==''){
                state.Card.push(action.payload)

            }

        }
    }
})
export const {addCard} = cardSlice.actions;
export default cardSlice.reducer;
