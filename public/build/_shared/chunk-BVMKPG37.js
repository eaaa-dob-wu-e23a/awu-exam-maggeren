import {
  UserAvatar
} from "/build/_shared/chunk-PP67CQWQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XBRCCPV4.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@heroicons/react/24/outline/esm/CalendarIcon.js
var React = __toESM(require_react(), 1);
function CalendarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
  }));
}
var ForwardRef = React.forwardRef(CalendarIcon);
var CalendarIcon_default = ForwardRef;

// node_modules/@heroicons/react/24/outline/esm/ClockIcon.js
var React2 = __toESM(require_react(), 1);
function ClockIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));
}
var ForwardRef2 = React2.forwardRef(ClockIcon);
var ClockIcon_default = ForwardRef2;

// node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js
var React3 = __toESM(require_react(), 1);
function MapPinIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React3.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React3.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }), /* @__PURE__ */ React3.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
  }));
}
var ForwardRef3 = React3.forwardRef(MapPinIcon);
var MapPinIcon_default = ForwardRef3;

// app/components/EventCard.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1710345247277.5723";
}
function EventCard({
  event,
  className
}) {
  const date = new Date(event.date);
  const attendeesExist = event.attendees?.length > 0;
  const locationExists = event.location;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `post-card bg-white rounded-lg shadow-md p-5 mb-4 relative ${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserAvatar, { user: event.creator }, void 0, false, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex-grow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: event.image !== "" ? event.image : "https://placehold.co/600x400?text=FitMeet", alt: event.title, className: "w-full h-48 object-cover rounded-md" }, void 0, false, {
        fileName: "app/components/EventCard.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-2 right-2 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center bg-black bg-opacity-50 rounded p-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CalendarIcon_default, { className: "h-6" }, void 0, false, {
          fileName: "app/components/EventCard.jsx",
          lineNumber: 39,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        }) }, void 0, false, {
          fileName: "app/components/EventCard.jsx",
          lineNumber: 40,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/EventCard.jsx",
        lineNumber: 38,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/EventCard.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-2 right-2 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center bg-black bg-opacity-50 rounded p-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClockIcon_default, { className: "h-6 mr-1" }, void 0, false, {
          fileName: "app/components/EventCard.jsx",
          lineNumber: 54,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}` }, void 0, false, {
          fileName: "app/components/EventCard.jsx",
          lineNumber: 55,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/EventCard.jsx",
        lineNumber: 53,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/EventCard.jsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 34,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-bold mt-2 overflow-hidden whitespace-nowrap overflow-ellipsis", children: event.title }, void 0, false, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 overflow-hidden whitespace-nowrap overflow-ellipsis mb-4", children: event.description }, void 0, false, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 flex flex-row", children: [
      attendeesExist && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-bold mr-2 mt-1", children: "Attendees" }, void 0, false, {
          fileName: "app/components/EventCard.jsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex -space-x-2 overflow-hidden", children: event.attendees ? event.attendees.slice(0, 5).map((attendee, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "inline-block h-10 w-10 rounded-full object-cover", src: attendee.avatar, alt: "" }, index, false, {
          fileName: "app/components/EventCard.jsx",
          lineNumber: 71,
          columnNumber: 89
        }, this)) : null }, void 0, false, {
          fileName: "app/components/EventCard.jsx",
          lineNumber: 70,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/EventCard.jsx",
        lineNumber: 68,
        columnNumber: 30
      }, this),
      !attendeesExist && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-start justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-bold mt-2", children: "No attendees yet" }, void 0, false, {
        fileName: "app/components/EventCard.jsx",
        lineNumber: 75,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/EventCard.jsx",
        lineNumber: 74,
        columnNumber: 31
      }, this),
      locationExists && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-bold ml-auto flex items-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPinIcon_default, { className: "h-6 mr-2" }, void 0, false, {
          fileName: "app/components/EventCard.jsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        event.location
      ] }, void 0, true, {
        fileName: "app/components/EventCard.jsx",
        lineNumber: 77,
        columnNumber: 30
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/EventCard.jsx",
      lineNumber: 67,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/EventCard.jsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/EventCard.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
}
_c = EventCard;
var _c;
$RefreshReg$(_c, "EventCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  EventCard
};
//# sourceMappingURL=/build/_shared/chunk-BVMKPG37.js.map
