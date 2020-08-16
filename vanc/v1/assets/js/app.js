//* barba.js *//

! function (t, n) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (t = t || self).barba = n()
}(this, (function () {
	function t(t, n) {
		for (var r = 0; r < n.length; r++) {
			var e = n[r];
			e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(t, e.key, e)
		}
	}

	function n(n, r, e) {
		return r && t(n.prototype, r), e && t(n, e), n
	}

	function r() {
		return (r = Object.assign || function (t) {
			for (var n = 1; n < arguments.length; n++) {
				var r = arguments[n];
				for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e])
			}
			return t
		}).apply(this, arguments)
	}

	function e(t, n) {
		t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n
	}

	function i(t) {
		return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function o(t, n) {
		return (o = Object.setPrototypeOf || function (t, n) {
			return t.__proto__ = n, t
		})(t, n)
	}

	function u(t, n, r) {
		return (u = function () {
			if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
			if (Reflect.construct.sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
			} catch (t) {
				return !1
			}
		}() ? Reflect.construct : function (t, n, r) {
			var e = [null];
			e.push.apply(e, n);
			var i = new(Function.bind.apply(t, e));
			return r && o(i, r.prototype), i
		}).apply(null, arguments)
	}

	function f(t) {
		var n = "function" == typeof Map ? new Map : void 0;
		return (f = function (t) {
			if (null === t || -1 === Function.toString.call(t).indexOf("[native code]")) return t;
			if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
			if (void 0 !== n) {
				if (n.has(t)) return n.get(t);
				n.set(t, r)
			}

			function r() {
				return u(t, arguments, i(this).constructor)
			}
			return r.prototype = Object.create(t.prototype, {
				constructor: {
					value: r,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), o(r, t)
		})(t)
	}

	function s(t, n) {
		try {
			var r = t()
		} catch (t) {
			return n(t)
		}
		return r && r.then ? r.then(void 0, n) : r
	}
	"undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
	var c, a = "2.9.7",
		h = function () {};
	! function (t) {
		t[t.off = 0] = "off", t[t.error = 1] = "error", t[t.warning = 2] = "warning", t[t.info = 3] = "info", t[t.debug = 4] = "debug"
	}(c || (c = {}));
	var v = c.off,
		l = function () {
			function t(t) {
				this.t = t
			}
			t.getLevel = function () {
				return v
			}, t.setLevel = function (t) {
				return v = c[t]
			};
			var n = t.prototype;
			return n.error = function () {
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				this.i(console.error, c.error, n)
			}, n.warn = function () {
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				this.i(console.warn, c.warning, n)
			}, n.info = function () {
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				this.i(console.info, c.info, n)
			}, n.debug = function () {
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				this.i(console.log, c.debug, n)
			}, n.i = function (n, r, e) {
				r <= t.getLevel() && n.apply(console, ["[" + this.t + "] "].concat(e))
			}, t
		}(),
		d = O,
		m = E,
		p = g,
		w = x,
		b = T,
		y = "/",
		P = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

	function g(t, n) {
		for (var r, e = [], i = 0, o = 0, u = "", f = n && n.delimiter || y, s = n && n.whitelist || void 0, c = !1; null !== (r = P.exec(t));) {
			var a = r[0],
				h = r[1],
				v = r.index;
			if (u += t.slice(o, v), o = v + a.length, h) u += h[1], c = !0;
			else {
				var l = "",
					d = r[2],
					m = r[3],
					p = r[4],
					w = r[5];
				if (!c && u.length) {
					var b = u.length - 1,
						g = u[b];
					(!s || s.indexOf(g) > -1) && (l = g, u = u.slice(0, b))
				}
				u && (e.push(u), u = "", c = !1);
				var E = m || p,
					x = l || f;
				e.push({
					name: d || i++,
					prefix: l,
					delimiter: x,
					optional: "?" === w || "*" === w,
					repeat: "+" === w || "*" === w,
					pattern: E ? A(E) : "[^" + k(x === f ? x : x + f) + "]+?"
				})
			}
		}
		return (u || o < t.length) && e.push(u + t.substr(o)), e
	}

	function E(t, n) {
		return function (r, e) {
			var i = t.exec(r);
			if (!i) return !1;
			for (var o = i[0], u = i.index, f = {}, s = e && e.decode || decodeURIComponent, c = 1; c < i.length; c++)
				if (void 0 !== i[c]) {
					var a = n[c - 1];
					f[a.name] = a.repeat ? i[c].split(a.delimiter).map((function (t) {
						return s(t, a)
					})) : s(i[c], a)
				}
			return {
				path: o,
				index: u,
				params: f
			}
		}
	}

	function x(t, n) {
		for (var r = new Array(t.length), e = 0; e < t.length; e++) "object" == typeof t[e] && (r[e] = new RegExp("^(?:" + t[e].pattern + ")$", R(n)));
		return function (n, e) {
			for (var i = "", o = e && e.encode || encodeURIComponent, u = !e || !1 !== e.validate, f = 0; f < t.length; f++) {
				var s = t[f];
				if ("string" != typeof s) {
					var c, a = n ? n[s.name] : void 0;
					if (Array.isArray(a)) {
						if (!s.repeat) throw new TypeError('Expected "' + s.name + '" to not repeat, but got array');
						if (0 === a.length) {
							if (s.optional) continue;
							throw new TypeError('Expected "' + s.name + '" to not be empty')
						}
						for (var h = 0; h < a.length; h++) {
							if (c = o(a[h], s), u && !r[f].test(c)) throw new TypeError('Expected all "' + s.name + '" to match "' + s.pattern + '"');
							i += (0 === h ? s.prefix : s.delimiter) + c
						}
					} else if ("string" != typeof a && "number" != typeof a && "boolean" != typeof a) {
						if (!s.optional) throw new TypeError('Expected "' + s.name + '" to be ' + (s.repeat ? "an array" : "a string"))
					} else {
						if (c = o(String(a), s), u && !r[f].test(c)) throw new TypeError('Expected "' + s.name + '" to match "' + s.pattern + '", but got "' + c + '"');
						i += s.prefix + c
					}
				} else i += s
			}
			return i
		}
	}

	function k(t) {
		return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
	}

	function A(t) {
		return t.replace(/([=!:$/()])/g, "\\$1")
	}

	function R(t) {
		return t && t.sensitive ? "" : "i"
	}

	function T(t, n, r) {
		for (var e = (r = r || {}).strict, i = !1 !== r.start, o = !1 !== r.end, u = r.delimiter || y, f = [].concat(r.endsWith || []).map(k).concat("$").join("|"), s = i ? "^" : "", c = 0; c < t.length; c++) {
			var a = t[c];
			if ("string" == typeof a) s += k(a);
			else {
				var h = a.repeat ? "(?:" + a.pattern + ")(?:" + k(a.delimiter) + "(?:" + a.pattern + "))*" : a.pattern;
				n && n.push(a), s += a.optional ? a.prefix ? "(?:" + k(a.prefix) + "(" + h + "))?" : "(" + h + ")?" : k(a.prefix) + "(" + h + ")"
			}
		}
		if (o) e || (s += "(?:" + k(u) + ")?"), s += "$" === f ? "$" : "(?=" + f + ")";
		else {
			var v = t[t.length - 1],
				l = "string" == typeof v ? v[v.length - 1] === u : void 0 === v;
			e || (s += "(?:" + k(u) + "(?=" + f + "))?"), l || (s += "(?=" + k(u) + "|" + f + ")")
		}
		return new RegExp(s, R(r))
	}

	function O(t, n, r) {
		return t instanceof RegExp ? function (t, n) {
			if (!n) return t;
			var r = t.source.match(/\((?!\?)/g);
			if (r)
				for (var e = 0; e < r.length; e++) n.push({
					name: e,
					prefix: null,
					delimiter: null,
					optional: !1,
					repeat: !1,
					pattern: null
				});
			return t
		}(t, n) : Array.isArray(t) ? function (t, n, r) {
			for (var e = [], i = 0; i < t.length; i++) e.push(O(t[i], n, r).source);
			return new RegExp("(?:" + e.join("|") + ")", R(r))
		}(t, n, r) : function (t, n, r) {
			return T(g(t, r), n, r)
		}(t, n, r)
	}
	d.match = function (t, n) {
		var r = [];
		return E(O(t, r, n), r)
	}, d.regexpToFunction = m, d.parse = p, d.compile = function (t, n) {
		return x(g(t, n), n)
	}, d.tokensToFunction = w, d.tokensToRegExp = b;
	var S = {
			container: "container",
			history: "history",
			namespace: "namespace",
			prefix: "data-barba",
			prevent: "prevent",
			wrapper: "wrapper"
		},
		j = new(function () {
			function t() {
				this.o = S, this.u = new DOMParser
			}
			var n = t.prototype;
			return n.toString = function (t) {
				return t.outerHTML
			}, n.toDocument = function (t) {
				return this.u.parseFromString(t, "text/html")
			}, n.toElement = function (t) {
				var n = document.createElement("div");
				return n.innerHTML = t, n
			}, n.getHtml = function (t) {
				return void 0 === t && (t = document), this.toString(t.documentElement)
			}, n.getWrapper = function (t) {
				return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]')
			}, n.getContainer = function (t) {
				return void 0 === t && (t = document), t.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]')
			}, n.removeContainer = function (t) {
				document.body.contains(t) && t.parentNode.removeChild(t)
			}, n.addContainer = function (t, n) {
				var r = this.getContainer();
				r ? this.s(t, r) : n.appendChild(t)
			}, n.getNamespace = function (t) {
				void 0 === t && (t = document);
				var n = t.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
				return n ? n.getAttribute(this.o.prefix + "-" + this.o.namespace) : null
			}, n.getHref = function (t) {
				if (t.tagName && "a" === t.tagName.toLowerCase()) {
					if ("string" == typeof t.href) return t.href;
					var n = t.getAttribute("href") || t.getAttribute("xlink:href");
					if (n) return this.resolveUrl(n.baseVal || n)
				}
				return null
			}, n.resolveUrl = function () {
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
				var e = n.length;
				if (0 === e) throw new Error("resolveUrl requires at least one argument; got none.");
				var i = document.createElement("base");
				if (i.href = arguments[0], 1 === e) return i.href;
				var o = document.getElementsByTagName("head")[0];
				o.insertBefore(i, o.firstChild);
				for (var u, f = document.createElement("a"), s = 1; s < e; s++) f.href = arguments[s], i.href = u = f.href;
				return o.removeChild(i), u
			}, n.s = function (t, n) {
				n.parentNode.insertBefore(t, n.nextSibling)
			}, t
		}()),
		M = new(function () {
			function t() {
				this.h = [], this.v = -1
			}
			var e = t.prototype;
			return e.init = function (t, n) {
				this.l = "barba";
				var r = {
					ns: n,
					scroll: {
						x: window.scrollX,
						y: window.scrollY
					},
					url: t
				};
				this.h.push(r), this.v = 0;
				var e = {
					from: this.l,
					index: 0,
					states: [].concat(this.h)
				};
				window.history && window.history.replaceState(e, "", t)
			}, e.change = function (t, n, r) {
				if (r && r.state) {
					var e = r.state,
						i = e.index;
					n = this.m(this.v - i), this.replace(e.states), this.v = i
				} else this.add(t, n);
				return n
			}, e.add = function (t, n) {
				var r = this.size,
					e = this.p(n),
					i = {
						ns: "tmp",
						scroll: {
							x: window.scrollX,
							y: window.scrollY
						},
						url: t
					};
				this.h.push(i), this.v = r;
				var o = {
					from: this.l,
					index: r,
					states: [].concat(this.h)
				};
				switch (e) {
				case "push":
					window.history && window.history.pushState(o, "", t);
					break;
				case "replace":
					window.history && window.history.replaceState(o, "", t)
				}
			}, e.update = function (t, n) {
				var e = n || this.v,
					i = r({}, this.get(e), {}, t);
				this.set(e, i)
			}, e.remove = function (t) {
				t ? this.h.splice(t, 1) : this.h.pop(), this.v--
			}, e.clear = function () {
				this.h = [], this.v = -1
			}, e.replace = function (t) {
				this.h = t
			}, e.get = function (t) {
				return this.h[t]
			}, e.set = function (t, n) {
				return this.h[t] = n
			}, e.p = function (t) {
				var n = "push",
					r = t,
					e = S.prefix + "-" + S.history;
				return r.hasAttribute && r.hasAttribute(e) && (n = r.getAttribute(e)), n
			}, e.m = function (t) {
				return Math.abs(t) > 1 ? t > 0 ? "forward" : "back" : 0 === t ? "popstate" : t > 0 ? "back" : "forward"
			}, n(t, [{
				key: "current",
				get: function () {
					return this.h[this.v]
				}
			}, {
				key: "state",
				get: function () {
					return this.h[this.h.length - 1]
				}
			}, {
				key: "previous",
				get: function () {
					return this.v < 1 ? null : this.h[this.v - 1]
				}
			}, {
				key: "size",
				get: function () {
					return this.h.length
				}
			}]), t
		}()),
		L = function (t, n) {
			try {
				var r = function () {
					if (!n.next.html) return Promise.resolve(t).then((function (t) {
						var r = n.next;
						if (t) {
							var e = j.toElement(t);
							r.namespace = j.getNamespace(e), r.container = j.getContainer(e), r.html = t, M.update({
								ns: r.namespace
							});
							var i = j.toDocument(t);
							document.title = i.title
						}
					}))
				}();
				return Promise.resolve(r && r.then ? r.then((function () {})) : void 0)
			} catch (t) {
				return Promise.reject(t)
			}
		},
		$ = d,
		_ = {
			__proto__: null,
			update: L,
			nextTick: function () {
				return new Promise((function (t) {
					window.requestAnimationFrame(t)
				}))
			},
			pathToRegexp: $
		},
		q = function () {
			return window.location.origin
		},
		B = function (t) {
			return void 0 === t && (t = window.location.href), U(t).port
		},
		U = function (t) {
			var n, r = t.match(/:\d+/);
			if (null === r) /^http/.test(t) && (n = 80), /^https/.test(t) && (n = 443);
			else {
				var e = r[0].substring(1);
				n = parseInt(e, 10)
			}
			var i, o = t.replace(q(), ""),
				u = {},
				f = o.indexOf("#");
			f >= 0 && (i = o.slice(f + 1), o = o.slice(0, f));
			var s = o.indexOf("?");
			return s >= 0 && (u = D(o.slice(s + 1)), o = o.slice(0, s)), {
				hash: i,
				path: o,
				port: n,
				query: u
			}
		},
		D = function (t) {
			return t.split("&").reduce((function (t, n) {
				var r = n.split("=");
				return t[r[0]] = r[1], t
			}), {})
		},
		F = function (t) {
			return void 0 === t && (t = window.location.href), t.replace(/(\/#.*|\/|#.*)$/, "")
		},
		H = {
			__proto__: null,
			getHref: function () {
				return window.location.href
			},
			getOrigin: q,
			getPort: B,
			getPath: function (t) {
				return void 0 === t && (t = window.location.href), U(t).path
			},
			parse: U,
			parseQuery: D,
			clean: F
		};

	function I(t, n, r) {
		return void 0 === n && (n = 2e3), new Promise((function (e, i) {
			var o = new XMLHttpRequest;
			o.onreadystatechange = function () {
				if (o.readyState === XMLHttpRequest.DONE)
					if (200 === o.status) e(o.responseText);
					else if (o.status) {
					var n = {
						status: o.status,
						statusText: o.statusText
					};
					r(t, n), i(n)
				}
			}, o.ontimeout = function () {
				var e = new Error("Timeout error [" + n + "]");
				r(t, e), i(e)
			}, o.onerror = function () {
				var n = new Error("Fetch error");
				r(t, n), i(n)
			}, o.open("GET", t), o.timeout = n, o.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"), o.setRequestHeader("x-barba", "yes"), o.send()
		}))
	}
	var C = function (t) {
		return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then
	};

	function N(t, n) {
		return void 0 === n && (n = {}),
			function () {
				for (var r = arguments.length, e = new Array(r), i = 0; i < r; i++) e[i] = arguments[i];
				var o = !1,
					u = new Promise((function (r, i) {
						n.async = function () {
							return o = !0,
								function (t, n) {
									t ? i(t) : r(n)
								}
						};
						var u = t.apply(n, e);
						o || (C(u) ? u.then(r, i) : r(u))
					}));
				return u
			}
	}
	var X = new(function (t) {
			function n() {
				var n;
				return (n = t.call(this) || this).logger = new l("@barba/core"), n.all = ["ready", "page", "reset", "currentAdded", "currentRemoved", "nextAdded", "nextRemoved", "beforeOnce", "once", "afterOnce", "before", "beforeLeave", "leave", "afterLeave", "beforeEnter", "enter", "afterEnter", "after"], n.registered = new Map, n.init(), n
			}
			e(n, t);
			var r = n.prototype;
			return r.init = function () {
				var t = this;
				this.registered.clear(), this.all.forEach((function (n) {
					t[n] || (t[n] = function (r, e) {
						t.registered.has(n) || t.registered.set(n, new Set), t.registered.get(n).add({
							ctx: e || {},
							fn: r
						})
					})
				}))
			}, r.do = function (t) {
				for (var n = this, r = arguments.length, e = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) e[i - 1] = arguments[i];
				if (this.registered.has(t)) {
					var o = Promise.resolve();
					return this.registered.get(t).forEach((function (t) {
						o = o.then((function () {
							return N(t.fn, t.ctx).apply(void 0, e)
						}))
					})), o.catch((function (r) {
						n.logger.debug("Hook error [" + t + "]"), n.logger.error(r)
					}))
				}
				return Promise.resolve()
			}, r.clear = function () {
				var t = this;
				this.all.forEach((function (n) {
					delete t[n]
				})), this.init()
			}, r.help = function () {
				this.logger.info("Available hooks: " + this.all.join(","));
				var t = [];
				this.registered.forEach((function (n, r) {
					return t.push(r)
				})), this.logger.info("Registered hooks: " + t.join(","))
			}, n
		}(h)),
		z = function () {
			function t(t) {
				if (this.P = [], "boolean" == typeof t) this.g = t;
				else {
					var n = Array.isArray(t) ? t : [t];
					this.P = n.map((function (t) {
						return $(t)
					}))
				}
			}
			return t.prototype.checkHref = function (t) {
				if ("boolean" == typeof this.g) return this.g;
				var n = U(t).path;
				return this.P.some((function (t) {
					return null !== t.exec(n)
				}))
			}, t
		}(),
		G = function (t) {
			function n(n) {
				var r;
				return (r = t.call(this, n) || this).k = new Map, r
			}
			e(n, t);
			var i = n.prototype;
			return i.set = function (t, n, r) {
				return this.k.set(t, {
					action: r,
					request: n
				}), {
					action: r,
					request: n
				}
			}, i.get = function (t) {
				return this.k.get(t)
			}, i.getRequest = function (t) {
				return this.k.get(t).request
			}, i.getAction = function (t) {
				return this.k.get(t).action
			}, i.has = function (t) {
				return !this.checkHref(t) && this.k.has(t)
			}, i.delete = function (t) {
				return this.k.delete(t)
			}, i.update = function (t, n) {
				var e = r({}, this.k.get(t), {}, n);
				return this.k.set(t, e), e
			}, n
		}(z),
		Q = function () {
			return !window.history.pushState
		},
		W = function (t) {
			return !t.el || !t.href
		},
		J = function (t) {
			var n = t.event;
			return n.which > 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey
		},
		K = function (t) {
			var n = t.el;
			return n.hasAttribute("target") && "_blank" === n.target
		},
		V = function (t) {
			var n = t.el;
			return void 0 !== n.protocol && window.location.protocol !== n.protocol || void 0 !== n.hostname && window.location.hostname !== n.hostname
		},
		Y = function (t) {
			var n = t.el;
			return void 0 !== n.port && B() !== B(n.href)
		},
		Z = function (t) {
			var n = t.el;
			return n.getAttribute && "string" == typeof n.getAttribute("download")
		},
		tt = function (t) {
			return t.el.hasAttribute(S.prefix + "-" + S.prevent)
		},
		nt = function (t) {
			return Boolean(t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]'))
		},
		rt = function (t) {
			var n = t.href;
			return F(n) === F() && B(n) === B()
		},
		et = function (t) {
			function n(n) {
				var r;
				return (r = t.call(this, n) || this).suite = [], r.tests = new Map, r.init(), r
			}
			e(n, t);
			var r = n.prototype;
			return r.init = function () {
				this.add("pushState", Q), this.add("exists", W), this.add("newTab", J), this.add("blank", K), this.add("corsDomain", V), this.add("corsPort", Y), this.add("download", Z), this.add("preventSelf", tt), this.add("preventAll", nt), this.add("sameUrl", rt, !1)
			}, r.add = function (t, n, r) {
				void 0 === r && (r = !0), this.tests.set(t, n), r && this.suite.push(t)
			}, r.run = function (t, n, r, e) {
				return this.tests.get(t)({
					el: n,
					event: r,
					href: e
				})
			}, r.checkLink = function (t, n, r) {
				var e = this;
				return this.suite.some((function (i) {
					return e.run(i, t, n, r)
				}))
			}, n
		}(z),
		it = function (t) {
			function n(r, e) {
				var i;
				void 0 === e && (e = "Barba error");
				for (var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), f = 2; f < o; f++) u[f - 2] = arguments[f];
				return (i = t.call.apply(t, [this].concat(u)) || this).error = r, i.label = e, Error.captureStackTrace && Error.captureStackTrace(function (t) {
					if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return t
				}(i), n), i.name = "BarbaError", i
			}
			return e(n, t), n
		}(f(Error)),
		ot = function () {
			function t(t) {
				void 0 === t && (t = []), this.logger = new l("@barba/core"), this.all = [], this.page = [], this.once = [], this.A = [{
					name: "namespace",
					type: "strings"
				}, {
					name: "custom",
					type: "function"
				}], t && (this.all = this.all.concat(t)), this.update()
			}
			var n = t.prototype;
			return n.add = function (t, n) {
				switch (t) {
				case "rule":
					this.A.splice(n.position || 0, 0, n.value);
					break;
				case "transition":
				default:
					this.all.push(n)
				}
				this.update()
			}, n.resolve = function (t, n) {
				var r = this;
				void 0 === n && (n = {});
				var e = n.once ? this.once : this.page;
				e = e.filter(n.self ? function (t) {
					return t.name && "self" === t.name
				} : function (t) {
					return !t.name || "self" !== t.name
				});
				var i = new Map,
					o = e.find((function (e) {
						var o = !0,
							u = {};
						return !(!n.self || "self" !== e.name) || (r.A.reverse().forEach((function (n) {
							o && (o = r.R(e, n, t, u), e.from && e.to && (o = r.R(e, n, t, u, "from") && r.R(e, n, t, u, "to")), e.from && !e.to && (o = r.R(e, n, t, u, "from")), !e.from && e.to && (o = r.R(e, n, t, u, "to")))
						})), i.set(e, u), o)
					})),
					u = i.get(o),
					f = [];
				if (f.push(n.once ? "once" : "page"), n.self && f.push("self"), u) {
					var s, c = [o];
					Object.keys(u).length > 0 && c.push(u), (s = this.logger).info.apply(s, ["Transition found [" + f.join(",") + "]"].concat(c))
				} else this.logger.info("No transition found [" + f.join(",") + "]");
				return o
			}, n.update = function () {
				var t = this;
				this.all = this.all.map((function (n) {
					return t.T(n)
				})).sort((function (t, n) {
					return t.priority - n.priority
				})).reverse().map((function (t) {
					return delete t.priority, t
				})), this.page = this.all.filter((function (t) {
					return void 0 !== t.leave || void 0 !== t.enter
				})), this.once = this.all.filter((function (t) {
					return void 0 !== t.once
				}))
			}, n.R = function (t, n, r, e, i) {
				var o = !0,
					u = !1,
					f = t,
					s = n.name,
					c = s,
					a = s,
					h = s,
					v = i ? f[i] : f,
					l = "to" === i ? r.next : r.current;
				if (i ? v && v[s] : v[s]) {
					switch (n.type) {
					case "strings":
					default:
						var d = Array.isArray(v[c]) ? v[c] : [v[c]];
						l[c] && -1 !== d.indexOf(l[c]) && (u = !0), -1 === d.indexOf(l[c]) && (o = !1);
						break;
					case "object":
						var m = Array.isArray(v[a]) ? v[a] : [v[a]];
						l[a] ? (l[a].name && -1 !== m.indexOf(l[a].name) && (u = !0), -1 === m.indexOf(l[a].name) && (o = !1)) : o = !1;
						break;
					case "function":
						v[h](r) ? u = !0 : o = !1
					}
					u && (i ? (e[i] = e[i] || {}, e[i][s] = f[i][s]) : e[s] = f[s])
				}
				return o
			}, n.O = function (t, n, r) {
				var e = 0;
				return (t[n] || t.from && t.from[n] || t.to && t.to[n]) && (e += Math.pow(10, r), t.from && t.from[n] && (e += 1), t.to && t.to[n] && (e += 2)), e
			}, n.T = function (t) {
				var n = this;
				t.priority = 0;
				var r = 0;
				return this.A.forEach((function (e, i) {
					r += n.O(t, e.name, i + 1)
				})), t.priority = r, t
			}, t
		}(),
		ut = function () {
			function t(t) {
				void 0 === t && (t = []), this.logger = new l("@barba/core"), this.S = !1, this.store = new ot(t)
			}
			var r = t.prototype;
			return r.get = function (t, n) {
				return this.store.resolve(t, n)
			}, r.doOnce = function (t) {
				var n = t.data,
					r = t.transition;
				try {
					var e = function () {
							i.S = !1
						},
						i = this,
						o = r || {};
					i.S = !0;
					var u = s((function () {
						return Promise.resolve(i.j("beforeOnce", n, o)).then((function () {
							return Promise.resolve(i.once(n, o)).then((function () {
								return Promise.resolve(i.j("afterOnce", n, o)).then((function () {}))
							}))
						}))
					}), (function (t) {
						i.S = !1, i.logger.debug("Transition error [before/after/once]"), i.logger.error(t)
					}));
					return Promise.resolve(u && u.then ? u.then(e) : e())
				} catch (t) {
					return Promise.reject(t)
				}
			}, r.doPage = function (t) {
				var n = t.data,
					r = t.transition,
					e = t.page,
					i = t.wrapper;
				try {
					var o = function (t) {
							if (u) return t;
							f.S = !1
						},
						u = !1,
						f = this,
						c = r || {},
						a = !0 === c.sync || !1;
					f.S = !0;
					var h = s((function () {
						function t() {
							return Promise.resolve(f.j("before", n, c)).then((function () {
								var t = !1;

								function r(r) {
									return t ? r : Promise.resolve(f.remove(n)).then((function () {
										return Promise.resolve(f.j("after", n, c)).then((function () {}))
									}))
								}
								var o = function () {
									if (a) return s((function () {
										return Promise.resolve(f.add(n, i)).then((function () {
											return Promise.resolve(f.j("beforeLeave", n, c)).then((function () {
												return Promise.resolve(f.j("beforeEnter", n, c)).then((function () {
													return Promise.resolve(Promise.all([f.leave(n, c), f.enter(n, c)])).then((function () {
														return Promise.resolve(f.j("afterLeave", n, c)).then((function () {
															return Promise.resolve(f.j("afterEnter", n, c)).then((function () {}))
														}))
													}))
												}))
											}))
										}))
									}), (function (t) {
										if (f.M(t)) throw new it(t, "Transition error [sync]")
									}));
									var r = function (r) {
											return t ? r : s((function () {
												var t = function () {
													if (!1 !== o) return Promise.resolve(f.add(n, i)).then((function () {
														return Promise.resolve(f.j("beforeEnter", n, c)).then((function () {
															return Promise.resolve(f.enter(n, c, o)).then((function () {
																return Promise.resolve(f.j("afterEnter", n, c)).then((function () {}))
															}))
														}))
													}))
												}();
												if (t && t.then) return t.then((function () {}))
											}), (function (t) {
												if (f.M(t)) throw new it(t, "Transition error [before/after/enter]")
											}))
										},
										o = !1,
										u = s((function () {
											return Promise.resolve(f.j("beforeLeave", n, c)).then((function () {
												return Promise.resolve(Promise.all([f.leave(n, c), L(e, n)]).then((function (t) {
													return t[0]
												}))).then((function (t) {
													return o = t, Promise.resolve(f.j("afterLeave", n, c)).then((function () {}))
												}))
											}))
										}), (function (t) {
											if (f.M(t)) throw new it(t, "Transition error [before/after/leave]")
										}));
									return u && u.then ? u.then(r) : r(u)
								}();
								return o && o.then ? o.then(r) : r(o)
							}))
						}
						var r = function () {
							if (a) return Promise.resolve(L(e, n)).then((function () {}))
						}();
						return r && r.then ? r.then(t) : t()
					}), (function (t) {
						if (f.S = !1, t.name && "BarbaError" === t.name) throw f.logger.debug(t.label), f.logger.error(t.error), t;
						throw f.logger.debug("Transition error [page]"), f.logger.error(t), t
					}));
					return Promise.resolve(h && h.then ? h.then(o) : o(h))
				} catch (t) {
					return Promise.reject(t)
				}
			}, r.once = function (t, n) {
				try {
					return Promise.resolve(X.do("once", t, n)).then((function () {
						return n.once ? N(n.once, n)(t) : Promise.resolve()
					}))
				} catch (t) {
					return Promise.reject(t)
				}
			}, r.leave = function (t, n) {
				try {
					return Promise.resolve(X.do("leave", t, n)).then((function () {
						return n.leave ? N(n.leave, n)(t) : Promise.resolve()
					}))
				} catch (t) {
					return Promise.reject(t)
				}
			}, r.enter = function (t, n, r) {
				try {
					return Promise.resolve(X.do("enter", t, n)).then((function () {
						return n.enter ? N(n.enter, n)(t, r) : Promise.resolve()
					}))
				} catch (t) {
					return Promise.reject(t)
				}
			}, r.add = function (t, n) {
				try {
					return j.addContainer(t.next.container, n), X.do("nextAdded", t), Promise.resolve()
				} catch (t) {
					return Promise.reject(t)
				}
			}, r.remove = function (t) {
				try {
					return j.removeContainer(t.current.container), X.do("currentRemoved", t), Promise.resolve()
				} catch (t) {
					return Promise.reject(t)
				}
			}, r.M = function (t) {
				return t.message ? !/Timeout error|Fetch error/.test(t.message) : !t.status
			}, r.j = function (t, n, r) {
				try {
					return Promise.resolve(X.do(t, n, r)).then((function () {
						return r[t] ? N(r[t], r)(n) : Promise.resolve()
					}))
				} catch (t) {
					return Promise.reject(t)
				}
			}, n(t, [{
				key: "isRunning",
				get: function () {
					return this.S
				},
				set: function (t) {
					this.S = t
				}
			}, {
				key: "hasOnce",
				get: function () {
					return this.store.once.length > 0
				}
			}, {
				key: "hasSelf",
				get: function () {
					return this.store.all.some((function (t) {
						return "self" === t.name
					}))
				}
			}, {
				key: "shouldWait",
				get: function () {
					return this.store.all.some((function (t) {
						return t.to && !t.to.route || t.sync
					}))
				}
			}]), t
		}(),
		ft = function () {
			function t(t) {
				var n = this;
				this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"], this.byNamespace = new Map, 0 !== t.length && (t.forEach((function (t) {
					n.byNamespace.set(t.namespace, t)
				})), this.names.forEach((function (t) {
					X[t](n.L(t))
				})))
			}
			return t.prototype.L = function (t) {
				var n = this;
				return function (r) {
					var e = t.match(/enter/i) ? r.next : r.current,
						i = n.byNamespace.get(e.namespace);
					return i && i[t] ? N(i[t], i)(r) : Promise.resolve()
				}
			}, t
		}();
	Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
		var n = this;
		do {
			if (n.matches(t)) return n;
			n = n.parentElement || n.parentNode
		} while (null !== n && 1 === n.nodeType);
		return null
	});
	var st = {
		container: null,
		html: "",
		namespace: "",
		url: {
			hash: "",
			href: "",
			path: "",
			port: null,
			query: {}
		}
	};
	return new(function () {
		function t() {
			this.version = a, this.schemaPage = st, this.Logger = l, this.logger = new l("@barba/core"), this.plugins = [], this.hooks = X, this.dom = j, this.helpers = _, this.history = M, this.request = I, this.url = H
		}
		var e = t.prototype;
		return e.use = function (t, n) {
			var r = this.plugins;
			r.indexOf(t) > -1 ? this.logger.warn("Plugin [" + t.name + "] already installed.") : "function" == typeof t.install ? (t.install(this, n), r.push(t)) : this.logger.warn("Plugin [" + t.name + '] has no "install" method.')
		}, e.init = function (t) {
			var n = void 0 === t ? {} : t,
				e = n.transitions,
				i = void 0 === e ? [] : e,
				o = n.views,
				u = void 0 === o ? [] : o,
				f = n.schema,
				s = void 0 === f ? S : f,
				c = n.requestError,
				a = n.timeout,
				h = void 0 === a ? 2e3 : a,
				v = n.cacheIgnore,
				d = void 0 !== v && v,
				m = n.prefetchIgnore,
				p = void 0 !== m && m,
				w = n.preventRunning,
				b = void 0 !== w && w,
				y = n.prevent,
				P = void 0 === y ? null : y,
				g = n.debug,
				E = n.logLevel;
			if (l.setLevel(!0 === (void 0 !== g && g) ? "debug" : void 0 === E ? "off" : E), this.logger.info(this.version), Object.keys(s).forEach((function (t) {
				S[t] && (S[t] = s[t])
			})), this.$ = c, this.timeout = h, this.cacheIgnore = d, this.prefetchIgnore = p, this.preventRunning = b, this._ = this.dom.getWrapper(), !this._) throw new Error("[@barba/core] No Barba wrapper found");
			this._.setAttribute("aria-live", "polite"), this.q();
			var x = this.data.current;
			if (!x.container) throw new Error("[@barba/core] No Barba container found");
			if (this.cache = new G(d), this.prevent = new et(p), this.transitions = new ut(i), this.views = new ft(u), null !== P) {
				if ("function" != typeof P) throw new Error("[@barba/core] Prevent should be a function");
				this.prevent.add("preventCustom", P)
			}
			this.history.init(x.url.href, x.namespace), this.B = this.B.bind(this), this.U = this.U.bind(this), this.D = this.D.bind(this), this.F(), this.plugins.forEach((function (t) {
				return t.init()
			}));
			var k = this.data;
			k.trigger = "barba", k.next = k.current, k.current = r({}, this.schemaPage), this.hooks.do("ready", k), this.once(k), this.q()
		}, e.destroy = function () {
			this.q(), this.H(), this.history.clear(), this.hooks.clear(), this.plugins = []
		}, e.force = function (t) {
			window.location.assign(t)
		}, e.go = function (t, n, r) {
			var e;
			if (void 0 === n && (n = "barba"), this.transitions.isRunning) this.force(t);
			else if (!(e = "popstate" === n ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(t) : this.prevent.run("sameUrl", null, null, t)) || this.transitions.hasSelf) return n = this.history.change(t, n, r), r && (r.stopPropagation(), r.preventDefault()), this.page(t, n, e)
		}, e.once = function (t) {
			try {
				var n = this;
				return Promise.resolve(n.hooks.do("beforeEnter", t)).then((function () {
					function r() {
						return Promise.resolve(n.hooks.do("afterEnter", t)).then((function () {}))
					}
					var e = function () {
						if (n.transitions.hasOnce) {
							var r = n.transitions.get(t, {
								once: !0
							});
							return Promise.resolve(n.transitions.doOnce({
								transition: r,
								data: t
							})).then((function () {}))
						}
					}();
					return e && e.then ? e.then(r) : r()
				}))
			} catch (t) {
				return Promise.reject(t)
			}
		}, e.page = function (t, n, e) {
			try {
				var i = function () {
						var t = o.data;
						return Promise.resolve(o.hooks.do("page", t)).then((function () {
							var n = s((function () {
								var n = o.transitions.get(t, {
									once: !1,
									self: e
								});
								return Promise.resolve(o.transitions.doPage({
									data: t,
									page: u,
									transition: n,
									wrapper: o._
								})).then((function () {
									o.q()
								}))
							}), (function () {
								0 === l.getLevel() && o.force(t.current.url.href)
							}));
							if (n && n.then) return n.then((function () {}))
						}))
					},
					o = this;
				o.data.next.url = r({
					href: t
				}, o.url.parse(t)), o.data.trigger = n;
				var u = o.cache.has(t) ? o.cache.update(t, {
						action: "click"
					}).request : o.cache.set(t, o.request(t, o.timeout, o.onRequestError.bind(o, n)), "click").request,
					f = function () {
						if (o.transitions.shouldWait) return Promise.resolve(L(u, o.data)).then((function () {}))
					}();
				return Promise.resolve(f && f.then ? f.then(i) : i())
			} catch (t) {
				return Promise.reject(t)
			}
		}, e.onRequestError = function (t) {
			this.transitions.isRunning = !1;
			for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), e = 1; e < n; e++) r[e - 1] = arguments[e];
			var i = r[0],
				o = r[1],
				u = this.cache.getAction(i);
			return this.cache.delete(i), !(this.$ && !1 === this.$(t, u, i, o) || ("click" === u && this.force(i), 1))
		}, e.prefetch = function (t) {
			var n = this;
			this.cache.has(t) || this.cache.set(t, this.request(t, this.timeout, this.onRequestError.bind(this, "barba")).catch((function (t) {
				n.logger.error(t)
			})), "prefetch")
		}, e.F = function () {
			!0 !== this.prefetchIgnore && (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)), document.addEventListener("click", this.U), window.addEventListener("popstate", this.D)
		}, e.H = function () {
			!0 !== this.prefetchIgnore && (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)), document.removeEventListener("click", this.U), window.removeEventListener("popstate", this.D)
		}, e.B = function (t) {
			var n = this,
				r = this.I(t);
			if (r) {
				var e = this.dom.getHref(r);
				this.prevent.checkHref(e) || this.cache.has(e) || this.cache.set(e, this.request(e, this.timeout, this.onRequestError.bind(this, r)).catch((function (t) {
					n.logger.error(t)
				})), "enter")
			}
		}, e.U = function (t) {
			var n = this.I(t);
			if (n) return this.transitions.isRunning && this.preventRunning ? (t.preventDefault(), void t.stopPropagation()) : void this.go(this.dom.getHref(n), n, t)
		}, e.D = function (t) {
			this.go(this.url.getHref(), "popstate", t)
		}, e.I = function (t) {
			for (var n = t.target; n && !this.dom.getHref(n);) n = n.parentNode;
			if (n && !this.prevent.checkLink(n, t, this.dom.getHref(n))) return n
		}, e.q = function () {
			var t = this.url.getHref(),
				n = {
					container: this.dom.getContainer(),
					html: this.dom.getHtml(),
					namespace: this.dom.getNamespace(),
					url: r({
						href: t
					}, this.url.parse(t))
				};
			this.C = {
				current: n,
				next: r({}, this.schemaPage),
				trigger: void 0
			}, this.hooks.do("reset", this.data)
		}, n(t, [{
			key: "data",
			get: function () {
				return this.C
			}
		}, {
			key: "wrapper",
			get: function () {
				return this._
			}
		}]), t
	}())
}));

//*main.js*//

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BarbaInit = function BarbaInit() {
  _classCallCheck(this, BarbaInit);

  var nav = document.querySelector('nav');
  var that = this;
  barba.init({
    debug: false,
    transitions: [{
      name: 'default',
      leave: function leave(data) {
        var $out = document.createElement('div');
        $out.classList.add('transition');
        data.current.container.appendChild($out);
        return gsap.from($out, {
          ease: "power2.out",
          duration: 0.5,
          x: '100vw'
        });
      },
      enter: function enter(data) {},
      afterEnter: function afterEnter(data) {
        data.current.container.style.display = 'none';
        var $in = document.createElement('div');
        $in.classList.add('transition');
        data.next.container.appendChild($in);
        return gsap.to($in, {
          ease: "power2.out",
          duration: 0.5,
          x: '-100vw'
        });
      }
    }, {
      name: 'aboutTransition',
      to: {
        namespace: ['about']
      },
      leave: function leave(data) {
        var $out = document.createElement('div');
        $out.classList.add('redTransition');
        data.current.container.appendChild($out);
        return gsap.from($out, {
          ease: "power2.out",
          duration: 0.5,
          x: '100vw'
        });
      },
      enter: function enter(data) {},
      afterEnter: function afterEnter(data) {
        data.current.container.style.display = 'none';
        var $in = document.createElement('div');
        $in.classList.add('redTransition');
        data.next.container.appendChild($in);
        return gsap.to($in, {
          ease: "power2.out",
          duration: 0.5,
          x: '-100vw'
        });
      }
    }, {
      name: 'aboutTransitionOut',
      from: {
        namespace: ['about']
      },
      leave: function leave(data) {
        var $out = document.createElement('div');
        $out.classList.add('redTransition');
        data.current.container.appendChild($out);
        return gsap.from($out, {
          ease: "power2.out",
          duration: 0.5,
          x: '100vw'
        });
      },
      enter: function enter(data) {},
      afterEnter: function afterEnter(data) {
        data.current.container.style.display = 'none';
        var $in = document.createElement('div');
        $in.classList.add('redTransition');
        data.next.container.appendChild($in);
        return gsap.to($in, {
          ease: "power2.out",
          duration: 0.5,
          x: '-100vw'
        });
      }
    }, {
      name: 'caseTransition',
      from: {
        namespace: ['case']
      },
      to: {
        namespace: ['case']
      },
      beforeLeave: function beforeLeave(data) {
        var $nextCase = data.current.container.querySelector('.next-case>.hero');
        var $others = [data.current.container.querySelector('.next-case>.arrow'), data.current.container.querySelector('.react')];
        gsap.to($others, {
          ease: "power4.out",
          duration: 1,
          y: -$nextCase.getBoundingClientRect().top - 200
        });
        return gsap.to($nextCase, {
          ease: "power4.out",
          duration: 1,
          height: '82vh',
          y: -$nextCase.getBoundingClientRect().top
        });
      },
      enter: function enter(data) {},
      afterEnter: function afterEnter(data) {
        var $intro = data.next.container.querySelector('.intro');
        gsap.to(data.current.container, {
          duration: 0,
          opacity: 0
        });
        return gsap.from($intro, {
          ease: "power4.out",
          duration: 1,
          y: 200,
          opacity: 0
        });
      }
    }],
    views: [{
      namespace: 'home',
      beforeEnter: function beforeEnter(data) {
        that.menu = new Menu(data.next.container);
        that.eyeballs = new Eyeballs(data.next.container);
        gsap.to(nav, {
          ease: "power4.out",
          duration: 1,
          y: '-100px'
        });
      },
      afterLeave: function afterLeave() {
        gsap.to(nav, {
          ease: "power4.out",
          duration: 1,
          y: '0px'
        });
      }
    }, {
      namespace: 'about',
      afterEnter: function afterEnter(data) {
        that.menu = new Menu(data.next.container);
        that.eyeballs = new Eyeballs(data.next.container);

        if (data.next.container.dataset.stuff) {
          data.next.container.scrollTo(0, data.next.container.querySelector('#stuff').offsetTop - 100);
        }
      }
    }, {
      namespace: 'case',
      afterEnter: function afterEnter(data) {
        that.fluidContainers = new FluidContainers(data.next.container);

        for (var _i = 0, _Array$from = Array.from(data.next.container.querySelectorAll(".js-autoplay")); _i < _Array$from.length; _i++) {
          var $autoplay = _Array$from[_i];

          if ($autoplay.paused) {
            $autoplay.play();
          }
        }

        if (data.next.container.querySelector('.gallery-grid')) {
          var gallery = new Gallery(data.next.container);
        }

        var $react = data.next.container.querySelector('.react');

        if ($react) {
          var threshold = $react.offsetTop - 0.5 * windowSize[1];
          var react = anims.react($react);
          var playing = false;
          data.next.container.addEventListener('scroll', function () {
            if (data.next.container.scrollTop > threshold && !playing) {
              playing = true;
              react.play();
            }
          });
        }
      }
    }, {
      namespace: 'work',
      afterEnter: function afterEnter(data) {
        gsap.to(nav, {
          ease: "power4.out",
          duration: 1,
          y: '-100px'
        });
        var videoContainer = data.next.container.querySelector('.showreel');
        var video = videoContainer.querySelector('video');
        var columns = data.next.container.querySelectorAll(".column");
        video.play();
        that.fluidContainers = new FluidContainers(data.next.container);
        data.next.container.addEventListener('scroll', function () {
          if (!video.paused && data.next.container.scrollTop > window.innerHeight / 4) {
            video.pause();
          } else if (video.paused && data.next.container.scrollTop < window.innerHeight / 4) {
            video.play();
          }
        });
        video.addEventListener('click', function () {
          if (video.paused) {
            video.play();
          } else {
            video.pause();
          }
        });
        video.addEventListener('dblclick', function () {
          video.requestFullscreen();
        });
        video.addEventListener('ended', function () {
          video.currentTime = 0;
          data.next.container.scrollTo(0, 200);
        });
        video.addEventListener('waiting', function () {
          videoContainer.classList.add('load');
          videoContainer.classList.remove('paused');
        });
        video.addEventListener('pause', function () {
          videoContainer.classList.add('paused');
          videoContainer.classList.remove('load');
          gsap.to(nav, {
            ease: "power4.out",
            duration: 1,
            y: '0px'
          });

          if (window.innerWidth > 499) {
            gsap.to(columns[0], {
              ease: "power4.out",
              duration: 1,
              y: '-195'
            });
          } else {
            gsap.to(columns[0], {
              ease: "power4.out",
              duration: 1,
              y: '-100'
            });
          }

          gsap.to(columns[1], {
            ease: "power4.out",
            duration: 1,
            y: '-100'
          });
        });
        video.addEventListener('playing', function () {
          videoContainer.classList.remove('paused');
          videoContainer.classList.remove('load');
          gsap.to(nav, {
            ease: "power4.out",
            duration: 1,
            y: '-100px'
          });
          gsap.to(columns[0], {
            ease: "power4.out",
            duration: 1,
            y: '0'
          });
          gsap.to(columns[1], {
            ease: "power4.out",
            duration: 1,
            y: '0'
          });
        });
      }
    }]
  });
  /*
  barba.hooks.after(function () {
    gtag('config', 'UA-113302800-2', {
      'page_path': window.location.pathname
    });
  });
  */
};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Eyeballs = /*#__PURE__*/function () {
  function Eyeballs(container) {
    _classCallCheck(this, Eyeballs);

    this.container = container;
    this.windowSize = [window.innerWidth, window.innerHeight];
    this.element = this.container.querySelectorAll('.js-eyeballs');
    this.listen();
  }

  _createClass(Eyeballs, [{
    key: "listen",
    value: function listen() {
      var _this = this;

      var pi = Math.PI;
      window.addEventListener('mousemove', function (e) {
        var mouseX = e.clientX / _this.windowSize[0] - 0.5;
        var mouseY = e.clientY / _this.windowSize[1] - 0.5;
        var hypo = Math.sqrt(mouseX * mouseX + mouseY * mouseY);
        var angle = mouseY > 0 ? Math.acos(mouseX / hypo) * 180 / pi : 360 - Math.acos(mouseX / hypo) * 180 / pi;
        _this.element[0].style.transform = "rotate(".concat(angle, "deg) translateX(").concat(hypo >= 0.5 ? 20 : hypo * 40, "px)");
        _this.element[1].style.transform = "rotate(".concat(angle, "deg) translateX(").concat(hypo >= 0.5 ? 20 : hypo * 40, "px)");
      });
    }
  }]);

  return Eyeballs;
}();
"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FluidContainers = /*#__PURE__*/function () {
  function FluidContainers(container) {
    _classCallCheck(this, FluidContainers);

    this.elements = Array.from(container.querySelectorAll('.js-fluid-container'));
    this.adapt();
  }

  _createClass(FluidContainers, [{
    key: "adapt",
    value: function adapt() {
      var _iterator = _createForOfIteratorHelper(this.elements),
          _step;

      try {
        var _loop = function _loop() {
          var element = _step.value;
          var img = element.querySelector('img');

          if (img.complete) {
            if (element.offsetHeight / element.offsetWidth > img.offsetHeight / img.offsetWidth) {
              element.querySelector('img').style.width = 'auto';
              element.querySelector('img').style.height = '100%';
            } else {
              element.querySelector('img').style.width = '100%';
              element.querySelector('img').style.height = 'auto';
            }
          } else {
            img.addEventListener('load', function () {
              if (element.offsetHeight / element.offsetWidth > img.offsetHeight / img.offsetWidth) {
                element.querySelector('img').style.width = 'auto';
                element.querySelector('img').style.height = '100%';
              } else {
                element.querySelector('img').style.width = '100%';
                element.querySelector('img').style.height = 'auto';
              }
            });
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);

  return FluidContainers;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Gallery = /*#__PURE__*/function () {
  function Gallery(container) {
    _classCallCheck(this, Gallery);

    this.container = container;
    var $columns = Array.from(container.querySelectorAll('.column'));
    var $projects = Array.from(container.querySelectorAll('.gallery-project'));
    this.parallax($columns);
    this.lazyload($projects);
  }

  _createClass(Gallery, [{
    key: "parallax",
    value: function parallax($columns) {
      var _this = this;

      if (window.innerWidth > 999) {
        this.container.addEventListener('scroll', function () {
          var scroll = _this.container.scrollTop;
          $columns[1].style.transform = "translateY(-".concat(scroll / 5, "px)");
          $columns[2].style.transform = "translateY(-".concat(scroll / 10, "px)");
        });
      } else if (window.innerWidth > 499) {
        this.container.addEventListener('scroll', function () {
          var scroll = _this.container.scrollTop;
          $columns[1].style.transform = "translateY(-".concat(scroll / 10, "px)");
          $columns[4].style.transform = "translateY(-".concat(scroll / 10, "px)");
        });
      }
    }
  }, {
    key: "lazyload",
    value: function lazyload($projects) {
      var _this2 = this;

      var windowHeight = window.innerHeight;
      this.container.addEventListener('scroll', function () {
        var _loop = function _loop(i) {
          var $project = $projects[i];

          if ($project.getBoundingClientRect().top < 0.8 * windowHeight) {
            if ($project.complete || $project.readyState >= 2) {
              gsap.to($project, {
                duration: 0.4,
                opacity: 1
              });
            } else if ($project.nodeName == 'IMG') {
              $project.addEventListener('load', function () {
                gsap.to($project, {
                  duration: 0.4,
                  opacity: 1
                });
              });
            } else {
              $project.addEventListener('loadeddata', function () {
                gsap.to($project, {
                  duration: 0.4,
                  opacity: 1
                });
              });
            }

            $project.addEventListener('click', function () {
              _this2.viewer($project);
            });
            $projects.splice(i, 1);
          }
        };

        for (var i = 0; i < $projects.length; i++) {
          _loop(i);
        }
      });
    }
  }, {
    key: "viewer",
    value: function viewer($project) {
      var $viewer = document.createElement('div');
      $viewer.classList.add('viewer');
      this.container.appendChild($viewer);
      $viewer.appendChild($project.cloneNode(true));
      $viewer.addEventListener('click', function () {
        $viewer.remove();
      });
    }
  }]);

  return Gallery;
}();
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LottieAnimations = /*#__PURE__*/function () {
  function LottieAnimations(path) {
    _classCallCheck(this, LottieAnimations);

    
    
    var $nav = document.querySelector('.nav-logo');
    var navAnimation = lottie.loadAnimation({
      container: $nav,
      // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: false,
      speed: 2,
      path: path + '/data.json' // the path to the animation json

    });
    $nav.addEventListener('mouseenter', function () {
      navAnimation.setDirection(1);
      navAnimation.play();
    });
    $nav.addEventListener('mouseleave', function () {
      navAnimation.setDirection(-1);
      navAnimation.play();
    });
    this.reactId = Math.floor(Math.random() * 5 + 1);
  }

  _createClass(LottieAnimations, [{
    key: "react",
    value: function react(container) {
      var reactAnimation = lottie.loadAnimation({
        container: container,
        // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "../assets/js/".concat(this.reactId, ".json") // the path to the animation json

      });
      this.reactId + 1 == 6 ? this.reactId = 1 : this.reactId++;
      return reactAnimation;
    }
  }]);

  return LottieAnimations;
}();
"use strict";

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu(container) {
    _classCallCheck(this, Menu);

    this.container = container;
    this.init();
  }

  _createClass(Menu, [{
    key: "init",
    value: function init() {
      this.circle = window.innerWidth >= 650 ? true : false;
      this.offset = this.circle ? 2 : 10;
      this.getSectors();
      this.linkboxes = Array.from(this.container.querySelectorAll('.link-box'));
      this.listen();
    }
  }, {
    key: "getSectors",
    value: function getSectors() {
      this.sectors = [];

      if (window.innerWidth >= 650) {
        for (var _i = 0, _Array$from = Array.from(this.container.querySelectorAll(".sektor")); _i < _Array$from.length; _i++) {
          var $sector = _Array$from[_i];
          var sector = {
            element: $sector,
            active: false,
            angle_o: 126,
            angle_c: 25,
            rotate: 0,
            color: '#567DF8',
            text: 'Work'
          };
          this.sectors.push(sector);
        }

        this.sectors[0].active = true;
        this.sectors[1].rotate = 128;
        this.sectors[1].color = '#E63E33';
        this.sectors[1].text = 'About';
        this.sectors[2].rotate = 155;
        this.sectors[2].color = '#FAC242';
        this.sectors[2].text = 'Contact';

        var _iterator = _createForOfIteratorHelper(this.sectors),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _sector = _step.value;
            _sector.sektor = new Sektor(_sector.element, _sector.active ? _sector.angle_o : _sector.angle_c, _sector.rotate, _sector.color, _sector.text);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        for (var _i2 = 0, _Array$from2 = Array.from(this.container.querySelectorAll(".sektor")); _i2 < _Array$from2.length; _i2++) {
          var _$sector = _Array$from2[_i2];
          var _sector2 = {
            element: _$sector,
            active: false,
            angle_o: 370,
            angle_c: 120,
            rotate: 0,
            color: '#567DF8',
            text: 'Work'
          };
          this.sectors.push(_sector2);
        }

        this.sectors[0].active = true;
        this.sectors[1].rotate = 380; //this.sectors[1].angle_o = 170

        this.sectors[1].color = '#E63E33';
        this.sectors[1].text = 'About';
        this.sectors[2].rotate = 510; //this.sectors[2].angle_o = 305

        this.sectors[2].color = '#FAC242';
        this.sectors[2].text = 'Contact';

        var _iterator2 = _createForOfIteratorHelper(this.sectors),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _sector3 = _step2.value;
            _sector3.sektor = new RecSektor(_sector3.element, _sector3.active ? _sector3.angle_o : _sector3.angle_c, _sector3.rotate, _sector3.color, _sector3.text);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
  }, {
    key: "changeSector",
    value: function changeSector(SectorID) {
      var _this = this;

      var _loop = function _loop(i) {
        var linkbox = _this.linkboxes[i];

        if (i != SectorID) {
          _this.sectors[i].active = false;
          _this.sectors[i].rotate = i == 0 ? 0 : (_this.sectors[i - 1].active ? _this.sectors[i - 1].angle_o : _this.sectors[i - 1].angle_c) + _this.sectors[i - 1].rotate + _this.offset;

          _this.sectors[i].sektor.animateTo(_this.sectors[i].angle_c, _this.sectors[i].rotate);

          linkbox.style.display = "none";
          linkbox.classList.remove('active');
        } else {
          _this.sectors[i].active = true;
          _this.sectors[i].rotate = i == 0 ? 0 : _this.sectors[i - 1].angle_c + _this.sectors[i - 1].rotate + _this.offset;

          _this.sectors[i].sektor.animateTo(_this.sectors[i].angle_o, _this.sectors[i].rotate);

          linkbox.style.display = "block";
          window.setTimeout(function () {
            linkbox.classList.add('active');
          }, 5);
        }
      };

      for (var i = 0; i < this.sectors.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this2 = this;

      this.touchFunction = function (e) {
        var touch = e.changedTouches[0];

        if (touch.clientY <= _this2.sectors[1].sektor.sector.getBoundingClientRect().top) {
          if (!_this2.sectors[0].active) {
            e.preventDefault();

            _this2.changeSector(0);
          }
        } else if (touch.clientY >= _this2.sectors[1].sektor.sector.getBoundingClientRect().bottom) {
          if (!_this2.sectors[2].active) {
            e.preventDefault();

            _this2.changeSector(2);
          }
        } else {
          if (!_this2.sectors[1].active) e.preventDefault();
          {
            _this2.changeSector(1);
          }
        }
      };

      this.mouseFunction = function (e) {
        if (window.innerWidth < 650 || e.clientX > window.innerWidth / 2) {
          if (e.clientY <= _this2.sectors[1].sektor.sector.getBoundingClientRect().top) {
            if (!_this2.sectors[0].active) {
              _this2.changeSector(0);
            }
          } else if (e.clientY >= _this2.sectors[1].sektor.sector.getBoundingClientRect().bottom) {
            if (!_this2.sectors[2].active) {
              _this2.changeSector(2);
            }
          } else {
            if (!_this2.sectors[1].active) {
              _this2.changeSector(1);
            }
          }
        }
      };

      if (Modernizr.touchevents) {
        this.container.addEventListener('touchend', this.touchFunction);
      } else {
        this.container.addEventListener('mousemove', this.mouseFunction);
      }
    }
  }, {
    key: "adapt",
    value: function adapt(width) {
      if (this.circle && width < 650 || !this.circle && width >= 650) {
        var _iterator3 = _createForOfIteratorHelper(this.sectors),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var sector = _step3.value;
            sector.element.innerHTML = "";
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        this.linkboxes[0].style.display = "block";
        this.linkboxes[0].classList.add('active');
        this.linkboxes[1].style.display = "none";
        this.linkboxes[1].classList.remove('active');
        this.linkboxes[2].style.display = "none";
        this.linkboxes[2].classList.remove('active');
        this.container.removeEventListener('touchend', this.touchFunction);
        this.container.removeEventListener('mousemove', this.mouseFunction);
        this.init();
      }
    }
  }]);

  return Menu;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RecSektor = /*#__PURE__*/function () {
  function RecSektor(selector, angle, rotate, color, text) {
    _classCallCheck(this, RecSektor);

    this.element = selector;
    this.options = {
      size: window.innerWidth,
      stroke: 12,
      arc: true,
      angle: 180,
      sectorColor: color,
      circleColor: 'none',
      fillCircle: false,
      rotate: 0,
      text: text
    }; // Merge options with default ones

    this.options.angle = angle;
    this.options.rotate = rotate; // Reset stroke to 0 if drawing full sector

    this.options.stroke = this.options.arc ? this.options.stroke : 0; // Circle dimenstions

    this.options.center = this.options.size / 2;
    this.options.radius = this.options.stroke ? this.options.center - 50 - this.options.stroke / 2 : this.options.center - 50;
    var svg = "<svg style='width:".concat(this.options.size, "px; height:650px;' class='Sektor' xmlns=\"http://www.w3.org/2000/svg\" \n    xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox='0 0 ").concat(this.options.size, " 650'>\n      ").concat(this.getSector(), "\n    </svg>");
    this.element.innerHTML = svg;
    this.innerCircle = this.element.querySelector('.inner-circle');
    this.group = this.element.querySelector('.group');
    this.text = this.group.querySelector('.text');
    this.sector = this.group.querySelector('.Sektor-sector');
  }

  _createClass(RecSektor, [{
    key: "changeAngle",
    value: function changeAngle(angle, rotate) {
      this.options.angle = angle;
      this.options.rotate = rotate;
      this.sector.setAttribute('d', this.getSector(true));
      this.text.setAttribute('transform', "rotate(90 2,24) translate(".concat(rotate, ")"));
    }
  }, {
    key: "step",
    value: function step(ease) {
      var _this = this;

      if (Math.abs(this.options.endAngle - this.options.angle) <= 0.1 && Math.abs(this.options.endRotate - this.options.rotate) <= 0.1) {
        this.changeAngle(this.options.endAngle, this.options.endRotate);
      } else {
        //const angle = endAngle - (angleOffset * timeOffset / time);
        var angle = this.options.angle + (this.options.endAngle - this.options.angle) / ease;
        var rotate = this.options.rotate + (this.options.endRotate - this.options.rotate) / ease;
        this.changeAngle(angle, rotate);
        requestAnimationFrame(function () {
          return _this.step(ease);
        });
      }
    }
  }, {
    key: "animateTo",
    value: function animateTo(angle, rotate) {
      var _this2 = this;

      var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      this.options.endAngle = angle;
      this.options.endRotate = rotate;
      requestAnimationFrame(function () {
        return _this2.step(ease);
      });
    }
  }, {
    key: "getSector",
    value: function getSector() {
      var returnD = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options; // Colors

      var sectorFill = options.arc ? 'none' : options.sectorColor;
      var sectorStroke = options.arc ? options.sectorColor : 'none';
      var d = "M16 ".concat(18 + options.rotate, " l 0 ").concat(options.angle);

      if (returnD) {
        return d;
      }

      return "\n    <g class='group'>\n    <path\n      class='Sektor-sector'\n      id='curve'\n      stroke-width='".concat(options.stroke, "px'\n      fill=").concat(sectorFill, "\n      stroke=").concat(sectorStroke, "\n      d='").concat(d, "' />\n    <style>\n    text { \n        font-size: 26px;\n        font-family: 'Okta', sans-serif;\n        font-weight: 700; \n        letter-spacing: 0px;\n    }\n    </style>\n    <text class='text' x='2' y='24' transform=\"rotate(90 2,24) translate(").concat(options.rotate, ")\">\n          ").concat(options.text, "\n    </text>\n    </g>");
    }
  }]);

  return RecSektor;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sektor = /*#__PURE__*/function () {
  function Sektor(selector, angle, rotate, color, text) {
    _classCallCheck(this, Sektor);

    this.element = selector;
    this.options = {
      size: 640,
      stroke: 12,
      arc: true,
      angle: 180,
      sectorColor: color,
      circleColor: 'none',
      fillCircle: false,
      rotate: 0,
      text: text
    }; // Merge options with default ones

    this.options.angle = angle;
    this.options.rotate = rotate; // Reset stroke to 0 if drawing full sector

    this.options.stroke = this.options.arc ? this.options.stroke : 0; // Circle dimenstions

    this.options.center = this.options.size / 2;
    this.options.radius = this.options.stroke ? this.options.center - 50 - this.options.stroke / 2 : this.options.center - 50;
    this.checkAngle();
    var svg = "<svg class='Sektor' xmlns=\"http://www.w3.org/2000/svg\" \n    xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox='0 0 ".concat(this.options.size, " ").concat(this.options.size, "'>\n      <circle class=\"inner-circle\" stroke-width=\"2\" fill=\"none\" stroke=").concat(this.options.angle > 110 ? this.options.sectorColor : 'none', " cx=\"320\" cy=\"320\" r=\"254\"></circle>\n\n      ").concat(this.getCircle(), "\n      ").concat(this.getSector(), "\n    </svg>");
    this.element.innerHTML = svg;
    this.innerCircle = this.element.querySelector('.inner-circle');
    this.group = this.element.querySelector('.group');
    this.sector = this.group.querySelector('.Sektor-sector');
  }

  _createClass(Sektor, [{
    key: "checkAngle",
    value: function checkAngle() {
      if (this.options.angle > 360) {
        this.options.angle = this.options.angle % 360;
      }
    }
  }, {
    key: "changeAngle",
    value: function changeAngle(angle, rotate) {
      this.options.angle = angle;
      this.options.rotate = rotate;
      this.checkAngle();
      this.sector.setAttribute('d', this.getSector(true));
      this.group.setAttribute('transform', "rotate(".concat(this.options.rotate, ",").concat(this.options.center, ",").concat(this.options.center, ")"));
    }
  }, {
    key: "step",
    value: function step(ease) {
      var _this = this;

      if (Math.abs(this.options.endAngle - this.options.angle) <= 0.1 && Math.abs(this.options.endRotate - this.options.rotate) <= 0.1) {
        this.changeAngle(this.options.endAngle, this.options.endRotate);
      } else {
        //const angle = endAngle - (angleOffset * timeOffset / time);
        var angle = this.options.angle + (this.options.endAngle - this.options.angle) / ease;
        var rotate = this.options.rotate + (this.options.endRotate - this.options.rotate) / ease;
        this.changeAngle(angle, rotate);
        requestAnimationFrame(function () {
          return _this.step(ease);
        });
      }
    }
  }, {
    key: "animateTo",
    value: function animateTo(angle, rotate) {
      var _this2 = this;

      var ease = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      if (angle > 360) {
        angle = angle % 360;
      }

      this.options.endAngle = angle;
      this.options.endRotate = rotate;

      if (angle > this.options.angle) {
        this.innerCircle.setAttribute('stroke', this.options.sectorColor);
      } else {
        this.innerCircle.setAttribute('stroke', 'none');
      }
      /*const startTime = new Date().valueOf();
      const endTime = startTime + time;*/
      //const angleOffset = angle - this.options.angle;


      requestAnimationFrame(function () {
        return _this2.step(ease);
      });
    }
  }, {
    key: "getSector",
    value: function getSector() {
      var returnD = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options; // Colors

      var sectorFill = options.arc ? 'none' : options.sectorColor;
      var sectorStroke = options.arc ? options.sectorColor : 'none'; // Arc angles

      var firstAngle = options.angle > 180 ? 90 : options.angle - 90;
      var secondAngle = -270 + options.angle - 180; // Arcs

      var firstArc = this.getArc(firstAngle, options);
      var secondArc = options.angle > 180 ? this.getArc(secondAngle, options) : ''; // start -> starting line
      // end -> will path be closed or not

      var end = '';
      var start = null;

      if (options.arc) {
        start = "M".concat(options.center, ",").concat(options.stroke / 2 + 50);
      } else {
        start = "M".concat(options.center, ",").concat(options.center, " L").concat(options.center, ",").concat(options.stroke / 2 + 50);
        end = 'z';
      }

      var d = "".concat(start, " ").concat(firstArc, " ").concat(secondArc, " ").concat(end);

      if (returnD) {
        return d;
      }

      return "\n    <g class='group' transform='rotate(".concat(options.rotate, ",").concat(options.center, ",").concat(options.center, ")'>\n    <path\n      class='Sektor-sector'\n      id='curve'\n      stroke-width='").concat(options.stroke, "'\n      fill=").concat(sectorFill, "\n      stroke=").concat(sectorStroke, "\n      d='").concat(d, "' />\n    <style>\n    text { \n        font-size: 26px;\n        font-family: 'Okta', sans-serif;\n        font-weight: 700; \n        letter-spacing: 0px;\n    }\n    </style>\n    <text dx=\"4\" dy=\"2\">\n        <textPath xlink:href=\"#curve\">\n            ").concat(options.text, "\n        </textPath>\n    </text>\n    </g>");
    }
  }, {
    key: "getCircle",
    value: function getCircle() {
      var options = this.options;
      var circleFill = options.fillCircle || !options.arc ? options.circleColor : 'none';
      return "<circle\n      class='Sektor-circle'\n      stroke-width='".concat(options.stroke, "'\n      fill=").concat(circleFill, "\n      stroke=").concat(options.circleColor, "\n      cx='").concat(options.center, "'\n      cy='").concat(options.center, "'\n      r='").concat(options.radius, "' />");
    }
  }, {
    key: "getArc",
    // Generates SVG arc string
    value: function getArc(angle) {
      var options = this.options;
      var x = options.center + options.radius * Math.cos(this.radians(angle));
      var y = options.center + options.radius * Math.sin(this.radians(angle));
      return "A".concat(options.radius, ",").concat(options.radius, " 1 0 1 ").concat(x, ",").concat(y);
    }
  }, {
    key: "radians",
    // Converts from degrees to radians.
    value: function radians(degrees) {
      return degrees / 180 * Math.PI;
    }
  }]);

  return Sektor;
}();
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);

var windowSize = [window.innerWidth, window.innerHeight];
var fluidContainers = null;
var anims = new LottieAnimations(window.location.origin + '/assets/js');
var barbaInit = new BarbaInit();
window.addEventListener('resize', function () {
  windowSize[0] = window.innerWidth;
  windowSize[1] = window.innerHeight;

  if (barbaInit.fluidContainers) {
    barbaInit.fluidContainers.adapt();
  }

  if (barbaInit.menu) {
    barbaInit.menu.adapt(windowSize[0]);
  }
});