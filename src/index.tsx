import { createRoot } from 'react-dom/client'
import './reset.css'
import Root from './Root'

const container = document.getElementById("root")

if (!container) {
  throw new Error("Root container is missing in index.html")
}

createRoot(container).render(
  <Root />
)
