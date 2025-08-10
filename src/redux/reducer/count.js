import { createSlice } from "@reduxjs/toolkit";


const countSlice = createSlice({
    name : "newCounter",

    initialState:{
        item:0
    },
    reducers:{
        increment:(state)=>{
            state.item +=1
        }

    }
})
export const {increment}=countSlice.actions

export default countSlice.reducer