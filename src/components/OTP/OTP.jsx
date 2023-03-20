import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OTP.css";
const OTP = () => {
  let a = localStorage.getItem("a");
  const x = () =>{
    localStorage.removeItem("a")
    navigate("/");
  }
 const navigate= useNavigate();
  return (
    <div>
    { a ?
      <div className="w3-container w3-center w3-animate-zoom justify-center xyz items-center flex-col flex text-[3rem] text-center h-[100vh]">
        <div className="">
        ✅ Success
        </div>
        <div>
        <button onClick={() => x()} className="bg-blue-500 my-[4rem] hover:bg-blue-700 text-white font-bold px-4 rounded">
        Back
        </button>
        </div>
      </div>:null

    }
    </div>
  );
};

export default OTP;
