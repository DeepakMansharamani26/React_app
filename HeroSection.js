import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context';

import "./HeroSection.css";


function HeroSection() {

  const {name,image}= useGlobalContext()

  return (
    <>
      <div className='container'>
        <div className='row p-2 m-4'>
            <div class="col-sm-6 col-md-8">
                <p className="hero-top-data">THIS IS ME</p>
                <h1 className="hero-heading">{name} </h1>
                <p className="hero-para">
                    hello this my {name} If you're using tooling that has babel-plugin-macros set up, you can switch to the styled-components/macro import path instead to gain the effects of the babel plugin without further setup.
                    
                </p>
                <button type="button" className="btn btn-info ">
                      <NavLink className="btnval" to="/Contact">Show Me instead</NavLink>
                    </button>
            </div>
            <div class="col-6 col-md-4">
                <img src={image}  alt="logo"/>
            </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection;
