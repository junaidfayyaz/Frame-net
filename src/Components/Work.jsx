import React from 'react'
import "./Work.css"
import { AiFillFacebook } from "react-icons/ai"
import {GrAmazon} from "react-icons/gr"
import { Link } from 'react-router-dom';
import { SiFiverr } from "react-icons/si"
import { SiUpwork } from "react-icons/si"
import {FaStoreAlt} from "react-icons/fa"
const Work = () => {
  return (
    <div className="Work">
      <div className="container justify-content-evenly">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="work-h2">Works for All these</h2>
            <h3 className="work-h3">Brands & Clients</h3>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae sunt omnis, totam, atque quia ex corporis, iusto quam
              reprehenderit aperiam eius dicta delectus nihil natus iste nemo
              ipsam saepe deleniti?
            </p>
            <br />
            <button type="button" id="ser-btn" className="btn btn-warning">
              Download CV
            </button>
          </div>
          <div className="col-lg-6 work-right">
            <div className="fb-link">
              <Link
                className="work-link"
                target="_blank"
                to="https://www.facebook.com/"
              >
                <AiFillFacebook />
              </Link>
            </div>
            <div className="am-link">
              <Link
                className="work-link"
                target="_blank"
                to="https://search.visymo.com/"
              >
                <GrAmazon />
              </Link>
            </div>
            <div className="fi-link">
              <Link
                className="work-link"
                target="_blank"
                to="https://www.fiverr.com/"
              >
                <SiFiverr />
              </Link>
            </div>
            <div className="uw-link">
              <Link
                className="work-link"
                target="_blank"
                to="https://www.upwork.com/"
              >
                <SiUpwork />
              </Link>
            </div>
            <div className="st-link">
              <Link
                className="work-link"
                target="_blank"
                to="https://pakistan.desertcart.com/"
              >
                <FaStoreAlt />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work