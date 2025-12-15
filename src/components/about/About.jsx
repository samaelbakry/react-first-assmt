import React, { useEffect } from 'react'

export default function About() {
  useEffect(()=>{
    document.title = "About"
  }, [])
  return<>
  <section className='py-5'>
    <div className="container py-5">
      <h4 className='text-center fw-bold display-5 text-uppercase'>
          About Component
      </h4>
      <div className="row">
        <div className="col-md-6">
          <div className="inner py-4">
            <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="inner py-4">
            <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
          </div>
        </div>
      </div>

    </div>
  </section>
  </>
}
