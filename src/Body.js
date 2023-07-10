import React,{useState,useEffect,useCallback} from "react"
import Card from "./Card"
import { Constant } from "../Constant"
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux"
import {useSelector} from "react-redux"
// import { Pagination } from "./Pagination"

import {pageNo,PageD,PageU,PageA} from "./CartSlice"
import{move} from "./counterslice"
import {movie,Setdata} from "./movieslice"
import { CircularProgress } from '@mui/material';
import {movies} from "./movieslice"

 
const Body=(props)=>{

   
  

    const favItem=useSelector(store=> store.Favourite.item)
    const PageL=useSelector(store=>store.Favourite.pageNum?.item)
    const PageZ=useSelector(store=>store.Favourite.pageNumscroll?.item)
  
const getmovie=useSelector(store=>store.movie?.data.item)


 
    const dispatch= useDispatch()

   //  useEffect(() => {
   //    localStorage.setItem('Fav', JSON.stringify(favItem));
   //  }, [favItem]);

   

  
    console.log(favItem,"fav")

   
  
    const [loading,setloading]=useState(false)
   
    const handlePage=(item)=>{
   
      dispatch(pageNo(item))
      console.log(PageL,"vcvc");
   }
   const handledown=(item)=>{
      dispatch(PageD(++item))
      console.log(PageL,"nb");
   }

   const handleup=(item)=>{
      if(PageL==1){
         return
      }
    
      dispatch(PageU(--item))
   }

    useEffect(()=>{
 async function fetchData(){

    let res= await fetch(Constant+PageL)
    let call= await res?.json()
    dispatch(Setdata(call?.results))
   
    console.log(getmovie,"movie");
//   setb((prev)=>[...prev,...v])
  setloading(false)
 
 }
 fetchData()

 window.addEventListener("scroll",()=>{
   if(window.innerHeight+document.documentElement.scrollTop+2>=document.documentElement.scrollHeight){
     
      setloading(true)
      
    dispatch(PageA())
   
     
   }
})
 },[PageL])




    return (
        <>
  {loading?<div className=" fixed top-3/4  left-1/2 z-50">
        <CircularProgress size={70} colorSecondary />
        </div>:null}

        
      <div className="flex flex-col ">
     
        
        <div className="flex absolute mt-60 flex-wrap justify-evenly ">
     { getmovie?.map((item)=>{
   return <Card item={item} key={item?.id } />
          
      })}
  
        </div>
        {/* <div className="  fixed top-60 ">
        
        
         <Pagination  handlePage={handlePage} handledown={handledown} Page={PageL}  handleup={handleup}/>
           
      
        
  
          </div> */}
      </div>
     
        
        </>
    )
}
export default Body
