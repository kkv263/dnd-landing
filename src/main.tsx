import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.tsx'
import App from './App.tsx'
import './styles/index.scss'
import './styles/normalize.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Nav/>
    <App />
  </React.StrictMode>,
)