import React, { useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'
import useStorage  from '../hooks/useStorage'
import Card from '../components/Card'

const Home = () => {

  const data = useContext(DataContext)

  if (!JSON.parse(localStorage.getItem('favs'))) {
    localStorage.setItem('favs', JSON.stringify([]))
  }

  const { state, handleFav } = useStorage()
  
  return (
    <div className='main'>
      <h1>Home</h1>
      <div className='cards-box'>
        {data?.map(item =>
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

export default Home
