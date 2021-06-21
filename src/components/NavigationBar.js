import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import icon from '../assets/favicon.ico';

class NavigationBar extends Component {
  state = { value: '', redirect: false };

  componentDidMount() {
    if (localStorage.getItem('q')) {
      if (this.props.search) {
        this.setState({ value: localStorage.getItem('q') });
      }
    } else {
      localStorage.setItem('q', '');
    }
  }

  componentDidUpdate() {
    /* istanbul ignore else */
    if (this.state.redirect) {
      this.setState({ redirect: false });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    return (
      <>
        <Navbar
          collapseOnSelect
          expand='lg'
          bg='primary'
          variant='dark'
          style={{
            zIndex: 10
          }}
        >
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
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
              <Link className='nav-link' to='/about'>
                About
              </Link>
              <Form
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <FormControl
                  type='search'
                  placeholder='Search &#128269;'
                  aria-label='Search'
                  style={{
                    fontSize: 16,
                    height: 40,
                    maxWidth: 200,
                    marginLeft: 10,
                    marginRight: 2
                  }}
                  value={this.state.value}
                  onChange={(event) => {
                    localStorage.setItem('q', event.target.value);
                    this.setState({ value: event.target.value });
                  }}
                  onKeyPress={(event) => {
                    /* istanbul ignore else */
                    if (event.which === 13) {
                      this.setState({
                        redirect:
                          '/search?q=' + encodeURIComponent(this.state.value)
                      });
                    }
                  }}
                />
                <Button
                  variant='success'
                  style={{
                    width: 75
                  }}
                  onClick={() =>
                    this.setState({
                      redirect:
                        '/search?q=' + encodeURIComponent(this.state.value)
                    })
                  }
                >
                  Search
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
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
