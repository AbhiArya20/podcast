// import { useState } from "react";

// const HorizontalTabs = ({ tabs, onClick}) =>{

//     const [selected, setSelected] = useState(0)

//     const onTabClicked=(index)=>{
//         setSelected(index)
//         onClick(index)
//     }
//     return (
//         <div className="flex w-full space-x-7 overflow-x-scroll scrollbar-hide">

//             {
//                 tabs.map((tab,index)=>(
//                     <div key={index} className="flex flex-col items-center cursor-pointer" onClick={()=>onTabClicked(index)}>
//                     <span className={`font-semibold text-md lg:text-xl ${selected==index ?"text-black":"text-[#808080]"} whitespace-nowrap`}>{tab}</span>
//                     <div className={`h-1 w-full ${selected==index? "bg-black" :"bg-white"} `}/>
//                  </div>
//                 ))
//             }

//         </div>
//     )
// }

// export default HorizontalTabs;
