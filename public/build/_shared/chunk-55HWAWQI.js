import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-XBRCCPV4.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/Button.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Button.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Button.jsx"
  );
  import.meta.hot.lastModified = "1710262128082.1804";
}
function Button({
  children,
  isDelete,
  onClick,
  type,
  action,
  method,
  className = ""
}) {
  const baseClass = "rounded-md text-sm font-semibold shadow-sm";
  const deleteClass = "bg-red-500 px-3 py-2 text-white hover:bg-red-400";
  const defaultClass = "bg-blue-500 hover:bg-blue-700 text-white px-4 py-2";
  const buttonClass = `${baseClass} ${isDelete ? deleteClass : defaultClass} ${className}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick, className: buttonClass, type, action, method, children }, void 0, false, {
    fileName: "app/components/Button.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c = Button;
var _c;
$RefreshReg$(_c, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Button
};
//# sourceMappingURL=/build/_shared/chunk-55HWAWQI.js.map
