import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../assets/favicon.ico';

class NavigationBar extends Component {
  render() {
    return (
      <>
        <Navbar bg='primary' variant='dark'>
          <Nav>
            <Navbar.Brand
              style={{
                fontSize: '3rem'
              }}
              href='/'
            >
              <img
                alt='kathas icon'
                src={icon}
                style={{
                  display: 'inline-block',
                  width: '2rem',
                  marginRight: 5,
                  marginLeft: 10
                }}
              />{' '}
              Kathas
            </Navbar.Brand>
            <Nav.Link href='/'>Home</Nav.Link>
            <Link className='nav-link' to='/about'>About</Link>
          </Nav>
        </Navbar>
        <div
          style={{
            marginTop: 70
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

export default NavigationBar;
