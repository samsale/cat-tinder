import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

import slide1 from "../image/slide-resize-1.jpg"
import slide2 from "../image/slide-resize-2.jpg"
import slide3 from "../image/slide-resize-3.jpg"
import '../styles/main.css'



class Home extends Component {

  render() {
    return (
      <div className="home-slides">
      <Carousel className="cara" interval={2000} fade controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="First slide"/>
          <Carousel.Caption>
            <h3>Welcome</h3>
            <p>Begin your search here</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="Third slide"/>
          <Carousel.Caption>
            <h3>Kevin and Kerry</h3>
            <p>Together since Febuary 2019</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
  }
}

export default Home
