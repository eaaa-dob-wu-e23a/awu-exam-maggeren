import {
  NavLink
} from "/build/_shared/chunk-BAS3MZGV.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XBRCCPV4.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/$.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/$.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/$.jsx"
  );
  import.meta.hot.lastModified = "1709741278810.052";
}
function FourOFour() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base font-semibold text-blue-600", children: "404" }, void 0, false, {
      fileName: "app/routes/$.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl", children: "Page not found" }, void 0, false, {
      fileName: "app/routes/$.jsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-6 text-base leading-7 text-gray-600", children: "Sorry, we couldn\u2019t find the page you\u2019re looking for." }, void 0, false, {
      fileName: "app/routes/$.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 flex items-center justify-center gap-x-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/", className: "rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Go back home" }, void 0, false, {
      fileName: "app/routes/$.jsx",
      lineNumber: 38,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/$.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/$.jsx",
    lineNumber: 29,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/$.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c = FourOFour;
var _c;
$RefreshReg$(_c, "FourOFour");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  FourOFour as default
};
//# sourceMappingURL=/build/routes/$-7DFJBFHV.js.map
