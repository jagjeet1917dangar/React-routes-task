import React from 'react'
import { NavLink } from 'react-router-dom'

const English = () => {
  return (
    <div>
      <h1>Which category do you want to explore?</h1>
    <div className='main'>
      <NavLink to={`/english/books`}><button className='shambhu'>Books</button></NavLink>
      <NavLink to={`/english/characters`}><button className='shambhu'>Characters</button></NavLink>
      <NavLink to={`/english/houses`}><button className='shambhu'>Houses</button></NavLink>
      <NavLink to={`/english/spells`}><button className='shambhu'>Spells</button></NavLink>
    </div>
    </div>
  )
}

export default English;
