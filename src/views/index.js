import React from "react";
import { Link } from "react-scroll";
import { Container, Button, Row, Col } from "react-bootstrap";

import Navigation from "../components/navbar";
import Footer from "../components/footer";
import RowComponent from "../components/rowComponent";

import ME from "../assets/images/me.jpg";
import ASTAR from "../assets/images/software/Astar.PNG";
import CLIMATEGLOBAL from "../assets/images/software/ClimateGlobal.png";
import NORTHHACKS from "../assets/images/software/NorthHacks.jpg";
import HACKWESTERN7 from "../assets/images/software/HackWestern7.PNG";
import CHATROOM from "../assets/images/software/ChatRoom.PNG";
import WHITEHARE from "../assets/images/software/Whitehare.PNG";
import TICTACTOE2 from "../assets/images/software/TicTacToe2.0.png";

const LandingApp = () => {
  return (
    <div>
      <section className="wrapper landing" id="home">
        <Navigation />
        <div className="main-text-color">
          <Container>
            {" "}
            <div className="left" id="jumbo">
              <h1>
                Hi, my name is <span>Shahrukh</span>
                <br />I like to code sometimes.
              </h1>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <Button href="" variant="outline-dark">
                  You should click this
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      </section>
      <section className="section-about" id="about">
        <Container>
          <Row className="pt-5">
            <Col sm={true} className="text-center pt-5">
              <img src={ME} alt="Me" />
            </Col>
            <Col sm={true} className="pt-5">
              <div className="about-me">
                <h3>
                  <span>My name is Shahrukh Qureshi</span>
                  <br />I like coding
                </h3>
                <p>
                  <span className="margin-bottom">
                    I enjoy working on web applications, Internet of Things, and
                    just about any other area within tech.
                  </span>
                  I'm an avid self-learner who thrives in high pressure and
                  fast-paced environments. I love solving difficult problems and
                  working on collaborative projects.
                  <span className="margin-top" id="ending">
                    I'm open to new experiences and I enjoy learning new things.
                    I'm ready to learn from anyone willing to teach!
                  </span>
                </p>
                <Button
                  variant="outline-dark"
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-software" id="software">
        <Container>
          <div className="text-center pt-5">
            <h1>Software</h1>
            <Button
              href="/software"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
            >
              View Software Repository
            </Button>
          </div>
          <RowComponent
            heading="ClimateGlobal"
            pText="Web Application I built to raise awareness on Climate Change. The app takes advantage of free to use APIs to develop accurate global heatmaps to show the effects of Climate Change on a global scale."
            variant="outline-light"
            url="https://github.com/ClimateGlobal"
            btnText="Let me see"
            image={CLIMATEGLOBAL}
          />
          <hr id="underline" />
          <RowComponent
            heading="North Hacks"
            pText={
              <span>
                Web Application I built to create an online hackathon platform
                for students eager to show off their skills. The local event
                amassed over 30 teams. Developed in collaboration with{" "}
                <a
                  href="https://www.linkedin.com/in/saad-khan-b411a11b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Saad Khan.
                </a>
              </span>
            }
            variant="outline-light"
            url="https://shaleequreshi.github.io/NorthHacks/#/"
            btnText="Let me see"
            image={NORTHHACKS}
          />
          <hr id="underline" />
          <RowComponent
            heading="ChatRoom"
            pText={
              <span>
                Users must log in using their Google accounts to access this
                platform. Once authenticated, users can create, share, and
                delete chatrooms at will 😃. All messages sent in the chatrooms
                are saved unless the chatroom is deleted by a user. If you're
                feeling lonely, chat in All-Chat - it's a room that no one can
                delete and that everyone can access. 😁
              </span>
            }
            variant="outline-light"
            url="https://shaleequreshi.github.io/ChatRoom/#/"
            btnText="Let me see"
            image={CHATROOM}
          />
          <hr id="underline" />
          <div id="not-visible">
            <RowComponent
              heading="Whitehare"
              pText={
                <span>
                  An upcoming (open-source) social media platform that allows
                  users to authenticate to access CRUD Post functionality in
                  protected routes. Storing all authentication information as
                  sessions using SQLite. Developed in collaboration with{" "}
                  <a
                    href="https://www.linkedin.com/in/jalal-q-5352a31b0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jalal Qureshi.
                  </a>
                </span>
              }
              variant="outline-light"
              url="https://github.com/ShaleeQureshi/Whitehare"
              btnText="Let me see"
              image={WHITEHARE}
            />
            <hr id="underline" />
            <RowComponent
              heading="Password Generator"
              pText={
                <span>
                  This project was developed for HackWestern 7 (2020). It
                  generates a random password for the user and allows the user
                  to modify their password's characteristics. Total of 2
                  <sup>210</sup> sequences, so it's highly unlikely to get the
                  same generated password each time.
                </span>
              }
              variant="outline-light"
              url="https://shaleequreshi.github.io/Password-Generator/"
              btnText="Let me see"
              image={HACKWESTERN7}
            />
            <hr id="underline" />
            <RowComponent
              heading="A* Pathfinding Algorithm"
              pText="The algorithm determines the most efficient path between a
              start and end node. Works by making a lowest-cost path tree
              from the start node to the end node. Unlike Dijkstra's
              Algorithm, A* uses a heuristic function as a guiding mechanism
              to determine the region of space that can compute the shortest
              path."
              variant="outline-light"
              url="https://github.com/ShaleeQureshi/Astar-PathFinding-Algorithm-Visualizer"
              btnText="Let me see"
              image={ASTAR}
            />
            <hr id="underline" />
            <RowComponent
              heading="TicTacToe 2.0"
              pText="This version of TicTacToe is a bit different from the conventional game. Users can either play with another player or against the computer AI. Players need to connect 3 squares without the use of the center square. The winner is determined automatically by the algorithm."
              variant="outline-light"
              url="https://github.com/ShaleeQureshi/TicTacToe-2.0"
              btnText="Let me see"
              image={TICTACTOE2}
            />
            <hr id="underline" />
            <div className="text-center mt-5 mb-5">
              <Button
                href="/software"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-light"
              >
                View Software Repository
              </Button>
            </div>
            <hr id="underline" />
          </div>
          <div className="text-center mt-5 mb-5">
            <Button
              className="w-50"
              variant="outline-light"
              id="view-more"
              onClick={() => {
                document.getElementById("not-visible").style.display =
                  "contents";
                document.getElementById("view-more").style.display = "none";
              }}
            >
              View More
            </Button>
          </div>
        </Container>
      </section>
      <section className="section-contact" id="contact">
        <Container>
          <div className="text-center pt-5">
            <h1 className="pt-5">Contact</h1>
            <Button
              className="w-50 mt-3 mb-5"
              variant="outline-dark"
              href="mailto:shaleequreshi2019@gmail.com"
            >
              Send me an email
            </Button>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
export default LandingApp;
