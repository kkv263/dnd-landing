import './styles/Nav.scss'
import smileLogo from './assets/smile.png'

function Nav() {

  return (
    <>
      <nav className="nav" > 
        <div className="container">
          <div className="nav__logo">
            <img src={smileLogo} alt="" />
            <span>dnd friends</span>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
