import React from 'react'
import "./Contacts.css"
const Contacts = () => {
  return (
    <div className="contact">
      <div className="container justify-content-center">
        <div className="row">
          <div className="col-lg-4">
            <h1 className="contact-g">Get in touch</h1>
            <h1 className="contact-c">Contact Me</h1>
          </div>
          <div className="col-lg-6">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Enter Your Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  Please enter your name here!
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts