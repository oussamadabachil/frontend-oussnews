/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers_bookmark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/bookmark */ \"./reducers/bookmark.js\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/integration/react */ \"redux-persist/integration/react\");\n/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst reducerLocal = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({\n    bookmark: _reducers_bookmark__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n});\nconst persistConfig = {\n    key: \"oussnews\",\n    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_8___default())\n};\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({\n    reducer: (0,redux_persist__WEBPACK_IMPORTED_MODULE_6__.persistReducer)(persistConfig, reducerLocal),\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: false\n        })\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_6__.persistStore)(store);\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n            store: store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__.PersistGate, {\n                persistor: persistor,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"OUSSNEWS\"\n                        }, void 0, false, {\n                            fileName: \"/Users/devworkdin/Desktop/MesProjets/frontend-oussnews/pages/_app.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/devworkdin/Desktop/MesProjets/frontend-oussnews/pages/_app.js\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/devworkdin/Desktop/MesProjets/frontend-oussnews/pages/_app.js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/devworkdin/Desktop/MesProjets/frontend-oussnews/pages/_app.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/devworkdin/Desktop/MesProjets/frontend-oussnews/pages/_app.js\",\n            lineNumber: 30,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ0Y7QUFFVTtBQUMyQjtBQUN0QjtBQUdpQjtBQUNDO0FBQ2Q7QUFHaEQsTUFBTVMsWUFBWSxHQUFHUCxpRUFBZSxDQUFDO0lBQUNFLFFBQVE7Q0FBQyxDQUFDO0FBQ2hELE1BQU1NLGFBQWEsR0FBRztJQUFDQyxHQUFHLEVBQUMsVUFBVTtJQUFHSCxPQUFPO0NBQUM7QUFHaEQsTUFBTUksS0FBSyxHQUFHVCxnRUFBYyxDQUFDO0lBQzNCVSxPQUFPLEVBQUNQLDZEQUFjLENBQUNJLGFBQWEsRUFBQ0QsWUFBWSxDQUFDO0lBQ2xESyxVQUFVLEVBQUUsQ0FBQ0Msb0JBQW9CLEdBQUtBLG9CQUFvQixDQUFDO1lBQUVDLGlCQUFpQixFQUFFLEtBQUs7U0FBRSxDQUFDO0NBRXpGLENBQUM7QUFFRixNQUFNQyxTQUFTLEdBQUdaLDJEQUFZLENBQUNPLEtBQUssQ0FBQztBQUdyQyxTQUFTTSxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsRUFBRTtJQUNyQyxxQkFDRTtrQkFDQSw0RUFBQ25CLGlEQUFRO1lBQUNXLEtBQUssRUFBRUEsS0FBSztzQkFDdEIsNEVBQUNMLHdFQUFXO2dCQUFDVSxTQUFTLEVBQUVBLFNBQVM7O2tDQUMvQiw4REFBQ2pCLGtEQUFJO2tDQUNILDRFQUFDcUIsT0FBSztzQ0FBQyxVQUFROzs7OztnQ0FBUTs7Ozs7NEJBQ2xCO2tDQUNQLDhEQUFDRixTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7OzRCQUFJOzs7Ozs7b0JBQ2Q7Ozs7O2dCQUNIO3FCQUNWLENBQ0g7Q0FDSDtBQUVELGlFQUFlRixHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdGVtcGxhdGUvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBib29rbWFyayBmcm9tICcuLi9yZWR1Y2Vycy9ib29rbWFyayc7XG5cblxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlLCBwZXJzaXN0UmVkdWNlciB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xuXG5cbmNvbnN0IHJlZHVjZXJMb2NhbCA9IGNvbWJpbmVSZWR1Y2Vycyh7Ym9va21hcmt9KVxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtrZXk6J291c3NuZXdzJyAsIHN0b3JhZ2V9XG5cblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gIHJlZHVjZXI6cGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZyxyZWR1Y2VyTG9jYWwpLFxuICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKHsgc2VyaWFsaXphYmxlQ2hlY2s6IGZhbHNlIH0pLCAgXG5cbn0pXG5cbmNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XG5cblxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFBlcnNpc3RHYXRlIHBlcnNpc3Rvcj17cGVyc2lzdG9yfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T1VTU05FV1M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9QZXJzaXN0R2F0ZT5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cblxuICJdLCJuYW1lcyI6WyJIZWFkIiwiUHJvdmlkZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJjb25maWd1cmVTdG9yZSIsImJvb2ttYXJrIiwicGVyc2lzdFN0b3JlIiwicGVyc2lzdFJlZHVjZXIiLCJQZXJzaXN0R2F0ZSIsInN0b3JhZ2UiLCJyZWR1Y2VyTG9jYWwiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwic3RvcmUiLCJyZWR1Y2VyIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwic2VyaWFsaXphYmxlQ2hlY2siLCJwZXJzaXN0b3IiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/bookmark.js":
/*!******************************!*\
  !*** ./reducers/bookmark.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToBookmark\": () => (/* binding */ addToBookmark),\n/* harmony export */   \"bookmarkSlice\": () => (/* binding */ bookmarkSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    value: []\n};\nconst bookmarkSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"bookmark\",\n    initialState,\n    reducers: {\n        addToBookmark: (state, action)=>{\n            state.value.push(action.payload);\n        }\n    }\n});\nconst { addToBookmark  } = bookmarkSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookmarkSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1Y2Vycy9ib29rbWFyay5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxZQUFZLEdBQUc7SUFDcEJDLEtBQUssRUFBRSxFQUFFO0NBQ1Q7QUFHTSxNQUFNQyxhQUFhLEdBQUdILDZEQUFXLENBQUM7SUFDeENJLElBQUksRUFBRSxVQUFVO0lBQ2hCSCxZQUFZO0lBQ1pJLFFBQVEsRUFBRTtRQUNUQyxhQUFhLEVBQUUsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEdBQUs7WUFFeEJELEtBQUssQ0FBQ0wsS0FBSyxDQUFDTyxJQUFJLENBQUNELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLENBQUM7U0FDcEM7S0FJUDtDQUNELENBQUMsQ0FBQztBQUVJLE1BQU0sRUFBQ0osYUFBYSxHQUFDLEdBQUdILGFBQWEsQ0FBQ1EsT0FBTyxDQUFDO0FBQ3JELGlFQUFlUixhQUFhLENBQUNTLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10ZW1wbGF0ZS8uL3JlZHVjZXJzL2Jvb2ttYXJrLmpzP2I1NjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuXHR2YWx1ZTogW10sXG59O1xuXG5cbmV4cG9ydCBjb25zdCBib29rbWFya1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuXHRuYW1lOiAnYm9va21hcmsnLFxuXHRpbml0aWFsU3RhdGUsXG5cdHJlZHVjZXJzOiB7XG5cdFx0YWRkVG9Cb29rbWFyazogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZS5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgICAgfSwgXG4gICAgICAgXG5cbiAgICBcblx0fSxcbn0pO1xuXG5leHBvcnQgY29uc3Qge2FkZFRvQm9va21hcmt9ID0gYm9va21hcmtTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgYm9va21hcmtTbGljZS5yZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidmFsdWUiLCJib29rbWFya1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVG9Cb29rbWFyayIsInN0YXRlIiwiYWN0aW9uIiwicHVzaCIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/bookmark.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();