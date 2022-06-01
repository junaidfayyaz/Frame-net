import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import { AiFillFacebook } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container f-cont">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="f-t">meharjunaid950@gmail.com</h2>
            <div>
              <Link className="f-icon" to="https://www.facebook.com">
                <AiFillFacebook />
              </Link>
              <Link className="f-icon" to="https://www.instagram.com">
                <BsInstagram />
              </Link>
              <Link className="f-icon" to="https://github.com">
                <BsGithub />
                          </Link>
                          <p className='f-c'>Copy-Right 927-683-415-7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer