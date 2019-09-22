import { Link } from "gatsby"
import React from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import { FaFacebook, FaInstagram } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer style={{ minHeight: 50, background: "#343a40" }}>
      <Container style={{ padding: `1rem 0`, color: "white" }}>
        <Row>
          <Col>
            © {new Date().getFullYear()}
            {` `}
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <Image
                src={`logo-stogg.png`}
                style={{ height: 30, marginBottom: 0 }}
              />
            </Link>{" "}
            <span style={{ margin: "0 1rem" }}>|</span>
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
          <Col>
            <Col style={{ textAlign: "right" }}>
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
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
