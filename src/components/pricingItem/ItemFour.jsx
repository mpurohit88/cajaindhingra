import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";

export class ItemFour extends Component {
  render() {
    const itemonedata = this.props.itemonesData.map((itemone, index) => (
      <div className={itemone.className} key={index}>
        <div className={itemone.FeaturedClass}>
          <span className="featured">{itemone.Featured}</span>
        </div>
        <div className="plan-price">
          <h3>{itemone.planName}</h3>
          <span className="value">{itemone.price}</span>
          <span className="period">{itemone.description}</span>
        </div>

        <div className="plan-features">
          <ul className="list-unstyled">
            <li className="p-2 font-weight-bold">{itemone.content1}</li>
            {/* <li className="p-2 font-weight-bold">{itemone.content2}</li>
            <li className="p-2 font-weight-bold">{itemone.content3}</li>
            <li className="p-2 font-weight-bold">{itemone.content4}</li>
            <li className="p-2 font-weight-bold">{itemone.content5}</li>
            <li className="p-2 font-weight-bold">{itemone.content6}</li>
            <li className="p-2 font-weight-bold">{itemone.content7}</li>
            <li className="p-2 font-weight-bold">{itemone.content8}</li> */}
          </ul>
          {/* <div className="center-wrap">
            <Link to={itemone.btnlink} className="btn-a">
              <div className="button">
                {itemone.BtnName}
                <Icofont icon="icofont-long-arrow-right" />
                <div className="mask" />
              </div>
            </Link>
          </div> */}
        </div>
      </div>
    ));
    //End ItemThree Loop
    return (
      <React.Fragment>
        <div role="tabpanel" className="tab-pane fade show active" id="monthly">
          <div className="pricing-container margin-top-60">{itemonedata}</div>
        </div>
      </React.Fragment>
    );
  }
}
ItemFour.PropsTypes = {
  itemonesData: PropTypes.array
};
ItemFour.defaultProps = {
  itemonesData: [
    {
      planName: "",
      className: "plan featured col-lg-5",
      description: "",
      FeaturedClass: "listing-badges",
      Featured: "",
      price: "Real Estate Sector",
      content1: "Builder Construction companies",
      content2: "",
      content3: "",
      content4: "",
      content5: "",
      content6: "",
      content7: "",
      BtnName: "Purchase Now",
      btnlink: "/#0"
    }
  ]
};
export default ItemFour;
