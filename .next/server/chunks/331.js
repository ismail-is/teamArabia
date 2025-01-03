exports.id = 331;
exports.ids = [331];
exports.modules = {

/***/ 31503:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 99471, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 91228:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 30524))

/***/ }),

/***/ 65920:
/***/ (() => {



/***/ }),

/***/ 35303:
/***/ (() => {



/***/ }),

/***/ 30524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/elements/BackToTop.js

function BackToTop({ scroll }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: scroll && /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "scroll-to-top scroll-to-target d-block",
            href: "#top",
            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "fas fa-angle-up"
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/elements/DataBg.js


function DataBg() {
    (0,react_.useEffect)(()=>{
        const elements = document.querySelectorAll("[data-bg]");
        elements.forEach((element)=>{
            element.style.backgroundImage = `url(${element.getAttribute("data-bg")})`;
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Breadcrumb.js


function Breadcrumb({ breadcrumbTitle }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "page-header",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "page-header__bg",
                    style: {
                        backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "page-header__inner",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                children: breadcrumbTitle
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "thm-breadcrumb__box",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "thm-breadcrumb list-unstyled",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "icon-angle-left"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: breadcrumbTitle
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/SearchPopup.js


function SearchPopup({ isPopup, handlePopup }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `search-popup ${isPopup ? "active" : ""}`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "search-popup__overlay search-toggler",
                    onClick: handlePopup
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "search-popup__content",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        action: "#",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "sr-only",
                                children: "search here"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                id: "search",
                                placeholder: "Search Here..."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "submit",
                                "aria-label": "search submit",
                                className: "thm-btn",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "fas fa-search"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Sidebar.js


function Sidebar({ isSidebar, handleSidebar }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}

;// CONCATENATED MODULE: ./components/layout/Menu.js


// import { useRouter } from "next/router"
function Menu() {
    // const router = useRouter()
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "main-menu__list",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: "Home"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "about",
                        children: "About"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "services",
                        children: "Services"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "contact",
                        children: "Contact"
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/MobileMenu.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar })=>{
    const [isActive, setIsActive] = (0,react_.useState)({
        status: false,
        key: "",
        subMenuKey: ""
    });
    const handleToggle = (key, subMenuKey = "")=>{
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: ""
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mobile-nav__wrapper",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mobile-nav__overlay mobile-nav__toggler",
                    onClick: handleMobileMenu
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mobile-nav__content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "mobile-nav__close mobile-nav__toggler",
                            onClick: handleMobileMenu,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "fa fa-times"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "logo-box",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                "aria-label": "logo image",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/images/resources/footer-logo-1.png",
                                    width: "150",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mobile-nav__container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "collapse navbar-collapse show clearfix",
                                id: "navbarSupportedContent",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "main-menu__list",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                target: "_blank",
                                                children: "Home"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/about",
                                                target: "_blank",
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/services",
                                                children: "Services"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "mobile-nav__contact list-unstyled",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-envelope"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "mailto:needhelp@elitecons.com",
                                            children: "needhelp@elitecons.com"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-phone-alt"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "tel:666-888-0000",
                                            children: "666 888 0000"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mobile-nav__top",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mobile-nav__social",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        className: "fab fa-twitter"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        className: "fab fa-facebook-square"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        className: "fab fa-pinterest-p"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        className: "fab fa-instagram"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./components/layout/header/Header1.js




function Header1({ scroll, handleMobileMenu, handlePopup }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: `main-header ${scroll ? "fixed-header" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "main-menu",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-menu__wrapper",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "main-menu__wrapper-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "main-menu__left",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-menu__logo",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "assets/images/allimg/logo/teamarbialogo.png",
                                                alt: "",
                                                style: {
                                                    height: "40px"
                                                }
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "main-menu__right",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-menu__menu-box-and-call-box",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "main-menu__menu-box",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "main-menu__main-menu-box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                className: "mobile-nav__toggler",
                                                                onClick: handleMobileMenu,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "fa fa-bars"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "main-menu__search-box",
                                                        onClick: handlePopup,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "main-menu__search search-toggler icon-search"
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "main-menu__call",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "main-menu__call-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/icon/main-menu-comment-icon.png",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "main-menu__call-number",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Contact Us:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "tel:3075550133",
                                                                    children: "(307) 555-0133"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                handleMobileMenu: handleMobileMenu
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `stricky-header header_style_one stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky-header__content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu__wrapper",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-menu__wrapper-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-menu__left",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu__logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/allimg/logo/teamarbialogo.png",
                                                    alt: "",
                                                    style: {
                                                        height: "40px"
                                                    }
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-menu__right",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu__menu-box-and-call-box",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__menu-box",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "main-menu__main-menu-box",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    className: "mobile-nav__toggler",
                                                                    onClick: handleMobileMenu,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fa fa-bars"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "main-menu__search-box",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                className: "main-menu__search search-toggler icon-search",
                                                                onClick: handlePopup
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu__call",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "main-menu__call-icon",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                src: "assets/images/icon/main-menu-comment-icon.png",
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "main-menu__call-number",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Contact Us::"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "tel:3075550133",
                                                                        children: "(307) 555-0133"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header2.js




function Header2({ scroll, handlePopup, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: `main-header-two ${scroll ? "fixed-header" : ""}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "main-header-two__wrap",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-header-two__logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "assets/images/resources/logo-2.png",
                                    alt: ""
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-header-two__top",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-header-two__top-inner",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-unstyled main-header-two__contact-list",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-call"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "tel:6295550129",
                                                                children: "(629) 555-0129"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-email"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "mailto:info@example.com",
                                                                children: "info@example.com"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-location"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "6391 Elgin St. Celina, 10299"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-header-two__top-right",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-header-two__social-box",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "main-header-two__social-box-inner",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                        className: "main-header-two__social-box-title",
                                                        children: "Follow On:"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "main-header-two__social",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-facebook"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-instagram"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-Frame"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                    className: "icon-link-in"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: "main-menu main-menu-two",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "main-menu-two__wrapper",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "main-menu-two__wrapper-inner",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-menu-two__menu-box-and-btn-box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-two__menu-box",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu-two__main-menu-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            className: "mobile-nav__toggler",
                                                            onClick: handleMobileMenu,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "fa fa-bars"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-two__btn-box",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "contact",
                                                    className: "main-menu-two__btn thm-btn",
                                                    children: "Get A quato"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                handleMobileMenu: handleMobileMenu
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky-header__content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu main-menu-two",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu-two__wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "main-menu-two__wrapper-inner",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu-two__menu-box-and-btn-box",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-two__menu-box",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "main-menu-two__main-menu-box",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "mobile-nav__toggler",
                                                        onClick: handleMobileMenu,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fa fa-bars"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-two__btn-box",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "contact",
                                                className: "main-menu-two__btn thm-btn",
                                                children: "Get A quato"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header3.js




function Header3({ scroll, handlePopup, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: `main-header-three ${scroll ? "fixed-header" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "main-menu main-menu-three",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-menu-three__wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-menu-three__wrapper-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-menu-three__left",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-three__logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/resources/logo-1.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-menu-three__main-menu-box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                className: "mobile-nav__toggler",
                                                onClick: handleMobileMenu,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-bars"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-menu-three__right",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-three__btn-box",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "contact",
                                                className: "main-menu-three__btn thm-btn",
                                                children: "Get A quato"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                handleMobileMenu: handleMobileMenu
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `stricky-header stricked-menu main-menu main-menu-three ${scroll ? "stricky-fixed" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky-header__content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu main-menu-three",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu-three__wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu-three__wrapper-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-three__left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-three__logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/resources/logo-1.png",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu-three__main-menu-box",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "mobile-nav__toggler",
                                                    onClick: handleMobileMenu,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-bars"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-three__right",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-three__btn-box",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "contact",
                                                    className: "main-menu-three__btn thm-btn",
                                                    children: "Get A quato"
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header4.js




function Header4({ scroll, handlePopup, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: `main-header-four ${scroll ? "fixed-header" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-header-four__top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-header-four__top-inner",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-header-four__social",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-facebook"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-instagram"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-Frame"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "icon-link-in"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-unstyled main-header-four__contact-list",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-call"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "tel:6295550129",
                                                                children: "(629) 555-0129"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-email"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "mailto:info@example.com",
                                                                children: "info@example.com"
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "icon-location"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "text",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "6391 Elgin St. Celina, 10299"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu main-menu-four",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu-four__wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu-four__wrapper-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-four__left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-four__logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/resources/logo-1.png",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu-four__main-menu-box",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "mobile-nav__toggler",
                                                    onClick: handleMobileMenu,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-bars"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-four__right",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-four__btn-box",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    href: "contact",
                                                    className: "main-menu-four__btn thm-btn",
                                                    children: [
                                                        "Get a quote",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon-dabble-arrow-right"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                handleMobileMenu: handleMobileMenu
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `stricky-header stricked-menu main-menu main-menu-four ${scroll ? "stricky-fixed" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky-header__content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu main-menu-four",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu-four__wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu-four__wrapper-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-four__left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-four__logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/resources/logo-1.png",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu-four__main-menu-box",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "mobile-nav__toggler",
                                                    onClick: handleMobileMenu,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-bars"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-four__right",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-four__btn-box",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    href: "contact",
                                                    className: "main-menu-four__btn thm-btn",
                                                    children: [
                                                        "Get a quote",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon-dabble-arrow-right"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header5.js




function Header5({ scroll, handlePopup, handleMobileMenu }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: `main-header-five ${scroll ? "fixed-header" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "main-menu main-menu-five",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-menu-five__wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-menu-five__wrapper-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-menu-five__left",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-five__logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/resources/logo-1.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-menu-five__main-menu-box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                className: "mobile-nav__toggler",
                                                onClick: handleMobileMenu,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-bars"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-menu-five__right",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-five__search-box",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "main-menu-five__search search-toggler icon-search",
                                                    onClick: handlePopup
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-five__btn-box",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    href: "contact",
                                                    className: "main-menu-five__btn thm-btn",
                                                    children: [
                                                        "Get a quote",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "icon-plus"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                handleMobileMenu: handleMobileMenu
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `stricky-header stricked-menu main-menu main-menu-five ${scroll ? "stricky-fixed" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky-header__content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu main-menu-five",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu-five__wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu-five__wrapper-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-five__left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-five__logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/resources/logo-1.png",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu-five__main-menu-box",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "mobile-nav__toggler",
                                                    onClick: handleMobileMenu,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-bars"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu-five__right",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu-five__search-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        className: "main-menu-five__search search-toggler icon-search"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu-five__btn-box",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: "contact",
                                                        className: "main-menu-five__btn thm-btn",
                                                        children: [
                                                            "Get a quote",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "icon-plus"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/header/Header6.js




function Header6({ scroll, isMobileMenu, handleMobileMenu, handlePopup }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: `main-header-six ${scroll ? "fixed-header" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    className: "main-menu main-menu-six",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-menu-six__wrapper",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "main-menu-six__wrapper-inner",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-menu-six__left",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-six__logo",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: "assets/images/resources/logo-3.png",
                                                    alt: ""
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-menu-six__main-menu-box",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                className: "mobile-nav__toggler",
                                                onClick: handleMobileMenu,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                    className: "fa fa-bars"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "main-menu-six__right",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu-six__call",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "main-menu-six__call-icon",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/icon/main-menu-comment-icon.png",
                                                        alt: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "main-menu-six__call-number",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            children: "Need Help:"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "tel:3075550133",
                                                                children: "(307) 555-0133"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                handleMobileMenu: handleMobileMenu
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `stricky-header stricked-menu main-menu main-menu-six ${scroll ? "stricky-fixed" : ""}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sticky-header__content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "main-menu main-menu-six",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "main-menu-six__wrapper",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "main-menu-six__wrapper-inner",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-six__left",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "main-menu-six__logo",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: "assets/images/resources/logo-3.png",
                                                        alt: ""
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-menu-six__main-menu-box",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "mobile-nav__toggler",
                                                    onClick: handleMobileMenu,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-bars"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(Menu, {})
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu-six__right",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "main-menu-six__call",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "main-menu-six__call-icon",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/icon/main-menu-comment-icon.png",
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "main-menu-six__call-number",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                children: "Need Help:"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "tel:3075550133",
                                                                    children: "(307) 555-0133"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer1.js


function Footer1() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "site-footer",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer__shape-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/images/shapes/site-footer-shape-1.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer__top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "site-footer__top-inner",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "100ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget__column footer-widget__about",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget__logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/footer-logo-1.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "footer-widget__about-text",
                                                    children: "Lorem ipsum dolor amet, consectetur sell adipis elit phase nibh ellentes"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "site-footer__social-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "site-footer__social-title",
                                                            children: "Follow Us"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "site-footer__social",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-facebook"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-twitter"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-link-in"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-pinterest"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "200ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget__column footer-widget__services",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget__title",
                                                        children: "Service"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget__services-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Chemical engineer"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Concreted engineer"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Roofing Constraction"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Pillar engagement"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Power supply Guid"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "300ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget__column footer-widget__news",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget__title",
                                                        children: "Latest News"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget__news-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "footer-widget__news-date",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "icon-calender"
                                                                            }),
                                                                            "October 19, 2022"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "footer-widget__news-title",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                        href: "blog-details",
                                                                        children: [
                                                                            "Market research helps",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            "businesses understand"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "footer-widget__news-date",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "icon-calender"
                                                                            }),
                                                                            "October 19, 2022"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "footer-widget__news-title",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                        href: "blog-details",
                                                                        children: [
                                                                            "Market research helps",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            "businesses understand"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "400ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget__column footer-widget__contact",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget__title",
                                                        children: "Contact"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget__contact-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-email"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "content",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "mailto:debra.holt@example.com",
                                                                            children: "debra.holt@example.com"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-location"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "content",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: "3891 Ranchview Dr. Richardson, California 62639"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-call"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "content",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "tel:7045550127",
                                                                            children: "(704) 555-0127"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer__bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "site-footer__bottom-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "site-footer__bottom-text",
                                    children: "\xa9 Starplate 2024 | All Rights Reserved"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-unstyled site-footer__bottom-menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "about",
                                                children: "Trams & Condition"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "about",
                                                children: "Privacy Policy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "contact",
                                                children: "Contact Us"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer2.js


function Footer2() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "site-footer-two",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-two__shape-1 img-bounce",
                    style: {
                        backgroundImage: "url(assets/images/shapes/site-footer-two-shape-1.png"
                    }
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-two__top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "site-footer-two__top-inner",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "100ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-two__column footer-widget-two__about",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-two__logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/footer-logo-2.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "footer-widget-two__about-text",
                                                    children: "Lorem Ipsum is simply is dumiomy is text Lorem Ipsum is simply"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "site-footer-two__social",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-facebook"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-link-in"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-pinterest"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                    className: "footer-widget-two__about-form mc-form",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "footer-widget-two__about-form-input-box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "email",
                                                                placeholder: "Your e-mail",
                                                                name: "EMAIL"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "submit",
                                                                className: "footer-widget-two__about-btn",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon-arrow-right"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "200ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-two__column footer-widget-two__service",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-two__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-two__title",
                                                        children: "Services"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget-two__service-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "service-details",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-angle-left"
                                                                    }),
                                                                    "Prestige Construction"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "service-details",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-angle-left"
                                                                    }),
                                                                    "BuildTech Solutions"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "service-details",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-angle-left"
                                                                    }),
                                                                    "Stellar Structures"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "service-details",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-angle-left"
                                                                    }),
                                                                    "Superior Builders"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "service-details",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-angle-left"
                                                                    }),
                                                                    "BuildWise"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "300ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-two__column footer-widget-two__links",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-two__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-two__title",
                                                        children: "Useful Links"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget-two__service-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "about",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-angle-left"
                                                                    }),
                                                                    " About Us"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "team",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-angle-left"
                                                                    }),
                                                                    " Our Team"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "blog",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-angle-left"
                                                                    }),
                                                                    " Recent News"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "projects",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-angle-left"
                                                                    }),
                                                                    " Projects"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "services",
                                                                children: [
                                                                    " ",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-angle-left"
                                                                    }),
                                                                    " Our All Services"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "400ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-two__column footer-widget-two__contact",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-two__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-two__title",
                                                        children: "Contact Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget-two__contact-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-arrow-up-2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "content",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "mailto:infoname@mail.com",
                                                                            children: "infoname@mail.com"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-arrow-up-2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "content",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "tel:888123456765",
                                                                            children: "(+888) 123 456 765"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-arrow-up-2"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "content",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        children: [
                                                                            "Old city Street,Usa 1212 New ",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            " york-3500"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-two__bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "site-footer-two__bottom-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "site-footer-two__bottom-text",
                                    children: "\xa9 Starplate 2024 | All Rights Reserved"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-unstyled site-footer-two__bottom-menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "about",
                                                children: "Trams & Condition"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "about",
                                                children: "Privacy Policy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "contact",
                                                children: "Contact Us"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer3.js


function Footer3() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "site-footer-three",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-three__shape-1 float-bob-x",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/images/shapes/site-footer-three-shape-1.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-three__top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "site-footer-three__top-inner",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "100ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-three__column footer-widget-three__about",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-three__logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/footer-logo-2.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "footer-widget-three__about-text",
                                                    children: "It is a long established fact that a reader will be distracted"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                    className: "footer-widget-three__about-form mc-form",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "footer-widget-three__about-form-input-box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "email",
                                                                placeholder: "Your mail address",
                                                                name: "EMAIL"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "submit",
                                                                className: "footer-widget-three__about-btn",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon-paper-plane"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "site-footer-three__social",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-facebook"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-twitter"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-link-in"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-pinterest"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "200ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-three__column footer-widget-three__link",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-three__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-three__title",
                                                        children: "Quick Links"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget-three__link-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Credit industrys"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Credit Consulting"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Business Credit industry"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Finance industry"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Software development"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "300ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-three__column footer-widget-three__page",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-three__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-three__title",
                                                        children: "Page"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget-three__link-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "faq",
                                                                children: "FAQ"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "contact",
                                                                children: "Contact"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "testimonials",
                                                                children: "Testimonials"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "about",
                                                                children: "Work Process"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "gallery",
                                                                children: "Gallery"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "400ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-three__column footer-widget-three__contact",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-three__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-three__title",
                                                        children: "Contact"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget-three__contact-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-location"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "content",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "Address"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: "66 Broklyant, New York India"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-call"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "content",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "Phone Number"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "tel:0123456789101",
                                                                                children: "012 345 678 9101"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-email"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "content",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "Emai"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "mailto:abcd@gmail.com",
                                                                                children: "abcd@gmail.com"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-three__bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "site-footer-three__bottom-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "site-footer-three__bottom-text",
                                    children: "\xa9 Starplate 2024 | All Rights Reserved"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-unstyled site-footer-three__bottom-menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "about",
                                                children: "Trams & Condition"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "about",
                                                children: "Privacy Policy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "contact",
                                                children: "Contact Us"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer4.js


function Footer4() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "site-footer-four",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-four__top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "site-footer-four__top-inner",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "100ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-four__column footer-widget-four__about",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-four__logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/footer-logo-2.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "footer-widget-four__about-text",
                                                    children: "Lorem Ipsum is simply is Lorem Ipsum is simply is dumi omy"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                    className: "footer-widget-four__about-form mc-form",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "footer-widget-four__about-input-box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "email",
                                                                placeholder: "Email",
                                                                name: "EMAIL"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "submit",
                                                                className: "footer-widget-four__about-btn",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon-paper-plane"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "200ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-four__column footer-widget-four__services",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-four__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-four__title",
                                                        children: "Our Services"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget-four__services-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Progressive Projects"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Urban Builders"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Modernized Construction"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Innovation in Building"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Dynamic Developments"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "300ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-four__column footer-widget-four__link",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-four__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-four__title",
                                                        children: "Get Free Link"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget-four__link-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "about",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-dabble-arrow-right"
                                                                    }),
                                                                    "About us"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "services",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-dabble-arrow-right"
                                                                    }),
                                                                    "Service"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "projects",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-dabble-arrow-right"
                                                                    }),
                                                                    "Portfolio"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "team",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-dabble-arrow-right"
                                                                    }),
                                                                    "Team"
                                                                ]
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                href: "about",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-dabble-arrow-right"
                                                                    }),
                                                                    "Cta"
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "400ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-four__column footer-widget-four__contact",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-four__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-four__title",
                                                        children: "Contact with us"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget-four__contact-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-call"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "tel:6295550129",
                                                                        children: "(629) 555-0129"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-email"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                        href: "mailto:info@example.com",
                                                                        children: "info@example.com"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-location"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "6391 Elgin St. Celina,10299"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "site-footer-four__social",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-facebook"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-Frame"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-instagram"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-pinterest"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-four__bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "site-footer-four__bottom-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "site-footer-four__bottom-text",
                                    children: "\xa9 Starplate 2024 | All Rights Reserved"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-unstyled site-footer-four__bottom-menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "about",
                                                children: "Trams & Condition"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "about",
                                                children: "Privacy Policy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "contact",
                                                children: "Contact Us"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer5.js


function Footer5() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "site-footer-five",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-five__shape-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/images/shapes/site-footer-five-shape-1.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-five__shape-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/images/shapes/site-footer-five-shape-2.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-five__top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "site-footer-five__top-inner",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "100ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-five__column footer-widget-five__about",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-five__logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/footer-logo-2.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "footer-widget-five__about-text",
                                                    children: "It is a long established ft that a will being li distracted by the content of amj page ghjkl when looking"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "site-footer-five__social",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-facebook"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-Frame"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-instagram"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                className: "icon-pinterest"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "200ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-five__column footer-widget-five__services",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-five__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-five__title",
                                                        children: "More Service"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget-five__services-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Cement mixing"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Plumbing Installation"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Building Renovation"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Pixel Craft"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Elite Structures"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "300ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-five__column footer-widget-five__contact",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-five__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-five__title",
                                                        children: "Contact"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget-five__contact-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Requesting A Call:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "tel:6295550129",
                                                                    children: "(629) 555-0129"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    children: "Our E-mail:"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "mailto:info@example.com",
                                                                    children: "info@example.com"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "400ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget-five__column footer-widget-five__newsletter",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget-five__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget-five__title",
                                                        children: "Newsletter"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "footer-widget-five__newsletter-text",
                                                    children: "It is a long established ft that a will being li distracted content "
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                    className: "footer-widget-five__newsletter-form mc-form",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "footer-widget-five__newsletter-input-box",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                type: "email",
                                                                placeholder: "Email",
                                                                name: "EMAIL"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                type: "submit",
                                                                className: "footer-widget-five__newsletter-btn",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "icon-paper-plane"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer-five__bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "site-footer-five__bottom-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "site-footer-five__bottom-text",
                                    children: "\xa9 Starplate 2024 | All Rights Reserved"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-unstyled site-footer-five__bottom-menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "about",
                                                children: "Trams & Condition"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "about",
                                                children: "Privacy Policy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "contact",
                                                children: "Contact Us"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer/Footer6.js


function Footer6() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "site-footer",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer__shape-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/images/shapes/site-footer-shape-1.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer__top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "site-footer__top-inner",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "100ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget__column footer-widget__about",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget__logo",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "assets/images/resources/footer-logo-1.png",
                                                            alt: ""
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "footer-widget__about-text",
                                                    children: "Lorem ipsum dolor amet, consectetur sell adipis elit phase nibh ellentes"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "site-footer__social-box",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                            className: "site-footer__social-title",
                                                            children: "Follow Us"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "site-footer__social",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-facebook"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-twitter"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-link-in"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "#",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "icon-pinterest"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "200ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget__column footer-widget__services",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget__title",
                                                        children: "Service"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget__services-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Chemical engineer"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Concreted engineer"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Roofing Constraction"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Pillar engagement"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "service-details",
                                                                children: "Power supply Guid"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "300ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget__column footer-widget__news",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget__title",
                                                        children: "Latest News"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget__news-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "footer-widget__news-date",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "icon-calender"
                                                                            }),
                                                                            "October 19, 2022"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "footer-widget__news-title",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                        href: "blog-details",
                                                                        children: [
                                                                            "Market research helps",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            "businesses understand"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "footer-widget__news-date",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                className: "icon-calender"
                                                                            }),
                                                                            "October 19, 2022"
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    className: "footer-widget__news-title",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                                        href: "blog-details",
                                                                        children: [
                                                                            "Market research helps",
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                                            "businesses understand"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xl-3 col-lg-6 col-md-6 wow fadeInUp",
                                        "data-wow-delay": "400ms",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "footer-widget__column footer-widget__contact",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "footer-widget__title-box",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                        className: "footer-widget__title",
                                                        children: "Contact"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    className: "footer-widget__contact-list list-unstyled",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-email"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "content",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "mailto:debra.holt@example.com",
                                                                            children: "debra.holt@example.com"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-location"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "content",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: "3891 Ranchview Dr. Richardson, California 62639"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        className: "icon-call"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "content",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: "tel:7045550127",
                                                                            children: "(704) 555-0127"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "site-footer__bottom",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "site-footer__bottom-inner",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "site-footer__bottom-text",
                                    children: "\xa9 Starplate 2023 | All Rights Reserved"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: "list-unstyled site-footer__bottom-menu",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "about",
                                                children: "Trams & Condition"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "about",
                                                children: "Privacy Policy"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "contact",
                                                children: "Contact Us"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/Layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


















function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = (0,react_.useState)(0);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = (0,react_.useState)(false);
    const handleMobileMenu = ()=>{
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible");
    };
    // Popup
    const [isPopup, setPopup] = (0,react_.useState)(false);
    const handlePopup = ()=>setPopup(!isPopup);
    // Sidebar
    const [isSidebar, setSidebar] = (0,react_.useState)(false);
    const handleSidebar = ()=>setSidebar(!isSidebar);
    (0,react_.useEffect)(()=>{
        const WOW = __webpack_require__(72996);
        window.wow = new WOW.WOW({
            live: false
        });
        window.wow.init();
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(DataBg, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `page-wrapper ${wrapperCls ? wrapperCls : ""}`,
                id: "#top",
                children: [
                    !headerStyle && /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    headerStyle == 1 ? /*#__PURE__*/ jsx_runtime_.jsx(Header1, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 2 ? /*#__PURE__*/ jsx_runtime_.jsx(Header2, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 3 ? /*#__PURE__*/ jsx_runtime_.jsx(Header3, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 4 ? /*#__PURE__*/ jsx_runtime_.jsx(Header4, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 5 ? /*#__PURE__*/ jsx_runtime_.jsx(Header5, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    headerStyle == 6 ? /*#__PURE__*/ jsx_runtime_.jsx(Header6, {
                        scroll: scroll,
                        isMobileMenu: isMobileMenu,
                        handleMobileMenu: handleMobileMenu,
                        handlePopup: handlePopup,
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }) : null,
                    /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {
                        isSidebar: isSidebar,
                        handleSidebar: handleSidebar
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(SearchPopup, {
                        isPopup: isPopup,
                        handlePopup: handlePopup
                    }),
                    breadcrumbTitle && /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumb, {
                        breadcrumbTitle: breadcrumbTitle
                    }),
                    children,
                    !footerStyle && /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {}),
                    footerStyle == 1 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer1, {}) : null,
                    footerStyle == 2 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer2, {}) : null,
                    footerStyle == 3 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer3, {}) : null,
                    footerStyle == 4 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer4, {}) : null,
                    footerStyle == 5 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer5, {}) : null,
                    footerStyle == 6 ? /*#__PURE__*/ jsx_runtime_.jsx(Footer6, {}) : null
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BackToTop, {
                scroll: scroll
            })
        ]
    });
}


/***/ }),

/***/ 95764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62109);
/* harmony import */ var _node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var public_assets_css_elitecons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24519);
/* harmony import */ var public_assets_css_elitecons_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_elitecons_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var public_assets_css_elitecons_responsive_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69749);
/* harmony import */ var public_assets_css_elitecons_responsive_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(public_assets_css_elitecons_responsive_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56279);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43986);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88368);
/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85485);
/* harmony import */ var _lib_font__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_lib_font__WEBPACK_IMPORTED_MODULE_7__);





// import "swiper/css/navigation"



const metadata = {
    title: "Elitecons",
    description: "React Next Js Construction Template"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        className: `${(_lib_font__WEBPACK_IMPORTED_MODULE_7___default().variable)}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: children
        })
    });
}


/***/ }),

/***/ 40537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loading)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./components/elements/Preloader.js

function Preloader() {
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "loader-wrap",
            children: /*#__PURE__*/ _jsx("div", {
                className: "preloader",
                children: /*#__PURE__*/ _jsx("div", {
                    id: "handle-preloader",
                    className: "handle-preloader",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "animation-preloader",
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: "spinner"
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "txt-loading",
                                children: [
                                    /*#__PURE__*/ _jsx("span", {
                                        "data-text-preloader": "E",
                                        className: "letters-loading",
                                        children: "E"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        "data-text-preloader": "L",
                                        className: "letters-loading",
                                        children: "L"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        "data-text-preloader": "I",
                                        className: "letters-loading",
                                        children: "I"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        "data-text-preloader": "E",
                                        className: "letters-loading",
                                        children: "E"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        "data-text-preloader": "C",
                                        className: "letters-loading",
                                        children: "C"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        "data-text-preloader": "O",
                                        className: "letters-loading",
                                        children: "O"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        "data-text-preloader": "N",
                                        className: "letters-loading",
                                        children: "N"
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        "data-text-preloader": "S",
                                        className: "letters-loading",
                                        children: "S"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./app/loading.js


function loading() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
}


/***/ }),

/***/ 52987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31841);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



function Error404() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
            headerStyle: 6,
            footerStyle: 6,
            breadcrumbTitle: "404 Error",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "error-page",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-xl-12",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "error-page__inner",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "error-page__title-box",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: "error-page__title",
                                                children: "404"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "error-page__tagline",
                                            children: "Sorry we can't find that page!"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "error-page__text",
                                            children: "The page you are looking for was never existed."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                            className: "error-page__form",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "error-page__form-input",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "search",
                                                        placeholder: "Search here"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "submit",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                            className: "icon-search"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/",
                                            className: "thm-btn error-page__btn",
                                            children: "Back to home"
                                        })
                                    ]
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "cta-one",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "cta-one__inner",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cta-one__shape-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "assets/images/shapes/cta-one-shape-1.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cta-one__img",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "assets/images/resources/cta-one-img.png",
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "cta-one__title",
                                    children: [
                                        "Craftin digital experiences",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " With that inspire"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cta-one__from-box",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "cta-one__form",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "cta-one__input-box",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "email",
                                                    placeholder: "Your E-mail",
                                                    name: "email"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                type: "submit",
                                                className: "cta-one__btn thm-btn",
                                                children: "Subscribe Us"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 31841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Work\arabia team\elitecons pack\elitecons\components\layout\Layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 63127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)("/teamArabia", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 69749:
/***/ (() => {



/***/ }),

/***/ 24519:
/***/ (() => {



/***/ })

};
;