import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0,
        list:[],
    },
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        addList:(state,action)=>{
            state.list.push(action.payload);
        }
    }
})

export const{increment,decrement,addList}= counterSlice.actions;
export default counterSlice.reducer;