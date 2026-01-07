import { r as Jt, g as Qt, j as P, R as en } from "./client-CsDflUbU.js";
function tn(e, t) {
  for (var n = 0; n < t.length; n++) {
    const o = t[n];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const r in o)
        if (r !== "default" && !(r in e)) {
          const s = Object.getOwnPropertyDescriptor(o, r);
          s && Object.defineProperty(e, r, s.get ? s : {
            enumerable: !0,
            get: () => o[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const nn = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}*,:before,:after{--tw-duration:.15s;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-blur:0;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-blur:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0;--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-scroll-snap-strictness:proximity;--tw-space-x-reverse:0;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-divide-x-reverse:0;--tw-divide-y-reverse:0;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-mask-linear:linear-gradient(#fff,#fff);--tw-mask-radial:linear-gradient(#fff,#fff);--tw-mask-conic:linear-gradient(#fff,#fff);--tw-mask-left:linear-gradient(#fff,#fff);--tw-mask-right:linear-gradient(#fff,#fff);--tw-mask-bottom:linear-gradient(#fff,#fff);--tw-mask-top:linear-gradient(#fff,#fff);--tw-mask-linear-position:0deg;--tw-mask-linear-from-position:0%;--tw-mask-linear-to-position:100%;--tw-mask-linear-from-color:black;--tw-mask-linear-to-color:transparent;--tw-mask-radial-from-position:0%;--tw-mask-radial-to-position:100%;--tw-mask-radial-from-color:black;--tw-mask-radial-to-color:transparent;--tw-mask-radial-shape:ellipse;--tw-mask-radial-size:farthest-corner;--tw-mask-radial-position:center;--tw-mask-conic-position:0deg;--tw-mask-conic-from-position:0%;--tw-mask-conic-to-position:100%;--tw-mask-conic-from-color:black;--tw-mask-conic-to-color:transparent;--tw-drop-shadow-alpha:100%;--tw-content:"";--tw-outline-style:solid;--tw-text-shadow-alpha:100%;--tw-shadow:0 0 #0000;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-alpha:100%;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-500:oklch(55.1% .027 264.364);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-7xl:80rem;--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-bold:700;--radius-lg:.5rem;--radius-xl:.75rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.relative{position:relative}.top-1\\/2{top:50%}.right-0{right:calc(var(--spacing)*0)}.left-0{left:calc(var(--spacing)*0)}.z-10{z-index:10}.mx-auto{margin-inline:auto}.my-12{margin-block:calc(var(--spacing)*12)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.flex{display:flex}.hidden{display:none}.w-full{width:100%}.max-w-7xl{max-width:var(--container-7xl)}.flex-shrink-0{flex-shrink:0}.-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.gap-4{gap:calc(var(--spacing)*4)}.overflow-hidden{overflow:hidden}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-gray-500{border-color:var(--color-gray-500)}.bg-white{background-color:var(--color-white)}.p-0{padding:calc(var(--spacing)*0)}.p-2{padding:calc(var(--spacing)*2)}.p-6{padding:calc(var(--spacing)*6)}.px-4{padding-inline:calc(var(--spacing)*4)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.text-black{color:var(--color-black)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}@media(hover:hover){.group-hover\\:flex:is(:where(.group):hover *){display:flex}}@media(min-width:40rem){.sm\\:my-24{margin-block:calc(var(--spacing)*24)}.sm\\:w-1\\/2{width:50%}.sm\\:px-6{padding-inline:calc(var(--spacing)*6)}.sm\\:text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}';
var A = Jt();
const on = /* @__PURE__ */ Qt(A), rn = /* @__PURE__ */ tn({
  __proto__: null,
  default: on
}, [A]);
function yt(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = yt(e[t])) && (o && (o += " "), o += n);
  } else for (n in e) e[n] && (o && (o += " "), o += n);
  return o;
}
function vt() {
  for (var e, t, n = 0, o = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = yt(e)) && (o && (o += " "), o += t);
  return o;
}
const sn = (e, t) => {
  const n = new Array(e.length + t.length);
  for (let o = 0; o < e.length; o++)
    n[o] = e[o];
  for (let o = 0; o < t.length; o++)
    n[e.length + o] = t[o];
  return n;
}, an = (e, t) => ({
  classGroupId: e,
  validator: t
}), kt = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
  nextPart: e,
  validators: t,
  classGroupId: n
}), Ne = "-", at = [], ln = "arbitrary..", cn = (e) => {
  const t = un(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: o
  } = e;
  return {
    getClassGroupId: (i) => {
      if (i.startsWith("[") && i.endsWith("]"))
        return dn(i);
      const l = i.split(Ne), a = l[0] === "" && l.length > 1 ? 1 : 0;
      return St(l, a, t);
    },
    getConflictingClassGroupIds: (i, l) => {
      if (l) {
        const a = o[i], c = n[i];
        return a ? c ? sn(c, a) : a : c || at;
      }
      return n[i] || at;
    }
  };
}, St = (e, t, n) => {
  if (e.length - t === 0)
    return n.classGroupId;
  const r = e[t], s = n.nextPart.get(r);
  if (s) {
    const c = St(e, t + 1, s);
    if (c) return c;
  }
  const i = n.validators;
  if (i === null)
    return;
  const l = t === 0 ? e.join(Ne) : e.slice(t).join(Ne), a = i.length;
  for (let c = 0; c < a; c++) {
    const p = i[c];
    if (p.validator(l))
      return p.classGroupId;
  }
}, dn = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const t = e.slice(1, -1), n = t.indexOf(":"), o = t.slice(0, n);
  return o ? ln + o : void 0;
})(), un = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e;
  return fn(n, t);
}, fn = (e, t) => {
  const n = kt();
  for (const o in e) {
    const r = e[o];
    qe(r, n, o, t);
  }
  return n;
}, qe = (e, t, n, o) => {
  const r = e.length;
  for (let s = 0; s < r; s++) {
    const i = e[s];
    pn(i, t, n, o);
  }
}, pn = (e, t, n, o) => {
  if (typeof e == "string") {
    mn(e, t, n);
    return;
  }
  if (typeof e == "function") {
    gn(e, t, n, o);
    return;
  }
  hn(e, t, n, o);
}, mn = (e, t, n) => {
  const o = e === "" ? t : Ct(t, e);
  o.classGroupId = n;
}, gn = (e, t, n, o) => {
  if (bn(e)) {
    qe(e(o), t, n, o);
    return;
  }
  t.validators === null && (t.validators = []), t.validators.push(an(n, e));
}, hn = (e, t, n, o) => {
  const r = Object.entries(e), s = r.length;
  for (let i = 0; i < s; i++) {
    const [l, a] = r[i];
    qe(a, Ct(t, l), n, o);
  }
}, Ct = (e, t) => {
  let n = e;
  const o = t.split(Ne), r = o.length;
  for (let s = 0; s < r; s++) {
    const i = o[s];
    let l = n.nextPart.get(i);
    l || (l = kt(), n.nextPart.set(i, l)), n = l;
  }
  return n;
}, bn = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, wn = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const r = (s, i) => {
    n[s] = i, t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(s) {
      let i = n[s];
      if (i !== void 0)
        return i;
      if ((i = o[s]) !== void 0)
        return r(s, i), i;
    },
    set(s, i) {
      s in n ? n[s] = i : r(s, i);
    }
  };
}, $e = "!", lt = ":", xn = [], ct = (e, t, n, o, r) => ({
  modifiers: e,
  hasImportantModifier: t,
  baseClassName: n,
  maybePostfixModifierPosition: o,
  isExternal: r
}), yn = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let o = (r) => {
    const s = [];
    let i = 0, l = 0, a = 0, c;
    const p = r.length;
    for (let g = 0; g < p; g++) {
      const h = r[g];
      if (i === 0 && l === 0) {
        if (h === lt) {
          s.push(r.slice(a, g)), a = g + 1;
          continue;
        }
        if (h === "/") {
          c = g;
          continue;
        }
      }
      h === "[" ? i++ : h === "]" ? i-- : h === "(" ? l++ : h === ")" && l--;
    }
    const u = s.length === 0 ? r : r.slice(a);
    let m = u, w = !1;
    u.endsWith($e) ? (m = u.slice(0, -1), w = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      u.startsWith($e) && (m = u.slice(1), w = !0)
    );
    const f = c && c > a ? c - a : void 0;
    return ct(s, w, m, f);
  };
  if (t) {
    const r = t + lt, s = o;
    o = (i) => i.startsWith(r) ? s(i.slice(r.length)) : ct(xn, !1, i, void 0, !0);
  }
  if (n) {
    const r = o;
    o = (s) => n({
      className: s,
      parseClassName: r
    });
  }
  return o;
}, vn = (e) => {
  const t = /* @__PURE__ */ new Map();
  return e.orderSensitiveModifiers.forEach((n, o) => {
    t.set(n, 1e6 + o);
  }), (n) => {
    const o = [];
    let r = [];
    for (let s = 0; s < n.length; s++) {
      const i = n[s], l = i[0] === "[", a = t.has(i);
      l || a ? (r.length > 0 && (r.sort(), o.push(...r), r = []), o.push(i)) : r.push(i);
    }
    return r.length > 0 && (r.sort(), o.push(...r)), o;
  };
}, kn = (e) => ({
  cache: wn(e.cacheSize),
  parseClassName: yn(e),
  sortModifiers: vn(e),
  ...cn(e)
}), Sn = /\s+/, Cn = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: o,
    getConflictingClassGroupIds: r,
    sortModifiers: s
  } = t, i = [], l = e.trim().split(Sn);
  let a = "";
  for (let c = l.length - 1; c >= 0; c -= 1) {
    const p = l[c], {
      isExternal: u,
      modifiers: m,
      hasImportantModifier: w,
      baseClassName: f,
      maybePostfixModifierPosition: g
    } = n(p);
    if (u) {
      a = p + (a.length > 0 ? " " + a : a);
      continue;
    }
    let h = !!g, d = o(h ? f.substring(0, g) : f);
    if (!d) {
      if (!h) {
        a = p + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (d = o(f), !d) {
        a = p + (a.length > 0 ? " " + a : a);
        continue;
      }
      h = !1;
    }
    const x = m.length === 0 ? "" : m.length === 1 ? m[0] : s(m).join(":"), S = w ? x + $e : x, L = S + d;
    if (i.indexOf(L) > -1)
      continue;
    i.push(L);
    const N = r(d, h);
    for (let j = 0; j < N.length; ++j) {
      const z = N[j];
      i.push(S + z);
    }
    a = p + (a.length > 0 ? " " + a : a);
  }
  return a;
}, zn = (...e) => {
  let t = 0, n, o, r = "";
  for (; t < e.length; )
    (n = e[t++]) && (o = zt(n)) && (r && (r += " "), r += o);
  return r;
}, zt = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (t = zt(e[o])) && (n && (n += " "), n += t);
  return n;
}, En = (e, ...t) => {
  let n, o, r, s;
  const i = (a) => {
    const c = t.reduce((p, u) => u(p), e());
    return n = kn(c), o = n.cache.get, r = n.cache.set, s = l, l(a);
  }, l = (a) => {
    const c = o(a);
    if (c)
      return c;
    const p = Cn(a, n);
    return r(a, p), p;
  };
  return s = i, (...a) => s(zn(...a));
}, An = [], $ = (e) => {
  const t = (n) => n[e] || An;
  return t.isThemeGetter = !0, t;
}, Et = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, At = /^\((?:(\w[\w-]*):)?(.+)\)$/i, In = /^\d+\/\d+$/, jn = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ln = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Nn = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Tn = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Pn = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, be = (e) => In.test(e), E = (e) => !!e && !Number.isNaN(Number(e)), de = (e) => !!e && Number.isInteger(Number(e)), _e = (e) => e.endsWith("%") && E(e.slice(0, -1)), ie = (e) => jn.test(e), Mn = () => !0, On = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ln.test(e) && !Nn.test(e)
), It = () => !1, Rn = (e) => Tn.test(e), Dn = (e) => Pn.test(e), Vn = (e) => !y(e) && !v(e), Fn = (e) => we(e, Nt, It), y = (e) => Et.test(e), me = (e) => we(e, Tt, On), Be = (e) => we(e, Un, E), dt = (e) => we(e, jt, It), Gn = (e) => we(e, Lt, Dn), je = (e) => we(e, Pt, Rn), v = (e) => At.test(e), ve = (e) => xe(e, Tt), _n = (e) => xe(e, Hn), ut = (e) => xe(e, jt), Bn = (e) => xe(e, Nt), $n = (e) => xe(e, Lt), Le = (e) => xe(e, Pt, !0), we = (e, t, n) => {
  const o = Et.exec(e);
  return o ? o[1] ? t(o[1]) : n(o[2]) : !1;
}, xe = (e, t, n = !1) => {
  const o = At.exec(e);
  return o ? o[1] ? t(o[1]) : n : !1;
}, jt = (e) => e === "position" || e === "percentage", Lt = (e) => e === "image" || e === "url", Nt = (e) => e === "length" || e === "size" || e === "bg-size", Tt = (e) => e === "length", Un = (e) => e === "number", Hn = (e) => e === "family-name", Pt = (e) => e === "shadow", qn = () => {
  const e = $("color"), t = $("font"), n = $("text"), o = $("font-weight"), r = $("tracking"), s = $("leading"), i = $("breakpoint"), l = $("container"), a = $("spacing"), c = $("radius"), p = $("shadow"), u = $("inset-shadow"), m = $("text-shadow"), w = $("drop-shadow"), f = $("blur"), g = $("perspective"), h = $("aspect"), d = $("ease"), x = $("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], L = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], N = () => [...L(), v, y], j = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", "contain", "none"], b = () => [v, y, a], I = () => [be, "full", "auto", ...b()], D = () => [de, "none", "subgrid", v, y], M = () => ["auto", {
    span: ["full", de, v, y]
  }, de, v, y], B = () => [de, "auto", v, y], J = () => ["auto", "min", "max", "fr", v, y], X = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], q = () => ["auto", ...b()], K = () => [be, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], C = () => [e, v, y], ee = () => [...L(), ut, dt, {
    position: [v, y]
  }], ae = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Q = () => ["auto", "cover", "contain", Bn, Fn, {
    size: [v, y]
  }], ne = () => [_e, ve, me], G = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    v,
    y
  ], V = () => ["", E, ve, me], oe = () => ["solid", "dashed", "dotted", "double"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], T = () => [E, _e, ut, dt], U = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    f,
    v,
    y
  ], Z = () => ["none", E, v, y], W = () => ["none", E, v, y], O = () => [E, v, y], k = () => [be, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ie],
      breakpoint: [ie],
      color: [Mn],
      container: [ie],
      "drop-shadow": [ie],
      ease: ["in", "out", "in-out"],
      font: [Vn],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ie],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ie],
      shadow: [ie],
      spacing: ["px", E],
      text: [ie],
      "text-shadow": [ie],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", be, y, v, h]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [E, y, v, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": S()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": S()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: N()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: j()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": j()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": j()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": z()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: I()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: I()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [de, "auto", v, y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [be, "full", "auto", l, ...b()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [E, be, "auto", "initial", "none", y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", E, v, y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", E, v, y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [de, "first", "last", "none", v, y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": D()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: M()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": D()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: M()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": J()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": J()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: b()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": b()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": b()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...X(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...H(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...H()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...X()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": X()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...H(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...H()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: b()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: b()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: b()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: b()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: b()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: b()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: b()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: b()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: b()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: q()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: q()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: q()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: q()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: q()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: q()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: q()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: q()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: q()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": b()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": b()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: K()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...K()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...K()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [i]
          },
          ...K()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...K()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...K()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...K()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, ve, me]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, v, Be]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", _e, y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_n, y, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [r, v, y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [E, "none", v, Be]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...b()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", v, y]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", v, y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: C()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: C()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...oe(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [E, "from-font", "auto", v, me]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: C()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [E, "auto", v, y]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: b()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", v, y]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", v, y]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: ee()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ae()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Q()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, de, v, y],
          radial: ["", v, y],
          conic: [de, v, y]
        }, $n, Gn]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: C()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ne()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ne()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ne()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: C()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: C()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: C()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: G()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": G()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": G()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": G()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": G()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": G()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": G()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": G()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": G()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": G()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": G()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": G()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": G()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": G()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": G()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: V()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": V()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": V()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": V()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": V()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": V()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": V()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": V()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": V()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": V()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": V()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...oe(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...oe(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: C()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": C()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": C()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": C()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": C()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": C()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": C()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": C()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": C()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: C()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...oe(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [E, v, y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", E, ve, me]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: C()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          Le,
          je
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: C()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", u, Le, je]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": C()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: V()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: C()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [E, me]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": C()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": V()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": C()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Le, je]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": C()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [E, v, y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...le(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [E]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": T()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": C()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": C()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": T()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": C()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": C()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": T()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": C()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": C()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": T()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": C()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": C()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": T()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": C()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": C()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": T()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": C()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": C()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": T()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": C()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": C()
      }],
      "mask-image-radial": [{
        "mask-radial": [v, y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": T()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": T()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": C()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": C()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": L()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [E]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": T()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": T()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": C()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": C()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: ee()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: ae()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Q()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", v, y]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          v,
          y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: U()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [E, v, y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [E, v, y]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          w,
          Le,
          je
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": C()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", E, v, y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [E, v, y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", E, v, y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [E, v, y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", E, v, y]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          v,
          y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": U()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [E, v, y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [E, v, y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", E, v, y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [E, v, y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", E, v, y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [E, v, y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [E, v, y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", E, v, y]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": b()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": b()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": b()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", v, y]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [E, "initial", v, y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", d, v, y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [E, v, y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, v, y]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [g, v, y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": N()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Z()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Z()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Z()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Z()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: W()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": W()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": W()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": W()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: O()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": O()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": O()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [v, y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: N()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: k()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": k()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": k()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": k()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: C()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: C()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", v, y]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": b()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", v, y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...C()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [E, ve, me, Be]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...C()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Wn = /* @__PURE__ */ En(qn);
function ue(...e) {
  return Wn(vt(e));
}
function Kn({ className: e, ...t }) {
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      "data-slot": "card",
      className: ue(
        "flex flex-col gap-6 bg-card shadow-sm py-6 border rounded-xl text-card-foreground",
        e
      ),
      ...t
    }
  );
}
function Yn({ className: e, ...t }) {
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      "data-slot": "card-content",
      className: ue("px-6", e),
      ...t
    }
  );
}
function Xn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ft(e) {
  return Xn(e) || Array.isArray(e);
}
function Zn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function We(e, t) {
  const n = Object.keys(e), o = Object.keys(t);
  if (n.length !== o.length) return !1;
  const r = JSON.stringify(Object.keys(e.breakpoints || {})), s = JSON.stringify(Object.keys(t.breakpoints || {}));
  return r !== s ? !1 : n.every((i) => {
    const l = e[i], a = t[i];
    return typeof l == "function" ? `${l}` == `${a}` : !ft(l) || !ft(a) ? l === a : We(l, a);
  });
}
function pt(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function Jn(e, t) {
  if (e.length !== t.length) return !1;
  const n = pt(e), o = pt(t);
  return n.every((r, s) => {
    const i = o[s];
    return We(r, i);
  });
}
function Ke(e) {
  return typeof e == "number";
}
function Ue(e) {
  return typeof e == "string";
}
function Me(e) {
  return typeof e == "boolean";
}
function mt(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function F(e) {
  return Math.abs(e);
}
function Ye(e) {
  return Math.sign(e);
}
function Se(e, t) {
  return F(e - t);
}
function Qn(e, t) {
  if (e === 0 || t === 0 || F(e) <= F(t)) return 0;
  const n = Se(F(e), F(t));
  return F(n / e);
}
function eo(e) {
  return Math.round(e * 100) / 100;
}
function Ce(e) {
  return ze(e).map(Number);
}
function te(e) {
  return e[Ae(e)];
}
function Ae(e) {
  return Math.max(0, e.length - 1);
}
function Xe(e, t) {
  return t === Ae(e);
}
function gt(e, t = 0) {
  return Array.from(Array(e), (n, o) => t + o);
}
function ze(e) {
  return Object.keys(e);
}
function Mt(e, t) {
  return [e, t].reduce((n, o) => (ze(o).forEach((r) => {
    const s = n[r], i = o[r], l = mt(s) && mt(i);
    n[r] = l ? Mt(s, i) : i;
  }), n), {});
}
function He(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function to(e, t) {
  const n = {
    start: o,
    center: r,
    end: s
  };
  function o() {
    return 0;
  }
  function r(a) {
    return s(a) / 2;
  }
  function s(a) {
    return t - a;
  }
  function i(a, c) {
    return Ue(e) ? n[e](a) : e(t, a, c);
  }
  return {
    measure: i
  };
}
function Ee() {
  let e = [];
  function t(r, s, i, l = {
    passive: !0
  }) {
    let a;
    if ("addEventListener" in r)
      r.addEventListener(s, i, l), a = () => r.removeEventListener(s, i, l);
    else {
      const c = r;
      c.addListener(i), a = () => c.removeListener(i);
    }
    return e.push(a), o;
  }
  function n() {
    e = e.filter((r) => r());
  }
  const o = {
    add: t,
    clear: n
  };
  return o;
}
function no(e, t, n, o) {
  const r = Ee(), s = 1e3 / 60;
  let i = null, l = 0, a = 0;
  function c() {
    r.add(e, "visibilitychange", () => {
      e.hidden && f();
    });
  }
  function p() {
    w(), r.clear();
  }
  function u(h) {
    if (!a) return;
    i || (i = h, n(), n());
    const d = h - i;
    for (i = h, l += d; l >= s; )
      n(), l -= s;
    const x = l / s;
    o(x), a && (a = t.requestAnimationFrame(u));
  }
  function m() {
    a || (a = t.requestAnimationFrame(u));
  }
  function w() {
    t.cancelAnimationFrame(a), i = null, l = 0, a = 0;
  }
  function f() {
    i = null, l = 0;
  }
  return {
    init: c,
    destroy: p,
    start: m,
    stop: w,
    update: n,
    render: o
  };
}
function oo(e, t) {
  const n = t === "rtl", o = e === "y", r = o ? "y" : "x", s = o ? "x" : "y", i = !o && n ? -1 : 1, l = p(), a = u();
  function c(f) {
    const {
      height: g,
      width: h
    } = f;
    return o ? g : h;
  }
  function p() {
    return o ? "top" : n ? "right" : "left";
  }
  function u() {
    return o ? "bottom" : n ? "left" : "right";
  }
  function m(f) {
    return f * i;
  }
  return {
    scroll: r,
    cross: s,
    startEdge: l,
    endEdge: a,
    measureSize: c,
    direction: m
  };
}
function ge(e = 0, t = 0) {
  const n = F(e - t);
  function o(c) {
    return c < e;
  }
  function r(c) {
    return c > t;
  }
  function s(c) {
    return o(c) || r(c);
  }
  function i(c) {
    return s(c) ? o(c) ? e : t : c;
  }
  function l(c) {
    return n ? c - n * Math.ceil((c - t) / n) : c;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: i,
    reachedAny: s,
    reachedMax: r,
    reachedMin: o,
    removeOffset: l
  };
}
function Ot(e, t, n) {
  const {
    constrain: o
  } = ge(0, e), r = e + 1;
  let s = i(t);
  function i(m) {
    return n ? F((r + m) % r) : o(m);
  }
  function l() {
    return s;
  }
  function a(m) {
    return s = i(m), u;
  }
  function c(m) {
    return p().set(l() + m);
  }
  function p() {
    return Ot(e, l(), n);
  }
  const u = {
    get: l,
    set: a,
    add: c,
    clone: p
  };
  return u;
}
function ro(e, t, n, o, r, s, i, l, a, c, p, u, m, w, f, g, h, d, x) {
  const {
    cross: S,
    direction: L
  } = e, N = ["INPUT", "SELECT", "TEXTAREA"], j = {
    passive: !1
  }, z = Ee(), b = Ee(), I = ge(50, 225).constrain(w.measure(20)), D = {
    mouse: 300,
    touch: 400
  }, M = {
    mouse: 500,
    touch: 600
  }, B = f ? 43 : 25;
  let J = !1, X = 0, H = 0, q = !1, K = !1, C = !1, ee = !1;
  function ae(k) {
    if (!x) return;
    function R(Y) {
      (Me(x) || x(k, Y)) && le(Y);
    }
    const _ = t;
    z.add(_, "dragstart", (Y) => Y.preventDefault(), j).add(_, "touchmove", () => {
    }, j).add(_, "touchend", () => {
    }).add(_, "touchstart", R).add(_, "mousedown", R).add(_, "touchcancel", U).add(_, "contextmenu", U).add(_, "click", Z, !0);
  }
  function Q() {
    z.clear(), b.clear();
  }
  function ne() {
    const k = ee ? n : t;
    b.add(k, "touchmove", T, j).add(k, "touchend", U).add(k, "mousemove", T, j).add(k, "mouseup", U);
  }
  function G(k) {
    const R = k.nodeName || "";
    return N.includes(R);
  }
  function V() {
    return (f ? M : D)[ee ? "mouse" : "touch"];
  }
  function oe(k, R) {
    const _ = u.add(Ye(k) * -1), Y = p.byDistance(k, !f).distance;
    return f || F(k) < I ? Y : h && R ? Y * 0.5 : p.byIndex(_.get(), 0).distance;
  }
  function le(k) {
    const R = He(k, o);
    ee = R, C = f && R && !k.buttons && J, J = Se(r.get(), i.get()) >= 2, !(R && k.button !== 0) && (G(k.target) || (q = !0, s.pointerDown(k), c.useFriction(0).useDuration(0), r.set(i), ne(), X = s.readPoint(k), H = s.readPoint(k, S), m.emit("pointerDown")));
  }
  function T(k) {
    if (!He(k, o) && k.touches.length >= 2) return U(k);
    const _ = s.readPoint(k), Y = s.readPoint(k, S), re = Se(_, X), se = Se(Y, H);
    if (!K && !ee && (!k.cancelable || (K = re > se, !K)))
      return U(k);
    const fe = s.pointerMove(k);
    re > g && (C = !0), c.useFriction(0.3).useDuration(0.75), l.start(), r.add(L(fe)), k.preventDefault();
  }
  function U(k) {
    const _ = p.byDistance(0, !1).index !== u.get(), Y = s.pointerUp(k) * V(), re = oe(L(Y), _), se = Qn(Y, re), fe = B - 10 * se, ce = d + se / 50;
    K = !1, q = !1, b.clear(), c.useDuration(fe).useFriction(ce), a.distance(re, !f), ee = !1, m.emit("pointerUp");
  }
  function Z(k) {
    C && (k.stopPropagation(), k.preventDefault(), C = !1);
  }
  function W() {
    return q;
  }
  return {
    init: ae,
    destroy: Q,
    pointerDown: W
  };
}
function so(e, t) {
  let o, r;
  function s(u) {
    return u.timeStamp;
  }
  function i(u, m) {
    const f = `client${(m || e.scroll) === "x" ? "X" : "Y"}`;
    return (He(u, t) ? u : u.touches[0])[f];
  }
  function l(u) {
    return o = u, r = u, i(u);
  }
  function a(u) {
    const m = i(u) - i(r), w = s(u) - s(o) > 170;
    return r = u, w && (o = u), m;
  }
  function c(u) {
    if (!o || !r) return 0;
    const m = i(r) - i(o), w = s(u) - s(o), f = s(u) - s(r) > 170, g = m / w;
    return w && !f && F(g) > 0.1 ? g : 0;
  }
  return {
    pointerDown: l,
    pointerMove: a,
    pointerUp: c,
    readPoint: i
  };
}
function io() {
  function e(n) {
    const {
      offsetTop: o,
      offsetLeft: r,
      offsetWidth: s,
      offsetHeight: i
    } = n;
    return {
      top: o,
      right: r + s,
      bottom: o + i,
      left: r,
      width: s,
      height: i
    };
  }
  return {
    measure: e
  };
}
function ao(e) {
  function t(o) {
    return e * (o / 100);
  }
  return {
    measure: t
  };
}
function lo(e, t, n, o, r, s, i) {
  const l = [e].concat(o);
  let a, c, p = [], u = !1;
  function m(h) {
    return r.measureSize(i.measure(h));
  }
  function w(h) {
    if (!s) return;
    c = m(e), p = o.map(m);
    function d(x) {
      for (const S of x) {
        if (u) return;
        const L = S.target === e, N = o.indexOf(S.target), j = L ? c : p[N], z = m(L ? e : o[N]);
        if (F(z - j) >= 0.5) {
          h.reInit(), t.emit("resize");
          break;
        }
      }
    }
    a = new ResizeObserver((x) => {
      (Me(s) || s(h, x)) && d(x);
    }), n.requestAnimationFrame(() => {
      l.forEach((x) => a.observe(x));
    });
  }
  function f() {
    u = !0, a && a.disconnect();
  }
  return {
    init: w,
    destroy: f
  };
}
function co(e, t, n, o, r, s) {
  let i = 0, l = 0, a = r, c = s, p = e.get(), u = 0;
  function m() {
    const j = o.get() - e.get(), z = !a;
    let b = 0;
    return z ? (i = 0, n.set(o), e.set(o), b = j) : (n.set(e), i += j / a, i *= c, p += i, e.add(i), b = p - u), l = Ye(b), u = p, N;
  }
  function w() {
    const j = o.get() - t.get();
    return F(j) < 1e-3;
  }
  function f() {
    return a;
  }
  function g() {
    return l;
  }
  function h() {
    return i;
  }
  function d() {
    return S(r);
  }
  function x() {
    return L(s);
  }
  function S(j) {
    return a = j, N;
  }
  function L(j) {
    return c = j, N;
  }
  const N = {
    direction: g,
    duration: f,
    velocity: h,
    seek: m,
    settled: w,
    useBaseFriction: x,
    useBaseDuration: d,
    useFriction: L,
    useDuration: S
  };
  return N;
}
function uo(e, t, n, o, r) {
  const s = r.measure(10), i = r.measure(50), l = ge(0.1, 0.99);
  let a = !1;
  function c() {
    return !(a || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function p(w) {
    if (!c()) return;
    const f = e.reachedMin(t.get()) ? "min" : "max", g = F(e[f] - t.get()), h = n.get() - t.get(), d = l.constrain(g / i);
    n.subtract(h * d), !w && F(h) < s && (n.set(e.constrain(n.get())), o.useDuration(25).useBaseFriction());
  }
  function u(w) {
    a = !w;
  }
  return {
    shouldConstrain: c,
    constrain: p,
    toggleActive: u
  };
}
function fo(e, t, n, o, r) {
  const s = ge(-t + e, 0), i = u(), l = p(), a = m();
  function c(f, g) {
    return Se(f, g) <= 1;
  }
  function p() {
    const f = i[0], g = te(i), h = i.lastIndexOf(f), d = i.indexOf(g) + 1;
    return ge(h, d);
  }
  function u() {
    return n.map((f, g) => {
      const {
        min: h,
        max: d
      } = s, x = s.constrain(f), S = !g, L = Xe(n, g);
      return S ? d : L || c(h, x) ? h : c(d, x) ? d : x;
    }).map((f) => parseFloat(f.toFixed(3)));
  }
  function m() {
    if (t <= e + r) return [s.max];
    if (o === "keepSnaps") return i;
    const {
      min: f,
      max: g
    } = l;
    return i.slice(f, g);
  }
  return {
    snapsContained: a,
    scrollContainLimit: l
  };
}
function po(e, t, n) {
  const o = t[0], r = n ? o - e : te(t);
  return {
    limit: ge(r, o)
  };
}
function mo(e, t, n, o) {
  const s = t.min + 0.1, i = t.max + 0.1, {
    reachedMin: l,
    reachedMax: a
  } = ge(s, i);
  function c(m) {
    return m === 1 ? a(n.get()) : m === -1 ? l(n.get()) : !1;
  }
  function p(m) {
    if (!c(m)) return;
    const w = e * (m * -1);
    o.forEach((f) => f.add(w));
  }
  return {
    loop: p
  };
}
function go(e) {
  const {
    max: t,
    length: n
  } = e;
  function o(s) {
    const i = s - t;
    return n ? i / -n : 0;
  }
  return {
    get: o
  };
}
function ho(e, t, n, o, r) {
  const {
    startEdge: s,
    endEdge: i
  } = e, {
    groupSlides: l
  } = r, a = u().map(t.measure), c = m(), p = w();
  function u() {
    return l(o).map((g) => te(g)[i] - g[0][s]).map(F);
  }
  function m() {
    return o.map((g) => n[s] - g[s]).map((g) => -F(g));
  }
  function w() {
    return l(c).map((g) => g[0]).map((g, h) => g + a[h]);
  }
  return {
    snaps: c,
    snapsAligned: p
  };
}
function bo(e, t, n, o, r, s) {
  const {
    groupSlides: i
  } = r, {
    min: l,
    max: a
  } = o, c = p();
  function p() {
    const m = i(s), w = !e || t === "keepSnaps";
    return n.length === 1 ? [s] : w ? m : m.slice(l, a).map((f, g, h) => {
      const d = !g, x = Xe(h, g);
      if (d) {
        const S = te(h[0]) + 1;
        return gt(S);
      }
      if (x) {
        const S = Ae(s) - te(h)[0] + 1;
        return gt(S, te(h)[0]);
      }
      return f;
    });
  }
  return {
    slideRegistry: c
  };
}
function wo(e, t, n, o, r) {
  const {
    reachedAny: s,
    removeOffset: i,
    constrain: l
  } = o;
  function a(f) {
    return f.concat().sort((g, h) => F(g) - F(h))[0];
  }
  function c(f) {
    const g = e ? i(f) : l(f), h = t.map((x, S) => ({
      diff: p(x - g, 0),
      index: S
    })).sort((x, S) => F(x.diff) - F(S.diff)), {
      index: d
    } = h[0];
    return {
      index: d,
      distance: g
    };
  }
  function p(f, g) {
    const h = [f, f + n, f - n];
    if (!e) return f;
    if (!g) return a(h);
    const d = h.filter((x) => Ye(x) === g);
    return d.length ? a(d) : te(h) - n;
  }
  function u(f, g) {
    const h = t[f] - r.get(), d = p(h, g);
    return {
      index: f,
      distance: d
    };
  }
  function m(f, g) {
    const h = r.get() + f, {
      index: d,
      distance: x
    } = c(h), S = !e && s(h);
    if (!g || S) return {
      index: d,
      distance: f
    };
    const L = t[d] - x, N = f + p(L, 0);
    return {
      index: d,
      distance: N
    };
  }
  return {
    byDistance: m,
    byIndex: u,
    shortcut: p
  };
}
function xo(e, t, n, o, r, s, i) {
  function l(u) {
    const m = u.distance, w = u.index !== t.get();
    s.add(m), m && (o.duration() ? e.start() : (e.update(), e.render(1), e.update())), w && (n.set(t.get()), t.set(u.index), i.emit("select"));
  }
  function a(u, m) {
    const w = r.byDistance(u, m);
    l(w);
  }
  function c(u, m) {
    const w = t.clone().set(u), f = r.byIndex(w.get(), m);
    l(f);
  }
  return {
    distance: a,
    index: c
  };
}
function yo(e, t, n, o, r, s, i, l) {
  const a = {
    passive: !0,
    capture: !0
  };
  let c = 0;
  function p(w) {
    if (!l) return;
    function f(g) {
      if ((/* @__PURE__ */ new Date()).getTime() - c > 10) return;
      i.emit("slideFocusStart"), e.scrollLeft = 0;
      const x = n.findIndex((S) => S.includes(g));
      Ke(x) && (r.useDuration(0), o.index(x, 0), i.emit("slideFocus"));
    }
    s.add(document, "keydown", u, !1), t.forEach((g, h) => {
      s.add(g, "focus", (d) => {
        (Me(l) || l(w, d)) && f(h);
      }, a);
    });
  }
  function u(w) {
    w.code === "Tab" && (c = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: p
  };
}
function ke(e) {
  let t = e;
  function n() {
    return t;
  }
  function o(a) {
    t = i(a);
  }
  function r(a) {
    t += i(a);
  }
  function s(a) {
    t -= i(a);
  }
  function i(a) {
    return Ke(a) ? a : a.get();
  }
  return {
    get: n,
    set: o,
    add: r,
    subtract: s
  };
}
function Rt(e, t) {
  const n = e.scroll === "x" ? i : l, o = t.style;
  let r = null, s = !1;
  function i(m) {
    return `translate3d(${m}px,0px,0px)`;
  }
  function l(m) {
    return `translate3d(0px,${m}px,0px)`;
  }
  function a(m) {
    if (s) return;
    const w = eo(e.direction(m));
    w !== r && (o.transform = n(w), r = w);
  }
  function c(m) {
    s = !m;
  }
  function p() {
    s || (o.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: p,
    to: a,
    toggleActive: c
  };
}
function vo(e, t, n, o, r, s, i, l, a) {
  const p = Ce(r), u = Ce(r).reverse(), m = d().concat(x());
  function w(z, b) {
    return z.reduce((I, D) => I - r[D], b);
  }
  function f(z, b) {
    return z.reduce((I, D) => w(I, b) > 0 ? I.concat([D]) : I, []);
  }
  function g(z) {
    return s.map((b, I) => ({
      start: b - o[I] + 0.5 + z,
      end: b + t - 0.5 + z
    }));
  }
  function h(z, b, I) {
    const D = g(b);
    return z.map((M) => {
      const B = I ? 0 : -n, J = I ? n : 0, X = I ? "end" : "start", H = D[M][X];
      return {
        index: M,
        loopPoint: H,
        slideLocation: ke(-1),
        translate: Rt(e, a[M]),
        target: () => l.get() > H ? B : J
      };
    });
  }
  function d() {
    const z = i[0], b = f(u, z);
    return h(b, n, !1);
  }
  function x() {
    const z = t - i[0] - 1, b = f(p, z);
    return h(b, -n, !0);
  }
  function S() {
    return m.every(({
      index: z
    }) => {
      const b = p.filter((I) => I !== z);
      return w(b, t) <= 0.1;
    });
  }
  function L() {
    m.forEach((z) => {
      const {
        target: b,
        translate: I,
        slideLocation: D
      } = z, M = b();
      M !== D.get() && (I.to(M), D.set(M));
    });
  }
  function N() {
    m.forEach((z) => z.translate.clear());
  }
  return {
    canLoop: S,
    clear: N,
    loop: L,
    loopPoints: m
  };
}
function ko(e, t, n) {
  let o, r = !1;
  function s(a) {
    if (!n) return;
    function c(p) {
      for (const u of p)
        if (u.type === "childList") {
          a.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    o = new MutationObserver((p) => {
      r || (Me(n) || n(a, p)) && c(p);
    }), o.observe(e, {
      childList: !0
    });
  }
  function i() {
    o && o.disconnect(), r = !0;
  }
  return {
    init: s,
    destroy: i
  };
}
function So(e, t, n, o) {
  const r = {};
  let s = null, i = null, l, a = !1;
  function c() {
    l = new IntersectionObserver((f) => {
      a || (f.forEach((g) => {
        const h = t.indexOf(g.target);
        r[h] = g;
      }), s = null, i = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: o
    }), t.forEach((f) => l.observe(f));
  }
  function p() {
    l && l.disconnect(), a = !0;
  }
  function u(f) {
    return ze(r).reduce((g, h) => {
      const d = parseInt(h), {
        isIntersecting: x
      } = r[d];
      return (f && x || !f && !x) && g.push(d), g;
    }, []);
  }
  function m(f = !0) {
    if (f && s) return s;
    if (!f && i) return i;
    const g = u(f);
    return f && (s = g), f || (i = g), g;
  }
  return {
    init: c,
    destroy: p,
    get: m
  };
}
function Co(e, t, n, o, r, s) {
  const {
    measureSize: i,
    startEdge: l,
    endEdge: a
  } = e, c = n[0] && r, p = f(), u = g(), m = n.map(i), w = h();
  function f() {
    if (!c) return 0;
    const x = n[0];
    return F(t[l] - x[l]);
  }
  function g() {
    if (!c) return 0;
    const x = s.getComputedStyle(te(o));
    return parseFloat(x.getPropertyValue(`margin-${a}`));
  }
  function h() {
    return n.map((x, S, L) => {
      const N = !S, j = Xe(L, S);
      return N ? m[S] + p : j ? m[S] + u : L[S + 1][l] - x[l];
    }).map(F);
  }
  return {
    slideSizes: m,
    slideSizesWithGaps: w,
    startGap: p,
    endGap: u
  };
}
function zo(e, t, n, o, r, s, i, l, a) {
  const {
    startEdge: c,
    endEdge: p,
    direction: u
  } = e, m = Ke(n);
  function w(d, x) {
    return Ce(d).filter((S) => S % x === 0).map((S) => d.slice(S, S + x));
  }
  function f(d) {
    return d.length ? Ce(d).reduce((x, S, L) => {
      const N = te(x) || 0, j = N === 0, z = S === Ae(d), b = r[c] - s[N][c], I = r[c] - s[S][p], D = !o && j ? u(i) : 0, M = !o && z ? u(l) : 0, B = F(I - M - (b + D));
      return L && B > t + a && x.push(S), z && x.push(d.length), x;
    }, []).map((x, S, L) => {
      const N = Math.max(L[S - 1] || 0);
      return d.slice(N, x);
    }) : [];
  }
  function g(d) {
    return m ? w(d, n) : f(d);
  }
  return {
    groupSlides: g
  };
}
function Eo(e, t, n, o, r, s, i) {
  const {
    align: l,
    axis: a,
    direction: c,
    startIndex: p,
    loop: u,
    duration: m,
    dragFree: w,
    dragThreshold: f,
    inViewThreshold: g,
    slidesToScroll: h,
    skipSnaps: d,
    containScroll: x,
    watchResize: S,
    watchSlides: L,
    watchDrag: N,
    watchFocus: j
  } = s, z = 2, b = io(), I = b.measure(t), D = n.map(b.measure), M = oo(a, c), B = M.measureSize(I), J = ao(B), X = to(l, B), H = !u && !!x, q = u || !!x, {
    slideSizes: K,
    slideSizesWithGaps: C,
    startGap: ee,
    endGap: ae
  } = Co(M, I, D, n, q, r), Q = zo(M, B, h, u, I, D, ee, ae, z), {
    snaps: ne,
    snapsAligned: G
  } = ho(M, X, I, D, Q), V = -te(ne) + te(C), {
    snapsContained: oe,
    scrollContainLimit: le
  } = fo(B, V, G, x, z), T = H ? oe : G, {
    limit: U
  } = po(V, T, u), Z = Ot(Ae(T), p, u), W = Z.clone(), O = Ce(n), k = ({
    dragHandler: he,
    scrollBody: Fe,
    scrollBounds: Ge,
    options: {
      loop: Ie
    }
  }) => {
    Ie || Ge.constrain(he.pointerDown()), Fe.seek();
  }, R = ({
    scrollBody: he,
    translate: Fe,
    location: Ge,
    offsetLocation: Ie,
    previousLocation: Ut,
    scrollLooper: Ht,
    slideLooper: qt,
    dragHandler: Wt,
    animation: Kt,
    eventHandler: tt,
    scrollBounds: Yt,
    options: {
      loop: nt
    }
  }, ot) => {
    const rt = he.settled(), Xt = !Yt.shouldConstrain(), st = nt ? rt : rt && Xt, it = st && !Wt.pointerDown();
    it && Kt.stop();
    const Zt = Ge.get() * ot + Ut.get() * (1 - ot);
    Ie.set(Zt), nt && (Ht.loop(he.direction()), qt.loop()), Fe.to(Ie.get()), it && tt.emit("settle"), st || tt.emit("scroll");
  }, _ = no(o, r, () => k(Ve), (he) => R(Ve, he)), Y = 0.68, re = T[Z.get()], se = ke(re), fe = ke(re), ce = ke(re), pe = ke(re), ye = co(se, ce, fe, pe, m, Y), Re = wo(u, T, V, U, pe), De = xo(_, Z, W, ye, Re, pe, i), Je = go(U), Qe = Ee(), Bt = So(t, n, i, g), {
    slideRegistry: et
  } = bo(H, x, T, le, Q, O), $t = yo(e, n, et, De, ye, Qe, i, j), Ve = {
    ownerDocument: o,
    ownerWindow: r,
    eventHandler: i,
    containerRect: I,
    slideRects: D,
    animation: _,
    axis: M,
    dragHandler: ro(M, e, o, r, pe, so(M, r), se, _, De, ye, Re, Z, i, J, w, f, d, Y, N),
    eventStore: Qe,
    percentOfView: J,
    index: Z,
    indexPrevious: W,
    limit: U,
    location: se,
    offsetLocation: ce,
    previousLocation: fe,
    options: s,
    resizeHandler: lo(t, i, r, n, M, S, b),
    scrollBody: ye,
    scrollBounds: uo(U, ce, pe, ye, J),
    scrollLooper: mo(V, U, ce, [se, ce, fe, pe]),
    scrollProgress: Je,
    scrollSnapList: T.map(Je.get),
    scrollSnaps: T,
    scrollTarget: Re,
    scrollTo: De,
    slideLooper: vo(M, B, V, K, C, ne, T, ce, n),
    slideFocus: $t,
    slidesHandler: ko(t, i, L),
    slidesInView: Bt,
    slideIndexes: O,
    slideRegistry: et,
    slidesToScroll: Q,
    target: pe,
    translate: Rt(M, t)
  };
  return Ve;
}
function Ao() {
  let e = {}, t;
  function n(c) {
    t = c;
  }
  function o(c) {
    return e[c] || [];
  }
  function r(c) {
    return o(c).forEach((p) => p(t, c)), a;
  }
  function s(c, p) {
    return e[c] = o(c).concat([p]), a;
  }
  function i(c, p) {
    return e[c] = o(c).filter((u) => u !== p), a;
  }
  function l() {
    e = {};
  }
  const a = {
    init: n,
    emit: r,
    off: i,
    on: s,
    clear: l
  };
  return a;
}
const Io = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function jo(e) {
  function t(s, i) {
    return Mt(s, i || {});
  }
  function n(s) {
    const i = s.breakpoints || {}, l = ze(i).filter((a) => e.matchMedia(a).matches).map((a) => i[a]).reduce((a, c) => t(a, c), {});
    return t(s, l);
  }
  function o(s) {
    return s.map((i) => ze(i.breakpoints || {})).reduce((i, l) => i.concat(l), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: o
  };
}
function Lo(e) {
  let t = [];
  function n(s, i) {
    return t = i.filter(({
      options: l
    }) => e.optionsAtMedia(l).active !== !1), t.forEach((l) => l.init(s, e)), i.reduce((l, a) => Object.assign(l, {
      [a.name]: a
    }), {});
  }
  function o() {
    t = t.filter((s) => s.destroy());
  }
  return {
    init: n,
    destroy: o
  };
}
function Te(e, t, n) {
  const o = e.ownerDocument, r = o.defaultView, s = jo(r), i = Lo(s), l = Ee(), a = Ao(), {
    mergeOptions: c,
    optionsAtMedia: p,
    optionsMediaQueries: u
  } = s, {
    on: m,
    off: w,
    emit: f
  } = a, g = M;
  let h = !1, d, x = c(Io, Te.globalOptions), S = c(x), L = [], N, j, z;
  function b() {
    const {
      container: O,
      slides: k
    } = S;
    j = (Ue(O) ? e.querySelector(O) : O) || e.children[0];
    const _ = Ue(k) ? j.querySelectorAll(k) : k;
    z = [].slice.call(_ || j.children);
  }
  function I(O) {
    const k = Eo(e, j, z, o, r, O, a);
    if (O.loop && !k.slideLooper.canLoop()) {
      const R = Object.assign({}, O, {
        loop: !1
      });
      return I(R);
    }
    return k;
  }
  function D(O, k) {
    h || (x = c(x, O), S = p(x), L = k || L, b(), d = I(S), u([x, ...L.map(({
      options: R
    }) => R)]).forEach((R) => l.add(R, "change", M)), S.active && (d.translate.to(d.location.get()), d.animation.init(), d.slidesInView.init(), d.slideFocus.init(W), d.eventHandler.init(W), d.resizeHandler.init(W), d.slidesHandler.init(W), d.options.loop && d.slideLooper.loop(), j.offsetParent && z.length && d.dragHandler.init(W), N = i.init(W, L)));
  }
  function M(O, k) {
    const R = Q();
    B(), D(c({
      startIndex: R
    }, O), k), a.emit("reInit");
  }
  function B() {
    d.dragHandler.destroy(), d.eventStore.clear(), d.translate.clear(), d.slideLooper.clear(), d.resizeHandler.destroy(), d.slidesHandler.destroy(), d.slidesInView.destroy(), d.animation.destroy(), i.destroy(), l.clear();
  }
  function J() {
    h || (h = !0, l.clear(), B(), a.emit("destroy"), a.clear());
  }
  function X(O, k, R) {
    !S.active || h || (d.scrollBody.useBaseFriction().useDuration(k === !0 ? 0 : S.duration), d.scrollTo.index(O, R || 0));
  }
  function H(O) {
    const k = d.index.add(1).get();
    X(k, O, -1);
  }
  function q(O) {
    const k = d.index.add(-1).get();
    X(k, O, 1);
  }
  function K() {
    return d.index.add(1).get() !== Q();
  }
  function C() {
    return d.index.add(-1).get() !== Q();
  }
  function ee() {
    return d.scrollSnapList;
  }
  function ae() {
    return d.scrollProgress.get(d.offsetLocation.get());
  }
  function Q() {
    return d.index.get();
  }
  function ne() {
    return d.indexPrevious.get();
  }
  function G() {
    return d.slidesInView.get();
  }
  function V() {
    return d.slidesInView.get(!1);
  }
  function oe() {
    return N;
  }
  function le() {
    return d;
  }
  function T() {
    return e;
  }
  function U() {
    return j;
  }
  function Z() {
    return z;
  }
  const W = {
    canScrollNext: K,
    canScrollPrev: C,
    containerNode: U,
    internalEngine: le,
    destroy: J,
    off: w,
    on: m,
    emit: f,
    plugins: oe,
    previousScrollSnap: ne,
    reInit: g,
    rootNode: T,
    scrollNext: H,
    scrollPrev: q,
    scrollProgress: ae,
    scrollSnapList: ee,
    scrollTo: X,
    selectedScrollSnap: Q,
    slideNodes: Z,
    slidesInView: G,
    slidesNotInView: V
  };
  return D(t, n), setTimeout(() => a.emit("init"), 0), W;
}
Te.globalOptions = void 0;
function Ze(e = {}, t = []) {
  const n = A.useRef(e), o = A.useRef(t), [r, s] = A.useState(), [i, l] = A.useState(), a = A.useCallback(() => {
    r && r.reInit(n.current, o.current);
  }, [r]);
  return A.useEffect(() => {
    We(n.current, e) || (n.current = e, a());
  }, [e, a]), A.useEffect(() => {
    Jn(o.current, t) || (o.current = t, a());
  }, [t, a]), A.useEffect(() => {
    if (Zn() && i) {
      Te.globalOptions = Ze.globalOptions;
      const c = Te(i, n.current, o.current);
      return s(c), () => c.destroy();
    } else
      s(void 0);
  }, [i, s]), [l, r];
}
Ze.globalOptions = void 0;
const No = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), To = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, o) => o ? o.toUpperCase() : n.toLowerCase()
), ht = (e) => {
  const t = To(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Dt = (...e) => e.filter((t, n, o) => !!t && t.trim() !== "" && o.indexOf(t) === n).join(" ").trim(), Po = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var Mo = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Oo = A.forwardRef(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: o,
    className: r = "",
    children: s,
    iconNode: i,
    ...l
  }, a) => A.createElement(
    "svg",
    {
      ref: a,
      ...Mo,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: o ? Number(n) * 24 / Number(t) : n,
      className: Dt("lucide", r),
      ...!s && !Po(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...i.map(([c, p]) => A.createElement(c, p)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
const Vt = (e, t) => {
  const n = A.forwardRef(
    ({ className: o, ...r }, s) => A.createElement(Oo, {
      ref: s,
      iconNode: t,
      className: Dt(
        `lucide-${No(ht(e))}`,
        `lucide-${e}`,
        o
      ),
      ...r
    })
  );
  return n.displayName = ht(e), n;
};
const Ro = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
], Do = Vt("arrow-left", Ro);
const Vo = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], Fo = Vt("arrow-right", Vo);
function bt(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Go(...e) {
  return (t) => {
    let n = !1;
    const o = e.map((r) => {
      const s = bt(r, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let r = 0; r < o.length; r++) {
          const s = o[r];
          typeof s == "function" ? s() : bt(e[r], null);
        }
      };
  };
}
var _o = /* @__PURE__ */ Symbol.for("react.lazy"), Pe = rn[" use ".trim().toString()];
function Bo(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function Ft(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === _o && "_payload" in e && Bo(e._payload);
}
// @__NO_SIDE_EFFECTS__
function $o(e) {
  const t = /* @__PURE__ */ Ho(e), n = A.forwardRef((o, r) => {
    let { children: s, ...i } = o;
    Ft(s) && typeof Pe == "function" && (s = Pe(s._payload));
    const l = A.Children.toArray(s), a = l.find(Wo);
    if (a) {
      const c = a.props.children, p = l.map((u) => u === a ? A.Children.count(c) > 1 ? A.Children.only(null) : A.isValidElement(c) ? c.props.children : null : u);
      return /* @__PURE__ */ P.jsx(t, { ...i, ref: r, children: A.isValidElement(c) ? A.cloneElement(c, void 0, p) : null });
    }
    return /* @__PURE__ */ P.jsx(t, { ...i, ref: r, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Uo = /* @__PURE__ */ $o("Slot");
// @__NO_SIDE_EFFECTS__
function Ho(e) {
  const t = A.forwardRef((n, o) => {
    let { children: r, ...s } = n;
    if (Ft(r) && typeof Pe == "function" && (r = Pe(r._payload)), A.isValidElement(r)) {
      const i = Yo(r), l = Ko(s, r.props);
      return r.type !== A.Fragment && (l.ref = o ? Go(o, i) : i), A.cloneElement(r, l);
    }
    return A.Children.count(r) > 1 ? A.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var qo = /* @__PURE__ */ Symbol("radix.slottable");
function Wo(e) {
  return A.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === qo;
}
function Ko(e, t) {
  const n = { ...t };
  for (const o in t) {
    const r = e[o], s = t[o];
    /^on[A-Z]/.test(o) ? r && s ? n[o] = (...l) => {
      const a = s(...l);
      return r(...l), a;
    } : r && (n[o] = r) : o === "style" ? n[o] = { ...r, ...s } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Yo(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const wt = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, xt = vt, Xo = (e, t) => (n) => {
  var o;
  if (t?.variants == null) return xt(e, n?.class, n?.className);
  const { variants: r, defaultVariants: s } = t, i = Object.keys(r).map((c) => {
    const p = n?.[c], u = s?.[c];
    if (p === null) return null;
    const m = wt(p) || wt(u);
    return r[c][m];
  }), l = n && Object.entries(n).reduce((c, p) => {
    let [u, m] = p;
    return m === void 0 || (c[u] = m), c;
  }, {}), a = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((c, p) => {
    let { class: u, className: m, ...w } = p;
    return Object.entries(w).every((f) => {
      let [g, h] = f;
      return Array.isArray(h) ? h.includes({
        ...s,
        ...l
      }[g]) : {
        ...s,
        ...l
      }[g] === h;
    }) ? [
      ...c,
      u,
      m
    ] : c;
  }, []);
  return xt(e, i, a, n?.class, n?.className);
}, Zo = Xo(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Gt({
  className: e,
  variant: t = "default",
  size: n = "default",
  asChild: o = !1,
  ...r
}) {
  const s = o ? Uo : "button";
  return /* @__PURE__ */ P.jsx(
    s,
    {
      "data-slot": "button",
      "data-variant": t,
      "data-size": n,
      className: ue(Zo({ variant: t, size: n, className: e })),
      ...r
    }
  );
}
const _t = A.createContext(null);
function Oe() {
  const e = A.useContext(_t);
  if (!e)
    throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
function Jo({
  orientation: e = "horizontal",
  opts: t,
  setApi: n,
  plugins: o,
  className: r,
  children: s,
  ...i
}) {
  const [l, a] = Ze(
    {
      ...t,
      axis: e === "horizontal" ? "x" : "y"
    },
    o
  ), [c, p] = A.useState(!1), [u, m] = A.useState(!1), w = A.useCallback((d) => {
    d && (p(d.canScrollPrev()), m(d.canScrollNext()));
  }, []), f = A.useCallback(() => {
    a?.scrollPrev();
  }, [a]), g = A.useCallback(() => {
    a?.scrollNext();
  }, [a]), h = A.useCallback(
    (d) => {
      d.key === "ArrowLeft" ? (d.preventDefault(), f()) : d.key === "ArrowRight" && (d.preventDefault(), g());
    },
    [f, g]
  );
  return A.useEffect(() => {
    !a || !n || n(a);
  }, [a, n]), A.useEffect(() => {
    if (a)
      return w(a), a.on("reInit", w), a.on("select", w), () => {
        a?.off("select", w);
      };
  }, [a, w]), /* @__PURE__ */ P.jsx(
    _t.Provider,
    {
      value: {
        carouselRef: l,
        api: a,
        opts: t,
        orientation: e || (t?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: f,
        scrollNext: g,
        canScrollPrev: c,
        canScrollNext: u
      },
      children: /* @__PURE__ */ P.jsx(
        "div",
        {
          onKeyDownCapture: h,
          className: ue("relative", r),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...i,
          children: s
        }
      )
    }
  );
}
function Qo({ className: e, ...t }) {
  const { carouselRef: n, orientation: o } = Oe();
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      ref: n,
      className: "overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ P.jsx(
        "div",
        {
          className: ue(
            "flex",
            o === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            e
          ),
          ...t
        }
      )
    }
  );
}
function er({ className: e, ...t }) {
  const { orientation: n } = Oe();
  return /* @__PURE__ */ P.jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: ue(
        "min-w-0 shrink-0 grow-0 basis-full",
        n === "horizontal" ? "pl-4" : "pt-4",
        e
      ),
      ...t
    }
  );
}
function tr({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...o
}) {
  const { orientation: r, scrollPrev: s, canScrollPrev: i } = Oe();
  return /* @__PURE__ */ P.jsxs(
    Gt,
    {
      "data-slot": "carousel-previous",
      variant: t,
      size: n,
      className: ue(
        "absolute rounded-full size-8",
        r === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...o,
      children: [
        /* @__PURE__ */ P.jsx(Do, {}),
        /* @__PURE__ */ P.jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function nr({
  className: e,
  variant: t = "outline",
  size: n = "icon",
  ...o
}) {
  const { orientation: r, scrollNext: s, canScrollNext: i } = Oe();
  return /* @__PURE__ */ P.jsxs(
    Gt,
    {
      "data-slot": "carousel-next",
      variant: t,
      size: n,
      className: ue(
        "absolute rounded-full size-8",
        r === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !i,
      onClick: s,
      ...o,
      children: [
        /* @__PURE__ */ P.jsx(Fo, {}),
        /* @__PURE__ */ P.jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
const or = ({ car: e }) => !e.trims || e.trims.length === 0 ? null : /* @__PURE__ */ P.jsx("section", { className: "my-12 sm:my-24", children: /* @__PURE__ */ P.jsxs("div", { className: "mx-auto px-4 sm:px-6 max-w-7xl", children: [
  /* @__PURE__ */ P.jsx("h2", { className: "mb-6 font-bold text-black text-2xl sm:text-3xl", children: "Udstyrsvarianter" }),
  /* @__PURE__ */ P.jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ P.jsxs(Jo, { opts: {
    align: "start"
  }, className: "group", children: [
    /* @__PURE__ */ P.jsx(Qo, { className: "flex gap-4", children: e.trims.map((t) => /* @__PURE__ */ P.jsx(
      er,
      {
        className: "flex-shrink-0 w-full sm:w-1/2 lg:w-1/3",
        children: /* @__PURE__ */ P.jsx(Kn, { className: "p-6 border border-gray-500 rounded-xl", children: /* @__PURE__ */ P.jsx(Yn, { className: "p-0", children: /* @__PURE__ */ P.jsx("h3", { className: "font-bold text-xl", children: t.name }) }) })
      },
      t.id
    )) }),
    /* @__PURE__ */ P.jsx(tr, { className: "hidden top-1/2 left-0 z-10 absolute group-hover:flex bg-white shadow-md p-2 rounded-lg -translate-y-1/2", children: "‹" }),
    /* @__PURE__ */ P.jsx(nr, { className: "hidden top-1/2 right-0 z-10 absolute group-hover:flex bg-white shadow-md p-2 rounded-lg -translate-y-1/2", children: "›" })
  ] }) })
] }) }), rr = ({ car: e }) => /* @__PURE__ */ P.jsx(or, { car: e });
class sr extends HTMLElement {
  root;
  async connectedCallback() {
    if (this.root) return;
    const t = this.getAttribute("car-id");
    if (!t) {
      console.warn("<car-trims> mangler car-id attribute");
      return;
    }
    const n = `https://tools-kiaonline.test/api/cars/${t}`;
    try {
      const o = await fetch(n);
      if (!o.ok) throw new Error(`HTTP ${o.status}`);
      const r = await o.json();
      console.log(r);
      const s = {
        id: r.id,
        name: r.name,
        trims: (r.trims ?? []).map((a) => ({
          id: a.id,
          name: a.name
        }))
      }, i = this.shadowRoot ?? this.attachShadow({ mode: "open" });
      if (!i.querySelector("style")) {
        const a = document.createElement("style");
        a.textContent = nn, i.appendChild(a);
      }
      const l = i.querySelector("#root") ?? (() => {
        const a = document.createElement("div");
        return a.id = "root", i.appendChild(a), a;
      })();
      this.root = en.createRoot(l), this.root.render(/* @__PURE__ */ P.jsx(rr, { car: s }));
    } catch (o) {
      console.error("Failed to load car:", o);
      const r = this.shadowRoot ?? this.attachShadow({ mode: "open" });
      r.innerHTML = '<p style="color:red;">Kunne ikke indlæse bil</p>';
    }
  }
  disconnectedCallback() {
    this.root?.unmount(), this.root = void 0;
  }
}
customElements.define("car-trims", sr);
