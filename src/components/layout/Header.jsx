import { Col, Row } from "react-bootstrap";
import Navigation from "./Navigation";
import styles from './Header.module.css'; 

function Header() {
    return (
    <div className="container-fluid bg-transparent bgstyle">
      <Row>
        <div className="col-md-6 w-100 d-flex align-items-center" style={{ minHeight: '30vh'}}>
          <p id="header-text" className="lead text-white fw-bold text-center w-100 mt-5 fs-2">Camille Pierrot <br/>
          La curiosité et la passion me guident dans mon parcours de développeur web. <br/>
          Chaque projet est pour moi une opportunité d'apprendre et de me perfectionner.
          </p>         
         
        </div>
      </Row>
      <Row>
      <Col></Col>
      <Col className="col-md-6 d-flex justify-content-center align-items-center pb-5">
          <a href="https://github.com/CamilleSilene" target="_blank" class="btn btn-lg btn-outline-secondary mx-2" rel="noreferrer"><i className="fa fa-github fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/camille-pierrot/" target="_blank" class="btn btn-lg btn-outline-secondary mx-2" rel="noreferrer"><i className="fa fa-linkedin fa-2x" ></i></a>
          </Col>
          <Col></Col>
      </Row>
    </div>
    );
  }

  
export default Header;