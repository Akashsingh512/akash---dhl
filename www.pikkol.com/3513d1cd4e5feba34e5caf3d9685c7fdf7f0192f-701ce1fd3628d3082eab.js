"use strict";
(self.webpackChunkpikkol_gatsby_landing_pages = self.webpackChunkpikkol_gatsby_landing_pages || []).push([
    [9214], {
        3804: function(t, n, e) {
            var i = e(6540);
            const o = t => t && "function" != typeof t ? n => {
                t.current = n
            } : t;
            n.A = function(t, n) {
                return (0, i.useMemo)((() => function(t, n) {
                    const e = o(t),
                        i = o(n);
                    return t => {
                        e && e(t), i && i(t)
                    }
                }(t, n)), [t, n])
            }
        },
        8394: function(t, n, e) {
            var i = e(7828),
                o = !1,
                r = !1;
            try {
                var s = {
                    get passive() {
                        return o = !0
                    },
                    get once() {
                        return r = o = !0
                    }
                };
                i.A && (window.addEventListener("test", s, s), window.removeEventListener("test", s, !0))
            } catch (a) {}
            n.Ay = function(t, n, e, i) {
                if (i && "boolean" != typeof i && !r) {
                    var s = i.once,
                        a = i.capture,
                        u = e;
                    !r && s && (u = e.__once || function t(i) {
                        this.removeEventListener(n, t, a), e.call(this, i)
                    }, e.__once = u), t.addEventListener(n, u, o ? i : a)
                }
                t.addEventListener(n, e, i)
            }
        },
        7828: function(t, n) {
            n.A = !("undefined" == typeof window || !window.document || !window.document.createElement)
        },
        2660: function(t, n, e) {
            e.d(n, {
                A: function() {
                    return c
                }
            });
            var i = e(1625);

            function o(t, n) {
                return function(t) {
                    var n = (0, i.A)(t);
                    return n && n.defaultView || window
                }(t).getComputedStyle(t, n)
            }
            var r = /([A-Z])/g;
            var s = /^ms-/;

            function a(t) {
                return function(t) {
                    return t.replace(r, "-$1").toLowerCase()
                }(t).replace(s, "-ms-")
            }
            var u = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
            var c = function(t, n) {
                var e = "",
                    i = "";
                if ("string" == typeof n) return t.style.getPropertyValue(a(n)) || o(t).getPropertyValue(a(n));
                Object.keys(n).forEach((function(o) {
                    var r = n[o];
                    r || 0 === r ? ! function(t) {
                        return !(!t || !u.test(t))
                    }(o) ? e += a(o) + ": " + r + ";" : i += o + "(" + r + ") " : t.style.removeProperty(a(o))
                })), i && (e += "transform: " + i + ";"), t.style.cssText += ";" + e
            }
        },
        1284: function(t, n, e) {
            var i = e(8394),
                o = e(7400);
            n.A = function(t, n, e, r) {
                return (0, i.Ay)(t, n, e, r),
                    function() {
                        (0, o.A)(t, n, e, r)
                    }
            }
        },
        1625: function(t, n, e) {
            function i(t) {
                return t && t.ownerDocument || document
            }
            e.d(n, {
                A: function() {
                    return i
                }
            })
        },
        7400: function(t, n) {
            n.A = function(t, n, e, i) {
                var o = i && "boolean" != typeof i ? i.capture : i;
                t.removeEventListener(n, e, o), e.__once && t.removeEventListener(n, e.__once, o)
            }
        },
        5797: function(t, n, e) {
            e.d(n, {
                A: function() {
                    return s
                }
            });
            var i = e(2660),
                o = e(1284);

            function r(t, n, e) {
                void 0 === e && (e = 5);
                var i = !1,
                    r = setTimeout((function() {
                        i || function(t, n, e, i) {
                            if (void 0 === e && (e = !1), void 0 === i && (i = !0), t) {
                                var o = document.createEvent("HTMLEvents");
                                o.initEvent(n, e, i), t.dispatchEvent(o)
                            }
                        }(t, "transitionend", !0)
                    }), n + e),
                    s = (0, o.A)(t, "transitionend", (function() {
                        i = !0
                    }), {
                        once: !0
                    });
                return function() {
                    clearTimeout(r), s()
                }
            }

            function s(t, n, e, s) {
                var a, u, c;
                null == e && (a = t, u = (0, i.A)(a, "transitionDuration") || "", c = -1 === u.indexOf("ms") ? 1e3 : 1, e = parseFloat(u) * c || 0);
                var f = r(t, e, s),
                    l = (0, o.A)(t, "transitionend", n);
                return function() {
                    f(), l()
                }
            }
        },
        3625: function(t, n, e) {
            e.d(n, {
                A: function() {
                    return u
                }
            });
            var i = e(6540),
                o = e(3674),
                r = e(3804),
                s = e(961);
            var a = e(4848);
            var u = i.forwardRef((({
                onEnter: t,
                onEntering: n,
                onEntered: e,
                onExit: u,
                onExiting: c,
                onExited: f,
                addEndListener: l,
                children: p,
                childRef: d,
                ...E
            }, h) => {
                const v = (0, i.useRef)(null),
                    x = (0, r.A)(v, d),
                    m = t => {
                        var n;
                        x((n = t) && "setState" in n ? s.findDOMNode(n) : null != n ? n : null)
                    },
                    k = t => n => {
                        t && v.current && t(v.current, n)
                    },
                    g = (0, i.useCallback)(k(t), [t]),
                    b = (0, i.useCallback)(k(n), [n]),
                    C = (0, i.useCallback)(k(e), [e]),
                    y = (0, i.useCallback)(k(u), [u]),
                    A = (0, i.useCallback)(k(c), [c]),
                    S = (0, i.useCallback)(k(f), [f]),
                    O = (0, i.useCallback)(k(l), [l]);
                return (0, a.jsx)(o.Ay, {
                    ref: h,
                    ...E,
                    onEnter: g,
                    onEntered: C,
                    onEntering: b,
                    onExit: y,
                    onExited: S,
                    onExiting: A,
                    addEndListener: O,
                    nodeRef: v,
                    children: "function" == typeof p ? (t, n) => p(t, { ...n,
                        ref: m
                    }) : i.cloneElement(p, {
                        ref: m
                    })
                })
            }))
        },
        923: function(t, n, e) {
            e.d(n, {
                A: function() {
                    return s
                }
            });
            var i = e(2660),
                o = e(5797);

            function r(t, n) {
                const e = (0, i.A)(t, n) || "",
                    o = -1 === e.indexOf("ms") ? 1e3 : 1;
                return parseFloat(e) * o
            }

            function s(t, n) {
                const e = r(t, "transitionDuration"),
                    i = r(t, "transitionDelay"),
                    s = (0, o.A)(t, (e => {
                        e.target === t && (s(), n(e))
                    }), e + i)
            }
        },
        5258: function(t, n, e) {
            function i(t) {
                t.offsetHeight
            }
            e.d(n, {
                A: function() {
                    return i
                }
            })
        },
        3674: function(t, n, e) {
            e.d(n, {
                _K: function() {
                    return p
                },
                ns: function() {
                    return l
                },
                kp: function() {
                    return f
                },
                ze: function() {
                    return d
                },
                Ay: function() {
                    return v
                }
            });
            var i = e(8587),
                o = e(5540),
                r = e(6540),
                s = e(961),
                a = !1,
                u = r.createContext(null),
                c = "unmounted",
                f = "exited",
                l = "entering",
                p = "entered",
                d = "exiting",
                E = function(t) {
                    function n(n, e) {
                        var i;
                        i = t.call(this, n, e) || this;
                        var o, r = e && !e.isMounting ? n.enter : n.appear;
                        return i.appearStatus = null, n.in ? r ? (o = f, i.appearStatus = l) : o = p : o = n.unmountOnExit || n.mountOnEnter ? c : f, i.state = {
                            status: o
                        }, i.nextCallback = null, i
                    }(0, o.A)(n, t), n.getDerivedStateFromProps = function(t, n) {
                        return t.in && n.status === c ? {
                            status: f
                        } : null
                    };
                    var e = n.prototype;
                    return e.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, e.componentDidUpdate = function(t) {
                        var n = null;
                        if (t !== this.props) {
                            var e = this.state.status;
                            this.props.in ? e !== l && e !== p && (n = l) : e !== l && e !== p || (n = d)
                        }
                        this.updateStatus(!1, n)
                    }, e.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, e.getTimeouts = function() {
                        var t, n, e, i = this.props.timeout;
                        return t = n = e = i, null != i && "number" != typeof i && (t = i.exit, n = i.enter, e = void 0 !== i.appear ? i.appear : n), {
                            exit: t,
                            enter: n,
                            appear: e
                        }
                    }, e.updateStatus = function(t, n) {
                        if (void 0 === t && (t = !1), null !== n)
                            if (this.cancelNextCallback(), n === l) {
                                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                    var e = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this);
                                    e && function(t) {
                                        t.scrollTop
                                    }(e)
                                }
                                this.performEnter(t)
                            } else this.performExit();
                        else this.props.unmountOnExit && this.state.status === f && this.setState({
                            status: c
                        })
                    }, e.performEnter = function(t) {
                        var n = this,
                            e = this.props.enter,
                            i = this.context ? this.context.isMounting : t,
                            o = this.props.nodeRef ? [i] : [s.findDOMNode(this), i],
                            r = o[0],
                            u = o[1],
                            c = this.getTimeouts(),
                            f = i ? c.appear : c.enter;
                        !t && !e || a ? this.safeSetState({
                            status: p
                        }, (function() {
                            n.props.onEntered(r)
                        })) : (this.props.onEnter(r, u), this.safeSetState({
                            status: l
                        }, (function() {
                            n.props.onEntering(r, u), n.onTransitionEnd(f, (function() {
                                n.safeSetState({
                                    status: p
                                }, (function() {
                                    n.props.onEntered(r, u)
                                }))
                            }))
                        })))
                    }, e.performExit = function() {
                        var t = this,
                            n = this.props.exit,
                            e = this.getTimeouts(),
                            i = this.props.nodeRef ? void 0 : s.findDOMNode(this);
                        n && !a ? (this.props.onExit(i), this.safeSetState({
                            status: d
                        }, (function() {
                            t.props.onExiting(i), t.onTransitionEnd(e.exit, (function() {
                                t.safeSetState({
                                    status: f
                                }, (function() {
                                    t.props.onExited(i)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: f
                        }, (function() {
                            t.props.onExited(i)
                        }))
                    }, e.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, e.safeSetState = function(t, n) {
                        n = this.setNextCallback(n), this.setState(t, n)
                    }, e.setNextCallback = function(t) {
                        var n = this,
                            e = !0;
                        return this.nextCallback = function(i) {
                            e && (e = !1, n.nextCallback = null, t(i))
                        }, this.nextCallback.cancel = function() {
                            e = !1
                        }, this.nextCallback
                    }, e.onTransitionEnd = function(t, n) {
                        this.setNextCallback(n);
                        var e = this.props.nodeRef ? this.props.nodeRef.current : s.findDOMNode(this),
                            i = null == t && !this.props.addEndListener;
                        if (e && !i) {
                            if (this.props.addEndListener) {
                                var o = this.props.nodeRef ? [this.nextCallback] : [e, this.nextCallback],
                                    r = o[0],
                                    a = o[1];
                                this.props.addEndListener(r, a)
                            }
                            null != t && setTimeout(this.nextCallback, t)
                        } else setTimeout(this.nextCallback, 0)
                    }, e.render = function() {
                        var t = this.state.status;
                        if (t === c) return null;
                        var n = this.props,
                            e = n.children,
                            o = (n.in, n.mountOnEnter, n.unmountOnExit, n.appear, n.enter, n.exit, n.timeout, n.addEndListener, n.onEnter, n.onEntering, n.onEntered, n.onExit, n.onExiting, n.onExited, n.nodeRef, (0, i.A)(n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return r.createElement(u.Provider, {
                            value: null
                        }, "function" == typeof e ? e(t, o) : r.cloneElement(r.Children.only(e), o))
                    }, n
                }(r.Component);

            function h() {}
            E.contextType = u, E.propTypes = {}, E.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: h,
                onEntering: h,
                onEntered: h,
                onExit: h,
                onExiting: h,
                onExited: h
            }, E.UNMOUNTED = c, E.EXITED = f, E.ENTERING = l, E.ENTERED = p, E.EXITING = d;
            var v = E
        }
    }
]);
//# sourceMappingURL=3513d1cd4e5feba34e5caf3d9685c7fdf7f0192f-701ce1fd3628d3082eab.js.map