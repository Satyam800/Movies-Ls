import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import Card from "./Card"

const Search=()=>{
    const getmovie=useSelector(store=>store.movie?.item)
    return(
        <>
            <div className="flex flex-wrap space-x-2 absolute mt-40    ">
     { getmovie?.map((item)=>{
   return <Card item={item} key={item?.id } />
          
      })}
      </div>
        
        
        </>
    )
}
export default Search