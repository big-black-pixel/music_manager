import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Layaout from './components/layaout/Layaout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layaout>
    <App />
    </Layaout>
  </StrictMode>,
)
