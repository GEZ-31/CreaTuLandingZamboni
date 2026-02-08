import React from 'react'
import {Button, Card} from 'react-bootstrap'

const Item = ({prod}) => {
  return (
    <Card  style={{ width: '14rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>Precio: ${prod.price},00</Card.Text>
        <Button variant="dark">Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default Item