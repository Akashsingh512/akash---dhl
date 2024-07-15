"use strict";
(self.webpackChunkpikkol_gatsby_landing_pages = self.webpackChunkpikkol_gatsby_landing_pages || []).push([
    [9345], {
        9345: function(e, a, t) {
            t.r(a), t.d(a, {
                default: function() {
                    return u
                }
            });
            var n = t(3850),
                c = t(7385),
                s = t(6540),
                r = t(4885),
                l = t(4468),
                o = t(7107),
                i = t(8416);
            var d = e => {
                    let {
                        onToggle: a,
                        isOpen: t
                    } = e;
                    return s.createElement("div", {
                        onClick: a,
                        onKeyDown: a,
                        role: "button",
                        "aria-label": "Show pages",
                        tabIndex: 0,
                        className: "nav-icon1 " + (t ? "open" : "")
                    }, s.createElement("span", null), s.createElement("span", null), s.createElement("span", null))
                },
                m = t(4810),
                p = t(2532);
            const f = (0, t(7685).Ay)((() => t.e(906).then(t.bind(t, 7143))));
            var u = () => {
                const {
                    0: e,
                    1: a
                } = (0, s.useState)(!1), {
                    0: u,
                    1: b
                } = (0, s.useState)(!1), x = e => {
                    let {
                        eventKey: a,
                        callback: t
                    } = e;
                    const r = (0, s.useContext)(n.A),
                        l = (0, c.M)(a, (() => t && t(a))),
                        o = r.activeEventKey === a;
                    return s.createElement("button", {
                        onClick: l,
                        className: "border-0 bg-white",
                        "aria-label": "Toggle menu"
                    }, o ? s.createElement("svg", {
                        color: "#000",
                        width: "27px",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }, s.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M5 15l7-7 7 7"
                    })) : s.createElement("svg", {
                        color: "#000",
                        width: "27px",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                    }, s.createElement("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M19 9l-7 7-7-7"
                    })))
                }, {
                    0: g,
                    1: v
                } = (0, s.useState)(0);
                (0, s.useEffect)((() => {
                    const e = () => v(document.documentElement.scrollTop);
                    return window.addEventListener("scroll", e, {
                        passive: !0
                    }), () => {
                        window.removeEventListener("scroll", e)
                    }
                }), []);
                const N = g > 20 ? "headerShadow bg-white " : "";
                return s.createElement("header", {
                    className: `mobileHeader py-3 sticky-top ${N}`,
                    style: {
                        zIndex: "100",
                        height: "64px",
                        position: "fixed",
                        width: "100%"
                    }
                }, s.createElement("nav", {
                    className: "d-flex justify-content-between align-items-center px-3"
                }, s.createElement(m.N_, {
                    to: "/",
                    "aria-label": "Home page"
                }, s.createElement(p.S, {
                    width: 62,
                    height: 23,
                    alt: "",
                    src: "../../../../assets/icons/logo@2x.png",
                    __imageData: t(8152)
                })), s.createElement("div", {
                    className: "d-flex align-items-center"
                }, s.createElement(p.S, {
                    width: 24,
                    height: 24,
                    alt: "pikkol packers and movers",
                    src: "../../../../assets/icons/outline-call-24px.svg",
                    className: "me-2",
                    __imageData: t(6305)
                }), s.createElement("a", {
                    href: "tel:+918088110011",
                    style: {
                        fontFamily: "Merriweather",
                        fontSize: "16px",
                        marginRight: "37px"
                    },
                    className: "fw-bold text-decoration-none"
                }, "8088 110011"), s.createElement(d, {
                    onToggle: () => a(!e),
                    isOpen: e
                }))), s.createElement("div", {
                    className: `mt-4 box-shadow py-2 px-2 mx-3 ${e?"drop-down-animation":"drop-up-animation"} `
                }, s.createElement(l.A, {
                    defaultActiveKey: "0"
                }, s.createElement(i.A, {
                    style: {
                        fontSize: "14px"
                    },
                    className: "border-0"
                }, s.createElement(i.A.Header, {
                    className: "bg-white border-0 d-flex justify-content-between ps-3 custom-spacing"
                }, s.createElement("div", null, "Services"), s.createElement(x, {
                    eventKey: "0"
                })), s.createElement(l.A.Collapse, {
                    eventKey: "0",
                    className: "ps-3"
                }, s.createElement(i.A.Body, {
                    className: "p-0 border-start"
                }, s.createElement(l.A, null, s.createElement(i.A, {
                    className: "border-0"
                }, s.createElement(i.A.Header, {
                    className: "bg-white border-0 d-flex justify-content-between custom-spacing"
                }, s.createElement("div", {
                    className: "padding-main"
                }, s.createElement(m.N_, {
                    to: "/packers-and-movers"
                }, "Domestic Packers and Movers")), s.createElement(x, {
                    eventKey: "0"
                })), s.createElement(l.A.Collapse, {
                    eventKey: "0",
                    className: "ps-3"
                }, s.createElement(i.A.Body, {
                    className: "border-start"
                }, s.createElement("ul", null, r.fW.map(((e, a) => s.createElement("li", {
                    key: a,
                    className: "py-3"
                }, "Delhi" === e.place ? s.createElement(m.N_, {
                    to: `${e.endPoint}`
                }, "Packers and Movers in ", e.place) : s.createElement(m.N_, {
                    to: e.endPoint
                }, "Packers and Movers in ", e.place))))))))), s.createElement(l.A, null, s.createElement(i.A, {
                    className: "border-0"
                }, s.createElement(i.A.Header, {
                    className: "bg-white border-0 d-flex justify-content-between custom-spacing"
                }, s.createElement("div", {
                    className: "padding-main"
                }, s.createElement(m.N_, {
                    to: "/house-shifting"
                }, "House Shifting")), s.createElement(x, {
                    eventKey: "0"
                })), s.createElement(l.A.Collapse, {
                    eventKey: "0",
                    className: "ps-3"
                }, s.createElement(i.A.Body, {
                    className: "border-start"
                }, s.createElement("ul", null, r.Rb.map(((e, a) => s.createElement("li", {
                    key: a,
                    className: "py-3"
                }, s.createElement(m.N_, {
                    to: e.endPoint
                }, "House Shifting in ", e.place))))))))), s.createElement(l.A, null, s.createElement(i.A, {
                    className: "border-0"
                }, s.createElement(i.A.Header, {
                    className: "bg-white border-0 d-flex justify-content-between custom-spacing"
                }, s.createElement("div", {
                    className: "padding-main"
                }, s.createElement(m.N_, {
                    to: "/vehicle-shifting"
                }, "Vehicle Shifting")), s.createElement(x, {
                    eventKey: "0"
                })), s.createElement(l.A.Collapse, {
                    eventKey: "0",
                    className: "ps-3"
                }, s.createElement(i.A.Body, {
                    className: "border-start"
                }, s.createElement("ul", null, r.X_.map(((e, a) => s.createElement("li", {
                    key: a,
                    className: "py-3"
                }, s.createElement(m.N_, {
                    to: e.endPoint
                }, "Vehicle Shifting in ", e.place))))))))), s.createElement(l.A, null, s.createElement(i.A, {
                    className: "border-0"
                }, s.createElement(i.A.Header, {
                    className: "bg-white border-0 d-flex justify-content-between custom-spacing"
                }, s.createElement("div", {
                    className: "padding-main"
                }, s.createElement(m.N_, {
                    to: "/hire-a-mini-truck"
                }, "Hire A Mini Truck")), s.createElement(x, {
                    eventKey: "0"
                })), s.createElement(l.A.Collapse, {
                    eventKey: "0",
                    className: "ps-3"
                }, s.createElement(i.A.Body, {
                    className: "border-start"
                }, s.createElement("ul", null, r.st.map(((e, a) => s.createElement("li", {
                    key: a,
                    className: "py-3"
                }, s.createElement(m.N_, {
                    to: e.endPoint
                }, "Truck Hire in ", e.place))))))))), s.createElement(i.A, {
                    className: "border-0"
                }, s.createElement(i.A.Header, {
                    className: "bg-white border-0 d-flex justify-content-between m-0 custom-spacing"
                }, s.createElement("div", {
                    className: "padding-main"
                }, s.createElement(m.N_, {
                    to: "/storage-facility"
                }, "Storage Facility")))), s.createElement(i.A, {
                    className: "border-0"
                }, s.createElement(i.A.Header, {
                    className: "bg-white border-0 d-flex justify-content-between m-0 custom-spacing"
                }, s.createElement("div", {
                    className: "padding-main"
                }, s.createElement(m.N_, {
                    to: "/international-relocation"
                }, "International Relocation")))))))), s.createElement("ul", {
                    style: {
                        fontSize: "14px",
                        paddingBottom: "23px"
                    }
                }, [{
                    title: "Blog",
                    endPoint: "/blog"
                }, {
                    title: "About Us",
                    endPoint: "/about-us"
                }].map(((e, a) => s.createElement("li", {
                    key: a,
                    className: "custom-blog-spacing"
                }, e.external ? s.createElement("a", {
                    href: e.endPoint
                }, e.title) : s.createElement(m.N_, {
                    className: "text-decoration-none",
                    to: e.endPoint
                }, e.title)))), s.createElement("li", {
                    className: "custom-getprice-spacing"
                }, s.createElement(o.A, {
                    style: {
                        padding: "6px 0",
                        fontSize: "12px",
                        width: "100%",
                        color: "white"
                    },
                    variant: "primary",
                    size: "sm",
                    block: !0,
                    "aria-label": "Get Prices",
                    onClick: () => b(!0)
                }, "Get Prices")))), s.createElement(f, {
                    type: "costCalculator",
                    show: u,
                    onHide: () => b(!1)
                }))
            }
        },
        4468: function(e, a, t) {
            t.d(a, {
                A: function() {
                    return w
                }
            });
            var n = t(6942),
                c = t.n(n),
                s = t(6540),
                r = t(9566),
                l = t(6519),
                o = t(3855),
                i = t(3850),
                d = t(4848);
            const m = s.forwardRef((({
                as: e = "div",
                bsPrefix: a,
                className: t,
                children: n,
                eventKey: r,
                ...m
            }, p) => {
                const {
                    activeEventKey: f
                } = (0, s.useContext)(i.A);
                return a = (0, l.oU)(a, "accordion-collapse"), (0, d.jsx)(o.A, {
                    ref: p,
                    in: (0, i.j)(f, r),
                    ...m,
                    className: c()(t, a),
                    children: (0, d.jsx)(e, {
                        children: s.Children.only(n)
                    })
                })
            }));
            m.displayName = "AccordionCollapse";
            var p = m,
                f = t(1467);
            const u = s.forwardRef((({
                as: e = "div",
                bsPrefix: a,
                className: t,
                onEnter: n,
                onEntering: r,
                onEntered: o,
                onExit: i,
                onExiting: m,
                onExited: u,
                ...b
            }, x) => {
                a = (0, l.oU)(a, "accordion-body");
                const {
                    eventKey: g
                } = (0, s.useContext)(f.A);
                return (0, d.jsx)(p, {
                    eventKey: g,
                    onEnter: n,
                    onEntering: r,
                    onEntered: o,
                    onExit: i,
                    onExiting: m,
                    onExited: u,
                    children: (0, d.jsx)(e, {
                        ref: x,
                        ...b,
                        className: c()(t, a)
                    })
                })
            }));
            u.displayName = "AccordionBody";
            var b = u,
                x = t(7385);
            const g = s.forwardRef((({
                as: e = "h2",
                bsPrefix: a,
                className: t,
                children: n,
                onClick: s,
                ...r
            }, o) => (a = (0, l.oU)(a, "accordion-header"), (0, d.jsx)(e, {
                ref: o,
                ...r,
                className: c()(t, a),
                children: (0, d.jsx)(x.A, {
                    onClick: s,
                    children: n
                })
            }))));
            g.displayName = "AccordionHeader";
            var v = g;
            const N = s.forwardRef((({
                as: e = "div",
                bsPrefix: a,
                className: t,
                eventKey: n,
                ...r
            }, o) => {
                a = (0, l.oU)(a, "accordion-item");
                const i = (0, s.useMemo)((() => ({
                    eventKey: n
                })), [n]);
                return (0, d.jsx)(f.A.Provider, {
                    value: i,
                    children: (0, d.jsx)(e, {
                        ref: o,
                        ...r,
                        className: c()(t, a)
                    })
                })
            }));
            N.displayName = "AccordionItem";
            var y = N;
            const E = s.forwardRef(((e, a) => {
                const {
                    as: t = "div",
                    activeKey: n,
                    bsPrefix: o,
                    className: m,
                    onSelect: p,
                    flush: f,
                    alwaysOpen: u,
                    ...b
                } = (0, r.Zw)(e, {
                    activeKey: "onSelect"
                }), x = (0, l.oU)(o, "accordion"), g = (0, s.useMemo)((() => ({
                    activeEventKey: n,
                    onSelect: p,
                    alwaysOpen: u
                })), [n, p, u]);
                return (0, d.jsx)(i.A.Provider, {
                    value: g,
                    children: (0, d.jsx)(t, {
                        ref: a,
                        ...b,
                        className: c()(m, x, f && `${x}-flush`)
                    })
                })
            }));
            E.displayName = "Accordion";
            var w = Object.assign(E, {
                Button: x.A,
                Collapse: p,
                Item: y,
                Header: v,
                Body: b
            })
        },
        7385: function(e, a, t) {
            t.d(a, {
                M: function() {
                    return d
                }
            });
            var n = t(6540),
                c = t(6942),
                s = t.n(c),
                r = t(3850),
                l = t(1467),
                o = t(6519),
                i = t(4848);

            function d(e, a) {
                const {
                    activeEventKey: t,
                    onSelect: c,
                    alwaysOpen: s
                } = (0, n.useContext)(r.A);
                return n => {
                    let r = e === t ? null : e;
                    s && (r = Array.isArray(t) ? t.includes(e) ? t.filter((a => a !== e)) : [...t, e] : [e]), null == c || c(r, n), null == a || a(n)
                }
            }
            const m = n.forwardRef((({
                as: e = "button",
                bsPrefix: a,
                className: t,
                onClick: c,
                ...m
            }, p) => {
                a = (0, o.oU)(a, "accordion-button");
                const {
                    eventKey: f
                } = (0, n.useContext)(l.A), u = d(f, c), {
                    activeEventKey: b
                } = (0, n.useContext)(r.A);
                return "button" === e && (m.type = "button"), (0, i.jsx)(e, {
                    ref: p,
                    onClick: u,
                    ...m,
                    "aria-expanded": Array.isArray(b) ? b.includes(f) : f === b,
                    className: s()(t, a, !(0, r.j)(b, f) && "collapsed")
                })
            }));
            m.displayName = "AccordionButton", a.A = m
        },
        3850: function(e, a, t) {
            function n(e, a) {
                return Array.isArray(e) ? e.includes(a) : e === a
            }
            t.d(a, {
                j: function() {
                    return n
                }
            });
            const c = t(6540).createContext({});
            c.displayName = "AccordionContext", a.A = c
        },
        1467: function(e, a, t) {
            const n = t(6540).createContext({
                eventKey: ""
            });
            n.displayName = "AccordionItemContext", a.A = n
        },
        8416: function(e, a, t) {
            t.d(a, {
                A: function() {
                    return H
                }
            });
            var n = t(6942),
                c = t.n(n),
                s = t(6540),
                r = t(6519),
                l = t(4848);
            const o = s.forwardRef((({
                className: e,
                bsPrefix: a,
                as: t = "div",
                ...n
            }, s) => (a = (0, r.oU)(a, "card-body"), (0, l.jsx)(t, {
                ref: s,
                className: c()(e, a),
                ...n
            }))));
            o.displayName = "CardBody";
            var i = o;
            const d = s.forwardRef((({
                className: e,
                bsPrefix: a,
                as: t = "div",
                ...n
            }, s) => (a = (0, r.oU)(a, "card-footer"), (0, l.jsx)(t, {
                ref: s,
                className: c()(e, a),
                ...n
            }))));
            d.displayName = "CardFooter";
            var m = d;
            const p = s.createContext(null);
            p.displayName = "CardHeaderContext";
            var f = p;
            const u = s.forwardRef((({
                bsPrefix: e,
                className: a,
                as: t = "div",
                ...n
            }, o) => {
                const i = (0, r.oU)(e, "card-header"),
                    d = (0, s.useMemo)((() => ({
                        cardHeaderBsPrefix: i
                    })), [i]);
                return (0, l.jsx)(f.Provider, {
                    value: d,
                    children: (0, l.jsx)(t, {
                        ref: o,
                        ...n,
                        className: c()(a, i)
                    })
                })
            }));
            u.displayName = "CardHeader";
            var b = u;
            const x = s.forwardRef((({
                bsPrefix: e,
                className: a,
                variant: t,
                as: n = "img",
                ...s
            }, o) => {
                const i = (0, r.oU)(e, "card-img");
                return (0, l.jsx)(n, {
                    ref: o,
                    className: c()(t ? `${i}-${t}` : i, a),
                    ...s
                })
            }));
            x.displayName = "CardImg";
            var g = x;
            const v = s.forwardRef((({
                className: e,
                bsPrefix: a,
                as: t = "div",
                ...n
            }, s) => (a = (0, r.oU)(a, "card-img-overlay"), (0, l.jsx)(t, {
                ref: s,
                className: c()(e, a),
                ...n
            }))));
            v.displayName = "CardImgOverlay";
            var N = v;
            const y = s.forwardRef((({
                className: e,
                bsPrefix: a,
                as: t = "a",
                ...n
            }, s) => (a = (0, r.oU)(a, "card-link"), (0, l.jsx)(t, {
                ref: s,
                className: c()(e, a),
                ...n
            }))));
            y.displayName = "CardLink";
            var E = y,
                w = t(4373);
            const h = (0, w.A)("h6"),
                A = s.forwardRef((({
                    className: e,
                    bsPrefix: a,
                    as: t = h,
                    ...n
                }, s) => (a = (0, r.oU)(a, "card-subtitle"), (0, l.jsx)(t, {
                    ref: s,
                    className: c()(e, a),
                    ...n
                }))));
            A.displayName = "CardSubtitle";
            var k = A;
            const C = s.forwardRef((({
                className: e,
                bsPrefix: a,
                as: t = "p",
                ...n
            }, s) => (a = (0, r.oU)(a, "card-text"), (0, l.jsx)(t, {
                ref: s,
                className: c()(e, a),
                ...n
            }))));
            C.displayName = "CardText";
            var j = C;
            const P = (0, w.A)("h5"),
                S = s.forwardRef((({
                    className: e,
                    bsPrefix: a,
                    as: t = P,
                    ...n
                }, s) => (a = (0, r.oU)(a, "card-title"), (0, l.jsx)(t, {
                    ref: s,
                    className: c()(e, a),
                    ...n
                }))));
            S.displayName = "CardTitle";
            var K = S;
            const _ = s.forwardRef((({
                bsPrefix: e,
                className: a,
                bg: t,
                text: n,
                border: s,
                body: o = !1,
                children: d,
                as: m = "div",
                ...p
            }, f) => {
                const u = (0, r.oU)(e, "card");
                return (0, l.jsx)(m, {
                    ref: f,
                    ...p,
                    className: c()(a, u, t && `bg-${t}`, n && `text-${n}`, s && `border-${s}`),
                    children: o ? (0, l.jsx)(i, {
                        children: d
                    }) : d
                })
            }));
            _.displayName = "Card";
            var H = Object.assign(_, {
                Img: g,
                Title: K,
                Subtitle: k,
                Body: i,
                Link: E,
                Text: j,
                Header: b,
                Footer: m,
                ImgOverlay: N
            })
        },
        8152: function(e) {
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/84ad0bc70958c0ad266cdcf66bc5e3bd/8533f/logo%402x.png","srcSet":"/static/84ad0bc70958c0ad266cdcf66bc5e3bd/87e60/logo%402x.png 16w,\\n/static/84ad0bc70958c0ad266cdcf66bc5e3bd/c405a/logo%402x.png 31w,\\n/static/84ad0bc70958c0ad266cdcf66bc5e3bd/8533f/logo%402x.png 62w,\\n/static/84ad0bc70958c0ad266cdcf66bc5e3bd/f65c9/logo%402x.png 124w","sizes":"(min-width: 62px) 62px, 100vw"},"sources":[{"srcSet":"/static/84ad0bc70958c0ad266cdcf66bc5e3bd/0ce09/logo%402x.webp 16w,\\n/static/84ad0bc70958c0ad266cdcf66bc5e3bd/f7fac/logo%402x.webp 31w,\\n/static/84ad0bc70958c0ad266cdcf66bc5e3bd/ffcaa/logo%402x.webp 62w,\\n/static/84ad0bc70958c0ad266cdcf66bc5e3bd/41812/logo%402x.webp 124w","type":"image/webp","sizes":"(min-width: 62px) 62px, 100vw"}]},"width":62,"height":23}')
        },
        6305: function(e) {
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/432803dcc53c099a0c177520ba9c57af/e4605/outline-call-24px.svg","srcSet":"/static/432803dcc53c099a0c177520ba9c57af/99c53/outline-call-24px.svg 6w,\\n/static/432803dcc53c099a0c177520ba9c57af/3dc2d/outline-call-24px.svg 12w,\\n/static/432803dcc53c099a0c177520ba9c57af/e4605/outline-call-24px.svg 24w","sizes":"(min-width: 24px) 24px, 100vw"},"sources":[{"srcSet":"/static/432803dcc53c099a0c177520ba9c57af/eee53/outline-call-24px.webp 6w,\\n/static/432803dcc53c099a0c177520ba9c57af/30aa9/outline-call-24px.webp 12w,\\n/static/432803dcc53c099a0c177520ba9c57af/4e704/outline-call-24px.webp 24w","type":"image/webp","sizes":"(min-width: 24px) 24px, 100vw"}]},"width":24,"height":24}')
        }
    }
]);
//# sourceMappingURL=9345-6324f868ef4857b91f6d.js.map