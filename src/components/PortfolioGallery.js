import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Col, Container, Image, Row } from "react-bootstrap"

export const PortfolioGallery = ({ onModalChange }) => {
  const data = useStaticQuery(graphql`
    query PortfolioGallery {
      allFile(filter: { base: { eq: "portfolio.json" } }) {
        edges {
          node {
            childrenPortfolioJson {
              title
              subtitle
              url
            }
          }
        }
      }
    }
  `)

  const portfolios = data.allFile.edges[0].node.childrenPortfolioJson

  return (
    <div className="portfolio-gallery" style={{ background: "#282A2E" }}>
      <Container style={{ padding: "6rem 0 6rem" }}>
        <h2
          style={{
            marginBottom: "2.5rem",
            fontWeight: 500,
            lineHeight: "1.2",
            padding: "0 0 .5rem",
            borderBottom: "2px solid lightgrey",
            display: "inline-block",
            color: "white",
          }}
        >
          Instagram
        </h2>
        <Row>
          {portfolios.map((portfolio, index) => (
            <Col xs={12} md={4} key={index}>
              <Image
                src={portfolio.url}
                style={{ height: `350px` }}
                thumbnail
                onClick={e => {
                  onModalChange({ show: true, img: portfolio.url })
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
