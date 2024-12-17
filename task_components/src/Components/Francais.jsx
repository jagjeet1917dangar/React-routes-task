import React from 'react'
import { NavLink } from 'react-router-dom'

const Francais = () => {
  return (
    <div>
      <h1>Which category do you want to explore?</h1>
    <div className='main'>
      <NavLink to={`/Francais/books`}><button className='shambhu'>Books</button></NavLink>
      <NavLink to={`/Francais/characters`}><button className='shambhu'>Characters</button></NavLink>
      <NavLink to={`/Francais/houses`}><button className='shambhu'>Houses</button></NavLink>
      <NavLink to={`/Francais/spells`}><button className='shambhu'>Spells</button></NavLink>
    </div>
    </div>
  )
}

export default Francais
