// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// const ActivateButton = ({ type }) => {
//     let data;

//     switch (type) {
//         case "delete":
//             data = {
//                 title1: "Delete",
//                 title2: "Account",
//                 color: "red-600",
//             };
//             break;

//         case "block":
//             data = {
//                 title1: "Block",
//                 title2: "Account",
//                 color: "orange-600",
//             };
//             break;

//         case "activate":
//             data = {
//                 title1: "Activate",
//                 title2: "Account",
//                 color: "green-600",
//             };
//             break;

//         case "edit":
//             data = {
//                 title1: "Edit",
//                 title2: "Account",
//                 color: "blue-600",
//             };
//             break;
//     }
//     return (
//         <div className="p-2 flex justify-between  rounded-md items-center space-x-2 shadow-md">
//             {console.log(data)}
//             <div className="text-sm">
//                 <span className="block">{data.title1}</span>
//                 <span className="block">{data.title2}</span>
//             </div>
//             <div>
//                 <div className={`px-1 flex border-[1px] ${"border-" + data.color}  rounded-md justify-center items-center`}>
//                     <DeleteForeverIcon className={`text-${data.color}`} style={{ fontSize: 15 }} />
//                     <span className={`text-sm ${"text-" + data.color}`}>PROCEED</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ActivateButton;
