import React, { useRef } from "react";
import Card from "./Card";


function ForeGround() {

  const ref = useRef(null);

  const data =[
    {
      decs: "I want to make 6 figures before 2024 ends",
      close: true,
      tag: { isOpen: true, tagTitle: "Work in Progress", tagColor: "green",}
    },

    {
      decs: "I want to visit kedarnath before I turn 21",
      close: false,
      tag: { isOpen: false, tagTitle: "Work in Progress", tagColor: "green",}
    },

    {
      decs: "I want to start investment before 2024 ends",
      close: false,
      tag: { isOpen: false, tagTitle: "Work in Progress", tagColor: "green",}
    },

  ]

  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full gap-10 flex flex-wrap p-5">
        {data.map((item, index)=>(
              <Card data={item} reference={ref}/>
        ))}
          
      </div>
    </>
  );
}

export default ForeGround;
