
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from 'react-bootstrap/Table';

import ProjectListItem from "./ProjectListItem";
import { useUser } from '../../../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { APP_ROUTES } from '../../../../constants';

function ProjectList (props) {
    const [projects, setProjects] = useState([]);

    const navigate = useNavigate();
    const { connectedUser, auth, userLoading } = useUser();
    useEffect(() => {
        if (!userLoading) {
          if (!connectedUser || !auth) {
            navigate(APP_ROUTES.SIGN_IN);
          }
        }
      }, [connectedUser, auth, userLoading, navigate]);

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

    const handleDelete = (id) => {
       // ProjectStore.deleteProject(id);
    }

    return (
        <Container>
            <h1>Liste des projects</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Titre</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { projects.map( (project) => 
                        <ProjectListItem key={project.id} {...project} onDelete={ () => handleDelete(project.id) }/>
                    ) }
                </tbody>
                </Table>
        </Container>
    )
};

export default ProjectList;