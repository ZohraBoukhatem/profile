import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/resume">Resume</a></li>
                  <li><a className="dropdown-item" href="/techstack">Tech stack</a></li>
                  <li>
                    <hr className="dropdown-divider" /> 
                  </li>
                  <li><a className="dropdown-item" href="/other">Other</a></li>
                </ul>
              </li>
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar