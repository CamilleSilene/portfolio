import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";

function ProjectEdit (props) {
    const { id } = useParams();
    const creating = id === undefined;
    return (
        <Container>
            { creating && <h1>Création d'un projet</h1> }
            { !creating && <h1>Edition du Projet {id}</h1> }
            
        </Container>
    )
};
  
  
  export default ProjectEdit;
  