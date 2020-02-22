import React, { Component } from "react";
import PropTypes from "prop-types";
// import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

class Blog extends Component {
  componentDidMount() {
    let scrollWithOffset = (el, offset) => {
      const elementPosition = el.offsetTop - offset;
      window.scroll({
        top: elementPosition,
        left: 0,
        behavior: "smooth"
      });
    };
    this.setState({ scrollWithOffset });
  }
  render() {
    //Blog loop start
    const blogdata = this.props.blogsData.map((blog, index) => (
      <div className="col-md-6 col-lg-6" key={index}>
        <div className="blog-item">
          {/* <Link  className="blog-img">
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
            <p>{blog.postContent}</p>
          </div>
        </div>
      </div>
    ));
    //Blog loop END
    return (
      <React.Fragment>
        <section id="blog" className="our-blog ptb-100">
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
              <div class="blog-item founder1">
                <img
                  src={require("../assets/img/founder11.png")}
                  alt="blog-one"
                  width="270px"
                />
                <div class="title-meta">
                  <h3>
                    <a href="/">CA Ravindra Nath Dhingra</a>
                  </h3>
                </div>
              </div>
              <div class="blog-item founder2">
                <img
                  src={require("../assets/img/founder22.png")}
                  alt="blog-one"
                  width="270px"
                />
                <div class="title-meta">
                  <h3>
                    <a href="/">CA Bhoopat S. Jain</a>
                  </h3>
                </div>
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
Blog.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  btnLink: PropTypes.string,
  BlogBtn: PropTypes.string,
  blogsData: PropTypes.array
};

//Default Props
Blog.defaultProps = {
  SectionbgTitle: "Founders",
  sectionTitle: "Founders",
  sectionDescription:
    "It was in 1973 when two wise brains of the accounting field CA Ravindra Nath Dhingra and CA Bhoopat S. Jain thought of establishing an entity to provide professional guidance together with all their skills and experiences under one roof.",
  btnLink: "/blog-one",
  BlogBtn: "View All Post",
  blogsData: [
    {
      //   postImage: require("../assets/img/blog-one.jpg"),
      postLink: "",
      date: "",
      month: "",
      posttitle: "Efforts",
      postContent:
        "With their sincere efforts and potentials, they succeed in building Jain Dhingra & Associates as a big name with a small team in the field of Accounts and taxation",
      authorName: "Jone",
      authorLink: "/#0",
      TotalComments: "06",
      CommentsLink: "/#0",
      TagName: "lifestyle",
      TagLink: "/#0"
    },
    {
      // postImage: require("../assets/img/blog-two.jpg"),
      postLink: "",
      date: "",
      month: "",
      posttitle: "Entrepreneurship",
      postContent:
        "They guided Entrepreneurs in Audit and Taxation, Legal documentations and compliances, proprietary and partnership affairs of small, medium and large associations, and also assisted individuals to Start-up their businesses smoothly without any hiccups of accounting and legal documentation, primarily for the manufacturing, trading, and exports businesses.",
      authorName: "Jone",
      authorLink: "/#0",
      TotalComments: "06",
      CommentsLink: "/#0",
      TagName: "lifestyle",
      TagLink: "/#0"
    },
    {
      // postImage: require("../assets/img/blog-three.jpg"),
      postLink: "",
      date: "",
      month: "",
      posttitle: "Successful ",
      postContent:
        "It's been more than 46 years of successful navigation and service providence to various small and large entities who showed their trust on JDA and we prove it worth for them. Besides this, JDA has also been auditing most of the well-known National Banks, Government Insurance Companies and Corporation (Govt. Undertakings) for more than a four decade.",
      authorName: "Jone",
      authorLink: "/#0",
      TotalComments: "06",
      CommentsLink: "/#0",
      TagName: "lifestyle",
      TagLink: "/#0"
    },
    {
      // postImage: require("../assets/img/blog-four.jpg"),
      postLink: "",
      date: "",
      month: "",
      posttitle: "Digitalisation",
      postContent:
        "Now with the booming world of digitalisation, we also want to provide services to our clients more easily and smartly to the individuals and firms looking for professional guidance for their account and taxation related digitalisation queries. We know that the subjects of accounting and taxation require sincerity, trust and dedication and JDA is the name with all three of them.",
      authorName: "Jone",
      authorLink: "/#0",
      TotalComments: "06",
      CommentsLink: "/#0",
      TagName: "lifestyle",
      TagLink: "/#0"
    }
  ]
};

export default Blog;
