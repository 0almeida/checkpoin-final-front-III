import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({id, name, username, handleFav, state}) => {

  const isFav = state.find(item => item.id === id) ? true : false
  
  return (
    <div className="card">
      <Link to={`/dentista/${id}`}>
        <img src="/images/doctor.jpg" alt="doctor-img" style={{width: '100%'}}/>
        <h2>{name}</h2>
        <h3>{username}</h3>
      </Link>
      <button onClick={() => handleFav(id, name, username)} className="favButton">{isFav ? "❌" : "⭐"}</button>
    </div>
  )
}

export default Card
