import {
  Button
} from "/build/_shared/chunk-55HWAWQI.js";
import {
  EventCard
} from "/build/_shared/chunk-DCMRXS4K.js";
import "/build/_shared/chunk-PP67CQWQ.js";
import {
  require_browser_umd
} from "/build/_shared/chunk-GMSPC5K3.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
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

// app/routes/events.$eventId.jsx
var import_node = __toESM(require_node(), 1);
var import_mongoose = __toESM(require_browser_umd(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/events.$eventId.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/events.$eventId.jsx"
  );
  import.meta.hot.lastModified = "1710265461050.1753";
}
function meta({
  data
}) {
  return [{
    title: `FitMeet - ${data.event.title || "Event"}`
  }];
}
function Post() {
  _s();
  const {
    event,
    authUser
  } = useLoaderData();
  function confirmDelete(event2) {
    const response = confirm("Please confirm you want to delete this post.");
    if (!response) {
      event2.preventDefault();
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "post-page", className: "page flex flex-col w-full items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EventCard, { event, className: "w-3/4" }, void 0, false, {
      fileName: "app/routes/events.$eventId.jsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    authUser && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      authUser._id !== event.creator._id && !event.attendees.some((attendee) => attendee._id === authUser._id) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "attend", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Attend" }, void 0, false, {
        fileName: "app/routes/events.$eventId.jsx",
        lineNumber: 76,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/events.$eventId.jsx",
        lineNumber: 75,
        columnNumber: 118
      }, this),
      authUser._id === event.creator._id && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btns flex flex-row space-x-2 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "update", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { isDelete: false, children: "Update" }, void 0, false, {
          fileName: "app/routes/events.$eventId.jsx",
          lineNumber: 81,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/events.$eventId.jsx",
          lineNumber: 80,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { action: "destroy", method: "post", onSubmit: confirmDelete, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { isDelete: true, children: "Delete" }, void 0, false, {
          fileName: "app/routes/events.$eventId.jsx",
          lineNumber: 84,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/events.$eventId.jsx",
          lineNumber: 83,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/events.$eventId.jsx",
        lineNumber: 79,
        columnNumber: 50
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/events.$eventId.jsx",
      lineNumber: 74,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/events.$eventId.jsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_s(Post, "NH9dy8P5QERhkkwZQHCkYOKg5Ww=", false, function() {
  return [useLoaderData];
});
_c = Post;
var _c;
$RefreshReg$(_c, "Post");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Post as default,
  meta
};
//# sourceMappingURL=/build/routes/events.$eventId-ANBYXN6E.js.map
