/*!
 *  jsMap v3.1.0
 *  Copyright (C) 2018-2019, ZhaoGang
 *  Released under the MIT license
 */
!
function(b, k) {
    "function" === typeof define && define.amd ? define("jsmap", ["jquery"], k) : "undefined" !== typeof module && "object" === typeof exports ? module.exports = k(require("jquery")) : b.jsMap = k(b.jQuery)
} ("undefined" !== typeof window ? window: this,
function(b) {
    if (navigator.userAgent.toLowerCase().match(/msie (6|7|8|9)\.0/)) throw Error(decodeURI("jsMap%20%E4%B8%8D%E6%94%AF%E6%8C%81%20ie9-%20%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8"));
    if ("undefined" === typeof jQuery) throw Error(decodeURI("%E8%AF%B7%E5%9C%A8%20jsMap%20%E5%89%8D%E5%BC%95%E5%85%A5%20jQuery"));
    var k = b.fn.jquery.split(".");
    if (1 === ~~k[0] && 12 > ~~k[1]) throw Error(decodeURI("jsMap%20%E8%A6%81%E6%B1%82%20jQuery%20%E7%9A%84%E7%89%88%E6%9C%AC%E4%B8%8D%E8%83%BD%E4%BD%8E%E4%BA%8E%201.12.0"));
    var t = b(document),
    p = b(""),
    l = {
        version: "3.1.0",
        config: function(c, g, f) {
            var h = {
                basicColor: "#145364",
                hoverColor: "#145364",
                clickColor: "#145364"
            },
            e = {
                name: "china",
                width: '100%',
                height: 450,
                stroke: {
                    width: 1,
                    color: "#f3f3f3"
                },
                fill: b.extend(!0, {},
                h),
                areaName: {
                    show: !1,
                    size: 12,
                    basicColor: "#333",
                    clickColor: "#fff"
                },
                disabled: {
                    color: "#bfbfbf",
                    except: !1,
                    name: []
                },
                hide: [],
                multiple: !1,
                tip: !0,
                hoverCallback: b.noop,
                clickCallback: b.noop
            },
            a = b.extend(!0, e, f);
            if (g && b.isPlainObject(g)) if ("taiwan" === a.name) console.warn("jsMap%20%E6%8F%90%E7%A4%BA%EF%BC%9A%E5%BE%88%E6%8A%B1%E6%AD%89%EF%BC%8C%E6%9A%82%E6%97%A0%E5%8F%B0%E6%B9%BE%E7%9C%81%E7%9A%84%E5%9C%B0%E5%9B%BE%E6%95%B0%E6%8D%AE%EF%BC%8C%E5%A6%82%E6%9C%89%E9%9C%80%E6%B1%82%EF%BC%8C%E8%AF%B7%E5%BC%80%E5%8F%91%E8%80%85%E8%87%AA%E8%A1%8C%E6%B7%BB%E5%8A%A0%E3%80%82");
            else {
                var k = "",
                l = "",
                q = [];
                b.each(g[a.name],
                function(b, a) {
                    q.push(b);
                    k += '\r\n\t\t\t\t\t\x3cpath \r\n\t\t\t\t\t\td\x3d"' + a.svg + '" \r\n\t\t\t\t\t\tclass\x3d"jsmap-' + b + '" \r\n\t\t\t\t\t\tdata-name\x3d"' + a.name + '" \r\n\t\t\t\t\t\tdata-id\x3d"' + b + '" \r\n\t\t\t\t\t\tstyle\x3d"cursor:pointer;"\x3e\r\n\t\t\t\t\t\x3c/path\x3e\r\n\t\t\t\t';
                    l += '\r\n\t\t\t\t\t\x3ctext \r\n\t\t\t\t\t\tx\x3d"' + a.textPosition[0] + '" \r\n\t\t\t\t\t\ty\x3d"' + a.textPosition[1] + '" \r\n\t\t\t\t\t\tclass\x3d"jsmap-' + b + '" \r\n\t\t\t\t\t\tdata-name\x3d"' + a.name + '" \r\n\t\t\t\t\t\tdata-id\x3d"' + b + '" \r\n\t\t\t\t\t\tstyle\x3d"cursor:pointer;"\x3e\r\n\t\t\t\t\t\t' + a.name + "\r\n\t\t\t\t\t\x3c/text\x3e\r\n\t\t\t\t"
                });
                a.areaName.show || (l = "");
                k = '\x3cdiv \r\n\t\t\t\tclass\x3d"jsmap-svg-container" \r\n\t\t\t\tstyle\x3d"\r\n\t\t\t\t\tposition:absolute;\r\n\t\t\t\t\ttop:0;\r\n\t\t\t\t\tleft:0;\r\n\t\t\t\t\tpadding:0;\r\n\t\t\t\t\tmargin:0;\r\n\t\t\t\t\ttransform-origin:center;\r\n\t\t\t\t\t-webkit-user-select:none;\r\n\t\t\t\t\t-moz-user-select:none;\r\n\t\t\t\t\t-ms-user-select:none;\r\n\t\t\t\t\tuser-select:none;"\r\n\t\t\t\t\x3e\r\n\t\t\t\t\x3csvg version\x3d"1.1" xmlns\x3d"http://www.w3.org/2000/svg" viewBox\x3d"0 0 575 470"\x3e' + k + l + "\x3c/svg\x3e\r\n\t\t\t\x3c/div\x3e";
                b(c).each(function() {
                    var c = b(this);
                    c.data("__jsmap_csscache__", {
                        width: this.style.width,
                        height: this.style.height,
                        padding: this.style.padding,
                        position: this.style.position
                    });
                    "static" === c.css("position") && c.css("position", "relative");
                    c.addClass("jsmap-container").css({
                        width: a.width + "px",
                        height: a.height + "px",
                        padding: 0
                    }).empty().append(k).data({
                        __jsmap_jsondata__: g,
                        __jsmap_options__: f
                    });
                    var e = c.children(),
                    l = c.find("svg"),
                    n = l.find("path"),
                    m = l.find("text"),
                    u = n.add(m);
                    e.width(a.width).height(a.height);
                    a.multiple && e.data("__jsmap_multiple__", !0);
                    l.attr({
                        width: a.width,
                        height: a.height
                    }).css({
                        position: "relative",
                        overflow: "hidden",
                        marginLeft: "china" === a.name ? "-55px": 0
                    });
                    m.each(function() {
                        b(this).attr("data-id").match(/(shanghai|xianggang|aomen|nanhaizhudao|tianjin|beijing)/) || b(this).css("pointerEvents", "none")
                    });
                    Array.isArray(a.hide) && a.hide.length && b.each(a.hide,
                    function(b, a) {
                        u.filter('[data-id\x3d"' + a + '"], [data-name\x3d"' + a + '"]').hide()
                    });
                    e = a.fill.basicColor;
                    "string" === typeof e && n.attr({
                        fill: e,
                        "data-fill": e
                    });
                    b.isPlainObject(e) && !b.isEmptyObject(e) && (n.attr({
                        fill: "#145364",
                        "data-fill": "#145364"
                    }), b.each(e,
                    function(b, a) {
                        n.filter(".jsmap-" + b).attr({
                            fill: a,
                            "data-fill": a
                        })
                    }));
                    var x = window.setTimeout(function() {
                        n.css("transition", ".2s");
                        window.clearTimeout(x)
                    },
                    13);
                    n.attr({
                        stroke: a.stroke.color,
                        "stroke-width": a.stroke.width
                    });
                    a.areaName.show && m.attr({
                        fill: a.areaName.basicColor,
                        "font-size": a.areaName.size
                    });
                    m = a.disabled.name;
                    if (Array.isArray(m) && m.length) {
                        var v = function(c) {
                            b(c).addClass("jsmap-disabled").css("cursor", "not-allowed").not("text").attr("fill", a.disabled.color)
                        };
                        if (a.disabled.except) {
                            var w = [];
                            b.each(m,
                            function(b, a) {
                                w.push(a.match(/[a-z]/) ? a: n.filter('[data-name\x3d"' + a + '"]').attr("data-id"))
                            });
                            var r = b.extend(!0, [], q);
                            b.each(w,
                            function(b, a) {
                                r.splice(r.indexOf(a), 1)
                            });
                            b.each(r,
                            function(a, b) {
                                v(c.find(".jsmap-" + b))
                            })
                        } else b.each(m,
                        function(b, a) {
                            v(c.find(a.match(/[a-z]/) ? ".jsmap-" + a: '[data-name\x3d"' + a + '"]'))
                        })
                    }
                    a.tip && !b("#jsmap-tip").length && (b("body").append('\x3csection \r\n\t\t\t\t\t\t\tid\x3d"jsmap-tip" \r\n\t\t\t\t\t\t\tstyle\x3d"\r\n\t\t\t\t\t\t\tposition:absolute;\r\n\t\t\t\t\t\t\ttop:0;\r\n\t\t\t\t\t\t\tleft:0;\r\n\t\t\t\t\t\t\tz-index:999;\r\n\t\t\t\t\t\t\tdisplay:inline-block;\r\n\t\t\t\t\t\t\twidth:auto;\r\n\t\t\t\t\t\t\theight:auto;\r\n\t\t\t\t\t\t\toverflow:hidden;\r\n\t\t\t\t\t\t\tdisplay:none;"\r\n\t\t\t\t\t\t\x3e\x3c/section\x3e'), p = b("#jsmap-tip"));
                    b.each(q,
                    function(g, e) {
                        c.find(".jsmap-" + e).on({
                            mouseenter: function() {
                                var d = b(this);
                                if (!d.hasClass("jsmap-disabled")) {
                                    if (!d.hasClass("jsmap-clicked")) {
                                        var c = b.extend(!0, [], q);
                                        "string" === typeof a.fill.hoverColor && d.filter("path").attr("fill", a.fill.hoverColor);
                                        b.isPlainObject(a.fill.hoverColor) && !b.isEmptyObject(a.fill.hoverColor) && (b.each(a.fill.hoverColor,
                                        function(a, b) {
                                            d.filter(".jsmap-" + a).attr("fill", b);
                                            c.splice(c.indexOf(a), 1)
                                        }), b.each(c,
                                        function(a, b) {
                                            d.filter(".jsmap-" + b).attr("fill", h.hoverColor)
                                        }))
                                    }
                                    a.hoverCallback(d.attr("data-id"), d.attr("data-name"));
                                    a.tip && (!0 === a.tip && p.html('\x3cdiv \r\n\t\t\t\t\t\t\t\t\t\tstyle\x3d"\r\n\t\t\t\t\t\t\t\t\t\t\tpadding:10px 12px;\r\n\t\t\t\t\t\t\t\t\t\t\tcolor:#fff;\r\n\t\t\t\t\t\t\t\t\t\t\tfont-size:14px;\r\n\t\t\t\t\t\t\t\t\t\t\ttext-align:center;\r\n\t\t\t\t\t\t\t\t\t\t\tborder-radius:4px;\r\n\t\t\t\t\t\t\t\t\t\t\tborder:#777 solid 1px;\r\n\t\t\t\t\t\t\t\t\t\t\tbackground:rgba(0,0,0,.75);"\r\n\t\t\t\t\t\t\t\t\t\x3e' + d.attr("data-name") + "\x3c/div\x3e"), b.isFunction(a.tip) && p.html(a.tip(d.attr("data-id"), d.attr("data-name"))), t.on("mousemove",
                                    function(a) {
                                        p.css("transform", "translate3d(" + (a.pageX + 12 + "px") + ", " + (a.pageY + 12 + "px") + ", 0)");
                                        p.show()
                                    }))
                                }
                            },
                            mouseleave: function() {
                                var c = b(this);
                                c.hasClass("jsmap-disabled") || (c.hasClass("jsmap-clicked") || c.filter("path").attr("fill", c.attr("data-fill")), a.tip && (p.empty().hide().css("transform", "translate3d(0, 0, 0)"), t.off("mousemove")))
                            },
                            click: function() {
                                var d = b(this);
                                if (!d.hasClass("jsmap-disabled")) {
                                    var e = d.attr("data-id");
                                    a.clickCallback(d.attr("data-id"), d.attr("data-name"));
                                    if (!1 !== a.fill.clickColor) {
                                        var g = b.extend(!0, [], q);
                                        "string" === typeof a.fill.clickColor && d.filter("path").attr("fill", a.fill.clickColor);
                                        b.isPlainObject(a.fill.clickColor) && !b.isEmptyObject(a.fill.clickColor) && (b.each(a.fill.clickColor,
                                        function(a, b) {
                                            d.filter(".jsmap-" + a).attr("fill", b);
                                            g.splice(g.indexOf(a), 1)
                                        }), b.each(g,
                                        function(a, b) {
                                            d.filter(".jsmap-" + b).attr("fill", h.clickColor)
                                        }));
                                        if (!1 !== a.areaName.clickColor && a.areaName.show) {
                                            var f = c.find("text.jsmap-" + d.attr("data-id"));
                                            f.attr("fill", a.areaName.clickColor);
                                            a.multiple || f.siblings("text").attr("fill", a.areaName.basicColor)
                                        }
                                        a.multiple ? (d.toggleClass("jsmap-clicked"), d.hasClass("jsmap-clicked") || d.attr("fill", d.attr("data-fill"))) : (d.addClass("jsmap-clicked"), u.not(".jsmap-" + e).not(".jsmap-disabled").removeClass("jsmap-clicked").each(function() {
                                            b(this).attr("fill", b(this).attr("data-fill"))
                                        }))
                                    }
                                }
                            }
                        })
                    })
                })
            }
        },
        refresh: function(c) {
            b(c).each(function() {
                var c = b(this),
                f = c.data("__jsmap_jsondata__"),
                h = c.data("__jsmap_options__");
                f && h && c.find("div.jsmap-svg-container \x3e svg").length && l.config(c, f, h)
            })
        },
        remove: function(c) {
            b(c).each(function() {
                var c = b(this),
                f = this,
                h = c.data("__jsmap_csscache__");
                h && b.each(h,
                function(b, a) {
                    a ? f.style[b] = a: f.style.removeProperty(b)
                });
                c.removeClass("jsmap-container").removeData("__jsmap_csscache__ __jsmap_jsondata__ __jsmap_options__").children().remove()
            })
        },
        multipleValue: function(c, g) {
            g = b.extend({},
            {
                type: "array"
            },
            g);
            c = b(c).first().children(".jsmap-svg-container");
            if (c.data("__jsmap_multiple__")) {
                c = c.find(".jsmap-clicked");
                if ("array" === g.type) {
                    var f = [],
                    h = [];
                    c.each(function() {
                        f.push(b(this).attr("data-id"));
                        h.push(b(this).attr("data-name"))
                    });
                    return [f, h]
                }
                if ("object" === g.type) {
                    var e = {};
                    c.each(function() {
                        e[b(this).attr("data-id")] = b(this).attr("data-name")
                    });
                    return e
                }
            } else return "array" === g.type ? [] : {}
        }
    }; !
    function g(f) {
        Object.freeze(f);
        b.each(Object.keys(f),
        function(b, e) {
            "object" === typeof f[e] && g(f[e])
        })
    } (l);
    return l
});
// JavaScript Document
