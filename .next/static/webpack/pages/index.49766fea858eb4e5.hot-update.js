"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Advantages/phaseCard.tsx":
/*!*************************************************!*\
  !*** ./src/components/Advantages/phaseCard.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PhaseCard\": function() { return /* binding */ PhaseCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar PhaseCard = function(param) {\n    var isActive = param.isActive, image = param.image;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        children: isActive ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\patry\\\\Desktop\\\\praca\\\\hashup-landing-v3\\\\src\\\\components\\\\Advantages\\\\phaseCard.tsx\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n            flexDirection: \"column\",\n            color: \"#9D9D9D\",\n            alignItems: \"center\",\n            justifyContent: \"space-between\",\n            p: \"0px\",\n            gridGap: \"10px\",\n            children: image\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\patry\\\\Desktop\\\\praca\\\\hashup-landing-v3\\\\src\\\\components\\\\Advantages\\\\phaseCard.tsx\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\patry\\\\Desktop\\\\praca\\\\hashup-landing-v3\\\\src\\\\components\\\\Advantages\\\\phaseCard.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_c = PhaseCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PhaseCard);\nvar _c;\n$RefreshReg$(_c, \"PhaseCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZHZhbnRhZ2VzL3BoYXNlQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQThDO0FBQ0Q7QUFPdEMsSUFBTUUsU0FBUyxHQUFtQixnQkFBeUI7UUFBdEJDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7SUFDekQscUJBQ0UsOERBQUNKLGtEQUFJO2tCQUNGRyxRQUFRLGlCQUNQLDhEQUFDSCxrREFBSTs7OztpQkFBUSxpQkFFYiw4REFBQ0Esa0RBQUk7WUFDSEssYUFBYSxFQUFDLFFBQVE7WUFDdEJDLEtBQUssRUFBQyxTQUFTO1lBQ2ZDLFVBQVUsRUFBQyxRQUFRO1lBQ25CQyxjQUFjLEVBQUMsZUFBZTtZQUM5QkMsQ0FBQyxFQUFDLEtBQUs7WUFDUEMsT0FBTyxFQUFDLE1BQU07c0JBY2JOLEtBQUs7Ozs7O2lCQUNEOzs7OzthQUVKLENBQ1A7Q0FDSCxDQUFDO0FBL0JXRixLQUFBQSxTQUFTO0FBaUN0QiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkdmFudGFnZXMvcGhhc2VDYXJkLnRzeD9lMmY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsZXgsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGQyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIElQaGFzZUNhcmQge1xyXG4gIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gIGltYWdlPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGhhc2VDYXJkOiBGQzxJUGhhc2VDYXJkPiA9ICh7IGlzQWN0aXZlLCBpbWFnZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4PlxyXG4gICAgICB7aXNBY3RpdmUgPyAoXHJcbiAgICAgICAgPEZsZXg+PC9GbGV4PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxGbGV4XHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgIGNvbG9yPVwiIzlEOUQ5RFwiXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICBwPVwiMHB4XCJcclxuICAgICAgICAgIGdyaWRHYXA9XCIxMHB4XCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogPFRleHQgZm9udFNpemU9XCIyNXB4XCIgZm9udFdlaWdodD1cIjcwMFwiPlxyXG4gICAgICAgICAgICAje251bX1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMjVweFwiXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCIzMDBcIlxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0PntsYWJlbDF9PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dD57bGFiZWwyfTwvVGV4dD5cclxuICAgICAgICAgIDwvRmxleD4gKi99XHJcbiAgICAgICAgICB7aW1hZ2V9XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICApfVxyXG4gICAgPC9GbGV4PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaGFzZUNhcmQ7XHJcbiJdLCJuYW1lcyI6WyJGbGV4IiwiUmVhY3QiLCJQaGFzZUNhcmQiLCJpc0FjdGl2ZSIsImltYWdlIiwiZmxleERpcmVjdGlvbiIsImNvbG9yIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicCIsImdyaWRHYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Advantages/phaseCard.tsx\n");

/***/ })

});