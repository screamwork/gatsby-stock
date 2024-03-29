/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Footer } from "./Footer"
import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          slogan
        }
      }
    }
  `)

  const { title, slogan } = data.site.siteMetadata

  // 
  React.useEffect(() => {
    let navs = document.querySelectorAll('.navbar-nav > a');
    document.addEventListener('scroll', () => { 
      let scrollPos = window.scrollY;
      navs.forEach((nav) => {
        let refElement = document.querySelector(`${nav.getAttribute("href")}`);
        if(!refElement) {
          return;
        }
        if (refElement.offsetTop <= scrollPos && 
            refElement.offsetTop + refElement.offsetHeight > scrollPos) {

            navs.forEach(x => x.classList.remove('active'));
            nav.classList.add("active");
        } else{
            nav.classList.remove("active");
        }
      });
    })
    return () =>document.removeEventListener('scroll', () => {});
  }, [])

  return (
    <>
      <Header siteTitle={title} siteSlogan={slogan} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <main
          style={{ flex: 1, minHeight: `calc(100vh - 106px)`, marginTop: 56 }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
