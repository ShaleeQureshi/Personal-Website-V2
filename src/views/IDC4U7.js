import React from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
import MOREPIC from "../assets/images/IDC4U7/IMG_0915.JPG";
import Footer from "../components/footer";

const IDC4U7App = () => {
  return (
    <div>
      <Navbar collapseOnSelect={true} bg="light" expand="lg" fixed="top">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-1000}
          duration={500}
        >
          <Navbar.Brand>Quick Drink</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              eventKey={1}
              as={Link}
              activeClass="active"
              to="more"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Product
            </Nav.Link>
            <Nav.Link
              href="/IDC4U7/QuickDrink/Video"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/" target="_blank" rel="noopener noreferrer">
              Back to Shahrukh's Site
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="idc4u7">
        <section className="section-idc4u7-main left" id="home">
          <Container>
            <div className="idc4u7-landing">
              <h1>Quick Drink.</h1>
              <p>Grab a Quick Drink on the Go!</p>
              <Link
                activeClass="active"
                to="more"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <Button variant="outline-dark">Let me see more!</Button>
              </Link>
            </div>
          </Container>
        </section>
      </div>
      <section className="section-idc4u7-more" id="more">
        <Container>
          <Row className="pt-5">
            <Col sm={true} className="text-center pt-5">
              <img src={MOREPIC} alt="Water Bottle" />
            </Col>
            <Col sm={true} className="pt-5">
              <div>
                <h3>Quick Drink.</h3>
                <p>
                  <span className="margin-bottom">
                    The Water Bottle for when you're on the go!
                  </span>
                  <br />
                  <span>
                    The Hand Grip on its sides allow for easy transportation
                    while performing physical activities!
                  </span>
                  <br />
                  Want to learn more? Watch this quick video!
                </p>
                <Button
                  variant="outline-light"
                  className="mb-3 w-50"
                  href="/IDC4U7/QuickDrink/Video"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </Button>
                <br />
                <Button
                  variant="outline-light"
                  className="w-50"
                  onClick={() => {
                    alert("Coming Soon!");
                  }}
                >
                  Pre-Order now!
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
export default IDC4U7App;
