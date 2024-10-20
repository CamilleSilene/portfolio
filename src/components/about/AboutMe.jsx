import { Col, Container, Image, Row } from "react-bootstrap";

function AboutMe() {
    return (
    <Container id="aboutme-section" className="bg-light">
      <Row bsPrefix="row p-5" >
      <Col bsPrefix="col align-self-center" md={4} >
        <Image src="https://avatars.githubusercontent.com/u/164325518?v=4" fluid roundedCircle />
      </Col>
        <Col  md={8}>
            <h2 className="display-4 mb-5 text-center">A propos</h2>
            <p className="lead text-center">
              Camille Pierrot, développeuse fullstack avec de l'appétence pour le backend. <br/>
              Après plusieurs aventures dans le monde du spectacle vivant, je me suis tournée vers celui du developpement web en 2024 et ai obtenu mon titre RNCP Developpement web chez OpenClassRooms.<br/>
              Je me plonge dans l'univers du web avec enthousiasme, en développant des projets qui combinent créativité et fonctionnalité. Mon parcours est en pleine évolution, et je suis impatiente d’en apprendre encore plus chaque jour..
              
            </p>
        </Col>
      </Row>
    </Container>
    );
  }

  
export default AboutMe;