import React, { useEffect } from "react";
import { useLocation , useNavigate } from "react-router";
import Portfolio from "./Portfolio";

export default function Details() {
    useEffect(()=>{
    document.title = "Image"
  }, [])

  const { state } = useLocation();
  const { src } = state || {};

  const navigate = useNavigate()

  return (
    <>
     <Portfolio/>
      <div className="d-flex justify-content-center align-items-center position-fixed top-0 end-0 start-0 bottom-0 bg-black bg-opacity-75 h-100" onClick={()=>{navigate(-1)}}>
         {src ?( <img src={src} alt="img" className="w-50 rounded-3 " onClick={(e)=>{e.stopPropagation()}} /> ) :(<h2 className="text-white">No image found</h2>)}
      </div>
    </>

    
  );
}
