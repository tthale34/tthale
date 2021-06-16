/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransforms-csstransforms3d-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;
window.Modernizr = function (a, b, c) {
    function z(a) {
        j.cssText = a
    }
    function A(a, b) {
        return z(m.join(a + ";") + (b || ""))
    }
    function B(a, b) {
        return typeof a === b
    }
    function C(a, b) {
        return!!~("" + a).indexOf(b)
    }
    function D(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!C(e, "-") && j[e] !== c)
                return b == "pfx" ? e : !0
        }
        return!1
    }
    function E(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
        }
        return!1
    }
    function F(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + o.join(d + " ") + d).split(" ");
        return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
    }
    var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function (a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
    }, x = {}.hasOwnProperty, y;
    !B(x, "undefined") && !B(x.call, "undefined") ? y = function (a, b) {
        return x.call(a, b)
    } : y = function (a, b) {
        return b in a && B(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = u.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(u.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(u.call(arguments)))
        };
        return e
    }), q.touch = function () {
        var c;
        return"ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
            c = a.offsetTop === 9
        }), c
    }, q.cssanimations = function () {
        return F("animationName")
    }, q.csstransforms = function () {
        return!!F("transform")
    }, q.csstransforms3d = function () {
        var a = !!F("perspective");
        return a && "webkitPerspective"in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }), a
    }, q.csstransitions = function () {
        return F("transition")
    };
    for (var G in q)
        y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function (a, b) {
        if (typeof a == "object")
            for (var d in a)
                y(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, z(""), i = k = null, function (a, b) {
        function l(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }
        function m() {
            var a = s.elements;
            return typeof a == "string" ? a.split(" ") : a
        }
        function n(a) {
            var b = j[a[h]];
            return b || (b = {}, i++, a[h] = i, j[i] = b), b
        }
        function o(a, c, d) {
            c || (c = b);
            if (k)
                return c.createElement(a);
            d || (d = n(c));
            var g;
            return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
        }
        function p(a, c) {
            a || (a = b);
            if (k)
                return a.createDocumentFragment();
            c = c || n(a);
            var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length;
            for (; e < g; e++)
                d.createElement(f[e]);
            return d
        }
        function q(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                return s.shivMethods ? o(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(s, b.frag)
        }
        function r(a) {
            a || (a = b);
            var c = n(a);
            return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
        }
        var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k;
        (function () {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", g = "hidden"in a, k = a.childNodes.length == 1 || function () {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                g = !0, k = !0
            }
        })();
        var s = {elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: c, shivCSS: d.shivCSS !== !1, supportsUnknownElements: k, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: r, createElement: o, createDocumentFragment: p};
        a.html5 = s, r(b)
    }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function (a) {
        return D([a])
    }, e.testAllProps = F, e.testStyles = w, e.prefixed = function (a, b, c) {
        return b ? F(a, b, c) : F(a, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
}(this, this.document), function (a, b, c) {
    function d(a) {
        return"[object Function]" == o.call(a)
    }
    function e(a) {
        return"string" == typeof a
    }
    function f() {
    }
    function g(a) {
        return!a || "loaded" == a || "complete" == a || "uninitialized" == a
    }
    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function () {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }
    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function () {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])
                    y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }
        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d, s: c, e: f, a: i, x: j};
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }
    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }
    function k() {
        var a = B;
        return a.loader = {load: j, i: 0}, a
    }
    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
        return"[object Array]" == o.call(a)
    }, x = [], y = {}, z = {timeout: function (a, b) {
            return b.length && (a.timeout = b[0]), a
        }}, A, B;
    B = function (a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url: c, origUrl: c, prefixes: a}, e, f, g;
            for (f = 0; f < d; f++)
                g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)
                c = x[f](c);
            return c
        }
        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }
        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))
                        c || (j = function () {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                    else if (Object(a) === a)
                        for (n in m = function () {
                            var b = 0, c;
                            for (c in a)
                                a.hasOwnProperty(c) && b++;
                            return b
                        }(), a)
                            a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function (a) {
                                return function () {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                } else
                    !c && l()
            }
            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }
        var i, j, l = this.yepnope.loader;
        if (e(a))
            g(a, 0, l, 0);
        else if (w(a))
            for (i = 0; i < a.length; i++)
                j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
        else
            Object(a) === a && h(a, l)
    }, B.addPrefix = function (a, b) {
        z[a] = b
    }, B.addFilter = function (a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)
            k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function () {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d)
            e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
;
/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function (t, e, n) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value"in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }
    function r() {
        return(r = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }).apply(this, arguments)
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, n = n && n.hasOwnProperty("default") ? n.default : n;
    var o, a, l, h, c, u, f, d, _, g, p, m, v, E, T, y, C, I, A, b, D, S, w, N, O, k, P = function (t) {
        var e = !1;
        function n(e) {
            var n = this, s = !1;
            return t(this).one(i.TRANSITION_END, function () {
                s = !0
            }), setTimeout(function () {
                s || i.triggerTransitionEnd(n)
            }, e), this
        }
        var i = {TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }, getSelectorFromElement: function (e) {
                var n, i = e.getAttribute("data-target");
                i && "#" !== i || (i = e.getAttribute("href") || ""), "#" === i.charAt(0) && (n = i, i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                try {
                    return t(document).find(i).length > 0 ? i : null
                } catch (t) {
                    return null
                }
            }, reflow: function (t) {
                return t.offsetHeight
            }, triggerTransitionEnd: function (n) {
                t(n).trigger(e.end)
            }, supportsTransitionEnd: function () {
                return Boolean(e)
            }, isElement: function (t) {
                return(t[0] || t).nodeType
            }, typeCheckConfig: function (t, e, n) {
                for (var s in n)
                    if (Object.prototype.hasOwnProperty.call(n, s)) {
                        var r = n[s], o = e[s], a = o && i.isElement(o) ? "element" : (l = o, {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                        if (!new RegExp(r).test(a))
                            throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".')
                    }
                var l
            }};
        return e = ("undefined" == typeof window || !window.QUnit) && {end: "transitionend"}, t.fn.emulateTransitionEnd = n, i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {bindType: e.end, delegateType: e.end, handle: function (e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }}), i
    }(e), L = (a = "alert", h = "." + (l = "bs.alert"), c = (o = e).fn[a], u = {CLOSE: "close" + h, CLOSED: "closed" + h, CLICK_DATA_API: "click" + h + ".data-api"}, f = "alert", d = "fade", _ = "show", g = function () {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.close = function (t) {
            t = t || this._element;
            var e = this._getRootElement(t);
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }, e.dispose = function () {
            o.removeData(this._element, l), this._element = null
        }, e._getRootElement = function (t) {
            var e = P.getSelectorFromElement(t), n = !1;
            return e && (n = o(e)[0]), n || (n = o(t).closest("." + f)[0]), n
        }, e._triggerCloseEvent = function (t) {
            var e = o.Event(u.CLOSE);
            return o(t).trigger(e), e
        }, e._removeElement = function (t) {
            var e = this;
            o(t).removeClass(_), P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function (n) {
                return e._destroyElement(t, n)
            }).emulateTransitionEnd(150) : this._destroyElement(t)
        }, e._destroyElement = function (t) {
            o(t).detach().trigger(u.CLOSED).remove()
        }, t._jQueryInterface = function (e) {
            return this.each(function () {
                var n = o(this), i = n.data(l);
                i || (i = new t(this), n.data(l, i)), "close" === e && i[e](this)
            })
        }, t._handleDismiss = function (t) {
            return function (e) {
                e && e.preventDefault(), t.close(this)
            }
        }, s(t, null, [{key: "VERSION", get: function () {
                    return"4.0.0"
                }}]), t
    }(), o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)), o.fn[a] = g._jQueryInterface, o.fn[a].Constructor = g, o.fn[a].noConflict = function () {
        return o.fn[a] = c, g._jQueryInterface
    }, g), R = (m = "button", E = "." + (v = "bs.button"), T = ".data-api", y = (p = e).fn[m], C = "active", I = "btn", A = "focus", b = '[data-toggle^="button"]', D = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {CLICK_DATA_API: "click" + E + T, FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T}, k = function () {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.toggle = function () {
            var t = !0, e = !0, n = p(this._element).closest(D)[0];
            if (n) {
                var i = p(this._element).find(S)[0];
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && p(this._element).hasClass(C))
                            t = !1;
                        else {
                            var s = p(n).find(w)[0];
                            s && p(s).removeClass(C)
                        }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !p(this._element).hasClass(C), p(i).trigger("change")
                    }
                    i.focus(), e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)), t && p(this._element).toggleClass(C)
        }, e.dispose = function () {
            p.removeData(this._element, v), this._element = null
        }, t._jQueryInterface = function (e) {
            return this.each(function () {
                var n = p(this).data(v);
                n || (n = new t(this), p(this).data(v, n)), "toggle" === e && n[e]()
            })
        }, s(t, null, [{key: "VERSION", get: function () {
                    return"4.0.0"
                }}]), t
    }(), p(document).on(O.CLICK_DATA_API, b, function (t) {
        t.preventDefault();
        var e = t.target;
        p(e).hasClass(I) || (e = p(e).closest(N)), k._jQueryInterface.call(p(e), "toggle")
    }).on(O.FOCUS_BLUR_DATA_API, b, function (t) {
        var e = p(t.target).closest(N)[0];
        p(e).toggleClass(A, /^focus(in)?$/.test(t.type))
    }), p.fn[m] = k._jQueryInterface, p.fn[m].Constructor = k, p.fn[m].noConflict = function () {
        return p.fn[m] = y, k._jQueryInterface
    }, k), j = function (t) {
        var e = "carousel", n = "bs.carousel", i = "." + n, o = t.fn[e], a = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, l = {interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean"}, h = "next", c = "prev", u = "left", f = "right", d = {SLIDE: "slide" + i, SLID: "slid" + i, KEYDOWN: "keydown" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i, TOUCHEND: "touchend" + i, LOAD_DATA_API: "load" + i + ".data-api", CLICK_DATA_API: "click" + i + ".data-api"}, _ = "carousel", g = "active", p = "slide", m = "carousel-item-right", v = "carousel-item-left", E = "carousel-item-next", T = "carousel-item-prev", y = {ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]'}, C = function () {
            function o(e, n) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(y.INDICATORS)[0], this._addEventListeners()
            }
            var C = o.prototype;
            return C.next = function () {
                this._isSliding || this._slide(h)
            }, C.nextWhenVisible = function () {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, C.prev = function () {
                this._isSliding || this._slide(c)
            }, C.pause = function (e) {
                e || (this._isPaused = !0), t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, C.cycle = function (t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, C.to = function (e) {
                var n = this;
                this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding)
                        t(this._element).one(d.SLID, function () {
                            return n.to(e)
                        });
                    else {
                        if (i === e)
                            return this.pause(), void this.cycle();
                        var s = e > i ? h : c;
                        this._slide(s, this._items[e])
                    }
            }, C.dispose = function () {
                t(this._element).off(i), t.removeData(this._element, n), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, C._getConfig = function (t) {
                return t = r({}, a, t), P.typeCheckConfig(e, t, l), t
            }, C._addEventListeners = function () {
                var e = this;
                this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function (t) {
                    return e.pause(t)
                }).on(d.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                }), "ontouchstart"in document.documentElement && t(this._element).on(d.TOUCHEND, function () {
                    e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }, C._keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName))
                    switch (t.which) {
                        case 37:
                            t.preventDefault(), this.prev();
                            break;
                        case 39:
                            t.preventDefault(), this.next()
                        }
            }, C._getItemIndex = function (e) {
                return this._items = t.makeArray(t(e).parent().find(y.ITEM)), this._items.indexOf(e)
            }, C._getItemByDirection = function (t, e) {
                var n = t === h, i = t === c, s = this._getItemIndex(e), r = this._items.length - 1;
                if ((i && 0 === s || n && s === r) && !this._config.wrap)
                    return e;
                var o = (s + (t === c ? -1 : 1)) % this._items.length;
                return-1 === o ? this._items[this._items.length - 1] : this._items[o]
            }, C._triggerSlideEvent = function (e, n) {
                var i = this._getItemIndex(e), s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]), r = t.Event(d.SLIDE, {relatedTarget: e, direction: n, from: s, to: i});
                return t(this._element).trigger(r), r
            }, C._setActiveIndicatorElement = function (e) {
                if (this._indicatorsElement) {
                    t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && t(n).addClass(g)
                }
            }, C._slide = function (e, n) {
                var i, s, r, o = this, a = t(this._element).find(y.ACTIVE_ITEM)[0], l = this._getItemIndex(a), c = n || a && this._getItemByDirection(e, a), _ = this._getItemIndex(c), C = Boolean(this._interval);
                if (e === h ? (i = v, s = E, r = u) : (i = m, s = T, r = f), c && t(c).hasClass(g))
                    this._isSliding = !1;
                else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
                    this._isSliding = !0, C && this.pause(), this._setActiveIndicatorElement(c);
                    var I = t.Event(d.SLID, {relatedTarget: c, direction: r, from: l, to: _});
                    P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s), P.reflow(c), t(a).addClass(i), t(c).addClass(i), t(a).one(P.TRANSITION_END, function () {
                        t(c).removeClass(i + " " + s).addClass(g), t(a).removeClass(g + " " + s + " " + i), o._isSliding = !1, setTimeout(function () {
                            return t(o._element).trigger(I)
                        }, 0)
                    }).emulateTransitionEnd(600)) : (t(a).removeClass(g), t(c).addClass(g), this._isSliding = !1, t(this._element).trigger(I)), C && this.cycle()
                }
            }, o._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this).data(n), s = r({}, a, t(this).data());
                    "object" == typeof e && (s = r({}, s, e));
                    var l = "string" == typeof e ? e : s.slide;
                    if (i || (i = new o(this, s), t(this).data(n, i)), "number" == typeof e)
                        i.to(e);
                    else if ("string" == typeof l) {
                        if ("undefined" == typeof i[l])
                            throw new TypeError('No method named "' + l + '"');
                        i[l]()
                    } else
                        s.interval && (i.pause(), i.cycle())
                })
            }, o._dataApiClickHandler = function (e) {
                var i = P.getSelectorFromElement(this);
                if (i) {
                    var s = t(i)[0];
                    if (s && t(s).hasClass(_)) {
                        var a = r({}, t(s).data(), t(this).data()), l = this.getAttribute("data-slide-to");
                        l && (a.interval = !1), o._jQueryInterface.call(t(s), a), l && t(s).data(n).to(l), e.preventDefault()
                    }
                }
            }, s(o, null, [{key: "VERSION", get: function () {
                        return"4.0.0"
                    }}, {key: "Default", get: function () {
                        return a
                    }}]), o
        }();
        return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
            t(y.DATA_RIDE).each(function () {
                var e = t(this);
                C._jQueryInterface.call(e, e.data())
            })
        }), t.fn[e] = C._jQueryInterface, t.fn[e].Constructor = C, t.fn[e].noConflict = function () {
            return t.fn[e] = o, C._jQueryInterface
        }, C
    }(e), H = function (t) {
        var e = "collapse", n = "bs.collapse", i = "." + n, o = t.fn[e], a = {toggle: !0, parent: ""}, l = {toggle: "boolean", parent: "(string|element)"}, h = {SHOW: "show" + i, SHOWN: "shown" + i, HIDE: "hide" + i, HIDDEN: "hidden" + i, CLICK_DATA_API: "click" + i + ".data-api"}, c = "show", u = "collapse", f = "collapsing", d = "collapsed", _ = "width", g = "height", p = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, m = function () {
            function i(e, n) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
                    var r = i[s], o = P.getSelectorFromElement(r);
                    null !== o && t(o).filter(e).length > 0 && (this._selector = o, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var o = i.prototype;
            return o.toggle = function () {
                t(this._element).hasClass(c) ? this.hide() : this.show()
            }, o.show = function () {
                var e, s, r = this;
                if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
                    var o = t.Event(h.SHOW);
                    if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                        e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"), s || t(e).data(n, null));
                        var a = this._getDimension();
                        t(this._element).removeClass(u).addClass(f), this._element.style[a] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var l = function () {
                            t(r._element).removeClass(f).addClass(u).addClass(c), r._element.style[a] = "", r.setTransitioning(!1), t(r._element).trigger(h.SHOWN)
                        };
                        if (P.supportsTransitionEnd()) {
                            var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));
                            t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600), this._element.style[a] = this._element[_] + "px"
                        } else
                            l()
                    }
                }
            }, o.hide = function () {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(c)) {
                    var n = t.Event(h.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", P.reflow(this._element), t(this._element).addClass(f).removeClass(u).removeClass(c), this._triggerArray.length > 0)
                            for (var s = 0; s < this._triggerArray.length; s++) {
                                var r = this._triggerArray[s], o = P.getSelectorFromElement(r);
                                if (null !== o)
                                    t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        var a = function () {
                            e.setTransitioning(!1), t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)
                        };
                        this._element.style[i] = "", P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                    }
                }
            }, o.setTransitioning = function (t) {
                this._isTransitioning = t
            }, o.dispose = function () {
                t.removeData(this._element, n), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, o._getConfig = function (t) {
                return(t = r({}, a, t)).toggle = Boolean(t.toggle), P.typeCheckConfig(e, t, l), t
            }, o._getDimension = function () {
                return t(this._element).hasClass(_) ? _ : g
            }, o._getParent = function () {
                var e = this, n = null;
                P.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return t(n).find(s).each(function (t, n) {
                    e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                }), n
            }, o._addAriaAndCollapsedClass = function (e, n) {
                if (e) {
                    var i = t(e).hasClass(c);
                    n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i)
                }
            }, i._getTargetFromElement = function (e) {
                var n = P.getSelectorFromElement(e);
                return n ? t(n)[0] : null
            }, i._jQueryInterface = function (e) {
                return this.each(function () {
                    var s = t(this), o = s.data(n), l = r({}, a, s.data(), "object" == typeof e && e);
                    if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new i(this, l), s.data(n, o)), "string" == typeof e) {
                        if ("undefined" == typeof o[e])
                            throw new TypeError('No method named "' + e + '"');
                        o[e]()
                    }
                })
            }, s(i, null, [{key: "VERSION", get: function () {
                        return"4.0.0"
                    }}, {key: "Default", get: function () {
                        return a
                    }}]), i
        }();
        return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = t(this), s = P.getSelectorFromElement(this);
            t(s).each(function () {
                var e = t(this), s = e.data(n) ? "toggle" : i.data();
                m._jQueryInterface.call(e, s)
            })
        }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
            return t.fn[e] = o, m._jQueryInterface
        }, m
    }(e), W = function (t) {
        var e = "dropdown", i = "bs.dropdown", o = "." + i, a = ".data-api", l = t.fn[e], h = new RegExp("38|40|27"), c = {HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, CLICK: "click" + o, CLICK_DATA_API: "click" + o + a, KEYDOWN_DATA_API: "keydown" + o + a, KEYUP_DATA_API: "keyup" + o + a}, u = "disabled", f = "show", d = "dropup", _ = "dropright", g = "dropleft", p = "dropdown-menu-right", m = "dropdown-menu-left", v = "position-static", E = '[data-toggle="dropdown"]', T = ".dropdown form", y = ".dropdown-menu", C = ".navbar-nav", I = ".dropdown-menu .dropdown-item:not(.disabled)", A = "top-start", b = "top-end", D = "bottom-start", S = "bottom-end", w = "right-start", N = "left-start", O = {offset: 0, flip: !0, boundary: "scrollParent"}, k = {offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)"}, L = function () {
            function a(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var l = a.prototype;
            return l.toggle = function () {
                if (!this._element.disabled && !t(this._element).hasClass(u)) {
                    var e = a._getParentFromElement(this._element), i = t(this._menu).hasClass(f);
                    if (a._clearMenus(), !i) {
                        var s = {relatedTarget: this._element}, r = t.Event(c.SHOW, s);
                        if (t(e).trigger(r), !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof n)
                                    throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var o = this._element;
                                t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e), "scrollParent" !== this._config.boundary && t(e).addClass(v), this._popper = new n(o, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart"in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(f), t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s))
                        }
                    }
                }
            }, l.dispose = function () {
                t.removeData(this._element, i), t(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, l.update = function () {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, l._addEventListeners = function () {
                var e = this;
                t(this._element).on(c.CLICK, function (t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, l._getConfig = function (n) {
                return n = r({}, this.constructor.Default, t(this._element).data(), n), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
            }, l._getMenuElement = function () {
                if (!this._menu) {
                    var e = a._getParentFromElement(this._element);
                    this._menu = t(e).find(y)[0]
                }
                return this._menu
            }, l._getPlacement = function () {
                var e = t(this._element).parent(), n = D;
                return e.hasClass(d) ? (n = A, t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S), n
            }, l._detectNavbar = function () {
                return t(this._element).closest(".navbar").length > 0
            }, l._getPopperConfig = function () {
                var t = this, e = {};
                return"function" == typeof this._config.offset ? e.fn = function (e) {
                    return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}), e
                } : e.offset = this._config.offset, {placement: this._getPlacement(), modifiers: {offset: e, flip: {enabled: this._config.flip}, preventOverflow: {boundariesElement: this._config.boundary}}}
            }, a._jQueryInterface = function (e) {
                return this.each(function () {
                    var n = t(this).data(i);
                    if (n || (n = new a(this, "object" == typeof e ? e : null), t(this).data(i, n)), "string" == typeof e) {
                        if ("undefined" == typeof n[e])
                            throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, a._clearMenus = function (e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
                        var r = a._getParentFromElement(n[s]), o = t(n[s]).data(i), l = {relatedTarget: n[s]};
                        if (o) {
                            var h = o._menu;
                            if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                                var u = t.Event(c.HIDE, l);
                                t(r).trigger(u), u.isDefaultPrevented() || ("ontouchstart"in document.documentElement && t("body").children().off("mouseover", null, t.noop), n[s].setAttribute("aria-expanded", "false"), t(h).removeClass(f), t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)))
                            }
                        }
                    }
            }, a._getParentFromElement = function (e) {
                var n, i = P.getSelectorFromElement(e);
                return i && (n = t(i)[0]), n || e.parentNode
            }, a._dataApiKeydownHandler = function (e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(u))) {
                    var n = a._getParentFromElement(this), i = t(n).hasClass(f);
                    if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                        var s = t(n).find(I).get();
                        if (0 !== s.length) {
                            var r = s.indexOf(e.target);
                            38 === e.which && r > 0 && r--, 40 === e.which && r < s.length - 1 && r++, r < 0 && (r = 0), s[r].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var o = t(n).find(E)[0];
                            t(o).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }, s(a, null, [{key: "VERSION", get: function () {
                        return"4.0.0"
                    }}, {key: "Default", get: function () {
                        return O
                    }}, {key: "DefaultType", get: function () {
                        return k
                    }}]), a
        }();
        return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function (e) {
            e.preventDefault(), e.stopPropagation(), L._jQueryInterface.call(t(this), "toggle")
        }).on(c.CLICK_DATA_API, T, function (t) {
            t.stopPropagation()
        }), t.fn[e] = L._jQueryInterface, t.fn[e].Constructor = L, t.fn[e].noConflict = function () {
            return t.fn[e] = l, L._jQueryInterface
        }, L
    }(e), M = function (t) {
        var e = "modal", n = "bs.modal", i = "." + n, o = t.fn.modal, a = {backdrop: !0, keyboard: !0, focus: !0, show: !0}, l = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, h = {HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, FOCUSIN: "focusin" + i, RESIZE: "resize" + i, CLICK_DISMISS: "click.dismiss" + i, KEYDOWN_DISMISS: "keydown.dismiss" + i, MOUSEUP_DISMISS: "mouseup.dismiss" + i, MOUSEDOWN_DISMISS: "mousedown.dismiss" + i, CLICK_DATA_API: "click" + i + ".data-api"}, c = "modal-scrollbar-measure", u = "modal-backdrop", f = "modal-open", d = "fade", _ = "show", g = {DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", STICKY_CONTENT: ".sticky-top", NAVBAR_TOGGLER: ".navbar-toggler"}, p = function () {
            function o(e, n) {
                this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
            }
            var p = o.prototype;
            return p.toggle = function (t) {
                return this._isShown ? this.hide() : this.show(t)
            }, p.show = function (e) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                    P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);
                    var i = t.Event(h.SHOW, {relatedTarget: e});
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(f), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function (t) {
                        return n.hide(t)
                    }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
                        t(n._element).one(h.MOUSEUP_DISMISS, function (e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function () {
                        return n._showElement(e)
                    }))
                }
            }, p.hide = function (e) {
                var n = this;
                if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                    var i = t.Event(h.HIDE);
                    if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                        s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(_), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), s ? t(this._element).one(P.TRANSITION_END, function (t) {
                            return n._hideModal(t)
                        }).emulateTransitionEnd(300) : this._hideModal()
                    }
                }
            }, p.dispose = function () {
                t.removeData(this._element, n), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, p.handleUpdate = function () {
                this._adjustDialog()
            }, p._getConfig = function (t) {
                return t = r({}, a, t), P.typeCheckConfig(e, t, l), t
            }, p._showElement = function (e) {
                var n = this, i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && P.reflow(this._element), t(this._element).addClass(_), this._config.focus && this._enforceFocus();
                var s = t.Event(h.SHOWN, {relatedTarget: e}), r = function () {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s)
                };
                i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r()
            }, p._enforceFocus = function () {
                var e = this;
                t(document).off(h.FOCUSIN).on(h.FOCUSIN, function (n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, p._setEscapeEvent = function () {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
                    27 === t.which && (t.preventDefault(), e.hide())
                }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS)
            }, p._setResizeEvent = function () {
                var e = this;
                this._isShown ? t(window).on(h.RESIZE, function (t) {
                    return e.handleUpdate(t)
                }) : t(window).off(h.RESIZE)
            }, p._hideModal = function () {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                    t(document.body).removeClass(f), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN)
                })
            }, p._removeBackdrop = function () {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, p._showBackdrop = function (e) {
                var n = this, i = t(this._element).hasClass(d) ? d : "";
                if (this._isShown && this._config.backdrop) {
                    var s = P.supportsTransitionEnd() && i;
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = u, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function (t) {
                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                    }), s && P.reflow(this._backdrop), t(this._backdrop).addClass(_), !e)
                        return;
                    if (!s)
                        return void e();
                    t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(_);
                    var r = function () {
                        n._removeBackdrop(), e && e()
                    };
                    P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r()
                } else
                    e && e()
            }, p._adjustDialog = function () {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, p._resetAdjustments = function () {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, p._checkScrollbar = function () {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, p._setScrollbar = function () {
                var e = this;
                if (this._isBodyOverflowing) {
                    t(g.FIXED_CONTENT).each(function (n, i) {
                        var s = t(i)[0].style.paddingRight, r = t(i).css("padding-right");
                        t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }), t(g.STICKY_CONTENT).each(function (n, i) {
                        var s = t(i)[0].style.marginRight, r = t(i).css("margin-right");
                        t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    }), t(g.NAVBAR_TOGGLER).each(function (n, i) {
                        var s = t(i)[0].style.marginRight, r = t(i).css("margin-right");
                        t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight, i = t("body").css("padding-right");
                    t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }, p._resetScrollbar = function () {
                t(g.FIXED_CONTENT).each(function (e, n) {
                    var i = t(n).data("padding-right");
                    "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
                }), t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (e, n) {
                    var i = t(n).data("margin-right");
                    "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var e = t("body").data("padding-right");
                "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
            }, p._getScrollbarWidth = function () {
                var t = document.createElement("div");
                t.className = c, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, o._jQueryInterface = function (e, i) {
                return this.each(function () {
                    var s = t(this).data(n), a = r({}, o.Default, t(this).data(), "object" == typeof e && e);
                    if (s || (s = new o(this, a), t(this).data(n, s)), "string" == typeof e) {
                        if ("undefined" == typeof s[e])
                            throw new TypeError('No method named "' + e + '"');
                        s[e](i)
                    } else
                        a.show && s.show(i)
                })
            }, s(o, null, [{key: "VERSION", get: function () {
                        return"4.0.0"
                    }}, {key: "Default", get: function () {
                        return a
                    }}]), o
        }();
        return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function (e) {
            var i, s = this, o = P.getSelectorFromElement(this);
            o && (i = t(o)[0]);
            var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var l = t(i).one(h.SHOW, function (e) {
                e.isDefaultPrevented() || l.one(h.HIDDEN, function () {
                    t(s).is(":visible") && s.focus()
                })
            });
            p._jQueryInterface.call(t(i), a, this)
        }), t.fn.modal = p._jQueryInterface, t.fn.modal.Constructor = p, t.fn.modal.noConflict = function () {
            return t.fn.modal = o, p._jQueryInterface
        }, p
    }(e), U = function (t) {
        var e = "tooltip", i = "bs.tooltip", o = "." + i, a = t.fn[e], l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), h = {animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)"}, c = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, u = {animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent"}, f = "show", d = "out", _ = {HIDE: "hide" + o, HIDDEN: "hidden" + o, SHOW: "show" + o, SHOWN: "shown" + o, INSERTED: "inserted" + o, CLICK: "click" + o, FOCUSIN: "focusin" + o, FOCUSOUT: "focusout" + o, MOUSEENTER: "mouseenter" + o, MOUSELEAVE: "mouseleave" + o}, g = "fade", p = "show", m = ".tooltip-inner", v = ".arrow", E = "hover", T = "focus", y = "click", C = "manual", I = function () {
            function a(t, e) {
                if ("undefined" == typeof n)
                    throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var I = a.prototype;
            return I.enable = function () {
                this._isEnabled = !0
            }, I.disable = function () {
                this._isEnabled = !1
            }, I.toggleEnabled = function () {
                this._isEnabled = !this._isEnabled
            }, I.toggle = function (e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY, i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(p))
                            return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, I.dispose = function () {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, I.show = function () {
                var e = this;
                if ("none" === t(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var s = t.contains(this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !s)
                        return;
                    var r = this.getTipElement(), o = P.getUID(this.constructor.NAME);
                    r.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && t(r).addClass(g);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement, h = this._getAttachment(l);
                    this.addAttachmentClass(h);
                    var c = !1 === this.config.container ? document.body : t(this.config.container);
                    t(r).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, r, {placement: h, modifiers: {offset: {offset: this.config.offset}, flip: {behavior: this.config.fallbackPlacement}, arrow: {element: v}, preventOverflow: {boundariesElement: this.config.boundary}}, onCreate: function (t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        }, onUpdate: function (t) {
                            e._handlePopperPlacementChange(t)
                        }}), t(r).addClass(p), "ontouchstart"in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                    var u = function () {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === d && e._leave(null, e)
                    };
                    P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
                }
            }, I.hide = function (e) {
                var n = this, i = this.getTipElement(), s = t.Event(this.constructor.Event.HIDE), r = function () {
                    n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                };
                t(this.element).trigger(s), s.isDefaultPrevented() || (t(i).removeClass(p), "ontouchstart"in document.documentElement && t("body").children().off("mouseover", null, t.noop), this._activeTrigger[y] = !1, this._activeTrigger[T] = !1, this._activeTrigger[E] = !1, P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
            }, I.update = function () {
                null !== this._popper && this._popper.scheduleUpdate()
            }, I.isWithContent = function () {
                return Boolean(this.getTitle())
            }, I.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, I.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, I.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(m), this.getTitle()), e.removeClass(g + " " + p)
            }, I.setElementContent = function (e, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
            }, I.getTitle = function () {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, I._getAttachment = function (t) {
                return c[t.toUpperCase()]
            }, I._setListeners = function () {
                var e = this;
                this.config.trigger.split(" ").forEach(function (n) {
                    if ("click" === n)
                        t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                            return e.toggle(t)
                        });
                    else if (n !== C) {
                        var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN, s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function (t) {
                            return e._enter(t)
                        }).on(s, e.config.selector, function (t) {
                            return e._leave(t)
                        })
                    }
                    t(e.element).closest(".modal").on("hide.bs.modal", function () {
                        return e.hide()
                    })
                }), this.config.selector ? this.config = r({}, this.config, {trigger: "manual", selector: ""}) : this._fixTitle()
            }, I._fixTitle = function () {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, I._enter = function (e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T : E] = !0), t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout), n._hoverState = f, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                    n._hoverState === f && n.show()
                }, n.config.delay.show) : n.show())
            }, I._leave = function (e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T : E] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = d, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                    n._hoverState === d && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, I._isWithActiveTrigger = function () {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t])
                        return!0;
                return!1
            }, I._getConfig = function (n) {
                return"number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {show: n.delay, hide: n.delay}), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), P.typeCheckConfig(e, n, this.constructor.DefaultType), n
            }, I._getDelegateConfig = function () {
                var t = {};
                if (this.config)
                    for (var e in this.config)
                        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, I._cleanTipClass = function () {
                var e = t(this.getTipElement()), n = e.attr("class").match(l);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }, I._handlePopperPlacementChange = function (t) {
                this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, I._fixTransition = function () {
                var e = this.getTipElement(), n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, a._jQueryInterface = function (e) {
                return this.each(function () {
                    var n = t(this).data(i), s = "object" == typeof e && e;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this, s), t(this).data(i, n)), "string" == typeof e)) {
                        if ("undefined" == typeof n[e])
                            throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, s(a, null, [{key: "VERSION", get: function () {
                        return"4.0.0"
                    }}, {key: "Default", get: function () {
                        return u
                    }}, {key: "NAME", get: function () {
                        return e
                    }}, {key: "DATA_KEY", get: function () {
                        return i
                    }}, {key: "Event", get: function () {
                        return _
                    }}, {key: "EVENT_KEY", get: function () {
                        return o
                    }}, {key: "DefaultType", get: function () {
                        return h
                    }}]), a
        }();
        return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
            return t.fn[e] = a, I._jQueryInterface
        }, I
    }(e), x = function (t) {
        var e = "popover", n = "bs.popover", i = "." + n, o = t.fn[e], a = new RegExp("(^|\\s)bs-popover\\S+", "g"), l = r({}, U.Default, {placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}), h = r({}, U.DefaultType, {content: "(string|element|function)"}), c = "fade", u = "show", f = ".popover-header", d = ".popover-body", _ = {HIDE: "hide" + i, HIDDEN: "hidden" + i, SHOW: "show" + i, SHOWN: "shown" + i, INSERTED: "inserted" + i, CLICK: "click" + i, FOCUSIN: "focusin" + i, FOCUSOUT: "focusout" + i, MOUSEENTER: "mouseenter" + i, MOUSELEAVE: "mouseleave" + i}, g = function (r) {
            var o, g;
            function p() {
                return r.apply(this, arguments) || this
            }
            g = r, (o = p).prototype = Object.create(g.prototype), o.prototype.constructor = o, o.__proto__ = g;
            var m = p.prototype;
            return m.isWithContent = function () {
                return this.getTitle() || this._getContent()
            }, m.addAttachmentClass = function (e) {
                t(this.getTipElement()).addClass("bs-popover-" + e)
            }, m.getTipElement = function () {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, m.setContent = function () {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(f), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(d), n), e.removeClass(c + " " + u)
            }, m._getContent = function () {
                return this.element.getAttribute("data-content") || this.config.content
            }, m._cleanTipClass = function () {
                var e = t(this.getTipElement()), n = e.attr("class").match(a);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }, p._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this).data(n), s = "object" == typeof e ? e : null;
                    if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this, s), t(this).data(n, i)), "string" == typeof e)) {
                        if ("undefined" == typeof i[e])
                            throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, s(p, null, [{key: "VERSION", get: function () {
                        return"4.0.0"
                    }}, {key: "Default", get: function () {
                        return l
                    }}, {key: "NAME", get: function () {
                        return e
                    }}, {key: "DATA_KEY", get: function () {
                        return n
                    }}, {key: "Event", get: function () {
                        return _
                    }}, {key: "EVENT_KEY", get: function () {
                        return i
                    }}, {key: "DefaultType", get: function () {
                        return h
                    }}]), p
        }(U);
        return t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
            return t.fn[e] = o, g._jQueryInterface
        }, g
    }(e), K = function (t) {
        var e = "scrollspy", n = "bs.scrollspy", i = "." + n, o = t.fn[e], a = {offset: 10, method: "auto", target: ""}, l = {offset: "number", method: "string", target: "(string|element)"}, h = {ACTIVATE: "activate" + i, SCROLL: "scroll" + i, LOAD_DATA_API: "load" + i + ".data-api"}, c = "dropdown-item", u = "active", f = {DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", NAV_LIST_GROUP: ".nav, .list-group", NAV_LINKS: ".nav-link", NAV_ITEMS: ".nav-item", LIST_ITEMS: ".list-group-item", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle"}, d = "offset", _ = "position", g = function () {
            function o(e, n) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function (t) {
                    return i._process(t)
                }), this.refresh(), this._process()
            }
            var g = o.prototype;
            return g.refresh = function () {
                var e = this, n = this._scrollElement === this._scrollElement.window ? d : _, i = "auto" === this._config.method ? n : this._config.method, s = i === _ ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
                    var n, r = P.getSelectorFromElement(e);
                    if (r && (n = t(r)[0]), n) {
                        var o = n.getBoundingClientRect();
                        if (o.width || o.height)
                            return[t(n)[i]().top + s, r]
                    }
                    return null
                }).filter(function (t) {
                    return t
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).forEach(function (t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, g.dispose = function () {
                t.removeData(this._element, n), t(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, g._getConfig = function (n) {
                if ("string" != typeof (n = r({}, a, n)).target) {
                    var i = t(n.target).attr("id");
                    i || (i = P.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i
                }
                return P.typeCheckConfig(e, n, l), n
            }, g._getScrollTop = function () {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, g._getScrollHeight = function () {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, g._getOffsetHeight = function () {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, g._process = function () {
                var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                        return this._activeTarget = null, void this._clear();
                    for (var s = this._offsets.length; s--; ) {
                        this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                    }
                }
            }, g._activate = function (e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",");
                n = n.map(function (t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var i = t(n.join(","));
                i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u), i.addClass(u)) : (i.addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u), i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)), t(this._scrollElement).trigger(h.ACTIVATE, {relatedTarget: e})
            }, g._clear = function () {
                t(this._selector).filter(f.ACTIVE).removeClass(u)
            }, o._jQueryInterface = function (e) {
                return this.each(function () {
                    var i = t(this).data(n);
                    if (i || (i = new o(this, "object" == typeof e && e), t(this).data(n, i)), "string" == typeof e) {
                        if ("undefined" == typeof i[e])
                            throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, s(o, null, [{key: "VERSION", get: function () {
                        return"4.0.0"
                    }}, {key: "Default", get: function () {
                        return a
                    }}]), o
        }();
        return t(window).on(h.LOAD_DATA_API, function () {
            for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--; ) {
                var i = t(e[n]);
                g._jQueryInterface.call(i, i.data())
            }
        }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
            return t.fn[e] = o, g._jQueryInterface
        }, g
    }(e), V = function (t) {
        var e = "bs.tab", n = "." + e, i = t.fn.tab, r = {HIDE: "hide" + n, HIDDEN: "hidden" + n, SHOW: "show" + n, SHOWN: "shown" + n, CLICK_DATA_API: "click.bs.tab.data-api"}, o = "dropdown-menu", a = "active", l = "disabled", h = "fade", c = "show", u = ".dropdown", f = ".nav, .list-group", d = ".active", _ = "> li > .active", g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', p = ".dropdown-toggle", m = "> .dropdown-menu .active", v = function () {
            function n(t) {
                this._element = t
            }
            var i = n.prototype;
            return i.show = function () {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
                    var n, i, s = t(this._element).closest(f)[0], o = P.getSelectorFromElement(this._element);
                    if (s) {
                        var h = "UL" === s.nodeName ? _ : d;
                        i = (i = t.makeArray(t(s).find(h)))[i.length - 1]
                    }
                    var c = t.Event(r.HIDE, {relatedTarget: this._element}), u = t.Event(r.SHOW, {relatedTarget: i});
                    if (i && t(i).trigger(c), t(this._element).trigger(u), !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
                        o && (n = t(o)[0]), this._activate(this._element, s);
                        var g = function () {
                            var n = t.Event(r.HIDDEN, {relatedTarget: e._element}), s = t.Event(r.SHOWN, {relatedTarget: i});
                            t(i).trigger(n), t(e._element).trigger(s)
                        };
                        n ? this._activate(n, n.parentNode, g) : g()
                    }
                }
            }, i.dispose = function () {
                t.removeData(this._element, e), this._element = null
            }, i._activate = function (e, n, i) {
                var s = this, r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0], o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h), a = function () {
                    return s._transitionComplete(e, r, i)
                };
                r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a()
            }, i._transitionComplete = function (e, n, i) {
                if (n) {
                    t(n).removeClass(c + " " + a);
                    var s = t(n.parentNode).find(m)[0];
                    s && t(s).removeClass(a), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(a), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), P.reflow(e), t(e).addClass(c), e.parentNode && t(e.parentNode).hasClass(o)) {
                    var r = t(e).closest(u)[0];
                    r && t(r).find(p).addClass(a), e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, n._jQueryInterface = function (i) {
                return this.each(function () {
                    var s = t(this), r = s.data(e);
                    if (r || (r = new n(this), s.data(e, r)), "string" == typeof i) {
                        if ("undefined" == typeof r[i])
                            throw new TypeError('No method named "' + i + '"');
                        r[i]()
                    }
                })
            }, s(n, null, [{key: "VERSION", get: function () {
                        return"4.0.0"
                    }}]), n
        }();
        return t(document).on(r.CLICK_DATA_API, g, function (e) {
            e.preventDefault(), v._jQueryInterface.call(t(this), "show")
        }), t.fn.tab = v._jQueryInterface, t.fn.tab.Constructor = v, t.fn.tab.noConflict = function () {
            return t.fn.tab = i, v._jQueryInterface
        }, v
    }(e);
    !function (t) {
        if ("undefined" == typeof t)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = P, t.Alert = L, t.Button = R, t.Carousel = j, t.Collapse = H, t.Dropdown = W, t.Modal = M, t.Popover = x, t.Scrollspy = K, t.Tab = V, t.Tooltip = U, Object.defineProperty(t, "__esModule", {value: !0})
});
//# sourceMappingURL=bootstrap.min.js.map;
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {time: null, target: null, pointer: null, stage: {start: null, current: null}, direction: null}, this._states = {current: {}, tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}}, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function (b, c) {
            this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
        }, this)), this.setup(), this.initialize()
    }
    e.Defaults = {items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab"}, e.Width = {Default: "default", Inner: "inner", Outer: "outer"}, e.Type = {Event: "event", State: "state"}, e.Plugins = {}, e.Workers = [{filter: ["width", "settings"], run: function () {
                this._width = this.$element.width()
            }}, {filter: ["width", "items", "settings"], run: function (a) {
                a.current = this._items && this._items[this.relative(this._current)]
            }}, {filter: ["items", "settings"], run: function () {
                this.$stage.children(".cloned").remove()
            }}, {filter: ["width", "items", "settings"], run: function (a) {
                var b = this.settings.margin || "", c = !this.settings.autoWidth, d = this.settings.rtl, e = {width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b};
                !c && this.$stage.children().css(e), a.css = e
            }}, {filter: ["width", "items", "settings"], run: function (a) {
                var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, c = null, d = this._items.length, e = !this.settings.autoWidth, f = [];
                for (a.items = {merge:!1, width:b}; d--; )
                    c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
                this._widths = f
            }}, {filter: ["items", "settings"], run: function () {
                var b = [], c = this._items, d = this.settings, e = Math.max(2 * d.items, 4), f = 2 * Math.ceil(c.length / 2), g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0, h = "", i = "";
                for (g /= 2; g--; )
                    b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
                this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
            }}, {filter: ["width", "items", "settings"], run: function () {
                for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                    d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
                this._coordinates = f
            }}, {filter: ["width", "items", "settings"], run: function () {
                var a = this.settings.stagePadding, b = this._coordinates, c = {width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || ""};
                this.$stage.css(c)
            }}, {filter: ["width", "items", "settings"], run: function (a) {
                var b = this._coordinates.length, c = !this.settings.autoWidth, d = this.$stage.children();
                if (c && a.items.merge)
                    for (; b--; )
                        a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
                else
                    c && (a.css.width = a.items.width, d.css(a.css))
            }}, {filter: ["items"], run: function () {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }}, {filter: ["width", "items", "settings"], run: function (a) {
                a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
            }}, {filter: ["position"], run: function () {
                this.animate(this.coordinates(this._current))
            }}, {filter: ["width", "position", "items", "settings"], run: function () {
                var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
                for (c = 0, d = this._coordinates.length; c < d; c++)
                    a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }}], e.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function () {
        var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
        c ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {property: {name: "settings", value: e}}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {property: {name: "settings", value: this.settings}})
    }, e.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", {content: b});
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a]
        }, this._invalidated), e = {}; b < c; )
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
    }, e.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function () {
        return!!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function () {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return!1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function (b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5]}) : (d = this.$stage.position(), d = {x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top}), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function (a) {
        var b = null, c = null, d = null, e = this.difference(this._drag.pointer, this.pointer(a)), f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)), e = this._drag.stage.current, f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return!1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function (b, c) {
        var d = -1, e = 30, f = this.width(), g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
            return"left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function (b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s"}) : c ? this.$stage.animate({left: b + "px"}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: b + "px"})
    }, e.prototype.is = function (a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function (a) {
        if (a === d)
            return this._current;
        if (0 === this._items.length)
            return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {property: {name: "position", value: a}});
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {property: {name: "position", value: this._current}})
        }
        return this._current
    }, e.prototype.invalidate = function (b) {
        return"string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
            return b
        })
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function (a, b) {
        var c = this._items.length, e = b ? 0 : this._clones.length;
        return!this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function (a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function (a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop)
            f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)); )
                ;
            f = b + 1
        } else
            f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2, e = c + this._items.length, f = function (a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function (a, b) {
            return f(b)
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function (b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function (a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function (a, b) {
        var c = this.current(), d = null, e = a - this.relative(c), f = (e > 0) - (e < 0), g = this._items.length, h = this.minimum(), i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function (a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))
            return!1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function () {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function (b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {content: b, position: c}), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {content: b, position: c})
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {content: this._items[a], position: a}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {content: null, position: a}))
    }, e.prototype.preloadAutoWidthImages = function (b) {
        b.each(a.proxy(function (b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins)
            this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case"<":
                return d ? a > c : a < c;
            case">":
                return d ? a < c : a > c;
            case">=":
                return d ? a <= c : a >= c;
            case"<=":
                return d ? a >= c : a <= c
            }
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function (b, c, d, f, g) {
        var h = {item: {count: this._items.length, index: this.current()}}, i = a.camelCase(a.grep(["on", b, d], function (a) {
            return a
        }).join("-").toLowerCase()), j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, h, c));
        return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({type: e.Type.Event, name: b}), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function (b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function (a) {
                    return!c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else
            b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
                return a.inArray(c, this._states.tags[b.name]) === d
            }, this)))
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function (a) {
        var c = {x: null, y: null};
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function (a) {
        return!isNaN(parseFloat(a))
    }, e.prototype.difference = function (a, b) {
        return{x: a.x - b.x, y: a.y - b.y}
    }, a.fn.owlCarousel = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var d = a(this), f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                f.register({type: e.Type.Event, name: c}), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {"initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, e.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._loaded = [], this._handlers = {"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
                        this.load(b)
                    }, this); f++ < e; )
                        this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {lazyLoad: !1}, e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {element: f, url: g}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", {element: f, url: g}, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
                f.css({"background-image": 'url("' + g + '")', opacity: "1"}), this._core.trigger("loaded", {element: f, url: g}, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers)
            this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._handlers = {"initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, e.prototype.update = function () {
        var b = this._core._current, c = b + this._core.settings.items, d = this._core.$stage.children().toArray().slice(b, c), e = [], f = 0;
        a.each(d, function (b, c) {
            e.push(a(c).height())
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {"initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, e.prototype.fetch = function (a, b) {
        var c = function () {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
        }(), d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"), e = a.attr("data-width") || this._core.settings.videoWidth, f = a.attr("data-height") || this._core.settings.videoHeight, g = a.attr("href");
        if (!g)
            throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1)
            c = "youtube";
        else if (d[3].indexOf("vimeo") > -1)
            c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {type: c, id: d, width: e, height: f}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function (b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function (a) {
            e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
        };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length)
            return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function (a) {
                f = a[0].thumbnail_large, l(f)
            }}) : "vzaar" === c.type && a.ajax({type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function (a) {
                f = a.framegrab_url, l(f)
            }})
    }, e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function (b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {"change.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this), "translate.owl.carousel": a.proxy(function (a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)}, this.core.$element.on(this.handlers)
    };
    e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    },
            a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function (b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = {"changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                a.namespace && this.play(b, c)
            }, this), "stop.owl.autoplay": a.proxy(function (a) {
                a.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)}, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1}, e.prototype.play = function (a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function (d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), d || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {next: this._core.next, prev: this._core.prev, to: this._core.to}, this._handlers = {"prepared.owl.carousel": a.proxy(function (b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1}, e.prototype.initialize = function () {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides)
            this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function () {
        var a, b, c, d;
        for (a in this._handlers)
            this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
            this._controls[b].remove();
        for (d in this.overides)
            this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function () {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({start: Math.min(f, a - d), end: a - d + h - 1}), Math.min(f, a - d) === f)
                        break;
                    b = 0, ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }, e.prototype.draw = function () {
        var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = {index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)}
    }, e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function (a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function (b) {
        var c, d, e = this._core.settings;
        return"page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function (c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {"initialized.owl.carousel": a.proxy(function (c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c)
                        return;
                    this._hashes[c] = b.content
                }
            }, this), "changed.owl.carousel": a.proxy(function (c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())), e = a.map(this._hashes, function (a, b) {
                        return a === d ? b : null
                    }).join();
                    if (!e || b.location.hash.slice(1) === e)
                        return;
                    b.location.hash = e
                }
            }, this)}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
            var c = b.location.hash.substring(1), e = this._core.$stage.children(), f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {URLhashListener: !1}, e.prototype.destroy = function () {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)
            this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
            "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    function e(b, c) {
        var e = !1, f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
            if (g[b] !== d)
                return e = !c || b, !1
        }), e
    }
    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style, h = "Webkit Moz O ms".split(" "), i = {transition: {end: {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend"}}, animation: {end: {WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend"}}}, j = {csstransforms: function () {
            return!!e("transform")
        }, csstransforms3d: function () {
            return!!e("perspective")
        }, csstransitions: function () {
            return!!e("transition")
        }, cssanimations: function () {
            return!!e("animation")
        }};
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
;
/*!
 * Validator v0.11.5 for Bootstrap 3, by @1000hz
 * Copyright 2016 Cina Saffary
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/1000hz/bootstrap-validator
 */

+function ($) {
    'use strict';

    // VALIDATOR CLASS DEFINITION
    // ==========================

    function getValue($el) {
        return $el.is('[type="checkbox"]') ? $el.prop('checked') :
                $el.is('[type="radio"]') ? !!$('[name="' + $el.attr('name') + '"]:checked').length :
                $el.val()
    }

    var Validator = function (element, options) {
        this.options = options
        this.validators = $.extend({}, Validator.VALIDATORS, options.custom)
        this.$element = $(element)
        this.$btn = $('button[type="submit"], input[type="submit"]')
                .filter('[form="' + this.$element.attr('id') + '"]')
                .add(this.$element.find('input[type="submit"], button[type="submit"]'))

        this.update()

        this.$element.on('input.bs.validator change.bs.validator focusout.bs.validator', $.proxy(this.onInput, this))
        this.$element.on('submit.bs.validator', $.proxy(this.onSubmit, this))
        this.$element.on('reset.bs.validator', $.proxy(this.reset, this))

        this.$element.find('[data-match]').each(function () {
            var $this = $(this)
            var target = $this.data('match')

            $(target).on('input.bs.validator', function (e) {
                getValue($this) && $this.trigger('input.bs.validator')
            })
        })

        this.$inputs.filter(function () {
            return getValue($(this))
        }).trigger('focusout')

        this.$element.attr('novalidate', true) // disable automatic native validation
        this.toggleSubmit()
    }

    Validator.VERSION = '0.11.5'

    Validator.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)'

    Validator.FOCUS_OFFSET = 20

    Validator.DEFAULTS = {
        delay: 500,
        html: false,
        disable: true,
        focus: true,
        custom: {},
        errors: {
            match: 'Does not match',
            minlength: 'Not long enough'
        },
        feedback: {
            success: 'glyphicon-ok',
            error: 'glyphicon-remove'
        }
    }

    Validator.VALIDATORS = {
        'native': function ($el) {
            var el = $el[0]
            if (el.checkValidity) {
                return !el.checkValidity() && !el.validity.valid && (el.validationMessage || "error!")
            }
        },
        'match': function ($el) {
            var target = $el.data('match')
            return $el.val() !== $(target).val() && Validator.DEFAULTS.errors.match
        },
        'minlength': function ($el) {
            var minlength = $el.data('minlength')
            return $el.val().length < minlength && Validator.DEFAULTS.errors.minlength
        }
    }

    Validator.prototype.update = function () {
        this.$inputs = this.$element.find(Validator.INPUT_SELECTOR)
                .add(this.$element.find('[data-validate="true"]'))
                .not(this.$element.find('[data-validate="false"]'))

        return this
    }

    Validator.prototype.onInput = function (e) {
        var self = this
        var $el = $(e.target)
        var deferErrors = e.type !== 'focusout'

        if (!this.$inputs.is($el))
            return

        this.validateInput($el, deferErrors).done(function () {
            self.toggleSubmit()
        })
    }

    Validator.prototype.validateInput = function ($el, deferErrors) {
        var value = getValue($el)
        var prevErrors = $el.data('bs.validator.errors')
        var errors

        if ($el.is('[type="radio"]'))
            $el = this.$element.find('input[name="' + $el.attr('name') + '"]')

        var e = $.Event('validate.bs.validator', {relatedTarget: $el[0]})
        this.$element.trigger(e)
        if (e.isDefaultPrevented())
            return

        var self = this

        return this.runValidators($el).done(function (errors) {
            $el.data('bs.validator.errors', errors)

            errors.length
                    ? deferErrors ? self.defer($el, self.showErrors) : self.showErrors($el)
                    : self.clearErrors($el)

            if (!prevErrors || errors.toString() !== prevErrors.toString()) {
                e = errors.length
                        ? $.Event('invalid.bs.validator', {relatedTarget: $el[0], detail: errors})
                        : $.Event('valid.bs.validator', {relatedTarget: $el[0], detail: prevErrors})

                self.$element.trigger(e)
            }

            self.toggleSubmit()

            self.$element.trigger($.Event('validated.bs.validator', {relatedTarget: $el[0]}))
        })
    }


    Validator.prototype.runValidators = function ($el) {
        var errors = []
        var deferred = $.Deferred()

        $el.data('bs.validator.deferred') && $el.data('bs.validator.deferred').reject()
        $el.data('bs.validator.deferred', deferred)

        function getValidatorSpecificError(key) {
            return $el.data(key + '-error')
        }

        function getValidityStateError() {
            var validity = $el[0].validity
            return validity.typeMismatch ? $el.data('type-error')
                    : validity.patternMismatch ? $el.data('pattern-error')
                    : validity.stepMismatch ? $el.data('step-error')
                    : validity.rangeOverflow ? $el.data('max-error')
                    : validity.rangeUnderflow ? $el.data('min-error')
                    : validity.valueMissing ? $el.data('required-error')
                    : null
        }

        function getGenericError() {
            return $el.data('error')
        }

        function getErrorMessage(key) {
            return getValidatorSpecificError(key)
                    || getValidityStateError()
                    || getGenericError()
        }

        $.each(this.validators, $.proxy(function (key, validator) {
            var error = null
            if ((getValue($el) || $el.attr('required')) &&
                    ($el.data(key) || key == 'native') &&
                    (error = validator.call(this, $el))) {
                error = getErrorMessage(key) || error
                !~errors.indexOf(error) && errors.push(error)
            }
        }, this))

        if (!errors.length && getValue($el) && $el.data('remote')) {
            this.defer($el, function () {
                var data = {}
                data[$el.attr('name')] = getValue($el)
                $.get($el.data('remote'), data)
                        .fail(function (jqXHR, textStatus, error) {
                            errors.push(getErrorMessage('remote') || error)
                        })
                        .always(function () {
                            deferred.resolve(errors)
                        })
            })
        } else
            deferred.resolve(errors)

        return deferred.promise()
    }

    Validator.prototype.validate = function () {
        var self = this

        $.when(this.$inputs.map(function (el) {
            return self.validateInput($(this), false)
        })).then(function () {
            self.toggleSubmit()
            self.focusError()
        })

        return this
    }

    Validator.prototype.focusError = function () {
        if (!this.options.focus)
            return

        var $input = this.$element.find(".has-error:first :input")
        if ($input.length === 0)
            return

        $('html, body').animate({scrollTop: $input.offset().top - Validator.FOCUS_OFFSET}, 250)
        $input.focus()
    }

    Validator.prototype.showErrors = function ($el) {
        var method = this.options.html ? 'html' : 'text'
        var errors = $el.data('bs.validator.errors')
        var $group = $el.closest('.form-group')
        var $block = $group.find('.help-block.with-errors')
        var $feedback = $group.find('.form-control-feedback')

        if (!errors.length)
            return

        $block.data('bs.validator.originalContent') === undefined && $block.data('bs.validator.originalContent', $block.html())
        $block.empty().append(errors)
        $group.addClass('has-error has-danger')

        $group.hasClass('has-feedback')
                && $feedback.removeClass(this.options.feedback.success)
                && $feedback.addClass(this.options.feedback.error)
                && $group.removeClass('has-success')
    }

    Validator.prototype.clearErrors = function ($el) {
        var $group = $el.closest('.form-group')
        var $block = $group.find('.help-block.with-errors')
        var $feedback = $group.find('.form-control-feedback')

        $block.html($block.data('bs.validator.originalContent'))
        $group.removeClass('has-error has-danger has-success')

        $group.hasClass('has-feedback')
                && $feedback.removeClass(this.options.feedback.error)
                && $feedback.removeClass(this.options.feedback.success)
                && getValue($el)
                && $feedback.addClass(this.options.feedback.success)
                && $group.addClass('has-success')
    }

    Validator.prototype.hasErrors = function () {
        function fieldErrors() {
            return !!($(this).data('bs.validator.errors') || []).length
        }

        return !!this.$inputs.filter(fieldErrors).length
    }

    Validator.prototype.isIncomplete = function () {
        function fieldIncomplete() {
            var value = getValue($(this))
            return !(typeof value == "string" ? $.trim(value) : value)
        }

        return !!this.$inputs.filter('[required]').filter(fieldIncomplete).length
    }

    Validator.prototype.onSubmit = function (e) {
        this.validate()
        if (this.isIncomplete() || this.hasErrors())
            e.preventDefault()
    }

    Validator.prototype.toggleSubmit = function () {
        if (!this.options.disable)
            return
        this.$btn.toggleClass('disabled', this.isIncomplete() || this.hasErrors())
    }

    Validator.prototype.defer = function ($el, callback) {
        callback = $.proxy(callback, this, $el)
        if (!this.options.delay)
            return callback()
        window.clearTimeout($el.data('bs.validator.timeout'))
        $el.data('bs.validator.timeout', window.setTimeout(callback, this.options.delay))
    }

    Validator.prototype.reset = function () {
        this.$element.find('.form-control-feedback')
                .removeClass(this.options.feedback.error)
                .removeClass(this.options.feedback.success)

        this.$inputs
                .removeData(['bs.validator.errors', 'bs.validator.deferred'])
                .each(function () {
                    var $this = $(this)
                    var timeout = $this.data('bs.validator.timeout')
                    window.clearTimeout(timeout) && $this.removeData('bs.validator.timeout')
                })

        this.$element.find('.help-block.with-errors')
                .each(function () {
                    var $this = $(this)
                    var originalContent = $this.data('bs.validator.originalContent')

                    $this
                            .removeData('bs.validator.originalContent')
                            .html(originalContent)
                })

        this.$btn.removeClass('disabled')

        this.$element.find('.has-error, .has-danger, .has-success').removeClass('has-error has-danger has-success')

        return this
    }

    Validator.prototype.destroy = function () {
        this.reset()

        this.$element
                .removeAttr('novalidate')
                .removeData('bs.validator')
                .off('.bs.validator')

        this.$inputs
                .off('.bs.validator')

        this.options = null
        this.validators = null
        this.$element = null
        this.$btn = null

        return this
    }

    // VALIDATOR PLUGIN DEFINITION
    // ===========================


    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var options = $.extend({}, Validator.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var data = $this.data('bs.validator')

            if (!data && option == 'destroy')
                return
            if (!data)
                $this.data('bs.validator', (data = new Validator(this, options)))
            if (typeof option == 'string')
                data[option]()
        })
    }

    var old = $.fn.validator

    $.fn.validator = Plugin
    $.fn.validator.Constructor = Validator


    // VALIDATOR NO CONFLICT
    // =====================

    $.fn.validator.noConflict = function () {
        $.fn.validator = old
        return this
    }


    // VALIDATOR DATA-API
    // ==================

    $(window).on('load', function () {
        $('form[data-toggle="validator"]').each(function () {
            var $form = $(this)
            Plugin.call($form, $form.data())
        })
    })

}(jQuery);
;
/*!
 * Shuffle.js by @Vestride
 * Categorize, sort, and filter a responsive grid of items.
 * Dependencies: jQuery 1.9+, Modernizr 2.6.2+
 * @license MIT license
 * @version 3.1.1
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "modernizr"], a) : "object" == typeof exports ? module.exports = a(require("jquery"), window.Modernizr) : window.Shuffle = a(window.jQuery, window.Modernizr)
}(function (a, b, c) {
    "use strict";
    function d(a) {
        return a ? a.replace(/([A-Z])/g, function (a, b) {
            return"-" + b.toLowerCase()
        }).replace(/^ms-/, "-ms-") : ""
    }
    function e(b, c, d) {
        var e, f, g, h = null, i = 0;
        d = d || {};
        var j = function () {
            i = d.leading === !1 ? 0 : a.now(), h = null, g = b.apply(e, f), e = f = null
        };
        return function () {
            var k = a.now();
            i || d.leading !== !1 || (i = k);
            var l = c - (k - i);
            return e = this, f = arguments, 0 >= l || l > c ? (clearTimeout(h), h = null, i = k, g = b.apply(e, f), e = f = null) : h || d.trailing === !1 || (h = setTimeout(j, l)), g
        }
    }
    function f(a, b, c) {
        for (var d = 0, e = a.length; e > d; d++)
            if (b.call(c, a[d], d, a) === {})
                return
    }
    function g(b, c, d) {
        return setTimeout(a.proxy(b, c), d)
    }
    function h(a) {
        return Math.max.apply(Math, a)
    }
    function i(a) {
        return Math.min.apply(Math, a)
    }
    function j(b) {
        return a.isNumeric(b) ? b : 0
    }
    function k(a) {
        var b, c, d = a.length;
        if (!d)
            return a;
        for (; --d; )
            c = Math.floor(Math.random() * (d + 1)), b = a[c], a[c] = a[d], a[d] = b;
        return a
    }
    if ("object" != typeof b)
        throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");
    var l = b.prefixed("transition"), m = b.prefixed("transitionDelay"), n = b.prefixed("transitionDuration"), o = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[l], p = b.prefixed("transform"), q = d(p), r = b.csstransforms && b.csstransitions, s = b.csstransforms3d, t = !!window.getComputedStyle, u = "shuffle", v = "all", w = "groups", x = 1, y = .001, z = window.getComputedStyle || function () {
    }, A = function (a, b) {
        this.x = j(a), this.y = j(b)
    };
    A.equals = function (a, b) {
        return a.x === b.x && a.y === b.y
    };
    var B = function () {
        if (!t)
            return!1;
        var a = document.body || document.documentElement, b = document.createElement("div");
        b.style.cssText = "width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;", a.appendChild(b);
        var c = z(b, null).width, d = "10px" === c;
        return a.removeChild(b), d
    }(), C = 0, D = a(window), E = function (b, c) {
        c = c || {}, a.extend(this, E.options, c, E.settings), this.$el = a(b), this.element = b, this.unique = "shuffle_" + C++, this._fire(E.EventType.LOADING), this._init(), g(function () {
            this.initialized = !0, this._fire(E.EventType.DONE)
        }, this, 16)
    };
    return E.EventType = {LOADING: "loading", DONE: "done", LAYOUT: "layout", REMOVED: "removed"}, E.ClassName = {BASE: u, SHUFFLE_ITEM: "shuffle-item", FILTERED: "filtered", CONCEALED: "concealed"}, E.options = {group: v, speed: 250, easing: "ease-out", itemSelector: "", sizer: null, gutterWidth: 0, columnWidth: 0, delimeter: null, buffer: 0, columnThreshold: t ? .01 : .1, initialSort: null, throttle: e, throttleTime: 300, sequentialFadeDelay: 150, supported: r}, E.settings = {useSizer: !1, itemCss: {position: "absolute", top: 0, left: 0, visibility: "visible"}, revealAppendedDelay: 300, lastSort: {}, lastFilter: v, enabled: !0, destroyed: !1, initialized: !1, _animations: [], _transitions: [], _isMovementCanceled: !1, styleQueue: []}, E.Point = A, E._getItemTransformString = function (a, b) {
        return s ? "translate3d(" + a.x + "px, " + a.y + "px, 0) scale3d(" + b + ", " + b + ", 1)" : "translate(" + a.x + "px, " + a.y + "px) scale(" + b + ")"
    }, E._getNumberStyle = function (b, c, d) {
        if (t) {
            d = d || z(b, null);
            var e = E._getFloat(d[c]);
            return B || "width" !== c ? B || "height" !== c || (e += E._getFloat(d.paddingTop) + E._getFloat(d.paddingBottom) + E._getFloat(d.borderTopWidth) + E._getFloat(d.borderBottomWidth)) : e += E._getFloat(d.paddingLeft) + E._getFloat(d.paddingRight) + E._getFloat(d.borderLeftWidth) + E._getFloat(d.borderRightWidth), e
        }
        return E._getFloat(a(b).css(c))
    }, E._getFloat = function (a) {
        return j(parseFloat(a))
    }, E._getOuterWidth = function (a, b) {
        var c = z(a, null), d = E._getNumberStyle(a, "width", c);
        if (b) {
            var e = E._getNumberStyle(a, "marginLeft", c), f = E._getNumberStyle(a, "marginRight", c);
            d += e + f
        }
        return d
    }, E._getOuterHeight = function (a, b) {
        var c = z(a, null), d = E._getNumberStyle(a, "height", c);
        if (b) {
            var e = E._getNumberStyle(a, "marginTop", c), f = E._getNumberStyle(a, "marginBottom", c);
            d += e + f
        }
        return d
    }, E._skipTransition = function (a, b, c) {
        var d = a.style[n];
        a.style[n] = "0ms", b.call(c);
        var e = a.offsetWidth;
        e = null, a.style[n] = d
    }, E.prototype._init = function () {
        this.$items = this._getItems(), this.sizer = this._getElementOption(this.sizer), this.sizer && (this.useSizer = !0), this.$el.addClass(E.ClassName.BASE), this._initItems(), D.on("resize." + u + "." + this.unique, this._getResizeFunction());
        var a = this.$el.css(["position", "overflow"]), b = E._getOuterWidth(this.element);
        this._validateStyles(a), this._setColumns(b), this.shuffle(this.group, this.initialSort), this.supported && g(function () {
            this._setTransitions(), this.element.style[l] = "height " + this.speed + "ms " + this.easing
        }, this)
    }, E.prototype._getResizeFunction = function () {
        var b = a.proxy(this._onResize, this);
        return this.throttle ? this.throttle(b, this.throttleTime) : b
    }, E.prototype._getElementOption = function (a) {
        return"string" == typeof a ? this.$el.find(a)[0] || null : a && a.nodeType && 1 === a.nodeType ? a : a && a.jquery ? a[0] : null
    }, E.prototype._validateStyles = function (a) {
        "static" === a.position && (this.element.style.position = "relative"), "hidden" !== a.overflow && (this.element.style.overflow = "hidden")
    }, E.prototype._filter = function (a, b) {
        a = a || this.lastFilter, b = b || this.$items;
        var c = this._getFilteredSets(a, b);
        return this._toggleFilterClasses(c.filtered, c.concealed), this.lastFilter = a, "string" == typeof a && (this.group = a), c.filtered
    }, E.prototype._getFilteredSets = function (b, c) {
        var d = a(), e = a();
        return b === v ? d = c : f(c, function (c) {
            var f = a(c);
            this._doesPassFilter(b, f) ? d = d.add(f) : e = e.add(f)
        }, this), {filtered: d, concealed: e}
    }, E.prototype._doesPassFilter = function (b, c) {
        if (a.isFunction(b))
            return b.call(c[0], c, this);
        var d = c.data(w), e = this.delimeter && !a.isArray(d) ? d.split(this.delimeter) : d;
        return a.inArray(b, e) > -1
    }, E.prototype._toggleFilterClasses = function (a, b) {
        a.removeClass(E.ClassName.CONCEALED).addClass(E.ClassName.FILTERED), b.removeClass(E.ClassName.FILTERED).addClass(E.ClassName.CONCEALED)
    }, E.prototype._initItems = function (a) {
        a = a || this.$items, a.addClass([E.ClassName.SHUFFLE_ITEM, E.ClassName.FILTERED].join(" ")), a.css(this.itemCss).data("point", new A).data("scale", x)
    }, E.prototype._updateItemCount = function () {
        this.visibleItems = this._getFilteredItems().length
    }, E.prototype._setTransition = function (a) {
        a.style[l] = q + " " + this.speed + "ms " + this.easing + ", opacity " + this.speed + "ms " + this.easing
    }, E.prototype._setTransitions = function (a) {
        a = a || this.$items, f(a, function (a) {
            this._setTransition(a)
        }, this)
    }, E.prototype._setSequentialDelay = function (a) {
        this.supported && f(a, function (a, b) {
            a.style[m] = "0ms," + (b + 1) * this.sequentialFadeDelay + "ms"
        }, this)
    }, E.prototype._getItems = function () {
        return this.$el.children(this.itemSelector)
    }, E.prototype._getFilteredItems = function () {
        return this.$items.filter("." + E.ClassName.FILTERED)
    }, E.prototype._getConcealedItems = function () {
        return this.$items.filter("." + E.ClassName.CONCEALED)
    }, E.prototype._getColumnSize = function (b, c) {
        var d;
        return d = a.isFunction(this.columnWidth) ? this.columnWidth(b) : this.useSizer ? E._getOuterWidth(this.sizer) : this.columnWidth ? this.columnWidth : this.$items.length > 0 ? E._getOuterWidth(this.$items[0], !0) : b, 0 === d && (d = b), d + c
    }, E.prototype._getGutterSize = function (b) {
        var c;
        return c = a.isFunction(this.gutterWidth) ? this.gutterWidth(b) : this.useSizer ? E._getNumberStyle(this.sizer, "marginLeft") : this.gutterWidth
    }, E.prototype._setColumns = function (a) {
        var b = a || E._getOuterWidth(this.element), c = this._getGutterSize(b), d = this._getColumnSize(b, c), e = (b + c) / d;
        Math.abs(Math.round(e) - e) < this.columnThreshold && (e = Math.round(e)), this.cols = Math.max(Math.floor(e), 1), this.containerWidth = b, this.colWidth = d
    }, E.prototype._setContainerSize = function () {
        this.$el.css("height", this._getContainerSize())
    }, E.prototype._getContainerSize = function () {
        return h(this.positions)
    }, E.prototype._fire = function (a, b) {
        this.$el.trigger(a + "." + u, b && b.length ? b : [this])
    }, E.prototype._resetCols = function () {
        var a = this.cols;
        for (this.positions = []; a--; )
            this.positions.push(0)
    }, E.prototype._layout = function (a, b) {
        f(a, function (a) {
            this._layoutItem(a, !!b)
        }, this), this._processStyleQueue(), this._setContainerSize()
    }, E.prototype._layoutItem = function (b, c) {
        var d = a(b), e = d.data(), f = e.point, g = e.scale, h = {width: E._getOuterWidth(b, !0), height: E._getOuterHeight(b, !0)}, i = this._getItemPosition(h);
        A.equals(f, i) && g === x || (e.point = i, e.scale = x, this.styleQueue.push({$item: d, point: i, scale: x, opacity: c ? 0 : 1, skipTransition: c || 0 === this.speed, callfront: function () {
                c || d.css("visibility", "visible")
            }, callback: function () {
                c && d.css("visibility", "hidden")
            }}))
    }, E.prototype._getItemPosition = function (a) {
        for (var b = this._getColumnSpan(a.width, this.colWidth, this.cols), c = this._getColumnSet(b, this.cols), d = this._getShortColumn(c, this.buffer), e = new A(Math.round(this.colWidth * d), Math.round(c[d])), f = c[d] + a.height, g = this.cols + 1 - c.length, h = 0; g > h; h++)
            this.positions[d + h] = f;
        return e
    }, E.prototype._getColumnSpan = function (a, b, c) {
        var d = a / b;
        return Math.abs(Math.round(d) - d) < this.columnThreshold && (d = Math.round(d)), Math.min(Math.ceil(d), c)
    }, E.prototype._getColumnSet = function (a, b) {
        if (1 === a)
            return this.positions;
        for (var c = b + 1 - a, d = [], e = 0; c > e; e++)
            d[e] = h(this.positions.slice(e, e + a));
        return d
    }, E.prototype._getShortColumn = function (a, b) {
        for (var c = i(a), d = 0, e = a.length; e > d; d++)
            if (a[d] >= c - b && a[d] <= c + b)
                return d;
        return 0
    }, E.prototype._shrink = function (b) {
        var c = b || this._getConcealedItems();
        f(c, function (b) {
            var c = a(b), d = c.data();
            d.scale !== y && (d.scale = y, this.styleQueue.push({$item: c, point: d.point, scale: y, opacity: 0, callback: function () {
                    c.css("visibility", "hidden")
                }}))
        }, this)
    }, E.prototype._onResize = function () {
        if (this.enabled && !this.destroyed) {
            var a = E._getOuterWidth(this.element);
            a !== this.containerWidth && this.update()
        }
    }, E.prototype._getStylesForTransition = function (a) {
        var b = {opacity: a.opacity};
        return this.supported ? b[p] = E._getItemTransformString(a.point, a.scale) : (b.left = a.point.x, b.top = a.point.y), b
    }, E.prototype._transition = function (b) {
        var c = this._getStylesForTransition(b);
        this._startItemAnimation(b.$item, c, b.callfront || a.noop, b.callback || a.noop)
    }, E.prototype._startItemAnimation = function (b, c, d, e) {
        function f(b) {
            b.target === b.currentTarget && (a(b.target).off(o, f), g._removeTransitionReference(h), e())
        }
        var g = this, h = {$element: b, handler: f};
        if (d(), !this.initialized)
            return b.css(c), void e();
        if (this.supported)
            b.css(c), b.on(o, f), this._transitions.push(h);
        else {
            var i = b.stop(!0).animate(c, this.speed, "swing", e);
            this._animations.push(i.promise())
        }
    }, E.prototype._processStyleQueue = function (b) {
        this.isTransitioning && this._cancelMovement();
        var c = a();
        f(this.styleQueue, function (a) {
            a.skipTransition ? this._styleImmediately(a) : (c = c.add(a.$item), this._transition(a))
        }, this), c.length > 0 && this.initialized && this.speed > 0 ? (this.isTransitioning = !0, this.supported ? this._whenCollectionDone(c, o, this._movementFinished) : this._whenAnimationsDone(this._movementFinished)) : b || g(this._layoutEnd, this), this.styleQueue.length = 0
    }, E.prototype._cancelMovement = function () {
        this.supported ? f(this._transitions, function (a) {
            a.$element.off(o, a.handler)
        }) : (this._isMovementCanceled = !0, this.$items.stop(!0), this._isMovementCanceled = !1), this._transitions.length = 0, this.isTransitioning = !1
    }, E.prototype._removeTransitionReference = function (b) {
        var c = a.inArray(b, this._transitions);
        c > -1 && this._transitions.splice(c, 1)
    }, E.prototype._styleImmediately = function (a) {
        E._skipTransition(a.$item[0], function () {
            a.$item.css(this._getStylesForTransition(a))
        }, this)
    }, E.prototype._movementFinished = function () {
        this.isTransitioning = !1, this._layoutEnd()
    }, E.prototype._layoutEnd = function () {
        this._fire(E.EventType.LAYOUT)
    }, E.prototype._addItems = function (a, b, c) {
        this._initItems(a), this._setTransitions(a), this.$items = this._getItems(), this._shrink(a), f(this.styleQueue, function (a) {
            a.skipTransition = !0
        }), this._processStyleQueue(!0), b ? this._addItemsToEnd(a, c) : this.shuffle(this.lastFilter)
    }, E.prototype._addItemsToEnd = function (a, b) {
        var c = this._filter(null, a), d = c.get();
        this._updateItemCount(), this._layout(d, !0), b && this.supported && this._setSequentialDelay(d), this._revealAppended(d)
    }, E.prototype._revealAppended = function (b) {
        g(function () {
            f(b, function (b) {
                var c = a(b);
                this._transition({$item: c, opacity: 1, point: c.data("point"), scale: x})
            }, this), this._whenCollectionDone(a(b), o, function () {
                a(b).css(m, "0ms"), this._movementFinished()
            })
        }, this, this.revealAppendedDelay)
    }, E.prototype._whenCollectionDone = function (b, c, d) {
        function e(b) {
            b.target === b.currentTarget && (a(b.target).off(c, e), f++, f === g && (h._removeTransitionReference(i), d.call(h)))
        }
        var f = 0, g = b.length, h = this, i = {$element: b, handler: e};
        b.on(c, e), this._transitions.push(i)
    }, E.prototype._whenAnimationsDone = function (b) {
        a.when.apply(null, this._animations).always(a.proxy(function () {
            this._animations.length = 0, this._isMovementCanceled || b.call(this)
        }, this))
    }, E.prototype.shuffle = function (a, b) {
        this.enabled && (a || (a = v), this._filter(a), this._updateItemCount(), this._shrink(), this.sort(b))
    }, E.prototype.sort = function (a) {
        if (this.enabled) {
            this._resetCols();
            var b = a || this.lastSort, c = this._getFilteredItems().sorted(b);
            this._layout(c), this.lastSort = b
        }
    }, E.prototype.update = function (a) {
        this.enabled && (a || this._setColumns(), this.sort())
    }, E.prototype.layout = function () {
        this.update(!0)
    }, E.prototype.appended = function (a, b, c) {
        this._addItems(a, b === !0, c !== !1)
    }, E.prototype.disable = function () {
        this.enabled = !1
    }, E.prototype.enable = function (a) {
        this.enabled = !0, a !== !1 && this.update()
    }, E.prototype.remove = function (b) {
        function c() {
            b.remove(), this.$items = this._getItems(), this._updateItemCount(), this._fire(E.EventType.REMOVED, [b, this]), b = null
        }
        b.length && b.jquery && (this._toggleFilterClasses(a(), b), this._shrink(b), this.sort(), this.$el.one(E.EventType.LAYOUT + "." + u, a.proxy(c, this)))
    }, E.prototype.destroy = function () {
        D.off("." + this.unique), this.$el.removeClass(u).removeAttr("style").removeData(u), this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([E.ClassName.CONCEALED, E.ClassName.FILTERED, E.ClassName.SHUFFLE_ITEM].join(" ")), this.$items = null, this.$el = null, this.sizer = null, this.element = null, this._transitions = null, this.destroyed = !0
    }, a.fn.shuffle = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var d = a(this), e = d.data(u);
            e ? "string" == typeof b && e[b] && e[b].apply(e, c) : (e = new E(this, b), d.data(u, e))
        })
    }, a.fn.sorted = function (b) {
        var d = a.extend({}, a.fn.sorted.defaults, b), e = this.get(), f = !1;
        return e.length ? d.randomize ? k(e) : (a.isFunction(d.by) && e.sort(function (b, e) {
            if (f)
                return 0;
            var g = d.by(a(b)), h = d.by(a(e));
            return g === c && h === c ? (f = !0, 0) : h > g || "sortFirst" === g || "sortLast" === h ? -1 : g > h || "sortLast" === g || "sortFirst" === h ? 1 : 0
        }), f ? this.get() : (d.reverse && e.reverse(), e)) : []
    }, a.fn.sorted.defaults = {reverse: !1, by: null, randomize: !1}, E
});
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
    var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () {
    }, u = !!window.jQuery, v = a(window), w = function (a, c) {
        b.ev.on(o + a + p, c)
    }, x = function (b, c, d, e) {
        var f = document.createElement("div");
        return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    }, y = function (c, d) {
        b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, z = function (c) {
        return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
    }, A = function () {
        a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
    }, B = function () {
        var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== a.transition)
            return!0;
        for (; b.length; )
            if (b.pop() + "Transition"in a)
                return!0;
        return!1
    };
    t.prototype = {constructor: t, init: function () {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        }, open: function (c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else
                b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen)
                return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY}) : b.wrap.css({top: v.scrollTop(), position: "absolute"}), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({height: d.height(), position: "absolute"}), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function () {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(), n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        }, close: function () {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
                b._close()
            }, b.st.removalDelay)) : b._close())
        }, _close: function () {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {marginRight: ""};
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        }, updateSize: function (a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else
                b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        }, updateItemHTML: function () {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        }, appendContent: function (a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        }, parseEl: function (c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {el: a(e)} : (d = e.type, e = {data: e, src: e.src}), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        }, addGroup: function (a, c) {
            var d = function (d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        }, _openClick: function (c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b))
                            return!0
                    } else if (v.width() < g)
                        return!0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        }, updateStatus: function (a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {status: a, text: d};
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        }, _checkIfClose: function (c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick;
                if (d && e)
                    return!0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0])
                    return!0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d)
                        return!0
                } else if (e && a.contains(document, c))
                    return!0;
                return!1
            }
        }, _addClassToMFP: function (a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        }, _removeClassFromMFP: function (a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        }, _hasScrollBar: function (a) {
            return(b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        }, _setFocus: function () {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        }, _onFocusIn: function (c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        }, _parseMarkup: function (b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
                if (void 0 === d || d === !1)
                    return!0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else
                    b.find(p + "-" + c).html(d)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }}, a.magnificPopup = {instance: null, proto: t.prototype, modules: [], open: function (b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        }, close: function () {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        }, registerModule: function (b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        }, defaults: {disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0}}, a.fn.magnificPopup = function (c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({mfpEl: e}, d, f)
            } else
                b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else
            c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline", G = function () {
        E && (D.after(E.addClass(C)).detach(), E = null)
    };
    a.magnificPopup.registerModule(F, {options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"}, proto: {initInline: function () {
                b.types.push(F), w(h + "." + F, function () {
                    G()
                })
            }, getInline: function (c, d) {
                if (G(), c.src) {
                    var e = b.st.inline, f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else
                        b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }}});
    var H, I = "ajax", J = function () {
        H && a(document.body).removeClass(H)
    }, K = function () {
        J(), b.req && b.req.abort()
    };
    a.magnificPopup.registerModule(I, {options: {settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.'}, proto: {initAjax: function () {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            }, getAjax: function (c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({url: c.src, success: function (d, e, f) {
                        var g = {data: d, xhr: f};
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    }, error: function () {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }}, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }}});
    var L, M = function (c) {
        if (c.data && void 0 !== c.data.title)
            return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d))
                return d.call(b, c);
            if (c.el)
                return c.el.attr(d) || ""
        }
        return""
    };
    a.magnificPopup.registerModule("image", {options: {markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.'}, proto: {initImage: function () {
                var c = b.st.image, d = ".image";
                b.types.push("image"), w(m + d, function () {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function () {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            }, resizeImage: function () {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            }, _onImageHasSize: function (a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            }, findImageSize: function (a) {
                var c = 0, d = a.img[0], e = function (f) {
                    L && clearInterval(L), L = setInterval(function () {
                        return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                    }, f)
                };
                e(1)
            }, getImage: function (c, d) {
                var e = 0, f = function () {
                    c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                }, g = function () {
                    c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                }, h = b.st.image, i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {title: M(c), img_replaceWith: c.img}, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }}});
    var N, O = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {options: {enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) {
                return a.is("img") ? a : a.find("img")
            }}, proto: {initZoom: function () {
                var a, c = b.st.zoom, d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration, j = function (a) {
                        var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = {position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden"}, f = "transition";
                        return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                    }, k = function () {
                        b.content.css("visibility", "visible")
                    };
                    w("BuildControls" + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a)
                                return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                                f.css(b._getOffset(!0)), e = setTimeout(function () {
                                    k(), setTimeout(function () {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function () {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a)
                                    return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function () {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            }, _allowZoom: function () {
                return"image" === b.currItem.type
            }, _getItemToZoom: function () {
                return b.currItem.hasSize ? b.currItem.img : !1
            }, _getOffset: function (c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f};
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }}});
    var P = "iframe", Q = "//about:blank", R = function (a) {
        if (b.currTemplate[P]) {
            var c = b.currTemplate[P].find("iframe");
            c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
        }
    };
    a.magnificPopup.registerModule(P, {options: {markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: {youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"}, vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"}, gmaps: {index: "//maps.google.", src: "%id%&output=embed"}}}, proto: {initIframe: function () {
                b.types.push(P), w("BeforeChange", function (a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function () {
                    R()
                })
            }, getIframe: function (c, d) {
                var e = c.src, f = b.st.iframe;
                a.each(f.patterns, function () {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }}});
    var S = function (a) {
        var c = b.items.length;
        return a > c - 1 ? a - c : 0 > a ? c + a : a
    }, T = function (a, b, c) {
        return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
    a.magnificPopup.registerModule("gallery", {options: {enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%"}, proto: {initGallery: function () {
                var c = b.st.gallery, e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function (a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function (a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function (a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function () {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function () {
                            b.prev()
                        }), f.click(function () {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function () {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function () {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            }, next: function () {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            }, prev: function () {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            }, goTo: function (a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            }, preloadNearbyImages: function () {
                var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction?e:d); a++)
                    b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction?d:e); a++)
                    b._preloadItem(b.index - a)
            }, _preloadItem: function (c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
                        d.hasSize = !0
                    }).on("error.mfploader", function () {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }}});
    var U = "retina";
    a.magnificPopup.registerModule(U, {options: {replaceSrc: function (a) {
                return a.src.replace(/\.\w+$/, function (a) {
                    return"@2x" + a
                })
            }, ratio: 1}, proto: {initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina, c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
                        b.img.css({"max-width": b.img[0].naturalWidth / c, width: "100%"})
                    }), w("ElementParse." + U, function (b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }}}), A()
});
(function ($) {
    "use strict";
    var body = $('body');
    function imageCarousel() {
        $('.portfolio-page-carousel').each(function () {
            $(this).imagesLoaded(function () {
                $('.portfolio-page-carousel').owlCarousel({smartSpeed: 1200, items: 1, loop: !0, dots: !0, nav: !0, navText: !1, autoHeight: !0, margin: 10})
            })
        })
    }
    function ajaxLoader() {
        var ajaxLoadedContent = $('#page-ajax-loaded');
        function showContent() {
            ajaxLoadedContent.removeClass('fadeOutLeft closed');
            ajaxLoadedContent.show();
            $('body').addClass('ajax-page-visible')
        }
        function hideContent() {
            $('#page-ajax-loaded').addClass('fadeOutLeft closed');
            $('body').removeClass('ajax-page-visible');
            setTimeout(function () {
                $('#page-ajax-loaded.closed').html('');
                ajaxLoadedContent.hide();
                $('#page-ajax-loaded').append('<div class="preloader-portfolio"><div class="preloader-animation"><div class="preloader-spinner"></div></div></div></div>')
            }, 500)
        }
        $(document).on("click", ".site-auto-menu, #portfolio-page-close-button", function (e) {
            e.preventDefault();
            hideContent()
        }).on("click", ".ajax-page-load", function () {
            var toLoad = $(this).attr('href') + '?ajax=true';
            showContent();
            ajaxLoadedContent.load(toLoad, function () {
                imageCarousel();
                var $gallery_container = $("#portfolio-gallery-grid");
                $gallery_container.imagesLoaded(function () {
                    $gallery_container.masonry()
                });
                $('.portfolio-page-wrapper .portfolio-grid').each(function () {
                    $(this).magnificPopup({delegate: 'a.gallery-lightbox', type: 'image', gallery: {enabled: !0}})
                });
                lazyVideo()
            });
            return!1
        })
    }
    function lazyVideo() {
        var youtube = $('.embed-youtube-video'), vimeo = $('.embed-vimeo-video');
        youtube.each(function () {
            var video_wrap = $(this), id = $(this).attr('data-embed'), id = id.split('youtube.com/embed/')[1];
            var thumb_url = "//img.youtube.com/vi/" + id + "/0.jpg";
            $('<img width="100%" src="' + thumb_url + '" />').appendTo($(this));
            $(this).on("click", "div.play-button", function (e) {
                var $video_iframe = $('<iframe class="embed-responsive-item" src="//www.youtube.com/embed/' + id + '?rel=0&showinfo=0&autoplay=1&output=embed" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                $video_iframe.appendTo(video_wrap);
                $(this).hide()
            })
        });
        vimeo.each(function () {
            var video_wrap = $(this), id = $(this).attr('data-embed'), id = id.split('vimeo.com/video/')[1];
            $('<img class="vimeo-thumb" width="100%" src="" />').appendTo($(this));
            $.getJSON('https://www.vimeo.com/api/v2/video/' + id + '.json?callback=?', {format: "json"}, function (data) {
                video_wrap.children(".vimeo-thumb").attr('src', data[0].thumbnail_large)
            });
            $(this).on("click", "div.play-button", function (e) {
                var $video_iframe = $('<iframe class="embed-responsive-item" src="//player.vimeo.com/video/' + id + '?autoplay=1&loop=1&autopause=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
                $video_iframe.appendTo(video_wrap);
                $(this).hide()
            })
        })
    }
    $(function () {
        $('.contact-form').each(function () {
            var contact_form_id = $(this).attr('id'), contact_form = $('#' + contact_form_id + '.contact-form');
            contact_form.validator();
            contact_form.on('submit', function (e) {
                if (!e.isDefaultPrevented()) {
                    $.ajax({type: "POST", url: ajaxurl, data: $(this).serialize() + '&action=leven_contact_action', success: function (data) {
                            var result = JSON.parse(data);
                            var messageAlert = 'alert-' + result.type;
                            var messageText = result.message;
                            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                            if (messageAlert && messageText) {
                                contact_form.find('.messages').html(alertBox);
                                if (messageAlert == "alert-success") {
                                    $('.contact-form')[0].reset()
                                }
                            }
                        }, });
                    return!1
                }
            })
        })
    });
    function portfolio_init() {
        $('.portfolio-content').each(function () {
            var portfolio_grid_container = $(this), portfolio_grid_container_id = $(this).attr('id'), portfolio_grid = $('#' + portfolio_grid_container_id + ' .portfolio-grid'), portfolio_filter = $('#' + portfolio_grid_container_id + ' .portfolio-filters'), portfolio_filter_item = $('#' + portfolio_grid_container_id + ' .portfolio-filters .filter');
            if (portfolio_grid) {
                portfolio_grid.shuffle({speed: 450, itemSelector: 'figure'});
                $('.site-auto-menu').on("click", "a", function (e) {
                    portfolio_grid.shuffle('update')
                });
                portfolio_filter.on("click", ".filter", function (e) {
                    portfolio_grid.shuffle('update');
                    e.preventDefault();
                    portfolio_filter_item.parent().removeClass('active');
                    $(this).parent().addClass('active');
                    portfolio_grid.shuffle('shuffle', $(this).attr('data-group'))
                })
            }
        })
    }
    function animateLayout() {
        var windowWidth = $(window).width(), animatedContainer = '', blogSidebar = $(".blog-sidebar"), animateType = $('#page_container').attr('data-animation')
        if (windowWidth > 991) {
            animatedContainer = $(".page-container")
        } else {
            animatedContainer = $(".site-main")
        }
        animatedContainer.addClass("animated " + animateType);
        $('.page-scroll').addClass('add-prespective');
        animatedContainer.addClass('transform3d');
        setTimeout(function () {
            blogSidebar.removeClass("hidden-sidebar");
            $('.page-scroll').removeClass('add-prespective');
            animatedContainer.removeClass('transform3d')
        }, 1000)
    }
    function scrollTop() {
        if ($(body).scrollTop() > 150) {
            $('.lmpixels-scroll-to-top').removeClass('hidden-btn')
        } else {
            $('.lmpixels-scroll-to-top').addClass('hidden-btn')
        }
    }
    $(window).on('load', function () {
        $(".preloader").fadeOut(800, "linear");
        animateLayout()
    });
    $(document).on('ready', function () {
        var movementStrength = 15;
        var height = movementStrength / $(document).height();
        var width = movementStrength / $(document).width();
        $("body").on('mousemove', function (e) {
            var pageX = e.pageX - ($(document).width() / 2), pageY = e.pageY - ($(document).height() / 2), newvalueX = width * pageX * -1, newvalueY = height * pageY * -1;
            if ($('.page-container').hasClass('bg-move-effect')) {
                var elements = $('.home-photo .hp-inner:not(.without-move), .lm-animated-bg')
            } else {
                var elements = $('.home-photo .hp-inner:not(.without-move)')
            }
            elements.addClass('transition');
            elements.css({"background-position": "calc( 50% + " + newvalueX + "px ) calc( 50% + " + newvalueY + "px )", });
            setTimeout(function () {
                elements.removeClass('transition')
            }, 300)
        }).scroll(function () {
            scrollTop()
        });
        var $portfolio_container = $(".portfolio-grid"), $gallery_container = $("#portfolio-gallery-grid");
        $gallery_container.imagesLoaded(function () {
            $gallery_container.masonry()
        });
        $portfolio_container.imagesLoaded(function () {
            portfolio_init(this)
        });
        imageCarousel();
        var $container = $(".blog-masonry");
        $container.imagesLoaded(function () {
            $container.masonry({itemSelector: '.item', resize: !1})
        });
        $('.menu-toggle').on("click", function () {
            $('.site-nav').addClass('animate');
            $('.site-nav').toggleClass('mobile-menu-hide')
        });
        $('.text-rotation').owlCarousel({loop: !0, dots: !1, nav: !1, margin: 10, items: 1, autoplay: !0, autoplayHoverPause: !1, autoplayTimeout: 3800, animateOut: 'fadeOut', animateIn: 'fadeIn'});
        body.magnificPopup({fixedContentPos: !1, delegate: 'a.lightbox', type: 'image', removalDelay: 300, mainClass: 'mfp-fade', image: {titleSrc: 'title', gallery: {enabled: !0}, }, iframe: {markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '<div class="mfp-title mfp-bottom-iframe-title"></div>' + '</div>', patterns: {youtube: {index: 'youtube.com/', id: null, src: '%id%?autoplay=1'}, vimeo: {index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1'}, gmaps: {index: '//maps.google.', src: '%id%&output=embed'}}, srcAction: 'iframe_src', }, callbacks: {markupParse: function (template, values, item) {
                    values.title = item.el.attr('title')
                }}, });
        $('.ajax-page-load-link').magnificPopup({type: 'ajax', removalDelay: 300, mainClass: 'mfp-fade', gallery: {enabled: !0}, });
        $('.portfolio-page-wrapper .portfolio-grid').each(function () {
            $(this).magnificPopup({delegate: 'a.gallery-lightbox', type: 'image', gallery: {enabled: !0}})
        });
        $('.form-control').val('');
        $(".form-control").on("focusin", function () {
            $(this).parent('.form-group').addClass('form-group-focus')
        });
        $(".form-control").on("focusout", function () {
            if ($(this).val().length === 0) {
                $(this).parent('.form-group').removeClass('form-group-focus')
            }
        });
        $('body').append('<div id="page-ajax-loaded" class="page-portfolio-loaded animated fadeInLeft" style="display: none"><div class="preloader-portfolio"><div class="preloader-animation"><div class="preloader-spinner"></div></div></div></div>');
        ajaxLoader();
        $('.sidebar-toggle').on("click", function () {
            $('#blog-sidebar').toggleClass('open');
            $(this).toggleClass('open')
        });
        lazyVideo();
        $('.lmpixels-scroll-to-top').click(function () {
            $('body,html').animate({scrollTop: 0}, 400);
            return!1
        });
        scrollTop()
    })
})(jQuery);
var ajaxurl = "https://lmpixels.com/wp/leven-wp/dark/wp-admin/admin-ajax.php";
/*! formstone v0.8.35 [core.js] 2015-12-28 | MIT License | formstone.it */
var Formstone = window.Formstone = function (a, b, c) {
    "use strict";
    function d(a) {
        m.Plugins[a].initialized || (m.Plugins[a].methods._setup.call(c), m.Plugins[a].initialized = !0)
    }
    function e(a, b, c, d) {
        var e, f = {raw: {}};
        d = d || {};
        for (e in d)
            d.hasOwnProperty(e) && ("classes" === a ? (f.raw[d[e]] = b + "-" + d[e], f[d[e]] = "." + b + "-" + d[e]) : (f.raw[e] = d[e], f[e] = d[e] + "." + b));
        for (e in c)
            c.hasOwnProperty(e) && ("classes" === a ? (f.raw[e] = c[e].replace(/{ns}/g, b), f[e] = c[e].replace(/{ns}/g, "." + b)) : (f.raw[e] = c[e].replace(/.{ns}/g, ""), f[e] = c[e].replace(/{ns}/g, b)));
        return f
    }
    function f() {
        var a, b = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "otransitionend", transition: "transitionend"}, d = ["transition", "-webkit-transition"], e = {transform: "transform", MozTransform: "-moz-transform", OTransform: "-o-transform", msTransform: "-ms-transform", webkitTransform: "-webkit-transform"}, f = "transitionend", g = "", h = "", i = c.createElement("div");
        for (a in b)
            if (b.hasOwnProperty(a) && a in i.style) {
                f = b[a], m.support.transition = !0;
                break
            }
        p.transitionEnd = f + ".{ns}";
        for (a in d)
            if (d.hasOwnProperty(a) && d[a]in i.style) {
                g = d[a];
                break
            }
        m.transition = g;
        for (a in e)
            if (e.hasOwnProperty(a) && e[a]in i.style) {
                m.support.transform = !0, h = e[a];
                break
            }
        m.transform = h
    }
    function g() {
        m.windowWidth = m.$window.width(), m.windowHeight = m.$window.height(), q = l.startTimer(q, r, h)
    }
    function h() {
        for (var a in m.ResizeHandlers)
            m.ResizeHandlers.hasOwnProperty(a) && m.ResizeHandlers[a].callback.call(b, m.windowWidth, m.windowHeight)
    }
    function i() {
        if (m.support.raf) {
            m.window.requestAnimationFrame(i);
            for (var a in m.RAFHandlers)
                m.RAFHandlers.hasOwnProperty(a) && m.RAFHandlers[a].callback.call(b)
        }
    }
    function j(a, b) {
        return parseInt(a.priority) - parseInt(b.priority)
    }
    var k = function () {
        this.Version = "0.8.35", this.Plugins = {}, this.DontConflict = !1, this.Conflicts = {fn: {}}, this.ResizeHandlers = [], this.RAFHandlers = [], this.window = b, this.$window = a(b), this.document = c, this.$document = a(c), this.$body = null, this.windowWidth = 0, this.windowHeight = 0, this.fallbackWidth = 1024, this.fallbackHeight = 768, this.userAgent = b.navigator.userAgent || b.navigator.vendor || b.opera, this.isFirefox = /Firefox/i.test(this.userAgent), this.isChrome = /Chrome/i.test(this.userAgent), this.isSafari = /Safari/i.test(this.userAgent) && !this.isChrome, this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(this.userAgent), this.isIEMobile = /IEMobile/i.test(this.userAgent), this.isFirefoxMobile = this.isFirefox && this.isMobile, this.transform = null, this.transition = null, this.support = {file: !!(b.File && b.FileList && b.FileReader), history: !!(b.history && b.history.pushState && b.history.replaceState), matchMedia: !(!b.matchMedia && !b.msMatchMedia), pointer: !!b.PointerEvent, raf: !(!b.requestAnimationFrame || !b.cancelAnimationFrame), touch: !!("ontouchstart"in b || b.DocumentTouch && c instanceof b.DocumentTouch), transition: !1, transform: !1}
    }, l = {killEvent: function (a, b) {
            try {
                a.preventDefault(), a.stopPropagation(), b && a.stopImmediatePropagation()
            } catch (c) {
            }
        }, startTimer: function (a, b, c, d) {
            return l.clearTimer(a), d ? setInterval(c, b) : setTimeout(c, b)
        }, clearTimer: function (a, b) {
            a && (b ? clearInterval(a) : clearTimeout(a), a = null)
        }, sortAsc: function (a, b) {
            return parseInt(a, 10) - parseInt(b, 10)
        }, sortDesc: function (a, b) {
            return parseInt(b, 10) - parseInt(a, 10)
        }, decodeEntities: function (a) {
            var b = m.document.createElement("textarea");
            return b.innerHTML = a, b.value
        }, parseQueryString: function (a) {
            for (var b = {}, c = a.slice(a.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) {
                var e = c[d].split("=");
                b[e[0]] = e[1]
            }
            return b
        }}, m = new k, n = a.Deferred(), o = {base: "{ns}", element: "{ns}-element"}, p = {namespace: ".{ns}", beforeUnload: "beforeunload.{ns}", blur: "blur.{ns}", change: "change.{ns}", click: "click.{ns}", dblClick: "dblclick.{ns}", drag: "drag.{ns}", dragEnd: "dragend.{ns}", dragEnter: "dragenter.{ns}", dragLeave: "dragleave.{ns}", dragOver: "dragover.{ns}", dragStart: "dragstart.{ns}", drop: "drop.{ns}", error: "error.{ns}", focus: "focus.{ns}", focusIn: "focusin.{ns}", focusOut: "focusout.{ns}", input: "input.{ns}", keyDown: "keydown.{ns}", keyPress: "keypress.{ns}", keyUp: "keyup.{ns}", load: "load.{ns}", mouseDown: "mousedown.{ns}", mouseEnter: "mouseenter.{ns}", mouseLeave: "mouseleave.{ns}", mouseMove: "mousemove.{ns}", mouseOut: "mouseout.{ns}", mouseOver: "mouseover.{ns}", mouseUp: "mouseup.{ns}", panStart: "panstart.{ns}", pan: "pan.{ns}", panEnd: "panend.{ns}", resize: "resize.{ns}", scaleStart: "scalestart.{ns}", scaleEnd: "scaleend.{ns}", scale: "scale.{ns}", scroll: "scroll.{ns}", select: "select.{ns}", swipe: "swipe.{ns}", touchCancel: "touchcancel.{ns}", touchEnd: "touchend.{ns}", touchLeave: "touchleave.{ns}", touchMove: "touchmove.{ns}", touchStart: "touchstart.{ns}"};
    k.prototype.NoConflict = function () {
        m.DontConflict = !0;
        for (var b in m.Plugins)
            m.Plugins.hasOwnProperty(b) && (a[b] = m.Conflicts[b], a.fn[b] = m.Conflicts.fn[b])
    }, k.prototype.Plugin = function (c, f) {
        return m.Plugins[c] = function (c, d) {
            function f(b) {
                var e, f, g, i = "object" === a.type(b), j = this, k = a();
                for (b = a.extend(!0, {}, d.defaults || {}, i?b:{}), f = 0, g = j.length; g > f; f++)
                    if (e = j.eq(f), !h(e)) {
                        var l = "__" + d.guid++, m = d.classes.raw.base + l, n = e.data(c + "-options"), o = a.extend(!0, {$el: e, guid: l, rawGuid: m, dotGuid: "." + m}, b, "object" === a.type(n) ? n : {});
                        e.addClass(d.classes.raw.element).data(s, o), d.methods._construct.apply(e, [o].concat(Array.prototype.slice.call(arguments, i ? 1 : 0))), k = k.add(e)
                    }
                for (f = 0, g = k.length; g > f; f++)
                    e = k.eq(f), d.methods._postConstruct.apply(e, [h(e)]);
                return j
            }
            function g() {
                d.functions.iterate.apply(this, [d.methods._destruct].concat(Array.prototype.slice.call(arguments, 1))), this.removeClass(d.classes.raw.element).removeData(s)
            }
            function h(a) {
                return a.data(s)
            }
            function i(b) {
                if (this instanceof a) {
                    var c = d.methods[b];
                    return"object" !== a.type(b) && b ? c && 0 !== b.indexOf("_") ? d.functions.iterate.apply(this, [c].concat(Array.prototype.slice.call(arguments, 1))) : this : f.apply(this, arguments)
                }
            }
            function k(c) {
                var e = d.utilities[c] || d.utilities._initialize || !1;
                return e ? e.apply(b, Array.prototype.slice.call(arguments, "object" === a.type(c) ? 0 : 1)) : void 0
            }
            function n(b) {
                d.defaults = a.extend(!0, d.defaults, b || {})
            }
            function q(b) {
                for (var c = this, d = 0, e = c.length; e > d; d++) {
                    var f = c.eq(d), g = h(f) || {};
                    "undefined" !== a.type(g.$el) && b.apply(f, [g].concat(Array.prototype.slice.call(arguments, 1)))
                }
                return c
            }
            var r = "fs-" + c, s = "fs" + c.replace(/(^|\s)([a-z])/g, function (a, b, c) {
                return b + c.toUpperCase()
            });
            return d.initialized = !1, d.priority = d.priority || 10, d.classes = e("classes", r, o, d.classes), d.events = e("events", c, p, d.events), d.functions = a.extend({getData: h, iterate: q}, l, d.functions), d.methods = a.extend(!0, {_setup: a.noop, _construct: a.noop, _postConstruct: a.noop, _destruct: a.noop, _resize: !1, destroy: g}, d.methods), d.utilities = a.extend(!0, {_initialize: !1, _delegate: !1, defaults: n}, d.utilities), d.widget && (m.Conflicts.fn[c] = a.fn[c], a.fn[s] = i, m.DontConflict || (a.fn[c] = a.fn[s])), m.Conflicts[c] = a[c], a[s] = d.utilities._delegate || k, m.DontConflict || (a[c] = a[s]), d.namespace = c, d.namespaceClean = s, d.guid = 0, d.methods._resize && (m.ResizeHandlers.push({namespace: c, priority: d.priority, callback: d.methods._resize}), m.ResizeHandlers.sort(j)), d.methods._raf && (m.RAFHandlers.push({namespace: c, priority: d.priority, callback: d.methods._raf}), m.RAFHandlers.sort(j)), d
        }(c, f), n.then(function () {
            d(c)
        }), m.Plugins[c]
    };
    var q = null, r = 20;
    return m.$window.on("resize.fs", g), g(), i(), a(function () {
        m.$body = a("body"), n.resolve(), m.support.nativeMatchMedia = m.support.matchMedia && !a("html").hasClass("no-matchmedia")
    }), p.clickTouchStart = p.click + " " + p.touchStart, f(), m
}(jQuery, window, document);
/*! formstone v0.8.35 [transition.js] 2015-12-28 | MIT License | formstone.it */
!function (a, b) {
    "use strict";
    function c(a, c) {
        if (c) {
            a.$target = this.find(a.target), a.$check = a.target ? a.$target : this, a.callback = c, a.styles = h(a.$check), a.timer = null;
            var d = a.$check.css(b.transition + "-duration"), f = parseFloat(d);
            b.support.transition && d && f ? this.on(k.transitionEnd, a, e) : a.timer = l.startTimer(a.timer, 50, function () {
                g(a)
            }, !0)
        }
    }
    function d(a) {
        l.clearTimer(a.timer, !0), this.off(k.namespace)
    }
    function e(b) {
        b.stopPropagation(), b.preventDefault();
        var c = b.data, d = b.originalEvent, e = c.target ? c.$target : c.$el;
        c.property && d.propertyName !== c.property || !a(d.target).is(e) || f(c)
    }
    function f(a) {
        a.always || a.$el[j.namespaceClean]("destroy"), a.callback.apply(a.$el)
    }
    function g(a) {
        var b = h(a.$check);
        i(a.styles, b) || f(a), a.styles = b
    }
    function h(b) {
        var c, d, e, f = {};
        if (b instanceof a && (b = b[0]), m.getComputedStyle) {
            c = m.getComputedStyle(b, null);
            for (var g = 0, h = c.length; h > g; g++)
                d = c[g], e = c.getPropertyValue(d), f[d] = e
        } else if (b.currentStyle) {
            c = b.currentStyle;
            for (d in c)
                c[d] && (f[d] = c[d])
        }
        return f
    }
    function i(b, c) {
        if (a.type(b) !== a.type(c))
            return!1;
        for (var d in b)
            if (!b.hasOwnProperty(d) || !c.hasOwnProperty(d) || b[d] !== c[d])
                return!1;
        return!0
    }
    var j = b.Plugin("transition", {widget: !0, defaults: {always: !1, property: null, target: null}, methods: {_construct: c, _destruct: d, resolve: f}}), k = j.events, l = j.functions, m = b.window
}(jQuery, Formstone);
/*! formstone v0.8.35 [background.js] 2015-12-28 | MIT License | formstone.it */
!function (a, b) {
    "use strict";
    function c() {
        y.iterate.call(A, r)
    }
    function d() {
        A = a(v.base)
    }
    function e(b) {
        b.youTubeGuid = 0, b.$container = a('<div class="' + w.container + '"></div>').appendTo(this), this.addClass([w.base, b.customClass].join(" "));
        var c = b.source;
        b.source = null, g(b, c, !0), d()
    }
    function f(a) {
        a.$container.remove(), this.removeClass([w.base, a.customClass].join(" ")).off(x.namespace), d()
    }
    function g(b, c, d) {
        if (c !== b.source) {
            if (b.source = c, b.responsive = !1, b.isYouTube = !1, "object" === a.type(c) && "string" === a.type(c.video)) {
                var e = c.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);
                e && e.length >= 1 && (b.isYouTube = !0, b.videoId = e[1])
            }
            var f = !b.isYouTube && "object" === a.type(c) && (c.hasOwnProperty("mp4") || c.hasOwnProperty("ogg") || c.hasOwnProperty("webm"));
            if (b.video = b.isYouTube || f, b.playing = !1, b.isYouTube)
                b.playerReady = !1, b.posterLoaded = !1, k(b, c, d);
            else if ("object" === a.type(c) && c.hasOwnProperty("poster"))
                j(b, c, d);
            else {
                var g = c;
                if ("object" === a.type(c)) {
                    var l, m = [], n = [];
                    for (l in c)
                        c.hasOwnProperty(l) && n.push(l);
                    n.sort(y.sortAsc);
                    for (l in n)
                        n.hasOwnProperty(l) && m.push({width: parseInt(n[l]), url: c[n[l]], mq: window.matchMedia("(min-width: " + parseInt(n[l]) + "px)")});
                    b.responsive = !0, b.sources = m, g = h(b)
                }
                i(b, g, !1, d)
            }
        } else
            b.$el.trigger(x.loaded)
    }
    function h(a) {
        var c = a.source;
        if (a.responsive) {
            c = a.sources[0].url;
            for (var d in a.sources)
                a.sources.hasOwnProperty(d) && (b.support.nativeMatchMedia ? a.sources[d].mq.matches && (c = a.sources[d].url) : a.sources[d].width < b.fallbackWidth && (c = a.sources[d].url))
        }
        return c
    }
    function i(b, c, d, e) {
        var f = [w.media, w.image, e !== !0 ? w.animated : ""].join(" "), g = a('<div class="' + f + '"><img></div>'), h = g.find("img"), i = c;
        h.one(x.load, function () {
            B && g.addClass(w["native"]).css({backgroundImage: "url('" + i + "')"}), g.fsTransition({property: "opacity"}, function () {
                d || l(b)
            }).css({opacity: 1}), s(b), (!d || e) && b.$el.trigger(x.loaded)
        }).attr("src", i), b.responsive && g.addClass(w.responsive), b.$container.append(g), (h[0].complete || 4 === h[0].readyState) && h.trigger(x.load), b.currentSource = i
    }
    function j(c, d, e) {
        if (c.source && c.source.poster && (i(c, c.source.poster, !0, !0), e = !1), !b.isMobile) {
            var f = [w.media, w.video, e !== !0 ? w.animated : ""].join(" "), g = '<div class="' + f + '">';
            g += "<video", c.loop && (g += " loop"), c.mute && (g += " muted"), g += ">", c.source.webm && (g += '<source src="' + c.source.webm + '" type="video/webm" />'), c.source.mp4 && (g += '<source src="' + c.source.mp4 + '" type="video/mp4" />'), c.source.ogg && (g += '<source src="' + c.source.ogg + '" type="video/ogg" />'), g += "</video>", g += "</div>";
            var h = a(g), j = h.find("video");
            j.one(x.loadedMetaData, function () {
                h.fsTransition({property: "opacity"}, function () {
                    l(c)
                }).css({opacity: 1}), s(c), c.$el.trigger(x.loaded), c.autoPlay && o(c)
            }), c.$container.append(h)
        }
    }
    function k(c, d, e) {
        if (!c.videoId) {
            var f = d.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
            c.videoId = f[1]
        }
        if (c.posterLoaded || (c.source.poster || (c.source.poster = "//img.youtube.com/vi/" + c.videoId + "/0.jpg"), c.posterLoaded = !0, i(c, c.source.poster, !0, e), e = !1), !b.isMobile)
            if (a("script[src*='youtube.com/iframe_api']").length || a("head").append('<script src="//www.youtube.com/iframe_api"></script>'), C) {
                var g = c.guid + "_" + c.youTubeGuid++, h = [w.media, w.embed, e !== !0 ? w.animated : ""].join(" "), j = '<div class="' + h + '">';
                j += '<div id="' + g + '"></div>', j += "</div>";
                var k = a(j), m = a.extend(!0, {}, {controls: 0, rel: 0, showinfo: 0, wmode: "transparent", enablejsapi: 1, version: 3, playerapiid: g, loop: c.loop ? 1 : 0, autoplay: 1, origin: z.location.protocol + "//" + z.location.host}, c.youtubeOptions);
                c.$container.append(k), c.player && (c.oldPlayer = c.player, c.player = null), c.player = new z.YT.Player(g, {videoId: c.videoId, playerVars: m, events: {onReady: function () {
                            c.playerReady = !0, c.mute && c.player.mute(), c.autoPlay && c.player.playVideo()
                        }, onStateChange: function (a) {
                            c.playing || a.data !== z.YT.PlayerState.PLAYING ? c.loop && c.playing && a.data === z.YT.PlayerState.ENDED && c.player.playVideo() : (c.playing = !0, c.autoPlay || c.player.pauseVideo(), k.fsTransition({property: "opacity"}, function () {
                                l(c)
                            }).css({opacity: 1}), s(c), c.$el.trigger(x.loaded)), c.$el.find(v.embed).addClass(w.ready)
                        }, onPlaybackQualityChange: function () {
                        }, onPlaybackRateChange: function () {
                        }, onError: function () {
                        }, onApiChange: function () {
                        }}}), s(c)
            } else
                D.push({data: c, source: d})
    }
    function l(a) {
        var b = a.$container.find(v.media);
        b.length >= 1 && (b.not(":last").remove(), a.oldPlayer = null)
    }
    function m(a) {
        var b = a.$container.find(v.media);
        b.length >= 1 && b.fsTransition({property: "opacity"}, function () {
            b.remove(), delete a.source
        }).css({opacity: 0})
    }
    function n(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady)
                a.player.pauseVideo();
            else {
                var b = a.$container.find("video");
                b.length && b[0].pause()
            }
            a.playing = !1
        }
    }
    function o(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady)
                a.player.playVideo();
            else {
                var b = a.$container.find("video");
                b.length && b[0].play()
            }
            a.playing = !0
        }
    }
    function p(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady)
                a.player.mute();
            else {
                var b = a.$container.find("video");
                b.length && (b[0].muted = !0)
            }
            a.playing = !0
        }
        a.mute = !0
    }
    function q(a) {
        if (a.video) {
            if (a.isYouTube && a.playerReady)
                a.player.unMute();
            else {
                var b = a.$container.find("video");
                b.length && (b[0].muted = !1)
            }
            a.playing = !0
        }
        a.mute = !1
    }
    function r(a) {
        if (a.responsive) {
            var b = h(a);
            b !== a.currentSource ? i(a, b, !1, !0) : s(a)
        } else
            s(a)
    }
    function s(a) {
        for (var b = a.$container.find(v.media), c = 0, d = b.length; d > c; c++) {
            var e = b.eq(c), f = a.isYouTube ? "iframe" : e.find("video").length ? "video" : "img", g = e.find(f);
            if (g.length && ("img" !== f || !B)) {
                var h = a.$el.outerWidth(), i = a.$el.outerHeight(), j = t(a, g);
                a.width = j.width, a.height = j.height, a.left = 0, a.top = 0;
                var k = a.isYouTube ? a.embedRatio : a.width / a.height;
                a.height = i, a.width = a.height * k, a.width < h && (a.width = h, a.height = a.width / k), a.left = -(a.width - h) / 2, a.top = -(a.height - i) / 2, e.css({height: a.height, width: a.width, left: a.left, top: a.top})
            }
        }
    }
    function t(b, c) {
        if (b.isYouTube)
            return{height: 500, width: 500 / b.embedRatio};
        if (c.is("img")) {
            var d = c[0];
            if ("undefined" !== a.type(d.naturalHeight))
                return{height: d.naturalHeight, width: d.naturalWidth};
            var e = new Image;
            return e.src = d.src, {height: e.height, width: e.width}
        }
        return{height: c[0].videoHeight, width: c[0].videoWidth}
    }
    var u = b.Plugin("background", {widget: !0, defaults: {autoPlay: !0, customClass: "", embedRatio: 1.777777, loop: !0, mute: !0, source: null, youtubeOptions: {}}, classes: ["container", "media", "animated", "responsive", "native", "fixed", "ready"], events: {loaded: "loaded", ready: "ready", loadedMetaData: "loadedmetadata"}, methods: {_construct: e, _destruct: f, _resize: c, play: o, pause: n, mute: p, unmute: q, resize: s, load: g, unload: m}}), v = u.classes, w = v.raw, x = u.events, y = u.functions, z = b.window, A = [], B = "backgroundSize"in b.document.documentElement.style, C = !1, D = [];
    z.onYouTubeIframeAPIReady = function () {
        C = !0;
        for (var a in D)
            D.hasOwnProperty(a) && k(D[a].data, D[a].source);
        D = []
    }
}(jQuery, Formstone);
jQuery(document).ready(function ($) {
    $('.background-video').background()
});
jQuery(document).ready(function ($) {
    var custom_styles = "";
    function columnStyles() {
        custom_styles = "";
        $('.fw-col-inner').each(function () {
            var paddings = $(this).attr('data-paddings');
            if (typeof paddings != 'undefined' || paddings != '0px 0px 0px 0px') {
                var id = $(this).attr('id'), $custom_style = '#' + id + '{ padding: ' + paddings + '; } ';
                custom_styles += $custom_style
            }
        });
        $('head').append('<style data-styles="leven-theme-columns-css" type="text/css">' + custom_styles + '</style>')
    }
    columnStyles();
    $(this).ajaxComplete(function () {
        $('style[data-styles="leven-theme-columns-css"]').remove().detach();
        columnStyles()
    })
});
(function ($) {
    "use strict";
    $(document).ready(function ($) {
        var custom_styles = "", color = "";
        function skillsStyles() {
            $('.skill-container').each(function () {
                var value = $(this).attr('data-value'), color_value = $(this).attr('data-color');
                if (value >= 101) {
                    value = '100'
                }
                if (typeof value != 'undefined') {
                    var id = $(this).attr('id'), $custom_style = '#' + id + ' .skill-percentage { width: ' + value + '%; } ' + '#' + id + ' > div.skill-percentage { background-color: ' + color_value + '; } ';
                    custom_styles += $custom_style
                }
            });
            $('head').append('<style data-styles="leven-theme-skills-css" type="text/css">' + custom_styles + color + '</style>')
        }
        skillsStyles();
        $(this).ajaxComplete(function () {
            $('style[data-styles="leven-theme-skills-css"]').remove().detach();
            skillsStyles()
        })
    })
})(jQuery);
(function (window, document) {
    'use strict';
    var supportedBrowser = !1, loaded = !1;
    if (document.querySelector) {
        if (window.addEventListener) {
            supportedBrowser = !0
        }
    }
    window.wp = window.wp || {};
    if (!!window.wp.receiveEmbedMessage) {
        return
    }
    window.wp.receiveEmbedMessage = function (e) {
        var data = e.data;
        if (!data) {
            return
        }
        if (!(data.secret || data.message || data.value)) {
            return
        }
        if (/[^a-zA-Z0-9]/.test(data.secret)) {
            return
        }
        var iframes = document.querySelectorAll('iframe[data-secret="' + data.secret + '"]'), blockquotes = document.querySelectorAll('blockquote[data-secret="' + data.secret + '"]'), i, source, height, sourceURL, targetURL;
        for (i = 0; i < blockquotes.length; i++) {
            blockquotes[i].style.display = 'none'
        }
        for (i = 0; i < iframes.length; i++) {
            source = iframes[i];
            if (e.source !== source.contentWindow) {
                continue
            }
            source.removeAttribute('style');
            if ('height' === data.message) {
                height = parseInt(data.value, 10);
                if (height > 1000) {
                    height = 1000
                } else if (~~height < 200) {
                    height = 200
                }
                source.height = height
            }
            if ('link' === data.message) {
                sourceURL = document.createElement('a');
                targetURL = document.createElement('a');
                sourceURL.href = source.getAttribute('src');
                targetURL.href = data.value;
                if (targetURL.host === sourceURL.host) {
                    if (document.activeElement === source) {
                        window.top.location.href = data.value
                    }
                }
            }
        }
    };
    function onLoad() {
        if (loaded) {
            return
        }
        loaded = !0;
        var isIE10 = -1 !== navigator.appVersion.indexOf('MSIE 10'), isIE11 = !!navigator.userAgent.match(/Trident.*rv:11\./), iframes = document.querySelectorAll('iframe.wp-embedded-content'), iframeClone, i, source, secret;
        for (i = 0; i < iframes.length; i++) {
            source = iframes[i];
            if (!source.getAttribute('data-secret')) {
                secret = Math.random().toString(36).substr(2, 10);
                source.src += '#?secret=' + secret;
                source.setAttribute('data-secret', secret)
            }
            if ((isIE10 || isIE11)) {
                iframeClone = source.cloneNode(!0);
                iframeClone.removeAttribute('security');
                source.parentNode.replaceChild(iframeClone, source)
            }
        }
    }
    if (supportedBrowser) {
        window.addEventListener('message', window.wp.receiveEmbedMessage, !1);
        document.addEventListener('DOMContentLoaded', onLoad, !1);
        window.addEventListener('load', onLoad, !1)
    }
})(window, document)