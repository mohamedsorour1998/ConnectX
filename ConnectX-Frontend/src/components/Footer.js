import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-light py-3 footer">
      <Container>
        <Row>
          <Col xs={12} md={4} className="text-center text-md-left mb-3 mb-md-0">
            <h5>ConnectX</h5>
            <p>ITI, NEW CAIRO, EGYPT</p>
            <p>Phone: +20 (111) 23-10110</p>
          </Col>
          <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
            <h5>Follow Us</h5>
            <p>
              <a
                href="https://www.linkedin.com/company/your-company"
                target="_blank"
                rel="noreferrer"
                className="text-dark"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </p>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-right">
            <p>© 2023 ConnectX. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
