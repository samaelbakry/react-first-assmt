import React, { useEffect } from 'react'
import image1 from "../../assets/images/poert1.png"
import image2 from "../../assets/images/port2.png"
import image3 from "../../assets/images/port3.png"
import { useNavigate } from 'react-router'

export default function Portfolio() {
    useEffect(()=>{
    document.title = "Portfolio"
  }, [])
  const navigate = useNavigate()
  const handleClick = (src)=>{
    navigate("/details",{state:{src}})
  }
  return <>
  <section>
    <div className="container p-5">
      <h4 className='fw-bold display-5 text-center text-uppercase'>
        portfolio component 
      </h4>
      <div className="row py-5 g-4">
        <div className="col-md-4">
          <div className="aboutInner position-relative shadow rounded-3" onClick={()=>{handleClick(image1)}}>
            <img src={image1} alt="pic-1" className='rounded-3 w-100'/>
            <div className="layer position-absolute top-0 bottom-0 start-0 end-0 bg-info-subtle d-flex justify-content-center align-items-center rounded-3 ">
              <i className="fa-solid fa-plus fs-1 text-secondary"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="aboutInner position-relative shadow rounded-3" onClick={()=>{handleClick(image2)}}>
            <img src={image2} alt="pic-1" className='rounded-3 w-100'/>
            <div className="layer position-absolute top-0 bottom-0 start-0 end-0 bg-info-subtle d-flex justify-content-center align-items-center rounded-3 ">
              <i className="fa-solid fa-plus fs-1 text-secondary"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="aboutInner position-relative shadow rounded-3" onClick={()=>{handleClick(image3)}}>
            <img src={image3} alt="pic-1" className='rounded-3 w-100'/>
            <div className="layer position-absolute top-0 bottom-0 start-0 end-0 bg-info-subtle d-flex justify-content-center align-items-center rounded-3 ">
              <i className="fa-solid fa-plus fs-1 text-secondary"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="aboutInner position-relative shadow rounded-3" onClick={()=>{handleClick(image1)}}>
            <img src={image1} alt="pic-1" className='rounded-3 w-100'/>
            <div className="layer position-absolute top-0 bottom-0 start-0 end-0 bg-info-subtle d-flex justify-content-center align-items-center rounded-3 ">
              <i className="fa-solid fa-plus fs-1 text-secondary"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="aboutInner position-relative shadow rounded-3" onClick={()=>{handleClick(image2)}}>
            <img src={image2} alt="pic-1" className='rounded-3 w-100'/>
            <div className="layer position-absolute top-0 bottom-0 start-0 end-0 bg-info-subtle d-flex justify-content-center align-items-center rounded-3 ">
              <i className="fa-solid fa-plus fs-1 text-secondary"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="aboutInner position-relative shadow rounded-3" onClick={()=>{handleClick(image3)}}>
            <img src={image3} alt="pic-1" className='rounded-3 w-100'/>
            <div className="layer position-absolute top-0 bottom-0 start-0 end-0 bg-info-subtle d-flex justify-content-center align-items-center rounded-3 ">
              <i className="fa-solid fa-plus fs-1 text-secondary"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
}

