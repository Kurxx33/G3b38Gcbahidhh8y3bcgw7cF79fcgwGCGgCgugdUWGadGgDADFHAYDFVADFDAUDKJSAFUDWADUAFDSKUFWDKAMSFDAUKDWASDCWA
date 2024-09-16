(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
    5375: function(e, t, r) {
        Promise.resolve().then(r.bind(r, 1164)),
        Promise.resolve().then(r.bind(r, 7240)),
        Promise.resolve().then(r.t.bind(r, 8385, 23)),
        Promise.resolve().then(r.t.bind(r, 9593, 23)),
        Promise.resolve().then(r.t.bind(r, 3054, 23)),
        Promise.resolve().then(r.bind(r, 5725))
    },
    5725: function(e, t, r) {
        "use strict";
        r.d(t, {
            default: function() {
                return l
            }
        });
        var n = r(7437)
          , s = r(7138)
          , o = r(8309)
          , a = r(2200)
          , i = r(2265)
          , d = r(8174);
        function l() {
            let[e,t] = (0,
            i.useState)(null);
            return (0,
            i.useEffect)( () => {
                (async () => {
                    t(await (0,
                    d.Gg)())
                }
                )()
            }
            , []),
            (0,
            n.jsx)("header", {
                className: "bg-background py-4 shadow mx-4",
                children: (0,
                n.jsxs)("div", {
                    className: "container mx-auto flex items-center justify-between px-4 md:px-0",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0,
                        n.jsx)(c, {
                            className: "mr-2 h-6 w-6 text-foreground"
                        }), (0,
                        n.jsx)(s.default, {
                            href: "/",
                            className: "text-foreground font-bold",
                            prefetch: !1,
                            children: "csint.dev"
                        })]
                    }), (0,
                    n.jsx)("div", {
                        className: "flex items-center space-x-4 md:hidden",
                        children: (0,
                        n.jsxs)(o.h_, {
                            children: [(0,
                            n.jsx)(o.$F, {
                                asChild: !0,
                                children: (0,
                                n.jsx)(a.z, {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "rounded-full",
                                    children: (0,
                                    n.jsx)(f, {
                                        className: "h-6 w-6"
                                    })
                                })
                            }), (0,
                            n.jsxs)(o.AW, {
                                align: "end",
                                children: [(0,
                                n.jsx)(o.Xi, {
                                    children: (0,
                                    n.jsx)(s.default, {
                                        href: "/faq",
                                        className: "text-muted-foreground hover:text-foreground",
                                        prefetch: !1,
                                        children: "FAQ"
                                    })
                                }), (0,
                                n.jsx)(o.Xi, {
                                    children: (0,
                                    n.jsx)(s.default, {
                                        href: "https://discord.gg/identify",
                                        target: "__blank",
                                        className: "text-muted-foreground hover:text-foreground",
                                        prefetch: !1,
                                        children: "Discord"
                                    })
                                }), (0,
                                n.jsx)(o.Xi, {
                                    children: (0,
                                    n.jsx)(s.default, {
                                        href: "https://t.me/csint_dev",
                                        target: "__blank",
                                        className: "text-muted-foreground hover:text-foreground",
                                        prefetch: !1,
                                        children: "Telegram"
                                    })
                                }), (0,
                                n.jsx)(o.Xi, {
                                    children: e ? (0,
                                    n.jsx)(s.default, {
                                        href: "#",
                                        onClick: () => (0,
                                        d.w7)(),
                                        className: "rounded-lg bg-primary px-4 py-2 text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                        prefetch: !1,
                                        children: "Logout"
                                    }) : (0,
                                    n.jsx)(s.default, {
                                        href: "/register",
                                        className: "rounded-lg bg-primary px-4 py-2 text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                        prefetch: !1,
                                        children: "Register"
                                    })
                                })]
                            })]
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "hidden items-center space-x-4 md:flex",
                        children: [(0,
                        n.jsx)(s.default, {
                            href: "/faq",
                            className: "text-muted-foreground hover:text-foreground",
                            prefetch: !1,
                            children: "FAQ"
                        }), (0,
                        n.jsxs)(o.h_, {
                            children: [(0,
                            n.jsx)(o.$F, {
                                asChild: !0,
                                children: (0,
                                n.jsxs)(a.z, {
                                    variant: "outline",
                                    className: "rounded-lg border-input bg-background text-foreground focus:ring-primary focus:border-primary",
                                    children: ["Socials", (0,
                                    n.jsx)(u, {
                                        className: "ml-2 h-4 w-4"
                                    })]
                                })
                            }), (0,
                            n.jsxs)(o.AW, {
                                align: "start",
                                children: [(0,
                                n.jsx)(o.Xi, {
                                    children: (0,
                                    n.jsx)(s.default, {
                                        href: "https://t.me/csint_dev",
                                        className: "hover:text-foreground",
                                        prefetch: !1,
                                        children: "Telegram"
                                    })
                                }), (0,
                                n.jsx)(o.Xi, {
                                    children: (0,
                                    n.jsx)(s.default, {
                                        href: "https://discord.gg/identify",
                                        className: "hover:text-foreground",
                                        prefetch: !1,
                                        children: "Discord"
                                    })
                                })]
                            })]
                        }), e ? (0,
                        n.jsx)(a.z, {
                            onClick: () => (0,
                            d.w7)(),
                            className: "rounded-lg bg-primary px-4 py-2 text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                            children: "Logout"
                        }) : (0,
                        n.jsx)(s.default, {
                            href: "/register",
                            children: (0,
                            n.jsx)(a.z, {
                                className: "rounded-lg bg-primary px-4 py-2 text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                children: "Register"
                            })
                        })]
                    })]
                })
            })
        }
        function c(e) {
            return (0,
            n.jsxs)("svg", {
                ...e,
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [(0,
                n.jsx)("ellipse", {
                    cx: "12",
                    cy: "5",
                    rx: "9",
                    ry: "3"
                }), (0,
                n.jsx)("path", {
                    d: "M3 5V19A9 3 0 0 0 21 19V5"
                }), (0,
                n.jsx)("path", {
                    d: "M3 12A9 3 0 0 0 21 12"
                })]
            })
        }
        function f(e) {
            return (0,
            n.jsxs)("svg", {
                ...e,
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [(0,
                n.jsx)("line", {
                    x1: "4",
                    x2: "20",
                    y1: "12",
                    y2: "12"
                }), (0,
                n.jsx)("line", {
                    x1: "4",
                    x2: "20",
                    y1: "6",
                    y2: "6"
                }), (0,
                n.jsx)("line", {
                    x1: "4",
                    x2: "20",
                    y1: "18",
                    y2: "18"
                })]
            })
        }
        function u(e) {
            return (0,
            n.jsx)("svg", {
                ...e,
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: (0,
                n.jsx)("path", {
                    d: "m6 9 6 6 6-6"
                })
            })
        }
    },
    2200: function(e, t, r) {
        "use strict";
        r.d(t, {
            z: function() {
                return l
            }
        });
        var n = r(7437)
          , s = r(2265)
          , o = r(1538)
          , a = r(2218)
          , i = r(8214);
        let d = (0,
        a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-9 px-4 py-2",
                    sm: "h-8 rounded-md px-3 text-xs",
                    lg: "h-10 rounded-md px-8",
                    icon: "h-9 w-9"
                }
            },
            defaultVariants: {
                variant: "default",
                size: "default"
            }
        })
          , l = s.forwardRef( (e, t) => {
            let {className: r, variant: s, size: a, asChild: l=!1, ...c} = e
              , f = l ? o.g7 : "button";
            return (0,
            n.jsx)(f, {
                className: (0,
                i.cn)(d({
                    variant: s,
                    size: a,
                    className: r
                })),
                ref: t,
                ...c
            })
        }
        );
        l.displayName = "Button"
    },
    8309: function(e, t, r) {
        "use strict";
        r.d(t, {
            $F: function() {
                return l
            },
            AW: function() {
                return c
            },
            Xi: function() {
                return f
            },
            h_: function() {
                return d
            }
        });
        var n = r(7437)
          , s = r(2265)
          , o = r(2395)
          , a = r(4867)
          , i = r(8214);
        let d = o.fC
          , l = o.xz;
        o.ZA,
        o.Uv,
        o.Tr,
        o.Ee,
        s.forwardRef( (e, t) => {
            let {className: r, inset: s, children: d, ...l} = e;
            return (0,
            n.jsxs)(o.fF, {
                ref: t,
                className: (0,
                i.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", s && "pl-8", r),
                ...l,
                children: [d, (0,
                n.jsx)(a.XCv, {
                    className: "ml-auto h-4 w-4"
                })]
            })
        }
        ).displayName = o.fF.displayName,
        s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            n.jsx)(o.tu, {
                ref: t,
                className: (0,
                i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r),
                ...s
            })
        }
        ).displayName = o.tu.displayName;
        let c = s.forwardRef( (e, t) => {
            let {className: r, sideOffset: s=4, ...a} = e;
            return (0,
            n.jsx)(o.Uv, {
                children: (0,
                n.jsx)(o.VY, {
                    ref: t,
                    sideOffset: s,
                    className: (0,
                    i.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", r),
                    ...a
                })
            })
        }
        );
        c.displayName = o.VY.displayName;
        let f = s.forwardRef( (e, t) => {
            let {className: r, inset: s, ...a} = e;
            return (0,
            n.jsx)(o.ck, {
                ref: t,
                className: (0,
                i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s && "pl-8", r),
                ...a
            })
        }
        );
        f.displayName = o.ck.displayName,
        s.forwardRef( (e, t) => {
            let {className: r, children: s, checked: d, ...l} = e;
            return (0,
            n.jsxs)(o.oC, {
                ref: t,
                className: (0,
                i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
                checked: d,
                ...l,
                children: [(0,
                n.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0,
                    n.jsx)(o.wU, {
                        children: (0,
                        n.jsx)(a.nQG, {
                            className: "h-4 w-4"
                        })
                    })
                }), s]
            })
        }
        ).displayName = o.oC.displayName,
        s.forwardRef( (e, t) => {
            let {className: r, children: s, ...d} = e;
            return (0,
            n.jsxs)(o.Rk, {
                ref: t,
                className: (0,
                i.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", r),
                ...d,
                children: [(0,
                n.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0,
                    n.jsx)(o.wU, {
                        children: (0,
                        n.jsx)(a.jXb, {
                            className: "h-4 w-4 fill-current"
                        })
                    })
                }), s]
            })
        }
        ).displayName = o.Rk.displayName,
        s.forwardRef( (e, t) => {
            let {className: r, inset: s, ...a} = e;
            return (0,
            n.jsx)(o.__, {
                ref: t,
                className: (0,
                i.cn)("px-2 py-1.5 text-sm font-semibold", s && "pl-8", r),
                ...a
            })
        }
        ).displayName = o.__.displayName,
        s.forwardRef( (e, t) => {
            let {className: r, ...s} = e;
            return (0,
            n.jsx)(o.Z0, {
                ref: t,
                className: (0,
                i.cn)("-mx-1 my-1 h-px bg-muted", r),
                ...s
            })
        }
        ).displayName = o.Z0.displayName
    },
    8214: function(e, t, r) {
        "use strict";
        r.d(t, {
            cn: function() {
                return o
            }
        });
        var n = r(4839)
          , s = r(6164);
        function o() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return (0,
            s.m6)((0,
            n.W)(t))
        }
    },
    3054: function() {}
}, function(e) {
    e.O(0, [151, 310, 373, 395, 56, 174, 882, 971, 23, 744], function() {
        return e(e.s = 5375)
    }),
    _N_E = e.O()
}
]);
