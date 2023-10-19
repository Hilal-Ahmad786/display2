"use strict";
exports.id = 6215;
exports.ids = [6215];
exports.modules = {

/***/ 74:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_intro3_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5643);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8636);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
/* harmony import */ var _common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5850);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_7__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












swiper__WEBPACK_IMPORTED_MODULE_7__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_7__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_7__.Parallax
]);
const Intro3 = ()=>{
    const [load, setLoad] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setTimeout(()=>{
            (0,_common_removeSlashFromPagination__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)();
        }, 1000);
        setTimeout(()=>{
            setLoad(false);
        });
    }, []);
    const navigationPrevRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const navigationNextRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const paginationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "slider text-center mt-80",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "col-lg-10",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "swiper-container parallax-slider",
                            children: [
                                !load ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                    speed: 1000,
                                    parallax: true,
                                    loop: true,
                                    navigation: {
                                        prevEl: navigationPrevRef.current,
                                        nextEl: navigationNextRef.current
                                    },
                                    pagination: {
                                        type: "fraction",
                                        clickable: true,
                                        el: paginationRef.current
                                    },
                                    onBeforeInit: (swiper)=>{
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                        swiper.params.pagination.el = paginationRef.current;
                                    },
                                    onSwiper: (swiper)=>{
                                        setTimeout(()=>{
                                            for(var i = 0; i < swiper.slides.length; i++){
                                                swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);
                                            }
                                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                                            swiper.params.navigation.nextEl = navigationNextRef.current;
                                            swiper.params.pagination.el = paginationRef.current;
                                            swiper.navigation.destroy();
                                            swiper.navigation.init();
                                            swiper.navigation.update();
                                            swiper.pagination.destroy();
                                            swiper.pagination.init();
                                            swiper.pagination.update();
                                        });
                                    },
                                    className: "swiper-wrapper",
                                    slidesPerView: 1,
                                    children: _data_intro3_json__WEBPACK_IMPORTED_MODULE_2__.map((slide)=>{
                                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                            className: "swiper-slide",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-img valign",
                                                style: {
                                                    backgroundImage: `url(${slide.image})`
                                                },
                                                "data-overlay-dark": "6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "container",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "row justify-content-center",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-lg-7 col-md-9",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "caption center",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                                            "data-splitting": true,
                                                                            className: "playfont words chars splitting",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                                                href: "#",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    children: [
                                                                                        slide.title.first,
                                                                                        " ",
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                                                        }),
                                                                                        slide.title.second
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    (slide === null || slide === void 0 ? void 0 : slide.content) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        className: "mt-10",
                                                                        children: slide.content
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                                        href: "#",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                            className: "btn-curve btn-color mt-20",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: "Discover Work"
                                                                            })
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        }, slide.id));
                                    })
                                }) : null,
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "setone setwo",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            ref: navigationNextRef,
                                            className: "swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fas fa-chevron-right"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            ref: navigationPrevRef,
                                            className: "swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fas fa-chevron-left"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    ref: paginationRef,
                                    className: "swiper-pagination top botm custom-font"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "social-icon",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fab fa-behance"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fab fa-pinterest-p"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "d-flex justify-content-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mx-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            children: "Text"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "08080"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mx-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            children: "Text"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "08080"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mx-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            children: "Text"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "08080"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mx-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            children: "Text"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "08080"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-2",
                    style: {
                        background: '#181818'
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-12 p-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/img/about1.jpg",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "testing"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-12 p-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/img/about1.jpg",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "testing"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-12 p-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/img/about1.jpg",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "testing"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-lg-12 p-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "/assets/img/about1.jpg",
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        children: "testing"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro3);

});

/***/ }),

/***/ 3710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Mainlayoutasker)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/common/getSiblings.js
var getSiblings = __webpack_require__(1311);
;// CONCATENATED MODULE: ./src/components/Navbarsker/index.jsx

/* eslint-disable @next/next/no-img-element */ 



const Navbarsker = ({ navbarRef , logoRef , logoClass  })=>{
    const handleDropdown = (e)=>{
        (0,getSiblings/* default */.Z)(e.target.parentElement).filter((item)=>item.classList.contains("show")
        ).map((item)=>{
            item.classList.remove("show");
            if (item.childNodes[0]) {
                item.childNodes[0].setAttribute("aria-expanded", false);
            }
            if (item.childNodes[1]) {
                item.childNodes[1].classList.remove("show");
            }
        });
        e.target.parentElement.classList.toggle("show");
        e.target.setAttribute("aria-expanded", true);
        e.target.parentElement.childNodes[1].classList.toggle("show");
    };
    const handleMobileDropdown = (e)=>{
        document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "navbar change navbar-expand-lg pb-5",
            ref: navbarRef,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-fluid",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: `logo ${logoClass && logoClass}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: app/* lightLogo */.E8,
                                    alt: "logo",
                                    ref: logoRef
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-6 sliderForNavbarText justify-content-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "textForNavbarText",
                            children: "This is dummy text for slider, Here all the latest news will be apeared"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "collapse navbar-collapse justify-content-center",
                            id: "navbarSupportedContent",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "navbar-nav ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "button",
                                    class: "btn btn-primary",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Testing button for download"
                                        })
                                    })
                                })
                            })
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_Navbarsker = (Navbarsker);

;// CONCATENATED MODULE: ./src/components/FooterAsker/index.jsx

/* eslint-disable @next/next/no-img-element */ 

const FooterAsker = ({ classText  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: `${classText ? classText : ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item md-mb50",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "İletişim"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon pe-7s-map-marker"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "Officeal Address"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "504 White St . Dawsonville, GA 30534 , New York"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon pe-7s-mail"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "Email Us"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "support@gmail.com"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon pe-7s-call"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                            children: "Whatsapp Destek Hattı"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "+87986451666"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item md-mb50",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "G\xfcncel Haberler"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/assets/img/blog/1.jpg",
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "sm-post",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "date",
                                                            children: "14 Jan 2022"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                        href: "#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "/assets/img/blog/2.jpg",
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "sm-post",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "The Start-Up Ultimate Guide to Make Your WordPress Journal."
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "date",
                                                            children: "14 Jan 2022"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item md-mb50",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "title",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        children: "\xd6nemli Bağlantılar"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img mb-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Hakkımızda"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img mb-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Referenslar"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img mb-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "KVKK"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img mb-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Gizlilik S\xf6z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img mb-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: "Kullanım S\xf6z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "img mb-3",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "#",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            clasName: "askerr",
                                            children: "Sık\xe7a sorulan sorular"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/assets/img/logo-light.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                id: "askerr",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                id: "askerr",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                id: "askerr",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-instagram"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                id: "askerr",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fab fa-youtube"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copy-right",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "\xa9 2022, Testing Website. Made with passion by",
                                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                href: "#",
                                                children: "Hilal Ahamd"
                                            }),
                                            "."
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const components_FooterAsker = (FooterAsker);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/layouts/Mainlayoutasker.jsx

/* eslint-disable @next/next/no-css-tags */ 



const MainLayoutasker = ({ children , logoClassText  })=>{
    const navbarRef = external_react_default().useRef(null);
    const logoRef = external_react_default().useRef(null);
    external_react_default().useEffect(()=>{
        var navbar = navbarRef.current, logo = logoRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
                logo.setAttribute("src", "/assets/img/logo-light.png");
            } else {
                navbar.classList.remove("nav-scroll");
                logo.setAttribute("src", "/assets/img/logo-light.png");
            }
        });
    }, [
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "stylesheet",
                    href: "/assets/css/style.css"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbarsker, {
                navbarRef: navbarRef,
                logoRef: logoRef,
                logoClass: logoClassText
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(components_FooterAsker, {
            })
        ]
    }));
};
/* harmony default export */ const Mainlayoutasker = (MainLayoutasker);


/***/ }),

/***/ 6215:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Team3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3760);
/* harmony import */ var _layouts_Mainlayoutasker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3710);
/* harmony import */ var _components_Video2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8995);
/* harmony import */ var _components_Blogs3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2813);
/* harmony import */ var _components_About_Us8__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3086);
/* harmony import */ var _components_Services7__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7455);
/* harmony import */ var _components_Testimonials1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5046);
/* harmony import */ var _components_Work_Without_Filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(106);
/* harmony import */ var _components_Intro3asker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Intro3asker__WEBPACK_IMPORTED_MODULE_10__]);
_components_Intro3asker__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











const Home7asker = ()=>{
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        document.querySelector("body").classList.add("index3");
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Mainlayoutasker__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Intro3asker__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_About_Us8__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home7asker);

});

/***/ }),

/***/ 5643:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"Innovative","second":"Architecture"},"content":"Architek have been developing a transversal approach combining architecture, urbanism and landscape.","image":"/assets/img/slid/n/1.jpg"},{"id":2,"title":{"first":"Classic","second":"and Modern"},"content":"Architek have been developing a transversal approach combining architecture, urbanism and landscape.","image":"/assets/img/slid/n/3.jpg"},{"id":3,"title":{"first":"Elegant &","second":"Unique Design"},"content":"Architek have been developing a transversal approach combining architecture, urbanism and landscape.","image":"/assets/img/slid/n/2.jpg"},{"id":4,"title":{"first":"interior","second":"design agency"},"content":"Architek have been developing a transversal approach combining architecture, urbanism and landscape.","image":"/assets/img/slid/n/4.jpg"}]');

/***/ })

};
;