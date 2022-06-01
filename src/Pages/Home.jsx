import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaGithub } from "react-icons/fa"
import { TiSocialLinkedin } from "react-icons/ti"
import { SiInstagram } from "react-icons/si"
import OWN from "../Images/own.png"
import {FaChessKing} from "react-icons/fa"

function Home() {
  return (
    <div className="container-fluid intro">
      <div className="row">
        <div className="col-lg-6">
          <div className="i-left">
            <div className="i-name">
              <span className="hy">Hy! I Am</span>
              <br />
              <span className="name">Muhammad Junaid</span>
              <br />
              <br />
              <span className="i-lo">
                Frontend web developer with high level of experience in web
                designing and development.
              </span>
            </div>
            <br />
            <br />
            <button type="button" id="i-btn" className="btn btn-warning">
              Hire Me
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="i-link-collection">
              <Link class="i-link" target="_blank" to="/https://github.com">
                <FaGithub />
              </Link>
              <Link class="i-link" target="_blank" to="/https://linkedin.com">
                <TiSocialLinkedin />
              </Link>
              <Link class="i-link" target="_blank" to="/https://Instagram.com">
                <SiInstagram />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="right">
            <p className="i-p">
              <FaChessKing className="i-r-icon" />
              <br />
              Web <br />
              Developer
            </p>{" "}
          </div>
          <img src={OWN} alt="on" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}
export default Home;
