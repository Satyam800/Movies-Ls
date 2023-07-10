import React from "react"
import {useParams} from "react-router-dom"

const Detail=()=>{

    let id=useParams()

    return(
        <>
        
        <div  className="text-3xl absolute mt-60">
          hello hello


{console.log(id)}
        </div>
        
        
        
        </>
    )
}
export default Detail