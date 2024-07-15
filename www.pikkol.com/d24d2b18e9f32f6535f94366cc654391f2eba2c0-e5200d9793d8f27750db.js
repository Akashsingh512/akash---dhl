(self.webpackChunkpikkol_gatsby_landing_pages = self.webpackChunkpikkol_gatsby_landing_pages || []).push([
    [1995], {
        2505: function(e, t, n) {
            e.exports = n(8015)
        },
        5592: function(e, t, n) {
            "use strict";
            var r = n(9516),
                o = n(7522),
                a = n(3948),
                i = n(9106),
                s = n(9615),
                c = n(2012),
                l = n(4202),
                u = n(7763),
                d = n(4896),
                f = n(1928);
            e.exports = function(e) {
                return new Promise((function(t, n) {
                    var p, m = e.data,
                        h = e.headers,
                        v = e.responseType;

                    function g() {
                        e.cancelToken && e.cancelToken.unsubscribe(p), e.signal && e.signal.removeEventListener("abort", p)
                    }
                    r.isFormData(m) && delete h["Content-Type"];
                    var y = new XMLHttpRequest;
                    if (e.auth) {
                        var b = e.auth.username || "",
                            x = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        h.Authorization = "Basic " + btoa(b + ":" + x)
                    }
                    var w = s(e.baseURL, e.url);

                    function N() {
                        if (y) {
                            var r = "getAllResponseHeaders" in y ? c(y.getAllResponseHeaders()) : null,
                                a = {
                                    data: v && "text" !== v && "json" !== v ? y.response : y.responseText,
                                    status: y.status,
                                    statusText: y.statusText,
                                    headers: r,
                                    config: e,
                                    request: y
                                };
                            o((function(e) {
                                t(e), g()
                            }), (function(e) {
                                n(e), g()
                            }), a), y = null
                        }
                    }
                    if (y.open(e.method.toUpperCase(), i(w, e.params, e.paramsSerializer), !0), y.timeout = e.timeout, "onloadend" in y ? y.onloadend = N : y.onreadystatechange = function() {
                            y && 4 === y.readyState && (0 !== y.status || y.responseURL && 0 === y.responseURL.indexOf("file:")) && setTimeout(N)
                        }, y.onabort = function() {
                            y && (n(u("Request aborted", e, "ECONNABORTED", y)), y = null)
                        }, y.onerror = function() {
                            n(u("Network Error", e, null, y)), y = null
                        }, y.ontimeout = function() {
                            var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded",
                                r = e.transitional || d;
                            e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(u(t, e, r.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", y)), y = null
                        }, r.isStandardBrowserEnv()) {
                        var E = (e.withCredentials || l(w)) && e.xsrfCookieName ? a.read(e.xsrfCookieName) : void 0;
                        E && (h[e.xsrfHeaderName] = E)
                    }
                    "setRequestHeader" in y && r.forEach(h, (function(e, t) {
                        void 0 === m && "content-type" === t.toLowerCase() ? delete h[t] : y.setRequestHeader(t, e)
                    })), r.isUndefined(e.withCredentials) || (y.withCredentials = !!e.withCredentials), v && "json" !== v && (y.responseType = e.responseType), "function" == typeof e.onDownloadProgress && y.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && y.upload && y.upload.addEventListener("progress", e.onUploadProgress), (e.cancelToken || e.signal) && (p = function(e) {
                        y && (n(!e || e && e.type ? new f("canceled") : e), y.abort(), y = null)
                    }, e.cancelToken && e.cancelToken.subscribe(p), e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p))), m || (m = null), y.send(m)
                }))
            }
        },
        8015: function(e, t, n) {
            "use strict";
            var r = n(9516),
                o = n(9012),
                a = n(5155),
                i = n(5343);
            var s = function e(t) {
                var n = new a(t),
                    s = o(a.prototype.request, n);
                return r.extend(s, a.prototype, n), r.extend(s, n), s.create = function(n) {
                    return e(i(t, n))
                }, s
            }(n(7412));
            s.Axios = a, s.Cancel = n(1928), s.CancelToken = n(3191), s.isCancel = n(3864), s.VERSION = n(9641).version, s.all = function(e) {
                return Promise.all(e)
            }, s.spread = n(7980), s.isAxiosError = n(5019), e.exports = s, e.exports.default = s
        },
        1928: function(e) {
            "use strict";

            function t(e) {
                this.message = e
            }
            t.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, t.prototype.__CANCEL__ = !0, e.exports = t
        },
        3191: function(e, t, n) {
            "use strict";
            var r = n(1928);

            function o(e) {
                if ("function" != typeof e) throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) {
                    t = e
                }));
                var n = this;
                this.promise.then((function(e) {
                    if (n._listeners) {
                        var t, r = n._listeners.length;
                        for (t = 0; t < r; t++) n._listeners[t](e);
                        n._listeners = null
                    }
                })), this.promise.then = function(e) {
                    var t, r = new Promise((function(e) {
                        n.subscribe(e), t = e
                    })).then(e);
                    return r.cancel = function() {
                        n.unsubscribe(t)
                    }, r
                }, e((function(e) {
                    n.reason || (n.reason = new r(e), t(n.reason))
                }))
            }
            o.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, o.prototype.subscribe = function(e) {
                this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
            }, o.prototype.unsubscribe = function(e) {
                if (this._listeners) {
                    var t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
                }
            }, o.source = function() {
                var e;
                return {
                    token: new o((function(t) {
                        e = t
                    })),
                    cancel: e
                }
            }, e.exports = o
        },
        3864: function(e) {
            "use strict";
            e.exports = function(e) {
                return !(!e || !e.__CANCEL__)
            }
        },
        5155: function(e, t, n) {
            "use strict";
            var r = n(9516),
                o = n(9106),
                a = n(3471),
                i = n(4490),
                s = n(5343),
                c = n(4841),
                l = c.validators;

            function u(e) {
                this.defaults = e, this.interceptors = {
                    request: new a,
                    response: new a
                }
            }
            u.prototype.request = function(e, t) {
                "string" == typeof e ? (t = t || {}).url = e : t = e || {}, (t = s(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                var n = t.transitional;
                void 0 !== n && c.assertOptions(n, {
                    silentJSONParsing: l.transitional(l.boolean),
                    forcedJSONParsing: l.transitional(l.boolean),
                    clarifyTimeoutError: l.transitional(l.boolean)
                }, !1);
                var r = [],
                    o = !0;
                this.interceptors.request.forEach((function(e) {
                    "function" == typeof e.runWhen && !1 === e.runWhen(t) || (o = o && e.synchronous, r.unshift(e.fulfilled, e.rejected))
                }));
                var a, u = [];
                if (this.interceptors.response.forEach((function(e) {
                        u.push(e.fulfilled, e.rejected)
                    })), !o) {
                    var d = [i, void 0];
                    for (Array.prototype.unshift.apply(d, r), d = d.concat(u), a = Promise.resolve(t); d.length;) a = a.then(d.shift(), d.shift());
                    return a
                }
                for (var f = t; r.length;) {
                    var p = r.shift(),
                        m = r.shift();
                    try {
                        f = p(f)
                    } catch (h) {
                        m(h);
                        break
                    }
                }
                try {
                    a = i(f)
                } catch (h) {
                    return Promise.reject(h)
                }
                for (; u.length;) a = a.then(u.shift(), u.shift());
                return a
            }, u.prototype.getUri = function(e) {
                return e = s(this.defaults, e), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }, r.forEach(["delete", "get", "head", "options"], (function(e) {
                u.prototype[e] = function(t, n) {
                    return this.request(s(n || {}, {
                        method: e,
                        url: t,
                        data: (n || {}).data
                    }))
                }
            })), r.forEach(["post", "put", "patch"], (function(e) {
                u.prototype[e] = function(t, n, r) {
                    return this.request(s(r || {}, {
                        method: e,
                        url: t,
                        data: n
                    }))
                }
            })), e.exports = u
        },
        3471: function(e, t, n) {
            "use strict";
            var r = n(9516);

            function o() {
                this.handlers = []
            }
            o.prototype.use = function(e, t, n) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }), this.handlers.length - 1
            }, o.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }, o.prototype.forEach = function(e) {
                r.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }))
            }, e.exports = o
        },
        9615: function(e, t, n) {
            "use strict";
            var r = n(9137),
                o = n(4680);
            e.exports = function(e, t) {
                return e && !r(t) ? o(e, t) : t
            }
        },
        7763: function(e, t, n) {
            "use strict";
            var r = n(5449);
            e.exports = function(e, t, n, o, a) {
                var i = new Error(e);
                return r(i, t, n, o, a)
            }
        },
        4490: function(e, t, n) {
            "use strict";
            var r = n(9516),
                o = n(2881),
                a = n(3864),
                i = n(7412),
                s = n(1928);

            function c(e) {
                if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new s("canceled")
            }
            e.exports = function(e) {
                return c(e), e.headers = e.headers || {}, e.data = o.call(e, e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                    delete e.headers[t]
                })), (e.adapter || i.adapter)(e).then((function(t) {
                    return c(e), t.data = o.call(e, t.data, t.headers, e.transformResponse), t
                }), (function(t) {
                    return a(t) || (c(e), t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
                }))
            }
        },
        5449: function(e) {
            "use strict";
            e.exports = function(e, t, n, r, o) {
                return e.config = t, n && (e.code = n), e.request = r, e.response = o, e.isAxiosError = !0, e.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }, e
            }
        },
        5343: function(e, t, n) {
            "use strict";
            var r = n(9516);
            e.exports = function(e, t) {
                t = t || {};
                var n = {};

                function o(e, t) {
                    return r.isPlainObject(e) && r.isPlainObject(t) ? r.merge(e, t) : r.isPlainObject(t) ? r.merge({}, t) : r.isArray(t) ? t.slice() : t
                }

                function a(n) {
                    return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(e[n], t[n])
                }

                function i(e) {
                    if (!r.isUndefined(t[e])) return o(void 0, t[e])
                }

                function s(n) {
                    return r.isUndefined(t[n]) ? r.isUndefined(e[n]) ? void 0 : o(void 0, e[n]) : o(void 0, t[n])
                }

                function c(n) {
                    return n in t ? o(e[n], t[n]) : n in e ? o(void 0, e[n]) : void 0
                }
                var l = {
                    url: i,
                    method: i,
                    data: i,
                    baseURL: s,
                    transformRequest: s,
                    transformResponse: s,
                    paramsSerializer: s,
                    timeout: s,
                    timeoutMessage: s,
                    withCredentials: s,
                    adapter: s,
                    responseType: s,
                    xsrfCookieName: s,
                    xsrfHeaderName: s,
                    onUploadProgress: s,
                    onDownloadProgress: s,
                    decompress: s,
                    maxContentLength: s,
                    maxBodyLength: s,
                    transport: s,
                    httpAgent: s,
                    httpsAgent: s,
                    cancelToken: s,
                    socketPath: s,
                    responseEncoding: s,
                    validateStatus: c
                };
                return r.forEach(Object.keys(e).concat(Object.keys(t)), (function(e) {
                    var t = l[e] || a,
                        o = t(e);
                    r.isUndefined(o) && t !== c || (n[e] = o)
                })), n
            }
        },
        7522: function(e, t, n) {
            "use strict";
            var r = n(7763);
            e.exports = function(e, t, n) {
                var o = n.config.validateStatus;
                n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
            }
        },
        2881: function(e, t, n) {
            "use strict";
            var r = n(9516),
                o = n(7412);
            e.exports = function(e, t, n) {
                var a = this || o;
                return r.forEach(n, (function(n) {
                    e = n.call(a, e, t)
                })), e
            }
        },
        7412: function(e, t, n) {
            "use strict";
            var r = n(9516),
                o = n(7018),
                a = n(5449),
                i = n(4896),
                s = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function c(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var l, u = {
                transitional: i,
                adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (l = n(5592)), l),
                transformRequest: [function(e, t) {
                    return o(t, "Accept"), o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (c(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) || t && "application/json" === t["Content-Type"] ? (c(t, "application/json"), function(e, t, n) {
                        if (r.isString(e)) try {
                            return (t || JSON.parse)(e), r.trim(e)
                        } catch (o) {
                            if ("SyntaxError" !== o.name) throw o
                        }
                        return (n || JSON.stringify)(e)
                    }(e)) : e
                }],
                transformResponse: [function(e) {
                    var t = this.transitional || u.transitional,
                        n = t && t.silentJSONParsing,
                        o = t && t.forcedJSONParsing,
                        i = !n && "json" === this.responseType;
                    if (i || o && r.isString(e) && e.length) try {
                        return JSON.parse(e)
                    } catch (s) {
                        if (i) {
                            if ("SyntaxError" === s.name) throw a(s, this, "E_JSON_PARSE");
                            throw s
                        }
                    }
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            r.forEach(["delete", "get", "head"], (function(e) {
                u.headers[e] = {}
            })), r.forEach(["post", "put", "patch"], (function(e) {
                u.headers[e] = r.merge(s)
            })), e.exports = u
        },
        4896: function(e) {
            "use strict";
            e.exports = {
                silentJSONParsing: !0,
                forcedJSONParsing: !0,
                clarifyTimeoutError: !1
            }
        },
        9641: function(e) {
            e.exports = {
                version: "0.26.1"
            }
        },
        9012: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return function() {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                    return e.apply(t, n)
                }
            }
        },
        9106: function(e, t, n) {
            "use strict";
            var r = n(9516);

            function o(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, n) {
                if (!t) return e;
                var a;
                if (n) a = n(t);
                else if (r.isURLSearchParams(t)) a = t.toString();
                else {
                    var i = [];
                    r.forEach(t, (function(e, t) {
                        null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, (function(e) {
                            r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), i.push(o(t) + "=" + o(e))
                        })))
                    })), a = i.join("&")
                }
                if (a) {
                    var s = e.indexOf("#"); - 1 !== s && (e = e.slice(0, s)), e += (-1 === e.indexOf("?") ? "?" : "&") + a
                }
                return e
            }
        },
        4680: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        },
        3948: function(e, t, n) {
            "use strict";
            var r = n(9516);
            e.exports = r.isStandardBrowserEnv() ? {
                write: function(e, t, n, o, a, i) {
                    var s = [];
                    s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(a) && s.push("domain=" + a), !0 === i && s.push("secure"), document.cookie = s.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        },
        9137: function(e) {
            "use strict";
            e.exports = function(e) {
                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
            }
        },
        5019: function(e, t, n) {
            "use strict";
            var r = n(9516);
            e.exports = function(e) {
                return r.isObject(e) && !0 === e.isAxiosError
            }
        },
        4202: function(e, t, n) {
            "use strict";
            var r = n(9516);
            e.exports = r.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function o(e) {
                    var r = e;
                    return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                return e = o(window.location.href),
                    function(t) {
                        var n = r.isString(t) ? o(t) : t;
                        return n.protocol === e.protocol && n.host === e.host
                    }
            }() : function() {
                return !0
            }
        },
        7018: function(e, t, n) {
            "use strict";
            var r = n(9516);
            e.exports = function(e, t) {
                r.forEach(e, (function(n, r) {
                    r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
                }))
            }
        },
        2012: function(e, t, n) {
            "use strict";
            var r = n(9516),
                o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, n, a, i = {};
                return e ? (r.forEach(e.split("\n"), (function(e) {
                    if (a = e.indexOf(":"), t = r.trim(e.substr(0, a)).toLowerCase(), n = r.trim(e.substr(a + 1)), t) {
                        if (i[t] && o.indexOf(t) >= 0) return;
                        i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([n]) : i[t] ? i[t] + ", " + n : n
                    }
                })), i) : i
            }
        },
        7980: function(e) {
            "use strict";
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        },
        4841: function(e, t, n) {
            "use strict";
            var r = n(9641).version,
                o = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                o[e] = function(n) {
                    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                }
            }));
            var a = {};
            o.transitional = function(e, t, n) {
                function o(e, t) {
                    return "[Axios v" + r + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                }
                return function(n, r, i) {
                    if (!1 === e) throw new Error(o(r, " has been removed" + (t ? " in " + t : "")));
                    return t && !a[r] && (a[r] = !0, console.warn(o(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, r, i)
                }
            }, e.exports = {
                assertOptions: function(e, t, n) {
                    if ("object" != typeof e) throw new TypeError("options must be an object");
                    for (var r = Object.keys(e), o = r.length; o-- > 0;) {
                        var a = r[o],
                            i = t[a];
                        if (i) {
                            var s = e[a],
                                c = void 0 === s || i(s, a, e);
                            if (!0 !== c) throw new TypeError("option " + a + " must be " + c)
                        } else if (!0 !== n) throw Error("Unknown option " + a)
                    }
                },
                validators: o
            }
        },
        9516: function(e, t, n) {
            "use strict";
            var r = n(9012),
                o = Object.prototype.toString;

            function a(e) {
                return Array.isArray(e)
            }

            function i(e) {
                return void 0 === e
            }

            function s(e) {
                return "[object ArrayBuffer]" === o.call(e)
            }

            function c(e) {
                return null !== e && "object" == typeof e
            }

            function l(e) {
                if ("[object Object]" !== o.call(e)) return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }

            function u(e) {
                return "[object Function]" === o.call(e)
            }

            function d(e, t) {
                if (null != e)
                    if ("object" != typeof e && (e = [e]), a(e))
                        for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                    else
                        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
            }
            e.exports = {
                isArray: a,
                isArrayBuffer: s,
                isBuffer: function(e) {
                    return null !== e && !i(e) && null !== e.constructor && !i(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function(e) {
                    return "[object FormData]" === o.call(e)
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && s(e.buffer)
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isObject: c,
                isPlainObject: l,
                isUndefined: i,
                isDate: function(e) {
                    return "[object Date]" === o.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === o.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === o.call(e)
                },
                isFunction: u,
                isStream: function(e) {
                    return c(e) && u(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "[object URLSearchParams]" === o.call(e)
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                },
                forEach: d,
                merge: function e() {
                    var t = {};

                    function n(n, r) {
                        l(t[r]) && l(n) ? t[r] = e(t[r], n) : l(n) ? t[r] = e({}, n) : a(n) ? t[r] = n.slice() : t[r] = n
                    }
                    for (var r = 0, o = arguments.length; r < o; r++) d(arguments[r], n);
                    return t
                },
                extend: function(e, t, n) {
                    return d(t, (function(t, o) {
                        e[o] = n && "function" == typeof t ? r(t, n) : t
                    })), e
                },
                trim: function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function(e) {
                    return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
                }
            }
        },
        3389: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var r = n(6540),
                o = n(7107),
                a = n(6942),
                i = n.n(a),
                s = n(5556),
                c = n.n(s),
                l = n(4848);
            const u = {
                    type: c().string,
                    tooltip: c().bool,
                    as: c().elementType
                },
                d = r.forwardRef((({
                    as: e = "div",
                    className: t,
                    type: n = "valid",
                    tooltip: r = !1,
                    ...o
                }, a) => (0, l.jsx)(e, { ...o,
                    ref: a,
                    className: i()(t, `${n}-${r?"tooltip":"feedback"}`)
                })));
            d.displayName = "Feedback", d.propTypes = u;
            var f = d;
            var p = r.createContext({}),
                m = n(6519);
            const h = r.forwardRef((({
                id: e,
                bsPrefix: t,
                className: n,
                type: o = "checkbox",
                isValid: a = !1,
                isInvalid: s = !1,
                as: c = "input",
                ...u
            }, d) => {
                const {
                    controlId: f
                } = (0, r.useContext)(p);
                return t = (0, m.oU)(t, "form-check-input"), (0, l.jsx)(c, { ...u,
                    ref: d,
                    type: o,
                    id: e || f,
                    className: i()(n, t, a && "is-valid", s && "is-invalid")
                })
            }));
            h.displayName = "FormCheckInput";
            var v = h;
            const g = r.forwardRef((({
                bsPrefix: e,
                className: t,
                htmlFor: n,
                ...o
            }, a) => {
                const {
                    controlId: s
                } = (0, r.useContext)(p);
                return e = (0, m.oU)(e, "form-check-label"), (0, l.jsx)("label", { ...o,
                    ref: a,
                    htmlFor: n || s,
                    className: i()(t, e)
                })
            }));
            g.displayName = "FormCheckLabel";
            var y = g;
            const b = r.forwardRef((({
                id: e,
                bsPrefix: t,
                bsSwitchPrefix: n,
                inline: o = !1,
                reverse: a = !1,
                disabled: s = !1,
                isValid: c = !1,
                isInvalid: u = !1,
                feedbackTooltip: d = !1,
                feedback: h,
                feedbackType: g,
                className: b,
                style: x,
                title: w = "",
                type: N = "checkbox",
                label: E,
                children: _,
                as: j = "input",
                ...C
            }, S) => {
                t = (0, m.oU)(t, "form-check"), n = (0, m.oU)(n, "form-switch");
                const {
                    controlId: k
                } = (0, r.useContext)(p), T = (0, r.useMemo)((() => ({
                    controlId: e || k
                })), [k, e]), O = !_ && null != E && !1 !== E || function(e, t) {
                    return r.Children.toArray(e).some((e => r.isValidElement(e) && e.type === t))
                }(_, y), R = (0, l.jsx)(v, { ...C,
                    type: "switch" === N ? "checkbox" : N,
                    ref: S,
                    isValid: c,
                    isInvalid: u,
                    disabled: s,
                    as: j
                });
                return (0, l.jsx)(p.Provider, {
                    value: T,
                    children: (0, l.jsx)("div", {
                        style: x,
                        className: i()(b, O && t, o && `${t}-inline`, a && `${t}-reverse`, "switch" === N && n),
                        children: _ || (0, l.jsxs)(l.Fragment, {
                            children: [R, O && (0, l.jsx)(y, {
                                title: w,
                                children: E
                            }), h && (0, l.jsx)(f, {
                                type: g,
                                tooltip: d,
                                children: h
                            })]
                        })
                    })
                })
            }));
            b.displayName = "FormCheck";
            var x = Object.assign(b, {
                Input: v,
                Label: y
            });
            n(9771);
            const w = r.forwardRef((({
                bsPrefix: e,
                type: t,
                size: n,
                htmlSize: o,
                id: a,
                className: s,
                isValid: c = !1,
                isInvalid: u = !1,
                plaintext: d,
                readOnly: f,
                as: h = "input",
                ...v
            }, g) => {
                const {
                    controlId: y
                } = (0, r.useContext)(p);
                return e = (0, m.oU)(e, "form-control"), (0, l.jsx)(h, { ...v,
                    type: t,
                    size: o,
                    ref: g,
                    readOnly: f,
                    id: a || y,
                    className: i()(s, d ? `${e}-plaintext` : e, n && `${e}-${n}`, "color" === t && `${e}-color`, c && "is-valid", u && "is-invalid")
                })
            }));
            w.displayName = "FormControl";
            var N = Object.assign(w, {
                Feedback: f
            });
            const E = r.forwardRef((({
                className: e,
                bsPrefix: t,
                as: n = "div",
                ...r
            }, o) => (t = (0, m.oU)(t, "form-floating"), (0, l.jsx)(n, {
                ref: o,
                className: i()(e, t),
                ...r
            }))));
            E.displayName = "FormFloating";
            var _ = E;
            const j = r.forwardRef((({
                controlId: e,
                as: t = "div",
                ...n
            }, o) => {
                const a = (0, r.useMemo)((() => ({
                    controlId: e
                })), [e]);
                return (0, l.jsx)(p.Provider, {
                    value: a,
                    children: (0, l.jsx)(t, { ...n,
                        ref: o
                    })
                })
            }));
            j.displayName = "FormGroup";
            var C = j,
                S = n(1105);
            const k = r.forwardRef((({
                as: e = "label",
                bsPrefix: t,
                column: n = !1,
                visuallyHidden: o = !1,
                className: a,
                htmlFor: s,
                ...c
            }, u) => {
                const {
                    controlId: d
                } = (0, r.useContext)(p);
                t = (0, m.oU)(t, "form-label");
                let f = "col-form-label";
                "string" == typeof n && (f = `${f} ${f}-${n}`);
                const h = i()(a, t, o && "visually-hidden", n && f);
                return s = s || d, n ? (0, l.jsx)(S.A, {
                    ref: u,
                    as: "label",
                    className: h,
                    htmlFor: s,
                    ...c
                }) : (0, l.jsx)(e, {
                    ref: u,
                    className: h,
                    htmlFor: s,
                    ...c
                })
            }));
            k.displayName = "FormLabel";
            var T = k;
            const O = r.forwardRef((({
                bsPrefix: e,
                className: t,
                id: n,
                ...o
            }, a) => {
                const {
                    controlId: s
                } = (0, r.useContext)(p);
                return e = (0, m.oU)(e, "form-range"), (0, l.jsx)("input", { ...o,
                    type: "range",
                    ref: a,
                    className: i()(t, e),
                    id: n || s
                })
            }));
            O.displayName = "FormRange";
            var R = O;
            const F = r.forwardRef((({
                bsPrefix: e,
                size: t,
                htmlSize: n,
                className: o,
                isValid: a = !1,
                isInvalid: s = !1,
                id: c,
                ...u
            }, d) => {
                const {
                    controlId: f
                } = (0, r.useContext)(p);
                return e = (0, m.oU)(e, "form-select"), (0, l.jsx)("select", { ...u,
                    size: n,
                    ref: d,
                    className: i()(o, e, t && `${e}-${t}`, a && "is-valid", s && "is-invalid"),
                    id: c || f
                })
            }));
            F.displayName = "FormSelect";
            var P = F;
            const A = r.forwardRef((({
                bsPrefix: e,
                className: t,
                as: n = "small",
                muted: r,
                ...o
            }, a) => (e = (0, m.oU)(e, "form-text"), (0, l.jsx)(n, { ...o,
                ref: a,
                className: i()(t, e, r && "text-muted")
            }))));
            A.displayName = "FormText";
            var U = A;
            const L = r.forwardRef(((e, t) => (0, l.jsx)(x, { ...e,
                ref: t,
                type: "switch"
            })));
            L.displayName = "Switch";
            var I = Object.assign(L, {
                Input: x.Input,
                Label: x.Label
            });
            const B = r.forwardRef((({
                bsPrefix: e,
                className: t,
                children: n,
                controlId: r,
                label: o,
                ...a
            }, s) => (e = (0, m.oU)(e, "form-floating"), (0, l.jsxs)(C, {
                ref: s,
                className: i()(t, e),
                controlId: r,
                ...a,
                children: [n, (0, l.jsx)("label", {
                    htmlFor: r,
                    children: o
                })]
            }))));
            B.displayName = "FloatingLabel";
            var z = B;
            const q = {
                    _ref: c().any,
                    validated: c().bool,
                    as: c().elementType
                },
                D = r.forwardRef((({
                    className: e,
                    validated: t,
                    as: n = "form",
                    ...r
                }, o) => (0, l.jsx)(n, { ...r,
                    ref: o,
                    className: i()(e, t && "was-validated")
                })));
            D.displayName = "Form", D.propTypes = q;
            var $ = Object.assign(D, {
                    Group: C,
                    Control: N,
                    Floating: _,
                    Check: x,
                    Switch: I,
                    Label: T,
                    Text: U,
                    Range: R,
                    Select: P,
                    FloatingLabel: z
                }),
                M = n(2505),
                J = n.n(M),
                H = n(4810),
                V = n(6462);
            var G = e => {
                let {
                    callCloudFn: t,
                    overrideSlug: n,
                    buttonText: a = "Calculate Your Moving Cost"
                } = e;
                const i = (0, V.useLocation)(),
                    {
                        0: s,
                        1: c
                    } = (0, r.useState)({
                        source: "",
                        medium: "",
                        campaign: "",
                        gclid: "",
                        content: "",
                        keyword: "",
                        matchtype: "",
                        device: "",
                        creative: "",
                        urlSlug: "",
                        visitTime: new Date
                    }),
                    l = i.search.slice(1).split("&"),
                    u = i.pathname.slice(1).split("/")[0];
                (0, r.useEffect)((() => {
                    let e = {};
                    for (let t of l) {
                        const [n, r] = t.split("=");
                        e[n] = r
                    }
                    c((t => ({ ...t,
                        source: e.utm_source || "organic",
                        medium: e.utm_medium || "",
                        campaign: e.utm_campaign || "",
                        gclid: e.gclid || "",
                        content: e.utm_content || "",
                        keyword: e.utm_keyword || "",
                        matchtype: e.utm_matchtype || "",
                        device: e.utm_device || "",
                        creative: e.utm_creative || "",
                        urlSlug: u
                    })))
                }), []);
                const {
                    0: d,
                    1: f
                } = (0, r.useState)({
                    fullName: "",
                    email: "",
                    phoneNumber: ""
                }), {
                    0: p,
                    1: m
                } = (0, r.useState)({
                    fullName: "",
                    email: "",
                    phoneNumber: ""
                });
                return r.createElement($, null, r.createElement($.Group, {
                    className: "form-input-spacing form-input-spacing-temp"
                }, r.createElement($.Label, {
                    htmlFor: "inlineFormInputFullName"
                }, "Full Name"), r.createElement($.Control, {
                    size: "lg",
                    type: "text",
                    onChange: e => f({ ...d,
                        fullName: e.target.value
                    }),
                    id: "inlineFormInputFullName"
                }), r.createElement("div", {
                    className: "text-danger"
                }, p.fullName)), r.createElement($.Group, {
                    className: "form-input-spacing"
                }, r.createElement($.Label, {
                    htmlFor: "inlineFormInputEmail"
                }, "Email address"), r.createElement($.Control, {
                    size: "lg",
                    type: "email",
                    onChange: e => f({ ...d,
                        email: e.target.value
                    }),
                    id: "inlineFormInputEmail"
                }), r.createElement("div", {
                    className: "text-danger"
                }, p.email)), r.createElement($.Group, {
                    className: "form-input-spacing"
                }, r.createElement($.Label, {
                    htmlFor: "inlineFormInputPhoneNumber"
                }, "Phone Number"), r.createElement($.Control, {
                    size: "lg",
                    type: "text",
                    onChange: e => f({ ...d,
                        phoneNumber: e.target.value
                    }),
                    id: "inlineFormInputPhoneNumber"
                }), r.createElement("div", {
                    className: "text-danger"
                }, p.phoneNumber)), r.createElement(o.A, {
                    variant: "primary",
                    className: "w-100 text-white rounded-1",
                    type: "submit",
                    size: "lg",
                    block: !0,
                    "aria-label": "Calculate moving cost",
                    onClick: e => {
                        e.preventDefault(), (() => {
                            const e = d.fullName.length,
                                t = d.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                                n = d.phoneNumber.match(/^[0-9]{10}$/);
                            return m({
                                fullName: e ? "" : "Cannot be empty",
                                email: t ? "" : "Invalid email",
                                phoneNumber: n ? "" : "Invalid number"
                            }), e && t && n
                        })() ? t ? (async () => {
                            const {
                                status: e
                            } = await J()({
                                method: "post",
                                url: "/.netlify/functions/sendLead",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                data: {
                                    name: d.fullName,
                                    email: d.email,
                                    phoneNumber: d.phoneNumber,
                                    service: t.service
                                }
                            });
                            var n, r;
                            200 === e && (null === (n = window) || void 0 === n || null === (r = n.dataLayer) || void 0 === r || r.push({
                                event: "ec_formsubmit",
                                enhanced_conversion_data: {
                                    email: d.email,
                                    phoneNumber: d.phoneNumber
                                }
                            }), (0, H.oo)("/thank-you"))
                        })() : (async () => {
                            const e = s.visitTime.getDate() + "/" + (s.visitTime.getMonth() + 1) + "/" + s.visitTime.getFullYear() + " " + s.visitTime.getHours() + ":" + s.visitTime.getMinutes() + ":" + s.visitTime.getSeconds(),
                                t = new FormData;
                            t.append("lead[source]", s.source), t.append("lead[medium]", s.medium), t.append("lead[campaign_description]", s.campaign), t.append("lead[gclid]", s.gclid), t.append("lead[visit_time]", e), t.append("lead[url_slug]", n || s.urlSlug), t.append("lead[content]", s.content), t.append("lead[keyword]", s.keyword), t.append("lead[matchtype]", s.matchtype), t.append("lead[device]", s.device), t.append("lead[creative]", s.creative), t.append("lead_fields[0][display_name]", "Name"), t.append("lead_fields[0][data_type]", '{ "field_type": "string", "values": []}'), t.append("lead_fields[0][mapping_name]", "first_name"), t.append("lead_fields[0][mapping_model]", "user"), t.append("lead_fields[0][value]", d.fullName), t.append("lead_fields[1][display_name]", "Mobile Number"), t.append("lead_fields[1][data_type]", '{ "field_type": "string", "values": []}'), t.append("lead_fields[1][mapping_name]", "phone_number"), t.append("lead_fields[1][mapping_model]", "user"), t.append("lead_fields[1][value]", d.phoneNumber), t.append("lead_fields[2][display_name]", "Email"), t.append("lead_fields[2][data_type]", '{ "field_type": "string", "values": []}'), t.append("lead_fields[2][mapping_name]", "email"), t.append("lead_fields[2][mapping_model]", "user"), t.append("lead_fields[2][value]", d.email);
                            const r = await J()({
                                method: "post",
                                url: "/api/leads/create_lead",
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                },
                                data: t
                            });
                            window.location = r.data.redirection_url || window.location
                        })() : setTimeout((() => {
                            m({
                                fullName: "",
                                email: "",
                                phoneNumber: ""
                            })
                        }), 3500)
                    }
                }, r.createElement("span", {
                    className: "h6"
                }, a)), r.createElement($.Text, {
                    className: "text-center mt-2 font-merriweather"
                }, r.createElement("p", {
                    className: "text-small mt-2"
                }, r.createElement("small", null, r.createElement("svg", {
                    width: "20px",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                }, r.createElement("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                })), "  Trusted by 100k+ happy customers."))))
            }
        },
        9771: function(e) {
            "use strict";
            var t = function() {};
            e.exports = t
        }
    }
]);
//# sourceMappingURL=d24d2b18e9f32f6535f94366cc654391f2eba2c0-e5200d9793d8f27750db.js.map