import { Col, Row } from "react-bootstrap";
import Navigation from "./Navigation";

function Header() {
    return (
    <div className="container-fluid bg-transparent bgstyle mt-5 pt-3">
      <Row>

        <Navigation />
        <div className="col-12 w-100 d-flex align-items-center" style={{ height: '30vh'}}>
          <p id="header-text" className="lead text-white fw-bold text-center fs-2 w-100 mt-5 ">Camille Pierrot <br/>
          La curiosité et la passion me guident dans mon parcours de développeur web. <br/>
          Chaque projet est pour moi une opportunité d'apprendre et de me perfectionner.
          </p>         
         
        </div>
      </Row>
      <Row>
      <Col></Col>
      <Col className="d-flex justify-content-center align-items-center pb-5">
          <a href="https://github.com/CamilleSilene" target="_blank" class="btn btn-outline-secondary mx-2" rel="noreferrer"><i className="fa fa-github fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/camille-pierrot/" target="_blank" class="btn btn-outline-secondary mx-2" rel="noreferrer"><i className="fa fa-linkedin fa-2x"></i></a>
          </Col>
          <Col></Col>
      </Row>
    </div>
    );
  }

  
export default Header;