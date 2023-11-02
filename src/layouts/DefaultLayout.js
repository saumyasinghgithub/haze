import React from "react";
import { Header, Sidebar } from "../components";
import { Container, Row } from "react-bootstrap";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container fluid >
        <Row className="rowWrapper">
          <Sidebar />
          {children}
        </Row>
      </Container>
    </>
  );
};

export default DefaultLayout;
