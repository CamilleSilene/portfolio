import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from "react-bootstrap/esm/Badge";
import styles from './ProjectDetails.module.css'; 

function ProjectDetails() {
    const { id } = useParams();

    const [project, setProject] = useState([]);

    function formatProject (project) {
        const newProject = { ...project };
        // eslint-disable-next-line no-underscore-dangle
        newProject.id = newProject._id;
        return newProject;
    }
    useEffect(() => {
      axios( {
            method: 'GET',
            url: `http://localhost:4000/api/project/${id}`
          }).then((response) => formatProject(response.data))
          .then( (project) => setProject(project));
    },[]);

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