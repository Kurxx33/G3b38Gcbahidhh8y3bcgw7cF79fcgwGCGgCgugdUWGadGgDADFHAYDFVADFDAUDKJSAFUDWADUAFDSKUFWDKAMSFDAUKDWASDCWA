(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    1829: function(e, t, s) {
        Promise.resolve().then(s.bind(s, 3794))
    },
    3794: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return R
            }
        });
        var r = s(7437)
          , a = s(6593)
          , n = s(2265)
          , o = s(8309)
          , l = s(2200)
          , i = s(7147)
          , d = s(7776)
          , c = s(8214)
          , u = s(3710);
        let m = e => {
            let {words: t, className: s, cursorClassName: a} = e
              , n = t.map(e => ({
                ...e,
                text: e.text.split("")
            }));
            return (0,
            r.jsxs)("div", {
                className: (0,
                c.cn)("flex space-x-1 my-6", s),
                children: [(0,
                r.jsxs)(u.E.div, {
                    className: "overflow-hidden pb-2",
                    initial: {
                        width: "0%"
                    },
                    whileInView: {
                        width: "fit-content"
                    },
                    transition: {
                        duration: 2,
                        ease: "linear",
                        delay: 1
                    },
                    children: [(0,
                    r.jsxs)("div", {
                        className: "text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold",
                        style: {
                            whiteSpace: "nowrap"
                        },
                        children: [(0,
                        r.jsx)("div", {
                            children: n.map( (e, t) => (0,
                            r.jsx)("div", {
                                className: "inline-block",
                                children: e.text.map( (t, s) => (0,
                                r.jsx)("span", {
                                    className: (0,
                                    c.cn)("dark:text-white text-black ", e.className),
                                    children: t
                                }, "char-".concat(s)))
                            }, "word-".concat(t)))
                        }), " "]
                    }), " "]
                }), (0,
                r.jsx)(u.E.span, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: .8,
                        repeat: 1 / 0,
                        repeatType: "reverse"
                    },
                    className: (0,
                    c.cn)("block rounded-sm w-[4px]  h-9 sm:h-9 xl:h-12 bg-blue-500", a)
                })]
            })
        }
        ;
        var f = s(5151)
          , x = s(440)
          , p = s(8174)
          , h = s(4756)
          , g = s(4867);
        let y = h.fC
          , b = n.forwardRef( (e, t) => {
            let {className: s, ...a} = e;
            return (0,
            r.jsx)(h.ck, {
                ref: t,
                className: (0,
                c.cn)("border-b", s),
                ...a
            })
        }
        );
        b.displayName = "AccordionItem";
        let j = n.forwardRef( (e, t) => {
            let {className: s, children: a, ...n} = e;
            return (0,
            r.jsx)(h.h4, {
                className: "flex",
                children: (0,
                r.jsxs)(h.xz, {
                    ref: t,
                    className: (0,
                    c.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", s),
                    ...n,
                    children: [a, (0,
                    r.jsx)(g.v4q, {
                        className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
                    })]
                })
            })
        }
        );
        j.displayName = h.xz.displayName;
        let v = n.forwardRef( (e, t) => {
            let {className: s, children: a, ...n} = e;
            return (0,
            r.jsx)(h.VY, {
                ref: t,
                className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
                ...n,
                children: (0,
                r.jsx)("div", {
                    className: (0,
                    c.cn)("pb-4 pt-0", s),
                    children: a
                })
            })
        }
        );
        v.displayName = h.VY.displayName;
        var w = s(3482)
          , N = s.n(w)
          , k = s(357);
        function R() {
            let[e,t] = (0,
            n.useState)("Search by")
              , [s,c] = (0,
            n.useState)("")
              , [u,h] = (0,
            n.useState)(null)
              , [g,w] = (0,
            n.useState)(!1)
              , [R,S] = (0,
            n.useState)(null)
              , [z,E] = (0,
            n.useState)(!1)
              , [_,O] = (0,
            n.useState)(null)
              , L = ["avias.contact@gmail.com", "an0m"];
            (0,
            n.useEffect)( () => {
                (async () => {
                    O(await (0,
                    p.Gg)())
                }
                )()
            }
            , []);
            let U = async t => {
                if (t.preventDefault(),
                "" === s.trim()) {
                    d.Am.error("Please enter a search query");
                    return
                }
                if ("Search by" === e.trim()) {
                    d.Am.error("Please select a search type");
                    return
                }
                if (L.includes(s.trim().toLowerCase())) {
                    d.Am.error("This ".concat(e.toLowerCase(), " is blacklisted."));
                    return
                }
                if (_) {
                    if (!R) {
                        E(!0);
                        return
                    }
                } else {
                    d.Am.error("Please log in.");
                    return
                }
                w(!0);
                try {
                    console.log(k.env.URL);
                    let t = await x.Z.post("https://csint.dev/search", {
                        searchType: e,
                        searchTerm: s,
                        recaptchaToken: R
                    });
                    !1 === t.data.success ? d.Am.error(t.data.error) : (!0 === t.data.largeResults && d.Am.warning("Results are too large to display, please download the json file instead."),
                    h(t.data))
                } catch (e) {
                    d.Am.error("An unexpected error occurred."),
                    console.error(e)
                } finally {
                    w(!1),
                    S(null),
                    E(!1)
                }
            }
            ;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("div", {
                    children: (0,
                    r.jsxs)("div", {
                        className: "flex flex-col items-center justify-center h-[90vh] bg-background",
                        children: [(0,
                        r.jsx)("div", {
                            className: "text-4xl font-bold text-foreground",
                            children: (0,
                            r.jsx)(m, {
                                words: [{
                                    text: "csint.dev",
                                    className: "text-4xl font-bold text-foreground h-20"
                                }]
                            })
                        }), (0,
                        r.jsx)("div", {
                            className: "max-w-3xl w-full px-4 md:px-0",
                            children: (0,
                            r.jsxs)("div", {
                                className: "flex flex-col items-center gap-8",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "text-center space-y-2",
                                    children: (0,
                                    r.jsx)("p", {
                                        className: "text-muted-foreground",
                                        children: "Find out if your information has been compromised."
                                    })
                                }), (0,
                                r.jsxs)("form", {
                                    className: "w-full flex gap-2",
                                    onSubmit: U,
                                    children: [(0,
                                    r.jsxs)(o.h_, {
                                        children: [(0,
                                        r.jsx)(o.$F, {
                                            asChild: !0,
                                            children: (0,
                                            r.jsxs)(l.z, {
                                                variant: "outline",
                                                className: "rounded-lg border-input bg-background text-foreground focus:ring-primary focus:border-primary",
                                                children: [e, (0,
                                                r.jsx)(C, {
                                                    className: "ml-2 h-4 w-4"
                                                })]
                                            })
                                        }), (0,
                                        r.jsxs)(o.AW, {
                                            align: "start",
                                            children: [(0,
                                            r.jsx)(o.Xi, {
                                                onClick: () => t("Username"),
                                                children: "Username"
                                            }), (0,
                                            r.jsx)(o.Xi, {
                                                onClick: () => t("Email"),
                                                children: "Email"
                                            }), (0,
                                            r.jsx)(o.Xi, {
                                                onClick: () => t("Hash"),
                                                children: "Hash"
                                            }), (0,
                                            r.jsx)(o.Xi, {
                                                onClick: () => t("IP"),
                                                children: "IP"
                                            }), (0,
                                            r.jsx)(o.Xi, {
                                                onClick: () => t("Password"),
                                                children: "Password"
                                            }), (0,
                                            r.jsx)(o.Xi, {
                                                onClick: () => t("Full name"),
                                                children: "Full name"
                                            })]
                                        })]
                                    }), (0,
                                    r.jsx)(i.I, {
                                        type: "search",
                                        placeholder: "Enter your search term",
                                        onChange: e => c(e.target.value),
                                        className: "flex-1 rounded-lg border-input bg-background text-foreground focus:ring-primary focus:border-primary"
                                    }), g ? (0,
                                    r.jsx)(f.d, {}) : (0,
                                    r.jsx)(l.z, {
                                        type: "submit",
                                        className: "rounded-lg bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                        children: "Search"
                                    })]
                                }), z && (0,
                                r.jsx)(N(), {
                                    sitekey: "0x4AAAAAAAi9SBD3YgQUKnzl",
                                    onVerify: e => S(e)
                                })]
                            })
                        }), u && (0,
                        r.jsxs)("div", {
                            className: "mt-8 w-full max-w-3xl",
                            children: [(0,
                            r.jsx)("div", {
                                className: "flex justify-center",
                                children: (0,
                                r.jsxs)(l.z, {
                                    className: "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                                    onClick: () => {
                                        let e = e => {
                                            if ("string" == typeof e)
                                                try {
                                                    return JSON.parse(e)
                                                } catch (e) {
                                                    return console.error("Error parsing JSON:", e),
                                                    {}
                                                }
                                            return e
                                        }
                                          , t = u.searchResults ? e(u.searchResults) : null
                                          , s = new Blob([JSON.stringify({
                                            snusbase: t,
                                            osintcat: u.osintcatResults ? e(u.osintcatResults) : null,
                                            leakcheck: u.leakcheckResults ? e(u.leakcheckResults) : null,
                                            hackcheck: u.hackcheckResults ? e(u.hackcheckResults) : null
                                        }, null, 2)],{
                                            type: "application/json"
                                        })
                                          , r = URL.createObjectURL(s)
                                          , a = document.createElement("a");
                                        a.href = r,
                                        a.download = "results.json",
                                        document.body.appendChild(a),
                                        a.click(),
                                        document.body.removeChild(a)
                                    }
                                    ,
                                    children: [(0,
                                    r.jsx)(A, {
                                        className: "h-5 w-5"
                                    }), "results.json"]
                                })
                            }), !u.largeResults && (0,
                            r.jsxs)(y, {
                                type: "single",
                                collapsible: !0,
                                className: "w-full",
                                children: [(0,
                                r.jsxs)(b, {
                                    value: "item-1",
                                    children: [(0,
                                    r.jsx)(j, {
                                        children: "Snusbase"
                                    }), (0,
                                    r.jsx)(v, {
                                        children: (0,
                                        r.jsx)("pre", {
                                            className: "max-h-64 overflow-y-auto rounded-lg bg-muted p-4 text-sm font-mono text-muted-foreground",
                                            children: "string" == typeof u.searchResults ? u.searchResults : JSON.stringify(u.searchResults, null, 2)
                                        })
                                    })]
                                }), u.leakcheckResults && (0,
                                r.jsxs)(b, {
                                    value: "item-2",
                                    children: [(0,
                                    r.jsx)(j, {
                                        children: "Leakcheck"
                                    }), (0,
                                    r.jsx)(v, {
                                        children: (0,
                                        r.jsx)("pre", {
                                            className: "max-h-64 overflow-y-auto rounded-lg bg-muted p-4 text-sm font-mono text-muted-foreground",
                                            children: u.leakcheckResults
                                        })
                                    })]
                                }), u.hackcheckResults && (0,
                                r.jsxs)(b, {
                                    value: "item-3",
                                    children: [(0,
                                    r.jsx)(j, {
                                        children: "Hackcheck"
                                    }), (0,
                                    r.jsx)(v, {
                                        children: (0,
                                        r.jsx)("pre", {
                                            className: "max-h-64 overflow-y-auto rounded-lg bg-muted p-4 text-sm font-mono text-muted-foreground",
                                            children: u.hackcheckResults
                                        })
                                    })]
                                }), u.osintcatResults && (0,
                                r.jsxs)(b, {
                                    value: "item-4",
                                    children: [(0,
                                    r.jsx)(j, {
                                        children: "Osintcat"
                                    }), (0,
                                    r.jsx)(v, {
                                        children: (0,
                                        r.jsx)("pre", {
                                            className: "max-h-64 overflow-y-auto rounded-lg bg-muted p-4 text-sm font-mono text-muted-foreground",
                                            children: "string" == typeof u.osintcatResults ? u.osintcatResults : JSON.stringify(u.osintcatResults, null, 2)
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), (0,
                r.jsx)(a.Toaster, {})]
            })
        }
        function C(e) {
            return (0,
            r.jsx)("svg", {
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
                r.jsx)("path", {
                    d: "m6 9 6 6 6-6"
                })
            })
        }
        function A(e) {
            return (0,
            r.jsxs)("svg", {
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
                r.jsx)("path", {
                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                }), (0,
                r.jsx)("polyline", {
                    points: "7 10 12 15 17 10"
                }), (0,
                r.jsx)("line", {
                    x1: "12",
                    x2: "12",
                    y1: "15",
                    y2: "3"
                })]
            })
        }
        x.Z.defaults.withCredentials = !0
    },
    5151: function(e, t, s) {
        "use strict";
        s.d(t, {
            d: function() {
                return o
            }
        });
        var r = s(7437)
          , a = s(4867)
          , n = s(2200);
        function o(e) {
            let {className: t=""} = e;
            return (0,
            r.jsxs)(n.z, {
                disabled: !0,
                className: "".concat(t),
                children: [(0,
                r.jsx)(a.BGW, {
                    className: "mr-2 h-4 w-4 animate-spin"
                }), "Please wait"]
            })
        }
    },
    2200: function(e, t, s) {
        "use strict";
        s.d(t, {
            z: function() {
                return d
            }
        });
        var r = s(7437)
          , a = s(2265)
          , n = s(1538)
          , o = s(2218)
          , l = s(8214);
        let i = (0,
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
          , d = a.forwardRef( (e, t) => {
            let {className: s, variant: a, size: o, asChild: d=!1, ...c} = e
              , u = d ? n.g7 : "button";
            return (0,
            r.jsx)(u, {
                className: (0,
                l.cn)(i({
                    variant: a,
                    size: o,
                    className: s
                })),
                ref: t,
                ...c
            })
        }
        );
        d.displayName = "Button"
    },
    8309: function(e, t, s) {
        "use strict";
        s.d(t, {
            $F: function() {
                return d
            },
            AW: function() {
                return c
            },
            Xi: function() {
                return u
            },
            h_: function() {
                return i
            }
        });
        var r = s(7437)
          , a = s(2265)
          , n = s(2395)
          , o = s(4867)
          , l = s(8214);
        let i = n.fC
          , d = n.xz;
        n.ZA,
        n.Uv,
        n.Tr,
        n.Ee,
        a.forwardRef( (e, t) => {
            let {className: s, inset: a, children: i, ...d} = e;
            return (0,
            r.jsxs)(n.fF, {
                ref: t,
                className: (0,
                l.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", a && "pl-8", s),
                ...d,
                children: [i, (0,
                r.jsx)(o.XCv, {
                    className: "ml-auto h-4 w-4"
                })]
            })
        }
        ).displayName = n.fF.displayName,
        a.forwardRef( (e, t) => {
            let {className: s, ...a} = e;
            return (0,
            r.jsx)(n.tu, {
                ref: t,
                className: (0,
                l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", s),
                ...a
            })
        }
        ).displayName = n.tu.displayName;
        let c = a.forwardRef( (e, t) => {
            let {className: s, sideOffset: a=4, ...o} = e;
            return (0,
            r.jsx)(n.Uv, {
                children: (0,
                r.jsx)(n.VY, {
                    ref: t,
                    sideOffset: a,
                    className: (0,
                    l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", s),
                    ...o
                })
            })
        }
        );
        c.displayName = n.VY.displayName;
        let u = a.forwardRef( (e, t) => {
            let {className: s, inset: a, ...o} = e;
            return (0,
            r.jsx)(n.ck, {
                ref: t,
                className: (0,
                l.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a && "pl-8", s),
                ...o
            })
        }
        );
        u.displayName = n.ck.displayName,
        a.forwardRef( (e, t) => {
            let {className: s, children: a, checked: i, ...d} = e;
            return (0,
            r.jsxs)(n.oC, {
                ref: t,
                className: (0,
                l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s),
                checked: i,
                ...d,
                children: [(0,
                r.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0,
                    r.jsx)(n.wU, {
                        children: (0,
                        r.jsx)(o.nQG, {
                            className: "h-4 w-4"
                        })
                    })
                }), a]
            })
        }
        ).displayName = n.oC.displayName,
        a.forwardRef( (e, t) => {
            let {className: s, children: a, ...i} = e;
            return (0,
            r.jsxs)(n.Rk, {
                ref: t,
                className: (0,
                l.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", s),
                ...i,
                children: [(0,
                r.jsx)("span", {
                    className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                    children: (0,
                    r.jsx)(n.wU, {
                        children: (0,
                        r.jsx)(o.jXb, {
                            className: "h-4 w-4 fill-current"
                        })
                    })
                }), a]
            })
        }
        ).displayName = n.Rk.displayName,
        a.forwardRef( (e, t) => {
            let {className: s, inset: a, ...o} = e;
            return (0,
            r.jsx)(n.__, {
                ref: t,
                className: (0,
                l.cn)("px-2 py-1.5 text-sm font-semibold", a && "pl-8", s),
                ...o
            })
        }
        ).displayName = n.__.displayName,
        a.forwardRef( (e, t) => {
            let {className: s, ...a} = e;
            return (0,
            r.jsx)(n.Z0, {
                ref: t,
                className: (0,
                l.cn)("-mx-1 my-1 h-px bg-muted", s),
                ...a
            })
        }
        ).displayName = n.Z0.displayName
    },
    7147: function(e, t, s) {
        "use strict";
        s.d(t, {
            I: function() {
                return o
            }
        });
        var r = s(7437)
          , a = s(2265)
          , n = s(8214);
        let o = a.forwardRef( (e, t) => {
            let {className: s, type: a, ...o} = e;
            return (0,
            r.jsx)("input", {
                type: a,
                className: (0,
                n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", s),
                ref: t,
                ...o
            })
        }
        );
        o.displayName = "Input"
    },
    6593: function(e, t, s) {
        "use strict";
        s.d(t, {
            Toaster: function() {
                return o
            }
        });
        var r = s(7437)
          , a = s(9512)
          , n = s(7776);
        let o = e => {
            let {...t} = e
              , {theme: s="system"} = (0,
            a.F)();
            return (0,
            r.jsx)(n.x7, {
                theme: s,
                className: "toaster group",
                toastOptions: {
                    classNames: {
                        toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                        description: "group-[.toast]:text-muted-foreground",
                        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                    }
                },
                ...t
            })
        }
    },
    8214: function(e, t, s) {
        "use strict";
        s.d(t, {
            cn: function() {
                return n
            }
        });
        var r = s(4839)
          , a = s(6164);
        function n() {
            for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
                t[s] = arguments[s];
            return (0,
            a.m6)((0,
            r.W)(t))
        }
    }
}, function(e) {
    e.O(0, [310, 373, 395, 231, 144, 174, 192, 971, 23, 744], function() {
        return e(e.s = 1829)
    }),
    _N_E = e.O()
}
]);
