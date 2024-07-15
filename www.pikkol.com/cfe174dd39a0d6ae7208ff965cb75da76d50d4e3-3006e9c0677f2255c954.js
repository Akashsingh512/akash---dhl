"use strict";
(self.webpackChunkpikkol_gatsby_landing_pages = self.webpackChunkpikkol_gatsby_landing_pages || []).push([
    [6625], {
        1942: function(e, n, t) {
            t.d(n, {
                A: function() {
                    return s
                }
            });
            var r = t(6540);
            var o = function(e) {
                const n = (0, r.useRef)(e);
                return (0, r.useEffect)((() => {
                    n.current = e
                }), [e]), n
            };

            function s(e) {
                const n = o(e);
                return (0, r.useCallback)((function(...e) {
                    return n.current && n.current(...e)
                }), [n])
            }
        },
        1706: function(e, n, t) {
            var r = t(6540);
            const o = void 0 !== t.g && t.g.navigator && "ReactNative" === t.g.navigator.product,
                s = "undefined" != typeof document;
            n.A = s || o ? r.useLayoutEffect : r.useEffect
        },
        1577: function(e, n, t) {
            t.d(n, {
                A: function() {
                    return o
                }
            });
            var r = t(6540);

            function o(e) {
                const n = function(e) {
                    const n = (0, r.useRef)(e);
                    return n.current = e, n
                }(e);
                (0, r.useEffect)((() => () => n.current()), [])
            }
        },
        7771: function(e, n, t) {
            t.d(n, {
                A: function() {
                    return L
                }
            });
            var r = t(1625);

            function o(e) {
                void 0 === e && (e = (0, r.A)());
                try {
                    var n = e.activeElement;
                    return n && n.nodeName ? n : null
                } catch (t) {
                    return e.body
                }
            }

            function s(e, n) {
                return e.contains ? e.contains(n) : e.compareDocumentPosition ? e === n || !!(16 & e.compareDocumentPosition(n)) : void 0
            }
            var i = t(7828),
                a = t(1284),
                c = t(6540),
                l = t(961);
            var u = t(1577);
            var d = t(1942),
                f = t(3041);
            const m = (0, c.createContext)(i.A ? window : void 0);
            m.Provider;

            function h() {
                return (0, c.useContext)(m)
            }
            const g = (e, n) => i.A ? null == e ? (n || (0, r.A)()).body : ("function" == typeof e && (e = e()), e && "current" in e && (e = e.current), e && ("nodeType" in e || e.getBoundingClientRect) ? e : null) : null;
            var p = t(3804),
                E = t(1706);
            var v = function({
                children: e,
                in: n,
                onExited: t,
                mountOnEnter: r,
                unmountOnExit: o
            }) {
                const s = (0, c.useRef)(null),
                    i = (0, c.useRef)(n),
                    a = (0, d.A)(t);
                (0, c.useEffect)((() => {
                    n ? i.current = !0 : a(s.current)
                }), [n, a]);
                const l = (0, p.A)(s, e.ref),
                    u = (0, c.cloneElement)(e, {
                        ref: l
                    });
                return n ? u : o || !i.current && r ? null : u
            };
            const b = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];

            function A(e) {
                let {
                    onEnter: n,
                    onEntering: t,
                    onEntered: r,
                    onExit: o,
                    onExiting: s,
                    onExited: i,
                    addEndListener: a,
                    children: l
                } = e, u = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) t = s[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, b);
                const {
                    major: d
                } = function() {
                    const e = c.version.split(".");
                    return {
                        major: +e[0],
                        minor: +e[1],
                        patch: +e[2]
                    }
                }(), f = d >= 19 ? l.props.ref : l.ref, m = (0, c.useRef)(null), h = (0, p.A)(m, "function" == typeof l ? null : f), g = e => n => {
                    e && m.current && e(m.current, n)
                }, E = (0, c.useCallback)(g(n), [n]), v = (0, c.useCallback)(g(t), [t]), A = (0, c.useCallback)(g(r), [r]), x = (0, c.useCallback)(g(o), [o]), y = (0, c.useCallback)(g(s), [s]), k = (0, c.useCallback)(g(i), [i]), R = (0, c.useCallback)(g(a), [a]);
                return Object.assign({}, u, {
                    nodeRef: m
                }, n && {
                    onEnter: E
                }, t && {
                    onEntering: v
                }, r && {
                    onEntered: A
                }, o && {
                    onExit: x
                }, s && {
                    onExiting: y
                }, i && {
                    onExited: k
                }, a && {
                    addEndListener: R
                }, {
                    children: "function" == typeof l ? (e, n) => l(e, Object.assign({}, n, {
                        ref: h
                    })) : (0, c.cloneElement)(l, {
                        ref: h
                    })
                })
            }
            var x = t(4848);
            const y = ["component"];
            var k = c.forwardRef(((e, n) => {
                let {
                    component: t
                } = e;
                const r = A(function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) t = s[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, y));
                return (0, x.jsx)(t, Object.assign({
                    ref: n
                }, r))
            }));

            function R({
                children: e,
                in: n,
                onExited: t,
                onEntered: r,
                transition: o
            }) {
                const [s, i] = (0, c.useState)(!n);
                n && s && i(!1);
                const a = function({ in: e,
                        onTransition: n
                    }) {
                        const t = (0, c.useRef)(null),
                            r = (0, c.useRef)(!0),
                            o = (0, d.A)(n);
                        return (0, E.A)((() => {
                            if (!t.current) return;
                            let n = !1;
                            return o({ in: e,
                                element: t.current,
                                initial: r.current,
                                isStale: () => n
                            }), () => {
                                n = !0
                            }
                        }), [e, o]), (0, E.A)((() => (r.current = !1, () => {
                            r.current = !0
                        })), []), t
                    }({ in: !!n,
                        onTransition: e => {
                            Promise.resolve(o(e)).then((() => {
                                e.isStale() || (e.in ? null == r || r(e.element, e.initial) : (i(!0), null == t || t(e.element)))
                            }), (n => {
                                throw e.in || i(!0), n
                            }))
                        }
                    }),
                    l = (0, p.A)(a, e.ref);
                return s && !n ? null : (0, c.cloneElement)(e, {
                    ref: l
                })
            }

            function C(e, n, t) {
                return e ? (0, x.jsx)(k, Object.assign({}, t, {
                    component: e
                })) : n ? (0, x.jsx)(R, Object.assign({}, t, {
                    transition: n
                })) : (0, x.jsx)(v, Object.assign({}, t))
            }
            const w = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
            let O;

            function j(e) {
                const n = h(),
                    t = e || function(e) {
                        return O || (O = new f.A({
                            ownerDocument: null == e ? void 0 : e.document
                        })), O
                    }(n),
                    r = (0, c.useRef)({
                        dialog: null,
                        backdrop: null
                    });
                return Object.assign(r.current, {
                    add: () => t.add(r.current),
                    remove: () => t.remove(r.current),
                    isTopModal: () => t.isTopModal(r.current),
                    setDialogRef: (0, c.useCallback)((e => {
                        r.current.dialog = e
                    }), []),
                    setBackdropRef: (0, c.useCallback)((e => {
                        r.current.backdrop = e
                    }), [])
                })
            }
            const N = (0, c.forwardRef)(((e, n) => {
                let {
                    show: t = !1,
                    role: r = "dialog",
                    className: f,
                    style: m,
                    children: p,
                    backdrop: E = !0,
                    keyboard: v = !0,
                    onBackdropClick: b,
                    onEscapeKeyDown: A,
                    transition: y,
                    runTransition: k,
                    backdropTransition: R,
                    runBackdropTransition: O,
                    autoFocus: N = !0,
                    enforceFocus: L = !0,
                    restoreFocus: T = !0,
                    restoreFocusOptions: S,
                    renderDialog: B,
                    renderBackdrop: D = (e => (0, x.jsx)("div", Object.assign({}, e))),
                    manager: F,
                    container: M,
                    onShow: W,
                    onHide: $ = (() => {}),
                    onExit: _,
                    onExited: H,
                    onExiting: P,
                    onEnter: V,
                    onEntering: I,
                    onEntered: K
                } = e, q = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) t = s[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, w);
                const z = h(),
                    G = function(e, n) {
                        const t = h(),
                            [r, o] = (0, c.useState)((() => g(e, null == t ? void 0 : t.document)));
                        if (!r) {
                            const n = g(e);
                            n && o(n)
                        }
                        return (0, c.useEffect)((() => {
                            n && r && n(r)
                        }), [n, r]), (0, c.useEffect)((() => {
                            const n = g(e);
                            n !== r && o(n)
                        }), [e, r]), r
                    }(M),
                    J = j(F),
                    Q = function() {
                        const e = (0, c.useRef)(!0),
                            n = (0, c.useRef)((() => e.current));
                        return (0, c.useEffect)((() => (e.current = !0, () => {
                            e.current = !1
                        })), []), n.current
                    }(),
                    U = function(e) {
                        const n = (0, c.useRef)(null);
                        return (0, c.useEffect)((() => {
                            n.current = e
                        })), n.current
                    }(t),
                    [X, Y] = (0, c.useState)(!t),
                    Z = (0, c.useRef)(null);
                (0, c.useImperativeHandle)(n, (() => J), [J]), i.A && !U && t && (Z.current = o(null == z ? void 0 : z.document)), t && X && Y(!1);
                const ee = (0, d.A)((() => {
                        if (J.add(), ie.current = (0, a.A)(document, "keydown", oe), se.current = (0, a.A)(document, "focus", (() => setTimeout(te)), !0), W && W(), N) {
                            var e, n;
                            const t = o(null != (e = null == (n = J.dialog) ? void 0 : n.ownerDocument) ? e : null == z ? void 0 : z.document);
                            J.dialog && t && !s(J.dialog, t) && (Z.current = t, J.dialog.focus())
                        }
                    })),
                    ne = (0, d.A)((() => {
                        var e;
                        (J.remove(), null == ie.current || ie.current(), null == se.current || se.current(), T) && (null == (e = Z.current) || null == e.focus || e.focus(S), Z.current = null)
                    }));
                (0, c.useEffect)((() => {
                    t && G && ee()
                }), [t, G, ee]), (0, c.useEffect)((() => {
                    X && ne()
                }), [X, ne]), (0, u.A)((() => {
                    ne()
                }));
                const te = (0, d.A)((() => {
                        if (!L || !Q() || !J.isTopModal()) return;
                        const e = o(null == z ? void 0 : z.document);
                        J.dialog && e && !s(J.dialog, e) && J.dialog.focus()
                    })),
                    re = (0, d.A)((e => {
                        e.target === e.currentTarget && (null == b || b(e), !0 === E && $())
                    })),
                    oe = (0, d.A)((e => {
                        v && function(e) {
                            return "Escape" === e.code || 27 === e.keyCode
                        }(e) && J.isTopModal() && (null == A || A(e), e.defaultPrevented || $())
                    })),
                    se = (0, c.useRef)(),
                    ie = (0, c.useRef)();
                if (!G) return null;
                const ae = Object.assign({
                    role: r,
                    ref: J.setDialogRef,
                    "aria-modal": "dialog" === r || void 0
                }, q, {
                    style: m,
                    className: f,
                    tabIndex: -1
                });
                let ce = B ? B(ae) : (0, x.jsx)("div", Object.assign({}, ae, {
                    children: c.cloneElement(p, {
                        role: "document"
                    })
                }));
                ce = C(y, k, {
                    unmountOnExit: !0,
                    mountOnEnter: !0,
                    appear: !0,
                    in: !!t,
                    onExit: _,
                    onExiting: P,
                    onExited: (...e) => {
                        Y(!0), null == H || H(...e)
                    },
                    onEnter: V,
                    onEntering: I,
                    onEntered: K,
                    children: ce
                });
                let le = null;
                return E && (le = D({
                    ref: J.setBackdropRef,
                    onClick: re
                }), le = C(R, O, { in: !!t,
                    appear: !0,
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    children: le
                })), (0, x.jsx)(x.Fragment, {
                    children: l.createPortal((0, x.jsxs)(x.Fragment, {
                        children: [le, ce]
                    }), G)
                })
            }));
            N.displayName = "Modal";
            var L = Object.assign(N, {
                Manager: f.A
            })
        },
        3041: function(e, n, t) {
            t.d(n, {
                A: function() {
                    return s
                }
            });
            var r = t(2660);
            const o = `data-rr-ui-${"modal-open"}`;
            var s = class {
                constructor({
                    ownerDocument: e,
                    handleContainerOverflow: n = !0,
                    isRTL: t = !1
                } = {}) {
                    this.handleContainerOverflow = n, this.isRTL = t, this.modals = [], this.ownerDocument = e
                }
                getScrollbarWidth() {
                    return function(e = document) {
                        const n = e.defaultView;
                        return Math.abs(n.innerWidth - e.documentElement.clientWidth)
                    }(this.ownerDocument)
                }
                getElement() {
                    return (this.ownerDocument || document).body
                }
                setModalAttributes(e) {}
                removeModalAttributes(e) {}
                setContainerStyle(e) {
                    const n = {
                            overflow: "hidden"
                        },
                        t = this.isRTL ? "paddingLeft" : "paddingRight",
                        s = this.getElement();
                    e.style = {
                        overflow: s.style.overflow,
                        [t]: s.style[t]
                    }, e.scrollBarWidth && (n[t] = `${parseInt((0,r.A)(s,t)||"0",10)+e.scrollBarWidth}px`), s.setAttribute(o, ""), (0, r.A)(s, n)
                }
                reset() {
                    [...this.modals].forEach((e => this.remove(e)))
                }
                removeContainerStyle(e) {
                    const n = this.getElement();
                    n.removeAttribute(o), Object.assign(n.style, e.style)
                }
                add(e) {
                    let n = this.modals.indexOf(e);
                    return -1 !== n ? n : (n = this.modals.length, this.modals.push(e), this.setModalAttributes(e), 0 !== n || (this.state = {
                        scrollBarWidth: this.getScrollbarWidth(),
                        style: {}
                    }, this.handleContainerOverflow && this.setContainerStyle(this.state)), n)
                }
                remove(e) {
                    const n = this.modals.indexOf(e); - 1 !== n && (this.modals.splice(n, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(e))
                }
                isTopModal(e) {
                    return !!this.modals.length && this.modals[this.modals.length - 1] === e
                }
            }
        },
        3447: function(e, n, t) {
            t.d(n, {
                A: function() {
                    return h
                }
            });
            var r = t(6540),
                o = t(1942),
                s = t(5556),
                i = t.n(s),
                a = t(6942),
                c = t.n(a),
                l = t(4848);
            const u = {
                    "aria-label": i().string,
                    onClick: i().func,
                    variant: i().oneOf(["white"])
                },
                d = r.forwardRef((({
                    className: e,
                    variant: n,
                    "aria-label": t = "Close",
                    ...r
                }, o) => (0, l.jsx)("button", {
                    ref: o,
                    type: "button",
                    className: c()("btn-close", n && `btn-close-${n}`, e),
                    "aria-label": t,
                    ...r
                })));
            d.displayName = "CloseButton", d.propTypes = u;
            var f = d,
                m = t(7011);
            var h = r.forwardRef((({
                closeLabel: e = "Close",
                closeVariant: n,
                closeButton: t = !1,
                onHide: s,
                children: i,
                ...a
            }, c) => {
                const u = (0, r.useContext)(m.A),
                    d = (0, o.A)((() => {
                        null == u || u.onHide(), null == s || s()
                    }));
                return (0, l.jsxs)("div", {
                    ref: c,
                    ...a,
                    children: [i, t && (0, l.jsx)(f, {
                        "aria-label": e,
                        variant: n,
                        onClick: d
                    })]
                })
            }))
        },
        4023: function(e, n, t) {
            t.d(n, {
                A: function() {
                    return h
                },
                R: function() {
                    return m
                }
            });
            var r = t(2660),
                o = Function.prototype.bind.call(Function.prototype.call, [].slice);

            function s(e, n) {
                return o(e.querySelectorAll(n))
            }

            function i(e, n) {
                return e.replace(new RegExp("(^|\\s)" + n + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }
            var a = t(3041);
            const c = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                l = ".sticky-top",
                u = ".navbar-toggler";
            class d extends a.A {
                adjustAndStore(e, n, t) {
                    const o = n.style[e];
                    n.dataset[e] = o, (0, r.A)(n, {
                        [e]: `${parseFloat((0,r.A)(n,e))+t}px`
                    })
                }
                restore(e, n) {
                    const t = n.dataset[e];
                    void 0 !== t && (delete n.dataset[e], (0, r.A)(n, {
                        [e]: t
                    }))
                }
                setContainerStyle(e) {
                    super.setContainerStyle(e);
                    const n = this.getElement();
                    var t, r;
                    if (r = "modal-open", (t = n).classList ? t.classList.add(r) : function(e, n) {
                            return e.classList ? !!n && e.classList.contains(n) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + n + " ")
                        }(t, r) || ("string" == typeof t.className ? t.className = t.className + " " + r : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + r)), !e.scrollBarWidth) return;
                    const o = this.isRTL ? "paddingLeft" : "paddingRight",
                        i = this.isRTL ? "marginLeft" : "marginRight";
                    s(n, c).forEach((n => this.adjustAndStore(o, n, e.scrollBarWidth))), s(n, l).forEach((n => this.adjustAndStore(i, n, -e.scrollBarWidth))), s(n, u).forEach((n => this.adjustAndStore(i, n, e.scrollBarWidth)))
                }
                removeContainerStyle(e) {
                    super.removeContainerStyle(e);
                    const n = this.getElement();
                    var t, r;
                    r = "modal-open", (t = n).classList ? t.classList.remove(r) : "string" == typeof t.className ? t.className = i(t.className, r) : t.setAttribute("class", i(t.className && t.className.baseVal || "", r));
                    const o = this.isRTL ? "paddingLeft" : "paddingRight",
                        a = this.isRTL ? "marginLeft" : "marginRight";
                    s(n, c).forEach((e => this.restore(o, e))), s(n, l).forEach((e => this.restore(a, e))), s(n, u).forEach((e => this.restore(a, e)))
                }
            }
            let f;

            function m(e) {
                return f || (f = new d(e)), f
            }
            var h = d
        },
        7285: function(e, n, t) {
            var r = t(6942),
                o = t.n(r),
                s = t(6540),
                i = t(3674),
                a = t(923),
                c = t(5258),
                l = t(3625),
                u = t(4848);
            const d = {
                    [i.ns]: "show",
                    [i._K]: "show"
                },
                f = s.forwardRef((({
                    className: e,
                    children: n,
                    transitionClasses: t = {},
                    onEnter: r,
                    ...i
                }, f) => {
                    const m = { in: !1,
                            timeout: 300,
                            mountOnEnter: !1,
                            unmountOnExit: !1,
                            appear: !1,
                            ...i
                        },
                        h = (0, s.useCallback)(((e, n) => {
                            (0, c.A)(e), null == r || r(e, n)
                        }), [r]);
                    return (0, u.jsx)(l.A, {
                        ref: f,
                        addEndListener: a.A,
                        ...m,
                        onEnter: h,
                        childRef: n.ref,
                        children: (r, i) => s.cloneElement(n, { ...i,
                            className: o()("fade", e, n.props.className, d[r], t[r])
                        })
                    })
                }));
            f.displayName = "Fade", n.A = f
        },
        7011: function(e, n, t) {
            const r = t(6540).createContext({
                onHide() {}
            });
            n.A = r
        },
        4373: function(e, n, t) {
            var r = t(6540),
                o = t(6942),
                s = t.n(o),
                i = t(4848);
            n.A = e => r.forwardRef(((n, t) => (0, i.jsx)("div", { ...n,
                ref: t,
                className: s()(n.className, e)
            })))
        }
    }
]);
//# sourceMappingURL=cfe174dd39a0d6ae7208ff965cb75da76d50d4e3-3006e9c0677f2255c954.js.map