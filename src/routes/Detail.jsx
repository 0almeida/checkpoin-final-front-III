import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {

  const params = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState()
  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios(`${url}/${params.id}`)
      setData(response.data)
    }
    fetchData()
  }, [])

  const handleClick = () => {
    navigate(-1)
  }
  
  return (
    <div className='main'>
      <h1>Detalle odontologo ID: {data?.id}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Página Web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data?.id}</td>
            <td>{data?.name}</td>
            <td>{data?.email}</td>
            <td>{data?.phone}</td>
            <td>{data?.website}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleClick}>Voltar</button>
    </div>
  )
}

export default Detail
