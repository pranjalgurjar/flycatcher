 import { createSlice } from "@reduxjs/toolkit"
 const Slice =  createSlice({
    name:"ProductSlice",
    initialState : {
        value : ""
    },
    reducers : {
        Add : (state,action)=>{
            const data = action.payload
            state.value = data
        },
    }
})

export const {Update,Add,Delete} = Slice.actions
export default Slice.reducer