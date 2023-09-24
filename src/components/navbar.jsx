import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartSimple } from 'phosphor-react'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='/'> Shop </Link>
        <Link to='/cart'>
          <ShoppingCartSimple size={30} />
        </Link>
      </div>  
    </div>
  )
}
