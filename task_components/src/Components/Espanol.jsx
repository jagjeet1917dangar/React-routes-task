import React from 'react'
import { NavLink } from 'react-router-dom'

const Espanol = () => {
  return (
    <div>
      <h1>Which category do you want to explore?</h1>
    <div className='main'>
      <NavLink to={`/espanol/books`}><button className='shambhu'>Books</button></NavLink>
      <NavLink to={`/espanol/characters`}><button className='shambhu'>Characters</button></NavLink>
      <NavLink to={`/espanol/houses`}><button className='shambhu'>Houses</button></NavLink>
      <NavLink to={`/espanol/spells`}><button className='shambhu'>Spells</button></NavLink>
    </div>
    </div>
  )
}

export default Espanol
