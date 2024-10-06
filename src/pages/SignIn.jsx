/*
eslint linebreak-style: ["error", "windows"]
*/
import React, { useState } from 'react';
import axios from 'axios';
import * as PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { storeInLocalStorage } from '../utils';
import { useUser } from '../hooks/useUser';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { API_ROUTES, APP_ROUTES } from '../constants';

function SignIn({ setUser }) {
  const navigate = useNavigate();
  const { user, authenticated } = useUser();
  if (user || authenticated) {
    navigate(APP_ROUTES.HOME);
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ error: false, message: '' });
  
  const signIn = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: API_ROUTES.SIGN_IN,
        data: {
          email,
          password,
        },
      });
      if (!response.data.token) {
        setNotification({ error: true, message: 'Une erreur est survenue' });
        console.log('Something went wrong during signing in: ', response);
      } else {
        console.log(response.data)
        storeInLocalStorage(response.data.token, response.data.userId);
        setUser(response.data);
        navigate('/admin/');
      }
    } catch (err) {
      console.log(err);
      setNotification({ error: true, message: err.message });
      console.log('Some error occured during signing in: ', err);
    }
  };

  return (
    <Container className='py-5 h-100'>
        <Row className='d-flex justify-content-center align-items-center h-100'>
        <Col className='col-6'>
      <div>
        {notification.message.length > 0 && <p>{notification.message}</p>}
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Adresse Mail</Form.Label>
            <Form.Control type="email" placeholder="Toto@test.com" onChange={(e) => { setEmail(e.target.value); }}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mot de Passe</Form.Label>
            <Form.Control type="password" placeholder="Mot de Passe" onChange={(e) => { setPassword(e.target.value); }} />
        </Form.Group>
      
      <Button variant="primary" type="submit" onClick={signIn}>
        Submit
      </Button>

      </Form>
      </Col>
      </Row>
    </Container>
  );
}

SignIn.propTypes = {
  setUser: PropTypes.func.isRequired,
};
export default SignIn;