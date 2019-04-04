(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    35: function(e, t, n) {
      'use strict';
      n.r(t),
        function(e) {
          var r,
            a = n(0),
            o = n.n(a);
          function c(e, t) {
            return (
              (function(e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function(e, t) {
                var n = [],
                  r = !0,
                  a = !1,
                  o = void 0;
                try {
                  for (
                    var c, l = e[Symbol.iterator]();
                    !(r = (c = l.next()).done) && (n.push(c.value), !t || n.length !== t);
                    r = !0
                  );
                } catch (e) {
                  (a = !0), (o = e);
                } finally {
                  try {
                    r || null == l.return || l.return();
                  } finally {
                    if (a) throw o;
                  }
                }
                return n;
              })(e, t) ||
              (function() {
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
              })()
            );
          }
          (r = ('undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal : n(6))
            .enterModule) && r(e);
          var l,
            u,
            i = function() {
              var e = c(Object(a.useState)(0), 2),
                t = e[0],
                n = e[1];
              return o.a.createElement(
                'div',
                null,
                'Contact page #',
                t,
                o.a.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: function() {
                      n(t + 1);
                    }
                  },
                  'Increment +'
                )
              );
            },
            d = i;
          (t.default = d),
            (l = ('undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal : n(6))
              .default) &&
              (l.register(i, 'Contact', '/home/karan/Documents/Webpack4Repo/src/Pages/Contact.jsx'),
              l.register(d, 'default', '/home/karan/Documents/Webpack4Repo/src/Pages/Contact.jsx')),
            (u = ('undefined' != typeof reactHotLoaderGlobal ? reactHotLoaderGlobal : n(6))
              .leaveModule) && u(e);
        }.call(this, n(11)(e));
    }
  }
]);
