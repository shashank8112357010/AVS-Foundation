import React from 'react'
import "./Layout.css"
import PrivateRoutes from '../Routes/PrivateRoutes'

const Main = () => {
  return (
    <>
      <main className="mx-auto" style={{paddingBottom:"6rem"}}>
      <PrivateRoutes/>
      </main>

    </>
  )
}

export default Main