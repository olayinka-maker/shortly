import React from 'react'
import './modals.css'

const  Modals = () => {
  return (
    <>
        <div className='box-container'>

            <div className='branch'>
                <h3>Features</h3>
                <h3>Pricing</h3>
                <h3>Resources</h3>
            </div>
            <div className='line'/>
            <div className='contact'>
                <button className='loginclass'>login</button>
                <button>Sign up</button>
            </div>
        </div>
    </>
  )
}

export default Modals;