import Container from "react-bootstrap/esm/Container";
import { Outlet } from "react-router-dom";
import AdminNavigation from "../project/admin/AdminNavigation/AdminNavigation";

const AdminLayout = () => {
  return (
    <Container>
      <AdminNavigation />
      <Outlet />
    </Container>
  );
};

export default AdminLayout;