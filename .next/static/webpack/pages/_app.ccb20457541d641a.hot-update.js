"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/colors.tsx\");\n\n\n\n//const fonts = { mono: `'Sora', normal` };\nvar breakpoints = (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.createBreakpoints)({\n    sm: \"40em\",\n    md: \"52em\",\n    lg: \"64em\",\n    xl: \"80em\"\n});\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.extendTheme)({\n    fonts: {\n        heading: \"Sora\",\n        body: \"Sora\"\n    },\n    styles: {\n        global: {\n            \"html, body\": {\n                margin: 0,\n                padding: 0,\n                fontFamily: \"Sora\",\n                backgroundColor: \"black\",\n                overflowX: \"hidden\"\n            },\n            a: {\n                textDecoration: \"none\",\n                color: \"white\"\n            },\n            button: {\n                border: 0\n            },\n            \"h1, h2, h3, h4, h5, h6\": {\n                margin: 0\n            },\n            ul: {\n                padding: 0\n            },\n            strong: {\n                color: _colors__WEBPACK_IMPORTED_MODULE_0__.Colors.brandMain\n            }\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBK0M7QUFDWTtBQUN6QjtBQUVsQywyQ0FBMkM7QUFFM0MsSUFBTUcsV0FBVyxHQUFHRix5RUFBaUIsQ0FBQztJQUNwQ0csRUFBRSxFQUFFLE1BQU07SUFDVkMsRUFBRSxFQUFFLE1BQU07SUFDVkMsRUFBRSxFQUFFLE1BQU07SUFDVkMsRUFBRSxFQUFFLE1BQU07Q0FDWCxDQUFDO0FBRUYsSUFBTUMsS0FBSyxHQUFHUiw2REFBVyxDQUFDO0lBQ3hCUyxLQUFLLEVBQUU7UUFDTEMsT0FBTyxFQUFFLE1BQU07UUFDZkMsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNEQyxNQUFNLEVBQUU7UUFDTkMsTUFBTSxFQUFFO1lBQ04sWUFBWSxFQUFFO2dCQUNaQyxNQUFNLEVBQUUsQ0FBQztnQkFDVEMsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZDLFVBQVUsRUFBRSxNQUFNO2dCQUNsQkMsZUFBZSxFQUFFLE9BQU87Z0JBQ3hCQyxTQUFTLEVBQUUsUUFBUTthQUNwQjtZQUNEQyxDQUFDLEVBQUU7Z0JBQ0RDLGNBQWMsRUFBRSxNQUFNO2dCQUN0QkMsS0FBSyxFQUFFLE9BQU87YUFDZjtZQUNEQyxNQUFNLEVBQUU7Z0JBQ05DLE1BQU0sRUFBRSxDQUFDO2FBQ1Y7WUFDRCx3QkFBd0IsRUFBRTtnQkFDeEJULE1BQU0sRUFBRSxDQUFDO2FBQ1Y7WUFDRFUsRUFBRSxFQUFFO2dCQUNGVCxPQUFPLEVBQUUsQ0FBQzthQUNYO1lBQ0RVLE1BQU0sRUFBRTtnQkFDTkosS0FBSyxFQUFFbkIscURBQWdCO2FBQ3hCO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFRiwrREFBZU0sS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy90aGVtZS50c3g/N2M5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJyZWFrcG9pbnRzIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIjtcclxuaW1wb3J0IHsgQ29sb3JzIH0gZnJvbSBcIi4vY29sb3JzXCI7XHJcblxyXG4vL2NvbnN0IGZvbnRzID0geyBtb25vOiBgJ1NvcmEnLCBub3JtYWxgIH07XHJcblxyXG5jb25zdCBicmVha3BvaW50cyA9IGNyZWF0ZUJyZWFrcG9pbnRzKHtcclxuICBzbTogXCI0MGVtXCIsXHJcbiAgbWQ6IFwiNTJlbVwiLFxyXG4gIGxnOiBcIjY0ZW1cIixcclxuICB4bDogXCI4MGVtXCIsXHJcbn0pO1xyXG5cclxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XHJcbiAgZm9udHM6IHtcclxuICAgIGhlYWRpbmc6IFwiU29yYVwiLFxyXG4gICAgYm9keTogXCJTb3JhXCIsXHJcbiAgfSxcclxuICBzdHlsZXM6IHtcclxuICAgIGdsb2JhbDoge1xyXG4gICAgICBcImh0bWwsIGJvZHlcIjoge1xyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiU29yYVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICAgICAgfSxcclxuICAgICAgYToge1xyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICB9LFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIFwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNlwiOiB7XHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICB1bDoge1xyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0cm9uZzoge1xyXG4gICAgICAgIGNvbG9yOiBDb2xvcnMuYnJhbmRNYWluLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xyXG4iXSwibmFtZXMiOlsiZXh0ZW5kVGhlbWUiLCJjcmVhdGVCcmVha3BvaW50cyIsIkNvbG9ycyIsImJyZWFrcG9pbnRzIiwic20iLCJtZCIsImxnIiwieGwiLCJ0aGVtZSIsImZvbnRzIiwiaGVhZGluZyIsImJvZHkiLCJzdHlsZXMiLCJnbG9iYWwiLCJtYXJnaW4iLCJwYWRkaW5nIiwiZm9udEZhbWlseSIsImJhY2tncm91bmRDb2xvciIsIm92ZXJmbG93WCIsImEiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiYnV0dG9uIiwiYm9yZGVyIiwidWwiLCJzdHJvbmciLCJicmFuZE1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme.tsx\n");

/***/ })

});