import {
  Form,
  NavLink
} from "/build/_shared/chunk-BAS3MZGV.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XBRCCPV4.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:../services/session.server
var require_session = __commonJS({
  "empty-module:../services/session.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/AuthForm.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/AuthForm.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/AuthForm.jsx"
  );
  import.meta.hot.lastModified = "1709742801484.322";
}
var AuthForm = ({
  error,
  isSignUp
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center items-center h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-md", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-4 text-center", children: isSignUp ? "Sign up" : "Sign in" }, void 0, false, {
      fileName: "app/components/AuthForm.jsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Form,
      {
        id: isSignUp ? "sign-up-form" : "sign-in-form",
        method: "post",
        className: "mx-auto w-full max-w-sm flex flex-col justify-center",
        children: [
          isSignUp && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "name", className: "block mt-4", children: "Name" }, void 0, false, {
              fileName: "app/components/AuthForm.jsx",
              lineNumber: 34,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "name", type: "text", name: "name", "aria-label": "name", placeholder: "Type your name...", required: true, autoComplete: "off", className: "border border-gray-300 rounded-md px-2 py-1 mt-1" }, void 0, false, {
              fileName: "app/components/AuthForm.jsx",
              lineNumber: 37,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/AuthForm.jsx",
            lineNumber: 33,
            columnNumber: 24
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block mt-4", children: "Email" }, void 0, false, {
            fileName: "app/components/AuthForm.jsx",
            lineNumber: 39,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", type: "email", name: "mail", "aria-label": "email", placeholder: "Type your email...", required: true, autoComplete: "on", className: "border border-gray-300 rounded-md px-2 py-1 mt-1" }, void 0, false, {
            fileName: "app/components/AuthForm.jsx",
            lineNumber: 42,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "password", className: "block mt-4", children: "Password" }, void 0, false, {
            fileName: "app/components/AuthForm.jsx",
            lineNumber: 44,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", type: "password", name: "password", "aria-label": "password", placeholder: "Type your password...", autoComplete: "current-password", className: "border border-gray-300 rounded-md px-2 py-1 mt-1" }, void 0, false, {
            fileName: "app/components/AuthForm.jsx",
            lineNumber: 47,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btns mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-blue-600 text-white rounded-md py-1 w-full", children: isSignUp ? "Sign up" : "Sign in" }, void 0, false, {
            fileName: "app/components/AuthForm.jsx",
            lineNumber: 50,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/components/AuthForm.jsx",
            lineNumber: 49,
            columnNumber: 11
          }, this),
          error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "error-message mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: {
            color: "red",
            fontWeight: "bold",
            textAlign: "center"
          }, children: error }, void 0, false, {
            fileName: "app/components/AuthForm.jsx",
            lineNumber: 56,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/AuthForm.jsx",
            lineNumber: 55,
            columnNumber: 21
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/AuthForm.jsx",
        lineNumber: 31,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-center text-gray-400", children: [
      isSignUp ? "Already have an account?" : "Don't have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: isSignUp ? "/signin" : "/signup", className: "text-blue-600", children: isSignUp ? "Sign in here." : "Sign up here." }, void 0, false, {
        fileName: "app/components/AuthForm.jsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/AuthForm.jsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AuthForm.jsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/AuthForm.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = AuthForm;
var AuthForm_default = AuthForm;
var _c;
$RefreshReg$(_c, "AuthForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_session,
  AuthForm_default
};
//# sourceMappingURL=/build/_shared/chunk-2WQ6NMLI.js.map
