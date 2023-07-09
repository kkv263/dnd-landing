import './styles/Nav.scss'
import smileLogo from './assets/smile.png'

const Nav = () => {

  return (
    <nav className="nav" > 
      <div className="container">
        <div className="nav__logo">
          <img src={smileLogo} alt="" />
          <span>d&d friends</span>
          </div>
      </div>
    </nav>
  )
}

export default Nav
