import { Link } from "gatsby"
import React from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import { FaFacebook, FaInstagram } from "react-icons/fa"
import logo from "../../static/logo-stogg.png"

export const Footer = () => {
  return (
    <footer className="footer" style={{ minHeight: 50, background: "#343a40" }}>
      <Container style={{ padding: `1rem 0`, color: "white" }}>
        <Row>
          <Col
            xs={8}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="year">
              © {new Date().getFullYear()}
              {` `}
            </span>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <Image src={logo} style={{ height: 30, marginBottom: 0 }} />
            </Link>{" "}
            <span className="footer-divider" style={{ margin: "0 1rem" }}>
              |
            </span>
            <Link
              to="/privatepolicy/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Impressum
            </Link>
          </Col>
          <Col xs={4} style={{ textAlign: "right" }}>
            <a
              href="https://www.facebook.com/andi.stockinger"
              target="_blank"
              style={{ marginRight: "1rem" }}
              rel="noopener noreferrer"
            >
              <FaFacebook size={32} style={{ color: "#4fcc70" }} />
            </a>
            <a
              href="https://instagram.com/stockinger_andi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={32} style={{ color: "#4fcc70" }} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
