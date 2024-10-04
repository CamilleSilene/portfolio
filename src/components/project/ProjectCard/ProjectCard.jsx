

import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import styles from './ProjectCard.module.css'; 
import { Link } from 'react-router-dom';

function ProjectCard (props) {
  return (
    <Link to={`/project/${props.id}`} >
  <Card>
    <Card.Img variant="left" src="https://placehold.co/310x160" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      { props.tags.map((tag) => ( <Badge bg="primary" pill className={styles.projectBadge}>{tag}</Badge> ) ) }
    </Card.Footer>
  </Card>
  </Link>)
};


export default ProjectCard;
