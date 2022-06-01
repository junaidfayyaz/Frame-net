import React from "react";
import "./Services.css";
import heart from "../Images/heart.png";
import glass from "../Images/glass.png";
import wish from "../Images/wish.png";
const Services = () => {
  return (
    <>
      <div className="container" id="service">
        <div className="row">
          <div className="col-lg-3">
            <div className="i-left">
              <div className="i-name">
                <span className="service-top">My Awesome</span>
                <br />
                <span className="s-name">Services</span>
                <br />
                <br />
                <span className="s-lo">
                  Frontend web developer with high level of experience in web
                  designing and development.
                </span>
              </div>
              <br />
              <br />
              <button type="button" id="ser-btn" className="btn btn-warning">
                Download CV
              </button>  
            </div>
          </div>
          <div className="col-lg-3">
            <div className="s-right">
              <img
              
                src={heart} alt="heart" className="img-fluid" />
              <h6 className="s-design">Design</h6>
              <p className="s-para">
                Figma,Sketch,Photoshop <br />
                Adobe ilustrator,Adobe xd
              </p>
              <button type="button" id="s-btn" className="btn btn-warning">
                Learn more
              </button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="s-right">
              <img src={wish} alt="heart" className="img-fluid" />
              <h6 className="s-design">Developer</h6>
              <p className="s-para">
                Html, Css, JavaScript <br />
                React, Bootstrap
              </p>
              <button type="button" id="s-btn" className="btn btn-warning">
                Learn more
              </button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="s-right">
              <img src={glass} alt="heart" className="img-fluid" />
              <h6 className="s-design">Design</h6>
              <p className="s-para">
                Figma,Sketch,Photoshop <br />
                Adobe ilustrator,Adobe xd
              </p>
              <button type="button" id="s-btn" className="btn btn-warning">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
