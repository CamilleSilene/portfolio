import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import styles from './ProjectCard.module.css'; 
import { Link } from 'react-router-dom';

function ProjectCard (props) {

  return (
    <Link to={`/project/${props.id}`} >
  <Card className={ styles.card} >
    <Card.Img variant="left" src={props.cover[0]} className={ styles.cardCover} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.undertitle}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      { props.tags.map((tag) => ( <Badge key={tag} bg="primary" pill className={styles.projectBadge}>{tag}</Badge> ) ) }
    </Card.Footer>
  </Card>
  </Link>)
};


export default ProjectCard;
