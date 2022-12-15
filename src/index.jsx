import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalContext from './contexts/GlobalContext'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <GlobalContext>
      <App/>
    </GlobalContext>
  </React.StrictMode>
)
