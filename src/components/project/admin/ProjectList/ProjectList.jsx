import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";

import ProjectListItem from "./ProjectListItem";
import { useUser } from "../../../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../../../constants";
import { deleteProject, getProjects } from "../../../utils/projectStore";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function ProjectList(props) {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const { connectedUser, auth, userLoading } = useUser();
  
  useEffect(() => {
    console.log("projectList",connectedUser, auth)
    if (!userLoading) {
      if (!connectedUser || !auth) {
        navigate(APP_ROUTES.SIGN_IN);
      }
      }
  }, [connectedUser, auth, userLoading, navigate]);

  useEffect(() => {
    async function getProjectsList() {
      const data = await getProjects();
      if (data) {
        setProjects(data);
      }
    }
    getProjectsList();
  }, []);

  const handleDelete = (id) => {
    deleteProject(id);
  };

  const handleCreate = () => {
    navigate('/admin/project/create');
  }
  return (
    <Container>
      <h1>Liste des projects</h1>
      <Row>
        <Col>
          <Button variant="primary" onClick={handleCreate}>Créer un Projet</Button>
        </Col>
      </Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <ProjectListItem
              key={project.id}
              {...project}
              onDelete={() => handleDelete(project.id)}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProjectList;
