import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation'


const Slide = () => {
    const SlideForm  = () => (
    <form className="sign-box">
      <div className='form-group'>
        <label>Nombre</label>
        
      </div>
    </form>
  );


  return (
    <>
      <Navigation/>
      <div className="mt-5">
        <h4 className="text-center mb-5">Eliminar</h4>
        {SlideForm()}
      </div>
    </>
  )
}

export default Slide;


