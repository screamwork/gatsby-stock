import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaCheck, FaHeart } from "react-icons/fa"
import {Link} from 'gatsby'

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
        <Row className="service-row">
          <Col xs={12} md={6}>
            <p>
              <FaCheck />
              <span>Wir nehmen KFZ aller Arten ausser Baufahrezuge<br />
                und Motorisierung unter 50ccm.
              </span>
            </p>
            <p>
              <FaCheck />
              <span>Wir bieten Abhol / Bring - Service<br />
                benutzen Sie einfach das <Link to="#contact">Kontaktformular.</Link>
              </span>
            </p>
            <p>
              <FaCheck />
              <span>Wir verwenden unsere ausgewiesen Fachprodukte<br />welche sich immer wieder neu beweisen müssen.</span>
            </p>
          </Col>
          <Col xs={12} md={6}>
            <p>
              <FaCheck />
              <span>Wir sind Versichert für eventuell entandenden Schaden.</span>
            </p>
            <p>
              <FaCheck />
              <span>Freitags bis spätestens 19:30 Uhr müssen die Autos von Hof<br />
                oder sie bleiben über Wochenende.
              </span>
            </p>
            <p>
              <FaCheck />
              <span>Wir verwenden keine künstlichen Substanzen<br />die Umwelt liegt uns am <FaHeart />!</span>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
