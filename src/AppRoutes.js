import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ProjectDetails from "./components/project/ProjectDetails/ProjectDetails";
import ProjectEdit from "./components/project/admin/ProjectEdit/ProjectEdit";
import AdminLayout from "./components/layout/AdminLayout";
import ProjectList from "./components/project/admin/ProjectList/ProjectList";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="*" element={<Error />} />
        </Route>
        
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<ProjectList />} />
          <Route path="/admin/project/create" element={<ProjectEdit />} />
          <Route path="/admin/project/:id/edit" element={<ProjectEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
