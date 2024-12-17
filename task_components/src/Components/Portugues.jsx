import React from 'react'
import { NavLink } from 'react-router-dom'

const Portugues = () => {
  return (
    <div>
      <h1>Which category do you want to explore?</h1>
    <div className='main'>
      <NavLink to={`/Portugues/books`}><button className='shambhu'>Books</button></NavLink>
      <NavLink to={`/Portugues/characters`}><button className='shambhu'>Characters</button></NavLink>
      <NavLink to={`/Portugues/houses`}><button className='shambhu'>Houses</button></NavLink>
      <NavLink to={`/Portugues/spells`}><button className='shambhu'>Spells</button></NavLink>
    </div>
    </div>
  )
}

export default Portugues
