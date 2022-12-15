import { useReducer } from 'react'
import { reducer } from '../utils/FavsReducer'

const useStorage = () => {

  const initialState = JSON.parse(localStorage.getItem('favs'))
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleFav = (id, name, username) => {
    let data = JSON.parse(localStorage.getItem('favs'))
    if (state.find(item => item.id === id)) {
      dispatch({ type: 'DELETE_USER', payload: id })
      data = data.filter(item => item.id !== id)
    } else {
      dispatch({type: 'ADD_USER', payload: {id, name, username}})
      data.push({id, name, username})
    }
    localStorage.setItem('favs', JSON.stringify(data))
  }
  
  return { 
    state,
    handleFav
  }

}

export default useStorage