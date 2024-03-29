import React from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

export const ContactForm = ({ onChildStateChange, myForm }) => {
  return (
    <div id="contact" style={{ background: "whiteSmoke" }}>
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
          Kontakt
        </h2>
          </Col>
        </Row>
        
        <form
          className="contact-form"
          style={{ padding: "2.5rem", background: "#e5e5e5" }}
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <input type="hidden" name="bot-field" />
          <Form.Group>
            <Form.Label>Email-Adresse</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="name@example.com"
              onChange={onChildStateChange}
              value={myForm.email}
              // defaultValue={myForm.email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nachricht</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows="4"
              placeholder="Hallo..."
              onChange={onChildStateChange}
              value={myForm.message}
              // defaultValue={myForm.message}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="success"
            // onClick={e => {
            //   e.preventDefault()
            //   onFormSend()
            // }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  )
}
