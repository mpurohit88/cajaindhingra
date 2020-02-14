import React, { Component } from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

class Works extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    //Blog loop start
    const blogdata = this.props.blogsData.map((blog, index) => (
      <div className="" key={index}>
        <div className="blog-item">
          {/* <Link to={blog.postLink} className="blog-img">
              <img src={blog.postImage} alt="blog-one" />
            </Link> */}
          <div className="blog-info">
            <div className="date-box">
              {blog.date} <span className="month">{blog.month}</span>
            </div>
            <div className="title-meta">
              <h2>
                <Link to={blog.postLink}>{blog.posttitle}</Link>
              </h2>
              {/* <div className="post-meta">
                  <ul>
                    <li>
                      <Icofont icon="icofont-funky-man" /> Posted By:{" "}
                      <Link to={blog.authorLink}>{blog.authorName}</Link>
                    </li>
                    <li>
                      <Icofont icon="icofont-speech-comments" /> Comments:{" "}
                      <Link to={blog.CommentsLink}>{blog.TotalComments}</Link>
                    </li>
                    <li>
                      <Icofont icon="icofont-tags" /> Tags:{" "}
                      <Link to={blog.TagLink}>{blog.TagName}</Link>
                    </li>
                  </ul>
                </div> */}
            </div>
          </div>
          <div className="post-content">
            <p>
              {blog.postContent}
              <br />
              <br />
              {blog.postContent1}
              <br />
              <br />
              {blog.postContent2}
            </p>
          </div>
        </div>
      </div>
    ));
    return (
      <React.Fragment>
        <section id="works" className="our-works ptb-100">
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
              {blogdata}
              <div className="col-lg-12 col-md-12 all-post">
                <div className="center-wrap">
                  {/* <Link to={this.props.btnLink} className="btn-a">
                    <div className="button">
                      {this.props.BlogBtn}{" "}
                      <Icofont icon="icofont-long-arrow-right" />
                      <div className="mask"></div>
                    </div>
                  </Link> */}
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
Works.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string
};

//Default Props
Works.defaultProps = {
  SectionbgTitle: "About",
  sectionTitle: "About Us",
  sectionDescription:
    "Jain Dhingra & Associates is a group of experienced professionals in the field of Finance & Accounts, Taxation, Audit, Outsourcing and Compliances etc. since 1973.",
  btnLink: "/blog-one",
  blogsData: [
    {
      //   postImage: require("../assets/img/blog-one.jpg"),
      postLink: "/blog-details",
      date: "",
      month: "",
      posttitle: "",
      postContent:
        "The certified and trusted advisors of Jain Dhingra & Associates strive to serve and support client with their exquisite services and guidance for entrepreneurs dealing in manufacturing specially FMCG sector, Trading, Exports, Charitable Institutions etc. and looking for the best financial advice for the optimum solutions of Business setup, Audit & Assurance, Taxation, Statutory Compliances, Outsourcing Services, CFO Services and others.",
      postContent1:
        "Since its inception, Jain Dhingra & Associates is serving the entities of corporate and dealing with the accounting affairs of giant firms, keeping loyalty and dedication as their prime armours. ",
      postContent2:
        "With our best team members who are professionally experienced and well-versed with the world of digitalization; always stand to serve nothing like second with their best works of SAP, M.S. Office, Tally and other latest software programs",
      authorName: "Jone",
      authorLink: "/#0",
      TotalComments: "06",
      CommentsLink: "/#0",
      TagName: "lifestyle",
      TagLink: "/#0"
    }
  ]
};

export default Works;
