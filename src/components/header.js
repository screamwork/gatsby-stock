import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Image, Nav, Navbar } from "react-bootstrap"
import logo from "../../static/logo-stogg.png"

const Header = ({ siteTitle, siteSlogan }) => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     desktop: file(relativePath: { eq: "logo-stogg.jpg" }) {
  //       childImageSharp {
  //         fluid(quality: 50, maxWidth: 200) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
        }}
      >
        <Image src={logo} style={{ height: 40, marginBottom: 0 }} />
        <span className="displayNoneOnXs">{siteTitle}</span>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#services">Service</Nav.Link>
          {/* <Nav.Link href="#places">Standorte</Nav.Link> */}
          <Nav.Link href="#pricing">Preis</Nav.Link>
          <Nav.Link href="#contact">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
