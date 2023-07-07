import './styles/Footer.scss'
import discordLogo from './assets/discord.svg';
import footerImg from './assets/footerbg.jpg'

const Footer = () => {

  return (
    <footer className="footer"> 
      <img className="footer__bg" src={footerImg} alt="4 players ready to play dungeons and dragons" />
      <div className="footer__container">
        <div className="footer__content">
          <h2 className="footer__headline">Ready to embark <br></br>on an adventure?</h2>
          <a className="footer__button" href="https://discord.gg/dndfriends"><img src={discordLogo} alt="discord logo" /> Join the discord</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
