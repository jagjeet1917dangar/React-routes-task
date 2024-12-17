import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Route03.css'

const Route03 = () => {
  return (
    <div>
      <h1>In which language do you want to explore?</h1>
    <div className='main'>
      <NavLink to={`/English`}><button className='shambhu'>English</button></NavLink>
      <NavLink to={`/Espanol`}><button className='shambhu'>Español</button></NavLink>
      <NavLink to={`/Francais`}><button className='shambhu'>Français</button></NavLink>
      <NavLink to={`/Italiano`}><button className='shambhu'>Italiano</button></NavLink>
      <NavLink to={`/Portugues`}><button className='shambhu'>Português</button></NavLink>
    </div>
    </div>
  )
}

export default Route03
