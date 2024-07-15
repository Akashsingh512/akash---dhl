"use strict";
(self.webpackChunkpikkol_gatsby_landing_pages = self.webpackChunkpikkol_gatsby_landing_pages || []).push([
    [2212], {
        2212: function(e, t, r) {
            r.r(t);
            var s = r(3048),
                a = r(6540),
                n = r(2431);
            t.default = e => {
                let {
                    title: t,
                    tableData: r
                } = e;
                const l = Object.keys(r[0]);
                return a.createElement("section", null, a.createElement(s.A, {
                    fluid: !0
                }, a.createElement("h2", {
                    className: "heading-center text-start text-sm-center"
                }, t), a.createElement(n.A, {
                    className: "mt-5",
                    responsive: !0,
                    borderless: !0,
                    hover: !0
                }, a.createElement("thead", null, a.createElement("tr", null, l.map(((e, t) => a.createElement("th", {
                    key: e,
                    style: {
                        padding: "12px"
                    }
                }, "Move_Type___Distance" === e ? "Move type/Distance" : e.replace(/_/g, "_" === e[0] ? "-" : " ").slice("_" === e[0] ? 1 : 0, 1e3), t === l.length - 1 && "+"))))), a.createElement("tbody", null, r.map(((e, t) => a.createElement("tr", {
                    key: `row${t}`
                }, l.map(((r, s) => 0 === s ? a.createElement("th", {
                    key: t + "_" + s,
                    style: {
                        padding: "12px"
                    }
                }, e[r]) : a.createElement("td", {
                    key: t + "_" + s,
                    style: {
                        padding: "12px"
                    }
                }, e[r]))))))))))
            }
        },
        2431: function(e, t, r) {
            var s = r(6942),
                a = r.n(s),
                n = r(6540),
                l = r(6519),
                c = r(4848);
            const i = n.forwardRef((({
                bsPrefix: e,
                className: t,
                striped: r,
                bordered: s,
                borderless: n,
                hover: i,
                size: d,
                variant: o,
                responsive: p,
                ...m
            }, b) => {
                const u = (0, l.oU)(e, "table"),
                    y = a()(t, u, o && `${u}-${o}`, d && `${u}-${d}`, r && `${u}-${"string"==typeof r?`striped-${r}`:"striped"}`, s && `${u}-bordered`, n && `${u}-borderless`, i && `${u}-hover`),
                    _ = (0, c.jsx)("table", { ...m,
                        className: y,
                        ref: b
                    });
                if (p) {
                    let e = `${u}-responsive`;
                    return "string" == typeof p && (e = `${e}-${p}`), (0, c.jsx)("div", {
                        className: e,
                        children: _
                    })
                }
                return _
            }));
            t.A = i
        }
    }
]);
//# sourceMappingURL=2212-8eb0ddfa7707a82564ff.js.map