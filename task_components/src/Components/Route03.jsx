import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Route03.css'

const Route03 = () => {
  return (
    <div>
      <h1>In which language do you want to explore?</h1>
    <div className='main'>
      <NavLink to={`/english`}><button className='shambhu'>English</button></NavLink>
      <NavLink to={`/espanol`}><button className='shambhu'>Español</button></NavLink>
      <NavLink to={`/francais`}><button className='shambhu'>Francais</button></NavLink>
      <NavLink to={`/italiano`}><button className='shambhu'>Italiano</button></NavLink>
      <NavLink to={`/portugues`}><button className='shambhu'>Portugues</button></NavLink>
    </div>
    </div>
  )
}

export default Route03
