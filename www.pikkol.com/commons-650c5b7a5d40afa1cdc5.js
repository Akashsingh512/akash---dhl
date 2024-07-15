/*! For license information please see commons-650c5b7a5d40afa1cdc5.js.LICENSE.txt */
(self.webpackChunkpikkol_gatsby_landing_pages = self.webpackChunkpikkol_gatsby_landing_pages || []).push([
    [4223], {
        2532: function(e, t, r) {
            "use strict";
            r.d(t, {
                G: function() {
                    return R
                },
                L: function() {
                    return m
                },
                M: function() {
                    return S
                },
                P: function() {
                    return E
                },
                S: function() {
                    return D
                },
                _: function() {
                    return i
                },
                a: function() {
                    return s
                },
                b: function() {
                    return u
                },
                g: function() {
                    return d
                },
                h: function() {
                    return c
                }
            });
            var n = r(6540),
                o = (r(5147), r(5556)),
                a = r.n(o);

            function s() {
                return s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, s.apply(this, arguments)
            }

            function i(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                    a = Object.keys(e);
                for (n = 0; n < a.length; n++) t.indexOf(r = a[n]) >= 0 || (o[r] = e[r]);
                return o
            }
            const c = () => "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype;

            function l(e, t, r) {
                const n = {};
                let o = "gatsby-image-wrapper";
                return "fixed" === r ? (n.width = e, n.height = t) : "constrained" === r && (o = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
                    className: o,
                    "data-gatsby-image-wrapper": "",
                    style: n
                }
            }

            function u(e, t, r, n, o) {
                return void 0 === o && (o = {}), s({}, r, {
                    loading: n,
                    shouldLoad: e,
                    "data-main-image": "",
                    style: s({}, o, {
                        opacity: t ? 1 : 0
                    })
                })
            }

            function d(e, t, r, n, o, a, i, c) {
                const l = {};
                a && (l.backgroundColor = a, "fixed" === r ? (l.width = n, l.height = o, l.backgroundColor = a, l.position = "relative") : ("constrained" === r || "fullWidth" === r) && (l.position = "absolute", l.top = 0, l.left = 0, l.bottom = 0, l.right = 0)), i && (l.objectFit = i), c && (l.objectPosition = c);
                const u = s({}, e, {
                    "aria-hidden": !0,
                    "data-placeholder-image": "",
                    style: s({
                        opacity: t ? 0 : 1,
                        transition: "opacity 500ms linear"
                    }, l)
                });
                return u
            }
            const f = ["children"],
                p = function(e) {
                    let {
                        layout: t,
                        width: r,
                        height: o
                    } = e;
                    return "fullWidth" === t ? n.createElement("div", {
                        "aria-hidden": !0,
                        style: {
                            paddingTop: o / r * 100 + "%"
                        }
                    }) : "constrained" === t ? n.createElement("div", {
                        style: {
                            maxWidth: r,
                            display: "block"
                        }
                    }, n.createElement("img", {
                        alt: "",
                        role: "presentation",
                        "aria-hidden": "true",
                        src: `data:image/svg+xml;charset=utf-8,%3Csvg%20height='${o}'%20width='${r}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,
                        style: {
                            maxWidth: "100%",
                            display: "block",
                            position: "static"
                        }
                    })) : null
                },
                m = function(e) {
                    let {
                        children: t
                    } = e, r = i(e, f);
                    return n.createElement(n.Fragment, null, n.createElement(p, s({}, r)), t, null)
                },
                y = ["src", "srcSet", "loading", "alt", "shouldLoad"],
                h = ["fallback", "sources", "shouldLoad"],
                g = function(e) {
                    let {
                        src: t,
                        srcSet: r,
                        loading: o,
                        alt: a = "",
                        shouldLoad: c
                    } = e, l = i(e, y);
                    return n.createElement("img", s({}, l, {
                        decoding: "async",
                        loading: o,
                        src: c ? t : void 0,
                        "data-src": c ? void 0 : t,
                        srcSet: c ? r : void 0,
                        "data-srcset": c ? void 0 : r,
                        alt: a
                    }))
                },
                v = function(e) {
                    let {
                        fallback: t,
                        sources: r = [],
                        shouldLoad: o = !0
                    } = e, a = i(e, h);
                    const c = a.sizes || (null == t ? void 0 : t.sizes),
                        l = n.createElement(g, s({}, a, t, {
                            sizes: c,
                            shouldLoad: o
                        }));
                    return r.length ? n.createElement("picture", null, r.map((e => {
                        let {
                            media: t,
                            srcSet: r,
                            type: a
                        } = e;
                        return n.createElement("source", {
                            key: `${t}-${a}-${r}`,
                            type: a,
                            media: t,
                            srcSet: o ? r : void 0,
                            "data-srcset": o ? void 0 : r,
                            sizes: c
                        })
                    })), l) : l
                };
            var b;
            g.propTypes = {
                src: o.string.isRequired,
                alt: o.string.isRequired,
                sizes: o.string,
                srcSet: o.string,
                shouldLoad: o.bool
            }, v.displayName = "Picture", v.propTypes = {
                alt: o.string.isRequired,
                shouldLoad: o.bool,
                fallback: o.exact({
                    src: o.string.isRequired,
                    srcSet: o.string,
                    sizes: o.string
                }),
                sources: o.arrayOf(o.oneOfType([o.exact({
                    media: o.string.isRequired,
                    type: o.string,
                    sizes: o.string,
                    srcSet: o.string.isRequired
                }), o.exact({
                    media: o.string,
                    type: o.string.isRequired,
                    sizes: o.string,
                    srcSet: o.string.isRequired
                })]))
            };
            const w = ["fallback"],
                E = function(e) {
                    let {
                        fallback: t
                    } = e, r = i(e, w);
                    return t ? n.createElement(v, s({}, r, {
                        fallback: {
                            src: t
                        },
                        "aria-hidden": !0,
                        alt: ""
                    })) : n.createElement("div", s({}, r))
                };
            E.displayName = "Placeholder", E.propTypes = {
                fallback: o.string,
                sources: null == (b = v.propTypes) ? void 0 : b.sources,
                alt: function(e, t, r) {
                    return e[t] ? new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`) : null
                }
            };
            const S = function(e) {
                return n.createElement(n.Fragment, null, n.createElement(v, s({}, e)), n.createElement("noscript", null, n.createElement(v, s({}, e, {
                    shouldLoad: !0
                }))))
            };
            S.displayName = "MainImage", S.propTypes = v.propTypes;
            const k = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
                x = ["style", "className"],
                C = e => e.replace(/\n/g, ""),
                $ = function(e, t, r) {
                    for (var n = arguments.length, o = new Array(n > 3 ? n - 3 : 0), s = 3; s < n; s++) o[s - 3] = arguments[s];
                    return e.alt || "" === e.alt ? a().string.apply(a(), [e, t, r].concat(o)) : new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)
                },
                N = {
                    image: a().object.isRequired,
                    alt: $
                },
                L = ["as", "image", "style", "backgroundColor", "className", "class", "onStartLoad", "onLoad", "onError"],
                O = ["style", "className"],
                _ = new Set;
            let j, A;
            const P = function(e) {
                    let {
                        as: t = "div",
                        image: o,
                        style: a,
                        backgroundColor: u,
                        className: d,
                        class: f,
                        onStartLoad: p,
                        onLoad: m,
                        onError: y
                    } = e, h = i(e, L);
                    const {
                        width: g,
                        height: v,
                        layout: b
                    } = o, w = l(g, v, b), {
                        style: E,
                        className: S
                    } = w, k = i(w, O), x = (0, n.useRef)(), C = (0, n.useMemo)((() => JSON.stringify(o.images)), [o.images]);
                    f && (d = f);
                    const $ = function(e, t, r) {
                        let n = "";
                        return "fullWidth" === e && (n = `<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`), "constrained" === e && (n = `<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`), n
                    }(b, g, v);
                    return (0, n.useEffect)((() => {
                        j || (j = r.e(1108).then(r.bind(r, 1108)).then((e => {
                            let {
                                renderImageToString: t,
                                swapPlaceholderImage: r
                            } = e;
                            return A = t, {
                                renderImageToString: t,
                                swapPlaceholderImage: r
                            }
                        })));
                        const e = x.current.querySelector("[data-gatsby-image-ssr]");
                        if (e && c()) return e.complete ? (null == p || p({
                            wasCached: !0
                        }), null == m || m({
                            wasCached: !0
                        }), setTimeout((() => {
                            e.removeAttribute("data-gatsby-image-ssr")
                        }), 0)) : (null == p || p({
                            wasCached: !0
                        }), e.addEventListener("load", (function t() {
                            e.removeEventListener("load", t), null == m || m({
                                wasCached: !0
                            }), setTimeout((() => {
                                e.removeAttribute("data-gatsby-image-ssr")
                            }), 0)
                        }))), void _.add(C);
                        if (A && _.has(C)) return;
                        let t, n;
                        return j.then((e => {
                            let {
                                renderImageToString: r,
                                swapPlaceholderImage: i
                            } = e;
                            x.current && (x.current.innerHTML = r(s({
                                isLoading: !0,
                                isLoaded: _.has(C),
                                image: o
                            }, h)), _.has(C) || (t = requestAnimationFrame((() => {
                                x.current && (n = i(x.current, C, _, a, p, m, y))
                            }))))
                        })), () => {
                            t && cancelAnimationFrame(t), n && n()
                        }
                    }), [o]), (0, n.useLayoutEffect)((() => {
                        _.has(C) && A && (x.current.innerHTML = A(s({
                            isLoading: _.has(C),
                            isLoaded: _.has(C),
                            image: o
                        }, h)), null == p || p({
                            wasCached: !0
                        }), null == m || m({
                            wasCached: !0
                        }))
                    }), [o]), (0, n.createElement)(t, s({}, k, {
                        style: s({}, E, a, {
                            backgroundColor: u
                        }),
                        className: `${S}${d?` ${d}`:""}`,
                        ref: x,
                        dangerouslySetInnerHTML: {
                            __html: $
                        },
                        suppressHydrationWarning: !0
                    }))
                },
                R = (0, n.memo)((function(e) {
                    return e.image ? (0, n.createElement)(P, e) : null
                }));
            R.propTypes = N, R.displayName = "GatsbyImage";
            const T = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"];

            function I(e) {
                return function(t) {
                    let {
                        src: r,
                        __imageData: o,
                        __error: a
                    } = t, c = i(t, T);
                    return a && console.warn(a), o ? n.createElement(e, s({
                        image: o
                    }, c)) : (console.warn("Image not loaded", r), null)
                }
            }
            const M = I((function(e) {
                    let {
                        as: t = "div",
                        className: r,
                        class: o,
                        style: a,
                        image: c,
                        loading: f = "lazy",
                        imgClassName: p,
                        imgStyle: y,
                        backgroundColor: h,
                        objectFit: g,
                        objectPosition: v
                    } = e, b = i(e, k);
                    if (!c) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
                    o && (r = o), y = s({
                        objectFit: g,
                        objectPosition: v,
                        backgroundColor: h
                    }, y);
                    const {
                        width: w,
                        height: $,
                        layout: N,
                        images: L,
                        placeholder: O,
                        backgroundColor: _
                    } = c, j = l(w, $, N), {
                        style: A,
                        className: P
                    } = j, R = i(j, x), T = {
                        fallback: void 0,
                        sources: []
                    };
                    return L.fallback && (T.fallback = s({}, L.fallback, {
                        srcSet: L.fallback.srcSet ? C(L.fallback.srcSet) : void 0
                    })), L.sources && (T.sources = L.sources.map((e => s({}, e, {
                        srcSet: C(e.srcSet)
                    })))), n.createElement(t, s({}, R, {
                        style: s({}, A, a, {
                            backgroundColor: h
                        }),
                        className: `${P}${r?` ${r}`:""}`
                    }), n.createElement(m, {
                        layout: N,
                        width: w,
                        height: $
                    }, n.createElement(E, s({}, d(O, !1, N, w, $, _, g, v))), n.createElement(S, s({
                        "data-gatsby-image-ssr": "",
                        className: p
                    }, b, u("eager" === f, !1, T, f, y)))))
                })),
                q = function(e, t) {
                    for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
                    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? a().number.apply(a(), [e, t].concat(n)) : new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)
                },
                z = new Set(["fixed", "fullWidth", "constrained"]),
                F = {
                    src: a().string.isRequired,
                    alt: $,
                    width: q,
                    height: q,
                    sizes: a().string,
                    layout: e => {
                        if (void 0 !== e.layout && !z.has(e.layout)) return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)
                    }
                };
            M.displayName = "StaticImage", M.propTypes = F;
            const D = I(R);
            D.displayName = "StaticImage", D.propTypes = F
        },
        5147: function(e) {
            "use strict";
            const t = /[\p{Lu}]/u,
                r = /[\p{Ll}]/u,
                n = /^[\p{Lu}](?![\p{Lu}])/gu,
                o = /([\p{Alpha}\p{N}_]|$)/u,
                a = /[_.\- ]+/,
                s = new RegExp("^" + a.source),
                i = new RegExp(a.source + o.source, "gu"),
                c = new RegExp("\\d+" + o.source, "gu"),
                l = (e, o) => {
                    if ("string" != typeof e && !Array.isArray(e)) throw new TypeError("Expected the input to be `string | string[]`");
                    if (o = {
                            pascalCase: !1,
                            preserveConsecutiveUppercase: !1,
                            ...o
                        }, 0 === (e = Array.isArray(e) ? e.map((e => e.trim())).filter((e => e.length)).join("-") : e.trim()).length) return "";
                    const a = !1 === o.locale ? e => e.toLowerCase() : e => e.toLocaleLowerCase(o.locale),
                        l = !1 === o.locale ? e => e.toUpperCase() : e => e.toLocaleUpperCase(o.locale);
                    if (1 === e.length) return o.pascalCase ? l(e) : a(e);
                    return e !== a(e) && (e = ((e, n, o) => {
                        let a = !1,
                            s = !1,
                            i = !1;
                        for (let c = 0; c < e.length; c++) {
                            const l = e[c];
                            a && t.test(l) ? (e = e.slice(0, c) + "-" + e.slice(c), a = !1, i = s, s = !0, c++) : s && i && r.test(l) ? (e = e.slice(0, c - 1) + "-" + e.slice(c - 1), i = s, s = !1, a = !0) : (a = n(l) === l && o(l) !== l, i = s, s = o(l) === l && n(l) !== l)
                        }
                        return e
                    })(e, a, l)), e = e.replace(s, ""), e = o.preserveConsecutiveUppercase ? ((e, t) => (n.lastIndex = 0, e.replace(n, (e => t(e)))))(e, a) : a(e), o.pascalCase && (e = l(e.charAt(0)) + e.slice(1)), ((e, t) => (i.lastIndex = 0, c.lastIndex = 0, e.replace(i, ((e, r) => t(r))).replace(c, (e => t(e)))))(e, l)
                };
            e.exports = l, e.exports.default = l
        },
        3760: function(e, t, r) {
            "use strict";
            var n = r(8154),
                o = r(6540);
            t.A = e => {
                let {
                    title: t,
                    description: r,
                    schemas: a = [],
                    noIndex: s
                } = e;
                return o.createElement(n.Helmet, {
                    htmlAttributes: {
                        lang: "en"
                    },
                    title: t
                }, r && o.createElement("meta", {
                    name: "description",
                    content: r
                }), s && o.createElement("meta", {
                    name: "robots",
                    content: "noindex, nofollow"
                }), a && a.map(((e, t) => o.createElement("script", {
                    key: t,
                    type: "application/ld+json"
                }, JSON.stringify(e)))), o.createElement("noscript", null))
            }
        },
        3709: function(e, t, r) {
            "use strict";
            r.d(t, {
                m: function() {
                    return s
                }
            });
            var n = r(6540);

            function o() {
                window.fcWidget.init({
                    token: "111225dc-f8ec-42fd-b63e-5c99cbb25f43",
                    host: "https://pikkol.freshchat.com"
                })
            }

            function a() {
                document.getElementById("Freshchat-js-sdk") ? o() : (() => {
                    const e = document.createElement("script");
                    e.type = "text/javascript", e.async = !0, e.src = "https://pikkol.freshchat.com/js/widget.js", e.onload = o, document.head.appendChild(e)
                })()
            }
            const s = () => {
                (0, n.useEffect)((() => (window.addEventListener ? window.addEventListener("load", a, !1) : window.attachEvent("load", a, !1), () => {
                    window.removeEventListener ? window.removeEventListener("load", a, !1) : window.detachEvent("load", a, !1)
                })), [])
            }
        },
        4146: function(e, t, r) {
            "use strict";
            var n = r(4363),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                s = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {};

            function c(e) {
                return n.isMemo(e) ? s : i[e.$$typeof] || o
            }
            i[n.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, i[n.Memo] = s;
            var l = Object.defineProperty,
                u = Object.getOwnPropertyNames,
                d = Object.getOwnPropertySymbols,
                f = Object.getOwnPropertyDescriptor,
                p = Object.getPrototypeOf,
                m = Object.prototype;
            e.exports = function e(t, r, n) {
                if ("string" != typeof r) {
                    if (m) {
                        var o = p(r);
                        o && o !== m && e(t, o, n)
                    }
                    var s = u(r);
                    d && (s = s.concat(d(r)));
                    for (var i = c(t), y = c(r), h = 0; h < s.length; ++h) {
                        var g = s[h];
                        if (!(a[g] || n && n[g] || y && y[g] || i && i[g])) {
                            var v = f(r, g);
                            try {
                                l(t, g, v)
                            } catch (b) {}
                        }
                    }
                }
                return t
            }
        },
        1105: function(e, t, r) {
            "use strict";
            var n = r(6942),
                o = r.n(n),
                a = r(6540),
                s = r(6519),
                i = r(4848);
            const c = a.forwardRef(((e, t) => {
                const [{
                    className: r,
                    ...n
                }, {
                    as: a = "div",
                    bsPrefix: c,
                    spans: l
                }] = function({
                    as: e,
                    bsPrefix: t,
                    className: r,
                    ...n
                }) {
                    t = (0, s.oU)(t, "col");
                    const a = (0, s.gy)(),
                        i = (0, s.Jm)(),
                        c = [],
                        l = [];
                    return a.forEach((e => {
                        const r = n[e];
                        let o, a, s;
                        delete n[e], "object" == typeof r && null != r ? ({
                            span: o,
                            offset: a,
                            order: s
                        } = r) : o = r;
                        const u = e !== i ? `-${e}` : "";
                        o && c.push(!0 === o ? `${t}${u}` : `${t}${u}-${o}`), null != s && l.push(`order${u}-${s}`), null != a && l.push(`offset${u}-${a}`)
                    })), [{ ...n,
                        className: o()(r, ...c, ...l)
                    }, {
                        as: e,
                        bsPrefix: t,
                        spans: c
                    }]
                }(e);
                return (0, i.jsx)(a, { ...n,
                    ref: t,
                    className: o()(r, !l.length && c)
                })
            }));
            c.displayName = "Col", t.A = c
        },
        3048: function(e, t, r) {
            "use strict";
            var n = r(6942),
                o = r.n(n),
                a = r(6540),
                s = r(6519),
                i = r(4848);
            const c = a.forwardRef((({
                bsPrefix: e,
                fluid: t = !1,
                as: r = "div",
                className: n,
                ...a
            }, c) => {
                const l = (0, s.oU)(e, "container"),
                    u = "string" == typeof t ? `-${t}` : "-fluid";
                return (0, i.jsx)(r, {
                    ref: c,
                    ...a,
                    className: o()(n, t ? `${l}${u}` : l)
                })
            }));
            c.displayName = "Container", t.A = c
        },
        6519: function(e, t, r) {
            "use strict";
            r.d(t, {
                Jm: function() {
                    return u
                },
                Wz: function() {
                    return d
                },
                gy: function() {
                    return l
                },
                oU: function() {
                    return c
                }
            });
            var n = r(6540);
            r(4848);
            const o = ["xxl", "xl", "lg", "md", "sm", "xs"],
                a = n.createContext({
                    prefixes: {},
                    breakpoints: o,
                    minBreakpoint: "xs"
                }),
                {
                    Consumer: s,
                    Provider: i
                } = a;

            function c(e, t) {
                const {
                    prefixes: r
                } = (0, n.useContext)(a);
                return e || r[t] || t
            }

            function l() {
                const {
                    breakpoints: e
                } = (0, n.useContext)(a);
                return e
            }

            function u() {
                const {
                    minBreakpoint: e
                } = (0, n.useContext)(a);
                return e
            }

            function d() {
                const {
                    dir: e
                } = (0, n.useContext)(a);
                return "rtl" === e
            }
        },
        2799: function(e, t) {
            "use strict";
            var r = "function" == typeof Symbol && Symbol.for,
                n = r ? Symbol.for("react.element") : 60103,
                o = r ? Symbol.for("react.portal") : 60106,
                a = r ? Symbol.for("react.fragment") : 60107,
                s = r ? Symbol.for("react.strict_mode") : 60108,
                i = r ? Symbol.for("react.profiler") : 60114,
                c = r ? Symbol.for("react.provider") : 60109,
                l = r ? Symbol.for("react.context") : 60110,
                u = r ? Symbol.for("react.async_mode") : 60111,
                d = r ? Symbol.for("react.concurrent_mode") : 60111,
                f = r ? Symbol.for("react.forward_ref") : 60112,
                p = r ? Symbol.for("react.suspense") : 60113,
                m = r ? Symbol.for("react.suspense_list") : 60120,
                y = r ? Symbol.for("react.memo") : 60115,
                h = r ? Symbol.for("react.lazy") : 60116,
                g = r ? Symbol.for("react.block") : 60121,
                v = r ? Symbol.for("react.fundamental") : 60117,
                b = r ? Symbol.for("react.responder") : 60118,
                w = r ? Symbol.for("react.scope") : 60119;

            function E(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch (e = e.type) {
                                case u:
                                case d:
                                case a:
                                case i:
                                case s:
                                case p:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case l:
                                        case f:
                                        case h:
                                        case y:
                                        case c:
                                            return e;
                                        default:
                                            return t
                                    }
                            }
                        case o:
                            return t
                    }
                }
            }

            function S(e) {
                return E(e) === d
            }
            t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = l, t.ContextProvider = c, t.Element = n, t.ForwardRef = f, t.Fragment = a, t.Lazy = h, t.Memo = y, t.Portal = o, t.Profiler = i, t.StrictMode = s, t.Suspense = p, t.isAsyncMode = function(e) {
                return S(e) || E(e) === u
            }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
                return E(e) === l
            }, t.isContextProvider = function(e) {
                return E(e) === c
            }, t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }, t.isForwardRef = function(e) {
                return E(e) === f
            }, t.isFragment = function(e) {
                return E(e) === a
            }, t.isLazy = function(e) {
                return E(e) === h
            }, t.isMemo = function(e) {
                return E(e) === y
            }, t.isPortal = function(e) {
                return E(e) === o
            }, t.isProfiler = function(e) {
                return E(e) === i
            }, t.isStrictMode = function(e) {
                return E(e) === s
            }, t.isSuspense = function(e) {
                return E(e) === p
            }, t.isValidElementType = function(e) {
                return "string" == typeof e || "function" == typeof e || e === a || e === d || e === i || e === s || e === p || e === m || "object" == typeof e && null !== e && (e.$$typeof === h || e.$$typeof === y || e.$$typeof === c || e.$$typeof === l || e.$$typeof === f || e.$$typeof === v || e.$$typeof === b || e.$$typeof === w || e.$$typeof === g)
            }, t.typeOf = E
        },
        4363: function(e, t, r) {
            "use strict";
            e.exports = r(2799)
        },
        6942: function(e, t) {
            var r;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function o() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        r && (e = s(e, a(r)))
                    }
                    return e
                }

                function a(e) {
                    if ("string" == typeof e || "number" == typeof e) return e;
                    if ("object" != typeof e) return "";
                    if (Array.isArray(e)) return o.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var r in e) n.call(e, r) && e[r] && (t = s(t, r));
                    return t
                }

                function s(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (o.default = o, e.exports = o) : void 0 === (r = function() {
                    return o
                }.apply(t, [])) || (e.exports = r)
            }()
        },
        8168: function(e, t, r) {
            "use strict";

            function n() {
                return n = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }
            r.d(t, {
                A: function() {
                    return n
                }
            })
        },
        8587: function(e, t, r) {
            "use strict";

            function n(e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        if (t.indexOf(n) >= 0) continue;
                        r[n] = e[n]
                    }
                return r
            }
            r.d(t, {
                A: function() {
                    return n
                }
            })
        },
        7685: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ay: function() {
                    return k
                }
            });
            var n = r(6540),
                o = r(8587),
                a = r(8168);

            function s(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            var i = r(5540),
                c = r(4146);

            function l(e, t) {
                if (!e) {
                    var r = new Error("loadable: " + t);
                    throw r.framesToPop = 1, r.name = "Invariant Violation", r
                }
            }
            var u = n.createContext();
            var d = {
                    initialChunks: {}
                },
                f = "PENDING",
                p = "REJECTED";
            var m = function(e) {
                return e
            };

            function y(e) {
                var t = e.defaultResolveComponent,
                    r = void 0 === t ? m : t,
                    y = e.render,
                    h = e.onLoad;

                function g(e, t) {
                    void 0 === t && (t = {});
                    var m = function(e) {
                            return "function" == typeof e ? {
                                requireAsync: e,
                                resolve: function() {},
                                chunkName: function() {}
                            } : e
                        }(e),
                        g = {};

                    function v(e) {
                        return t.cacheKey ? t.cacheKey(e) : m.resolve ? m.resolve(e) : "static"
                    }

                    function b(e, n, o) {
                        var a = t.resolveComponent ? t.resolveComponent(e, n) : r(e);
                        return c(o, a, {
                            preload: !0
                        }), a
                    }
                    var w, E, S = function(e) {
                            var t = v(e),
                                r = g[t];
                            return r && r.status !== p || ((r = m.requireAsync(e)).status = f, g[t] = r, r.then((function() {
                                r.status = "RESOLVED"
                            }), (function(t) {
                                console.error("loadable-components: failed to asynchronously load component", {
                                    fileName: m.resolve(e),
                                    chunkName: m.chunkName(e),
                                    error: t ? t.message : t
                                }), r.status = p
                            }))), r
                        },
                        k = function(e) {
                            function r(r) {
                                var n;
                                return (n = e.call(this, r) || this).state = {
                                    result: null,
                                    error: null,
                                    loading: !0,
                                    cacheKey: v(r)
                                }, l(!r.__chunkExtractor || m.requireSync, "SSR requires `@loadable/babel-plugin`, please install it"), r.__chunkExtractor ? (!1 === t.ssr || (m.requireAsync(r).catch((function() {
                                    return null
                                })), n.loadSync(), r.__chunkExtractor.addChunk(m.chunkName(r))), s(n)) : (!1 !== t.ssr && (m.isReady && m.isReady(r) || m.chunkName && d.initialChunks[m.chunkName(r)]) && n.loadSync(), n)
                            }(0, i.A)(r, e), r.getDerivedStateFromProps = function(e, t) {
                                var r = v(e);
                                return (0, a.A)({}, t, {
                                    cacheKey: r,
                                    loading: t.loading || t.cacheKey !== r
                                })
                            };
                            var n = r.prototype;
                            return n.componentDidMount = function() {
                                this.mounted = !0;
                                var e = this.getCache();
                                e && e.status === p && this.setCache(), this.state.loading && this.loadAsync()
                            }, n.componentDidUpdate = function(e, t) {
                                t.cacheKey !== this.state.cacheKey && this.loadAsync()
                            }, n.componentWillUnmount = function() {
                                this.mounted = !1
                            }, n.safeSetState = function(e, t) {
                                this.mounted && this.setState(e, t)
                            }, n.getCacheKey = function() {
                                return v(this.props)
                            }, n.getCache = function() {
                                return g[this.getCacheKey()]
                            }, n.setCache = function(e) {
                                void 0 === e && (e = void 0), g[this.getCacheKey()] = e
                            }, n.triggerOnLoad = function() {
                                var e = this;
                                h && setTimeout((function() {
                                    h(e.state.result, e.props)
                                }))
                            }, n.loadSync = function() {
                                if (this.state.loading) try {
                                    var e = b(m.requireSync(this.props), this.props, C);
                                    this.state.result = e, this.state.loading = !1
                                } catch (t) {
                                    console.error("loadable-components: failed to synchronously load component, which expected to be available", {
                                        fileName: m.resolve(this.props),
                                        chunkName: m.chunkName(this.props),
                                        error: t ? t.message : t
                                    }), this.state.error = t
                                }
                            }, n.loadAsync = function() {
                                var e = this,
                                    t = this.resolveAsync();
                                return t.then((function(t) {
                                    var r = b(t, e.props, C);
                                    e.safeSetState({
                                        result: r,
                                        loading: !1
                                    }, (function() {
                                        return e.triggerOnLoad()
                                    }))
                                })).catch((function(t) {
                                    return e.safeSetState({
                                        error: t,
                                        loading: !1
                                    })
                                })), t
                            }, n.resolveAsync = function() {
                                var e = this.props,
                                    t = (e.__chunkExtractor, e.forwardedRef, (0, o.A)(e, ["__chunkExtractor", "forwardedRef"]));
                                return S(t)
                            }, n.render = function() {
                                var e = this.props,
                                    r = e.forwardedRef,
                                    n = e.fallback,
                                    s = (e.__chunkExtractor, (0, o.A)(e, ["forwardedRef", "fallback", "__chunkExtractor"])),
                                    i = this.state,
                                    c = i.error,
                                    l = i.loading,
                                    u = i.result;
                                if (t.suspense && (this.getCache() || this.loadAsync()).status === f) throw this.loadAsync();
                                if (c) throw c;
                                var d = n || t.fallback || null;
                                return l ? d : y({
                                    fallback: d,
                                    result: u,
                                    options: t,
                                    props: (0, a.A)({}, s, {
                                        ref: r
                                    })
                                })
                            }, r
                        }(n.Component),
                        x = (E = function(e) {
                            return n.createElement(u.Consumer, null, (function(t) {
                                return n.createElement(w, Object.assign({
                                    __chunkExtractor: t
                                }, e))
                            }))
                        }, (w = k).displayName && (E.displayName = w.displayName + "WithChunkExtractor"), E),
                        C = n.forwardRef((function(e, t) {
                            return n.createElement(x, Object.assign({
                                forwardedRef: t
                            }, e))
                        }));
                    return C.displayName = "Loadable", C.preload = function(e) {
                        C.load(e)
                    }, C.load = function(e) {
                        return S(e)
                    }, C
                }
                return {
                    loadable: g,
                    lazy: function(e, t) {
                        return g(e, (0, a.A)({}, t, {
                            suspense: !0
                        }))
                    }
                }
            }
            var h = y({
                    defaultResolveComponent: function(e) {
                        return e.__esModule ? e.default : e.default || e
                    },
                    render: function(e) {
                        var t = e.result,
                            r = e.props;
                        return n.createElement(t, r)
                    }
                }),
                g = h.loadable,
                v = h.lazy,
                b = y({
                    onLoad: function(e, t) {
                        e && t.forwardedRef && ("function" == typeof t.forwardedRef ? t.forwardedRef(e) : t.forwardedRef.current = e)
                    },
                    render: function(e) {
                        var t = e.result,
                            r = e.props;
                        return r.children ? r.children(t) : null
                    }
                }),
                w = b.loadable,
                E = b.lazy;
            var S = g;
            S.lib = w, v.lib = E;
            var k = S
        }
    }
]);
//# sourceMappingURL=commons-650c5b7a5d40afa1cdc5.js.map