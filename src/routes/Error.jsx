import { useNavigate } from 'react-router-dom'

const Error = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/home")
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "1rem"
    }}>
      <h1>Error 404</h1>
      <p>Página não encontrada</p>
      <button onClick={handleClick}>Ir a Home</button>
    </div>
  )
}

export default Error
