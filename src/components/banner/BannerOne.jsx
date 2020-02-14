import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel3";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

class BannerOne extends Component {
  render() {
    //BannerOne loop start
    const banneronedata = this.props.banneronesData.map((bannerone, index) => (
      <div className={bannerone.BgClass} key={index}>
        <div className="diplay-table">
          <div className="display-table-cell">
            <VisibilitySensor>
              {({ isVisible }) => (
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      <span
                        className={
                          isVisible
                            ? "hero-text animated fadeInDown slow opacityOne"
                            : "opacityZero"
                        }
                      >
                        {bannerone.TopTitle}
                      </span>

                      <h1
                        className={
                          isVisible
                            ? "animated fadeInDown slow opacityOne"
                            : "opacityZero"
                        }
                      >
                        {bannerone.Title}
                      </h1>
                      <p
                        className={
                          isVisible
                            ? "animated fadeInDown slow opacityOne"
                            : "opacityZero"
                        }
                      >
                        {bannerone.Content}
                      </p>
                      <div className="center-wrap">
                        {/* <Link to={bannerone.BtnLink} className="btn-a">
                          <div className="button">
                            {bannerone.BtnName}
                            <Icofont icon="icofont-long-arrow-right" />
                            <div className="mask" />
                          </div>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </VisibilitySensor>
          </div>
        </div>
      </div>
    ));
    //BannerOne loop END

    //Thumbs loop Start
    const thumbdata = this.props.thumbsData.map((thumb, index) => (
      <div className="owl-thumb-item" key={index}>
        <Icofont icon={thumb.ThumbIcon} />
        <h3>{thumb.ThumbTitle}</h3>
        <p>{thumb.ThumbContent}</p>
      </div>
    ));
    //Thumbs loop END
    return (
      <React.Fragment>
        <div id="home" className="hompage-slides-wrapper">
          <OwlCarousel
            className="owl-theme homepage-slides"
            items={1}
            touchDrag={false}
            margin={0}
            mouseDrag={false}
            smartSpeed={1000}
            dotData={true}
            dotsContainer={".owl-thumbs"}
          >
            {banneronedata}
          </OwlCarousel>

          <div className="owl-thumbs">{thumbdata}</div>
        </div>
      </React.Fragment>
    );
  }
}
//Props Types
BannerOne.propTypes = {
  banneronesData: PropTypes.array,
  thumbsData: PropTypes.array
};

//Default Props
BannerOne.defaultProps = {
  banneronesData: [
    {
      BgClass: "single-slider-item slide-bg-1",
      TopTitle: "Business made simple",
      Title: "Welcome To Jain Dhingra & Associates",
      Content:
        "Jain Dhingra & Associates is a group of experienced professionals in the field of Finance & Accounts, Taxation, Audit, Outsourcing and Compliances etc. since 1973.",
      BtnLink: "/#0",
      BtnName: "get started"
    },
    {
      BgClass: "single-slider-item slide-bg-2",
      TopTitle: "Business made simple",
      Title: "Welcome To Jain Dhingra & Associates",
      Content:
        "Jain Dhingra & Associates is a group of experienced professionals in the field of Finance & Accounts, Taxation, Audit, Outsourcing and Compliances etc. since 1973. ",
      BtnLink: "/#0",
      BtnName: "get started"
    },
    {
      BgClass: "single-slider-item slide-bg-3",
      TopTitle: "Business made simple",
      Title: "Welcome To Jain Dhingra & Associates",
      Content:
        "Jain Dhingra & Associates is a group of experienced professionals in the field of Finance & Accounts, Taxation, Audit, Outsourcing and Compliances etc. since 1973. ",
      BtnLink: "/#0",
      BtnName: "get started"
    }
  ],
  thumbsData: [
    {
      ThumbIcon: "icofont-rocket-alt-1",
      ThumbTitle: "Our Mission",
      ThumbContent:
        "To provide the best professional solutions to fulfil the client's business requirements, guiding at our best."
    },
    {
      ThumbIcon: "icofont-box",
      ThumbTitle: "Our Vision",
      ThumbContent:
        "To help our clients to meet their goals through our professionals, services and solutions."
    },
    {
      ThumbIcon: "icofont-live-support",
      ThumbTitle: "Reliable Support",
      ThumbContent:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    }
  ]
};

export default BannerOne;
