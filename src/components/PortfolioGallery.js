import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"

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
    <div id="portfolio-gallery" style={{ background: "#282A2E" }}>
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
                color: "white",
              }}
            >
              Instagram
            </h2>
          </Col>
        </Row>
        <Row>
          {portfolios.map((portfolio, index) => (
            <Col xs={12} md={6} lg={3} key={index}>
              <div style={{padding: "5px 5px 20px 5px", backgroundColor: "white", overflow: "hidden", borderRadius: 2}}>
              <div
                className="insta-img"
                style={{
                  overflow: "hidden",
                  backgroundImage: `url(${portfolio.url})`,
                  backgroundSize: "cover",
                  minHeight: "245px",
                }}
                onClick={e => {
                  onModalChange({ show: true, img: portfolio.url })
                }}
              ></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
