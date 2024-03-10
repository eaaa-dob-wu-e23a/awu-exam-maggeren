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
  import.meta.hot.lastModified = "1709831881648.596";
}
function UserAvatar({
  user
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-center space-x-3 mb-2 ml-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "inline-block h-10 w-10 rounded-full object-cover", src: user.avatar, alt: "" }, void 0, false, {
      fileName: "app/components/UserAvatar.jsx",
      lineNumber: 26,
      columnNumber: 9
    }, this) }, void 0, false, {
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
var _c;
$RefreshReg$(_c, "UserAvatar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/EventCard.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/EventCard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/EventCard.jsx"
  );
  import.meta.hot.lastModified = "1710017633854.5317";
}
function EventCard({
  event
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { className: "post-card bg-white rounded-lg shadow-md p-5 mb-4 relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(UserAvatar, { user: event.creator }, void 0, false, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: event.image, alt: event.title, className: "w-full h-48 object-cover rounded-md" }, void 0, false, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-xl font-bold mt-2 overflow-hidden whitespace-nowrap overflow-ellipsis", children: event.title }, void 0, false, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis", children: event.description }, void 0, false, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    event.attendees?.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h4", { className: "text-lg font-bold", children: [
        "Attendees (",
        event.attendees.length,
        ")"
      ] }, void 0, true, {
        fileName: "app/components/EventCard.jsx",
        lineNumber: 36,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex -space-x-2 overflow-hidden", children: event.attendees ? event.attendees.slice(0, 5).map((attendee, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "inline-block h-10 w-10 rounded-full object-cover", src: attendee.avatar, alt: "" }, index, false, {
        fileName: "app/components/EventCard.jsx",
        lineNumber: 40,
        columnNumber: 85
      }, this)) : null }, void 0, false, {
        fileName: "app/components/EventCard.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 35,
      columnNumber: 38
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-2 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "inline-block h-10 w-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-lg font-bold", children: "No attendees yet" }, void 0, false, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 42,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/EventCard.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c2 = EventCard;
var _c2;
$RefreshReg$(_c2, "EventCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  EventCard
};
//# sourceMappingURL=/build/_shared/chunk-J52M6XN7.js.map
