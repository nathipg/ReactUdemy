webpackHotUpdate("static/development/pages/auth.js",{

/***/ "./pages/auth/index.js":
/*!*****************************!*\
  !*** ./pages/auth/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/User */ "./components/User.js");

var _jsxFileName = "/home/venturus/Documents/git/ReactUdemy/next-js/pages/auth/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var AuthIndexPage = function AuthIndexPage(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "The Auth Index Page - ", props.appName), __jsx(_components_User__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "Max",
    age: 28,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

AuthIndexPage.getInitialProps = function (context) {
  var promise = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    setTimeout(function () {
      resolve({
        appName: 'Super App'
      });
    }, 1000);
  });
  return promise;
};

/* harmony default export */ __webpack_exports__["default"] = (AuthIndexPage);

/***/ })

})
//# sourceMappingURL=auth.js.4d050eba9cff84f2ca32.hot-update.js.map