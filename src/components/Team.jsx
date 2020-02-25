import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel3";
import ScrollAnimation from "react-animate-on-scroll";

class Team extends Component {
  render() {
    //Team loop start
    const teamdata = this.props.teamsData.map((team, index) => (
      <div className="team-box" key={index}>
        <img src={team.Image} alt="Description" />
        <div className="box-content">
          <div className="box-inner-content">
            <h3 className="title">{team.Name}</h3>
            <b>
              <span className="post">{team.Profession}</span>
            </b>
            <ul className="icon">
              <li>
                <Link to={team.facebookLink}>
                  <Icofont icon="icofont-facebook" />
                </Link>
              </li>
              <li>
                <Link to={team.linkedinLink}>
                  <Icofont icon="icofont-linkedin" />
                </Link>
              </li>
              <li>
                <Link to={team.twitterLink}>
                  <Icofont icon="icofont-twitter" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ));
    //Team loop END
    return (
      <React.Fragment>
        <section id="team" className="our-team ptb-100">
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
              <OwlCarousel
                className="owl-theme team-slides"
                dots={false}
                autoplay={true}
                loop={true}
                margin={30}
                nav={true}
                smartSpeed={1000}
                autoplayHoverPause={true}
                navText={[
                  "<i class='icofont-arrow-left'></i>",
                  "<i class='icofont-arrow-right'></i>"
                ]}
                responsive={{
                  0: { items: 1 },
                  768: {
                    items: 2
                  },
                  1024: {
                    items: 3
                  },
                  1200: {
                    items: 3
                  }
                }}
              >
                {teamdata}
              </OwlCarousel>
            </div>
            <p>{this.props.sectionDescription1}</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
//Props Types
Team.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  sectionDescription1: PropTypes.string,
  teamsData: PropTypes.array
};

//Default Props
Team.defaultProps = {
  SectionbgTitle: "Team",
  sectionTitle: "Our Team",
  sectionDescription:
    "With our team of experts in accountancy, Company Law and the corporate taxation system; Jain Dhingra & Associates stands high on its core values and services with its certified and experienced Chartered Accountants, Business Analysts, Tax and Finance Experts, IT Professionals, and the Support Staff who strive to resolve your queries and guide you at their best. Meet the top-notch professionals of Jain Dhingra & Associates.",
  sectionDescription1:
    "Partner having 25 years of qualitative experience in various Finance & Accounts functions, Annual finalization of Accounts , Internal Controls, Budgeting & Budgetary Controls, Inventory Controls, Product Costing, Credit Control, Contract Manufacturing Operation ,Internal Financial Controls (IFC) ,ERP Implementation (SME), Financial Statements preparation & analysis, Statutory & Tax Audits , Business Analysis, arrangement of Loans from Financial Institutions & arranging credit ratings for Organisations",
  teamsData: [
    {
      Image: require("../assets/img/rakeshGupta.jpg"),
      Name: "CA Rakesh Gupta",
      Profession: "B.Com , FCA, DISA(ICA)",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    },
    {
      Image: require("../assets/img/sekharnigam.jpg"),
      Name: "CA Shekhar Nigam",
      Profession: "B.Sc , FCA",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    },
    {
      Image: require("../assets/img/ajaygupta.jpg"),
      Name: "CA Ajay Gupta",
      Profession: "B.Com., FCA",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    },
    {
      Image: require("../assets/img/PankajKumpawat.jpg"),
      Name: "CA Pankaj Kumpawat",
      Profession: "B.Com., FCA, DISA(ICA)",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    },
    {
      Image: require("../assets/img/kcagarwal.png"),
      Name: "CA K.C Agarwal",
      Profession: "B.Com., FCA",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    }
  ]
};

export default Team;
