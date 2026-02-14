import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
  return (
    <Card  className='item_custom'>
      <Card.Img variant="top" className='img-size object-fit-scale' src={prod.img} />
      <Card.Body className='d-flex flex-column justify-content-between align-items-start'>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>Precio: ${prod.price},00</Card.Text>
        <Link to={`/item/${prod.id}`} className="btn btn-dark justify-content-center">Ver más</Link>
      </Card.Body>
    </Card>
  )
}

export default Item