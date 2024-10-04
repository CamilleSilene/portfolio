import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from "./ProjectCard/ProjectCard";

import projects from "../../data/projects.json";

function Project() {
    return (
    <Container>
      <h2>Projects</h2>
      <Row xs={1} md={2} className="g-4">
        {projects.map( (project) => 
          <Col key={project.id}>
            <ProjectCard {...project}/>
          </Col>
        )}
      </Row>
    </Container>
    );
  }

  
export default Project;