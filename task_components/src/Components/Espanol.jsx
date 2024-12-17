import React from 'react'
import { NavLink } from 'react-router-dom'

const Espanol = () => {
  return (
    <div>
      <h1>Which category do you want to explore?</h1>
    <div className='main'>
      <NavLink to={`/books1`}><button className='shambhu'>Books</button></NavLink>
      <NavLink to={`/characters1`}><button className='shambhu'>Characters</button></NavLink>
      <NavLink to={`/houses1`}><button className='shambhu'>Houses</button></NavLink>
      <NavLink to={`/spells1`}><button className='shambhu'>Spells</button></NavLink>
    </div>
    </div>
  )
}

export default Espanol
