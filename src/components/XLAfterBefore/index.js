/* eslint-disable @next/next/no-img-element */
import React from "react";
import beforeAndAfterSlider from "../../common/beforeAndAfterSlider";

const XLAfterBefore = () => {
  React.useEffect(() => {
    beforeAndAfterSlider();
  });
  return (
    <section className="after-before section-padding">
      <div
        className="background bg-img parallaxie"
        style={{ backgroundImage: "url(/assets/img/04.jpg)" }}
        data-overlay-dark="7"
      ></div>
      <div className="container ontop">
        <div
          className="section-head text-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <h6 className="custom-font">Best Works</h6>
              <h4 className="playfont">
                Drag the Slider to See the Transformation One of the Interior
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="dotsbg wow fadeInUp" data-wow-delay=".3s">
              <div id="before-after-slider" className="wow imago">
                <div className="overlay" />
                <div
                  className="twentytwenty-before-label"
                  data-content="Önden"
                ></div>
                <div
                  className="twentytwenty-after-label"
                  data-content="Üstten"
                ></div>
                <div id="before-image">
                  <img src="/assets/img/XLonden.png" alt="before" />
                </div>
                <div id="after-image">
                  <img src="/assets/img/XLustten.png" alt="After" />
                </div>
                <div id="resizer" className="twentytwenty-handle">
                  <span className="twentytwenty-left-arrow"></span>
                  <span className="twentytwenty-right-arrow"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XLAfterBefore;
