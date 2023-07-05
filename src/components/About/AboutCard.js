import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Adby Santos </span>
            from <span className="purple"> Brazil.</span>
            <br />I've been a professional Mobile Apps Developer with Flutter, a Google's framework, since 2020. I've worked on <span className="purple"> over a dozen apps </span> from several businesses, like security, education and entertainment.
            <br />I'm graduated with a bachelor's degree in Information Technology (BIT) at UFERSA Pau dos Ferros.
            <br />
            Additionally, I'm a teacher and mentor at FTeam. Together, we've helped <span className="purple"> over one hundred people</span> to leverage code quality with Flutter to their companies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing games
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating content
            </li>
            <li className="about-activity">
              <ImPointRight /> Loving my wife
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Commend what you do to Yahweh, and what you plan will be achieved."{" "}
          </p>
          <footer className="blockquote-footer">The Proverbs 16, 3 </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
