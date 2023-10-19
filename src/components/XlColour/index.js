/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { Button } from 'reactstrap';


const XlColour = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section className="works filter-img four-col ">
        <div className="container-fluid">
          <div className="filtering text-center mb-30">
            <div className="filter bg-dark pt-2">
              
              <span data-filter=".interior" className="btn-light  rounded-circle p-4 mr-1"></span>
              <span data-filter=".theaters" className="btn-danger rounded-circle p-4 mr-1"></span>
              <span data-filter=".residential" className="btn-primary rounded-circle p-4 mr-1"></span>
              <span data-filter=".interior1" className="btn-success rounded-circle p-4 mr-1"></span>
              <span data-filter=".residential2" className="btn-dark rounded-circle p-4 mr-1"></span>
              
            </div>
          </div>
          <div className="container">
          <div className="row gallery ">
            <div className="col-lg-12 col-md-12 items interior">
              <div className="item ">
                <div className="img">
                  <img src="/assets/img/works/col/XlLight.png" alt="" />
                </div>
                
              </div>
            </div>
            <div className="col-lg-12 col-md-12 items  theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/XlRed.png" alt="" />
                </div>
                
              </div>
            </div>
            <div className="col-lg-12 col-md-12 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/XlBlue.png" alt="" />
                </div>
                
              </div>
            </div>
            <div className="col-lg-12 col-md-12 items residential1">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/XlWhite.png" alt="" />
                </div>
                
              </div>
            </div>
            <div className="col-lg-12 col-md-12 items interior1">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/XlGreen.png" alt="" />
                </div>
                
              </div>
            </div>
            <div className="col-lg-12 col-md-12 items residential2">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/XlBlack.png" alt="" />
                </div>
                
              </div>
            </div>
            
            
            
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default XlColour;
