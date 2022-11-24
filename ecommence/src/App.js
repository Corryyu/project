import './App.css';
import Container from 'react-bootstrap/Container';
import React from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel, FormText, Nav, Tab, TabContent } from 'react-bootstrap';

function Account() {
  return (
    <>
      <Container className='h1 text-center my-5 account'>Welcome</Container>
      <Container className='account shadow'>

        <Tab.Container id="loginTab" defaultActiveKey="login">
          <Nav className="justify-content-center h4 p-2 border-bottom" justify>
            <Nav.Item className='border-end'>
              <Nav.Link eventKey="login">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="joinin">Join In</Nav.Link>
            </Nav.Item>
          </Nav>

          <TabContent>
            <Tab.Pane eventKey='login'>
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
                  Login
                </Button>
              </Form>
              <a href='#' className='d-block text-center pt-3 pb-5'>Forget Password?</a>
            </Tab.Pane>
            <Tab.Pane eventKey='joinin'>
              <Form className='w-50 mx-auto pt-5'>
                <FormGroup controlId='registerEmail'>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl type='email' className='rounded-0 mb-2' required></FormControl>
                </FormGroup>
                <FormGroup controlId='registerfn'>
                  <FormLabel>First Name</FormLabel>
                  <FormControl type='text' className='rounded-0 mb-2' required></FormControl>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl type='text' className='rounded-0 mb-2' required></FormControl>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Password</FormLabel>
                  <FormControl type='password' className='rounded-0 mb-2' minLength={10} required></FormControl>
                  <FormText>Must be 10 or more characters</FormText>
                </FormGroup>
                <Button type="submit" className='w-100 mt-4 btn-dark rounded-0 mb-5'>
                    Join In
                  </Button>
              </Form>
            </Tab.Pane>
          </TabContent>
        </Tab.Container>
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
