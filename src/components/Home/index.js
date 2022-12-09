import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="container">
          {isDarkTheme ? (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
              alt="home"
            />
          ) : (
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
              alt="home"
            />
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
