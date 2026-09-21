import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/manrope'
import '@fontsource-variable/jetbrains-mono'
import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'
import App from './App'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// En production le HTML est prérendu : on l'hydrate. En dev (racine vide), on monte normalement.
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)
