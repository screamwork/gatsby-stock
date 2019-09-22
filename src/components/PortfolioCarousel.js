import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Carousel } from "react-bootstrap"

export const PortfolioCarousel = () => {
  const data = useStaticQuery(graphql`
    query PortfolioCarousel {
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
    <div style={{ padding: "3.5rem 0 0" }}>
      <Carousel fade={true}>
        {portfolios.map((portfolio, index) => (
          <Carousel.Item key={index} style={{ maxHeight: `450px` }}>
            <img
              className="d-block w-100"
              src={portfolio.url}
              alt={portfolio.title}
            />
            <Carousel.Caption>
              <h3>{portfolio.title}</h3>
              <p>{portfolio.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}
