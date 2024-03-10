import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatch
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

// empty-module:./services/auth.server
var require_auth = __commonJS({
  "empty-module:./services/auth.server"(exports, module) {
    module.exports = {};
  }
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-D7ISSQBJ.css";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t8, e, n2) => e in t8 ? i(t8, e, { enumerable: true, configurable: true, writable: true, value: n2 }) : t8[e] = n2;
var r = (t8, e, n2) => (d(t8, typeof e != "symbol" ? e + "" : e, n2), n2);
var o = class {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e) {
    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var l = (e, f) => {
  s.isServer ? (0, import_react.useEffect)(e, f) : (0, import_react.useLayoutEffect)(e, f);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react2 = __toESM(require_react(), 1);
function s2(e) {
  let r4 = (0, import_react2.useRef)(e);
  return l(() => {
    r4.current = e;
  }, [e]), r4;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react3 = __toESM(require_react(), 1);
var o2 = function(t8) {
  let e = s2(t8);
  return import_react3.default.useCallback((...r4) => e.current(...r4), [e]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react4 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t3 = __toESM(require_react(), 1);
function s3() {
  let r4 = typeof document == "undefined";
  return "useSyncExternalStore" in t3 ? ((o7) => o7.useSyncExternalStore)(t3)(() => () => {
  }, () => false, () => !r4) : false;
}
function l2() {
  let r4 = s3(), [e, n2] = t3.useState(s.isHandoffComplete);
  return e && s.isHandoffComplete === false && n2(false), t3.useEffect(() => {
    e !== true && n2(true);
  }, [e]), t3.useEffect(() => s.handoff(), []), r4 ? false : e;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var o3;
var I = (o3 = import_react4.default.useId) != null ? o3 : function() {
  let n2 = l2(), [e, u4] = import_react4.default.useState(n2 ? () => s.nextId() : null);
  return l(() => {
    e === null && u4(s.nextId());
  }, [e]), e != null ? "" + e : void 0;
};

// node_modules/@headlessui/react/dist/utils/match.js
function u(r4, n2, ...a3) {
  if (r4 in n2) {
    let e = n2[r4];
    return typeof e == "function" ? e(...a3) : e;
  }
  let t8 = new Error(`Tried to handle "${r4}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e) => `"${e}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t8, u), t8;
}

// node_modules/@headlessui/react/dist/utils/owner.js
function o4(r4) {
  return s.isServer ? null : r4 instanceof Node ? r4.ownerDocument : r4 != null && r4.hasOwnProperty("current") && r4.current instanceof Node ? r4.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react5 = __toESM(require_react(), 1);
function i2(t8) {
  var n2;
  if (t8.type)
    return t8.type;
  let e = (n2 = t8.as) != null ? n2 : "button";
  if (typeof e == "string" && e.toLowerCase() === "button")
    return "button";
}
function T(t8, e) {
  let [n2, u4] = (0, import_react5.useState)(() => i2(t8));
  return l(() => {
    u4(i2(t8));
  }, [t8.type, t8.as]), l(() => {
    n2 || e.current && e.current instanceof HTMLButtonElement && !e.current.hasAttribute("type") && u4("button");
  }, [n2, e]), n2;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react6 = __toESM(require_react(), 1);
var u2 = Symbol();
function T2(t8, n2 = true) {
  return Object.assign(t8, { [u2]: n2 });
}
function y(...t8) {
  let n2 = (0, import_react6.useRef)(t8);
  (0, import_react6.useEffect)(() => {
    n2.current = t8;
  }, [t8]);
  let c2 = o2((e) => {
    for (let o7 of n2.current)
      o7 != null && (typeof o7 == "function" ? o7(e) : o7.current = e);
  });
  return t8.every((e) => e == null || (e == null ? void 0 : e[u2])) ? void 0 : c2;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react7 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t5(...r4) {
  return Array.from(new Set(r4.flatMap((n2) => typeof n2 == "string" ? n2.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/render.js
var O = ((n2) => (n2[n2.None = 0] = "None", n2[n2.RenderStrategy = 1] = "RenderStrategy", n2[n2.Static = 2] = "Static", n2))(O || {});
var v = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(v || {});
function C({ ourProps: r4, theirProps: t8, slot: e, defaultTag: n2, features: o7, visible: a3 = true, name: f, mergeRefs: l5 }) {
  l5 = l5 != null ? l5 : k;
  let s5 = R(t8, r4);
  if (a3)
    return m(s5, e, n2, f, l5);
  let y2 = o7 != null ? o7 : 0;
  if (y2 & 2) {
    let { static: u4 = false, ...d3 } = s5;
    if (u4)
      return m(d3, e, n2, f, l5);
  }
  if (y2 & 1) {
    let { unmount: u4 = true, ...d3 } = s5;
    return u(u4 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return m({ ...d3, hidden: true, style: { display: "none" } }, e, n2, f, l5);
    } });
  }
  return m(s5, e, n2, f, l5);
}
function m(r4, t8 = {}, e, n2, o7) {
  let { as: a3 = e, children: f, refName: l5 = "ref", ...s5 } = F(r4, ["unmount", "static"]), y2 = r4.ref !== void 0 ? { [l5]: r4.ref } : {}, u4 = typeof f == "function" ? f(t8) : f;
  "className" in s5 && s5.className && typeof s5.className == "function" && (s5.className = s5.className(t8));
  let d3 = {};
  if (t8) {
    let i5 = false, c2 = [];
    for (let [T3, p2] of Object.entries(t8))
      typeof p2 == "boolean" && (i5 = true), p2 === true && c2.push(T3);
    i5 && (d3["data-headlessui-state"] = c2.join(" "));
  }
  if (a3 === import_react7.Fragment && Object.keys(x(s5)).length > 0) {
    if (!(0, import_react7.isValidElement)(u4) || Array.isArray(u4) && u4.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s5).map((p2) => `  - ${p2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p2) => `  - ${p2}`).join(`
`)].join(`
`));
    let i5 = u4.props, c2 = typeof (i5 == null ? void 0 : i5.className) == "function" ? (...p2) => t5(i5 == null ? void 0 : i5.className(...p2), s5.className) : t5(i5 == null ? void 0 : i5.className, s5.className), T3 = c2 ? { className: c2 } : {};
    return (0, import_react7.cloneElement)(u4, Object.assign({}, R(u4.props, x(F(s5, ["ref"]))), d3, y2, { ref: o7(u4.ref, y2.ref) }, T3));
  }
  return (0, import_react7.createElement)(a3, Object.assign({}, F(s5, ["ref"]), a3 !== import_react7.Fragment && y2, a3 !== import_react7.Fragment && d3), u4);
}
function I2() {
  let r4 = (0, import_react7.useRef)([]), t8 = (0, import_react7.useCallback)((e) => {
    for (let n2 of r4.current)
      n2 != null && (typeof n2 == "function" ? n2(e) : n2.current = e);
  }, []);
  return (...e) => {
    if (!e.every((n2) => n2 == null))
      return r4.current = e, t8;
  };
}
function k(...r4) {
  return r4.every((t8) => t8 == null) ? void 0 : (t8) => {
    for (let e of r4)
      e != null && (typeof e == "function" ? e(t8) : e.current = t8);
  };
}
function R(...r4) {
  var n2;
  if (r4.length === 0)
    return {};
  if (r4.length === 1)
    return r4[0];
  let t8 = {}, e = {};
  for (let o7 of r4)
    for (let a3 in o7)
      a3.startsWith("on") && typeof o7[a3] == "function" ? ((n2 = e[a3]) != null || (e[a3] = []), e[a3].push(o7[a3])) : t8[a3] = o7[a3];
  if (t8.disabled || t8["aria-disabled"])
    return Object.assign(t8, Object.fromEntries(Object.keys(e).map((o7) => [o7, void 0])));
  for (let o7 in e)
    Object.assign(t8, { [o7](a3, ...f) {
      let l5 = e[o7];
      for (let s5 of l5) {
        if ((a3 instanceof Event || (a3 == null ? void 0 : a3.nativeEvent) instanceof Event) && a3.defaultPrevented)
          return;
        s5(a3, ...f);
      }
    } });
  return t8;
}
function U(r4) {
  var t8;
  return Object.assign((0, import_react7.forwardRef)(r4), { displayName: (t8 = r4.displayName) != null ? t8 : r4.name });
}
function x(r4) {
  let t8 = Object.assign({}, r4);
  for (let e in t8)
    t8[e] === void 0 && delete t8[e];
  return t8;
}
function F(r4, t8 = []) {
  let e = Object.assign({}, r4);
  for (let n2 of t8)
    n2 in e && delete e[n2];
  return e;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react8 = __toESM(require_react(), 1);
var n = (0, import_react8.createContext)(null);
n.displayName = "OpenClosedContext";
var d2 = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(d2 || {});
function u3() {
  return (0, import_react8.useContext)(n);
}
function s4({ value: o7, children: r4 }) {
  return import_react8.default.createElement(n.Provider, { value: o7 }, r4);
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r2(n2) {
  let e = n2.parentElement, l5 = null;
  for (; e && !(e instanceof HTMLFieldSetElement); )
    e instanceof HTMLLegendElement && (l5 = e), e = e.parentElement;
  let t8 = (e == null ? void 0 : e.getAttribute("disabled")) === "";
  return t8 && i4(l5) ? false : t8;
}
function i4(n2) {
  if (!n2)
    return false;
  let e = n2.previousElementSibling;
  for (; e !== null; ) {
    if (e instanceof HTMLLegendElement)
      return false;
    e = e.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/keyboard.js
var o6 = ((r4) => (r4.Space = " ", r4.Enter = "Enter", r4.Escape = "Escape", r4.Backspace = "Backspace", r4.Delete = "Delete", r4.ArrowLeft = "ArrowLeft", r4.ArrowUp = "ArrowUp", r4.ArrowRight = "ArrowRight", r4.ArrowDown = "ArrowDown", r4.Home = "Home", r4.End = "End", r4.PageUp = "PageUp", r4.PageDown = "PageDown", r4.Tab = "Tab", r4))(o6 || {});

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react10 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react9 = __toESM(require_react(), 1);
var t7;
var a2 = (t7 = import_react9.default.startTransition) != null ? t7 : function(i5) {
  i5();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var Q = ((o7) => (o7[o7.Open = 0] = "Open", o7[o7.Closed = 1] = "Closed", o7))(Q || {});
var V = ((t8) => (t8[t8.ToggleDisclosure = 0] = "ToggleDisclosure", t8[t8.CloseDisclosure = 1] = "CloseDisclosure", t8[t8.SetButtonId = 2] = "SetButtonId", t8[t8.SetPanelId = 3] = "SetPanelId", t8[t8.LinkPanel = 4] = "LinkPanel", t8[t8.UnlinkPanel = 5] = "UnlinkPanel", t8))(V || {});
var Y = { [0]: (e) => ({ ...e, disclosureState: u(e.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e) => e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }, [4](e) {
  return e.linkedPanel === true ? e : { ...e, linkedPanel: true };
}, [5](e) {
  return e.linkedPanel === false ? e : { ...e, linkedPanel: false };
}, [2](e, n2) {
  return e.buttonId === n2.buttonId ? e : { ...e, buttonId: n2.buttonId };
}, [3](e, n2) {
  return e.panelId === n2.panelId ? e : { ...e, panelId: n2.panelId };
} };
var M = (0, import_react10.createContext)(null);
M.displayName = "DisclosureContext";
function _(e) {
  let n2 = (0, import_react10.useContext)(M);
  if (n2 === null) {
    let o7 = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o7, _), o7;
  }
  return n2;
}
var v2 = (0, import_react10.createContext)(null);
v2.displayName = "DisclosureAPIContext";
function K(e) {
  let n2 = (0, import_react10.useContext)(v2);
  if (n2 === null) {
    let o7 = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o7, K), o7;
  }
  return n2;
}
var F2 = (0, import_react10.createContext)(null);
F2.displayName = "DisclosurePanelContext";
function Z() {
  return (0, import_react10.useContext)(F2);
}
function ee(e, n2) {
  return u(n2.type, Y, e, n2);
}
var te = import_react10.Fragment;
function ne(e, n2) {
  let { defaultOpen: o7 = false, ...i5 } = e, f = (0, import_react10.useRef)(null), l5 = y(n2, T2((u4) => {
    f.current = u4;
  }, e.as === void 0 || e.as === import_react10.Fragment)), t8 = (0, import_react10.useRef)(null), d3 = (0, import_react10.useRef)(null), s5 = (0, import_react10.useReducer)(ee, { disclosureState: o7 ? 0 : 1, linkedPanel: false, buttonRef: d3, panelRef: t8, buttonId: null, panelId: null }), [{ disclosureState: c2, buttonId: a3 }, D] = s5, p2 = o2((u4) => {
    D({ type: 1 });
    let y2 = o4(f);
    if (!y2 || !a3)
      return;
    let r4 = (() => u4 ? u4 instanceof HTMLElement ? u4 : u4.current instanceof HTMLElement ? u4.current : y2.getElementById(a3) : y2.getElementById(a3))();
    r4 == null || r4.focus();
  }), P2 = (0, import_react10.useMemo)(() => ({ close: p2 }), [p2]), T3 = (0, import_react10.useMemo)(() => ({ open: c2 === 0, close: p2 }), [c2, p2]), C2 = { ref: l5 };
  return import_react10.default.createElement(M.Provider, { value: s5 }, import_react10.default.createElement(v2.Provider, { value: P2 }, import_react10.default.createElement(s4, { value: u(c2, { [0]: d2.Open, [1]: d2.Closed }) }, C({ ourProps: C2, theirProps: i5, slot: T3, defaultTag: te, name: "Disclosure" }))));
}
var le = "button";
function oe(e, n2) {
  let o7 = I(), { id: i5 = `headlessui-disclosure-button-${o7}`, ...f } = e, [l5, t8] = _("Disclosure.Button"), d3 = Z(), s5 = d3 === null ? false : d3 === l5.panelId, c2 = (0, import_react10.useRef)(null), a3 = y(c2, n2, s5 ? null : l5.buttonRef), D = I2();
  (0, import_react10.useEffect)(() => {
    if (!s5)
      return t8({ type: 2, buttonId: i5 }), () => {
        t8({ type: 2, buttonId: null });
      };
  }, [i5, t8, s5]);
  let p2 = o2((r4) => {
    var m2;
    if (s5) {
      if (l5.disclosureState === 1)
        return;
      switch (r4.key) {
        case o6.Space:
        case o6.Enter:
          r4.preventDefault(), r4.stopPropagation(), t8({ type: 0 }), (m2 = l5.buttonRef.current) == null || m2.focus();
          break;
      }
    } else
      switch (r4.key) {
        case o6.Space:
        case o6.Enter:
          r4.preventDefault(), r4.stopPropagation(), t8({ type: 0 });
          break;
      }
  }), P2 = o2((r4) => {
    switch (r4.key) {
      case o6.Space:
        r4.preventDefault();
        break;
    }
  }), T3 = o2((r4) => {
    var m2;
    r2(r4.currentTarget) || e.disabled || (s5 ? (t8({ type: 0 }), (m2 = l5.buttonRef.current) == null || m2.focus()) : t8({ type: 0 }));
  }), C2 = (0, import_react10.useMemo)(() => ({ open: l5.disclosureState === 0 }), [l5]), u4 = T(e, c2), y2 = s5 ? { ref: a3, type: u4, onKeyDown: p2, onClick: T3 } : { ref: a3, id: i5, type: u4, "aria-expanded": l5.disclosureState === 0, "aria-controls": l5.linkedPanel ? l5.panelId : void 0, onKeyDown: p2, onKeyUp: P2, onClick: T3 };
  return C({ mergeRefs: D, ourProps: y2, theirProps: f, slot: C2, defaultTag: le, name: "Disclosure.Button" });
}
var re = "div";
var se = O.RenderStrategy | O.Static;
function ue(e, n2) {
  let o7 = I(), { id: i5 = `headlessui-disclosure-panel-${o7}`, ...f } = e, [l5, t8] = _("Disclosure.Panel"), { close: d3 } = K("Disclosure.Panel"), s5 = I2(), c2 = y(n2, l5.panelRef, (T3) => {
    a2(() => t8({ type: T3 ? 4 : 5 }));
  });
  (0, import_react10.useEffect)(() => (t8({ type: 3, panelId: i5 }), () => {
    t8({ type: 3, panelId: null });
  }), [i5, t8]);
  let a3 = u3(), D = (() => a3 !== null ? (a3 & d2.Open) === d2.Open : l5.disclosureState === 0)(), p2 = (0, import_react10.useMemo)(() => ({ open: l5.disclosureState === 0, close: d3 }), [l5, d3]), P2 = { ref: c2, id: i5 };
  return import_react10.default.createElement(F2.Provider, { value: l5.panelId }, C({ mergeRefs: s5, ourProps: P2, theirProps: f, slot: p2, defaultTag: re, features: se, visible: D, name: "Disclosure.Panel" }));
}
var ie = U(ne);
var ae = U(oe);
var pe = U(ue);
var Ae = Object.assign(ie, { Button: ae, Panel: pe });

// node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var React = __toESM(require_react(), 1);
function Bars3Icon({
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
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
var ForwardRef = React.forwardRef(Bars3Icon);
var Bars3Icon_default = ForwardRef;

// node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var React2 = __toESM(require_react(), 1);
function XMarkIcon({
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
    d: "M6 18 18 6M6 6l12 12"
  }));
}
var ForwardRef2 = React2.forwardRef(XMarkIcon);
var XMarkIcon_default = ForwardRef2;

// app/components/Nav.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Nav.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Nav.jsx"
  );
  import.meta.hot.lastModified = "1710021520774.584";
}
function NavBar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae, { as: "nav", className: "bg-white shadow", children: ({
    open
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex h-16 justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae.Button, { className: "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute -inset-0.5" }, void 0, false, {
          fileName: "app/components/Nav.jsx",
          lineNumber: 36,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
          fileName: "app/components/Nav.jsx",
          lineNumber: 37,
          columnNumber: 19
        }, this),
        open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XMarkIcon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/Nav.jsx",
          lineNumber: 38,
          columnNumber: 27
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Bars3Icon_default, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "app/components/Nav.jsx",
          lineNumber: 38,
          columnNumber: 88
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Nav.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/Nav.jsx",
        lineNumber: 33,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:ml-6 sm:flex sm:space-x-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/events", className: ({
          isActive
        }) => {
          return isActive ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-indigo-700 hover:border-gray-300 hover:text-gray-700" : "inline-flex items-center border-b-2 border-white px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700";
        }, children: "Find a Meetup" }, void 0, false, {
          fileName: "app/components/Nav.jsx",
          lineNumber: 45,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/add-event", className: ({
          isActive
        }) => {
          return isActive ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-indigo-700 hover:border-gray-300 hover:text-gray-700" : "inline-flex items-center border-b-2 border-white px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700";
        }, children: "Create a Meetup" }, void 0, false, {
          fileName: "app/components/Nav.jsx",
          lineNumber: 52,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Nav.jsx",
        lineNumber: 43,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/Nav.jsx",
        lineNumber: 42,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-y-0 right-0 flex ite\n              ms-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "/profile", className: "text-gray-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "h-10 w-10 rounded-full", src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "profile" }, void 0, false, {
        fileName: "app/components/Nav.jsx",
        lineNumber: 64,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/components/Nav.jsx",
        lineNumber: 63,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/Nav.jsx",
        lineNumber: 61,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Nav.jsx",
      lineNumber: 32,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Nav.jsx",
      lineNumber: 31,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae.Panel, { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1 pb-4 pt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae.Button, { as: "a", href: "#", className: "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700", children: "Dashboard" }, void 0, false, {
        fileName: "app/components/Nav.jsx",
        lineNumber: 73,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae.Button, { as: "a", href: "#", className: "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700", children: "Team" }, void 0, false, {
        fileName: "app/components/Nav.jsx",
        lineNumber: 76,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae.Button, { as: "a", href: "#", className: "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700", children: "Projects" }, void 0, false, {
        fileName: "app/components/Nav.jsx",
        lineNumber: 79,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Ae.Button, { as: "a", href: "#", className: "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700", children: "Calendar" }, void 0, false, {
        fileName: "app/components/Nav.jsx",
        lineNumber: 82,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Nav.jsx",
      lineNumber: 71,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Nav.jsx",
      lineNumber: 70,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Nav.jsx",
    lineNumber: 30,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/Nav.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = NavBar;
function CustomNavLink({
  to
}) {
  _s();
  const match = useMatch(to);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to, className: `inline-flex items-center border-white border-b-2 px-1 pt-1 text-sm font-medium ${match ? "text-gray-900 border-indigo-500 focus:border-indigo-500 focus:text-indigo-700" : "text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:outline-none focus:border-indigo-500 focus:text-indigo-700"}` }, void 0, false, {
    fileName: "app/components/Nav.jsx",
    lineNumber: 96,
    columnNumber: 10
  }, this);
}
_s(CustomNavLink, "cBsQFbnnL5/vzUMKwR9xZ+X32oQ=", false, function() {
  return [useMatch];
});
_c2 = CustomNavLink;
var _c;
var _c2;
$RefreshReg$(_c, "NavBar");
$RefreshReg$(_c2, "CustomNavLink");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.jsx
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.jsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}];
function App() {
  _s2();
  const user = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", className: "h-full bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "h-full", children: [
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavBar, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s2(App, "bH1LW0VjtDD5/q6YH82IbqfBSnU=", false, function() {
  return [useLoaderData];
});
_c3 = App;
var _c3;
$RefreshReg$(_c3, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-UG6SIZEQ.js.map
