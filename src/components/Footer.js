import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import logo3 from '../assets/img/logo3.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={10} sm={20}>
            <img src={logo3} alt="Logo" />
          </Col>
          <Col size={15} sm={15} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pankaj-meena83?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/__pankaj__meena__?igsh=MjNkdXI3NXcycmFv&utm_source=qr"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/__pankaj__meena__?igsh=MjNkdXI3NXcycmFv&utm_source=qr"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}