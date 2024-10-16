import React from "react";
import Container from "react-bootstrap/Container";
import styles from './Footer.module.css'; 

const Footer = (props) => {

  const myClasses = `container-fluid mt-auto py-5 text-center ${styles.myFooter}`;
  return (
    <footer className={ myClasses}>
      <Container fluid>
      <p>
           Pour me contacter par mail, c’est par{' '}
          <a href="mailto:pierrotcamille04@gmail.com">ici</a>.
      </p>
      <p>
        Conçu et développé par Camille Pierrot © {new Date().getFullYear()}
      </p>
      
      </Container>
    </footer>
  );
};

export default Footer;