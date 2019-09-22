import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export const Services = () => {
  return (
    <div id="services" style={{ background: "whiteSmoke" }}>
      <Container style={{ padding: "6rem 0 6rem" }}>
        <Row>
          <Col sm={12} className="textCenteredOnXs">
            <h2
              style={{
                marginBottom: "2.5rem",
                fontWeight: 500,
                lineHeight: "1.2",
                padding: "0 0 .5rem",
                borderBottom: "2px solid lightgrey",
                display: "inline-block",
              }}
            >
              Services
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
