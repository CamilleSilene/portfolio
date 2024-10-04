import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";

function ProjectDetails() {
    const { id } = useParams();
    return (
    <Container>
      <h2>Project {id}</h2>
      <Row>
          <Col>
          </Col>
      </Row>
    </Container>
    );
  }

  
export default ProjectDetails;