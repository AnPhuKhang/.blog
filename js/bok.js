function going_up() {
	! function (f) {
		function o(t, e) {
			var o, i, n, a, s, l = this,
				r = 5e3,
				c = 96;

			function d() {
				a = setTimeout(function () {
					l.btnElement.removeClass(l.revealClass), l.btnElement.removeClass(l.revealClassDown)
				}, r)
			}
			l.btnClass = ".goup", l.revealClass = "reveal", l.revealClassDown = "reveal_down", l.btnElement = f(l.btnClass), l.initial = {
				revealElement: "head",
				revealPosition: "top",
				padding: 0,
				duration: 600,
				easing: "swing",
				onScrollEnd: !1
			}, l.options = f.extend({}, l.initial, e), l.revealElement = f(l.options.revealElement), o = "bottom" !== l.options.revealPosition ? l.revealElement.offset().top : l.revealElement.offset().top + l.revealElement.height(), i = t.offsetTop + l.options.padding, f(document).scroll(function () {
				clearTimeout(a);
				var t = f(this).scrollTop();
				if (ScrollCurrent = f(document).scrollTop(), s = c - ScrollCurrent, o < f(document).scrollTop() ? (s < 0 ? (l.btnElement.removeClass(l.revealClass), l.btnElement.addClass(l.revealClassDown)) : (l.btnElement.addClass(l.revealClass), l.btnElement.removeClass(l.revealClassDown)), d()) : l.btnElement.removeClass(l.revealClass), t + f(window).height() > .99 * f(document).height()) return l.btnElement.removeClass(l.revealClass), void l.btnElement.removeClass(l.revealClassDown);
				c = ScrollCurrent
			}), f("html").click(function () {
				clearTimeout(a), s < 0 ? 0 == c ? event.stopPropagation() : (l.btnElement.removeClass(l.revealClass), l.btnElement.addClass(l.revealClassDown), d()) : 0 == c ? event.stopPropagation() : (l.btnElement.addClass(l.revealClass), l.btnElement.removeClass(l.revealClassDown), d())
			}), l.btnElement.hover(function () {
				clearTimeout(a), l.btnElement.css("background-color", "#ec0b25")
			}, function () {
				d(), l.btnElement.css("background-color", "#ff811a")
			}), l.btnElement.click(function () {
				window.addEventListener("scroll", p, !0), l.btnElement.css("background-color", "#ec0b25");
				var e = !0;
				return s < 0 ? f("html,body").animate({
					scrollTop: f(window).scrollTop() + 550
				}, l.options.duration, l.options.easing, function () {
					if (e) {
						e = !1;
						var t = l.options.onScrollEnd;
						"function" == typeof t && t()
					}
				}) : f("html, body").animate({
					scrollTop: i
				}, l.options.duration, l.options.easing, function () {
					if (e) {
						e = !1;
						var t = l.options.onScrollEnd;
						"function" == typeof t && t()
					}
				}), !1
			});
			var p = function () {
				window.clearTimeout(n), n = setTimeout(function () {
					"ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? l.btnElement.css("background-color", "#ff811a") : window.clearTimeout(a), window.removeEventListener("scroll", p, !0)
				}, 66)
			}
		}
		f.fn.BlakBinGoUp = function () {
			var t = this,
				e = arguments[0];
			t.length;
			return "object" != typeof e && void 0 !== e || (t[0].BlakBinGoUp = new o(t[0], e)), t
		}
	}(jQuery)
}

function blakbin_navi() {
	var t = document.querySelector(".blakbin-top-logo-row"),
		e = document.querySelector(".blakbin-nav-responsive"),
		o = !1;
	$("#hamburger_menu").click(function () {
		e.classList.add("blakbin-nav-responsive-open"), $(".blakbin-site-mask").css({
			display: "block",
			opacity: "0.5",
			transition: "opacity 200ms ease 0s"
		}), document.body.style.overflow = "hidden"
	}), $(".blakbin-site-mask, .blakbin-nav-responsive-back").click(function () {
		e.classList.remove("blakbin-nav-responsive-open"), $(".blakbin-site-mask").css({
			display: "none",
			opacity: "0",
			transition: "opacity 600ms ease 0s"
		}), document.body.style.overflow = ""
	}), $("#cse_button").click(function () {
		if (o) return t.classList.remove("blakbin-responsive-search-open"), void(o = !1);
		t.classList.add("blakbin-responsive-search-open"), $(".blakbin-search-field").focus(), o = !0
	}), $(".blakbin-search-field").focus(function () {
		t.classList.add("blakbin-search-active")
	}), $(".blakbin-search-field").blur(function () {
		t.classList.remove("blakbin-search-active")
	})
}! function (t) {
	var e = t(window),
		o = t("html");
	e.resize(function () {
		if (e.width() <= 1024) return o.removeClass("desktop"), o.addClass("mobile");
		o.removeClass("mobile"), o.addClass("desktop")
	}).trigger("resize")
}(jQuery),
function (y) {
	y.fn.plok = function (t) {
		var e, o, i, n, a, s;

		function l(t, e) {
			return !0 === t.initialized || !(y("body").width() < t.minWidth) && (function (C, t) {
				C.initialized = !0, 0 === y("#blak-magic-bar-stylesheet-" + C.namespace).length && y("head").append(y('<style id="blak-magic-bar-stylesheet-' + C.namespace + '">.plok:after {content: ""; display: table; clear: both;}</style>'));
				t.each(function () {
					var t = {};
					if (t.flea = y(this), t.options = C || {}, t.container = y(t.options.containerSelector), 0 == t.container.length && (t.container = t.flea.parent()), t.flea.parents().css("-webkit-transform", "none"), t.flea.css({
						position: t.options.defaultPosition,
						overflow: "visible",
						"-webkit-box-sizing": "border-box",
						"-moz-box-sizing": "border-box",
						"box-sizing": "border-box"
					}), t.tick = t.flea.find(".plok"), 0 == t.tick.length) {
						var o = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
						t.flea.find("script").filter(function (t, e) {
							return 0 === e.type.length || e.type.match(o)
						}).remove(), t.tick = y("<div>").addClass("plok").append(t.flea.children()), t.flea.append(t.tick)
					}
					t.marginBottom = parseInt(t.flea.css("margin-bottom")), t.paddingTop = parseInt(t.flea.css("padding-top")), t.paddingBottom = parseInt(t.flea.css("padding-bottom"));
					var e, i, n, a = t.tick.offset().top,
						s = t.tick.outerHeight();

					function w() {
						t.fixedScrollTop = 0, t.flea.css({
							"min-height": "1px"
						}), t.tick.css({
							position: "static",
							width: "",
							transform: "none"
						})
					}
					t.tick.css("padding-top", 1), t.tick.css("padding-bottom", 1), a -= t.tick.offset().top, s = t.tick.outerHeight() - s - a, 0 == a ? (t.tick.css("padding-top", 0), t.tickPaddingTop = 0) : t.tickPaddingTop = 1, 0 == s ? (t.tick.css("padding-bottom", 0), t.tickPaddingBottom = 0) : t.tickPaddingBottom = 1, t.previousScrollTop = null, t.fixedScrollTop = 0, w(), t.onScroll = function (t) {
						if (t.tick.is(":visible"))
							if (y("body").width() < t.options.minWidth) w();
							else {
								if (t.options.disableOnResponsiveLayouts) {
									var e = t.flea.outerWidth("none" == t.flea.css("float"));
									if (e + 50 > t.container.width()) return void w()
								}
								var o, i, n = y(document).scrollTop(),
									a = "static";
								if (n >= t.flea.offset().top + (t.paddingTop - t.options.additionalMarginTop)) {
									var s, l = t.paddingTop + C.additionalMarginTop,
										r = t.paddingBottom + t.marginBottom + C.additionalMarginBottom,
										c = t.flea.offset().top,
										d = t.flea.offset().top + (o = t.container, i = o.height(), o.children().each(function () {
											i = Math.max(i, y(this).height())
										}), i),
										p = 0 + C.additionalMarginTop,
										f = t.tick.outerHeight() + l + r < y(window).height();
									s = f ? p + t.tick.outerHeight() : y(window).height() - t.marginBottom - t.paddingBottom - C.additionalMarginBottom;
									var u = c - n + t.paddingTop,
										m = d - n - t.paddingBottom - t.marginBottom,
										b = t.tick.offset().top - n,
										h = t.previousScrollTop - n;
									"fixed" == t.tick.css("position") && "modern" == t.options.fleaBehavior && (b += h), "stick-to-top" == t.options.fleaBehavior && (b = C.additionalMarginTop), "stick-to-bottom" == t.options.fleaBehavior && (b = s - t.tick.outerHeight()), b = 0 < h ? Math.min(b, p) : Math.max(b, s - t.tick.outerHeight()), b = Math.max(b, u), b = Math.min(b, m - t.tick.outerHeight());
									var v = t.container.height() == t.tick.outerHeight();
									a = (v || b != p) && (v || b != s - t.tick.outerHeight()) ? n + b - t.flea.offset().top - t.paddingTop <= C.additionalMarginTop ? "static" : "absolute" : "fixed"
								}
								if ("fixed" == a) {
									var g = y(document).scrollLeft();
									t.tick.css({
										position: "fixed",
										width: T(t.tick) + "px",
										transform: "translateY(" + b + "px)",
										left: t.flea.offset().left + parseInt(t.flea.css("padding-left")) - g + "px",
										top: "0px"
									})
								} else if ("absolute" == a) {
									var k = {};
									"absolute" != t.tick.css("position") && (k.position = "absolute", k.transform = "translateY(" + (n + b - t.flea.offset().top - t.tickPaddingTop - t.tickPaddingBottom) + "px)", k.top = "0px"), k.width = T(t.tick) + "px", k.left = "", t.tick.css(k)
								} else "static" == a && w();
								"static" != a && 1 == t.options.updatefleaHeight && t.flea.css({
									"min-height": t.tick.outerHeight() + t.tick.offset().top - t.flea.offset().top + t.paddingBottom
								}), t.previousScrollTop = n
							}
					}, t.onScroll(t), y(document).on("scroll." + t.options.namespace, (e = t, function () {
						e.onScroll(e)
					})), y(window).on("resize." + t.options.namespace, (i = t, function () {
						i.tick.css({
							position: "static"
						}), i.onScroll(i)
					})), "undefined" != typeof ResizeSensor && new ResizeSensor(t.tick[0], (n = t, function () {
						n.onScroll(n)
					}))
				})
			}(t, e), !0)
		}

		function T(t) {
			var e;
			try {
				e = t[0].getBoundingClientRect().width
			} catch (t) {}
			return void 0 === e && (e = t.width()), e
		}
		return (t = y.extend({
			containerSelector: "",
			additionalMarginTop: 0,
			additionalMarginBottom: 0,
			updatefleaHeight: !0,
			minWidth: 0,
			disableOnResponsiveLayouts: !0,
			fleaBehavior: "modern",
			defaultPosition: "relative",
			namespace: "TSS"
		}, t)).additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, l(e = t, o = this) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), y(document).on("scroll." + e.namespace, (a = e, s = o, function (t) {
			var e = l(a, s);
			e && y(this).unbind(t)
		})), y(window).on("resize." + e.namespace, (i = e, n = o, function (t) {
			var e = l(i, n);
			e && y(this).unbind(t)
		}))), this
	}
}(jQuery);
var blakInsertSidebarBlocks = function (s) {
	return function () {
		if (0 < s("body#layout").length) return !0;
		s("div.widget").each(function (t, e) {
			if (s(this).parent("#header").length) return s(this).hasClass("Header") || s(this).addClass("blak-header-widget"), !0;
			if (s(this).children(".blak-no-change").length) return !0;
			if ("Navbar1" == e.id) return !0;
			if ("Header1" == e.id) return !0;
			if ("Blog1" == e.id) return !0;
			if ("LinkList99" == e.id) return !0;
			if ("LinkList98" == e.id) return !0;
			if ("LinkList97" == e.id) return !0;
			if ("PageList98" == e.id) return !0;
			if ("PageList99" == e.id) return !0;
			if ("Text99" == e.id) return !0;
			if ("BlogArchive99" == e.id) return !0;
			var o = s(e);
			if ((o.hasClass("Gadget") || o.hasClass("Followers")) && browser.opera) return !0;
			var i = s("h2", o).text();
			s("h2", o).remove();
			var n = o.html();
			if (-1 < n.indexOf("googlesyndication.com")) return !0;
			if (-1 < n.indexOf("statcounter.com/counter/counter_xhtml.js")) return !0;
			if (-1 < n.indexOf("bravenet.com/counter/code.php")) return !0;
			var a = '<div class="blak-block clearfix" id="blak-block-' + e.id + '">';
			n = '<div class="blak-blockcontent">' + n + "</div>", i && (n = '<div class="blak-blockheader">            <h3 class="t">' + i + "</h3>        </div>" + n), s(o).html(a + n + "</div>"), o.hasClass("Subscribe") && o.css({
				position: "relative",
				"z-index": "2"
			})
		})
	}
}(jQuery);
jQuery(function () {
	blakInsertSidebarBlocks()
});