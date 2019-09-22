import "bootstrap/dist/css/bootstrap.min.css"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Address } from "../components/Address"
import StyledBackgroundSection from "../components/BackgroundSection"
import { Blurbs } from "../components/Blurbs"
import { ContactForm } from "../components/ContactForm"
import Layout from "../components/layout"
import Map from "../components/Map"
import { PortfolioCarousel } from "../components/PortfolioCarousel"
import { PortfolioGallery } from "../components/PortfolioGallery"
import { PriceTables } from "../components/PriceTables"
import SEO from "../components/seo"
import { Services } from "../components/Services"
import { VCModal } from "../components/VCModal"
import "./index.scss"

const IndexPage = () => {
  const [myForm, setMyForm] = React.useState({
    email: "",
    message: "",
  })

  const [modal, setModal] = React.useState({
    show: false,
    img: null,
  })

  const onChildStateChange = e => {
    let s = myForm
    s[e.target.name] = e.target.value
    setMyForm(s)
  }

  const onFormSend = () => {
    if (myForm.email === "" || myForm.message === "") {
      return
    }
    if (validateEmail(myForm.email)) {
      console.log("send form:", myForm)
      setMyForm({
        email: "",
        message: "",
      })
    } else {
      console.log("no valid email")
    }
  }

  const validateEmail = email => {
    const re = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
    return re.test(email)
  }

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { base: { eq: "home.json" } }) {
        edges {
          node {
            childDataJson {
              headerTitle
              headerSubtitle
              headerText
            }
          }
        }
      }
    }
  `)

  const {
    headerTitle,
    headerSubtitle,
    headerText,
  } = data.allFile.edges[0].node.childDataJson

  return (
    <Layout>
      <SEO title="Home" />

      <VCModal
        modal={modal}
        show={modal.show}
        onHide={() =>
          setModal({
            show: false,
            img: null,
          })
        }
      />

      <StyledBackgroundSection
        className={`hero`}
        headerTitle={headerTitle}
        headerSubtitle={headerSubtitle}
        headerText={headerText}
      />

      <Blurbs />
      <PortfolioCarousel />
      <Services />
      <PortfolioGallery setModal={setModal} />
      <PriceTables setMyForm={setMyForm} />
      <Map />
      <ContactForm
        onChildStateChange={onChildStateChange}
        onFormSend={onFormSend}
        myForm={myForm}
      />
      <Address />
    </Layout>
  )
}

export default IndexPage
