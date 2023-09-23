import React from 'react'
import "./Layout.css"
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsFillDatabaseFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";




const Footer = () => {
  return (
    <>
      <footer className="mx-auto fixed-bottom bg-light" style={{boxShadow: "0px -2px 28px -23px black"
}}>
        <div className="container">
          <div className="row my-2">
            <ul className="footer-list d-flex justify-content-center">
              <li className="text-center">
                <AiOutlineHome size={25} /><br />
                <Link to="/home" className='text-dark fw-bold text-decoration-none'>
                  Home
                </Link>
              </li>
              <li className="text-center">
                <BsFillDatabaseFill size={25} /><br />
                <Link to="/product" className='text-dark fw-bold text-decoration-none'>
                  product
                </Link>
              </li>
              <li className="text-center">
                <BsFillPeopleFill size={25} /><br />
                <Link to="/team" className='text-dark fw-bold text-decoration-none'>
                  Team
                </Link>
              </li>
              <li className="text-center">
                <BiUserCircle size={25} /><br />
                <Link to="/me" className='text-dark fw-bold text-decoration-none'>
                  Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer