// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="main-nav-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="wave-logo"
        alt="wave"
      />
      <h1 className="wave-head">Wave</h1>
    </div>
    <ul className="nav-menu">
      <li>
        <Link className="items" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="items" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="items" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
