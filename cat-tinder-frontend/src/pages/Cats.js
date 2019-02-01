import React, { Component } from 'react';
import { Row, Col, ListGroupItem, ListGroup, Card, Button, Container } from 'react-bootstrap'


class Cats extends Component {
  render() {
    //what the user see

return(
  <Container>
  <Row>

      {this.props.cats.map((cat, index) =>{
        return (
          <Col xs={6}>
          <Card className="cat-card">
          <Card.Img variant="top" src={cat.profile}/>
          <Card.Body>
          <Card.Title>{cat.name} - {cat.age}</Card.Title>
          <Card.Text>{cat.enjoys}</Card.Text>
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
