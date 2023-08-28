import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a mobile apps <b className="purple">developer</b> and <b className="purple">expert</b>, and I can help you create unique, beautiful mobile apps.
              <br />
              <br />
              My main technology is <b className="purple">Flutter</b>, a Google's UI Toolkit to power elegant, attractive visual experiences.
              <br />
              As a <b className="purple">developer</b>, I've built amazing experiences and great tools for mobile apps.
              <br />
              As an <b className="purple">expert</b>, I've helped many teams to master Flutter and that way many apps and tools came to life.
              <br />
              I really love to learn, master and share knowledge.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, Java and Javascript. </b>
              </i>
              <br />
              <br />
              Besides Flutter, I'm studying Kotlin, Jetpack Compose and Kotlin Multiplatform.
              <br />
              I love to learn new things about&nbsp;

              <b className="purple">Flutter</b> and
              share knowledge on my{" "}
              <b className="purple">
                social networks.
              </b>

              <br />
              <br />
              Nowadays, I work as a teacher and developer
              with <b className="purple">Flutter</b> and
              <b className="purple">
                  {" "}
                  Dart
                </b>.
              <br />
              <br />
              Last but not least, I'd like to thank Soumyajit Behera for developing this amazing portfolio template. You can find the original project <a
                  href="https://github.com/soumyajit4419/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                >here</a>.
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BlackLeg15"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/adby_santos"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adby-santos-a31a70158/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/oadbysantos"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
