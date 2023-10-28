// import dayjs from "dayjs";
// import { getMonth } from '../util';
// import React, { useState, useEffect, useContext } from "react";
// import GlobalContext from "../context/GlobalContext";
// import { ButtonGroup, Button, IconButton, TagLeftIcon } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";
// import { Month } from "./Month";



// export const Sidebar = () => {
//   const [currentMonth, setCurrentMonth] = useState(getMonth());

//   return (
//     <Sidebar className="px-4 py-2 items-center">
//       <p className="ml-4 text-xl text-gray-500 font-bold">
//         Today
//       </p>
//       <p>ここにハンバーガーメニュー</p>
//       <div className="px-4 py-2 flex items-center">
//         <h1 className="ml-4 text-xl text-gray-500 font-bold">
//           {dayjs().format("MM/DD")}
//         </h1>
//         <div className="px-4 py-2 items-center">
//           <h2 className="ml-4 text-xl text-gray-500 font-bold">
//             {dayjs().format("YYYY")}
//           </h2>
//           <h2 className="ml-4 text-xl text-gray-500 font-bold">
//             {dayjs().format("dddd")}
//           </h2>
//         </div>
//       </div>

//       <h2 className="ml-4 text-xl text-gray-500 font-bold">
//         {dayjs().format("MMMM YYYY")}
//       </h2>
//       <p className="ml-4 text-xl text-gray-500 font-bold">
//         calendar
//       </p>
//       <div className="px-4 py-2 flex items-center">
//         <h2 className="ml-4 text-xl text-gray-500 font-bold">
//           {dayjs().format("MM")}
//         </h2>
//         <h2 className="ml-4 text-xl text-gray-500 font-bold">
//           {dayjs().format("YYYY")}
//         </h2>
//       </div>
//       <p>ここにカレンダーを置く</p>
//       <div>
//         <Month month={currentMonth} />
//       </div>
//       <p>shedule & task</p>
//       <p>ここにタスク一覧</p>

//     </Sidebar>
//   )
// }