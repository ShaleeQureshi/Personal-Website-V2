import React, { useCallback } from "react";
import firebase from "firebase";
import { Container, Form, Button } from "react-bootstrap";
import Footer from "../components/footer";

const LoginApp = ({ history }) => {
  const loginUser = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push(`/portal/${email.value}`);
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div className="login-page">
      <Container className="wrapper">
        <Form className="center" onSubmit={loginUser}>
          <h1 className="text-center mb-3">Portal Login</h1>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              id="email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
              required
            />
          </Form.Group>
          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};
export default LoginApp;
