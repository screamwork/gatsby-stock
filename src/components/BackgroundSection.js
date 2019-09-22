import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"

const BackgroundSection = ({
  className,
  headerTitle,
  headerSubtitle,
  headerText,
}) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "home_mechanic.jpg" }) {
          childImageSharp {
            fluid(quality: 50, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#444444`}
          style={{ minHeight: `575px`, display: "flex", alignItems: "center" }}
        >
          <Container>
            <Row>
              <Col md={6}>
                <h2 style={{ color: "white" }}>{headerTitle}</h2>
                <h4 style={{ color: "#4fcc70", padding: `1rem 0` }}>
                  {headerSubtitle.toUpperCase()}
                </h4>
                <p style={{ color: "whitesmoke" }}>{headerText}</p>
              </Col>
            </Row>
          </Container>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection
