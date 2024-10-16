import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { Container } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Container fluid style={{paddingTop: "60px", paddingBottom: "160px"}}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;