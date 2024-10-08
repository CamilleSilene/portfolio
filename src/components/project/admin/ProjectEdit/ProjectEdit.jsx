import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import { useUser } from "../../../../hooks/useUser";
import { APP_ROUTES } from "../../../../constants";
import { createProject, getProject, updateProject } from "../../../utils/projectStore";
import { useFilePreview } from "../../../../hooks/useFilePreview";
import { FormGroup, Image } from "react-bootstrap";

function ProjectEdit(props) {
  const { id } = useParams();
  const [ project, setProject ] = useState();

  const navigate = useNavigate();
  const { connectedUser, auth, userLoading } = useUser();
  const { register, watch, formState, handleSubmit, reset, } = useForm({
    defaultValues: useMemo(() => ({
      title: project?.title
    }), [project]),
  });
  
  const file = watch(['cover']);
  const [filePreview] = useFilePreview(file);

  
  useEffect(() => {
    reset(project);
  }, [project, reset]);
  
  useEffect(() => {
    if (!userLoading) {
      if (!connectedUser || !auth) {
        navigate(APP_ROUTES.SIGN_IN);
      }
    }
  }, [connectedUser, auth, userLoading, navigate, id]);
  
  useEffect(() => {
    if(id !== undefined) {
      async function getProjectDetails() {
        const data = await getProject(id);
        if (data) {
          setProject(data);
        }
      }
      getProjectDetails();
  }
  }, [id]);

  function onSubmit( data ) {
    if(project) {
      updateProject(data, id);
    } else {
      createProject(data);
    }
  }

  return (
    <Container>
      {!project && <h1>Création d'un projet</h1>}
      {project && <h1>Edition du Projet {project?.title}</h1>}
      <Row>
        <Col>
          <Form onSubmit={handleSubmit(onSubmit)} method="POST" encType="multipart/form-data">
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Titre</Form.Label>
              <Form.Control name="title" type="text" placeholder="Titre" {...register('title')}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" as="textarea" rows={3} placeholder="Description..." {...register('description')}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLink">
              <Form.Label>Lien</Form.Label>
              <Form.Control name="link" type="text" placeholder="Lien" {...register('link')}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGithub">
              <Form.Label>Github</Form.Label>
              <Form.Control name="github" type="text" placeholder="Titre" {...register('github')}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTags">
              <Form.Label>Tags</Form.Label>
              <Form.Control name="tags" type="text" placeholder="Tags" {...register('tags')}/>
              <Form.Text className="text-muted">
                Tags séparés par des virgules
              </Form.Text>
            </Form.Group>
            <Form.Group>
              {filePreview || project?.cover ? (
                <>
                <Row>
                  <Col xs={6} md={4}>
                    <Image src={filePreview ?? project?.cover} thumbnail={true} />
                    <p>Modifier</p>
                  </Col>
                </Row>
                </>
              ) : (
                <>
                  <p>Ajouter une image</p>
                </>
              )}

              <Form.Control {...register('cover')} type="file" id="cover" />
            </Form.Group>
            

            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProjectEdit;
