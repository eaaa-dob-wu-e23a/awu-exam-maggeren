import {
  Calendar
} from "/build/_shared/chunk-XFFU4SYM.js";
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
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:../services/upload-handler.server
var require_upload_handler = __commonJS({
  "empty-module:../services/upload-handler.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/add-event.jsx
var import_node = __toESM(require_node(), 1);
var import_mongoose = __toESM(require_browser_umd(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_upload_handler = __toESM(require_upload_handler(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/add-event.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/add-event.jsx"
  );
  import.meta.hot.lastModified = "1710189078504.178";
}
var meta = () => {
  return [{
    title: "Add new meetup"
  }];
};
function AddEvent({
  entry
}) {
  _s();
  const [image, setImage] = (0, import_react2.useState)(entry?.image ? entry?.image : null);
  const [selectedDate, setSelectedDate] = (0, import_react2.useState)(null);
  const [location, setLocation] = (0, import_react2.useState)("");
  const {
    user
  } = useLoaderData();
  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  const handleLocationChange = (location2) => {
    setLocation(location2);
  };
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file.size < 5e5) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Image size must be less than 0.5MB.");
      event.target.value = "";
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-black mt-10 mb-4 text-center", children: "Create A New Meetup" }, void 0, false, {
      fileName: "app/routes/add-event.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-4 flex-col items-center justify-center", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "upper-div", className: "flex justify-center mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "text-div", className: "w-full flex flex-col justify-center ml-10 mr-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-lg mb-2 text-gray-700 text-center", children: "Title" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "title", type: "text", name: "title", className: "block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 85,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-lg mb-2 text-gray-700 text-center mt-2", htmlFor: "text", children: "Description" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 86,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "text", name: "description", className: "block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 89,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-lg mb-2 text-gray-700 text-center mt-2", children: "Location" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 91,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "location", type: "adress", name: "location", className: "block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 94,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/add-event.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "image-div", className: "w-full flex justify-center mt-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "hidden", id: "file_input", name: "image", type: "file", onChange: handleImageChange }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 97,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { id: "image-preview", className: "cursor-pointer w-72 h-60 object-cover rounded-lg", src: image ? image : "https://placehold.co/600x400/F1F5F9/000000?text=Upload+an+image", alt: "Choose", onError: (e) => e.target.src = "https://placehold.co/600x400?text=Error+loading+image", onClick: () => document.getElementById("file_input").click() }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 98,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/add-event.jsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/add-event.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "creator", type: "hidden", value: user._id ?? "" }, void 0, false, {
        fileName: "app/routes/add-event.jsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "ml-20 w-full", onDateClick: handleDateClick }, void 0, false, {
          fileName: "app/routes/add-event.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "date", type: "hidden", value: selectedDate ?? "" }, void 0, false, {
          fileName: "app/routes/add-event.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ml-8 flex flex-col items-center w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-lg mb-2 text-gray-700 text-center", htmlFor: "time", children: "Time" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 107,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "time", type: "time", name: "time", defaultValue: "00:00", className: "p-3 border border-gray-300 rounded" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 111,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/add-event.jsx",
          lineNumber: 106,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/add-event.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "mt-6  p-3 bg-blue-500 text-white rounded cursor-pointer text-center", children: "Create Meetup" }, void 0, false, {
        fileName: "app/routes/add-event.jsx",
        lineNumber: 116,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/add-event.jsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/add-event.jsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/add-event.jsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}
_s(AddEvent, "aqej1XIE1Nb/SMiAhZoLUyQ/6Iw=", false, function() {
  return [useLoaderData];
});
_c = AddEvent;
var _c;
$RefreshReg$(_c, "AddEvent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddEvent as default,
  meta
};
//# sourceMappingURL=/build/routes/add-event-HUZD3JDQ.js.map
