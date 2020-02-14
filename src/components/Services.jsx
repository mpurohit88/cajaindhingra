import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";

class Services extends Component {
  render() {
    //Service loop start
    const servicedata = this.props.serviceItems.map((service, index) => (
      <div className="col-md-6 col-lg-4 text-center" key={index}>
        <div className="service-item">
          <div className="glyph">
            <Icofont icon={service.icon} />
          </div>
          <h3>{service.heading}</h3>
          <p>
            <ul className="list-unstyled">
              {service.itemList.map(e => (
                <li className="p-2 font-weight-bold">{e}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    ));
    //Service loop END
    return (
      <React.Fragment>
        <section id="services" className="services ptb-100">
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
            <div className="row">{servicedata}</div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

//Props Types
Services.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  servicesData: PropTypes.array
};

//Default Props
Services.defaultProps = {
  SectionbgTitle: "Services",
  sectionTitle: "OUR SERVICES",
  sectionDescription:
    "We shall provide you the best aid for your business finances and their respective documentation. Shake hands and allow us to be your best pal for :",
  servicesData: [
    {
      icon: "icofont-automation",
      heading: "Creative Solutions",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    },
    {
      icon: "icofont-bullseye",
      heading: "Excellent Features",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    },
    {
      icon: "icofont-woman-in-glasses",
      heading: "Friendly Support",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    },
    {
      icon: "icofont-chart-growth",
      heading: "SEO & Advertising",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    },
    {
      icon: "icofont-network-tower",
      heading: "Marketing & Consulting",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    },
    {
      icon: "icofont-laptop-alt",
      heading: "Design & Development",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    }
  ],

  serviceItems: [
    {
      heading: "Business Setup",
      icon: "icofont-mail",
      itemList: [
        "Start-up Business advice",
        "Registration of company",
        "Legal & Various types of Documentation",
        "Obtaining Approval from Government",
        "Providing end to end Business solution to clients"
      ]
    },
    {
      heading: "Audit & Assurance",
      icon: "icofont-briefcase",
      itemList: [
        "Statutory Audit",
        "Internal Audit",
        "IND AS Compliance",
        "IFC Framework Implementation",
        "Concurrent Audit",
        "Revenue Audit",
        "Stock Audit",
        "Management Assurance Services"
      ]
    },
    {
      heading: "Taxation",
      icon: "icofont-ebook",
      itemList: [
        "Tax Audit",
        "Tax & Regulatory compliances",
        "Tax Planning and Advisory",
        "Tax Assessment and Litigation Support",
        "Goods and Service Tax (GST)"
      ]
    },
    {
      heading: "Business Support",
      icon: "icofont-live-support",
      itemList: [
        "ERP Consultancy",
        "SOPs Development",
        "Regulatory Approvals",
        "Fund Raising",
        "Compliance",
        "Fixed Assets Management",
        "Financial Accounting",
        "Costing & Management services"
      ]
    },
    {
      heading: "Statutory Compliances",
      icon: "icofont-institution",
      itemList: [
        "Co-ordination for Government Approvals",
        "Other Legal Compliances",
        "Secretarial Support"
      ]
    },
    {
      heading: "Outsourcing Services",
      icon: "icofont-globe",
      itemList: [
        "Accounting Services",
        "Taxation compliances services",
        "Project Accounting",
        "Short term/Long term Management Need Based Services"
      ]
    },
    {
      heading: "CFO Services",
      icon: "icofont-bill",
      itemList: ["Budgeting", "Costing", "MIS", "Compliance"]
    }
  ]
};

export default Services;
