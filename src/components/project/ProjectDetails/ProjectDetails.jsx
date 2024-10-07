import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from "react-bootstrap/esm/Badge";
import styles from './ProjectDetails.module.css'; 
import { getProject } from "../../utils/projectStore";

function ProjectDetails() {
    const { id } = useParams();

    const [project, setProject] = useState(undefined);

    useEffect(() => {
      async function getProjectDetails() {
        const data = await getProject(id);
        if (data) {
          setProject(data);
        }
      }
      getProjectDetails();
    }, [id]);

    return (
    <Container>
      <h2>{project.title}</h2>
      <Row>
          <Col>
            <p>{project.description}</p>
          </Col>
          <Col>
            <p>Lien : {project.link}</p>
            <p>Github : {project.github}</p>
          </Col>
      </Row>
      { project.tags !== undefined &&
        <Row>
          <Col>
            { project.tags.map((tag) => ( <Badge key={tag} bg="primary" pill className={styles.projectBadge}>{tag}</Badge> ) ) }
          </Col>
        </Row>
      }
    </Container>
    );
  }

  
export default ProjectDetails;