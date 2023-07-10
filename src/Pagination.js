
// import { FaArrowAltCircleUp } from 'react-icons/fa';
// import { FaArrowAltCircleDown } from 'react-icons/fa';

// export const Pagination=(props)=>{
//     return(
//         <>
//         <div className="h-10 w-10 ">
            
//             <div className='h-10 w-10 mt-7 ml-1 cursor-pointer '>
//             <FaArrowAltCircleUp size={30}  onClick={()=>props.handleup(props.Page)}/>
         
//             </div>
            
//                { [1,2,3,4,5,6,7,8].map((item)=>{
//                 return <div className="border-2 text-center cursor-pointer text-xl " onClick={()=>props.handlePage(item)} >
//                  {item }
//                 </div>
//                })}

          
            
       

//            {
//                ( props.Page)>8?<div className="border-2 text-center cursor-pointer text-xl">
//                  { props.Page}
//                 </div>
//                 :null
//             }

// <div className='h-10 w-10 mt-7 ml-1 cursor-pointer'>
//            <FaArrowAltCircleDown size={30} onClick={()=>props.handledown(props.Page)}/>
//            </div>

//         </div>
  
        
        
//         </>
//     )
// }