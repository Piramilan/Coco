import React from "react";
import { Link } from "react-router-dom";

const DefaultLayout = ({ children }) => {
  return (
    <div className="min-h-[100vh] bg-[#041218]">
      <div className="flex flex-col mx-auto justify-center items-center p-4 md:max-w-[800px]  text-white">
        <Link to="/" className="flex justify-center  items-center  mb-8 ">
          <img src="../../../coco.png" alt="" className="w-32 h-auto" />
          <h1 className="text-3xl font-bold">Coconut Type Identification</h1>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
