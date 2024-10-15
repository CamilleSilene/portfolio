const API_URL = 'http://localhost:4000';
export const API_ROUTES = {
  LOGIN_URL: `${API_URL}/api/auth/login`,
  PROJECT_URL: `${API_URL}/api/project`,
  PROJECT_TAGS_URL: `${API_URL}/api/project/tags`,
  PROJECT_TAG_URL: `${API_URL}/api/project/tag`,
};

export const APP_ROUTES = {
    LOGIN: '/login',
    HOME: '/',
    PROJECT_DETAILS: '/project/:id',
    ADMIN: '/admin',
    ADMIN_CREATE: '/admin/project/create',
    ADMIN_EDIT: '/admin/project/:id/edit',
    ERROR: '*',
  };