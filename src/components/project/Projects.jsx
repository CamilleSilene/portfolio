import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard/ProjectCard";
import React, { useState, useEffect } from "react";
import { getProjects, getProjectsByTag, getTags } from "../utils/projectStore";
import { Badge } from "react-bootstrap";
import styles from './Projects.module.css'; 

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
    <Container id="project-section" bsPrefix="container mt-5 p-5 bg-light">
      <h2 class="display-4 mb-5 text-center">Projects</h2>
      <Row bsPrefix="row m-5">
        <Col md={2}></Col>
        <Col md={8} >
          <Badge key="all" bg="primary" pill onClick={() => onTagClicked("all")} className={styles.filter}>Tous</Badge>
          { tags.map( (tag) =>  ( <Badge key={tag} bg="primary" pill onClick={() => onTagClicked(tag)} className={styles.filter} >{tag}</Badge> ) ) }
        </Col>
        <Col md={2}></Col>
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
