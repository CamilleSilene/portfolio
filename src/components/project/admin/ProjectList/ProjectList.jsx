import Container from "react-bootstrap/esm/Container";
import Table from 'react-bootstrap/Table';

import projects from "../../../../data/projects.json";
import ProjectListItem from "./ProjectListItem";
import ProjectStore from "../../../../stores/mongo/ProjectStore";

function ProjectList (props) {

    const handleDelete = (id) => {
        ProjectStore.deleteProject(id);
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