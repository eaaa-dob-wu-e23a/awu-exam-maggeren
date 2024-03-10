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
var import_react3 = __toESM(require_react(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_upload_handler = __toESM(require_upload_handler(), 1);

// node_modules/@heroicons/react/20/solid/esm/ChevronLeftIcon.js
var React = __toESM(require_react(), 1);
function ChevronLeftIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",
    clipRule: "evenodd"
  }));
}
var ForwardRef = React.forwardRef(ChevronLeftIcon);
var ChevronLeftIcon_default = ForwardRef;

// node_modules/@heroicons/react/20/solid/esm/ChevronRightIcon.js
var React2 = __toESM(require_react(), 1);
function ChevronRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React2.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React2.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React2.createElement("path", {
    fillRule: "evenodd",
    d: "M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
var ForwardRef2 = React2.forwardRef(ChevronRightIcon);
var ChevronRightIcon_default = ForwardRef2;

// app/components/Calendar.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Calendar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Calendar.jsx"
  );
  import.meta.hot.lastModified = "1710005471152.3403";
}
var CalendarClass = class {
  constructor() {
    this.currentDate = /* @__PURE__ */ new Date();
    this.selectedDate = null;
  }
  getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }
  getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
  }
  generateMonthMatrix(year, month) {
    const daysInMonth = this.getDaysInMonth(year, month);
    const firstDayOfMonth = this.getFirstDayOfMonth(year, month);
    const matrix = [];
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = lastDayOfPrevMonth - i;
      const date = new Date(year, month - 1, day);
      matrix.push({
        day,
        date,
        isCurrentMonth: false
      });
    }
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = this.selectedDate && this.selectedDate.toISOString().split("T")[0] === date.toISOString().split("T")[0];
      const isToday = today.toISOString().split("T")[0] === date.toISOString().split("T")[0];
      matrix.push({
        day,
        date,
        isSelected: this.selectedDate ? isSelected : false,
        isCurrentMonth: true,
        isToday
      });
    }
    return matrix;
  }
  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
  }
  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
  }
  selectDate(date) {
    this.selectedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Calendar({
  onDateClick
}) {
  _s();
  const [calendar, setCalendar] = (0, import_react.useState)(new CalendarClass());
  const days = calendar.generateMonthMatrix(calendar.currentDate.getFullYear(), calendar.currentDate.getMonth());
  const handleNextMonth = () => {
    setCalendar((prevCalendar) => {
      const newCalendar = new CalendarClass();
      newCalendar.currentDate = new Date(prevCalendar.currentDate);
      newCalendar.nextMonth();
      return newCalendar;
    });
  };
  const handlePrevMonth = () => {
    setCalendar((prevCalendar) => {
      const newCalendar = new CalendarClass();
      newCalendar.currentDate = new Date(prevCalendar.currentDate);
      newCalendar.prevMonth();
      return newCalendar;
    });
  };
  const handleDateClick = (date) => {
    setCalendar((prevCalendar) => {
      const newCalendar = new CalendarClass();
      newCalendar.currentDate = new Date(prevCalendar.currentDate);
      newCalendar.selectDate(date);
      return newCalendar;
    });
    onDateClick(date);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full ml-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "flex-auto text-sm font-semibold text-gray-900 text-center", children: [
        calendar.currentDate.toLocaleString("default", {
          month: "long"
        }),
        " ",
        calendar.currentDate.getFullYear()
      ] }, void 0, true, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500", onClick: handlePrevMonth, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Previous month" }, void 0, false, {
          fileName: "app/components/Calendar.jsx",
          lineNumber: 118,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeftIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/Calendar.jsx",
          lineNumber: 119,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500", onClick: handleNextMonth, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Next month" }, void 0, false, {
          fileName: "app/components/Calendar.jsx",
          lineNumber: 122,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRightIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/Calendar.jsx",
          lineNumber: 123,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 121,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Calendar.jsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "M" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "T" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "W" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "T" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "F" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "S" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "S" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 133,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Calendar.jsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 grid grid-cols-7 text-sm", children: days.map((day, dayIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classNames(dayIdx > 6 && "border-t border-gray-200", "py-2"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: classNames(day?.isSelected && "text-white", !day.isSelected && day.isToday && "text-indigo-600", !day.isSelected && !day.isToday && day.isCurrentMonth && "text-gray-900", !day.isSelected && !day.isToday && !day.isCurrentMonth && "text-gray-400", day.isSelected && day.isToday && "bg-indigo-600", day.isSelected && !day.isToday && "bg-gray-900", !day.isSelected && "hover:bg-gray-200", (day.isSelected || day.isToday) && "font-semibold", "mx-auto flex h-8 w-8 items-center justify-center rounded-full"), onClick: () => handleDateClick(day.date), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { dateTime: day.date.toISOString(), children: day.date.getDate().toString().padStart(2, "0") }, void 0, false, {
      fileName: "app/components/Calendar.jsx",
      lineNumber: 138,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Calendar.jsx",
      lineNumber: 137,
      columnNumber: 13
    }, this) }, day.date, false, {
      fileName: "app/components/Calendar.jsx",
      lineNumber: 136,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/components/Calendar.jsx",
      lineNumber: 135,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Calendar.jsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s(Calendar, "jY1W7gh55hv0X/SAeNEsAsaqzaM=");
_c = Calendar;
var _c;
$RefreshReg$(_c, "Calendar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/add-event.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/add-event.jsx"
  );
  import.meta.hot.lastModified = "1710006410349.8782";
}
var meta = () => {
  return [{
    title: "Add new meetup"
  }];
};
function AddEvent({
  entry
}) {
  _s2();
  const [image, setImage] = (0, import_react3.useState)(entry?.image ? entry?.image : null);
  const [selectedDate, setSelectedDate] = (0, import_react3.useState)(null);
  const [location, setLocation] = (0, import_react3.useState)("");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-3xl font-bold text-black mt-10 mb-4 text-center", children: "Create A New Meetup" }, void 0, false, {
      fileName: "app/routes/add-event.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", className: "mt-4 flex-col items-center justify-center", encType: "multipart/form-data", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "upper-div", className: "flex justify-center mt-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "text-div", className: "w-full flex flex-col justify-center ml-10 mr-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "block text-lg mb-2 text-gray-700 text-center", children: "Title" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 82,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "title", type: "text", name: "title", className: "block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 85,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "block text-lg mb-2 text-gray-700 text-center mt-2", htmlFor: "text", children: "Description" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 86,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("textarea", { id: "text", name: "description", className: "block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 89,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "block text-lg mb-2 text-gray-700 text-center mt-2", children: "Location" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 91,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "location", type: "adress", name: "location", className: "block w-full rounded-md border-0 bg-slate-100 py-1.5 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 94,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/add-event.jsx",
          lineNumber: 81,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "image-div", className: "w-full flex justify-center mt-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { className: "hidden", id: "file_input", name: "image", type: "file", onChange: handleImageChange }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 97,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { id: "image-preview", className: "cursor-pointer w-72 h-60 object-cover rounded-lg", src: image ? image : "https://placehold.co/600x400/F1F5F9/000000?text=Upload+an+image", alt: "Choose", onError: (e) => e.target.src = "https://placehold.co/600x400?text=Error+loading+image", onClick: () => document.getElementById("file_input").click() }, void 0, false, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name: "creator", type: "hidden", value: user._id ?? "" }, void 0, false, {
        fileName: "app/routes/add-event.jsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-6 flex items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Calendar, { className: "ml-20 w-full", onDateClick: handleDateClick }, void 0, false, {
          fileName: "app/routes/add-event.jsx",
          lineNumber: 103,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { name: "date", type: "hidden", value: selectedDate ?? "" }, void 0, false, {
          fileName: "app/routes/add-event.jsx",
          lineNumber: 104,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "ml-8 flex flex-col items-center w-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "block text-lg mb-2 text-gray-700 text-center", htmlFor: "time", children: "Time" }, void 0, false, {
            fileName: "app/routes/add-event.jsx",
            lineNumber: 107,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { id: "time", type: "time", name: "time", defaultValue: "00:00", className: "p-3 border border-gray-300 rounded" }, void 0, false, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "mt-6  p-3 bg-blue-500 text-white rounded cursor-pointer text-center", children: "Create Meetup" }, void 0, false, {
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
_s2(AddEvent, "aqej1XIE1Nb/SMiAhZoLUyQ/6Iw=", false, function() {
  return [useLoaderData];
});
_c2 = AddEvent;
var _c2;
$RefreshReg$(_c2, "AddEvent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AddEvent as default,
  meta
};
//# sourceMappingURL=/build/routes/add-event-SOA27YHW.js.map
