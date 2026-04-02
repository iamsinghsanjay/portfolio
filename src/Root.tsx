import { StrictMode } from "react"
import "./global.css"
import App from "./App"
import { ThemeProvider } from "./ThemeProvider"

function Root() {

  return (
    <StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </StrictMode>
  )
}

export default Root
