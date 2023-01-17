exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 522:
/***/ ((module) => {

// Exports
module.exports = {
	"Header": "Header_Header__aK_dx",
	"formContainer": "Header_formContainer__1jKZA",
	"popUpBlurry": "Header_popUpBlurry__4ni9n",
	"popUpCongrat": "Header_popUpCongrat__clpf1"
};


/***/ }),

/***/ 399:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__nLjiQ",
	"Layer": "Home_Layer__J0hrn",
	"Container": "Home_Container__lYoBd",
	"save": "Home_save__xVDUk"
};


/***/ }),

/***/ 292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(522);
/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function Header() {
    const { 0: usernameSate , 1: setUsernameState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: isLogged , 1: setIsLogged  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: isSubscrided , 1: setIsSubscrided  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: messageWelcome , 1: setMessageWelcome  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: username , 1: setUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: usernameLogin , 1: setUsernameLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: passwordLogin , 1: setPassworLogin  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: appearCong , 1: setAppearCong  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: appearForm , 1: setAppearForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let styleFormBlurry = {};
    let styleForm = {};
    let styleFormCong = {};
    const changeBoolAppearCong = ()=>{
        setAppearForm(false);
        // styleForm={
        //   'opacity': '0',
        //   'visibility': 'hidden',
        //   'transition': 'all .3s'
        // }
        // styleFormBlurry={
        //   'opacity': '0',
        //   'visibility': 'hidden',
        //   'transition': 'all .3s'
        // }
        setAppearCong(false);
    };
    // create a function to handle the sign in
    const sIn = ()=>{
        fetch("https://backend-oussnews.vercel.app/users/inscription", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then((response)=>response.json()
        ).then((data)=>{
            console.log(data);
            if (data.result) {
                setMessageWelcome(data.message);
                // setIsSubscrided(true)
                setAppearCong(true);
            } else {
                setMessageWelcome(data.message);
                setAppearCong(true);
            // setIsSubscrided(false)
            }
        });
    };
    const connect = ()=>{
        fetch("https://backend-oussnews.vercel.app/users/connexion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: usernameLogin,
                password: passwordLogin
            })
        }).then((response)=>response.json()
        ).then((data)=>{
            console.log(data);
            if (data.result) {
                setIsLogged(true);
                setUsernameState(data.user.username);
                setMessageWelcome(data.message + " " + usernameSate);
                setAppearCong(true);
            } else {
                setIsLogged(false);
                setMessageWelcome(data.message);
                setAppearCong(true);
            }
        });
    };
    if (appearCong) {
        styleFormBlurry = {
            opacity: "1",
            visibility: "visible",
            transition: "all .3s"
        };
        styleFormCong = {
            opacity: "1",
            visibility: "visible",
            transition: "all .3s"
        };
    }
    const boolForm = ()=>{
        if (!appearForm) {
            setAppearForm(true);
        } else {
            setAppearForm(false);
        }
    };
    let popUpMessage = {};
    // if(isSubscrided){
    //   popUpMessage=(
    //     <h3>Cet utilisateur est déja inscrit</h3>
    //   )
    // }else{
    //   popUpMessage=(
    //     <h3>Vous vous êtes bien inscrit</h3>
    //   )
    // }
    if (appearForm) {
        styleForm = {
            opacity: "1",
            visibility: "visible",
            transition: "all .3s"
        };
        styleFormBlurry = {
            opacity: "1",
            visibility: "visible",
            transition: "all .3s"
        };
    }
    const deconnect = ()=>{
        setIsLogged(false);
        setAppearCong(false);
        setAppearForm(false);
    };
    if (!isLogged) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().popUpCongrat),
                    style: styleFormCong,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: messageWelcome
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: changeBoolAppearCong,
                            children: "Fermer"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    onClick: changeBoolAppearCong,
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().popUpBlurry),
                    style: styleFormBlurry
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().Header),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    children: "OUSSNEWS"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/bookmark",
                                    children: "Bookmarks"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "Recherche"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            onClick: ()=>{
                                boolForm();
                            },
                            children: "Connexion"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().formContainer),
                    style: styleForm,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "S'inscrire "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    onChange: (e)=>setUsername(e.target.value)
                                    ,
                                    value: username,
                                    placeholder: "Saissisez votre pseudo"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "password",
                                    onChange: (e)=>setPassword(e.target.value)
                                    ,
                                    value: password,
                                    placeholder: "Saissisez votre mot de passe"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>{
                                        sIn();
                                    },
                                    children: "S'inscrire"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Se connecter "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    onChange: (e)=>setUsernameLogin(e.target.value)
                                    ,
                                    value: usernameLogin,
                                    placeholder: "Saissisez votre pseudo"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "password",
                                    onChange: (e)=>setPassworLogin(e.target.value)
                                    ,
                                    value: passwordLogin,
                                    placeholder: "Saissisez votre mot de passe"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: connect,
                                    children: " Se connecter"
                                })
                            ]
                        })
                    ]
                })
            ]
        });
    } else {
        if (usernameSate.length > 10) {
            set(usernameSate.slice(0, 10) + "...");
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().popUpCongrat),
                    style: styleFormCong,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: messageWelcome
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: changeBoolAppearCong,
                            children: "Fermer"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().Header),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    children: "OUSSNEWS"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/bookmark",
                                    children: "Bookmarks"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: "Recherche"
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            onClick: deconnect,
                            children: "D\xe9connexion"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                "Bienvenue ",
                                usernameSate.substring(0, 13) + "..."
                            ]
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;