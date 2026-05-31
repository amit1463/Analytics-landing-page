import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, applyInitialThemeBeforeRender } from './context/ThemeContext.jsx'

// Avoid flash-of-wrong-theme by applying the initial class before React renders.
applyInitialThemeBeforeRender()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
