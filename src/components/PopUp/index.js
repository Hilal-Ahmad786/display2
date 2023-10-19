import React from "react";
import intro2Data from "../../data/PopUp.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Split from "../Split";
import { Button, Form, FormGroup, Input } from 'reactstrap';

import Link from "next/link";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

const PopUP = () => {
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
      <header className="mt-100">
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
                        <div className="row">
                          <div className="col-5 m-4">
                            <img src="/assets/img/slid/n/con1.png" alt="BigCo Inc. logo" />
                          </div>
                          <div className="col-5 m-4">
                            <img src="/assets/img/slid/n/con5.png" alt="BigCo Inc. logo" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5 m-4">
                            <img src="/assets/img/slid/n/con1.png" alt="BigCo Inc. logo" />
                          </div>
                          <div className="col-5 m-4">
                            <img src="/assets/img/slid/n/con5.png" alt="BigCo Inc. logo" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5 m-4">
                            <img src="/assets/img/slid/n/con1.png" alt="BigCo Inc. logo" />
                          </div>
                          <div className="col-5 m-4">
                            <img src="/assets/img/slid/n/con5.png" alt="BigCo Inc. logo" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-5 m-4">
                            <img src="/assets/img/slid/n/con1.png" alt="BigCo Inc. logo" />
                          </div>
                          <div className="col-5 m-4">
                            <img src="/assets/img/slid/n/con5.png" alt="BigCo Inc. logo" />
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-lg-3  bg-white ColorSelectorDiv">
                      <div className="caption  mb-70 ColorSelectorDivCaption">

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
                            className="words chars splitting  text-danger"
                          >
                            <Link href="#">{slide.title.first}</Link>
                          </h2>
                        </Split>


                        <ul className="mt-2 col-lg-12 col-md-6 col-sm-4">
                          <button className="btn btn-lg mb-3 mr-1 btn-dark butli"  >
                            Con-11
                          </button>
                          <button className="btn btn-lg mb-3 mr-1 btn-dark butda" >
                            Con-11
                          </button>
                          <button className="btn btn-lg mb-3 mr-1 btn-dark butsuc" >
                            Con-11
                          </button>
                          <br />
                          <button className="btn btn-lg mb-3 mr-1 btn-dark butpri" >
                            Con-11
                          </button>
                          <button className="btn btn-lg  mb-3 mr-1 btn-dark" >
                            Con-11
                          </button>
                          <button className="btn btn-lg   mb-3 mr-1 btn-dark" >
                            Con-11
                          </button>
                          <br />
                          <button className="btn btn-lg   mb-3 mr-1 btn-dark butpri" >
                            Con-11
                          </button>
                          <button className="btn btn-lg   mb-3 mr-1 btn-dark" >
                            Con-11
                          </button>
                          <button className="btn btn-lg   mb-3 mr-1 btn-dark" >
                            Con-11
                          </button>
                        </ul>
                        <Form>
                          <Split>
                            <h2
                              data-splitting
                              className="words chars splitting text-dark"
                            >
                              <Link href="#">{slide.title.forth}</Link>
                            </h2>
                          </Split>
                          <FormGroup>

                            <Input type="text" name="name" id="exampleText" placeholder="Ad" />
                          </FormGroup>
                          <FormGroup>

                            <Input type="text" name="surname" id="exampleText" placeholder="Soyad" />
                          </FormGroup>
                          <FormGroup>

                            <Input type="email" name="email" id="exampleEmail" placeholder="E-Mail" />
                          </FormGroup>
                          <FormGroup>

                            <Input type="tel" name="telephone" id="exampleTel" placeholder="Telefon Numarasi" />
                          </FormGroup>

                          <Button>Gönder</Button>

                        </Form>

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

export default PopUP;


