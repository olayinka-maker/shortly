import React from 'react'
import './navbar.css';
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = ({showModalClass,showModal}) => {
  return (
    <div className='navContainer'>
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
    <div className='newNav'>
        <h1>Shortly</h1>
       <button  onClick={showModalClass} className='nav-toggle'>
        {showModal ? <FaTimes/> : <FaBars/>}
       </button>
      </div>
    </div>
  )
}

export default Navbar