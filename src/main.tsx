import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.scss'
import { Cv } from './CV/Cv.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Cv />
  </React.StrictMode>,
)
