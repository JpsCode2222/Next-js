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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const allTask = [\n        JSON.parse(localStorage.getItem('task'))\n    ] || 0;\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [desc, setDesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(allTask);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        setTask([\n            ...task,\n            {\n                title,\n                desc\n            }\n        ]);\n        localStorage.setItem('task', JSON.stringify(task));\n        setTitle('');\n        setDesc('');\n        task && console.log(task);\n    };\n    let renderTask = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"m-4\",\n        children: \"No Task Available!\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n        lineNumber: 19,\n        columnNumber: 20\n    }, undefined);\n    if (task.length > 0) {\n        renderTask = task.map((t, i)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-around mb-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: i + 1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"text-xl font-semibold\",\n                            children: t.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                            className: \"text-xl font-semibold\",\n                            children: t.desc\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-red-500 text-white rounded px-3 py-1\",\n                            onClick: ()=>removeTask(i),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined)\n            }, i, false, {\n                fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                lineNumber: 23,\n                columnNumber: 14\n            }, undefined);\n        });\n    }\n    const removeTask = (id)=>{\n        //  const copyTask = task.filter((t,i)=>{\n        //   if(i !== id){\n        //     return t;\n        //   }\n        //  })\n        let copyTask = [\n            ...task\n        ];\n        copyTask.splice(id, 1);\n        setTask(copyTask);\n        localStorage.setItem('task', JSON.stringify(task));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"bg-black text-white p-5 text-5xl font-bold text-center\",\n                children: \"My Todo List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                lineNumber: 48,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"text-2xl text-black bg-zinc-200 border-zinc-800 border-4 m-8 px-4 py-2\",\n                        placeholder: \"Enter New Title...\",\n                        value: title,\n                        onChange: (e)=>setTitle(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                        lineNumber: 50,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"text-2xl text-black bg-zinc-200 border-zinc-800 border-4 m-8 px-4 py-2\",\n                        placeholder: \"Enter New Description...\",\n                        value: desc,\n                        onChange: (e)=>setDesc(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                        lineNumber: 57,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-white bg-zinc-500 rounded px-4 py-3 text-2xl font-bold m-5\",\n                        children: \"Add Task\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                        lineNumber: 63,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                lineNumber: 65,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: renderTask\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                    lineNumber: 67,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\patha\\\\todo-list\\\\app\\\\page.js\",\n                lineNumber: 66,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"2+7qynIHhLSpYCluX1rOA80p8iU=\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNvQztBQUVwQyxNQUFNRSxPQUFPOztJQUNYLE1BQU1DLFVBQVU7UUFBQ0MsS0FBS0MsS0FBSyxDQUFDQyxhQUFhQyxPQUFPLENBQUM7S0FBUyxJQUFJLENBQUU7SUFDaEUsTUFBTSxDQUFDQyxPQUFNQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ1MsTUFBS0MsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQztJQUNoQyxNQUFNLENBQUNXLE1BQUtDLFFBQVEsR0FBR1osK0NBQVFBLENBQUNFO0lBRWhDLE1BQU1XLGVBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEJILFFBQVE7ZUFBSUQ7WUFBSztnQkFBQ0o7Z0JBQU1FO1lBQUk7U0FBRTtRQUM5QkosYUFBYVcsT0FBTyxDQUFDLFFBQU9iLEtBQUtjLFNBQVMsQ0FBQ047UUFDM0NILFNBQVM7UUFDVEUsUUFBUTtRQUNSQyxRQUFRTyxRQUFRQyxHQUFHLENBQUNSO0lBQ3RCO0lBRUEsSUFBSVMsMkJBQWEsOERBQUNDO1FBQUdDLFdBQVU7a0JBQU07Ozs7OztJQUVyQyxJQUFHWCxLQUFLWSxNQUFNLEdBQUcsR0FBRTtRQUNqQkgsYUFBYVQsS0FBS2EsR0FBRyxDQUFDLENBQUNDLEdBQUVDO1lBQ3ZCLHFCQUFPLDhEQUFDQzswQkFDTiw0RUFBQ0M7b0JBQUlOLFdBQVU7O3NDQUNiLDhEQUFDTztzQ0FBTUgsSUFBRTs7Ozs7O3NDQUNULDhEQUFDSTs0QkFBR1IsV0FBVTtzQ0FBeUJHLEVBQUVsQixLQUFLOzs7Ozs7c0NBQzlDLDhEQUFDd0I7NEJBQUdULFdBQVU7c0NBQXlCRyxFQUFFaEIsSUFBSTs7Ozs7O3NDQUM3Qyw4REFBQ3VCOzRCQUFPVixXQUFVOzRCQUEwQ1csU0FBUyxJQUFJQyxXQUFXUjtzQ0FBSTs7Ozs7Ozs7Ozs7O2VBTDVFQTs7Ozs7UUFRbEI7SUFDRjtJQUVBLE1BQU1RLGFBQWEsQ0FBQ0M7UUFDcEIseUNBQXlDO1FBQ3pDLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsTUFBTTtRQUNOLE1BQU07UUFDTCxJQUFJQyxXQUFXO2VBQUl6QjtTQUFLO1FBQ3hCeUIsU0FBU0MsTUFBTSxDQUFDRixJQUFHO1FBQ25CdkIsUUFBUXdCO1FBQ1IvQixhQUFhVyxPQUFPLENBQUMsUUFBT2IsS0FBS2MsU0FBUyxDQUFDTjtJQUM1QztJQUVBLHFCQUNDOzswQkFDQSw4REFBQzJCO2dCQUFHaEIsV0FBVTswQkFBeUQ7Ozs7OzswQkFDdkUsOERBQUNpQjtnQkFBS0MsVUFBVTNCOztrQ0FDZiw4REFBQzRCO3dCQUNEQyxNQUFLO3dCQUNMcEIsV0FBVTt3QkFDVnFCLGFBQVk7d0JBQ1pDLE9BQU9yQzt3QkFDUHNDLFVBQVUsQ0FBQy9CLElBQUlOLFNBQVNNLEVBQUVnQyxNQUFNLENBQUNGLEtBQUs7Ozs7OztrQ0FFdEMsOERBQUNIO3dCQUNEQyxNQUFLO3dCQUNMcEIsV0FBVTt3QkFBeUVxQixhQUFZO3dCQUMvRkMsT0FBT25DO3dCQUNQb0MsVUFBVSxDQUFDL0IsSUFBSUosUUFBUUksRUFBRWdDLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O2tDQUVyQyw4REFBQ1o7d0JBQU9WLFdBQVU7a0NBQWtFOzs7Ozs7Ozs7Ozs7MEJBRXJGLDhEQUFDeUI7Ozs7OzBCQUNELDhEQUFDbkI7MEJBQ0EsNEVBQUNvQjs4QkFFRzVCOzs7Ozs7Ozs7Ozs7O0FBTVI7R0F2RU1uQjtBQXlFTixpRUFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxwYXRoYVxcdG9kby1saXN0XFxhcHBcXHBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuY29uc3QgcGFnZSA9ICgpID0+IHtcbiAgY29uc3QgYWxsVGFzayA9IFtKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrJykpXSB8fCBbXTtcbiAgY29uc3QgW3RpdGxlLHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Rlc2Msc2V0RGVzY10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0YXNrLHNldFRhc2tdID0gdXNlU3RhdGUoYWxsVGFzayk7XG4gIFxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSk9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0VGFzayhbLi4udGFzayx7dGl0bGUsZGVzY31dKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzaycsSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICAgIHNldFRpdGxlKCcnKTtcbiAgICBzZXREZXNjKCcnKTtcbiAgICB0YXNrICYmIGNvbnNvbGUubG9nKHRhc2spXG4gIH1cbiBcbiAgbGV0IHJlbmRlclRhc2sgPSA8aDIgY2xhc3NOYW1lPSdtLTQnPk5vIFRhc2sgQXZhaWxhYmxlITwvaDI+XG5cbiAgaWYodGFzay5sZW5ndGggPiAwKXtcbiAgICByZW5kZXJUYXNrID0gdGFzay5tYXAoKHQsaSk9PntcbiAgICAgIHJldHVybiA8bGkga2V5PXtpfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1hcm91bmQgbWItNSc+XG4gICAgICAgICAgPHNwYW4+e2krMX08L3NwYW4+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT0ndGV4dC14bCBmb250LXNlbWlib2xkJz57dC50aXRsZX08L2g1PlxuICAgICAgICAgIDxoNiBjbGFzc05hbWU9J3RleHQteGwgZm9udC1zZW1pYm9sZCc+e3QuZGVzY308L2g2PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1yZWQtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBweC0zIHB5LTEnIG9uQ2xpY2s9eygpPT5yZW1vdmVUYXNrKGkpfT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xpPlxuICAgIH0pXG4gIH1cblxuICBjb25zdCByZW1vdmVUYXNrID0gKGlkKT0+e1xuICAvLyAgY29uc3QgY29weVRhc2sgPSB0YXNrLmZpbHRlcigodCxpKT0+e1xuICAvLyAgIGlmKGkgIT09IGlkKXtcbiAgLy8gICAgIHJldHVybiB0O1xuICAvLyAgIH1cbiAgLy8gIH0pXG4gICBsZXQgY29weVRhc2sgPSBbLi4udGFza107IFxuICAgY29weVRhc2suc3BsaWNlKGlkLDEpO1xuICAgc2V0VGFzayhjb3B5VGFzaylcbiAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJyxKU09OLnN0cmluZ2lmeSh0YXNrKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgPD5cbiAgIDxoMSBjbGFzc05hbWU9J2JnLWJsYWNrIHRleHQtd2hpdGUgcC01IHRleHQtNXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlcic+TXkgVG9kbyBMaXN0PC9oMT5cbiAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgIDxpbnB1dCBcbiAgICB0eXBlPSd0ZXh0JyBcbiAgICBjbGFzc05hbWU9J3RleHQtMnhsIHRleHQtYmxhY2sgYmctemluYy0yMDAgYm9yZGVyLXppbmMtODAwIGJvcmRlci00IG0tOCBweC00IHB5LTInIFxuICAgIHBsYWNlaG9sZGVyPSdFbnRlciBOZXcgVGl0bGUuLi4nIFxuICAgIHZhbHVlPXt0aXRsZX1cbiAgICBvbkNoYW5nZT17KGUpPT5zZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgLz5cbiAgICA8aW5wdXQgXG4gICAgdHlwZT0ndGV4dCcgXG4gICAgY2xhc3NOYW1lPSd0ZXh0LTJ4bCB0ZXh0LWJsYWNrIGJnLXppbmMtMjAwIGJvcmRlci16aW5jLTgwMCBib3JkZXItNCBtLTggcHgtNCBweS0yJyBwbGFjZWhvbGRlcj0nRW50ZXIgTmV3IERlc2NyaXB0aW9uLi4uJyBcbiAgICB2YWx1ZT17ZGVzY31cbiAgICBvbkNoYW5nZT17KGUpPT5zZXREZXNjKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAvPlxuICAgIDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGJnLXppbmMtNTAwIHJvdW5kZWQgcHgtNCBweS0zIHRleHQtMnhsIGZvbnQtYm9sZCBtLTUnPkFkZCBUYXNrPC9idXR0b24+XG4gICA8L2Zvcm0+XG4gICA8aHIvPlxuICAgPGRpdj5cbiAgICA8dWw+XG4gICAgICB7XG4gICAgICAgIHJlbmRlclRhc2tcbiAgICAgIH1cbiAgICA8L3VsPlxuICAgPC9kaXY+XG4gICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJwYWdlIiwiYWxsVGFzayIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzYyIsInNldERlc2MiLCJ0YXNrIiwic2V0VGFzayIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyVGFzayIsImgyIiwiY2xhc3NOYW1lIiwibGVuZ3RoIiwibWFwIiwidCIsImkiLCJsaSIsImRpdiIsInNwYW4iLCJoNSIsImg2IiwiYnV0dG9uIiwib25DbGljayIsInJlbW92ZVRhc2siLCJpZCIsImNvcHlUYXNrIiwic3BsaWNlIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJociIsInVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});