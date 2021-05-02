import React, { useContext } from "react";
import { AuthContext } from "../scripts/firebase/auth";
import firebase from "firebase";
import { Container, Button, Form } from "react-bootstrap";
import Footer from "../components/footer";

const PortalDatabaseApp = () => {
  const { currentUser } = useContext(AuthContext);
  const update = (event) => {
    event.preventDefault();
    var { node, title, language, date, link, desc } = event.target.elements;
    if (node.value === "Software Repository") {
      node = "softwareRepo";
    } else if (node.value === "Freelance Repository") {
      node = "freelance";
    } else {
      node = "web-apps";
    }
    firebase
      .database()
      .ref(`/${node}/${title.value}`)
      .update({
        projectTitle: title.value,
        projectDesc: desc.value,
        projectLang: language.value,
        projectDate: date.value,
        projectLink: link.value,
      })
      .then(() => {
        alert("Data Successfully added to your database under " + node);
        event.target.reset();
      })
      .catch(function (error) {
        console.log(error);
        alert(error);
      });
  };

  return (
    <div className="portal-page-database">
      <Container className="wrapper">
        <div className="pt-5 mb-3 text-center">
          <h1>Firebase Realtime Database Controls</h1>
          <Button
            href={`/portal/${currentUser["email"]}`}
            variant="outline-dark"
          >
            Back to Portal Homepage
          </Button>
        </div>
        <Form id="database-form" onSubmit={update}>
          <Form.Group>
            <Form.Label>Select the Node you wish to update!</Form.Label>
            <Form.Control as="select" id="node">
              <option>Software Repository</option>
              <option>Freelance Repository</option>
              <option>Web-Apps Repository</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Project Title"
              id="title"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Languages Used</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Languages Used"
              id="language"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date Started</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Data Started"
              id="date"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Project Link (Optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Project Link"
              id="link"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Project Description</Form.Label>
            <Form.Control as="textarea" rows="3" id="desc" required />
          </Form.Group>
          <Button variant="outline-dark" type="submit" className="w-100">
            Update Database
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};
export default PortalDatabaseApp;
