import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaBeer, FaChess, FaTruckMonster } from "react-icons/fa"

export const Blurbs = () => {
  return (
    <div className="blurbs">
      <Container style={{ padding: "6rem 0 3.5rem" }}>
        <Row>
          <Col xs={12} md={4}>
            <div className="blurb-inner">
              <div style={{ padding: 20 }}>
                <FaBeer size={`64`} />
              </div>
              <h3 style={{ padding: `1.75rem 0`, color: "#4fcc70", fontWeight: 300 }}>
                {`Erfahrung`.toUpperCase()}
              </h3>
              <p style={{ textAlign: "center", padding: `0 .5rem` }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat, sed diam voluptua. At vero eos et dolores et ea rebum.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="blurb-inner">
              <div style={{ padding: 20 }}>
                <FaTruckMonster size={`64`} />
              </div>
              <h3 style={{ padding: `1.75rem 0`, color: "#4fcc70", fontWeight: 300 }}>
                {`Professionalität`.toUpperCase()}
              </h3>
              <p style={{ textAlign: "center", padding: `0 .5rem` }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum.
              </p>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="blurb-inner">
              <div style={{ padding: 20 }}>
                <FaChess size={`64`} />
              </div>
              <h3 style={{ padding: `1.75rem 0`, color: "#4fcc70", fontWeight: 300 }}>
                {`Preis - Leistung`.toUpperCase()}
              </h3>
              <p style={{ textAlign: "center", padding: `0 .5rem` }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum.
              </p>
            </div>
          </Col>
        </Row>
        {/* <Row style={{ marginTop: "6rem" }}>
          <Col style={{ padding: "1.5rem", textAlign: "center" }}>
            <quote style={{ fontSize: 26 }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor magna aliquyam erat
            </quote>
          </Col>
        </Row> */}
      </Container>
    </div>
  )
}
