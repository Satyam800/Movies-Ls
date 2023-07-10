
import {createSlice} from "@reduxjs/toolkit"
 const movieslice=createSlice({
    name:"movie",
    initialState:{
        item:null,
        data:{
            item:[]
        },
        change:null,
        inputValue:null
    },
    reducers:{
     
           
        Setfilterdata:(state,action)=>{
            console.log(action.payload,"ccc")
            state.item=action.payload
            
        },
        Setdata:(state,action)=>{
            state?.data?.item.push(...action.payload)
            
        },
        setchange:(state,action)=>{
            console.log(action.payload,"word");
            state.change=action.payload
        },
        setinputValue:(state,action)=>{
            state.inputValue=action.payload
        }

    }
})
export const {movies,Setdata,setchange,Setfilterdata,setinputValue}= movieslice?.actions
export default movieslice.reducer