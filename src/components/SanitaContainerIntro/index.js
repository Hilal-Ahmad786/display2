import React from "react";
import introData from "../../data/SanitaConIntro.json";
import { Swiper, SwiperSlide } from "swiper/react";
import Split from "../Split";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper"
import ProcessSec1 from "../ProcessSec1";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashFromPagination";

SwiperCore.use([Navigation, Pagination, Parallax]);

const SanitaContainerIntro = () => {
    const [load, setLoad] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        });
        setTimeout(() => {
            removeSlashFromPagination();
        }, 1000);
    }, []);

    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const paginationRef = React.useRef(null);

    return (
        <header className="slider" >
            <div className="swiper-container parallax-slider">
                {!load ? (
                    <Swiper

                        className="swiper-wrapper"

                    >
                        {introData.map((slide) => (
                            <SwiperSlide key={slide.id} className="swiper-slide">
                                <div
                                    className="bg-img valign"
                                    style={{ backgroundImage: `url(${slide.image})` }}

                                >
                                    <div className="container-fluid iiuyi">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-10 mobilIntroContentPart">
                                                <div className="caption hmone ">

                                                    <Split>
                                                        <h1
                                                            data-splitting
                                                            className="words chars splitting"
                                                        >
                                                            <Link href="#">{slide.title.second}</Link>
                                                        </h1>
                                                    </Split>
                                                    {slide?.content && (
                                                        <p className="mt-10">
                                                            {slide.content.first}
                                                        </p>
                                                    )}
                                                    <Link href="/about">
                                                        <a className="btn-curve btn-bord btn-lit mt-30">
                                                            <span>Read More</span>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>


                                        </div>


                                        









                                    </div>


                                </div>


                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : null}


            </div>


        </header>
    );
};

export default SanitaContainerIntro;
