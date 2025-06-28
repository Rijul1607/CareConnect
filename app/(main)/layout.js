import React from "react";

export const metadata = {
  title: "CareConnect",
  description: "Book appointment with doctor",
  icons:{
    icon:[
      {
        url:'1.png',
        
      },
    ],
  },
};
const MainLayout=({children})=>{
    return <div className="container mx-auto my-20">{children}</div>
};
export default MainLayout;