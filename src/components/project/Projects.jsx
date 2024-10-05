
import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProjectCard from "./ProjectCard/ProjectCard";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Projects() {
  const [projects, setProjects] = useState([]);

  function formatProjects (projectsArray) {
    return projectsArray.map((project) => {
      const newProject = { ...project };
      // eslint-disable-next-line no-underscore-dangle
      newProject.id = newProject._id;
      return newProject;
    });
  }
  useEffect(() => {
    axios( {
          method: 'GET',
          url: 'http://localhost:4000/api/project'
        }).then((response) => formatProjects(response.data))
        .then( (projects) => setProjects(projects));
  },[]);

    return (
    <Container>
      <h2>Projects</h2>
      <Row xs={1} md={2} className="g-4">
        {projects.map( (project, id) => 
          <Col key={id} >
            <ProjectCard key={project.id} {...project} />
          </Col>
        )}
      </Row>
    </Container>
    );
  }

  
export default Projects;