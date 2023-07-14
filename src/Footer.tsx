import './styles/Footer.scss'
import discordLogo from './assets/discord.svg';
import twitterLogo from './assets/twitter.svg';
import instagramLogo from './assets/instagram.svg';
import footerImg from './assets/footerbg.jpg'

const Footer = () => {

  return (
    <footer className="footer"> 
      <img className="footer__bg" src={footerImg} alt="4 players ready to play dungeons and dragons" />
      <div className="footer__container">
        <div className="footer__content">
          <h2 className="footer__headline">Ready to embark <br></br>on an adventure?</h2>
          <a target="_blank" rel="noopener noreferrer" className="footer__button" href="https://discord.gg/dndfriends"><img src={discordLogo} alt="discord logo" /> Join the discord</a>
        </div>
      </div>
      <div className='footer__socials'>
        <ul>
          <li>
            <a href="https://twitter.com/DnD_Friends" target="_blank" rel="noopener noreferrer">
              <img src={twitterLogo} alt="twitter logo" />
            </a> 
          </li>
          <li>
            <a href="https://www.instagram.com/dndfriends/" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="instagram logo" />
            </a> 
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
