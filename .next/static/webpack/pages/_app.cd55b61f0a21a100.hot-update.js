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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ \"./src/colors.tsx\");\n\n\n\n//const fonts = { mono: `'Sora', normal` };\nvar breakpoints = (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.createBreakpoints)({\n    sm: \"40em\",\n    md: \"52em\",\n    lg: \"64em\",\n    xl: \"80em\"\n});\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.extendTheme)({\n    fonts: {\n        heading: \"Open Sans\",\n        body: \"Raleway\"\n    },\n    styles: {\n        global: {\n            \"html, body\": {\n                margin: 0,\n                padding: 0,\n                fontFamily: \"Sora\",\n                backgroundColor: \"black\",\n                overflowX: \"hidden\"\n            },\n            a: {\n                textDecoration: \"none\",\n                color: \"white\"\n            },\n            button: {\n                border: 0\n            },\n            \"h1, h2, h3, h4, h5, h6\": {\n                margin: 0\n            },\n            ul: {\n                padding: 0\n            },\n            strong: {\n                color: _colors__WEBPACK_IMPORTED_MODULE_0__.Colors.brandMain\n            }\n        }\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBK0M7QUFDWTtBQUN6QjtBQUVsQywyQ0FBMkM7QUFFM0MsSUFBTUcsV0FBVyxHQUFHRix5RUFBaUIsQ0FBQztJQUNwQ0csRUFBRSxFQUFFLE1BQU07SUFDVkMsRUFBRSxFQUFFLE1BQU07SUFDVkMsRUFBRSxFQUFFLE1BQU07SUFDVkMsRUFBRSxFQUFFLE1BQU07Q0FDWCxDQUFDO0FBRUYsSUFBTUMsS0FBSyxHQUFHUiw2REFBVyxDQUFDO0lBQ3hCUyxLQUFLLEVBQUU7UUFDTEMsT0FBTyxFQUFFLFdBQVc7UUFDcEJDLElBQUksRUFBRSxTQUFTO0tBQ2hCO0lBQ0RDLE1BQU0sRUFBRTtRQUNOQyxNQUFNLEVBQUU7WUFDTixZQUFZLEVBQUU7Z0JBQ1pDLE1BQU0sRUFBRSxDQUFDO2dCQUNUQyxPQUFPLEVBQUUsQ0FBQztnQkFDVkMsVUFBVSxFQUFFLE1BQU07Z0JBQ2xCQyxlQUFlLEVBQUUsT0FBTztnQkFDeEJDLFNBQVMsRUFBRSxRQUFRO2FBQ3BCO1lBQ0RDLENBQUMsRUFBRTtnQkFDREMsY0FBYyxFQUFFLE1BQU07Z0JBQ3RCQyxLQUFLLEVBQUUsT0FBTzthQUNmO1lBQ0RDLE1BQU0sRUFBRTtnQkFDTkMsTUFBTSxFQUFFLENBQUM7YUFDVjtZQUNELHdCQUF3QixFQUFFO2dCQUN4QlQsTUFBTSxFQUFFLENBQUM7YUFDVjtZQUNEVSxFQUFFLEVBQUU7Z0JBQ0ZULE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFDRFUsTUFBTSxFQUFFO2dCQUNOSixLQUFLLEVBQUVuQixxREFBZ0I7YUFDeEI7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVGLCtEQUFlTSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lLnRzeD83YzlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlQnJlYWtwb2ludHMgfSBmcm9tIFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiO1xyXG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tIFwiLi9jb2xvcnNcIjtcclxuXHJcbi8vY29uc3QgZm9udHMgPSB7IG1vbm86IGAnU29yYScsIG5vcm1hbGAgfTtcclxuXHJcbmNvbnN0IGJyZWFrcG9pbnRzID0gY3JlYXRlQnJlYWtwb2ludHMoe1xyXG4gIHNtOiBcIjQwZW1cIixcclxuICBtZDogXCI1MmVtXCIsXHJcbiAgbGc6IFwiNjRlbVwiLFxyXG4gIHhsOiBcIjgwZW1cIixcclxufSk7XHJcblxyXG5jb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcclxuICBmb250czoge1xyXG4gICAgaGVhZGluZzogXCJPcGVuIFNhbnNcIixcclxuICAgIGJvZHk6IFwiUmFsZXdheVwiLFxyXG4gIH0sXHJcbiAgc3R5bGVzOiB7XHJcbiAgICBnbG9iYWw6IHtcclxuICAgICAgXCJodG1sLCBib2R5XCI6IHtcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICBmb250RmFtaWx5OiBcIlNvcmFcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGE6IHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgfSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICBcImgxLCBoMiwgaDMsIGg0LCBoNSwgaDZcIjoge1xyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgfSxcclxuICAgICAgdWw6IHtcclxuICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICBzdHJvbmc6IHtcclxuICAgICAgICBjb2xvcjogQ29sb3JzLmJyYW5kTWFpbixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwiY3JlYXRlQnJlYWtwb2ludHMiLCJDb2xvcnMiLCJicmVha3BvaW50cyIsInNtIiwibWQiLCJsZyIsInhsIiwidGhlbWUiLCJmb250cyIsImhlYWRpbmciLCJib2R5Iiwic3R5bGVzIiwiZ2xvYmFsIiwibWFyZ2luIiwicGFkZGluZyIsImZvbnRGYW1pbHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvd1giLCJhIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImJ1dHRvbiIsImJvcmRlciIsInVsIiwic3Ryb25nIiwiYnJhbmRNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme.tsx\n");

/***/ })

});