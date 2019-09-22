import { Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivatePolicy = () => {
  return (
    <Layout>
      <Container>
        <SEO title="Impressum" />
        <Row>
          <Col xs={12}>
            <h1 style={{ margin: "6rem 0 1rem 0" }}>IMPRESSUM.</h1>
          </Col>
        </Row>

        <p>
          <strong>Andreas Stockinger</strong>
          <br />
          Wilhelmsreut 14
          <br />
          12345 Röhrnbach
        </p>
        <p>
          <strong>Tel.:</strong> 12345 678
          <br />
          <strong>Fax:</strong> 12345 789
          <br />
          <strong>Email:</strong> info@stockingerandi.online
        </p>
        <p>
          <strong>Geschäftsführung:</strong>
          <br /> Andreas Stockinger
        </p>
        <p>
          <strong>Unsere UID:</strong>
          <br /> DEZ87365167
        </p>
        <p>
          <strong>Firmenbuchnummer:</strong>
          <br />
          FN 256242 y
        </p>
        <p>
          <strong>Firmenbuchgericht:</strong>
          <br />
          Freyung
        </p>

        <Link to="/" style={{ display: "block", marginTop: "3rem" }}>
          zurück zur Homepage
        </Link>
      </Container>
    </Layout>
  )
}

export default PrivatePolicy
