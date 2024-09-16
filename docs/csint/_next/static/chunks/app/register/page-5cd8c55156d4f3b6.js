(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[11], {
    8190: function(e, r, t) {
        Promise.resolve().then(t.t.bind(t, 231, 23)),
        Promise.resolve().then(t.bind(t, 6294)),
        Promise.resolve().then(t.bind(t, 6593))
    },
    6294: function(e, r, t) {
        "use strict";
        t.d(r, {
            default: function() {
                return y
            }
        });
        var s = t(7437)
          , a = t(2265)
          , n = t(7147)
          , o = t(8364)
          , i = t(2218)
          , d = t(8214);
        let l = (0,
        i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
          , u = a.forwardRef( (e, r) => {
            let {className: t, ...a} = e;
            return (0,
            s.jsx)(o.f, {
                ref: r,
                className: (0,
                d.cn)(l(), t),
                ...a
            })
        }
        );
        u.displayName = o.f.displayName;
        var c = t(3712)
          , f = t(2200)
          , m = t(7776)
          , p = t(440)
          , g = t(6463)
          , x = t(3482)
          , h = t.n(x)
          , b = t(5151)
          , v = t(9772);
        function y() {
            let[e,r] = (0,
            a.useState)(null)
              , [t,o] = (0,
            a.useState)(null)
              , [i,d] = (0,
            a.useState)(null)
              , [l,x] = (0,
            a.useState)(!1)
              , y = (0,
            g.useRouter)()
              , w = async r => {
                if (r.preventDefault(),
                e && t) {
                    if (!i) {
                        m.Am.error("Please verify the recaptcha.");
                        return
                    }
                } else {
                    m.Am.error("Please fill in both fields.");
                    return
                }
                let s = v.z.object({
                    username: v.z.string().trim().min(3, {
                        message: "Username must be at least 3 characters long"
                    }).refine(e => !/\s/.test(e), {
                        message: "Username cannot contain spaces"
                    }),
                    password: v.z.string().trim().min(4, {
                        message: "Password must be at least 4 characters long"
                    })
                })
                  , a = {
                    username: e.trim(),
                    password: t.trim()
                }
                  , n = s.safeParse(a);
                if (!n.success) {
                    let e = n.error.errors.map(e => e.message);
                    m.Am.error(e.join(" "));
                    return
                }
                try {
                    x(!0);
                    let r = await p.Z.post("https://csint.dev/api/register", {
                        username: e,
                        password: t,
                        recaptchaToken: i
                    });
                    !0 === r.data.success ? y.push("/login") : m.Am.error(r.data.error)
                } catch (e) {
                    console.error(e),
                    m.Am.error(e.message)
                } finally {
                    x(!1)
                }
            }
            ;
            return (0,
            s.jsxs)("form", {
                onSubmit: w,
                children: [(0,
                s.jsxs)("div", {
                    className: "grid gap-2",
                    children: [(0,
                    s.jsx)(u, {
                        children: "Username"
                    }), (0,
                    s.jsx)(n.I, {
                        id: "username",
                        type: "text",
                        placeholder: "Username",
                        name: "username",
                        onChange: e => r(e.target.value)
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "grid gap-2 mt-2",
                    children: [(0,
                    s.jsx)(u, {
                        children: "Password"
                    }), (0,
                    s.jsx)(n.I, {
                        id: "password",
                        type: "password",
                        placeholder: "Password",
                        name: "password",
                        onChange: e => o(e.target.value)
                    })]
                }), (0,
                s.jsx)("div", {
                    className: "flex mt-4 my-5 justify-center align-center",
                    children: (0,
                    s.jsx)(h(), {
                        sitekey: "0x4AAAAAAAi9SBD3YgQUKnzl",
                        onVerify: e => d(e)
                    })
                }), (0,
                s.jsx)(c.eW, {
                    className: "mt-4 p-0",
                    children: l ? (0,
                    s.jsx)(b.d, {
                        className: "w-full"
                    }) : (0,
                    s.jsx)(f.z, {
                        className: "w-full",
                        type: "submit",
                        children: "Create account"
                    })
                })]
            })
        }
    },
    5151: function(e, r, t) {
        "use strict";
        t.d(r, {
            d: function() {
                return o
            }
        });
        var s = t(7437)
          , a = t(4867)
          , n = t(2200);
        function o(e) {
            let {className: r=""} = e;
            return (0,
            s.jsxs)(n.z, {
                disabled: !0,
                className: "".concat(r),
                children: [(0,
                s.jsx)(a.BGW, {
                    className: "mr-2 h-4 w-4 animate-spin"
                }), "Please wait"]
            })
        }
    },
    2200: function(e, r, t) {
        "use strict";
        t.d(r, {
            z: function() {
                return l
            }
        });
        var s = t(7437)
          , a = t(2265)
          , n = t(1538)
          , o = t(2218)
          , i = t(8214);
        let d = (0,
        o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
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
          , l = a.forwardRef( (e, r) => {
            let {className: t, variant: a, size: o, asChild: l=!1, ...u} = e
              , c = l ? n.g7 : "button";
            return (0,
            s.jsx)(c, {
                className: (0,
                i.cn)(d({
                    variant: a,
                    size: o,
                    className: t
                })),
                ref: r,
                ...u
            })
        }
        );
        l.displayName = "Button"
    },
    3712: function(e, r, t) {
        "use strict";
        t.d(r, {
            eW: function() {
                return o
            }
        });
        var s = t(7437)
          , a = t(2265)
          , n = t(8214);
        a.forwardRef( (e, r) => {
            let {className: t, ...a} = e;
            return (0,
            s.jsx)("div", {
                ref: r,
                className: (0,
                n.cn)("rounded-xl border bg-card text-card-foreground shadow", t),
                ...a
            })
        }
        ).displayName = "Card",
        a.forwardRef( (e, r) => {
            let {className: t, ...a} = e;
            return (0,
            s.jsx)("div", {
                ref: r,
                className: (0,
                n.cn)("flex flex-col space-y-1.5 p-6", t),
                ...a
            })
        }
        ).displayName = "CardHeader",
        a.forwardRef( (e, r) => {
            let {className: t, ...a} = e;
            return (0,
            s.jsx)("h3", {
                ref: r,
                className: (0,
                n.cn)("font-semibold leading-none tracking-tight", t),
                ...a
            })
        }
        ).displayName = "CardTitle",
        a.forwardRef( (e, r) => {
            let {className: t, ...a} = e;
            return (0,
            s.jsx)("p", {
                ref: r,
                className: (0,
                n.cn)("text-sm text-muted-foreground", t),
                ...a
            })
        }
        ).displayName = "CardDescription",
        a.forwardRef( (e, r) => {
            let {className: t, ...a} = e;
            return (0,
            s.jsx)("div", {
                ref: r,
                className: (0,
                n.cn)("p-6 pt-0", t),
                ...a
            })
        }
        ).displayName = "CardContent";
        let o = a.forwardRef( (e, r) => {
            let {className: t, ...a} = e;
            return (0,
            s.jsx)("div", {
                ref: r,
                className: (0,
                n.cn)("flex items-center p-6 pt-0", t),
                ...a
            })
        }
        );
        o.displayName = "CardFooter"
    },
    7147: function(e, r, t) {
        "use strict";
        t.d(r, {
            I: function() {
                return o
            }
        });
        var s = t(7437)
          , a = t(2265)
          , n = t(8214);
        let o = a.forwardRef( (e, r) => {
            let {className: t, type: a, ...o} = e;
            return (0,
            s.jsx)("input", {
                type: a,
                className: (0,
                n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", t),
                ref: r,
                ...o
            })
        }
        );
        o.displayName = "Input"
    },
    6593: function(e, r, t) {
        "use strict";
        t.d(r, {
            Toaster: function() {
                return o
            }
        });
        var s = t(7437)
          , a = t(9512)
          , n = t(7776);
        let o = e => {
            let {...r} = e
              , {theme: t="system"} = (0,
            a.F)();
            return (0,
            s.jsx)(n.x7, {
                theme: t,
                className: "toaster group",
                toastOptions: {
                    classNames: {
                        toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                        description: "group-[.toast]:text-muted-foreground",
                        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                    }
                },
                ...r
            })
        }
    },
    8214: function(e, r, t) {
        "use strict";
        t.d(r, {
            cn: function() {
                return n
            }
        });
        var s = t(4839)
          , a = t(6164);
        function n() {
            for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
                r[t] = arguments[t];
            return (0,
            a.m6)((0,
            s.W)(r))
        }
    }
}, function(e) {
    e.O(0, [310, 373, 56, 231, 144, 706, 971, 23, 744], function() {
        return e(e.s = 8190)
    }),
    _N_E = e.O()
}
]);
