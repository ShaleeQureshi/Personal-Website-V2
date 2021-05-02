import React, { useContext } from "react";
import firebase from "firebase";
import { AuthContext } from "../scripts/firebase/auth";
import { Container, Row, Button } from "react-bootstrap";
import Footer from "../components/footer";
import Cards from "../components/cards";

const PortalApp = () => {
  const { currentUser } = useContext(AuthContext);

  const Logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        alert("You have been signed out");
        window.location.reload();
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <div className="portal-page">
      <Container className="wrapper">
        <div className="text-center pt-5">
          <h1>Portal</h1>
          <Button
            variant="outline-dark"
            onClick={() => {
              Logout();
            }}
          >
            Sign Out
          </Button>
        </div>
        <Row className="justify-content-around">
          <Cards
            bg="dark"
            textColor="light"
            styleCard="20rem"
            title="Database"
            text="Manage your database by clicking the button below!"
            optional={
              <Button href={`/portal/${currentUser["email"]}/database`}>
                Let's go
              </Button>
            }
          />
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default PortalApp;
