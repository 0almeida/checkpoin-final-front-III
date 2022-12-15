import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeProvider'

const Navbar = () => {

  const {darkTheme, toggleTheme} = useContext(ThemeContext)

  return (
    <nav>
      <Link to={'/home'} className='logo'><h1>DH Odonto</h1></Link>
      <div>
        <Link to={'/home'}>Home</Link>
        <Link to={'/contacto'}>Contato</Link>
        <Link to={'/favoritos'}>Favoritos</Link>
      </div>
      <button onClick={toggleTheme}>{darkTheme === true ? "🌞 LIGHT" : "🌝 DARK"}</button>
    </nav>
  )
}

export default Navbar
