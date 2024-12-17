import React from 'react'
import { NavLink } from 'react-router-dom'

const Francais = () => {
  return (
    <div>
      <h1>Which category do you want to explore?</h1>
    <div className='main'>
      <NavLink to={`/books2`}><button className='shambhu'>Books</button></NavLink>
      <NavLink to={`/characters2`}><button className='shambhu'>Characters</button></NavLink>
      <NavLink to={`/houses2`}><button className='shambhu'>Houses</button></NavLink>
      <NavLink to={`/spells2`}><button className='shambhu'>Spells</button></NavLink>
    </div>
    </div>
  )
}

export default Francais
