import React from "react"
import { Constant,IMG_URL } from "../Constant"
import { addItem,addItem2,RemoveItem } from "./CartSlice"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { move } from "./counterslice"



const Card=(props)=>{

  const cartItem=useSelector(store=> store?.Favourite?.item )
  let inc= useSelector(store=>store.counter?.value)

    const dispatch= useDispatch()

  const handleaddFav=(item)=>{
    
    
    dispatch(addItem(item))
   
    
    dispatch(move())
   

   

}
 
cartItem.map((item,index)=>{
  localStorage.setItem(`${index}`,JSON.stringify(item))
  
   })
    
  const isFavourite=(item)=>{
const index= cartItem.indexOf(item)
if(index==-1){
  return false
}
return true

  }
 
    return(
        <>
        
      <div className="w-80  h-96 bg-white mb-10 rounded-lg ">

      <div className="w-80  h-80   ">
        <img  className="w-80  h-80"  src={IMG_URL+props.item?.poster_path} />

</div>

<span className="text-xl ">
{props.item?.title}
</span>


<div className="bg-green-100 rounded-lg w-80 text-xl text-center absolute">
   


  <button onClick={()=> handleaddFav(props.item)} > ADD TO FAVOURITE</button>
    

</div>



      </div>
        
        
        </>
    )
}

export default Card