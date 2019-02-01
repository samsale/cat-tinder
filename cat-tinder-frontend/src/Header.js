import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';

import logo from './imgs/icon.png';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src={ logo }
              width="30"
              height="30"
              className="d-inline-block align-top"/>
            {'Cat Bumble'}
          </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/newcat">Sign Up</Nav.Link>
              <Nav.Link href="/cats">Cat List</Nav.Link>
            </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
