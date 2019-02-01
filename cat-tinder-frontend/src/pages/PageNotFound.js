import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import error from '../image/error.png'
import '../styles/main.css'


class PageNotFound extends Component {
  render() {
    return (
      <div className="page-not-found">
        <h1>Page Not Found</h1>
          <img
            alt=""
            src={ error }
            width="300"
            height="300"
            className="d-inline-block align-top"/>
            <br/>
            <br/>
          <Link to="/cats">Back to Cats!</Link>
      </div>
    )
  }
}

export default PageNotFound
