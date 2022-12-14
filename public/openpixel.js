// Open Pixel v1.3.0 | Published By Dockwa | Created By Stuart Yamartino | MIT License
!(function (i, u, r) {
  'use strict'
  function t(t, e) {
    var n,
      r = Object.keys(t)
    return (
      Object.getOwnPropertySymbols &&
        ((n = Object.getOwnPropertySymbols(t)),
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })),
        r.push.apply(r, n)),
      r
    )
  }
  function n(i) {
    for (var e = 1; e < arguments.length; e++) {
      var o = null != arguments[e] ? arguments[e] : {}
      e % 2
        ? t(Object(o), !0).forEach(function (e) {
            var t, n, r
            ;(t = i),
              (r = o[(n = e)]),
              n in t
                ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = r)
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
        : t(Object(o)).forEach(function (e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
          })
    }
    return i
  }
  function o(e) {
    return (o =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          })(e)
  }
  function a(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function')
  }
  function c(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n]
      ;(r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
  }
  function s(e, t, n) {
    return t && c(e.prototype, t), n && c(e, n), e
  }
  var f = { id: '', params: {}, version: 1 },
    l = (function () {
      function t() {
        a(this, t)
      }
      return (
        s(t, null, [
          {
            key: 'isPresent',
            value: function (e) {
              return null != e && '' !== e
            },
          },
          {
            key: 'now',
            value: function () {
              return +new Date()
            },
          },
          {
            key: 'guid',
            value: function () {
              return (
                f.version +
                '-xxxxxxxx-'.replace(/[x]/g, function (e) {
                  var t = (36 * Math.random()) | 0
                  return ('x' == e ? t : (3 & t) | 8).toString(36)
                }) +
                (+new Date()).toString(36)
              )
            },
          },
          {
            key: 'optionalData',
            value: function (e) {
              return !1 === t.isPresent(e)
                ? ''
                : 'object' === o(e)
                ? t.optionalData(JSON.stringify(e))
                : 'function' == typeof e
                ? t.optionalData(e())
                : String(e)
            },
          },
        ]),
        t
      )
    })(),
    m = (function () {
      function e() {
        a(this, e)
      }
      return (
        s(e, null, [
          {
            key: 'nameAndVersion',
            value: function () {
              var e,
                t = navigator.userAgent,
                n =
                  t.match(
                    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
                  ) || []
              return /trident/i.test(n[1])
                ? 'IE ' + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || '')
                : 'Chrome' === n[1] &&
                  null != (e = t.match(/\b(OPR|Edge)\/(\d+)/))
                ? e.slice(1).join(' ').replace('OPR', 'Opera')
                : ((n = n[2]
                    ? [n[1], n[2]]
                    : [navigator.appName, navigator.appVersion, '-?']),
                  null != (e = t.match(/version\/(\d+)/i)) &&
                    n.splice(1, 1, e[1]),
                  n.join(' '))
            },
          },
          {
            key: 'isMobile',
            value: function () {
              return (
                'ontouchstart' in i ||
                0 < navigator.maxTouchPoints ||
                0 < navigator.msMaxTouchPoints
              )
            },
          },
          {
            key: 'userAgent',
            value: function () {
              return i.navigator.userAgent
            },
          },
        ]),
        e
      )
    })(),
    g = (function () {
      function e() {
        a(this, e)
      }
      return (
        s(e, null, [
          {
            key: 'prefix',
            value: function () {
              return '__'.concat('opix', '_')
            },
          },
          {
            key: 'set',
            value: function (e, t, n, r) {
              var i,
                o = 3 < arguments.length && void 0 !== r ? r : '/',
                a = ''
              l.isPresent(n) &&
                ((i = new Date()).setTime(i.getTime() + 60 * n * 1e3),
                (a = 'expires='.concat(i.toGMTString(), '; '))),
                (u.cookie = ''
                  .concat(this.prefix())
                  .concat(e, '=')
                  .concat(t, '; ')
                  .concat(a, 'path=')
                  .concat(o, '; SameSite=Lax'))
            },
          },
          {
            key: 'get',
            value: function (e) {
              for (
                var e = ''.concat(this.prefix()).concat(e, '='),
                  t = u.cookie.split(';'),
                  n = 0;
                n < t.length;
                n++
              ) {
                for (var r = t[n]; ' ' == r.charAt(0); ) r = r.substring(1)
                if (0 == r.indexOf(e)) return r.substring(e.length, r.length)
              }
            },
          },
          {
            key: 'delete',
            value: function (e) {
              this.set(e, '', -100)
            },
          },
          {
            key: 'exists',
            value: function (e) {
              return l.isPresent(this.get(e))
            },
          },
          {
            key: 'setUtms',
            value: function () {
              for (
                var e = [
                    'utm_source',
                    'utm_medium',
                    'utm_term',
                    'utm_content',
                    'utm_campaign',
                  ],
                  t = !1,
                  n = 0,
                  r = e.length;
                n < r;
                n++
              )
                if (l.isPresent(p.getParameterByName(e[n]))) {
                  t = !0
                  break
                }
              if (t) {
                for (var i, o = {}, n = 0, r = e.length; n < r; n++)
                  (i = p.getParameterByName(e[n])),
                    l.isPresent(i) && (o[e[n]] = i)
                this.set('utm', JSON.stringify(o))
              }
            },
          },
          {
            key: 'getUtm',
            value: function (e) {
              if (this.exists('utm')) {
                var t = JSON.parse(this.get('utm'))
                return e in t ? t[e] : ''
              }
            },
          },
        ]),
        e
      )
    })(),
    p = (function () {
      function e() {
        a(this, e)
      }
      return (
        s(e, null, [
          {
            key: 'getParameterByName',
            value: function (e, t) {
              ;(t = t || i.location.href), (e = e.replace(/[\[\]]/g, '\\$&'))
              var n = new RegExp('[?&]' + e + '(=([^&#]*)|&|#|$)', 'i').exec(t)
              return n
                ? n[2]
                  ? decodeURIComponent(n[2].replace(/\+/g, ' '))
                  : ''
                : null
            },
          },
          {
            key: 'externalHost',
            value: function (e) {
              return (
                e.hostname != location.hostname &&
                0 === e.protocol.indexOf('http')
              )
            },
          },
        ]),
        e
      )
    })(),
    h = (function () {
      function r(e, t, n) {
        a(this, r),
          (this.params = []),
          (this.event = e),
          (this.timestamp = t),
          (this.optional = l.optionalData(n)),
          this.buildParams(),
          this.send()
      }
      return (
        s(r, [
          {
            key: 'buildParams',
            value: function () {
              var e = this.getAttribute()
              for (var t in e) e.hasOwnProperty(t) && this.setParam(t, e[t](t))
            },
          },
          {
            key: 'getAttribute',
            value: function () {
              var e = this
              return n(
                {
                  id: function () {
                    return f.id
                  },
                  uid: function () {
                    return g.get('uid')
                  },
                  ev: function () {
                    return e.event
                  },
                  ed: function () {
                    return e.optional
                  },
                  v: function () {
                    return f.version
                  },
                  dl: function () {
                    return i.location.href
                  },
                  rl: function () {
                    return u.referrer
                  },
                  ts: function () {
                    return e.timestamp
                  },
                  de: function () {
                    return u.characterSet
                  },
                  sr: function () {
                    return i.screen.width + 'x' + i.screen.height
                  },
                  vp: function () {
                    return i.innerWidth + 'x' + i.innerHeight
                  },
                  cd: function () {
                    return i.screen.colorDepth
                  },
                  dt: function () {
                    return u.title
                  },
                  bn: function () {
                    return m.nameAndVersion()
                  },
                  md: function () {
                    return m.isMobile()
                  },
                  ua: function () {
                    return m.userAgent()
                  },
                  tz: function () {
                    return new Date().getTimezoneOffset()
                  },
                  utm_source: function (e) {
                    return g.getUtm(e)
                  },
                  utm_medium: function (e) {
                    return g.getUtm(e)
                  },
                  utm_term: function (e) {
                    return g.getUtm(e)
                  },
                  utm_content: function (e) {
                    return g.getUtm(e)
                  },
                  utm_campaign: function (e) {
                    return g.getUtm(e)
                  },
                },
                f.params
              )
            },
          },
          {
            key: 'setParam',
            value: function (e, t) {
              l.isPresent(t)
                ? this.params.push(
                    ''.concat(e, '=').concat(encodeURIComponent(t))
                  )
                : this.params.push(''.concat(e, '='))
            },
          },
          {
            key: 'send',
            value: function () {
              i.navigator.sendBeacon ? this.sendBeacon() : this.sendImage()
            },
          },
          {
            key: 'sendBeacon',
            value: function () {
              i.navigator.sendBeacon(this.getSourceUrl())
            },
          },
          {
            key: 'sendImage',
            value: function () {
              ;(this.img = u.createElement('img')),
                (this.img.src = this.getSourceUrl()),
                (this.img.style.display = 'none'),
                (this.img.width = '1'),
                (this.img.height = '1'),
                u.getElementsByTagName('body')[0].appendChild(this.img)
            },
          },
          {
            key: 'getSourceUrl',
            value: function () {
              return ''
                .concat('/api/pixel.gif', '?')
                .concat(this.params.join('&'))
            },
          },
        ]),
        r
      )
    })()
  g.exists('uid')
    ? g.set('uid', g.get('uid'), 1051200)
    : g.set('uid', l.guid(), 1051200),
    g.setUtms(),
    (r.process = function (e, t, n) {
      'init' === e
        ? (f.id = t)
        : 'param' === e
        ? (f.params[t] = function () {
            return n
          })
        : 'event' === e &&
          ('pageload' !== t || f.pageLoadOnce
            ? 'pageload' !== t && 'pageclose' !== t && new h(t, l.now(), n)
            : ((f.pageLoadOnce = !0), new h(t, r.t, n)))
    })
  for (var e = 0, d = r.queue.length; e < d; e++) r.process.apply(r, r.queue[e])
  var v =
      'object' === ('undefined' == typeof safari ? 'undefined' : o(safari)) &&
      safari.pushNotification,
    y = 'onpageshow' in self && !v ? 'pagehide' : 'unload'
  i.addEventListener(y, function () {
    f.pageCloseOnce ||
      ((f.pageCloseOnce = !0),
      new h('pageclose', l.now(), function () {
        if (l.isPresent(f.externalHost) && l.now() - f.externalHost.time < 5e3)
          return f.externalHost.link
      }))
  }),
    (i.onload = function () {
      for (var e = u.getElementsByTagName('a'), t = 0, n = e.length; t < n; t++)
        e[t].addEventListener(
          'click',
          function (e) {
            p.externalHost(this) &&
              (f.externalHost = { link: this.href, time: l.now() })
          }.bind(e[t])
        )
      for (
        var r = u.querySelectorAll('[data-opix-event]'), t = 0, n = r.length;
        t < n;
        t++
      )
        r[t].addEventListener(
          'click',
          function (e) {
            var t = this.getAttribute('data-opix-event')
            t && new h(t, l.now(), this.getAttribute('data-opix-data'))
          }.bind(r[t])
        )
    })
})(window, document, window.opix)
