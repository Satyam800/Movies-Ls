import React,{useEffect} from "react";
import { useDispatch } from "react-redux"
import FavItem from "./FavItem";


import { useSelector } from "react-redux"
const Favourite=()=>{

  const dispatch= useDispatch()
  
let k= JSON.parse(localStorage.getItem("Fav"))

let j= useSelector(store=>store.Favourite.dataStorage.item)
console.log(j,"jj")

    return(
        <>


        <div className=" flex flex-wrap  mt-40 space-x-1  absolute  ">
          {
             j?.map((item)=>{
               
               return <FavItem item={item}/>
            })
          }

        </div>
        
        
        
        </>
    )
}
export default Favourite