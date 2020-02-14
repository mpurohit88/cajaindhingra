import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";

class Feature extends Component {
  render() {
    //Feature loop start
    const featuredata = this.props.featuresData.map((feature, index) => (
      <div className="col-lg-4 col-md-4" key={index}>
        <div className="single-feature">
          <div className="glyph">
            <Icofont icon={feature.icon} />
          </div>
          <h3>{feature.heading}</h3>
          <p>{feature.description}</p>
        </div>
      </div>
    ));
    //Feature loop END
    return (
      <React.Fragment>
        <section className="feature-area">
          <div className="container">
            <div className="row">{featuredata}</div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

//Props Types
Feature.propTypes = {
  featuresData: PropTypes.array
};

//Default Props
Feature.defaultProps = {
  featuresData: [
    {
      icon: "icofont-responsive",
      heading: "Our Mission",
      description:
        "To provide the best professional solutions to fulfil the client's business requirements, guiding at our best"
    },
    {
      icon: "icofont-brand-mercedes",
      heading: "Our Vision",
      description:
        "To help our clients to meet their goals through our professionals, services and solutions."
    },
    {
      icon: "icofont-live-support",
      heading: "Reliable Support",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    }
  ]
};

export default Feature;
