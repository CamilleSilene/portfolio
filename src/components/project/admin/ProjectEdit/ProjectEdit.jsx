import { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../../../hooks/useUser";
import { APP_ROUTES } from "../../../../constants";

function ProjectEdit (props) {
    const { id } = useParams();
    const creating = id === undefined;

    const navigate = useNavigate();
    const { connectedUser, auth, userLoading } = useUser();
    useEffect(() => {
        if (!userLoading) {
          if (!connectedUser || !auth) {
            navigate(APP_ROUTES.SIGN_IN);
          }
        }
      }, [connectedUser, auth, userLoading, navigate]);

    return (
        <Container>
            { creating && <h1>Création d'un projet</h1> }
            { !creating && <h1>Edition du Projet {id}</h1> }
            
        </Container>
    )
};
  
  
  export default ProjectEdit;
  