import React from 'react'
import "./Layout.css"

const Header = () => {
  return (
    <>
      <header className='fixed-top'>
          <div className='container header-container'>
            <div className='row'>
                <h1 className='text-light text-center' style={{height:'54px'}}>AVS Foundation</h1>
            </div>
          </div>
      </header>
    </>
  )
}

export default Header