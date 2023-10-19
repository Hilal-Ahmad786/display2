/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { Button } from 'reactstrap';


const WorkFourColumn = () => {
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
              
              <span data-filter=".interior" className="btn-light rounded-circle p-4 mr-1"></span>
              <span data-filter=".theaters" className="btn-danger rounded-circle p-4 mr-1"></span>
              <span data-filter=".residential" className="btn-primary rounded-circle p-4 mr-1"></span>
              <span data-filter=".interior1" className="btn-success rounded-circle p-4 mr-1"></span>
              <span data-filter=".residential1" className="btn-dark rounded-circle p-4 mr-1"></span>
              <span data-filter=".theaters1" className="btn-light rounded-circle p-4 mr-1"></span>
              <span data-filter=".interior2" className="btn-dark rounded-circle p-4 mr-1"></span>
              
            </div>
          </div>
          <div className="container">
          <div className="row gallery ">
            <div className="col-lg-12 col-md-12 items interior">
              <div className="item ">
                <div className="img">
                  <img src="/assets/img/works/col/kar-beyaz.png" alt="" />
                </div>
                
              </div>
            </div>
            <div className="col-lg-12 col-md-12 items  theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/ral3002.png" alt="" />
                </div>
                
              </div>
            </div>
            <div className="col-lg-12 col-md-12 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/ral5002.png" alt="" />
                </div>
                
              </div>
            </div>
            <div className="col-lg-12 col-md-12 items interior1">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/ral6029.png" alt="" />
                </div>
                
              </div>
            </div>
            <div className="col-lg-12 col-md-12 items residential1">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/ral7021.png" alt="" />
                </div>
                
              </div>
            </div>
            <div className="col-lg-12 col-md-12 items theaters1">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/ral9018.png" alt="" />
                </div>
                
              </div>
            </div>
            <div className="col-lg-12 col-md-12 items interior2">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/ral7021.png" alt="" />
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

export default WorkFourColumn;
