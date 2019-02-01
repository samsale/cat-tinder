import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Form, Row, Col, Button} from 'react-bootstrap';


class NewCat extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        age: 0,
        enjoys: ''
      }
    }
  }

  handleFormChanges = (event) => {
    // Deconstruct the nest object in state
    let form = {...this.state.form}
    // use "name" from the form as the key and the value of the form as the value
    form[event.target.name] = event.target.value
    // set state from the form object
    this.setState({form})
  }

  render() {
    console.log(this.state);
    return (
      <div className='sign-up-form' >
        <h3>Sign Up</h3>
          <p> You're moments away from meeting your pur-fect match</p>
            <Row>
              <Col xs={6} md={6}>
                <Form id="new_cat_form" onSubmit={this.handleSubmit}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                      <Form.Control onChange={this.handleFormChanges} name="name" type="text" placeholder="Apollo" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Age</Form.Label>
                      <Form.Control onChange={this.handleFormChanges} name="age" type="number" placeholder="21" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Hobbies</Form.Label>
                      <Form.Control onChange={this.handleFormChanges} name="enjoys" type="text" placeholder="Cuddles" />
                </Form.Group>
              <Button variant="dark">Submit</Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default NewCat
