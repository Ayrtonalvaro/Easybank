import React from 'react'
import Logo from '../assets/logo.svg'
const Navbar = () => {
  return (
    <div className='mt-7 '>
      <nav>
        <div className='navbar-container flex justify-between'>
          <div className='logo'>
            <img src={Logo} />
          </div>
          <div className='item-nav'>
            <ul className='flex gap-6'>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Careers</a></li>
            </ul>
          </div>
          <div>
            <button className='bg-green-400 text-white rounded-full p-2 '>Request invite</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
