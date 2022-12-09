import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="container">
          {isDarkTheme ? (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
              alt="about"
            />
          ) : (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
              alt="about"
            />
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
