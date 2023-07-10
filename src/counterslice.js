
import {createSlice} from "@reduxjs/toolkit"
 const counterslice=createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        move:(state)=>{
            state.value+=1
        }

    }
})
export const {move}= counterslice?.actions
export default counterslice.reducer