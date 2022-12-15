import React, { useState, useRef } from 'react'
import { validateText, validateEmail } from '../utils/validations'

const Form = () => {
  
  const form = useRef()
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validateText(dataForm.name)) alert('Porfavor, ingresa tu nombre completo')
    if (!validateEmail(dataForm.email)) alert('Porfavor, escribe un email valido')
    if (!validateText(dataForm.message)) alert('Porfavor, escribe un mensaje más largo')
    if (validateText(dataForm.name) && validateEmail(dataForm.email) && validateText(dataForm.message)) {
      alert(`Gracias ${dataForm.name}, te contactaremos cuanto antes vía email.`)
      form.current.reset()
    }
  }

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <input type="text" placeholder="Nome" name="name" onChange={handleChange}/><br/>
      <input type="email" placeholder="Mail" name="email" onChange={handleChange}/><br/>
      <textarea type="text" placeholder="Escreva sua mensagem" name="message" onChange={handleChange}/><br/>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Form
