 

// import React, { useRef, useState } from "react";

// import Card from './Card'

// function Foreground() {

//   const ref = useRef(null);
  
//   const data = [
//   {
//     desc: "HELLO .",
//     filesize: ".10mb",
//     close: false,
//     tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
//   },
//   {
//     desc: "HELLO .",
//     filesize: ".10mb",
//     close: false,
//     tag: { isOpen: true, tagTitle: "Uploads", tagColor: "blue" },
//   },
//   {
//     desc: "HELLO .",
//     filesize: ".10mb",
//     close: false,
//     tag: { isOpen: true, tagTitle: "Download Now", tagColor: "red" },
//   },
//   {
//     desc: "HELLO .",
//     filesize: ".10mb",
//     close: false,
//     tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
//   },
// ];


   


//   return (
//     <div ref={ref} className="book  fixed  h-screen w-full ">
//        {/* <Card />  */}
//       {data.map((items, index) => (
//         <Card key={ index} data={ items} reference={ref} />
  
//       ))}
//     </div>
//   );
// }

// export default Foreground
import { motion } from "framer-motion";


import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      desc: "File 1: Project Document",
      filesize: ".10mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
     desc: "File 2: Project Document",
      filesize: ".10mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Uploads", tagColor: "green" }, // Upload card red
    },
    {
     desc: "File 3: Project Document",
      filesize: ".10mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }, // optional
    },
    {
     desc: "File 3: Project Document",
      filesize: ".20mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
      {
     desc: "File 4: Project Document",
      filesize: ".10mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Uploads", tagColor: "green" },
    },
  ];

  return (
    <div
      ref={ref}
      className="book  z-[3] flex w-full h-screen flex-wrap gap-5 p-5"
    >
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
