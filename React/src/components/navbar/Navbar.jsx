import { NavLink } from "react-router"

export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
  <div className="container">
    <NavLink className="navbar-brand fs-3 fw-bold text-uppercase" to="/home">Start Framework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 fw-bold">
        <li className="nav-item mx-2">
          <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className="nav-link" aria-current="page" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item mx-2">
          <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
        </li>
    
      </ul>
     
    </div>
  </div>
</nav>
  </>
}
