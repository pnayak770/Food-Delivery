import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './Context/StoreContext'
import ThemeProviderComponent from './components/ThemeProviderComponent/ThemeProviderComponent.jsx'
import ToggleThemeButton from './components/ToggleThemeButton/ToggleThemeButton.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <ThemeProviderComponent>
      <App />

      </ThemeProviderComponent>
    </StoreContextProvider>
  </BrowserRouter>,
)
