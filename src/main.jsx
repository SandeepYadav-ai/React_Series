import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// behind he seen how ot work variale to evalute expression (reactElement)
// inside 
//let reactElement = React.createElement("a",{href: 'https://google.cpm'},'visit') 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <reactElement /> */}
  </StrictMode>
)
