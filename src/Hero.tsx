import React, { Suspense, useState } from 'react'
import discordLogo from './assets/discord.svg'
import usersSVG from './assets/users.svg'
import botSVG from './assets/bot.svg'
import saveSVG from './assets/save.svg'
import Loader from './Loader';
import './styles/Hero.scss'


const Spline = React.lazy(() => import('@splinetool/react-spline'));

const Hero = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  return (
    <section className="hero" > 
      <div className="hero__container">
        <div className="container">
          <h1 className="hero__headline">hey friend,</h1>
          <div className="hero__subheadline">looking for a d&d server?</div>
          <p className="hero__paragraph">We play Dungeons and Dragons 5th Edition (D&D5e) one-shots with a modified version of the Shared Campaign model.</p>
          <ul className="hero__list">
            <li><img src={usersSVG} alt="" />3000+ users</li>
            <li><img src={botSVG} alt="" /> custom discord bot ecosystem</li>
            <li><img src={saveSVG} alt="" /> use characters across one-shots</li>
          </ul>
          <a className="hero__button" href="https://discord.gg/dndfriends"><img src={discordLogo} alt="discord logo" /> Join now</a>
        </div>

      </div>
      <Suspense fallback={<Loader />}>
        <Spline className="hero__spline" scene="https://prod.spline.design/a4JOJ5ykgKwz7hOo/scene.splinecode" />
      </Suspense>
      <div onClick={() => setTooltipVisible(!tooltipVisible)} className="hero__tooltip" role='tooltip' data-active={tooltipVisible}>
        <span className="hero__tooltip-question">?</span>
        <span className='hero__tooltip-content'>
          {tooltipVisible ? 'You can roll the die by dragging it around! If you lose the die, press SPACE or refresh the page. This works better on desktop' : ''}
        </span>
      </div>
      <div className="scroll-down"></div>
    </section>
  )
}

export default Hero
