import './App.css';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

function Account() {
  return (
    <>
    <Container className='h1 text-center my-5 account'>Welcome</Container>
    <Container className='shadow account'>
      <Row className='p-3 border-bottom text-center'>
        <Col className='border-end h4'><a href='#'>Login</a></Col>
        <Col className='h4'><a href='#'>Join in</a></Col>
      </Row>
      <Form className='w-50 mx-auto pt-5'>
        <FormGroup controlId='loginEmail'>
          <FormLabel>Email Address</FormLabel>
          <FormControl type='email' className='rounded-0 mb-2' required></FormControl>
        </FormGroup>
        <FormGroup controlId='loginPwd'>
          <FormLabel>Password</FormLabel>
          <FormControl type='password' className='rounded-0' required></FormControl>
        </FormGroup>
        <Button type="submit" className='w-100 mt-4 btn-dark rounded-0'>
        Submit
      </Button>
      </Form>
      <a href='#' className='d-block text-center pt-3 pb-5'>Forget Password?</a>
    </Container>
    </>
  );
}

function App() {
  return (
    <Account />
  );
}

export default App;
