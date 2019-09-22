import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import {FaUser, FaRoad, FaCity, FaPhone, FaClock, FaCalendar} from 'react-icons/fa'

export const Address = () => {
  return (
    <div className="address">
      <Container style={{ padding: "3.5rem 0 6rem" }}>
        <Row>
          <Col xs={12} md={6}>
            <h3>Öffnungszeiten</h3>
            <p>
              <FaCalendar />
              <span>Montag bis Freitag</span>
              <br />
              <FaClock />
              <span>08:30 - 17:30 Uhr</span>
            </p>
            <p>
              <FaCalendar />
              <span>Samstag</span>
              <br />
              <FaClock />
              <span>09:00 - 13:30 Uhr</span>
            </p>
            <p>
              <small>* ausserhalb der Geschäftszeiten hamma koa Zeit, Ende!</small>
            </p>
          </Col>
          <Col xs={12} md={6}>
            <h3>Adresse</h3>
            <p><FaUser /><span>Andi Stockinger</span></p>
            <p><FaRoad /><span>Wilhelmsreut 14</span></p>
            <p><FaCity /><span>12345 Röhrnbach</span></p>
            <p><FaPhone /><span>08582-705</span></p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
