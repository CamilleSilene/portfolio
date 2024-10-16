import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from "react-bootstrap/esm/Badge";
import styles from './ProjectDetails.module.css'; 
import { getProject } from "../../utils/projectStore";
import { Card, Image } from "react-bootstrap";
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
      <Image src={project?.cover[0]} fluid />
    </Container>
    <Container fluid>
      <Row bsPrefix="row p-3">
        <Col>
          <h1>{project?.title}</h1>
        </Col>
      </Row>
      <Row>
          <Col md={6}>
            <p className={"lead text-start text-wrap text-break word-wrap" + styles.description} >
              {
                project?.description.split('\n').map(function( item, idx) {
                  return (
                      <span key={idx}>
                        {item}
                        <br/>
                      </span>
                  )
                })
              }
            </p>
          </Col>
          <Col md={6}>
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