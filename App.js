import React,{useEffect} from "react"
import ReactDOM from "react-dom/client"

import Header from "./src/Header"
import Body from "./src/Body"
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import Detail from "./src/Detail"
import Search from "./src/Search"
import {Provider} from "react-redux"
import { Link } from "react-router-dom"
import store from "./src/Store"
import Favourite from "./src/Favourite"
import { useDispatch } from "react-redux"
import { addItem } from "./src/CartSlice"

const Call=()=>{

    const dispatch= useDispatch()
    useEffect(() => {
       
        // if(JSON.parse(localStorage.getItem('Fav'))===null){
        //    localStorage.setItem("Fav",JSON.stringify([]))
        //   }
        const items = JSON.parse(localStorage.getItem('Fav'));
        if (items) {
         dispatch(addItem(items));
        }
      },[])

}
const AppLayout=()=>{

   

   
    return(
        <>
      <div className="bg-black-700">
    
      <Provider store={store}>
        <Call/>
         <Header/>
          <Outlet/>
         </Provider>
      </div>
        
        
        </>
    )
}



let approuter= createBrowserRouter([

    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body store={store}/>

            },
            {
                path:"/Search",
                element:<Search/>
            },
            {
                path:"/Detailpage/:id",
                element:<Detail/>
            },
            {
                path:"/Favourite",
                element:<Favourite/>
            }

        ]
    }
])
let root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <>
    <RouterProvider router={approuter}/>
    
    
   
  

    </>
)