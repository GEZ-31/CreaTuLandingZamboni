import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({prod}) => {
  return (
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>Precio: ${prod.price},00</Card.Text>
        <Link to={`/item/${prod.id}`} className="btn btn-dark">Ver más</Link>
      </Card.Body>
    </Card>
  )
}

export default Item