"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [desc, setDesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setTask([\n            ...task,\n            {\n                title,\n                desc\n            }\n        ]);\n        setTitle('');\n        setDesc('');\n        task && console.log(task);\n    };\n    let renderTask = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"m-4\",\n        children: \"No Task Available!\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n        lineNumber: 17,\n        columnNumber: 20\n    }, undefined);\n    if (task.length > 0) {\n        renderTask = task.map((t, i)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-around mb-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: i + 1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"text-xl font-semibold\",\n                            children: t.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            className: \"text-xl font-semibold\",\n                            children: t.desc\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-red-500 text-white rounded px-3 py-1\",\n                            onClick: ()=>removeTask(i),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, i, false, {\n                fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                lineNumber: 21,\n                columnNumber: 14\n            }, undefined);\n        });\n    }\n    const removeTask = (id)=>{\n        //  const copyTask = task.filter((t,i)=>{\n        //   if(i !== id){\n        //     return t;\n        //   }\n        //  })\n        let copyTask = task;\n        copyTask.splice(id, 1);\n        setTask(copyTask);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"bg-black text-white p-5 text-5xl font-bold text-center\",\n                children: \"My Todo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"text-2xl text-black bg-zinc-200 border-zinc-800 border-4 m-8 px-4 py-2\",\n                        placeholder: \"Enter New Title...\",\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                        lineNumber: 47,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"text-2xl text-black bg-zinc-200 border-zinc-800 border-4 m-8 px-4 py-2\",\n                        placeholder: \"Enter New Description...\",\n                        value: desc,\n                        onChange: (e)=>setDesc(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                        lineNumber: 54,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-white bg-zinc-500 rounded px-4 py-3 text-2xl font-bold m-5\",\n                        children: \"Add Task\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                        lineNumber: 60,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                lineNumber: 46,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                lineNumber: 62,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: renderTask\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                    lineNumber: 64,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                lineNumber: 63,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"T+HBcBA1l1Tp6qmcGqNACNohMbY=\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNvQztBQUVwQyxNQUFNRSxPQUFPOztJQUNYLE1BQU0sQ0FBQ0MsT0FBTUMsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNsQyxNQUFNLENBQUNJLE1BQUtDLFFBQVEsR0FBR0wsK0NBQVFBLENBQUM7SUFDaEMsTUFBTSxDQUFDTSxNQUFLQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFFbEMsTUFBTVEsZUFBZSxDQUFDQztRQUNwQkEsRUFBRUMsY0FBYztRQUNoQkgsUUFBUTtlQUFJRDtZQUFLO2dCQUFDSjtnQkFBTUU7WUFBSTtTQUFFO1FBQzlCRCxTQUFTO1FBQ1RFLFFBQVE7UUFDUkMsUUFBUUssUUFBUUMsR0FBRyxDQUFDTjtJQUN0QjtJQUVBLElBQUlPLDJCQUFhLDhEQUFDQztRQUFHQyxXQUFVO2tCQUFNOzs7Ozs7SUFFckMsSUFBR1QsS0FBS1UsTUFBTSxHQUFHLEdBQUU7UUFDakJILGFBQWFQLEtBQUtXLEdBQUcsQ0FBQyxDQUFDQyxHQUFFQztZQUN2QixxQkFBTyw4REFBQ0M7MEJBQ04sNEVBQUNDO29CQUFJTixXQUFVOztzQ0FDYiw4REFBQ087c0NBQU1ILElBQUU7Ozs7OztzQ0FDVCw4REFBQ0k7NEJBQUdSLFdBQVU7c0NBQXlCRyxFQUFFaEIsS0FBSzs7Ozs7O3NDQUM5Qyw4REFBQ3NCOzRCQUFHVCxXQUFVO3NDQUF5QkcsRUFBRWQsSUFBSTs7Ozs7O3NDQUM3Qyw4REFBQ3FCOzRCQUFPVixXQUFVOzRCQUEwQ1csU0FBUyxJQUFJQyxXQUFXUjtzQ0FBSTs7Ozs7Ozs7Ozs7O2VBTDVFQTs7Ozs7UUFRbEI7SUFDRjtJQUVBLE1BQU1RLGFBQWEsQ0FBQ0M7UUFDcEIseUNBQXlDO1FBQ3pDLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsTUFBTTtRQUNOLE1BQU07UUFDTCxJQUFJQyxXQUFXdkI7UUFDZnVCLFNBQVNDLE1BQU0sQ0FBQ0YsSUFBRztRQUNuQnJCLFFBQVFzQjtJQUNUO0lBRUEscUJBQ0M7OzBCQUNBLDhEQUFDRTtnQkFBR2hCLFdBQVU7MEJBQXlEOzs7Ozs7MEJBQ3ZFLDhEQUFDaUI7Z0JBQUtDLFVBQVV6Qjs7a0NBQ2YsOERBQUMwQjt3QkFDREMsTUFBSzt3QkFDTHBCLFdBQVU7d0JBQ1ZxQixhQUFZO3dCQUNaQyxPQUFPbkM7d0JBQ1BvQyxVQUFVLENBQUM3QixJQUFJTixTQUFTTSxFQUFFOEIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7a0NBRXRDLDhEQUFDSDt3QkFDREMsTUFBSzt3QkFDTHBCLFdBQVU7d0JBQXlFcUIsYUFBWTt3QkFDL0ZDLE9BQU9qQzt3QkFDUGtDLFVBQVUsQ0FBQzdCLElBQUlKLFFBQVFJLEVBQUU4QixNQUFNLENBQUNGLEtBQUs7Ozs7OztrQ0FFckMsOERBQUNaO3dCQUFPVixXQUFVO2tDQUFrRTs7Ozs7Ozs7Ozs7OzBCQUVyRiw4REFBQ3lCOzs7OzswQkFDRCw4REFBQ25COzBCQUNBLDRFQUFDb0I7OEJBRUc1Qjs7Ozs7Ozs7Ozs7OztBQU1SO0dBcEVNWjtBQXNFTixpRUFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwYXRoYVxcdG9kby1saXN0XFxhcHBcXHBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuY29uc3QgcGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3RpdGxlLHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Rlc2Msc2V0RGVzY10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0YXNrLHNldFRhc2tdID0gdXNlU3RhdGUoW10pO1xuICBcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFRhc2soWy4uLnRhc2sse3RpdGxlLGRlc2N9XSk7XG4gICAgc2V0VGl0bGUoJycpO1xuICAgIHNldERlc2MoJycpO1xuICAgIHRhc2sgJiYgY29uc29sZS5sb2codGFzaylcbiAgfVxuIFxuICBsZXQgcmVuZGVyVGFzayA9IDxoMiBjbGFzc05hbWU9J20tNCc+Tm8gVGFzayBBdmFpbGFibGUhPC9oMj5cblxuICBpZih0YXNrLmxlbmd0aCA+IDApe1xuICAgIHJlbmRlclRhc2sgPSB0YXNrLm1hcCgodCxpKT0+e1xuICAgICAgcmV0dXJuIDxsaSBrZXk9e2l9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWFyb3VuZCBtYi01Jz5cbiAgICAgICAgICA8c3Bhbj57aSsxfTwvc3Bhbj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtc2VtaWJvbGQnPnt0LnRpdGxlfTwvaDU+XG4gICAgICAgICAgPGg2IGNsYXNzTmFtZT0ndGV4dC14bCBmb250LXNlbWlib2xkJz57dC5kZXNjfTwvaDY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXJlZC01MDAgdGV4dC13aGl0ZSByb3VuZGVkIHB4LTMgcHktMScgb25DbGljaz17KCk9PnJlbW92ZVRhc2soaSl9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHJlbW92ZVRhc2sgPSAoaWQpPT57XG4gIC8vICBjb25zdCBjb3B5VGFzayA9IHRhc2suZmlsdGVyKCh0LGkpPT57XG4gIC8vICAgaWYoaSAhPT0gaWQpe1xuICAvLyAgICAgcmV0dXJuIHQ7XG4gIC8vICAgfVxuICAvLyAgfSlcbiAgIGxldCBjb3B5VGFzayA9IHRhc2s7IFxuICAgY29weVRhc2suc3BsaWNlKGlkLDEpO1xuICAgc2V0VGFzayhjb3B5VGFzaylcbiAgfVxuXG4gIHJldHVybiAoXG4gICA8PlxuICAgPGgxIGNsYXNzTmFtZT0nYmctYmxhY2sgdGV4dC13aGl0ZSBwLTUgdGV4dC01eGwgZm9udC1ib2xkIHRleHQtY2VudGVyJz5NeSBUb2RvIExpc3Q8L2gxPlxuICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgPGlucHV0IFxuICAgIHR5cGU9J3RleHQnIFxuICAgIGNsYXNzTmFtZT0ndGV4dC0yeGwgdGV4dC1ibGFjayBiZy16aW5jLTIwMCBib3JkZXItemluYy04MDAgYm9yZGVyLTQgbS04IHB4LTQgcHktMicgXG4gICAgcGxhY2Vob2xkZXI9J0VudGVyIE5ldyBUaXRsZS4uLicgXG4gICAgdmFsdWU9e3RpdGxlfVxuICAgIG9uQ2hhbmdlPXsoZSk9PnNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAvPlxuICAgIDxpbnB1dCBcbiAgICB0eXBlPSd0ZXh0JyBcbiAgICBjbGFzc05hbWU9J3RleHQtMnhsIHRleHQtYmxhY2sgYmctemluYy0yMDAgYm9yZGVyLXppbmMtODAwIGJvcmRlci00IG0tOCBweC00IHB5LTInIHBsYWNlaG9sZGVyPSdFbnRlciBOZXcgRGVzY3JpcHRpb24uLi4nIFxuICAgIHZhbHVlPXtkZXNjfVxuICAgIG9uQ2hhbmdlPXsoZSk9PnNldERlc2MoZS50YXJnZXQudmFsdWUpfVxuICAgIC8+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RleHQtd2hpdGUgYmctemluYy01MDAgcm91bmRlZCBweC00IHB5LTMgdGV4dC0yeGwgZm9udC1ib2xkIG0tNSc+QWRkIFRhc2s8L2J1dHRvbj5cbiAgIDwvZm9ybT5cbiAgIDxoci8+XG4gICA8ZGl2PlxuICAgIDx1bD5cbiAgICAgIHtcbiAgICAgICAgcmVuZGVyVGFza1xuICAgICAgfVxuICAgIDwvdWw+XG4gICA8L2Rpdj5cbiAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInBhZ2UiLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzYyIsInNldERlc2MiLCJ0YXNrIiwic2V0VGFzayIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJUYXNrIiwiaDIiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJtYXAiLCJ0IiwiaSIsImxpIiwiZGl2Iiwic3BhbiIsImg1IiwiaDYiLCJidXR0b24iLCJvbkNsaWNrIiwicmVtb3ZlVGFzayIsImlkIiwiY29weVRhc2siLCJzcGxpY2UiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImhyIiwidWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});