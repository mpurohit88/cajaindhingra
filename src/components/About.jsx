import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from "react-icofont";
import ScrollAnimation from "react-animate-on-scroll";

class About extends Component {
  render() {
    //About loop start
    const aboutdata = this.props.aboutsData.map((about, index) => (
      <div className="col-lg-4 col-md-6" key={index}>
        <div className="about-info">
          <Icofont icon={about.Icon} />
          <h3>{about.title}</h3>
          <p>{about.content}</p>
        </div>
      </div>
    ));
    //About loop END
    return (
      <React.Fragment>
        <section id="about" className="about-us ptb-100">
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

            <div className="row">{aboutdata}</div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
//Props Types
About.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  aboutsData: PropTypes.array
};

//Default Props
About.defaultProps = {
  SectionbgTitle: "Why",
  sectionTitle: "Why Jain Dhingra & Associates",
  sectionDescription:
    "We at Jain Dhingra & Associates, strive to add value to your work with our best financial guidance and services at various genres. With our easily accessible professional guidance and support, you can groom your business complying all regulatory compliances",
  aboutsData: [
    {
      Icon: "icofont-money",
      title: "Accounting",
      content:
        "Maintain your Books of Accounts with our skilled and experienced Chartered Accountants who are ready to guide you with all their knowledge and potentials."
    },
    {
      Icon: "icofont-binoculars",
      title: "Taxation",
      content:
        "Consult with us for all your taxation tasks and plan the most effective taxation strategies with us which will indeed help your business to excel."
    },
    {
      Icon: "icofont-direction-sign",
      title: "Legal Guidance",
      content:
        "To run a business in the country of laws is not a cup of tea unless you're a pro but with us, you can and that too according to all the legal compliances of India."
    },
    // {
    //     Icon: "icofont-thermometer",
    //     title: "Methodology",
    //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    // },
    // {
    //     Icon: "icofont-users-social",
    //     title: "Our Rich Experience",
    //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    // },

    {
      Icon: "icofont-unique-idea",
      title: "Business Advice",
      content:
        "Understanding your business and suggesting the best for the same is our prime agenda for which we serve 24X7 with our team to make your business graph always inclined."
    }
  ]
};

export default About;
