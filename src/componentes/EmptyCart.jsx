import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <Card className="text-center m-5 shadow-lg w-50 mx-auto">
      <Card.Header>Sin productos para mostrar</Card.Header>
      <Card.Body>
        <Card.Title>Tu carrito está vacío </Card.Title>
        <Card.Text>
          Te invitamos a visitar nuestra tienda para agregar productos a tu carrito.
        </Card.Text>
        <Button as={Link} to="/" variant="primary">Ir a la tienda</Button>
      </Card.Body>
    </Card>
  )
}

export default EmptyCart