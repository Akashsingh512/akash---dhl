(self.webpackChunkpikkol_gatsby_landing_pages = self.webpackChunkpikkol_gatsby_landing_pages || []).push([
    [906], {
        6566: function(e, t) {},
        498: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(3850),
                o = n(7385),
                a = n(6540),
                s = n(4468),
                l = n(8416),
                i = n(3048);
            t.default = e => {
                let {
                    title: t,
                    faq: n
                } = e;
                const c = e => {
                    let {
                        eventKey: t,
                        callback: n
                    } = e;
                    const s = (0, a.useContext)(r.A),
                        l = (0, o.M)(t, (() => n && n(t))),
                        i = s.activeEventKey === t;
                    return a.createElement("button", {
                        onClick: l,
                        className: "border-0 bg-white",
                        "aria-label": "Toggle faq"
                    }, i ? a.createElement("svg", {
                        color: "#000",
                        width: "27px",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }, a.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1",
                        d: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    })) : a.createElement("svg", {
                        color: "#000",
                        width: "27px",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }, a.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "1",
                        d: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    })))
                };
                return a.createElement("section", null, a.createElement(i.A, {
                    fluid: !0
                }, a.createElement("h2", {
                    className: "heading-center text-start text-sm-center"
                }, t), a.createElement("div", null, a.createElement(s.A, {
                    defaultActiveKey: "0",
                    className: "border-secondary border-bottom"
                }, n.map(((e, t) => a.createElement(l.A, {
                    key: t,
                    className: "border-secondary-light border-start-0 border-end-0 border-bottom-0",
                    style: {
                        padding: "37px 0",
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0
                    }
                }, a.createElement(l.A.Header, {
                    className: "py-0 px-0 bg-white border-0 d-flex justify-content-between align-items-start align-items-sm-center"
                }, a.createElement("h3", {
                    className: "fw-normal font-merriweather h5 mb-0 py-0"
                }, e.node.question), a.createElement(c, {
                    eventKey: `${t}`
                })), a.createElement(s.A.Collapse, {
                    eventKey: `${t}`
                }, a.createElement(l.A.Body, {
                    className: "px-0 pb-0",
                    style: {
                        paddingTop: "37px"
                    }
                }, a.createElement("p", {
                    className: "mb-0"
                }, e.node.answer.internal.content))))))))))
            }
        },
        7143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var r, o = n(6942),
                a = n.n(o),
                s = n(8394),
                l = n(7828),
                i = n(1625),
                c = n(7400);

            function d(e) {
                if ((!r && 0 !== r || e) && l.A) {
                    var t = document.createElement("div");
                    t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), r = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return r
            }
            var u = n(6540);
            var m = n(1942),
                f = n(3804),
                p = n(1577),
                y = n(5797),
                v = n(7771),
                h = n(4023),
                g = n(7285),
                b = n(6519),
                x = n(4848);
            const E = u.forwardRef((({
                className: e,
                bsPrefix: t,
                as: n = "div",
                ...r
            }, o) => (t = (0, b.oU)(t, "modal-body"), (0, x.jsx)(n, {
                ref: o,
                className: a()(e, t),
                ...r
            }))));
            E.displayName = "ModalBody";
            var w = E,
                A = n(7011);
            const N = u.forwardRef((({
                bsPrefix: e,
                className: t,
                contentClassName: n,
                centered: r,
                size: o,
                fullscreen: s,
                children: l,
                scrollable: i,
                ...c
            }, d) => {
                const u = `${e=(0,b.oU)(e,"modal")}-dialog`,
                    m = "string" == typeof s ? `${e}-fullscreen-${s}` : `${e}-fullscreen`;
                return (0, x.jsx)("div", { ...c,
                    ref: d,
                    className: a()(u, t, o && `${e}-${o}`, r && `${u}-centered`, i && `${u}-scrollable`, s && m),
                    children: (0, x.jsx)("div", {
                        className: a()(`${e}-content`, n),
                        children: l
                    })
                })
            }));
            N.displayName = "ModalDialog";
            var C = N;
            const j = u.forwardRef((({
                className: e,
                bsPrefix: t,
                as: n = "div",
                ...r
            }, o) => (t = (0, b.oU)(t, "modal-footer"), (0, x.jsx)(n, {
                ref: o,
                className: a()(e, t),
                ...r
            }))));
            j.displayName = "ModalFooter";
            var k = j,
                R = n(3447);
            const K = u.forwardRef((({
                bsPrefix: e,
                className: t,
                closeLabel: n = "Close",
                closeButton: r = !1,
                ...o
            }, s) => (e = (0, b.oU)(e, "modal-header"), (0, x.jsx)(R.A, {
                ref: s,
                ...o,
                className: a()(t, e),
                closeLabel: n,
                closeButton: r
            }))));
            K.displayName = "ModalHeader";
            var M = K;
            const $ = (0, n(4373).A)("h4"),
                T = u.forwardRef((({
                    className: e,
                    bsPrefix: t,
                    as: n = $,
                    ...r
                }, o) => (t = (0, b.oU)(t, "modal-title"), (0, x.jsx)(n, {
                    ref: o,
                    className: a()(e, t),
                    ...r
                }))));
            T.displayName = "ModalTitle";
            var O = T;

            function P(e) {
                return (0, x.jsx)(g.A, { ...e,
                    timeout: null
                })
            }

            function S(e) {
                return (0, x.jsx)(g.A, { ...e,
                    timeout: null
                })
            }
            const U = u.forwardRef((({
                bsPrefix: e,
                className: t,
                style: n,
                dialogClassName: r,
                contentClassName: o,
                children: g,
                dialogAs: E = C,
                "data-bs-theme": w,
                "aria-labelledby": N,
                "aria-describedby": j,
                "aria-label": k,
                show: R = !1,
                animation: K = !0,
                backdrop: M = !0,
                keyboard: $ = !0,
                onEscapeKeyDown: T,
                onShow: O,
                onHide: U,
                container: B,
                autoFocus: H = !0,
                enforceFocus: I = !0,
                restoreFocus: L = !0,
                restoreFocusOptions: F,
                onEntered: _,
                onExit: D,
                onExiting: z,
                onEnter: W,
                onEntering: q,
                onExited: Z,
                backdropClassName: V,
                manager: G,
                ...J
            }, Q) => {
                const [X, Y] = (0, u.useState)({}), [ee, te] = (0, u.useState)(!1), ne = (0, u.useRef)(!1), re = (0, u.useRef)(!1), oe = (0, u.useRef)(null), [ae, se] = (0, u.useState)(null), le = (0, f.A)(Q, se), ie = (0, m.A)(U), ce = (0, b.Wz)();
                e = (0, b.oU)(e, "modal");
                const de = (0, u.useMemo)((() => ({
                    onHide: ie
                })), [ie]);

                function ue() {
                    return G || (0, h.R)({
                        isRTL: ce
                    })
                }

                function me(e) {
                    if (!l.A) return;
                    const t = ue().getScrollbarWidth() > 0,
                        n = e.scrollHeight > (0, i.A)(e).documentElement.clientHeight;
                    Y({
                        paddingRight: t && !n ? d() : void 0,
                        paddingLeft: !t && n ? d() : void 0
                    })
                }
                const fe = (0, m.A)((() => {
                    ae && me(ae.dialog)
                }));
                (0, p.A)((() => {
                    (0, c.A)(window, "resize", fe), null == oe.current || oe.current()
                }));
                const pe = () => {
                        ne.current = !0
                    },
                    ye = e => {
                        ne.current && ae && e.target === ae.dialog && (re.current = !0), ne.current = !1
                    },
                    ve = () => {
                        te(!0), oe.current = (0, y.A)(ae.dialog, (() => {
                            te(!1)
                        }))
                    },
                    he = e => {
                        "static" !== M ? re.current || e.target !== e.currentTarget ? re.current = !1 : null == U || U() : (e => {
                            e.target === e.currentTarget && ve()
                        })(e)
                    },
                    ge = (0, u.useCallback)((t => (0, x.jsx)("div", { ...t,
                        className: a()(`${e}-backdrop`, V, !K && "show")
                    })), [K, V, e]),
                    be = { ...n,
                        ...X
                    };
                be.display = "block";
                return (0, x.jsx)(A.A.Provider, {
                    value: de,
                    children: (0, x.jsx)(v.A, {
                        show: R,
                        ref: le,
                        backdrop: M,
                        container: B,
                        keyboard: !0,
                        autoFocus: H,
                        enforceFocus: I,
                        restoreFocus: L,
                        restoreFocusOptions: F,
                        onEscapeKeyDown: e => {
                            $ ? null == T || T(e) : (e.preventDefault(), "static" === M && ve())
                        },
                        onShow: O,
                        onHide: U,
                        onEnter: (e, t) => {
                            e && me(e), null == W || W(e, t)
                        },
                        onEntering: (e, t) => {
                            null == q || q(e, t), (0, s.Ay)(window, "resize", fe)
                        },
                        onEntered: _,
                        onExit: e => {
                            null == oe.current || oe.current(), null == D || D(e)
                        },
                        onExiting: z,
                        onExited: e => {
                            e && (e.style.display = ""), null == Z || Z(e), (0, c.A)(window, "resize", fe)
                        },
                        manager: ue(),
                        transition: K ? P : void 0,
                        backdropTransition: K ? S : void 0,
                        renderBackdrop: ge,
                        renderDialog: n => (0, x.jsx)("div", {
                            role: "dialog",
                            ...n,
                            style: be,
                            className: a()(t, e, ee && `${e}-static`, !K && "show"),
                            onClick: M ? he : void 0,
                            onMouseUp: ye,
                            "data-bs-theme": w,
                            "aria-label": k,
                            "aria-labelledby": N,
                            "aria-describedby": j,
                            children: (0, x.jsx)(E, { ...J,
                                onMouseDown: pe,
                                className: r,
                                contentClassName: o,
                                children: g
                            })
                        })
                    })
                })
            }));
            U.displayName = "Modal";
            var B = Object.assign(U, {
                    Body: w,
                    Header: M,
                    Title: O,
                    Footer: k,
                    Dialog: C,
                    TRANSITION_DURATION: 300,
                    BACKDROP_TRANSITION_DURATION: 150
                }),
                H = n(7685),
                I = n(6462);
            const L = (0, H.Ay)((() => Promise.all([n.e(4223), n.e(1995)]).then(n.bind(n, 3389))));
            var F = e => {
                const t = (0, I.useLocation)(),
                    n = {
                        "/international-relocation/": "international",
                        "/international-relocation": "international",
                        "/storage-facility": "storage",
                        "/storage-facility/": "storage"
                    };
                return u.createElement(B, Object.assign({}, e, {
                    dialogClassName: "custom-modal"
                }), u.createElement(B.Header, {
                    closeButton: !0,
                    className: "border-0"
                }), "video" === e.type ? u.createElement(B.Body, {
                    className: "px-sm-5 pb-sm-5"
                }, u.createElement("div", {
                    style: {
                        width: "80vw"
                    },
                    dangerouslySetInnerHTML: {
                        __html: `<iframe src='${e.url}' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen width="100%" height="400" />`
                    }
                })) : u.createElement(B.Body, {
                    className: "p-sm-5 bg-white d-flex align-items-center justify-content-center"
                }, u.createElement("div", null, u.createElement("h4", {
                    className: "h4 mb-3 fw-bolder font-merriweather"
                }, "Find out how much your moving will cost you?"), u.createElement(L, Object.assign({}, n[t.pathname] ? {
                    callCloudFn: {
                        service: n[t.pathname]
                    }
                } : {}, {
                    overrideSlug: "homepage-getprices"
                })))))
            }
        },
        4468: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return w
                }
            });
            var r = n(6942),
                o = n.n(r),
                a = n(6540),
                s = n(9566),
                l = n(6519),
                i = n(3855),
                c = n(3850),
                d = n(4848);
            const u = a.forwardRef((({
                as: e = "div",
                bsPrefix: t,
                className: n,
                children: r,
                eventKey: s,
                ...u
            }, m) => {
                const {
                    activeEventKey: f
                } = (0, a.useContext)(c.A);
                return t = (0, l.oU)(t, "accordion-collapse"), (0, d.jsx)(i.A, {
                    ref: m,
                    in: (0, c.j)(f, s),
                    ...u,
                    className: o()(n, t),
                    children: (0, d.jsx)(e, {
                        children: a.Children.only(r)
                    })
                })
            }));
            u.displayName = "AccordionCollapse";
            var m = u,
                f = n(1467);
            const p = a.forwardRef((({
                as: e = "div",
                bsPrefix: t,
                className: n,
                onEnter: r,
                onEntering: s,
                onEntered: i,
                onExit: c,
                onExiting: u,
                onExited: p,
                ...y
            }, v) => {
                t = (0, l.oU)(t, "accordion-body");
                const {
                    eventKey: h
                } = (0, a.useContext)(f.A);
                return (0, d.jsx)(m, {
                    eventKey: h,
                    onEnter: r,
                    onEntering: s,
                    onEntered: i,
                    onExit: c,
                    onExiting: u,
                    onExited: p,
                    children: (0, d.jsx)(e, {
                        ref: v,
                        ...y,
                        className: o()(n, t)
                    })
                })
            }));
            p.displayName = "AccordionBody";
            var y = p,
                v = n(7385);
            const h = a.forwardRef((({
                as: e = "h2",
                bsPrefix: t,
                className: n,
                children: r,
                onClick: a,
                ...s
            }, i) => (t = (0, l.oU)(t, "accordion-header"), (0, d.jsx)(e, {
                ref: i,
                ...s,
                className: o()(n, t),
                children: (0, d.jsx)(v.A, {
                    onClick: a,
                    children: r
                })
            }))));
            h.displayName = "AccordionHeader";
            var g = h;
            const b = a.forwardRef((({
                as: e = "div",
                bsPrefix: t,
                className: n,
                eventKey: r,
                ...s
            }, i) => {
                t = (0, l.oU)(t, "accordion-item");
                const c = (0, a.useMemo)((() => ({
                    eventKey: r
                })), [r]);
                return (0, d.jsx)(f.A.Provider, {
                    value: c,
                    children: (0, d.jsx)(e, {
                        ref: i,
                        ...s,
                        className: o()(n, t)
                    })
                })
            }));
            b.displayName = "AccordionItem";
            var x = b;
            const E = a.forwardRef(((e, t) => {
                const {
                    as: n = "div",
                    activeKey: r,
                    bsPrefix: i,
                    className: u,
                    onSelect: m,
                    flush: f,
                    alwaysOpen: p,
                    ...y
                } = (0, s.Zw)(e, {
                    activeKey: "onSelect"
                }), v = (0, l.oU)(i, "accordion"), h = (0, a.useMemo)((() => ({
                    activeEventKey: r,
                    onSelect: m,
                    alwaysOpen: p
                })), [r, m, p]);
                return (0, d.jsx)(c.A.Provider, {
                    value: h,
                    children: (0, d.jsx)(n, {
                        ref: t,
                        ...y,
                        className: o()(u, v, f && `${v}-flush`)
                    })
                })
            }));
            E.displayName = "Accordion";
            var w = Object.assign(E, {
                Button: v.A,
                Collapse: m,
                Item: x,
                Header: g,
                Body: y
            })
        },
        7385: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return d
                }
            });
            var r = n(6540),
                o = n(6942),
                a = n.n(o),
                s = n(3850),
                l = n(1467),
                i = n(6519),
                c = n(4848);

            function d(e, t) {
                const {
                    activeEventKey: n,
                    onSelect: o,
                    alwaysOpen: a
                } = (0, r.useContext)(s.A);
                return r => {
                    let s = e === n ? null : e;
                    a && (s = Array.isArray(n) ? n.includes(e) ? n.filter((t => t !== e)) : [...n, e] : [e]), null == o || o(s, r), null == t || t(r)
                }
            }
            const u = r.forwardRef((({
                as: e = "button",
                bsPrefix: t,
                className: n,
                onClick: o,
                ...u
            }, m) => {
                t = (0, i.oU)(t, "accordion-button");
                const {
                    eventKey: f
                } = (0, r.useContext)(l.A), p = d(f, o), {
                    activeEventKey: y
                } = (0, r.useContext)(s.A);
                return "button" === e && (u.type = "button"), (0, c.jsx)(e, {
                    ref: m,
                    onClick: p,
                    ...u,
                    "aria-expanded": Array.isArray(y) ? y.includes(f) : f === y,
                    className: a()(n, t, !(0, s.j)(y, f) && "collapsed")
                })
            }));
            u.displayName = "AccordionButton", t.A = u
        },
        3850: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return Array.isArray(e) ? e.includes(t) : e === t
            }
            n.d(t, {
                j: function() {
                    return r
                }
            });
            const o = n(6540).createContext({});
            o.displayName = "AccordionContext", t.A = o
        },
        1467: function(e, t, n) {
            "use strict";
            const r = n(6540).createContext({
                eventKey: ""
            });
            r.displayName = "AccordionItemContext", t.A = r
        },
        3855: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return v
                }
            });
            var r = n(6942),
                o = n.n(r),
                a = n(2660),
                s = n(6540),
                l = n(3674),
                i = n(923);
            var c = function(...e) {
                    return e.filter((e => null != e)).reduce(((e, t) => {
                        if ("function" != typeof t) throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
                        return null === e ? t : function(...n) {
                            e.apply(this, n), t.apply(this, n)
                        }
                    }), null)
                },
                d = n(5258),
                u = n(3625),
                m = n(4848);
            const f = {
                height: ["marginTop", "marginBottom"],
                width: ["marginLeft", "marginRight"]
            };

            function p(e, t) {
                const n = t[`offset${e[0].toUpperCase()}${e.slice(1)}`],
                    r = f[e];
                return n + parseInt((0, a.A)(t, r[0]), 10) + parseInt((0, a.A)(t, r[1]), 10)
            }
            const y = {
                [l.kp]: "collapse",
                [l.ze]: "collapsing",
                [l.ns]: "collapsing",
                [l._K]: "collapse show"
            };
            var v = s.forwardRef((({
                onEnter: e,
                onEntering: t,
                onEntered: n,
                onExit: r,
                onExiting: a,
                className: l,
                children: f,
                dimension: v = "height",
                in: h = !1,
                timeout: g = 300,
                mountOnEnter: b = !1,
                unmountOnExit: x = !1,
                appear: E = !1,
                getDimensionValue: w = p,
                ...A
            }, N) => {
                const C = "function" == typeof v ? v() : v,
                    j = (0, s.useMemo)((() => c((e => {
                        e.style[C] = "0"
                    }), e)), [C, e]),
                    k = (0, s.useMemo)((() => c((e => {
                        const t = `scroll${C[0].toUpperCase()}${C.slice(1)}`;
                        e.style[C] = `${e[t]}px`
                    }), t)), [C, t]),
                    R = (0, s.useMemo)((() => c((e => {
                        e.style[C] = null
                    }), n)), [C, n]),
                    K = (0, s.useMemo)((() => c((e => {
                        e.style[C] = `${w(C,e)}px`, (0, d.A)(e)
                    }), r)), [r, w, C]),
                    M = (0, s.useMemo)((() => c((e => {
                        e.style[C] = null
                    }), a)), [C, a]);
                return (0, m.jsx)(u.A, {
                    ref: N,
                    addEndListener: i.A,
                    ...A,
                    "aria-expanded": A.role ? h : null,
                    onEnter: j,
                    onEntering: k,
                    onEntered: R,
                    onExit: K,
                    onExiting: M,
                    childRef: f.ref,
                    in: h,
                    timeout: g,
                    mountOnEnter: b,
                    unmountOnExit: x,
                    appear: E,
                    children: (e, t) => s.cloneElement(f, { ...t,
                        className: o()(l, f.props.className, y[e], "width" === C && "collapse-horizontal")
                    })
                })
            }))
        },
        9566: function(e, t, n) {
            "use strict";
            n.d(t, {
                Zw: function() {
                    return i
                }
            });
            var r = n(8168),
                o = n(8587),
                a = n(6540);
            n(311);

            function s(e) {
                return "default" + e.charAt(0).toUpperCase() + e.substr(1)
            }

            function l(e) {
                var t = function(e, t) {
                    if ("object" != typeof e || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, t || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof t ? t : String(t)
            }

            function i(e, t) {
                return Object.keys(t).reduce((function(n, i) {
                    var c, d = n,
                        u = d[s(i)],
                        m = d[i],
                        f = (0, o.A)(d, [s(i), i].map(l)),
                        p = t[i],
                        y = function(e, t, n) {
                            var r = (0, a.useRef)(void 0 !== e),
                                o = (0, a.useState)(t),
                                s = o[0],
                                l = o[1],
                                i = void 0 !== e,
                                c = r.current;
                            return r.current = i, !i && c && s !== t && l(t), [i ? e : s, (0, a.useCallback)((function(e) {
                                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                                n && n.apply(void 0, [e].concat(r)), l(e)
                            }), [n])]
                        }(m, u, e[p]),
                        v = y[0],
                        h = y[1];
                    return (0, r.A)({}, f, ((c = {})[i] = v, c[p] = h, c))
                }), e)
            }
            n(6566)
        }
    }
]);
//# sourceMappingURL=c8f7fe3b0e41be846d5687592cf2018ff6e22687-fa9c29ef3ce216fa2d20.js.map