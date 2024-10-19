import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';  // Import de Link depuis react-scroll
import Project from "../project/Projects";
import AboutMe from '../about/AboutMe';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Accueil</Nav.Link>
                 {/* Utilisation de Link de react-scroll pour un scroll fluide */}
            <Link 
              to="aboutme-section"
              className="nav-link" 
              smooth={true} 
              offset={-70} 
              duration={500}
            >
              A propos
            </Link>
            
            <Link 
              to="project-section"
              className="nav-link" 
              smooth={true} 
              offset={-70} 
              duration={500}
            >
              Projets
            </Link>
            
            <Nav.Link href="/documents/CVDWBF.pdf" target="_blank">Mon CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Navigation;