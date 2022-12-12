import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav1'>
            <h1>Shortly</h1>
            <ul className='anchors'>
              <li><a href='/feature'>Features</a></li>
              <li><a href='/feature'>Pricing</a></li>
              <li><a href='/feature'>Resources</a></li>
            </ul>     
        </div>
      <div className='nav2'>
          <button className='login'>Login</button>
          <button className='sign-up'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar