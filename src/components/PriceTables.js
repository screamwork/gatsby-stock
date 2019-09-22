import React from "react"
import { Col, Row } from "react-bootstrap"
import { FaCheck } from "react-icons/fa"
import "./pricetables.css"

export const PriceTables = ({ onPackageSelect }) => {
  const buynow = paket => {
    let obj = {
      message: `- Paket "${paket}"\n( Info: Dauer mindestens 2 Tage bei Paket "${paket}"! )`,
    }
    onPackageSelect(obj)
    window.location.href = "#contact"
  }

  return (
    <div id="pricing">
      <div id="generic_price_table" style={{ padding: "9rem 0" }}>
        <div className="container">
          <Row>
            <Col xs={12}>
              <h2
                style={{
                  marginBottom: "2.5rem",
                  fontWeight: 500,
                  lineHeight: "1.2",
                  padding: "0 0 .5rem",
                  borderBottom: "2px solid lightgrey",
                  display: "inline-block",
                }}
              >
                Preise
              </h2>
            </Col>
          </Row>
          <div className="row">
            <div className="col-md-6">
              <div className="generic_content clearfix">
                <div className="generic_head_price clearfix">
                  <div className="generic_head_content clearfix">
                    <div className="head_bg"></div>
                    <div className="head">
                      <span>Einfach</span>
                    </div>
                  </div>
                  <div className="generic_price_tag clearfix">
                    <span className="price">
                      <span className="sign">€</span>
                      <span className="currency">79</span>
                      <span className="cent">.99</span>
                    </span>
                  </div>
                </div>
                <div className="generic_feature_list">
                  <ul>
                    <li>
                      <span>
                        <FaCheck />
                      </span>{" "}
                      Professionelle Aussenreinigung
                    </li>
                    <li>
                      <span>
                        <FaCheck />
                      </span>{" "}
                      Reifendruckprüfung
                    </li>
                  </ul>
                </div>
                <div className="generic_price_btn clearfix">
                  <button
                    onClick={e => {
                      e.preventDefault()
                      buynow("easy")
                    }}
                  >
                    Jetzt buchen
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="generic_content active clearfix">
                <div className="generic_head_price clearfix">
                  <div className="generic_head_content clearfix">
                    <div className="head_bg"></div>
                    <div className="head">
                      <span>Standard</span>
                    </div>
                  </div>
                  <div className="generic_price_tag clearfix">
                    <span className="price">
                      <span className="sign">€</span>
                      <span className="currency">149</span>
                      <span className="cent">.99</span>
                    </span>
                  </div>
                </div>
                <div className="generic_feature_list">
                  <ul>
                    <li>
                      <span>
                        <FaCheck />
                      </span>{" "}
                      Aussenreinigung
                    </li>
                    <li>
                      <span>
                        <FaCheck />
                      </span>{" "}
                      Innenreinigung
                    </li>
                  </ul>
                </div>
                <div className="generic_price_btn clearfix">
                  <button
                    onClick={e => {
                      e.preventDefault()
                      buynow("standard")
                    }}
                  >
                    Jetzt buchen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
