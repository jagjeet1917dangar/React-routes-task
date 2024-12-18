import React from 'react'
import { NavLink } from 'react-router-dom'

const Italiano = () => {
  return (
    <div>
      <h1>Which category do you want to explore?</h1>
    <div className='main'>
      <NavLink to={`/italiano/books`}><button className='shambhu'>Books</button></NavLink>
      <NavLink to={`/italiano/characters`}><button className='shambhu'>Characters</button></NavLink>
      <NavLink to={`/italiano/houses`}><button className='shambhu'>Houses</button></NavLink>
      <NavLink to={`/italiano/spells`}><button className='shambhu'>Spells</button></NavLink>
    </div>
    </div>
  )
}
export default Italiano;
