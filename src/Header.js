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
    

 <div className= " w-full sm:w-full sm:flex  sm:justify-evenly justify-evenly sm:h-24 h-[20%] bg-amber-300  fixed z-40">

 <div className="  sm:text-xl text-b  sm:w-[8%] w-40 rounded-sm h-7  sm:m-10 mb-2 sm:ml-[10%] ml-[40%]  ">
   Movies
</div>
    
<div className="flex ml-[11%]">
<input className="bg-white h-7  w-22 sm:w-96 rounded-md sm:m-10 mr-0 outline-0 focus:ring focus:ring-violet-300 text-xl" 
onChange={(e)=>dispatch(setchange((e.target.value)))} />

<button className="bg-green-400 w-24 h-7 rounded-lg sm:m-10 ml-0" onClick={()=>handleSearch()}  > <Link to="./Search">Search</Link></button>
</div>

<div className="flex ml-[11%]">
    
<div className=" flex text-xl w-32 sm:w-40 rounded-sm h-7 sm:m-10  cursor-pointer m-4  ">
  <Link to="./Favourite"> Favourite</Link>
</div>

<div className=" flex text-xl  w-40 rounded-sm h-7  sm:m-10 m-4 cursor-pointer">
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