import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">GUDA VENKATA RAMANAIAH</span>
            from <span className="purple"> Andhra Pradesh, India.</span>&nbsp;
            I am a junior at VIT-AP University studying Computer Science and engineering with specilaization in Artificial Intelligence and Machine learning
            <br />
            <br />
            Also, I am a Web Development enthusiast.
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
