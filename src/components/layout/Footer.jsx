import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
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