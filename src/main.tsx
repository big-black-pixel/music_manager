import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Layaout from './components/layaout/Layaout.tsx'
import { NuqsAdapter } from 'nuqs/adapters/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NuqsAdapter>
      <Layaout>
        <App />
      </Layaout>
    </NuqsAdapter>
  </StrictMode>,
)
