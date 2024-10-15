import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from "react-bootstrap/esm/Badge";
import styles from './ProjectDetails.module.css'; 
import { getProject } from "../../utils/projectStore";
import { Card } from "react-bootstrap";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

function ProjectDetails() {
    const { id } = useParams();

    const [project, setProject] = useState(undefined);

    useEffect(() => {
      async function getProjectDetails() {
        const data = await getProject(id);
        if (data) {
          setProject(data);
        }
      }
      getProjectDetails();
    }, [id]);

    return (
      <>
    <Container fluid className={styles.coverWrapper}>
      <Card.Img variant="left" src={project?.cover[0]} fluid/>
    </Container>
    <Container>
      <Row bsPrefix="row p-3">
        <Col>
          <h2>{project?.title}</h2>
        </Col>
      </Row>
      <Row>
          <Col>
            <p className={"lead text-center" + styles.description} >{project?.description.replace('\r', '<br/>')}</p>
          </Col>
          <Col>
            { project?.link && <a href={project?.link} target="_blank" class="btn btn-outline-secondary mx-2" rel="noreferrer"><i className="fa fa-desktop"></i>&nbsp;Démo</a> }
            { project?.github && <a href={project?.github} target="_blank" class="btn btn-outline-secondary mx-2" rel="noreferrer"><i className="fa fa-github"></i>&nbsp;Repo Github</a> }
          </Col>
      </Row>
      { project?.tags !== undefined &&
        <Row>
          <Col>
            { project?.tags.map((tag) => ( <Badge key={tag} bg="primary" pill className={styles.projectBadge}>{tag}</Badge> ) ) }
          </Col>
        </Row>
      }
    </Container>
    
    </>
    );
  }

  
export default ProjectDetails;