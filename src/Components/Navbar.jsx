import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="container-fluid text-right navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  Junaid
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/service">
                        Service
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <form action="">
                    <button
                      type="button"
                      id="n-btn"
                      className="btn btn-warning"
                    >
                      Contact
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
