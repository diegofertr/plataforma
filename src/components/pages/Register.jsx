import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const registration = (e) => {
  e.preventDefault();
  const form = e.target;

  const data = {
    email: form.email.value,
    name: form.email.fullname,
    password: form.password.value
  }

  Axios.post(`${process.env.REACT_APP_API_USER}/signup`, data)
    .then(response => {
      alert('Usuario creado, por favor inicie sesión.')
      // localStorage.setItem('token', response.data.token)
      window.location = '/login'
    })
    .catch(e => {
      alert('Error al crear usuario');
    })
}

const Register = () => {
  return (
    <div className="ed-grid">
      <div className="l-block"></div>
      <div className="m-to-center m-60 lg-30">
        <h1 className="center">Crear cuenta </h1>
        <form onSubmit={registration.bind()}>
          <div className="form__item">
            <label htmlFor="fullname">
              Nombre completo
              <input type="text" name="fullname" id="fullname" placeholder="Ingrese su nombre completo" required />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="email">
              Correo electrónico
              <input type="email" name="email" id="email" placeholder="Ingrese su e-mail" required />
            </label>
          </div>
          <div className="form__item">
            <label htmlFor="password">
              Contraseña
              <input type="password" name="password" id="password" placeholder="Ingrese su contraseña" required />
            </label>
          </div>

          <div className="form__item">
            <input type="submit" className="button full" value="Crear cuenta" />
          </div>
        </form>
        <div className="center">
          <p>¿Ya tienes cuenta de usuario? <Link to="/login">Inicia sesión</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register
