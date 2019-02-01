import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'

import slide1 from "../image/slide-1.jpg"
import slide2 from "../image/slide-2.jpg"
import slide3 from "../image/slide-3.jpg"


class Home extends Component {
  render() {
    return (
      <div className="home-slides">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="First slide"/>
          <Carousel.Caption>
            <h3>Begin your search here</h3>
            <p>Blank</p>
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
