import React from 'react'
import { NavLink } from 'react-router-dom'

const Espanol = () => {
  return (
    <div>
      <h1>Which category do you want to explore?</h1>
    <div className='main'>
      <NavLink to={`/Espanol/books`}><button className='shambhu'>Books</button></NavLink>
      <NavLink to={`/Espanol/characters`}><button className='shambhu'>Characters</button></NavLink>
      <NavLink to={`/Espanol/houses`}><button className='shambhu'>Houses</button></NavLink>
      <NavLink to={`/Espanol/spells`}><button className='shambhu'>Spells</button></NavLink>
    </div>
    </div>
  )
}

export default Espanol
