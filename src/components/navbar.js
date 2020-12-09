import React from "react";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      bg: "",
    };
  }
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const bg = window.scrollY < 100 ? "none" : "light";
      this.setState({ bg: bg });
    });
  }
  render() {
    return (
      <Navbar
        collapseOnSelect={true}
        bg={this.state.bg}
        expand="lg"
        fixed="top"
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Navbar.Brand>Shahrukh Qureshi</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              eventKey={1}
              as={Link}
              activeClass="active"
              to="software"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Software
            </Nav.Link>
            <Nav.Link href="/resume" target="_blank" rel="noopener noreferrer">
              Resume
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              eventKey={2}
              as={Link}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navigation;
