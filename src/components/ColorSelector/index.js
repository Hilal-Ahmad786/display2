import React from "react";
import intro2Data from "../../data/ColorSelector.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Split from "../Split";


import Link from "next/link";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

const ColorSelector = () => {
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      removeSlashFromPagination();
    }, 1000);
    setTimeout(() => {
      setLoad(false);
    });
  }, []);



  return (
    <>
      <header >
        <div>
          <Swiper>
            {intro2Data.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="cta__slider-item  "
              >
                <div className="container-fluid ">
                  <div className="row">
                    <div className="col-lg-9  bg-light">
                      <div className="container bg-light imageLight ">
                        <img src="/assets/img/slid/n/yesil.png imageselect" className="ImgColorSelector pt-50 pl-5" />
                      </div>
                      
                    </div>
                    <div className="col-lg-3  bg-white ColorSelectorDiv">
                      <div className="caption mt-70 mb-70 ColorSelectorDivCaption">
                        <div className="custom-font">
                          <Split>
                            <h1
                              data-splitting
                              className="words chars splitting text-dark"
                            >
                              <Link href="#">{slide.title.second}</Link>
                            </h1>
                          </Split>
                          <Split>
                            <h2
                              data-splitting
                              className="words chars splitting mt-10 mb-10 text-danger"
                            >
                              <Link href="#">{slide.title.first}</Link>
                            </h2>
                          </Split>
                          <Split>
                            <h2
                              data-splitting
                              className="words chars splitting text-success"
                            >
                              <Link href="#">{slide.title.third}</Link>
                            </h2>
                          </Split>
                        </div>
                        {slide?.content && (
                          <p className="mt-30 text-dark">
                            {slide.content.first} <br />
                            {slide.content.second}
                          </p>
                        )}
                        <ul className="mt-50 col-lg-12 col-md-6 col-sm-4">

                          <button className="btn btn-lg rounded-circle p-5 mb-3 mr-1 btn-light butli"  >
                          </button>

                          <button className="btn btn-lg p-5 rounded-circle mb-3 mr-1 btn-danger butda" >
                          </button>

                          <button className="btn btn-lg p-5 rounded-circle mb-3 mr-1 btn-success butsuc" >
                          </button>
                          <br />

                          <button className="btn btn-lg p-5 rounded-circle mb-3 mr-1 btn-primary butpri" >
                          </button>

                          <button className="btn btn-lg p-5 rounded-circle mb-3 mr-1 btn-warning" >
                          </button>

                          <button className="btn btn-lg p-5 rounded-circle mb-3 mr-1 btn-dark" >
                          </button>

                        </ul>
                      </div>
                    </div>

                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>


        </div>

      </header>
    </>
  );
};

export default ColorSelector;


/*<div
className="bg-img"
style={{ backgroundImage: `url(${slide.image})` }}
data-overlay-dark="5"
></div>
*/