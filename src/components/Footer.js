import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Footer() {
  return (
    <div> <Card className="text-center">
    <Card.Header>ADDRESS</Card.Header>
    <Card.Body>
      <Card.Title>KOCHI</Card.Title>
      <Card.Text>
      Opp.Cochin Special Economic Zone (CSEZ),
Seaport-Airport Road, Kakkanad. <br/>Opening Time :
Monday to Sunday - 11:00 AM - 02:00 AM      </Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Copyright © 2018 PLATE & FORK. All Rights Reserved</Card.Footer>
  </Card></div>
  )
}

export default Footer