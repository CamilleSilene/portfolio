import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard/ProjectCard";
import React, { useState, useEffect } from "react";
import { getProjects, getProjectsByTag, getTags } from "../utils/projectStore";
import { Badge } from "react-bootstrap";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function getProjectsList() {
      const data = await getProjects();
      if (data) {
        setProjects(data);
      }
    }
    getProjectsList();
  }, []);

  useEffect(() => {
    async function getProjectsTags() {
      const data = await getTags();
      if (data) {
        setTags(data);
      }
    }
    getProjectsTags();
  }, []);

  async function onTagClicked( tag ) {
    let projects = [];
    if(tag === "all") {
       projects = await getProjects();
    } else {
       projects = await getProjectsByTag(tag);
    }
    setProjects(projects);
  }

  return (
    <Container>
      <h2>Projects</h2>
      <Row>
        <Col>
        <Badge key="all" bg="primary" pill onClick={() => onTagClicked("all")}>Tous</Badge>
          { tags.map( (tag) =>  ( <Badge key={tag} bg="primary" pill onClick={() => onTagClicked(tag)}>{tag}</Badge> ) ) }
        </Col>
      </Row>
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
