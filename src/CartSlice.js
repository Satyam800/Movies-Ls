import {createSlice} from "@reduxjs/toolkit"

const favslice=createSlice({
    name:"Favourite",
    initialState:{
        item: [] ,
        pageNum:{
            item:1
        },
      
        mode:{
            ismode:"normal"
        },
        data:{
            item:[]
        },
        dataStorage:{
            item:null
        }
       
           
        
        
       
    },
    reducers:{
        addItem:(state,action)=>{
         
       state.item.push(action.payload)
         localStorage.setItem("Fav",JSON.stringify(state.item.flat(1)))
    
               
    //    let c=Object.assign({}, state.item)
    //    console.log(c,"mnmnm");
    //    localStorage.setItem("Fav",JSON.stringify((state.item.map((item)=>{
    //     return item
    //    }))))
   
 
    state.dataStorage.item=JSON.parse(localStorage.getItem("Fav"))
 
  
    
        },
       setItem:(state,action)=>{
       state.item= state.item?.filter((item,index,arr)=>{
        
        
            if(item.id==action.payload.id){
                state.item.splice(index,1)
            
            }
           
           })

       },
      
    RemoveItem:(state,action)=>{
       
     
        let x=JSON.parse(localStorage.getItem("Fav"))
     x?.forEach((item,index,arr)=>{
        
        
        if(item.id==action.payload.id){
            x.splice(index,1)
         localStorage.setItem("Fav",JSON.stringify(x))
        }
       
       })
    state.dataStorage.item=JSON.parse(localStorage.getItem("Fav"))
      
    
    
    },
  
    pageNo:(state,action)=>{
        
       state.pageNum={
        ...state.pageNum,
        item:action.payload
       }
       
    },
    PageD:(state,action)=>{
        state.pageNum={
            ...state.pageNum,
            item:action.payload
           }
    },
    PageA:(state,action)=>{
        state.pageNum.item+=1
    },
    PageU:(state,action)=>{
        state.pageNum={
            ...state.pageNum,
            item:action.payload
           }
    },
     changeMode:(state,action)=>{
        state.mode={
            ...state.mode,
            ismode:action.payload
           }

     },
    
    

    }
    })
  

export const {addItem,RemoveItem,pageNo,PageD,PageU,changeMode,PageA,setItem}= favslice?.actions
export default favslice.reducer
