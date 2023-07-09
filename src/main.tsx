import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.tsx'
import Hero from './Hero.tsx'
import Timeline from './Timeline.tsx'
import Footer from './Footer.tsx'
import './styles/index.scss'
import './styles/normalize.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Nav/>
    <Hero />
    <Timeline />
    <Footer />
  </React.StrictMode>,
)
