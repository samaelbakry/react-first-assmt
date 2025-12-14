import React from 'react'

export default function Footer() {
  return <>
   <article className='bg-secondary-subtle py-5'>
    <div className="container py-3">
      <div className="row gy-4 text-center">
        <div className="col-4">
          <div className="inner shadow rounded-2 p-3">
            <p className='fw-bold'>LOCATION</p>
          <p>2215 John Daniel Drive</p>
          <span>Clark, MO 65243</span>
          </div>
        </div>
        <div className="col-4">
          <div className="inner shadow rounded-2 p-3">
            <p className='fw-bold'>AROUND THE WEB</p>
            <i className="fa-brands fa-square-linkedin fs-3"></i>
            <i className="fa-brands fa-square-facebook fs-3"></i>
            <i className="fa-brands fa-x-twitter fs-3"></i>
            <i className="fa-solid fa-earth-asia fs-3"></i>
          </div>
        </div>
        <div className="col-4">
          <div className="inner shadow rounded-2 p-3">
            <p className='fw-bold'>ABOUT FREELANCER</p>
            <p className='text-truncate'>Freelance is a free to use,licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </div>
  
    </article>
      <footer className='bg-gradient bg-secondary py-5 '>
    <h5 className='text-center'>
        Copyright © Your Website 2021
    </h5>
  </footer>
  
  </>
}
