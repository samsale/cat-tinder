import React, { Component } from 'react';
import { Row, Col, ListGroupItem, ListGroup, Card, Button, Container } from 'react-bootstrap'

import catCard from '../image/catcard.jpeg'

class Cats extends Component {
  trimString = (string) =>{
    if (string.length > 30){
    let trimLength = 27
    return `${string.substring(0, trimLength)}..`
    }else {
    return string
    }
  }

render() {


return(
  <Container>
    <Row>
      {this.props.cats.map((cat, index) =>{
        return (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="cat-card">
              <Card.Img variant="top" src={catCard}/>
                <Card.Body>
                  <Card.Title>{cat.name} - {cat.age}</Card.Title>
                    <Card.Text>{this.trimString(cat.enjoys)}</Card.Text>
                      <Button variant="primary">See Profile</Button>
                </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  </Container>
    )
  }
}

export default Cats
