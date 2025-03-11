import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import WordPress styles
import '@wordpress/components/build-style/style.css'
import '@wordpress/dataviews/build-style/style.css'

// Import our custom styles last to override any default styles
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
