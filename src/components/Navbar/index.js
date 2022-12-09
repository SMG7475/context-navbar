import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeTheme = () => {
        toggleTheme()
      }
      return (
        <navbar className="navbar-container">
          {isDarkTheme ? (
            <div className="light-theme">
              <img
                className="logo-image"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
              />
              <div className="links-container">
                <Link to="/" className="home-link">
                  Home
                </Link>
                <Link to="/about" className="home-link">
                  About
                </Link>
              </div>
              <button
                type="button"
                className="change-button"
                onClick={changeTheme}
              >
                <img
                  className="theme-change-image"
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                />
              </button>
            </div>
          ) : (
            <div>
              <img
                className="logo-image"
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
              />
              <div className="links-container">
                <Link to="/" className="home-link">
                  Home
                </Link>
                <Link to="/about" className="home-link">
                  About
                </Link>
              </div>
              <button
                type="button"
                className="change-button"
                onClick={changeTheme}
              >
                <img
                  className="theme-change-image"
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                />
              </button>
            </div>
          )}
        </navbar>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
