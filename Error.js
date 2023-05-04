import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <>
      <div className='container'>
      <NavLink to="/">
      <img src='.\images\error.jpg'  width = "100%" alt='Error' />
      </NavLink>
      </div>
    </>
  );
};

export default Error;
