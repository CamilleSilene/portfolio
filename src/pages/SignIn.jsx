/*
eslint linebreak-style: ["error", "windows"]
*/
import React, { useEffect, useState } from 'react';
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
  const { connectedUser, authenticated, userLoading } = useUser();  // Utilisation de connectedUser
  
  useEffect(() => {
    // Si l'utilisateur est déjà connecté, redirection vers /admin
    if (!userLoading && authenticated) {
      navigate('/admin/');
    }
  }, [userLoading, authenticated, navigate]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ error: false, message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    try {
      setIsLoading(true);  // Indique que la requête est en cours

      const response = await axios.post(API_ROUTES.SIGN_IN, {
        email,
        password,
      });

      if (!response.data.token || !response.data.userId) {
        setNotification({ error: true, message: 'Une erreur est survenue lors de la connexion.' });
        console.error('Erreur lors de la connexion: ', response);
      } else {
        // Stockage du token et de l'utilisateur dans le localStorage
        storeInLocalStorage('token', response.data.token);
        storeInLocalStorage('userId', response.data.userId);

        // Met à jour l'état utilisateur avec setUser si nécessaire
        if (setUser) {
          setUser(response.data);
        }

        // Redirection après connexion réussie
        navigate('/admin/');
      }
    } catch (err) {
      console.error('Erreur pendant la connexion: ', err);
      setNotification({ error: true, message: 'Connexion échouée. Veuillez réessayer.' });
    } finally {
      setIsLoading(false);  // Remet l'état de chargement à false après la requête
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