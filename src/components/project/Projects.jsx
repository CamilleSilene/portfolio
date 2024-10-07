import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard/ProjectCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { getProjects } from "../utils/projectStore";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjectsList() {
      const data = await getProjects();
      if (data) {
        setProjects(data);
      }
    }
    getProjectsList();
  }, []);

  return (
    <Container>
      <h2>Projects</h2>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project, id) => (
          <Col key={id}>
            <ProjectCard key={project.id} {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
