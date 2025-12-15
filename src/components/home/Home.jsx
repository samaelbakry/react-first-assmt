import React, { useEffect } from 'react'
import img from "../../assets/images/avataaars.svg"

export default function Home() {
    useEffect(()=>{
    document.title = "Home"
  }, [])
  return <>
  <section className='py-2 mb-5 homeSection'>
    <div className="container text-center">
        <img src={img} alt="home-img" className='w-25'/>
        <h1  className='fw-bold '>Start Framework</h1>
        <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </section>
 
  </>
}
