import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

import ItemOne from "../components/pricingItem/ItemOne";
import ItemTwo from "../components/pricingItem/ItemTwo";
import ItemThree from "../components/pricingItem/ItemThree";
import ItemFour from "../components/pricingItem/ItemFour";
import ItemFive from "../components/pricingItem/ItemFive";

export class Pricing extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="pricing" className="our-pricing ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="section-title">
                    <h2>{this.props.sectionTitle}</h2>
                    <p>{this.props.sectionDescription}</p>
                    <span className="section-title-bg">
                      {this.props.SectionbgTitle}
                    </span>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="tab-slider">
                  <Tabs defaultActiveKey="Consumer" id="uncontrolled-tab">
                    <Tab eventKey="Consumer" title="Consumer Sector">
                      <ItemOne />
                    </Tab>
                    <Tab eventKey="Services" title="Services Sector">
                      <ItemTwo />
                    </Tab>
                    <Tab
                      eventKey="Financial"
                      title="Financial & Insurance Sector"
                    >
                      <ItemThree />
                    </Tab>
                    <Tab eventKey="Real" title="Real Estate Sector">
                      <ItemFour />
                    </Tab>
                    <Tab eventKey="Industrial" title="Industrial Sector">
                      <ItemFive />
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
//Props Types
Pricing.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string
};

//Default Props
Pricing.defaultProps = {
  SectionbgTitle: "Client",
  sectionTitle: "Key Clients",
  sectionDescription:
    "More than ensuring compliance with a complex and difficult taxation system, Jain Dhingra & Associates systematic approach reveals insights that deliver meaningful outcomes which our clients like about.We serve Public & Private Sector Corporate, Banks, Insurance Company, Small &amp; Medium Enterprises etc. across various segments"
};
export default Pricing;
