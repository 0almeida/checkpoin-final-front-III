import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const DataContext = createContext()

export const DataProvider = ({children}) => {

  const [data, setData] = useState()
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios(url)
      setData(response.data)
    }
    fetchData()
  }, [])

  return (
    <DataContext.Provider value={ data }>
      {children}
    </DataContext.Provider>
  )
}
