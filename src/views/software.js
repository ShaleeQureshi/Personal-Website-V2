import React from "react";
import { Container, Button, Navbar, Nav, Row } from "react-bootstrap";
import Footer from "../components/footer";
import DataTable from "../components/reactTable";
import List from "../components/list";

const SoftwareApp = () => {
  return (
    <div>
      <section className="software-page wrapper">
        <Navbar collapseOnSelect expand="lg" bg="light">
          <Navbar.Brand href="/">Shahrukh Qureshi</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="https://github.com/ShaleeQureshi"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/shahrukh-qureshi-a735031b1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <div className="text-center pt-5">
            <h1>Software Repository</h1>
            <p>Developed by Shahrukh Qureshi</p>
          </div>
          <DataTable
            node="softwareRepo"
            c1="Title"
            c1Accessor="projectTitle"
            c1Width={300}
            c2="Description"
            c2Accessor="projectDesc"
            c2Width={500}
            c3="Language"
            c3Accessor="projectLang"
            c3Width={200}
            c4="Date Started"
            c4Accessor="projectDate"
            c4Width={100}
            pageSize={10}
          />
          <Button
            href="https://github.com/ShaleeQureshi?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-light"
            className="w-100 mt-5"
          >
            View More
          </Button>
        </Container>
      </section>
      <section className="software-page-additional-info">
        <Container>
          <h3>MY WEBSITE ARCHITECTURE</h3>
          <Row className="list-items">
            <List
              class="col-lg-3 mb-5"
              title="Front-End"
              subtitle="REACT JS"
              listItem1="Single page web app built using create-react-app"
              listItem2="Reusable component based development"
            />
            <List
              class="col-lg-3 mb-5"
              title="Back-End"
              subtitle="NODE JS + Firebase"
              listItem1="Single-threaded (Non-Blocking) development good for I/O dependent services"
              listItem2="Firebase servers controlling the NOSQL Database, Auth, and Cloud Functions"
            />
            <List
              class="col-lg-3 mb-5"
              title="Security"
              subtitle="Firebase Auth + JWT"
              listItem1="JSON Web Tokens transmitted through Firebase servers for client-side validation"
            />
            <List
              class="col-lg-3 mb-5"
              title="Database"
              subtitle="Firebase NOSQL"
              listItem1="Data stored as JSON Objects"
              listItem2="Parsed client-side"
            />
          </Row>
          <Button variant="outline-light" href="/" className="w-100">
            Take me Home
          </Button>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
export default SoftwareApp;
