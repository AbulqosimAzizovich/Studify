import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import Slider from "react-slick";
import { H3, H5, H6, Image, LI, P, UL } from "../../../../../AbstractElements";
import { discountCardData, discountSliderOptions } from "../../../../../Data/DashboardsData/ECommerceData";
import { DealOfTheDay, SpecialDiscount } from "../../../../Constants";
import { dynamicImage } from "../../..";

export default function DiscountCard() {
  return (
    <Card className="discount-card">
      <CardBody>
        <div className="owl-carousel owl-theme" id="owl-carousel-dashboard">
          <Slider {...discountSliderOptions}>
            {discountCardData.map((item) => (
              <div className="special-offer" key={item.id}>
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <H3>{item.brand}</H3>
                    <H5>
                      {"$"}
                      {item.discount}
                      <del>
                        {"$"}
                        {item.price}
                      </del>
                    </H5>
                    <H6 className="bg-light">{SpecialDiscount} </H6>
                    <P>
                      {DealOfTheDay}{" "}
                      <span>
                        {"$"}
                        {item.deal}{" "}
                      </span>
                    </P>
                    <UL className="simple-list flex-row">
                      {item.time.map((count) => (
                        <LI key={count.id}>
                          <H5>{count.digit}</H5>
                          <span>{count.text}</span>
                        </LI>
                      ))}
                    </UL>
                  </div>
                  <Image src={dynamicImage(`dashboard-2/product/${item.image}`)} alt="" />
                </div>
                <div className="product-slider">
                  <div className="shap-block">
                    <div className="rounded-shap animate-bg-secondary">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </CardBody>
    </Card>
  );
}
