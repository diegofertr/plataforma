import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Protected = ({ component: Component, ...restProperties }) => {

  const userLogged = localStorage.getItem('token')

  if (!userLogged) {
    // Si el usuario no esta loggeado redirigir a login/register
    return <Redirect to='/login' />
  }
  return <Route {...restProperties} render={Component} />
}

export default Protected
