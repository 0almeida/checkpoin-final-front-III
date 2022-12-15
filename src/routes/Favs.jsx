import React from 'react'
import useStorage  from '../hooks/useStorage'
import Card from '../components/Card'

const Favs = () => {

  const { state, handleFav } = useStorage()

  return (
    <div className='main'>
      <h1>Favoritos</h1>
      <div className="cards-box">
        {state?.map(item =>
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            username={item.username}
            handleFav={handleFav}
            state={state}
          />
        )}
      </div>
    </div>
  )
}

export default Favs
