import React, { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop';
import Restreview from './Restreview';




function Viewrest() {

  const urlparams = useParams()
  console.log(urlparams); // (id: '3')
  console.log(urlparams.id);


  const [AllRestaurants, setAllRestaurants] = useState([])

  //function to call API to get from restuarant.json

  const getRestaurants = async () => {
    await fetch('/restaurants.json')
      .then((data) => {
        data.json()
          .then((result) => {
            // console.log(result);  // array of data
            setAllRestaurants(result.restaurants)  //10
          })

      })
  }
  console.log(AllRestaurants);

  useEffect(() => {
    getRestaurants();
  }, [])


  const viewrest = AllRestaurants.find(item => item.id == urlparams.id)
  console.log(viewrest);


  return (
    <>
      {
        viewrest ? (
          <Row className='m-3'>
            <Col className='m-4 ' md={3}>
              <Image src={viewrest.photograph} fluid />
            </Col>
            <Col className='m-4 ' md={7}>
              <ListGroup variant="flush">
                <ListGroup.Item><h4>{viewrest.name}</h4></ListGroup.Item>
                <ListGroup.Item><h5>{viewrest.neighborhood}</h5></ListGroup.Item>
                <ListGroup.Item><h6>{viewrest.cuisine_type}</h6></ListGroup.Item>
                <ListGroup.Item><h6>{viewrest.address}</h6></ListGroup.Item>
                <ListGroup.Item><h6><Restop operate={viewrest.operating_hours} /></h6></ListGroup.Item>
                <Restreview review= {viewrest.reviews}/>
              </ListGroup>
             

            </Col>
          </Row>
        ) : 'null'


      }

    </>
  )
}

export default Viewrest



