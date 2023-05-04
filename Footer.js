import React from 'react'
import { FaFacebookF,FaTwitter,FaGooglePlusG,FaInstagram,FaLinkedin,FaGithub,FaHome,FaEnvelope,FaPhoneAlt,FaPrint} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <div>


<footer className="text-center text-lg-start text-bg-secondary">
  
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    
    <div className="me-5 d-none d-lg-block">
      <span className='fw-bold'>Get connected with us on social networks:</span>
    </div>
   
    
    
    <div>
      <NavLink to="/" className="me-4 text-reset">
        <FaFacebookF/>
        
      </NavLink>

      <NavLink to="/" className="me-4 text-reset">
        <FaTwitter/>
        
        </NavLink>
      <NavLink to="/" className="me-4 text-reset">
        <FaGooglePlusG/>
        
        </NavLink>
      <NavLink to="/" className="me-4 text-reset">
        <FaInstagram/>
        
        </NavLink>
      <NavLink to="/" className="me-4 text-reset">
        <FaLinkedin/>
        
        </NavLink>
      <NavLink to="/" className="me-4 text-reset">
        
        <FaGithub/>
      </NavLink>
    </div>
    
  </section>
  
  <section className="">
    <div className="container text-center text-md-start mt-5">
           <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        

        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <NavLink to="https://angular.io/" target="_blank" className="text-reset">Angular</NavLink>
          </p>
          <p>
          <NavLink to="https://reactjs.org/docs/getting-started.html" target="_blank" className="text-reset">React</NavLink>
          </p>
          <p>
          <NavLink to="https://vuejs.org/" target="_blank" className="text-reset">Vue</NavLink>
          </p>
          <p>
          <NavLink to="https://laravel.com/" target="_blank" className="text-reset">Laravel</NavLink>
          </p>
        </div>
        

        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
          <NavLink to="/" className="text-reset">Pricing</NavLink>
          </p>
          <p>
          <NavLink to="/" className="text-reset">Settings</NavLink>
          </p>
          <p>
          <NavLink to="/" className="text-reset">Orders</NavLink>
          </p>
          <p>
          <NavLink to="/" className="text-reset">Help</NavLink>
          </p>
        </div>
        

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><FaHome/> New York, NY 10012, US</p>
          <p>
            <FaEnvelope/>
            info@example.com
          </p>
          <p><FaPhoneAlt /> + 01 234 567 88</p>
          <p>< FaPrint/> + 01 234 567 89</p>
        </div>
        
      </div>
         </div>
  </section>
    

    <div className="text-center p-4" >
     Copyright: © {new Date().getFullYear()}<br/>
    <p className="text-reset fw-bold">Deepak React Website .. All Rights Reserved...!!</p>
  </div>
  </footer>
  </div>
  )
}

export default Footer
