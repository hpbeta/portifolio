import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './home.jsx'
import { register } from "swiper/element-bundle"
register()
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import 'swiper/css/effect-coverflow';
import { ThemeProvider } from './contexts/theme-contexts.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider >
        <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
