import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import { Accordion, AccordionItem } from "react-sanfona";
// import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll";

class FAQ extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="faq ptb-100">
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
            <div className="faq-content">
              <div className="row">
                <div className="col-lg-4">
                  {/* <Link to={this.props.ContentLink}> */}
                  <div className="content-box color-effect-1">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-200}
                      duration={800}
                    >
                      <h3>{this.props.ContentTitle}</h3>

                      <div className="box-icon-wrap box-icon-effect-1 box-icon-effect-1a">
                        <div className="box-icon">
                          <Icofont icon="icofont-share-alt" />
                        </div>
                      </div>

                      <p>{this.props.ContentDescription}</p>
                    </Link>
                  </div>
                  {/* </Link> */}
                </div>

                <div className="col-lg-8">
                  <Accordion rootTag="div" className="panel-group">
                    {this.props.faqData.map(item => {
                      return (
                        <AccordionItem
                          key={item}
                          title={item.title}
                          expanded={true}
                          expandedClassName=""
                          className="panel-title panel panel-default"
                          titleTag="a"
                          titleClassName=""
                        >
                          <div>
                            <div className="panel-body">
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
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
FAQ.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  ContentLink: PropTypes.string,
  ContentTitle: PropTypes.string,
  ContentDescription: PropTypes.string,
  faqData: PropTypes.array
};

//Default Props
FAQ.defaultProps = {
  SectionbgTitle: "FAQ",
  sectionTitle: "Frequntly Ask & Questions",
  sectionDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",

  ContentTitle: "One More Question?",
  ContentDescription:
    "If you have more questions, send us a message and we will answer you as soon as possible.",
  ContentLink: "/#0",

  faqData: [
    {
      title: "Planning to Start New Start up?",
      description:
        "Whether you are planning for a new start-up or looking for the best business solutions and guidance to excel your business empire, Jain Dhingra & Associates stands with you to resolve all your queries with its best to let you touch the sky of success."
    }
    // ,
    // {
    //     title: "View & download invoices?",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.",
    // },
    // {
    //     title: "What is Item Support?",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.",
    // },
    // {
    //     title: "How to contact an author?",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.",
    // }
  ]
};

export default FAQ;
