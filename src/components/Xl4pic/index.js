import React from "react";
import Link from "next/link";
import worksCardEffect from "../../common/worksCardEffect";

const Xl4pic = () => {
  React.useEffect(() => {
    worksCardEffect();
  }, []);
  return (
    <section className="portfolio full-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 cluom current" data-tab="tab-1">
            <div className="info">
              <h6 className="custom-font">Interior</h6>
              <h5>Exterior Designs</h5>
            </div>
            <div className="more">
              <Link href="/project-details">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 cluom" data-tab="tab-2">
            <div className="info">
              <h6 className="custom-font">Interior</h6>
              <h5>Maroon Beach Hotel</h5>
            </div>
            <div className="more">
              <Link href="/project-details">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 cluom" data-tab="tab-3">
            <div className="info">
              <h6 className="custom-font">Interior</h6>
              <h5>Apartment Renovation</h5>
            </div>
            <div className="more">
              <Link href="/project-details">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 cluom" data-tab="tab-4">
            <div className="info">
              <h6 className="custom-font">Interior</h6>
              <h5>Modern Minimalist House</h5>
            </div>
            <div className="more">
              <Link href="/project-details">
                <a>
                  View Project <i className="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="glry-img">
        <div
          id="tab-1"
          className="bg-img tab-img current"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/4.jpg)` }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-2"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/22.jpg)` }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-3"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/CornerInterior.png)` }}
          data-overlay-dark="2"
        ></div>
        <div
          id="tab-4"
          className="bg-img tab-img"
          style={{ backgroundImage: `url(/assets/img/portfolio/full/Xl4_4.jpg)` }}
          data-overlay-dark="2"
        ></div>
      </div>
    </section>
  );
};

export default Xl4pic;
