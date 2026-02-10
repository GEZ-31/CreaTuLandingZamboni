import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='container'>
        <h1>Error</h1>
        <p>La página que buscas no existe</p>
        <img src="../error404.png" alt="Error 404" />
        <Link to="/">Volver a Home</Link>
    </div>
  )
}

export default Error