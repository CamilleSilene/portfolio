import axios from "axios";

function formatProjects(projectsArray) {
  return projectsArray.map((project) => {
    const newProject = { ...project };
    // eslint-disable-next-line no-underscore-dangle
    newProject.id = newProject._id;
    return newProject;
  });
}

function formatProject (project) {
  const newProject = { ...project };
  // eslint-disable-next-line no-underscore-dangle
  newProject.id = newProject._id;
  return newProject;
}

export async function getProjects() {
  try {
    const response = await axios({
      method: "GET",
      url: "http://localhost:4000/api/project",
    });
    const project = formatProjects(response.data);
    return project;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getProject(id) {
  if(id !== undefined) {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:4000/api/project/${id}`,
      });
      const project = formatProject(response.data);
      return project;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  }

}

export async function updateProject(data, id) {
  let newData;
  const project = {
    title: data.title,
    undertitle: data.undertitle,
    description: data.description,
    link: data.link,
    github: data.github,
    tags: data.tags
  }
  newData = {...project};
  const bodyFormData = new FormData();
  bodyFormData.append('project', JSON.stringify(newData));
  bodyFormData.append('cover', data.cover[0]);

  try {
    const newProject = await axios({
      method: 'put',
      url: `http://localhost:4000/api/project/${id}`,
      data: bodyFormData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data'
      },
    });
    return newProject;
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
}

export async function createProject( data ) {
  let newData;
  const project = {
    title: data.title,
    undertitle: data.undertitle,
    description: data.description,
    link: data.link,
    github: data.github,
    tags: data.tags.split(',')
  }
  newData = {...project};
  
  const bodyFormData = new FormData();
  bodyFormData.append('project', JSON.stringify(newData));
  bodyFormData.append('cover', data.cover[0]);

  try {
    const newProject = await axios({
      method: 'post',
      url: `http://localhost:4000/api/project/`,
      data: bodyFormData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return newProject;
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
}

export async function deleteProject( id ) {
  try {
    await axios.delete(`http://localhost:4000/api/project/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function getTags() {
  try {
    const response = await axios({
      method: "GET",
      url: "http://localhost:4000/api/project/tags",
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getProjectsByTag(tag) {
  try {
    const response = await axios({
      method: "GET",
      url: `http://localhost:4000/api/project/tag/${tag}`,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}