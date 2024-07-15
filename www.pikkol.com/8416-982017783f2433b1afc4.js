"use strict";
(self.webpackChunkpikkol_gatsby_landing_pages = self.webpackChunkpikkol_gatsby_landing_pages || []).push([
    [8416], {
        8416: function(a, e, s) {
            s.d(e, {
                A: function() {
                    return H
                }
            });
            var r = s(6942),
                d = s.n(r),
                c = s(6540),
                o = s(6519),
                l = s(4848);
            const i = c.forwardRef((({
                className: a,
                bsPrefix: e,
                as: s = "div",
                ...r
            }, c) => (e = (0, o.oU)(e, "card-body"), (0, l.jsx)(s, {
                ref: c,
                className: d()(a, e),
                ...r
            }))));
            i.displayName = "CardBody";
            var t = i;
            const f = c.forwardRef((({
                className: a,
                bsPrefix: e,
                as: s = "div",
                ...r
            }, c) => (e = (0, o.oU)(e, "card-footer"), (0, l.jsx)(s, {
                ref: c,
                className: d()(a, e),
                ...r
            }))));
            f.displayName = "CardFooter";
            var n = f;
            const m = c.createContext(null);
            m.displayName = "CardHeaderContext";
            var N = m;
            const x = c.forwardRef((({
                bsPrefix: a,
                className: e,
                as: s = "div",
                ...r
            }, i) => {
                const t = (0, o.oU)(a, "card-header"),
                    f = (0, c.useMemo)((() => ({
                        cardHeaderBsPrefix: t
                    })), [t]);
                return (0, l.jsx)(N.Provider, {
                    value: f,
                    children: (0, l.jsx)(s, {
                        ref: i,
                        ...r,
                        className: d()(e, t)
                    })
                })
            }));
            x.displayName = "CardHeader";
            var v = x;
            const b = c.forwardRef((({
                bsPrefix: a,
                className: e,
                variant: s,
                as: r = "img",
                ...c
            }, i) => {
                const t = (0, o.oU)(a, "card-img");
                return (0, l.jsx)(r, {
                    ref: i,
                    className: d()(s ? `${t}-${s}` : t, e),
                    ...c
                })
            }));
            b.displayName = "CardImg";
            var y = b;
            const p = c.forwardRef((({
                className: a,
                bsPrefix: e,
                as: s = "div",
                ...r
            }, c) => (e = (0, o.oU)(e, "card-img-overlay"), (0, l.jsx)(s, {
                ref: c,
                className: d()(a, e),
                ...r
            }))));
            p.displayName = "CardImgOverlay";
            var u = p;
            const g = c.forwardRef((({
                className: a,
                bsPrefix: e,
                as: s = "a",
                ...r
            }, c) => (e = (0, o.oU)(e, "card-link"), (0, l.jsx)(s, {
                ref: c,
                className: d()(a, e),
                ...r
            }))));
            g.displayName = "CardLink";
            var C = g,
                j = s(4373);
            const w = (0, j.A)("h6"),
                P = c.forwardRef((({
                    className: a,
                    bsPrefix: e,
                    as: s = w,
                    ...r
                }, c) => (e = (0, o.oU)(e, "card-subtitle"), (0, l.jsx)(s, {
                    ref: c,
                    className: d()(a, e),
                    ...r
                }))));
            P.displayName = "CardSubtitle";
            var k = P;
            const R = c.forwardRef((({
                className: a,
                bsPrefix: e,
                as: s = "p",
                ...r
            }, c) => (e = (0, o.oU)(e, "card-text"), (0, l.jsx)(s, {
                ref: c,
                className: d()(a, e),
                ...r
            }))));
            R.displayName = "CardText";
            var h = R;
            const U = (0, j.A)("h5"),
                _ = c.forwardRef((({
                    className: a,
                    bsPrefix: e,
                    as: s = U,
                    ...r
                }, c) => (e = (0, o.oU)(e, "card-title"), (0, l.jsx)(s, {
                    ref: c,
                    className: d()(a, e),
                    ...r
                }))));
            _.displayName = "CardTitle";
            var $ = _;
            const A = c.forwardRef((({
                bsPrefix: a,
                className: e,
                bg: s,
                text: r,
                border: c,
                body: i = !1,
                children: f,
                as: n = "div",
                ...m
            }, N) => {
                const x = (0, o.oU)(a, "card");
                return (0, l.jsx)(n, {
                    ref: N,
                    ...m,
                    className: d()(e, x, s && `bg-${s}`, r && `text-${r}`, c && `border-${c}`),
                    children: i ? (0, l.jsx)(t, {
                        children: f
                    }) : f
                })
            }));
            A.displayName = "Card";
            var H = Object.assign(A, {
                Img: y,
                Title: $,
                Subtitle: k,
                Body: t,
                Link: C,
                Text: h,
                Header: v,
                Footer: n,
                ImgOverlay: u
            })
        },
        4373: function(a, e, s) {
            var r = s(6540),
                d = s(6942),
                c = s.n(d),
                o = s(4848);
            e.A = a => r.forwardRef(((e, s) => (0, o.jsx)("div", { ...e,
                ref: s,
                className: c()(e.className, a)
            })))
        }
    }
]);
//# sourceMappingURL=8416-982017783f2433b1afc4.js.map