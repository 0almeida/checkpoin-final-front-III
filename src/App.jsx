import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './contexts/ThemeProvider'
import Layout from './pages/Layout'
import Home from './routes/Home'
import Detail from './routes/Detail'
import Contact from './routes/Contact'
import Favs from './routes/Favs'
import Error from './routes/Error'

import './index.css'

function App() {

  const {darkTheme} = useContext(ThemeContext)

  if (darkTheme) {
    document.body.classList.add('dark')
  } else if (!darkTheme) {
    document.body.classList.remove('dark')
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/dentista/:id" element={<Detail/>} />
            <Route path="/contacto" element={<Contact/>} />
            <Route path="/favoritos" element={<Favs/>} />
          </Route>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
