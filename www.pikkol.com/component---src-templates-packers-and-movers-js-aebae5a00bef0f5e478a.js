"use strict";
(self.webpackChunkpikkol_gatsby_landing_pages = self.webpackChunkpikkol_gatsby_landing_pages || []).push([
    [222, 8272], {
        6370: function(e, t, a) {
            var n = a(1105),
                s = a(3048),
                i = a(3389),
                c = a(6540),
                o = a(4479),
                r = a(2532);
            t.A = e => {
                let {
                    title: t,
                    subtitle: l = "Redefining relocation services",
                    service: d,
                    buttonText: m = "Calculate your moving cost",
                    costCalculatorText: p = "Find out how much your moving will cost you",
                    staticImage: f = c.createElement(r.S, {
                        imgClassName: "img-fluid",
                        src: "../../assets/imgs/Component_4_1_resized.webp",
                        alt: "",
                        __imageData: a(5007)
                    })
                } = e;
                return c.createElement("section", {
                    style: {
                        paddingTop: "2.5rem",
                        paddingBottom: "2.5rem",
                        marginTop: "100px"
                    }
                }, c.createElement(s.A, {
                    fluid: !0
                }, c.createElement(o.A, null, c.createElement(n.A, {
                    xs: 12,
                    md: 7,
                    className: "px-sm-5 mb-4 mb-sm-0",
                    style: {
                        paddingInline: "15px"
                    }
                }, c.createElement("h1", {
                    className: "display-4 fw-bolder top-banner-text"
                }, t), c.createElement("span", {
                    className: "d-block h5 mt-1 fw-normal font-montserrat"
                }, l), f), c.createElement(n.A, {
                    xs: 12,
                    md: 5,
                    className: "px-sm-5 mb-5 mb-sm-0 cost-calculator",
                    style: {
                        paddingInline: "15px"
                    }
                }, c.createElement("h4", {
                    className: "h4 mb-3 fw-bolder font-merriweather",
                    style: {
                        fontSize: "24px"
                    }
                }, p), c.createElement(i.default, Object.assign({}, d ? {
                    callCloudFn: {
                        service: d
                    }
                } : {}, m ? {
                    buttonText: m
                } : {}))))))
            }
        },
        1123: function(e, t, a) {
            var n = a(1105),
                s = a(3048),
                i = a(6540),
                c = a(4479),
                o = a(2532);
            t.A = () => {
                const e = [{
                    title: "Homes Moved",
                    value: "1,00,000 +",
                    icon: i.createElement(o.S, {
                        width: 64,
                        height: 64,
                        className: "img-fluid",
                        src: "../../assets/icons/icons8-house-96@2x.png",
                        alt: "Pikkol",
                        __imageData: a(1862)
                    })
                }, {
                    title: "Happy Customers",
                    value: "98.3 %",
                    icon: i.createElement(o.S, {
                        width: 64,
                        height: 64,
                        className: "img-fluid",
                        src: "../../assets/icons/icons8-happy-100@2x.png",
                        alt: "Pikkol",
                        __imageData: a(7464)
                    })
                }, {
                    title: "Corporate Clients",
                    value: "260 +",
                    icon: i.createElement(o.S, {
                        width: 64,
                        height: 64,
                        className: "img-fluid",
                        src: "../../assets/icons/icons8-management-80@2x.png",
                        alt: "Pikkol",
                        __imageData: a(549)
                    })
                }, {
                    title: "Warehouses",
                    value: "60 +",
                    icon: i.createElement(o.S, {
                        width: 64,
                        height: 64,
                        className: "img-fluid",
                        src: "../../assets/icons/icons8-warehouse-64@2x.png",
                        alt: "Pikkol",
                        __imageData: a(7004)
                    })
                }];
                return i.createElement("section", null, i.createElement(s.A, {
                    fluid: !0,
                    className: "font-merriweather"
                }, i.createElement(c.A, {
                    className: "mx-auto"
                }, e.map(((e, t) => i.createElement(n.A, {
                    key: t,
                    xs: 6,
                    sm: 3,
                    className: "d-flex flex-column align-items-center text-center p-3 py-sm-0"
                }, e.icon, i.createElement("h3", {
                    className: "fw-bolder mt-3 h5 banner-img-caption"
                }, e.value), i.createElement("h3", {
                    className: "fw-normal h5 banner-img-caption"
                }, e.title)))))))
            }
        },
        8272: function(e, t, a) {
            a.r(t);
            var n = a(3048),
                s = a(6540),
                i = a(7685);
            const c = (0, i.Ay)((() => Promise.all([a.e(1869), a.e(4223), a.e(9214), a.e(6625), a.e(8458)]).then(a.bind(a, 3724)))),
                o = (0, i.Ay)((() => Promise.all([a.e(1869), a.e(4223), a.e(310)]).then(a.bind(a, 310))));
            t.default = e => s.createElement(n.A, {
                fluid: !0,
                className: "p-0 text-secondary"
            }, s.createElement(c, null), s.createElement("div", null, e.children), s.createElement(o, null))
        },
        6020: function(e, t, a) {
            a.r(t);
            var n = a(3760),
                s = a(6370),
                i = a(1123),
                c = a(8272),
                o = a(6540),
                r = a(2532),
                l = a(7685),
                d = a(8078),
                m = a(3709);
            const p = (0, l.Ay)((() => a.e(9671).then(a.bind(a, 9671)))),
                f = (0, l.Ay)((() => a.e(8730).then(a.bind(a, 8730)))),
                b = (0, l.Ay)((() => a.e(6901).then(a.bind(a, 6901)))),
                u = (0, l.Ay)((() => Promise.all([a.e(1869), a.e(8477)]).then(a.bind(a, 8477)))),
                g = (0, l.Ay)((() => Promise.all([a.e(9214), a.e(906), a.e(8416)]).then(a.bind(a, 498)))),
                w = (0, l.Ay)((() => a.e(8724).then(a.bind(a, 8724)))),
                h = (0, l.Ay)((() => a.e(8914).then(a.bind(a, 8914)))),
                y = (0, l.Ay)((() => a.e(3332).then(a.bind(a, 3332)))),
                x = (0, l.Ay)((() => a.e(2212).then(a.bind(a, 2212))));
            t.default = e => {
                let {
                    data: t,
                    pageContext: l
                } = e;
                const v = l.cityName.charAt(0).toUpperCase() + l.cityName.slice(1),
                    k = t.allContentfulPackersAndMoversCityLocationPage.edges.map((e => ({
                        title: "Packers and Movers in " + e.node.locationFullName.split("-").map((e => e[0].toUpperCase() + e.substring(1))).join(" "),
                        endPoint: `https://pikkol.com/${l.cityName}/packers-and-movers-${e.node.locationFullName}-${l.cityName}`
                    }))),
                    _ = {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: t.allContentfulFrequentlyAskedQuestions.edges.map((e => {
                            let {
                                node: t
                            } = e;
                            return {
                                question: t.question,
                                answer: t.answer.internal.content
                            }
                        })).map((e => ({
                            "@type": "Question",
                            name: e.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: e.answer
                            }
                        })))
                    },
                    C = {
                        "@context": "https://schema.org",
                        "@type": "Product",
                        name: "Pikkol Packers and Movers",
                        image: "",
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: "5",
                            bestRating: "5",
                            worstRating: "0",
                            ratingCount: 4.1,
                            reviewCount: 4.1
                        },
                        review: t.allContentfulReview.edges.map((e => {
                            let {
                                node: t
                            } = e;
                            return {
                                "@type": "Review",
                                name: `${t.from} to ${t.to}`,
                                reviewBody: t.text.internal.content,
                                reviewRating: {
                                    "@type": "Rating",
                                    ratingValue: 5,
                                    bestRating: "5",
                                    worstRating: "1"
                                },
                                datePublished: t.publishedDate,
                                author: {
                                    "@type": "Person",
                                    name: t.name
                                }
                            }
                        }))
                    };
                return (0, m.m)(), o.createElement(c.default, null, o.createElement(n.A, {
                    title: t.contentfulPackersAndMoversCityPage.pageHeadTitle,
                    description: t.contentfulPackersAndMoversCityPage.pageMetaDescription.internal.content,
                    schemas: [_, C, {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Pikkol",
                        image: "https://www.pikkol.com/static/84ad0bc70958c0ad266cdcf66bc5e3bd/ffcaa/logo%402x.webp",
                        "@id": "https://www.pikkol.com/",
                        url: "https://www.pikkol.com/",
                        telephone: "8088 110011",
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: "Hybrid Shifting Solutions India Private Limited,  Evoma #14,  Bhattarahalli,  Old Madras Road",
                            addressLocality: "Bangalore",
                            postalCode: "560049",
                            addressCountry: "IN"
                        },
                        openingHoursSpecification: {
                            "@type": "OpeningHoursSpecification",
                            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                            opens: "08:00",
                            closes: "20:00"
                        }
                    }]
                }), o.createElement(s.A, {
                    title: `Packers and movers in ${v}`,
                    subtitle: "Redefining relocation services"
                }), o.createElement(i.A, null), o.createElement(f, {
                    title: t.contentfulPackersAndMoversCityPage.serviceDescriptionSectionHeading,
                    content: o.createElement("p", null, t.contentfulPackersAndMoversCityPage.serviceDescriptionSectionContent.internal.content),
                    illustration: o.createElement(r.S, {
                        imgClassName: "img-fluid",
                        src: "../assets/imgs/Component_5_1_resized.webp",
                        alt: `Best Packers and Movers Services in ${v} at Low Prices`,
                        __imageData: a(9349)
                    })
                }), o.createElement(b, {
                    title: t.contentfulPackersAndMoversCityPage.howItWorksSectionHeader,
                    description: o.createElement("p", null, t.contentfulPackersAndMoversCityPage.howItWorksSectionContent.internal.content)
                }), o.createElement(f, {
                    title: "Choose Professional Service with Pikkol!",
                    content: o.createElement("div", null, (0, d.C)(t.contentfulPackersAndMoversCityPage.serviceUniquenessSectionContent)),
                    illustration: o.createElement(r.S, {
                        imgClassName: "img-fluid",
                        src: "../assets/imgs/Component_6_1_new.webp",
                        alt: `Best Packers and Movers Services in ${v} at Low Prices`,
                        __imageData: a(2236)
                    })
                }), o.createElement(x, {
                    title: t.contentfulPackersAndMoversCityPage.pricingRangeSectionHeader,
                    tableData: t.contentfulPackersAndMoversCityPage.pricingRange
                }), o.createElement(y, {
                    title: `Relocation simplified with Pikkol - best packers and movers services in ${v}`,
                    subTitle: `Pikkol is considered the best packer and mover in ${v} by our base of loyal and satisfied clients. Here are some of the other advantages we have on offer, making us a preferred choice when it comes to selecting packers and movers:`
                }), o.createElement(u, {
                    reviews: t.allContentfulReview.edges
                }), o.createElement(w, null), o.createElement(g, {
                    title: `Frequently asked questions about packers and movers in ${v}`,
                    faq: t.allContentfulFrequentlyAskedQuestions.edges
                }), o.createElement(p, null), k.length > 0 && o.createElement(h, {
                    title: `Locations we serve in ${v}`,
                    cityLinks: k
                }))
            }
        },
        7107: function(e, t, a) {
            a.d(t, {
                A: function() {
                    return p
                }
            });
            var n = a(6942),
                s = a.n(n),
                i = a(6540),
                c = a(4848);
            const o = ["as", "disabled"];

            function r({
                tagName: e,
                disabled: t,
                href: a,
                target: n,
                rel: s,
                role: i,
                onClick: c,
                tabIndex: o = 0,
                type: r
            }) {
                e || (e = null != a || null != n || null != s ? "a" : "button");
                const l = {
                    tagName: e
                };
                if ("button" === e) return [{
                    type: r || "button",
                    disabled: t
                }, l];
                const d = n => {
                    (t || "a" === e && function(e) {
                        return !e || "#" === e.trim()
                    }(a)) && n.preventDefault(), t ? n.stopPropagation() : null == c || c(n)
                };
                return "a" === e && (a || (a = "#"), t && (a = void 0)), [{
                    role: null != i ? i : "button",
                    disabled: void 0,
                    tabIndex: t ? void 0 : o,
                    href: a,
                    target: "a" === e ? n : void 0,
                    "aria-disabled": t || void 0,
                    rel: "a" === e ? s : void 0,
                    onClick: d,
                    onKeyDown: e => {
                        " " === e.key && (e.preventDefault(), d(e))
                    }
                }, l]
            }
            const l = i.forwardRef(((e, t) => {
                let {
                    as: a,
                    disabled: n
                } = e, s = function(e, t) {
                    if (null == e) return {};
                    var a, n, s = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) a = i[n], t.indexOf(a) >= 0 || (s[a] = e[a]);
                    return s
                }(e, o);
                const [i, {
                    tagName: l
                }] = r(Object.assign({
                    tagName: a,
                    disabled: n
                }, s));
                return (0, c.jsx)(l, Object.assign({}, s, i, {
                    ref: t
                }))
            }));
            l.displayName = "Button";
            var d = a(6519);
            const m = i.forwardRef((({
                as: e,
                bsPrefix: t,
                variant: a = "primary",
                size: n,
                active: i = !1,
                disabled: o = !1,
                className: l,
                ...m
            }, p) => {
                const f = (0, d.oU)(t, "btn"),
                    [b, {
                        tagName: u
                    }] = r({
                        tagName: e,
                        disabled: o,
                        ...m
                    }),
                    g = u;
                return (0, c.jsx)(g, { ...b,
                    ...m,
                    ref: p,
                    disabled: o,
                    className: s()(l, f, i && "active", a && `${f}-${a}`, n && `${f}-${n}`, m.href && o && "disabled")
                })
            }));
            m.displayName = "Button";
            var p = m
        },
        4479: function(e, t, a) {
            var n = a(6942),
                s = a.n(n),
                i = a(6540),
                c = a(6519),
                o = a(4848);
            const r = i.forwardRef((({
                bsPrefix: e,
                className: t,
                as: a = "div",
                ...n
            }, i) => {
                const r = (0, c.oU)(e, "row"),
                    l = (0, c.gy)(),
                    d = (0, c.Jm)(),
                    m = `${r}-cols`,
                    p = [];
                return l.forEach((e => {
                    const t = n[e];
                    let a;
                    delete n[e], null != t && "object" == typeof t ? ({
                        cols: a
                    } = t) : a = t;
                    const s = e !== d ? `-${e}` : "";
                    null != a && p.push(`${m}${s}-${a}`)
                })), (0, o.jsx)(a, {
                    ref: i,
                    ...n,
                    className: s()(t, r, ...p)
                })
            }));
            r.displayName = "Row", t.A = r
        },
        7004: function(e) {
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/83845087f6729f7f53aea3ba68376ca1/1c9ce/icons8-warehouse-64%402x.png","srcSet":"/static/83845087f6729f7f53aea3ba68376ca1/fbc98/icons8-warehouse-64%402x.png 16w,\\n/static/83845087f6729f7f53aea3ba68376ca1/914ee/icons8-warehouse-64%402x.png 32w,\\n/static/83845087f6729f7f53aea3ba68376ca1/1c9ce/icons8-warehouse-64%402x.png 64w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/83845087f6729f7f53aea3ba68376ca1/e789a/icons8-warehouse-64%402x.webp 16w,\\n/static/83845087f6729f7f53aea3ba68376ca1/ef6ff/icons8-warehouse-64%402x.webp 32w,\\n/static/83845087f6729f7f53aea3ba68376ca1/8257c/icons8-warehouse-64%402x.webp 64w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}')
        },
        1862: function(e) {
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/67a78c2a37a6d4a2e1d53a92e877ed0d/1c9ce/icons8-house-96%402x.png","srcSet":"/static/67a78c2a37a6d4a2e1d53a92e877ed0d/fbc98/icons8-house-96%402x.png 16w,\\n/static/67a78c2a37a6d4a2e1d53a92e877ed0d/914ee/icons8-house-96%402x.png 32w,\\n/static/67a78c2a37a6d4a2e1d53a92e877ed0d/1c9ce/icons8-house-96%402x.png 64w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/67a78c2a37a6d4a2e1d53a92e877ed0d/e789a/icons8-house-96%402x.webp 16w,\\n/static/67a78c2a37a6d4a2e1d53a92e877ed0d/ef6ff/icons8-house-96%402x.webp 32w,\\n/static/67a78c2a37a6d4a2e1d53a92e877ed0d/8257c/icons8-house-96%402x.webp 64w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}')
        },
        2236: function(e) {
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e8f8f8","images":{"fallback":{"src":"/static/462ddefd8bf48b4bf9f505f45cfb377b/a35fb/Component_6_1_new.webp","srcSet":"/static/462ddefd8bf48b4bf9f505f45cfb377b/6796d/Component_6_1_new.webp 250w,\\n/static/462ddefd8bf48b4bf9f505f45cfb377b/81190/Component_6_1_new.webp 500w,\\n/static/462ddefd8bf48b4bf9f505f45cfb377b/a35fb/Component_6_1_new.webp 1000w","sizes":"(min-width: 1000px) 1000px, 100vw"},"sources":[]},"width":1000,"height":1120}')
        },
        549: function(e) {
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/ea28d46e058fb08ab670c5a3182e7fa0/1c9ce/icons8-management-80%402x.png","srcSet":"/static/ea28d46e058fb08ab670c5a3182e7fa0/fbc98/icons8-management-80%402x.png 16w,\\n/static/ea28d46e058fb08ab670c5a3182e7fa0/914ee/icons8-management-80%402x.png 32w,\\n/static/ea28d46e058fb08ab670c5a3182e7fa0/1c9ce/icons8-management-80%402x.png 64w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/ea28d46e058fb08ab670c5a3182e7fa0/e789a/icons8-management-80%402x.webp 16w,\\n/static/ea28d46e058fb08ab670c5a3182e7fa0/ef6ff/icons8-management-80%402x.webp 32w,\\n/static/ea28d46e058fb08ab670c5a3182e7fa0/8257c/icons8-management-80%402x.webp 64w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}')
        },
        7464: function(e) {
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/61c427e685c758779393b9ce623f408c/1c9ce/icons8-happy-100%402x.png","srcSet":"/static/61c427e685c758779393b9ce623f408c/fbc98/icons8-happy-100%402x.png 16w,\\n/static/61c427e685c758779393b9ce623f408c/914ee/icons8-happy-100%402x.png 32w,\\n/static/61c427e685c758779393b9ce623f408c/1c9ce/icons8-happy-100%402x.png 64w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/static/61c427e685c758779393b9ce623f408c/e789a/icons8-happy-100%402x.webp 16w,\\n/static/61c427e685c758779393b9ce623f408c/ef6ff/icons8-happy-100%402x.webp 32w,\\n/static/61c427e685c758779393b9ce623f408c/8257c/icons8-happy-100%402x.webp 64w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":64}')
        },
        9349: function(e) {
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e8f8f8","images":{"fallback":{"src":"/static/51ba496f81e3203f234a0da507b6ab84/14bcf/Component_5_1_resized.webp","srcSet":"/static/51ba496f81e3203f234a0da507b6ab84/f8026/Component_5_1_resized.webp 125w,\\n/static/51ba496f81e3203f234a0da507b6ab84/50a16/Component_5_1_resized.webp 250w,\\n/static/51ba496f81e3203f234a0da507b6ab84/14bcf/Component_5_1_resized.webp 500w","sizes":"(min-width: 500px) 500px, 100vw"},"sources":[]},"width":500,"height":463.99999999999994}')
        },
        5007: function(e) {
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#e8f8f8","images":{"fallback":{"src":"/static/432de711c03f6a124620e58ccedab0f4/0e039/Component_4_1_resized.webp","srcSet":"/static/432de711c03f6a124620e58ccedab0f4/bd5f2/Component_4_1_resized.webp 163w,\\n/static/432de711c03f6a124620e58ccedab0f4/b62d7/Component_4_1_resized.webp 325w,\\n/static/432de711c03f6a124620e58ccedab0f4/0e039/Component_4_1_resized.webp 650w","sizes":"(min-width: 650px) 650px, 100vw"},"sources":[]},"width":650,"height":428}')
        }
    }
]);
//# sourceMappingURL=component---src-templates-packers-and-movers-js-aebae5a00bef0f5e478a.js.map