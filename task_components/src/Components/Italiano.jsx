import React from 'react'
import { NavLink } from 'react-router-dom'

const Italiano = () => {
  return (
    <div>
      <h1>Which category do you want to explore?</h1>
    <div className='main'>
      <NavLink to={`/Italiano/books`}><button className='shambhu'>Books</button></NavLink>
      <NavLink to={`/Italiano/characters`}><button className='shambhu'>Characters</button></NavLink>
      <NavLink to={`/Italiano/houses`}><button className='shambhu'>Houses</button></NavLink>
      <NavLink to={`/Italiano/spells`}><button className='shambhu'>Spells</button></NavLink>
    </div>
    </div>
  )
}

export default Italiano
