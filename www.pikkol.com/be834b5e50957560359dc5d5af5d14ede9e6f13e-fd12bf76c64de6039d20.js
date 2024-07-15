(self.webpackChunkpikkol_gatsby_landing_pages = self.webpackChunkpikkol_gatsby_landing_pages || []).push([
    [7720], {
        4240: function(e, t, n) {
            "use strict";
            var r = n(6540),
                o = function() {
                    return o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }, o.apply(this, arguments)
                };
            "function" == typeof SuppressedError && SuppressedError;
            var u, i = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {},
                E = {},
                a = {};
            Object.defineProperty(a, "__esModule", {
                    value: !0
                }), a.BLOCKS = void 0,
                function(e) {
                    e.DOCUMENT = "document", e.PARAGRAPH = "paragraph", e.HEADING_1 = "heading-1", e.HEADING_2 = "heading-2", e.HEADING_3 = "heading-3", e.HEADING_4 = "heading-4", e.HEADING_5 = "heading-5", e.HEADING_6 = "heading-6", e.OL_LIST = "ordered-list", e.UL_LIST = "unordered-list", e.LIST_ITEM = "list-item", e.HR = "hr", e.QUOTE = "blockquote", e.EMBEDDED_ENTRY = "embedded-entry-block", e.EMBEDDED_ASSET = "embedded-asset-block", e.EMBEDDED_RESOURCE = "embedded-resource-block", e.TABLE = "table", e.TABLE_ROW = "table-row", e.TABLE_CELL = "table-cell", e.TABLE_HEADER_CELL = "table-header-cell"
                }(u || (a.BLOCKS = u = {}));
            var c, l = {};
            Object.defineProperty(l, "__esModule", {
                    value: !0
                }), l.INLINES = void 0,
                function(e) {
                    e.HYPERLINK = "hyperlink", e.ENTRY_HYPERLINK = "entry-hyperlink", e.ASSET_HYPERLINK = "asset-hyperlink", e.RESOURCE_HYPERLINK = "resource-hyperlink", e.EMBEDDED_ENTRY = "embedded-entry-inline", e.EMBEDDED_RESOURCE = "embedded-resource-inline"
                }(c || (l.INLINES = c = {}));
            var f, s = {};
            Object.defineProperty(s, "__esModule", {
                    value: !0
                }), s.MARKS = void 0,
                function(e) {
                    e.BOLD = "bold", e.ITALIC = "italic", e.UNDERLINE = "underline", e.CODE = "code", e.SUPERSCRIPT = "superscript", e.SUBSCRIPT = "subscript", e.STRIKETHROUGH = "strikethrough"
                }(f || (s.MARKS = f = {}));
            var S = {};
            ! function(e) {
                var t, n = i && i.__spreadArray || function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, o = 0, u = t.length; o < u; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.V1_MARKS = e.V1_NODE_TYPES = e.TEXT_CONTAINERS = e.HEADINGS = e.CONTAINERS = e.VOID_BLOCKS = e.TABLE_BLOCKS = e.LIST_ITEM_BLOCKS = e.TOP_LEVEL_BLOCKS = void 0;
                var r = a,
                    o = l,
                    u = s;
                e.TOP_LEVEL_BLOCKS = [r.BLOCKS.PARAGRAPH, r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6, r.BLOCKS.OL_LIST, r.BLOCKS.UL_LIST, r.BLOCKS.HR, r.BLOCKS.QUOTE, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, r.BLOCKS.EMBEDDED_RESOURCE, r.BLOCKS.TABLE], e.LIST_ITEM_BLOCKS = [r.BLOCKS.PARAGRAPH, r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6, r.BLOCKS.OL_LIST, r.BLOCKS.UL_LIST, r.BLOCKS.HR, r.BLOCKS.QUOTE, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, r.BLOCKS.EMBEDDED_RESOURCE], e.TABLE_BLOCKS = [r.BLOCKS.TABLE, r.BLOCKS.TABLE_ROW, r.BLOCKS.TABLE_CELL, r.BLOCKS.TABLE_HEADER_CELL], e.VOID_BLOCKS = [r.BLOCKS.HR, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, r.BLOCKS.EMBEDDED_RESOURCE], e.CONTAINERS = ((t = {})[r.BLOCKS.OL_LIST] = [r.BLOCKS.LIST_ITEM], t[r.BLOCKS.UL_LIST] = [r.BLOCKS.LIST_ITEM], t[r.BLOCKS.LIST_ITEM] = e.LIST_ITEM_BLOCKS, t[r.BLOCKS.QUOTE] = [r.BLOCKS.PARAGRAPH], t[r.BLOCKS.TABLE] = [r.BLOCKS.TABLE_ROW], t[r.BLOCKS.TABLE_ROW] = [r.BLOCKS.TABLE_CELL, r.BLOCKS.TABLE_HEADER_CELL], t[r.BLOCKS.TABLE_CELL] = [r.BLOCKS.PARAGRAPH], t[r.BLOCKS.TABLE_HEADER_CELL] = [r.BLOCKS.PARAGRAPH], t), e.HEADINGS = [r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6], e.TEXT_CONTAINERS = n([r.BLOCKS.PARAGRAPH], e.HEADINGS, !0), e.V1_NODE_TYPES = [r.BLOCKS.DOCUMENT, r.BLOCKS.PARAGRAPH, r.BLOCKS.HEADING_1, r.BLOCKS.HEADING_2, r.BLOCKS.HEADING_3, r.BLOCKS.HEADING_4, r.BLOCKS.HEADING_5, r.BLOCKS.HEADING_6, r.BLOCKS.OL_LIST, r.BLOCKS.UL_LIST, r.BLOCKS.LIST_ITEM, r.BLOCKS.HR, r.BLOCKS.QUOTE, r.BLOCKS.EMBEDDED_ENTRY, r.BLOCKS.EMBEDDED_ASSET, o.INLINES.HYPERLINK, o.INLINES.ENTRY_HYPERLINK, o.INLINES.ASSET_HYPERLINK, o.INLINES.EMBEDDED_ENTRY, "text"], e.V1_MARKS = [u.MARKS.BOLD, u.MARKS.CODE, u.MARKS.ITALIC, u.MARKS.UNDERLINE]
            }(S);
            var L = {};
            Object.defineProperty(L, "__esModule", {
                value: !0
            });
            var O = {};
            Object.defineProperty(O, "__esModule", {
                value: !0
            });
            var d = {};
            Object.defineProperty(d, "__esModule", {
                value: !0
            }), d.EMPTY_DOCUMENT = void 0;
            var _ = a;
            d.EMPTY_DOCUMENT = {
                nodeType: _.BLOCKS.DOCUMENT,
                data: {},
                content: [{
                    nodeType: _.BLOCKS.PARAGRAPH,
                    data: {},
                    content: [{
                        nodeType: "text",
                        value: "",
                        marks: [],
                        data: {}
                    }]
                }]
            };
            var p = {};
            Object.defineProperty(p, "__esModule", {
                value: !0
            }), p.isText = p.isBlock = p.isInline = void 0;
            var y, B, I = a,
                C = l;

            function A(e, t) {
                for (var n = 0, r = Object.keys(e); n < r.length; n++) {
                    if (t === e[r[n]]) return !0
                }
                return !1
            }

            function T(e, t) {
                return e.map((function(e, n) {
                    return o = K(e, t), u = n, r.isValidElement(o) && null === o.key ? r.cloneElement(o, {
                        key: u
                    }) : o;
                    var o, u
                }))
            }

            function K(e, t) {
                var n = t.renderNode,
                    o = t.renderMark,
                    u = t.renderText,
                    i = t.preserveWhitespace;
                if (E.helpers.isText(e)) {
                    var a = u ? u(e.value) : e.value;
                    if (i) {
                        var c = (a = a.replace(/ {2,}/g, (function(e) {
                                return " ".repeat(e.length)
                            }))).split("\n"),
                            l = [];
                        c.forEach((function(e, t) {
                            l.push(e), t !== c.length - 1 && l.push(r.createElement("br", null))
                        })), a = l
                    }
                    return e.marks.reduce((function(e, t) {
                        return o[t.type] ? o[t.type](e) : e
                    }), a)
                }
                var f = T(e.content, t);
                return e.nodeType && n[e.nodeType] ? n[e.nodeType](e, f) : r.createElement(r.Fragment, null, f)
            }
            p.isInline = function(e) {
                    return A(C.INLINES, e.nodeType)
                }, p.isBlock = function(e) {
                    return A(I.BLOCKS, e.nodeType)
                }, p.isText = function(e) {
                    return "text" === e.nodeType
                },
                function(e) {
                    var t = i && i.__createBinding || (Object.create ? function(e, t, n, r) {
                            void 0 === r && (r = n);
                            var o = Object.getOwnPropertyDescriptor(t, n);
                            o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
                                enumerable: !0,
                                get: function() {
                                    return t[n]
                                }
                            }), Object.defineProperty(e, r, o)
                        } : function(e, t, n, r) {
                            void 0 === r && (r = n), e[r] = t[n]
                        }),
                        n = i && i.__setModuleDefault || (Object.create ? function(e, t) {
                            Object.defineProperty(e, "default", {
                                enumerable: !0,
                                value: t
                            })
                        } : function(e, t) {
                            e.default = t
                        }),
                        r = i && i.__exportStar || function(e, n) {
                            for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(n, r) || t(n, e, r)
                        },
                        o = i && i.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var r = {};
                            if (null != e)
                                for (var o in e) "default" !== o && Object.prototype.hasOwnProperty.call(e, o) && t(r, e, o);
                            return n(r, e), r
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.helpers = e.EMPTY_DOCUMENT = e.MARKS = e.INLINES = e.BLOCKS = void 0;
                    var u = a;
                    Object.defineProperty(e, "BLOCKS", {
                        enumerable: !0,
                        get: function() {
                            return u.BLOCKS
                        }
                    });
                    var E = l;
                    Object.defineProperty(e, "INLINES", {
                        enumerable: !0,
                        get: function() {
                            return E.INLINES
                        }
                    });
                    var c = s;
                    Object.defineProperty(e, "MARKS", {
                        enumerable: !0,
                        get: function() {
                            return c.MARKS
                        }
                    }), r(S, e), r(L, e), r(O, e);
                    var f = d;
                    Object.defineProperty(e, "EMPTY_DOCUMENT", {
                        enumerable: !0,
                        get: function() {
                            return f.EMPTY_DOCUMENT
                        }
                    });
                    var _ = o(p);
                    e.helpers = _
                }(E);
            var D = ((y = {})[E.BLOCKS.DOCUMENT] = function(e, t) {
                    return t
                }, y[E.BLOCKS.PARAGRAPH] = function(e, t) {
                    return r.createElement("p", null, t)
                }, y[E.BLOCKS.HEADING_1] = function(e, t) {
                    return r.createElement("h1", null, t)
                }, y[E.BLOCKS.HEADING_2] = function(e, t) {
                    return r.createElement("h2", null, t)
                }, y[E.BLOCKS.HEADING_3] = function(e, t) {
                    return r.createElement("h3", null, t)
                }, y[E.BLOCKS.HEADING_4] = function(e, t) {
                    return r.createElement("h4", null, t)
                }, y[E.BLOCKS.HEADING_5] = function(e, t) {
                    return r.createElement("h5", null, t)
                }, y[E.BLOCKS.HEADING_6] = function(e, t) {
                    return r.createElement("h6", null, t)
                }, y[E.BLOCKS.EMBEDDED_ENTRY] = function(e, t) {
                    return r.createElement("div", null, t)
                }, y[E.BLOCKS.EMBEDDED_RESOURCE] = function(e, t) {
                    return r.createElement("div", null, t)
                }, y[E.BLOCKS.UL_LIST] = function(e, t) {
                    return r.createElement("ul", null, t)
                }, y[E.BLOCKS.OL_LIST] = function(e, t) {
                    return r.createElement("ol", null, t)
                }, y[E.BLOCKS.LIST_ITEM] = function(e, t) {
                    return r.createElement("li", null, t)
                }, y[E.BLOCKS.QUOTE] = function(e, t) {
                    return r.createElement("blockquote", null, t)
                }, y[E.BLOCKS.HR] = function() {
                    return r.createElement("hr", null)
                }, y[E.BLOCKS.TABLE] = function(e, t) {
                    return r.createElement("table", null, r.createElement("tbody", null, t))
                }, y[E.BLOCKS.TABLE_ROW] = function(e, t) {
                    return r.createElement("tr", null, t)
                }, y[E.BLOCKS.TABLE_HEADER_CELL] = function(e, t) {
                    return r.createElement("th", null, t)
                }, y[E.BLOCKS.TABLE_CELL] = function(e, t) {
                    return r.createElement("td", null, t)
                }, y[E.INLINES.ASSET_HYPERLINK] = function(e) {
                    return R(E.INLINES.ASSET_HYPERLINK, e)
                }, y[E.INLINES.ENTRY_HYPERLINK] = function(e) {
                    return R(E.INLINES.ENTRY_HYPERLINK, e)
                }, y[E.INLINES.RESOURCE_HYPERLINK] = function(e) {
                    return v(E.INLINES.RESOURCE_HYPERLINK, e)
                }, y[E.INLINES.EMBEDDED_ENTRY] = function(e) {
                    return R(E.INLINES.EMBEDDED_ENTRY, e)
                }, y[E.INLINES.EMBEDDED_RESOURCE] = function(e, t) {
                    return v(E.INLINES.EMBEDDED_RESOURCE, e)
                }, y[E.INLINES.HYPERLINK] = function(e, t) {
                    return r.createElement("a", {
                        href: e.data.uri
                    }, t)
                }, y),
                N = ((B = {})[E.MARKS.BOLD] = function(e) {
                    return r.createElement("b", null, e)
                }, B[E.MARKS.ITALIC] = function(e) {
                    return r.createElement("i", null, e)
                }, B[E.MARKS.UNDERLINE] = function(e) {
                    return r.createElement("u", null, e)
                }, B[E.MARKS.CODE] = function(e) {
                    return r.createElement("code", null, e)
                }, B[E.MARKS.SUPERSCRIPT] = function(e) {
                    return r.createElement("sup", null, e)
                }, B[E.MARKS.SUBSCRIPT] = function(e) {
                    return r.createElement("sub", null, e)
                }, B[E.MARKS.STRIKETHROUGH] = function(e) {
                    return r.createElement("s", null, e)
                }, B);

            function R(e, t) {
                return r.createElement("span", {
                    key: t.data.target.sys.id
                }, "type: ", t.nodeType, " id: ", t.data.target.sys.id)
            }

            function v(e, t) {
                return r.createElement("span", {
                    key: t.data.target.sys.urn
                }, "type: ", t.nodeType, " urn: ", t.data.target.sys.urn)
            }
            t.documentToReactComponents = function(e, t) {
                return void 0 === t && (t = {}), e ? K(e, {
                    renderNode: o(o({}, D), t.renderNode),
                    renderMark: o(o({}, N), t.renderMark),
                    renderText: t.renderText,
                    preserveWhitespace: t.preserveWhitespace
                }) : null
            }
        },
        3893: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(6044),
                o = n.n(r),
                u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                i = function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            r = !0,
                            o = !1,
                            u = void 0;
                        try {
                            for (var i, E = e[Symbol.iterator](); !(r = (i = E.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                        } catch (a) {
                            o = !0, u = a
                        } finally {
                            try {
                                !r && E.return && E.return()
                            } finally {
                                if (o) throw u
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                };

            function E(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
            var a = {},
                c = function(e, t) {
                    var n = t.entryId,
                        r = t.linkType,
                        o = t.spaceId,
                        u = t.environmentId;
                    return o && u ? e.get(o + "!" + u + "!" + r + "!" + n) : e.get(r + "!" + n)
                },
                l = function(e, t) {
                    var n = t.sys,
                        r = n.type,
                        o = n.linkType;
                    if ("ResourceLink" === r) {
                        var u = function(e) {
                                var t = /.*:spaces\/([^/]+)(?:\/environments\/([^/]+))?\/entries\/([^/]+)$/;
                                if (t.test(e)) {
                                    var n = e.match(t),
                                        r = i(n, 4),
                                        o = (r[0], r[1]),
                                        u = r[2];
                                    return {
                                        spaceId: o,
                                        environmentId: void 0 === u ? "master" : u,
                                        entryId: r[3]
                                    }
                                }
                            }(t.sys.urn),
                            E = u.spaceId,
                            l = u.environmentId,
                            f = u.entryId,
                            s = o.split(":")[1];
                        return c(e, {
                            linkType: s,
                            entryId: f,
                            spaceId: E,
                            environmentId: l
                        }) || a
                    }
                    var S = t.sys.id;
                    return c(e, {
                        linkType: o,
                        entryId: S
                    }) || a
                },
                f = function e(t, n, r, o) {
                    if (n(t)) return r(t);
                    if (t && "object" === (void 0 === t ? "undefined" : u(t))) {
                        for (var i in t) t.hasOwnProperty(i) && (t[i] = e(t[i], n, r, o));
                        o && (t = function(e) {
                            if (Array.isArray(e)) return e.filter((function(e) {
                                return e !== a
                            }));
                            for (var t in e) e[t] === a && delete e[t];
                            return e
                        }(t))
                    }
                    return t
                };
            t.default = function(e, t) {
                if (t = t || {}, !e.items) return [];
                var n = o()(e),
                    r = Object.keys(n.includes || {}).reduce((function(t, n) {
                        return [].concat(E(t), E(e.includes[n]))
                    }), []),
                    u = [].concat(E(n.items), E(r)).filter((function(e) {
                        return Boolean(e.sys)
                    })),
                    i = new Map(u.reduce((function(e, t) {
                        var n, r = (n = t.sys, n.space && n.environment ? [n.type + "!" + n.id, n.space.sys.id + "!" + n.environment.sys.id + "!" + n.type + "!" + n.id] : [n.type + "!" + n.id]).map((function(e) {
                            return [e, t]
                        }));
                        return e.push.apply(e, E(r)), e
                    }), []));
                return u.forEach((function(e) {
                    var n = function(e, t) {
                        return Array.isArray(t) ? Object.keys(e).filter((function(e) {
                            return -1 !== t.indexOf(e)
                        })).reduce((function(t, n) {
                            return t[n] = e[n], t
                        }), {}) : e
                    }(e, t.itemEntryPoints);
                    Object.assign(e, f(n, (function(e) {
                        return (t = e) && t.sys && "Link" === t.sys.type || function(e) {
                            return e && e.sys && "ResourceLink" === e.sys.type
                        }(e);
                        var t
                    }), (function(e) {
                        return function(e, t, n) {
                            var r = l(e, t);
                            return r === a ? n ? r : t : r
                        }(i, e, t.removeUnresolved)
                    }), t.removeUnresolved))
                })), n.items
            }
        },
        6044: function(e, t, n) {
            e.exports = function() {
                "use strict";
                var e = Function.prototype.toString,
                    t = Object.create,
                    r = Object.defineProperty,
                    o = Object.getOwnPropertyDescriptor,
                    u = Object.getOwnPropertyNames,
                    i = Object.getOwnPropertySymbols,
                    E = Object.getPrototypeOf,
                    a = Object.prototype,
                    c = a.hasOwnProperty,
                    l = a.propertyIsEnumerable,
                    f = "function" == typeof i,
                    s = "function" == typeof WeakMap,
                    S = function() {
                        if (s) return function() {
                            return new WeakMap
                        };
                        var e = function() {
                            function e() {
                                this._keys = [], this._values = []
                            }
                            return e.prototype.has = function(e) {
                                return !!~this._keys.indexOf(e)
                            }, e.prototype.get = function(e) {
                                return this._values[this._keys.indexOf(e)]
                            }, e.prototype.set = function(e, t) {
                                this._keys.push(e), this._values.push(t)
                            }, e
                        }();
                        return function() {
                            return new e
                        }
                    }(),
                    L = function(n, r) {
                        var o = n.__proto__ || E(n);
                        if (!o) return t(null);
                        var u = o.constructor;
                        if (u === r.Object) return o === r.Object.prototype ? {} : t(o);
                        if (~e.call(u).indexOf("[native code]")) try {
                            return new u
                        } catch (a) {}
                        return t(o)
                    },
                    O = function(e, t, n, r) {
                        var o = L(e, t);
                        for (var u in r.set(e, o), e) c.call(e, u) && (o[u] = n(e[u], r));
                        if (f)
                            for (var E = i(e), a = 0, s = E.length, S = void 0; a < s; ++a) S = E[a], l.call(e, S) && (o[S] = n(e[S], r));
                        return o
                    },
                    d = function(e, t, n, E) {
                        var a = L(e, t);
                        E.set(e, a);
                        for (var c = f ? u(e).concat(i(e)) : u(e), l = 0, s = c.length, S = void 0, O = void 0; l < s; ++l)
                            if ("callee" !== (S = c[l]) && "caller" !== S)
                                if (O = o(e, S)) {
                                    O.get || O.set || (O.value = n(e[S], E));
                                    try {
                                        r(a, S, O)
                                    } catch (d) {
                                        a[S] = O.value
                                    }
                                } else a[S] = n(e[S], E);
                        return a
                    },
                    _ = function(e) {
                        var t = "";
                        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
                    },
                    p = Array.isArray,
                    y = Object.getPrototypeOf,
                    B = function() {
                        return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : (console && console.error && console.error('Unable to locate global object, returning "this".'), this)
                    }();

                function I(e, t) {
                    var n = !(!t || !t.isStrict),
                        r = t && t.realm || B,
                        o = n ? d : O,
                        u = function(e, t) {
                            if (!e || "object" != typeof e) return e;
                            if (t.has(e)) return t.get(e);
                            var i, E = e.__proto__ || y(e),
                                a = E && E.constructor;
                            if (!a || a === r.Object) return o(e, r, u, t);
                            if (p(e)) {
                                if (n) return d(e, r, u, t);
                                i = new a, t.set(e, i);
                                for (var c = 0, l = e.length; c < l; ++c) i[c] = u(e[c], t);
                                return i
                            }
                            if (e instanceof r.Date) return new a(e.getTime());
                            if (e instanceof r.RegExp) return (i = new a(e.source, e.flags || _(e))).lastIndex = e.lastIndex, i;
                            if (r.Map && e instanceof r.Map) return i = new a, t.set(e, i), e.forEach((function(e, n) {
                                i.set(n, u(e, t))
                            })), i;
                            if (r.Set && e instanceof r.Set) return i = new a, t.set(e, i), e.forEach((function(e) {
                                i.add(u(e, t))
                            })), i;
                            if (r.Blob && e instanceof r.Blob) return e.slice(0, e.size, e.type);
                            if (r.Buffer && r.Buffer.isBuffer(e)) return i = r.Buffer.allocUnsafe ? r.Buffer.allocUnsafe(e.length) : new a(e.length), t.set(e, i), e.copy(i), i;
                            if (r.ArrayBuffer) {
                                if (r.ArrayBuffer.isView(e)) return i = new a(e.buffer.slice(0)), t.set(e, i), i;
                                if (e instanceof r.ArrayBuffer) return i = e.slice(0), t.set(e, i), i
                            }
                            return "function" == typeof e.then || e instanceof Error || r.WeakMap && e instanceof r.WeakMap || r.WeakSet && e instanceof r.WeakSet ? e : o(e, r, u, t)
                        };
                    return u(e, S())
                }
                return I.default = I, I.strict = function(e, t) {
                    return I(e, {
                        isStrict: !0,
                        realm: t ? t.realm : void 0
                    })
                }, I
            }()
        },
        8078: function(e, t, n) {
            "use strict";
            var r = n(4994);
            t.C = function(e, t) {
                let {
                    raw: n,
                    references: r
                } = e;
                void 0 === t && (t = {});
                const i = JSON.parse(n || null);
                if (!r || !r.length) return (0, o.documentToReactComponents)(i, t);
                const E = {
                        items: [{
                            sys: {
                                type: "Entry"
                            },
                            richText: i
                        }],
                        includes: {
                            Entry: r.filter((e => {
                                let {
                                    __typename: t
                                } = e;
                                return "ContentfulAsset" !== t
                            })).map((e => ({ ...e,
                                sys: {
                                    type: "Entry",
                                    id: e.contentful_id
                                }
                            }))),
                            Asset: r.filter((e => {
                                let {
                                    __typename: t
                                } = e;
                                return "ContentfulAsset" === t
                            })).map((e => ({ ...e,
                                sys: {
                                    type: "Asset",
                                    id: e.contentful_id
                                }
                            })))
                        }
                    },
                    a = (0, u.default)(E, {
                        removeUnresolved: !0
                    });
                return (0, o.documentToReactComponents)(a[0].richText, t)
            };
            var o = n(4240),
                u = r(n(3893))
        }
    }
]);
//# sourceMappingURL=be834b5e50957560359dc5d5af5d14ede9e6f13e-fd12bf76c64de6039d20.js.map