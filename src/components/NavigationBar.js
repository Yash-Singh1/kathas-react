import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import { Link, Redirect } from 'react-router-dom';
import icon from '../assets/favicon.ico';

const NavigationBar = ({
  search,
  children,
  onChange,
  onSubmit,
  onClick,
  onEnter
}) => {
  const [value, setValue] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // istanbul ignore if
    if (localStorage.getItem('q')) {
      if (search) {
        setValue(localStorage.getItem('q'));
      }
    } else {
      localStorage.setItem('q', '');
    }
  }, []);

  useEffect(() => {
    if (redirect) {
      setRedirect(false);
    }
  }, [redirect]);

  if (redirect) {
    return <Redirect to={redirect} />;
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
        <NavbarBrand
          style={{
            fontSize: '3rem'
          }}
          to='/'
          as={Link}
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
        </NavbarBrand>
        <NavbarToggle aria-controls='responsive-navbar-nav' />
        <NavbarCollapse id='responsive-navbar-nav'>
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
              onSubmit={(event) => {
                onSubmit?.(event);
                event.preventDefault();
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
                value={value}
                onChange={(event) => {
                  localStorage.setItem('q', event.target.value);
                  onChange?.(event.target.value);
                  setValue(event.target.value);
                }}
                onKeyPress={(event) => {
                  // istanbul ignore else
                  if (event.which === 13 && value !== '') {
                    onEnter?.(event, value);
                    setRedirect('/search?q=' + encodeURIComponent(value));
                  }
                }}
              />
              <Button
                variant='success'
                style={{
                  width: 75
                }}
                onClick={(event) => {
                  if (value !== '') {
                    onClick?.(event, value);
                    setRedirect('/search?q=' + encodeURIComponent(value));
                  }
                }}
              >
                Search
              </Button>
            </Form>
          </Nav>
        </NavbarCollapse>
      </Navbar>
      <div
        style={{
          marginTop: 70
        }}
      >
        {children}
      </div>
    </>
  );
};

export default NavigationBar;
