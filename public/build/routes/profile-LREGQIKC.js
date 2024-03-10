import {
  require_auth
} from "/build/_shared/chunk-SARLQUTN.js";
import {
  Form,
  useLoaderData
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

// app/routes/profile.jsx
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/profile.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/profile.jsx"
  );
  import.meta.hot.lastModified = "1709813490466.061";
}
function Profile() {
  _s();
  const user = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "sr-only", children: "Account Settings" }, void 0, false, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-white/5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-black", children: "Personal Information" }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 66,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "md:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full flex items-center gap-x-8", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "", className: "h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover" }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 74,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/20", children: "Change avatar" }, void 0, false, {
                  fileName: "app/routes/profile.jsx",
                  lineNumber: 76,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-xs leading-5 text-gray-400", children: "JPG, GIF or PNG. 1MB max." }, void 0, false, {
                  fileName: "app/routes/profile.jsx",
                  lineNumber: 79,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 75,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 73,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:col-span-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "first-name", className: "block text-sm font-medium leading-6 text-black", children: "Username" }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 86,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { defaultValue: user.name, type: "text", name: "name", id: "name", autoComplete: "given-name", className: "block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 90,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 89,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 85,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-medium leading-6 text-black", children: "Email address" }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 95,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", name: "email", type: "email", autoComplete: "email", defaultValue: user.mail, className: "block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 99,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 98,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 94,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500", children: "Save" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 105,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 104,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-black", children: "Change password" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 114,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-400", children: "Update your password associated with your account." }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 117,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 113,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "md:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "current-password", className: "block text-sm font-medium leading-6 text-black", children: "Current password" }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 125,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "current-password", name: "current_password", type: "password", autoComplete: "current-password", className: "block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 129,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 128,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 124,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "new-password", className: "block text-sm font-medium leading-6 text-black", children: "New password" }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 134,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "new-password", name: "new_password", type: "password", autoComplete: "new-password", className: "block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 138,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 137,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 133,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-full", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "confirm-password", className: "block text-sm font-medium leading-6 text-black", children: "Confirm password" }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 143,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "confirm-password", name: "confirm_password", type: "password", autoComplete: "new-password", className: "block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 147,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "app/routes/profile.jsx",
                lineNumber: 146,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/profile.jsx",
              lineNumber: 142,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 123,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500", children: "Save" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 153,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 152,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 122,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 112,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-black", children: "Log out" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 162,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-400", children: "Log out of your account" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 165,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 161,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "md:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 171,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-8 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", name: "_action", value: "logout", className: "rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500", children: "Log out" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 174,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 173,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 170,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 160,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-black", children: "Delete account" }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 183,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-400", children: "No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently." }, void 0, false, {
            fileName: "app/routes/profile.jsx",
            lineNumber: 186,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 182,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "flex items-start md:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400", children: "Yes, delete my account" }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 194,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/profile.jsx",
          lineNumber: 193,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.jsx",
        lineNumber: 181,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.jsx",
      lineNumber: 63,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.jsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/profile.jsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}
_s(Profile, "bH1LW0VjtDD5/q6YH82IbqfBSnU=", false, function() {
  return [useLoaderData];
});
_c = Profile;
var _c;
$RefreshReg$(_c, "Profile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Profile as default
};
//# sourceMappingURL=/build/routes/profile-LREGQIKC.js.map
