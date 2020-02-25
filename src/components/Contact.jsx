/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from "react-icofont";
import axios from "axios";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import ScrollAnimation from "react-animate-on-scroll";
import emailJs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      number: "",
      message: "",
      successMsg: ""
    };
  }
  handleForm = e => {
    const that = this;
    const templateParams = {
      subject: this.state.subject,
      message: this.state.message,
      email: this.state.email,
      phone: this.state.number,
      name: this.state.name
    };
    // const templateId = "template_bjvd76Ns";
    // const serviceId = "mailjet";
    // const userId = "user_wtH5nyU3NXs667ovWi6ls";

    axios
      .post("http://uploader.saimrc.com/api/sendEmail", templateParams)
      .then(function(response) {
        document.getElementById("contactForm").reset();
        that.setState({
          successMsg: "Thank you! We received your message"
        });
        document.getElementById("contactForm").reset();
      })
      .catch(function(error) {
        console.log("error...", error);
      });
  };

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <React.Fragment>
        <section id="contact" className="contact-area ptb-100">
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
              <div className="col-lg-4 col-md-4">
                <div className="address-area">
                  <div className="addess">
                    <Icofont icon="icofont-google-map" />
                    <h4>{this.props.AddTitle}</h4>
                    <p>{this.props.Address}</p>
                  </div>
                  <div className="email">
                    <Icofont icon="icofont-email" />
                    <h4>{this.props.EmailTitle}</h4>
                    <p>{this.props.Email}</p>
                  </div>
                  <div className="phone">
                    <Icofont icon="icofont-phone" />
                    <h4>{this.props.PhoneTitle}</h4>
                    <p>{this.props.Phone}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4">
                <div className="contact-form">
                  <ValidationForm
                    id="contactForm"
                    onSubmit={(e, formData, inputs) => {
                      e.preventDefault();
                      this.handleForm(formData);
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <TextInput
                            name="name"
                            id="name"
                            required
                            successMessage=""
                            errorMessage="Please enter your name"
                            className="form-control"
                            placeholder="Name"
                            autoComplete="off"
                            onChange={this.handleFields}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <TextInput
                            name="email"
                            id="email"
                            type="email"
                            required
                            successMessage=""
                            errorMessage="Please enter your email address"
                            className="form-control"
                            placeholder="Email"
                            autoComplete="off"
                            onChange={this.handleFields}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <TextInput
                            name="subject"
                            id="subject"
                            type="text"
                            required
                            successMessage=""
                            errorMessage="Please enter your email subject"
                            className="form-control"
                            placeholder="Subject"
                            autoComplete="off"
                            onChange={this.handleFields}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <TextInput
                            name="number"
                            id="number"
                            type="text"
                            required
                            successMessage=""
                            errorMessage="Please enter your phone number"
                            className="form-control"
                            placeholder="Phone"
                            autoComplete="off"
                            onChange={this.handleFields}
                          />
                          <div className="help-block with-errors" />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <TextInput
                            name="message"
                            id="description"
                            multiline
                            placeholder="Your message"
                            className="form-control"
                            required
                            successMessage=""
                            errorMessage="Please write your message"
                            rows="5"
                            autoComplete="off"
                            onChange={this.handleFields}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="center-wrap">
                      <div className="button">
                        <button type="submit">
                          Submit <Icofont icon="icofont-long-arrow-right" />{" "}
                        </button>
                        <div className="mask"></div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </ValidationForm>
                  {this.state.successMsg !== "" ? (
                    <div className="col-md-12">
                      <div id="contact_send_status">
                        <h3 className="contactMsg">{this.state.successMsg}</h3>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div class="col-lg-4 col-md-4 gmap">
                <iframe
                  id="gmap_canvas"
                  height="300"
                  src="https://maps.google.com/maps?q=F995%2BRM%20General%20Ganj%2C%20Kanpur%2C%20Uttar%20Pradesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
              <div>
                <div className="col-lg-12 col-md-12">
                  <div className="address-area" style={{ display: "flex" }}>
                    <div className="addess">
                      <Icofont icon="icofont-google-map" />
                      <h4>{this.props.Branch1Title}</h4>
                      <p>{this.props.Branch1Aggress}</p>
                    </div>
                    <div className="addess">
                      <Icofont icon="icofont-google-map" />
                      <h4>{this.props.Branch2Title}</h4>
                      <p>{this.props.Branch2Aggress}</p>
                    </div>
                    {/* <div className="addess">
                      <Icofont icon="icofont-google-map" />
                      <h4>{this.props.Branch3Title}</h4>
                      <p>{this.props.Branch3Aggress}</p>
                    </div> */}
                  </div>
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
Contact.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  AddTitle: PropTypes.string,
  Address: PropTypes.string,
  EmailTitle: PropTypes.string,
  Email: PropTypes.string,
  PhoneTitle: PropTypes.string,
  Phone: PropTypes.string,
  Branch1Title: PropTypes.string,
  Branch1Aggress: PropTypes.string,
  Branch2Title: PropTypes.string,
  Branch2Aggress: PropTypes.string,
  Branch3Title: PropTypes.string,
  Branch3Aggress: PropTypes.string
};

//Default Props
Contact.defaultProps = {
  SectionbgTitle: "Contact",
  sectionTitle: "Our Contact",
  sectionDescription:
    "Feel free for all your queries. We are here to serve you with our best services!",
  AddTitle: "Address",
  Address:
    "17/14, The Mall, Kanpur, U.P. – 208001 , Landmark - Bank of Baroda Building  ",
  EmailTitle: "Email",
  Email: "info@cajaindhingra.com",
  PhoneTitle: "Phone",
  Phone: "9736136414, 9839470209, 9415052167",
  Branch1Title: "Delhi Branch",
  Branch1Aggress: "G-20, Dewan House, Ajay Enclave, New Delhi",
  Branch2Title: "Haryana Branch",
  Branch2Aggress: "17/32, Gandhi Chowk, Bahadurgarh, Jhajjar, Haryana",
  Branch3Title: "Branch Address3",
  Branch3Aggress: "17/14, The Mall, Kanpur, U.P. – 208001"
};
export default Contact;
