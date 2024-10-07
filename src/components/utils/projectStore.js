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
    const project = formatProject(response.data);
    return project;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getProject(id) {
  try {
    const response = await axios({
      method: "GET",
      url: `http://localhost:4000/api/project/${id}`,
    });
    const projects = formatProjects(response.data);
    return projects;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}