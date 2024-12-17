import React from 'react'
import { NavLink } from 'react-router-dom'

const English = () => {
  return (
    <div>
      <h1>Which category do you want to explore?</h1>
    <div className='main'>
      <NavLink to={`/English/books`}><button className='shambhu'>Books</button></NavLink>
      <NavLink to={`/English/characters`}><button className='shambhu'>Characters</button></NavLink>
      <NavLink to={`/English/houses`}><button className='shambhu'>Houses</button></NavLink>
      <NavLink to={`/English/spells`}><button className='shambhu'>Spells</button></NavLink>
    </div>
    </div>
  )
}

export default English;
