import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='d-flex flex-column align-items-center gap-2 m-2'>
        <h1>Error</h1>
        <p>La página que buscas no existe</p>

        <img width={200} src="../error404.png" alt="Error 404" />

        <Link className="btn btn-primary" to="/">Volver a Home</Link>
    </div>
  )
}

export default Error