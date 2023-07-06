import { useState, useRef } from 'react'
import Spline from '@splinetool/react-spline';
import discordLogo from './assets/discord.svg'
import './styles/App.scss'

function App() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  return (
    <>
      <section className="hero" > 
        <div className="hero__container">
          <div className="container">
            <h1 className="hero__headline">hey friend,</h1>
            <div className="hero__subheadline">looking for a d&d server?</div>
            <p className="hero__paragraph">We play Dungeons and Dragons 5th Edition (D&D5e) one-shots on Roll20 and Foundry using a modified version of the Shared Campaign model.</p>
            <a className="hero__button" href="https://discord.gg/dndfriends"><img src={discordLogo} alt="discord logo" /> Join now</a>
          </div>

        </div>
        <Spline className="hero__spline" scene="https://prod.spline.design/a4JOJ5ykgKwz7hOo/scene.splinecode" />
        <div onClick={() => setTooltipVisible(!tooltipVisible)} className="hero__tooltip" role='tooltip' data-active={tooltipVisible}>
          <span className="hero__tooltip-question">?</span>
          <span className='hero__tooltip-content'>
            {tooltipVisible ? 'You can roll the die by dragging it around! If you lose the die, press SPACE or refresh the page.' : ''}
          </span>
        </div>
      </section>
    </>
  )
}

export default App
