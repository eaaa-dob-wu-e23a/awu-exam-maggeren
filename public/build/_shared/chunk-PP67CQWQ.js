import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XBRCCPV4.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/UserAvatar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/UserAvatar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/UserAvatar.jsx"
  );
  import.meta.hot.lastModified = "1710172989112.1306";
}
function UserAvatar({
  user
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-center space-x-3 mb-2 ml-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: user.avatar ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "inline-block h-10 w-10 rounded-full object-cover", src: user.avatar, alt: "" }, void 0, false, {
      fileName: "app/components/UserAvatar.jsx",
      lineNumber: 26,
      columnNumber: 24
    }, this) : avatarFromInitials(user.name) }, void 0, false, {
      fileName: "app/components/UserAvatar.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", className: "focus:outline-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, false, {
        fileName: "app/components/UserAvatar.jsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: user.name }, void 0, false, {
        fileName: "app/components/UserAvatar.jsx",
        lineNumber: 31,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/UserAvatar.jsx",
      lineNumber: 29,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/UserAvatar.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/UserAvatar.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c = UserAvatar;
function avatarFromInitials(userName, height, width) {
  const initials = userName.split(" ").map((name) => name[0]).join("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: `https://ui-avatars.com/api/?name=${initials}&size=256&background=6574cd&color=fff`, alt: userName, className: "inline-block h-10 w-10 rounded-full object-cover" }, void 0, false, {
    fileName: "app/components/UserAvatar.jsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
}
var _c;
$RefreshReg$(_c, "UserAvatar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  UserAvatar,
  avatarFromInitials
};
//# sourceMappingURL=/build/_shared/chunk-PP67CQWQ.js.map
