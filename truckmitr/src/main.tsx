import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </HelmetProvider>
  </StrictMode>,
)
