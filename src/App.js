
import './App.css';
import { useEffect, useState } from 'react';
import { useUser } from './hooks/useUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import ProjectDetails from './components/project/ProjectDetails/ProjectDetails';
import AdminLayout from './components/layout/AdminLayout';
import Error from './pages/Error';
import SignIn from './pages/SignIn';
import ProjectList from './components/project/admin/ProjectList/ProjectList';
import ProjectEdit from './components/project/admin/ProjectEdit/ProjectEdit';

function App() {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();
  useEffect(() => {
    setUser(connectedUser);
  }, [connectedUser]);
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<Error />} />
          </Route>
          
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin" element={<ProjectList />} />
            <Route path="/admin/signin" element={<SignIn  setUser={setUser} />} />
            <Route path="/admin/project/create" element={<ProjectEdit />} />
            <Route path="/admin/project/:id/edit" element={<ProjectEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
