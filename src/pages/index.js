// @ts-check
import "bootstrap/dist/css/bootstrap.min.css"
import { graphql, StaticQuery } from "gatsby"
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

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myForm: {
        email: "",
        message: "",
      },
      modal: {
        show: false,
        img: null,
      },
    }
  }

  onPackageSelect = obj => {
    this.setState(state => (state.myForm = obj))
  }

  onModalChange = obj => {
    this.setState(state => (state.modal = obj))
  }

  onChildStateChange = e => {
    let s = this.state.myForm
    s[e.target.name] = e.target.value
    console.log(s)
    this.setState(state => (state.myForm = s))
  }

  onFormSend = () => {
    if (this.state.myForm.email === "" || this.state.myForm.message === "") {
      return
    }
    if (this.validateEmail(this.state.myForm.email)) {
      console.log("send form:", this.state.myForm)
      this.setState(
        state =>
          (state.myForm = {
            email: "",
            message: "",
          })
      )
    } else {
      console.log("no valid email")
    }
  }

  validateEmail = email => {
    const re = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
    return re.test(email)
  }

  render() {
    const { myForm, modal } = this.state

    return (
      <StaticQuery
        query={graphql`
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
        `}
        render={data => {
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
                  this.setState(
                    state =>
                      (state.modal = {
                        show: false,
                        img: null,
                      })
                  )
                }
              />

              <StyledBackgroundSection
                className="hero"
                headerTitle={headerTitle}
                headerSubtitle={headerSubtitle}
                headerText={headerText}
              />

              <Blurbs />
              <PortfolioCarousel />
              <Services />
              <PortfolioGallery onModalChange={this.onModalChange} />
              <PriceTables onPackageSelect={this.onPackageSelect} />
              <Map />
              <ContactForm
                onChildStateChange={this.onChildStateChange}
                myForm={myForm}
                // onFormSend={onFormSend}
              />
              <Address />
            </Layout>
          )
        }}
      />
    )
  }
}

export default IndexPage
