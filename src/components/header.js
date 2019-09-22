import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"

const Header = ({ siteTitle, siteSlogan }) => (
  <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Link
      to="/"
      style={{
        textDecoration: "none",
        color: "white",
      }}
    >
      {siteTitle}
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#services">Service</Nav.Link>
        <Nav.Link href="#places">Standorte</Nav.Link>
        <Nav.Link href="#pricing">Preis</Nav.Link>
        <Nav.Link href="#contact">Kontakt</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
