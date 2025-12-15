import React, { useEffect, useState } from "react";

export default function Contact() {

  const [form , setForm] = useState(
    {
     name:"",
    email: "",
    password: "",
    age:""
  }
  )
  const [errors , setErrors] = useState({})
  const [ isValid , setIsValid]= useState(false)

  let rules ={
    name: /^[A-Za-z ]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^.{6,}$/,
    age:/^\d{2,}$/
  }

  function handleOnChange(e){
   const {value , name} = e.target
   const updatedForm = {...form , [name]:value}
   setForm(updatedForm)
   validate(updatedForm)
  }

  function validate(values){
    let allErrors = {}
    if(!rules.name.test(values.name)){
    allErrors.name = "Name must be at least 3 characters ❌";
  }

  if(!rules.age.test(values.age)){
    allErrors.age = "Age must be between 18 and 60 ❌";
  }

  if(!rules.email.test(values.email)){
    allErrors.email = "Email must include @ and . ❌";
  }

  if(!rules.password.test(values.password)){
    allErrors.password = "Password must be at least 6 characters❌";
  }
  setErrors(allErrors)

  setIsValid(Object.keys(allErrors).length ===0)
  }

  function handleOnSubmit(e){
     e.preventDefault()
    if(isValid){
      alert("Form submitted successfully 🚀");
    }
  }

    useEffect(()=>{
    document.title = "Contact"
  }, [])
 
  return (
    <>
      <section className="py-5">
        <div className="container py-5">
          <h4 className="text-center fw-bold display-5 text-uppercase">
            contact section
          </h4>
          <form action="" onSubmit={handleOnSubmit}>
            <div className="row py-5">
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <input type="text" class="form-control shadow-lg rounded-4" name="name" placeholder="name@example.com" onChange={handleOnChange} />
                  <label for="floatingInput" className="fw-bold text-primary">User Name</label>
                  {errors.name && <p className="fw-bold text-uppercase">{errors.name}</p>}
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <input type="password" class="form-control shadow-lg rounded-4" name="password" placeholder="Password" onChange={handleOnChange} />
                  <label for="floatingInput" className="fw-bold text-primary">User password</label>
                  {errors.password && <p className="fw-bold text-uppercase">{errors.password}</p>}
                  
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <input type="email" class="form-control shadow-lg rounded-4" name="email"placeholder="name@example.com" onChange={handleOnChange} />
                  <label for="floatingInput" className="fw-bold text-primary">User Email</label>
                  {errors.email && <p className="fw-bold text-uppercase">{errors.email}</p>}
                  
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-floating mb-3">
                  <input type="number" class="form-control shadow-lg rounded-4" name="age" placeholder="name@example.com" onChange={handleOnChange} />
                  <label for="floatingInput" className="fw-bold text-primary">User Age</label>
                  {errors.age && <p className="fw-bold text-uppercase">{errors.age}</p>}
                </div>
              </div>
              <div className="col-md-6">
                <button className="btn btn-primary" disabled={!isValid}>Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
