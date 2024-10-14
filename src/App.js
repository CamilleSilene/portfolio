
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import ProjectDetails from './components/project/ProjectDetails/ProjectDetails';
import AdminLayout from './components/layout/AdminLayout';
import Error from './pages/Error';
import ProjectList from './components/project/admin/ProjectList/ProjectList';
import ProjectEdit from './components/project/admin/ProjectEdit/ProjectEdit';
import Login from './pages/Login';
import AuthProvider from './auth/AuthProvider';
import PrivateRoute from './auth/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<Error />} />
          </Route>
          
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="/admin" element={<ProjectList />} />
              <Route path="/admin/project/create" element={<ProjectEdit />} />
              <Route path="/admin/project/:id/edit" element={<ProjectEdit />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
