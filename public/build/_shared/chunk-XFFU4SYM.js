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
  import.meta.hot.lastModified = "1710160746810.758";
}
var CalendarClass = class {
  constructor(selectDate = null) {
    this.currentDate = /* @__PURE__ */ new Date();
    this.selectedDate = selectDate ?? null;
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
      const isSelected = this.selectedDate != null && this.selectedDate.toISOString().split("T")[0] === date.toISOString().split("T")[0];
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
  onDateClick,
  selectedDate
}) {
  _s();
  const [calendar, setCalendar] = (0, import_react.useState)(new CalendarClass());
  const days = calendar.generateMonthMatrix(calendar.currentDate.getFullYear(), calendar.currentDate.getMonth());
  const handleNextMonth = () => {
    setCalendar((prevCalendar) => {
      const newCalendar = new CalendarClass(selectedDate ?? null);
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
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500", onClick: handlePrevMonth, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Previous month" }, void 0, false, {
          fileName: "app/components/Calendar.jsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeftIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/Calendar.jsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500", onClick: handleNextMonth, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Next month" }, void 0, false, {
          fileName: "app/components/Calendar.jsx",
          lineNumber: 123,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRightIcon_default, { className: "h-5 w-5", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/Calendar.jsx",
          lineNumber: 124,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 122,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Calendar.jsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "M" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 128,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "T" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "W" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "T" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "F" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 132,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "S" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 133,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "S" }, void 0, false, {
        fileName: "app/components/Calendar.jsx",
        lineNumber: 134,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Calendar.jsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 grid grid-cols-7 text-sm", children: days.map((day, dayIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: classNames(dayIdx > 6 && "border-t border-gray-200", "py-2"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: classNames(day?.isSelected && "text-white", !day.isSelected && day.isToday && "text-indigo-600", !day.isSelected && !day.isToday && day.isCurrentMonth && "text-gray-900", !day.isSelected && !day.isToday && !day.isCurrentMonth && "text-gray-400", day.isSelected && day.isToday && "bg-indigo-600", day.isSelected && !day.isToday && "bg-gray-900", !day.isSelected && "hover:bg-gray-200", (day.isSelected || day.isToday) && "font-semibold", "mx-auto flex h-8 w-8 items-center justify-center rounded-full"), onClick: () => handleDateClick(day.date), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", { dateTime: day.date.toISOString(), children: day.date.getDate().toString().padStart(2, "0") }, void 0, false, {
      fileName: "app/components/Calendar.jsx",
      lineNumber: 139,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Calendar.jsx",
      lineNumber: 138,
      columnNumber: 13
    }, this) }, day.date, false, {
      fileName: "app/components/Calendar.jsx",
      lineNumber: 137,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/components/Calendar.jsx",
      lineNumber: 136,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Calendar.jsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
}
_s(Calendar, "jY1W7gh55hv0X/SAeNEsAsaqzaM=");
_c = Calendar;
var _c;
$RefreshReg$(_c, "Calendar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Calendar
};
//# sourceMappingURL=/build/_shared/chunk-XFFU4SYM.js.map
