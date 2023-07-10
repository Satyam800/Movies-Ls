import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "react"
import { changeMode } from "./CartSlice"
import { movies,setchange,Setdata,Setfilterdata,setinputValue } from "./movieslice"
import { Link } from "react-router-dom"
import { checkboxClasses } from "@mui/material"
import Search from "./Search"
const Header=()=>{

   const dispatch=useDispatch()

   const CheckMode= useSelector(store=>store.Favourite.mode.ismode)
   const searchdata=useSelector(store=>store.movie.change)
   let Bmovie=useSelector(store=>store.movie.data?.item)

   const Dmode=(item)=>{
     dispatch(changeMode(item))
     console.log(CheckMode);
   }
   const Nmode=(item)=>{
      dispatch(changeMode(item))
      console.log(CheckMode);
    }

    useEffect(()=>{
      document.body.className=CheckMode

    },[CheckMode])

    const  handleSearch=()=>{

     
      
      console.log(searchdata,"npbefore");
      let data=searchdata
     
      let length= searchdata?.length
      
      let b=Bmovie.filter((item)=>{
        if(item?.title.toLowerCase().slice(0,length)==searchdata?.toLowerCase()){
          return true
        }
        return false
      })
      if(length==0){
        
        b=null
      }
       console.log(b,"bb");
       dispatch(Setfilterdata(b))
    
      

    }


return(
    <>
    

 <div className= " flex  justify-evenly w-full h-24 bg-amber-300  fixed z-40">

 <div className=" flex text-xl text-b w-40 rounded-sm h-7 m-10  ">
   Movie Zone
</div>
    
<div className="flex ">
<input className="bg-white h-7 w-96 rounded-md m-10 mr-0 outline-0 focus:ring focus:ring-violet-300 text-xl" 
onChange={(e)=>dispatch(setchange((e.target.value)))} />

<button className="bg-green-400 w-24 h-7 rounded-lg m-10 ml-0" onClick={()=>handleSearch()}  > <Link to="./Search">Search</Link></button>
</div>

<div className="flex ">
    
<div className=" flex text-xl  w-40 rounded-sm h-7 m-10  cursor-pointer ">
  <Link to="./Favourite"> Favourite</Link>
</div>

<div className=" flex text-xl  w-40 rounded-sm h-7 m-10  cursor-pointer">
{
  CheckMode=="normal" ?<button onClick={()=>Dmode("darkmode")}>
   DarkMode
  </button>:
  <button onClick={()=>Nmode("normal")}>
   Normal
  </button>
}
</div>
</div>

 </div>
    
    </>
)


}
export default Header