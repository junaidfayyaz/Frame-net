import React from 'react'
import "./Portfolio.css"
import pic1 from "../Images/4.jpg"
import pic2 from "../Images/5.jpg"
import pic3 from "../Images/6.jpg"
const Portfolio = () => {
  return (
      <div className='portfolio'>
          <h2 className='p-text'>Portfolio</h2>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={pic1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="text-white">First slide label</h5>
              <p className="text-white">
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={pic2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="text-white">Second slide label</h5>
              <p className="text-white">
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={pic3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="text-white">Third slide label</h5>
              <p className="text-white">
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Portfolio