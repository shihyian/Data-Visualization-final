(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['chunk-1b7594b2'],
  {
    '0762': function (t, e, r) {},
    '26e9': function (t, e, r) {
      'use strict';
      var a = r('23e7'),
        n = r('e8b5'),
        i = [].reverse,
        o = [1, 2];
      a(
        {
          target: 'Array',
          proto: !0,
          forced: String(o) === String(o.reverse()),
        },
        {
          reverse: function () {
            return n(this) && (this.length = this.length), i.call(this);
          },
        }
      );
    },
    '4de4': function (t, e, r) {
      'use strict';
      var a = r('23e7'),
        n = r('b727').filter,
        i = r('1dde');
      a(
        { target: 'Array', proto: !0, forced: !i('filter') },
        {
          filter: function (t) {
            return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    '7db0': function (t, e, r) {
      'use strict';
      var a = r('23e7'),
        n = r('b727').find,
        i = r('44d2'),
        o = 'find',
        s = !0;
      o in [] &&
        Array(1)[o](function () {
          s = !1;
        }),
        a(
          { target: 'Array', proto: !0, forced: s },
          {
            find: function (t) {
              return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
            },
          }
        ),
        i(o);
    },
    '8bb1': function (t, e, r) {
      'use strict';
      var a = r('0762'),
        n = r.n(a);
      n.a;
    },
    '99af': function (t, e, r) {
      'use strict';
      var a = r('23e7'),
        n = r('d039'),
        i = r('e8b5'),
        o = r('861d'),
        s = r('7b0b'),
        l = r('50c4'),
        c = r('8418'),
        f = r('65f0'),
        u = r('1dde'),
        h = r('b622'),
        p = r('60ae'),
        d = h('isConcatSpreadable'),
        y = 9007199254740991,
        g = 'Maximum allowed index exceeded',
        x =
          p >= 51 ||
          !n(function () {
            var t = [];
            return (t[d] = !1), t.concat()[0] !== t;
          }),
        m = u('concat'),
        v = function (t) {
          if (!o(t)) return !1;
          var e = t[d];
          return void 0 !== e ? !!e : i(t);
        },
        w = !x || !m;
      a(
        { target: 'Array', proto: !0, forced: w },
        {
          concat: function (t) {
            var e,
              r,
              a,
              n,
              i,
              o = s(this),
              u = f(o, 0),
              h = 0;
            for (e = -1, a = arguments.length; e < a; e++)
              if (((i = -1 === e ? o : arguments[e]), v(i))) {
                if (((n = l(i.length)), h + n > y)) throw TypeError(g);
                for (r = 0; r < n; r++, h++) r in i && c(u, h, i[r]);
              } else {
                if (h >= y) throw TypeError(g);
                c(u, h++, i);
              }
            return (u.length = h), u;
          },
        }
      );
    },
    a195: function (t, e, r) {
      'use strict';
      r.r(e);
      var a = function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e;
          return r('div', { attrs: { id: 'artistview' } }, [
            t._m(0),
            r('svg', { attrs: { id: 'artistsvg' } }),
          ]);
        },
        n = [
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              'div',
              { staticClass: 'modal', attrs: { id: 'myModal' } },
              [r('div', { staticClass: 'modal-content' })]
            );
          },
        ],
        i =
          (r('99af'),
          r('4de4'),
          r('7db0'),
          r('4160'),
          r('caad'),
          r('a15b'),
          r('baa5'),
          r('26e9'),
          r('fb6a'),
          r('4e82'),
          r('0d03'),
          r('a9e3'),
          r('d3b7'),
          r('acd8'),
          r('e25e'),
          r('ac1f'),
          r('25f0'),
          r('2532'),
          r('1276'),
          r('159b'),
          r('ddb0'),
          r('96cf'),
          r('5698')),
        o = r('840d'),
        s = {
          data: function () {
            return {
              showingData: [],
              artistData: [],
              sortColor: '',
              sortArtist: '',
              artists_list: ['All'],
              paintingYear: [],
              genre: '',
              country: '',
              colorAmount: [],
              intensity: [],
              colorTheory: '',
              artist_info: [],
              partialData: [],
              hexcolor: [],
              hslcolor: [],
              rgbcolor: [],
              yearcolor: [],
            };
          },
          mounted: function () {
            var t = this;
            console.log('App loaded'), this.fetchData();
            var e = this;
            o['a'].$on('sortArtistChanged', function (r) {
              (e.sortArtist = r), t.renderChart();
            }),
              o['a'].$on('sortColorChanged', function (r) {
                (e.sortColor = r), t.renderChart();
              }),
              o['a'].$on('artistChanged', function (r) {
                0 != r.length ? (e.artists_list = r) : (e.artists_list = []),
                  t.updateChartByFilter();
              }),
              o['a'].$on('genreChanged', function (r) {
                (e.genre = r), t.updateChartByFilter();
              }),
              o['a'].$on('colorAmountChanged', function (r) {
                (e.colorAmount = r), t.updateChartByFilter();
              }),
              o['a'].$on('paintingYearChanged', function (r) {
                (e.paintingYear = r), t.updateChartByFilter();
              }),
              o['a'].$on('countryChanged', function (r) {
                (e.country = r), t.updateChartByFilter();
              }),
              o['a'].$on('intensityChanged', function (r) {
                (e.intensity = r), t.updateChartByFilter();
              }),
              o['a'].$on('colorTheoryChanged', function (r) {
                (e.colorTheory = r), t.updateChartByFilter();
              }),
              o['a'].$on('reset', function (r) {
                (e.artists_list = r['artist']),
                  (e.genre = r['genre']),
                  (e.colorTheory = r['theory']),
                  (e.intensity = r['intensity']),
                  (e.country = r['country']),
                  (e.paintingYear = r['year']),
                  (e.colorAmount = r['amount']),
                  t.updateChartByFilter();
              });
          },
          created: function () {
            o['a'].$emit('viewChanged', 'artist-view');
          },
          methods: {
            fetchData: function () {
              var t, e, r, a, n, o, s, l, c, f, u, h, p, d, y, g;
              return regeneratorRuntime.async(
                function (x) {
                  while (1)
                    switch ((x.prev = x.next)) {
                      case 0:
                        return (
                          (h = function (t, e) {
                            var r = f(t.color1),
                              a = f(e.color1);
                            return r < a ? 1 : r > a ? -1 : 0;
                          }),
                          (u = function (t, e) {
                            var r = c(t.color1),
                              a = c(e.color1),
                              n = 0.241 * r.r + 0.691 * r.g + 0.068 * r.b,
                              i = 0.241 * a.r + 0.691 * a.g + 0.068 * a.b;
                            return n < i ? 1 : n > i ? -1 : 0;
                          }),
                          (f = function (t) {
                            var e =
                                /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                                  t.slice(0, 7)
                                ),
                              r = parseInt(e[1], 16),
                              a = parseInt(e[2], 16),
                              n = parseInt(e[3], 16);
                            (r /= 255), (a /= 255), (n /= 255);
                            var i,
                              o,
                              s = Math.max(r, a, n),
                              l = Math.min(r, a, n),
                              c = (s + l) / 2;
                            if (s == l) i = o = 0;
                            else {
                              var f = s - l;
                              switch (
                                ((o = c > 0.5 ? f / (2 - s - l) : f / (s + l)),
                                s)
                              ) {
                                case r:
                                  i = (a - n) / f + (a < n ? 6 : 0);
                                  break;
                                case a:
                                  i = (n - r) / f + 2;
                                  break;
                                case n:
                                  i = (r - a) / f + 4;
                                  break;
                              }
                              i /= 6;
                            }
                            var u = i.toString() + o.toString() + c.toString();
                            return u;
                          }),
                          (c = function (t) {
                            var e =
                              /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
                                t.slice(0, 7)
                              );
                            return e
                              ? {
                                  r: parseInt(e[1], 16),
                                  g: parseInt(e[2], 16),
                                  b: parseInt(e[3], 16),
                                }
                              : null;
                          }),
                          (x.next = 6),
                          regeneratorRuntime.awrap(
                            i['f']('pics_info_final.csv')
                          )
                        );
                      case 6:
                        return (
                          (t = x.sent),
                          (x.next = 9),
                          regeneratorRuntime.awrap(i['f']('artist_view.csv'))
                        );
                      case 9:
                        return (
                          (e = x.sent),
                          (x.next = 12),
                          regeneratorRuntime.awrap(i['f']('year.csv'))
                        );
                      case 12:
                        return (
                          (r = x.sent),
                          (x.next = 15),
                          regeneratorRuntime.awrap(
                            i['f']('numberofpaintings.csv')
                          )
                        );
                      case 15:
                        return (
                          (a = x.sent),
                          (x.next = 18),
                          regeneratorRuntime.awrap(i['f']('countries.csv'))
                        );
                      case 18:
                        return (
                          (n = x.sent),
                          (x.next = 21),
                          regeneratorRuntime.awrap(i['f']('genres.csv'))
                        );
                      case 21:
                        return (
                          (o = x.sent),
                          (x.next = 24),
                          regeneratorRuntime.awrap(
                            i['f']('artists_info_final.csv')
                          )
                        );
                      case 24:
                        return (
                          (s = x.sent),
                          (x.next = 27),
                          regeneratorRuntime.awrap(
                            i['f']('color_info_kmeans_final_hsv_360.csv')
                          )
                        );
                      case 27:
                        return (
                          (l = x.sent),
                          (this.showinghslData = l),
                          (this.aviewData = s),
                          (this.showingData = t),
                          (this.artistData = e),
                          (this.yearData = r),
                          (this.numberData = a),
                          (this.countryData = n),
                          (this.genreData = o),
                          this,
                          (p = this.showingData),
                          p.sort(function (t, e) {
                            return i['g'](t.color1, e.color1);
                          }),
                          (this.hexcolor = p),
                          (x.next = 42),
                          regeneratorRuntime.awrap(
                            i['f']('pics_info_final.csv')
                          )
                        );
                      case 42:
                        return (
                          (d = x.sent),
                          d.sort(u),
                          (this.hslcolor = d),
                          (x.next = 47),
                          regeneratorRuntime.awrap(
                            i['f']('pics_info_final.csv')
                          )
                        );
                      case 47:
                        return (
                          (y = x.sent),
                          y.sort(h),
                          (this.rgbcolor = y),
                          (x.next = 52),
                          regeneratorRuntime.awrap(
                            i['f']('pics_info_final.csv')
                          )
                        );
                      case 52:
                        (g = x.sent),
                          g.sort(function (t, e) {
                            return i['g'](t.year_of_birth, e.year_of_birth);
                          }),
                          (this.yearcolor = g),
                          this.renderChart();
                      case 56:
                      case 'end':
                        return x.stop();
                    }
                },
                null,
                this
              );
            },
            renderChart: function () {
              var t = 1100,
                e = 736,
                r = 4,
                a = 2,
                n = 30,
                s = this.artistData,
                l = this.yearData,
                c = this.numberData,
                f = this.countryData,
                u = this.genreData,
                h = this.aviewData,
                p = this.showinghslData,
                d = this.showingData,
                y = 'name',
                g = s;
              i['q'].prototype.moveToFront = function () {
                return this.each(function () {
                  this.parentNode.appendChild(this);
                });
              };
              var x = this;
              if ('Name' == x.sortArtist) {
                console.log('sort by name');
                (y = 'name'), (g = s);
              } else if ('Year Born' == x.sortArtist) {
                console.log('sort by year');
                (y = 'year'), (g = l);
              } else if ('Painting Amount' == x.sortArtist) {
                console.log('sort by number');
                (y = 'number'), (g = c);
              } else if ('Country' == x.sortArtist) {
                console.log('sort by country');
                (y = 'country'), (g = f);
              } else if ('Genre' == x.sortArtist) {
                console.log('sort by genre');
                (y = 'genre'), (g = u);
              }
              i['o']('#artistsvg').selectAll('*').remove(),
                (this.svg = i['o']('#artistsvg')
                  .attr('height', e)
                  .attr('width', t));
              var m = this.hexcolor;
              'HEX' == x.sortColor
                ? (console.log('hex'), (m = this.hexcolor))
                : 'HSV' == x.sortColor
                ? (console.log('hsl'), (m = this.hslcolor))
                : 'RGB' == x.sortColor
                ? (console.log('rgb'), (m = this.rgbcolor))
                : 'Year' == x.sortColor &&
                  (console.log('year'), (m = this.yearcolor));
              var v = i['m']()
                  .key(function (t) {
                    return t.id;
                  })
                  .entries(m),
                w = this.svg
                  .selectAll('artist')
                  .data(v)
                  .enter()
                  .append('g')
                  .attr('transform', function (t, e) {
                    var r = g.find(function (e) {
                        return e.id === t.key;
                      }),
                      a = r.x,
                      n = r.y - 60;
                    return 'translate(' + [a, n] + ')';
                  }),
                b = w.append('svg');
              w = b
                .selectAll('rect')
                .data(function (t) {
                  return t.values;
                })
                .enter()
                .append('g')
                .attr('class', 'artist_g')
                .on('click', C)
                .style('cursor', 'pointer')
                .on('mouseover', function (t) {
                  if ('name' !== y) {
                    var e = i['o']('#artistsvg').select('.a'.concat(t.id));
                    e.style('opacity', '1'),
                      e.style('z-index', 1001),
                      e.moveToFront();
                  }
                  var r = i['o'](this);
                  r.select('rect.one').attr('width', 6).attr('height', 6),
                    r.select('rect.two').attr('width', 6).attr('height', 6),
                    r.select('rect.three').attr('width', 6).attr('height', 6),
                    r.select('rect.four').attr('width', 6).attr('height', 6),
                    1 == r.style('fill-opacity') &&
                      o['a'].$emit('previewPic', t);
                })
                .on('mouseout', function (t) {
                  i['o']('#artistsvg')
                    .select('.a'.concat(t.id))
                    .style('opacity', '0');
                  var e = i['o'](this);
                  e.select('rect.one').attr('width', 4).attr('height', 4),
                    e.select('rect.two').attr('width', 4).attr('height', 4),
                    e.select('rect.three').attr('width', 4).attr('height', 4),
                    e.select('rect.four').attr('width', 4).attr('height', 4);
                });
              w
                .append('rect')
                .attr('class', 'one')
                .attr('width', r)
                .attr('height', r)
                .attr('x', function (t, e) {
                  var n = g.find(function (e) {
                      return e.id === t.id;
                    }),
                    i = n.col;
                  return (e % i) * (2 * r + a);
                })
                .attr('y', function (t, e) {
                  var i = g.find(function (e) {
                      return e.id === t.id;
                    }),
                    o = i.col;
                  return Math.floor(e / o) * (2 * r + a) + n;
                })
                .attr('fill', function (t) {
                  return t['color1'].slice(0, 7);
                }),
                w
                  .append('rect')
                  .attr('class', 'two')
                  .attr('width', r)
                  .attr('height', r)
                  .attr('x', function (t, e) {
                    var n = g.find(function (e) {
                        return e.id === t.id;
                      }),
                      i = n.col;
                    return (e % i) * (2 * r + a) + r;
                  })
                  .attr('y', function (t, e) {
                    var i = g.find(function (e) {
                        return e.id === t.id;
                      }),
                      o = i.col;
                    return Math.floor(e / o) * (2 * r + a) + n;
                  })
                  .attr('fill', function (t) {
                    return t['color2'].slice(0, 7);
                  }),
                w
                  .append('rect')
                  .attr('class', 'three')
                  .attr('width', r)
                  .attr('height', r)
                  .attr('x', function (t, e) {
                    var n = g.find(function (e) {
                        return e.id === t.id;
                      }),
                      i = n.col;
                    return (e % i) * (2 * r + a);
                  })
                  .attr('y', function (t, e) {
                    var i = g.find(function (e) {
                        return e.id === t.id;
                      }),
                      o = i.col;
                    return Math.floor(e / o) * (2 * r + a) + r + n;
                  })
                  .attr('fill', function (t) {
                    return t['color3'].slice(0, 7);
                  }),
                w
                  .append('rect')
                  .attr('class', 'four')
                  .attr('width', r)
                  .attr('height', r)
                  .attr('x', function (t, e) {
                    var n = g.find(function (e) {
                        return e.id === t.id;
                      }),
                      i = n.col;
                    return (e % i) * (2 * r + a) + r;
                  })
                  .attr('y', function (t, e) {
                    var i = g.find(function (e) {
                        return e.id === t.id;
                      }),
                      o = i.col;
                    return Math.floor(e / o) * (2 * r + a) + r + n;
                  })
                  .attr('fill', function (t) {
                    return t['color4'].slice(0, 7);
                  }),
                b
                  .append('text')
                  .attr('class', function (t, e) {
                    t = t.values[0].id;
                    var r = 'a'.concat(t.toString());
                    return r;
                  })
                  .attr('transform', function (t) {
                    g.find(function (e) {
                      return e.id === t.key;
                    });
                    return 'translate(' + [0, 26] + ')';
                  })
                  .attr('fill', '#fc766a')
                  .style('font', '8px roboto')
                  .style('opacity', '0')
                  .text(function (t, e) {
                    var r = t.values[0].artist_name;
                    return r;
                  }),
                'name' == y
                  ? (b
                      .append('text')
                      .attr('class', 'artist')
                      .attr('transform', 'translate(' + [0, 12] + ')')
                      .attr('fill', 'white')
                      .style('font', '9px roboto')
                      .text(function (t, e) {
                        var r = t.values[0].filename.substring(
                          0,
                          t.values[0].filename.lastIndexOf('_')
                        );
                        return r.split('_')[0];
                      }),
                    b
                      .append('text')
                      .attr('class', 'artist')
                      .attr('transform', 'translate(' + [0, n - 4] + ')')
                      .attr('fill', 'white')
                      .style('font', '9px roboto')
                      .text(function (t, e) {
                        var r = t.values[0].filename.substring(
                            0,
                            t.values[0].filename.lastIndexOf('_')
                          ),
                          a = r.split('_'),
                          n = a.slice(1, a.length).join(' ');
                        return n;
                      }))
                  : 'year' == y
                  ? b
                      .append('text')
                      .attr('class', 'artist')
                      .attr('transform', 'translate(' + [0, 16] + ')')
                      .attr('fill', 'white')
                      .style('font', '9px roboto')
                      .text(function (t, e) {
                        var r = l.find(function (e) {
                            return e.id === t.key;
                          }),
                          a = r.year_of_birth;
                        return a;
                      })
                  : 'number' == y
                  ? b
                      .append('text')
                      .attr('class', 'artist')
                      .attr('transform', 'translate(' + [0, 16] + ')')
                      .attr('fill', 'white')
                      .style('font', '9px roboto')
                      .text(function (t, e) {
                        var r = c.find(function (e) {
                            return e.id === t.key;
                          }),
                          a = r.number_of_paintings;
                        return a;
                      })
                  : 'genre' == y
                  ? (b
                      .append('text')
                      .attr('class', 'artist')
                      .attr('transform', 'translate(' + [0, 12] + ')')
                      .attr('fill', 'white')
                      .style('font', '9px roboto')
                      .text(function (t, e) {
                        var r = u.find(function (e) {
                          return e.id === t.key;
                        });
                        return r.append;
                      }),
                    b
                      .append('line')
                      .attr('x1', 0)
                      .attr('y1', 16)
                      .attr('x2', function (t, e) {
                        var r = u.find(function (e) {
                            return e.id === t.key;
                          }),
                          a = r.rectwidth;
                        return a.length > 0 ? r.rectwidth : 0;
                      })
                      .attr('y2', 16)
                      .attr('stroke-width', 2)
                      .attr('stroke', 'white')
                      .attr('stroke-opacity', '0.7'))
                  : 'country' == y &&
                    (b
                      .append('text')
                      .attr('class', 'artist')
                      .attr('transform', 'translate(' + [0, 12] + ')')
                      .attr('fill', 'white')
                      .style('font', '9px roboto')
                      .text(function (t, e) {
                        var r = f.find(function (e) {
                            return e.id === t.key;
                          }),
                          a = r.append;
                        return a;
                      }),
                    b
                      .append('line')
                      .attr('x1', 0)
                      .attr('y1', 16)
                      .attr('x2', function (t, e) {
                        var r = f.find(function (e) {
                            return e.id === t.key;
                          }),
                          a = r.rectwidth;
                        return a.length > 0 ? r.rectwidth : 0;
                      })
                      .attr('y2', 16)
                      .attr('stroke-width', 2)
                      .attr('stroke', 'white')
                      .attr('stroke-opacity', '0.7'));
              var _ = document.getElementById('myModal'),
                A = (document.getElementsByClassName('modal-content'), []);
              i['o']('.modal-content')
                .append('svg')
                .attr('id', 'detailsvg')
                .attr('width', '100%')
                .attr('height', '100%');
              function C(t, e) {
                (_.style.display = 'block'), (A = t), I(A);
              }
              function k(t, e) {
                t.each(function () {
                  var t,
                    r = i['o'](this),
                    a = r.text().split(/\s+/).reverse(),
                    n = [],
                    o = 1.1,
                    s = r.attr('y'),
                    l = parseFloat(r.attr('dy')),
                    c = r
                      .text(null)
                      .append('tspan')
                      .attr('x', 0)
                      .attr('y', s)
                      .attr('dy', l + 'em');
                  while ((t = a.pop()))
                    n.push(t),
                      c.text(n.join(' ')),
                      c.node().getComputedTextLength() > e &&
                        (n.pop(),
                        c.text(n.join(' ')),
                        (n = [t]),
                        (c = r
                          .append('tspan')
                          .attr('x', 0)
                          .attr('y', s)
                          .attr('dy', o + l + 'em')
                          .text(t)));
                });
              }
              function I(t) {
                for (
                  var e = i['o']('#detailsvg'),
                    r = parseFloat(e.style('width').slice(0, -2)),
                    a = parseFloat(e.style('height').slice(0, -2)),
                    n = 0,
                    o = 0,
                    s = function () {
                      (c = t['color' + l.toString()]),
                        (n = parseFloat(c.split(':')[1])),
                        (f = 100 * n);
                      var s = l;
                      (u = Math.ceil(r * n)),
                        (y = o),
                        l > 4 && (y -= 150),
                        e
                          .append('rect')
                          .attr('width', u + 1)
                          .attr('height', a)
                          .attr('x', o)
                          .attr('y', 0)
                          .attr('fill', c.slice(0, 7))
                          .on('mouseover', function (t) {
                            console.log('#t'.concat(s.toString())),
                              i['p']('#t'.concat(s.toString())).style(
                                'opacity',
                                1
                              );
                          })
                          .on('mouseout', function (t) {
                            i['p']('#t'.concat(s.toString())).style(
                              'opacity',
                              0
                            );
                          }),
                        e
                          .append('rect')
                          .attr('id', 't'.concat(s.toString()))
                          .attr('width', 140)
                          .attr('height', 30)
                          .attr('x', y + 20)
                          .attr('y', 700)
                          .attr('fill', '#2e2e2e')
                          .attr('rx', 2)
                          .attr('ry', 2)
                          .style('opacity', 0),
                        e
                          .append('text')
                          .attr('id', 't'.concat(s.toString()))
                          .attr('x', y + 24)
                          .attr('y', 720)
                          .attr('fill', 'white')
                          .style('font', '18px roboto')
                          .style('opacity', 0)
                          .text(
                            c
                              .split(':')[0]
                              .concat(' | ', f.toString().slice(0, 4), '%')
                          ),
                        (o += u);
                    },
                    l = 1;
                  l < 11;
                  l++
                ) {
                  var c, f, u, y;
                  s();
                }
                e
                  .append('rect')
                  .attr('width', 38)
                  .attr('height', 38)
                  .attr('transform', 'translate(' + [1320, 30] + ')')
                  .attr('fill', 'rgba(255, 255, 255, 0.2)'),
                  e
                    .append('svg:image')
                    .attr('id', 'close')
                    .attr('transform', 'translate(' + [1325, 35] + ')')
                    .attr('fill', 'white')
                    .attr('width', '28px')
                    .attr('height', '28px')
                    .style('font', '20px roboto')
                    .style('cursor', 'pointer')
                    .on('click', function () {
                      (_.style.display = 'none'), e.selectAll('*').remove();
                    })
                    .attr('xlink:href', 'close.png'),
                  e
                    .append('rect')
                    .attr('width', 820)
                    .attr('height', 660)
                    .attr('x', 114)
                    .attr('y', 30)
                    .attr('fill', 'rgba(74, 74, 74, 0.1)'),
                  e
                    .append('rect')
                    .attr('width', 360)
                    .attr('height', 400)
                    .attr('x', 934)
                    .attr('y', 30)
                    .attr('fill', 'rgba(74, 74, 74, 0.8)');
                var g = e
                  .append('g')
                  .attr('id', 'bar')
                  .attr('x', 934)
                  .attr('y', 430);
                g.append('rect')
                  .attr('width', 360)
                  .attr('height', 260)
                  .attr('x', 934)
                  .attr('y', 430)
                  .attr('fill', 'rgba(0, 0, 0, 0.7)');
                e.append('image')
                  .attr(
                    'xlink:href',
                    'sampled_images/'.concat(
                      t.artist_name.split(' ').join('_'),
                      '/',
                      t.filename
                    )
                  )
                  .attr('width', 820)
                  .attr('height', 660)
                  .attr('x', 114)
                  .attr('y', 30);
                e
                  .append('text')
                  .attr('transform', 'translate(' + [960, 70] + ')')
                  .attr('fill', 'white')
                  .attr('dy', '0')
                  .style('font', '18px roboto slab')
                  .style('font-weight', 'bold')
                  .text(t.name_of_pic)
                  .call(k, 320),
                  e
                    .append('text')
                    .attr('transform', 'translate(' + [960, 110] + ')')
                    .attr('fill', 'white')
                    .style('font', '14px roboto')
                    .text(t.artist_name.concat(', ', t.year_of_pic)),
                  e
                    .append('text')
                    .attr('transform', 'translate(' + [960, 154] + ')')
                    .attr('fill', 'white')
                    .style('font', '14px roboto slab')
                    .style('font-weight', 'bold')
                    .text('Paintings with Similar Main Color');
                var x = t.similar_pics.split(','),
                  m = x[0].split('_'),
                  v = x[1].split('_'),
                  w = x[2].split('_'),
                  b = d.find(function (t) {
                    return t.filename === x[0];
                  }),
                  A = d.find(function (t) {
                    return t.filename === x[1];
                  }),
                  C = d.find(function (t) {
                    return t.filename === x[2];
                  });
                m.pop(), v.pop(), w.pop();
                var I = m.join('_'),
                  N = v.join('_'),
                  S = w.join('_');
                e
                  .append('rect')
                  .attr('width', 100)
                  .attr('height', 100)
                  .attr('transform', 'translate(' + [955, 165] + ')')
                  .attr('fill', 'rgba(0, 0, 0, 0.7)'),
                  e
                    .append('rect')
                    .attr('width', 100)
                    .attr('height', 100)
                    .attr('transform', 'translate(' + [1065, 165] + ')')
                    .attr('fill', 'rgba(0, 0, 0, 0.7)'),
                  e
                    .append('rect')
                    .attr('width', 100)
                    .attr('height', 100)
                    .attr('transform', 'translate(' + [1175, 165] + ')')
                    .attr('fill', 'rgba(0, 0, 0, 0.7)');
                e.append('image')
                  .attr('xlink:href', 'sampled_images/'.concat(I, '/', x[0]))
                  .attr('id', 'picone')
                  .attr('width', 100)
                  .attr('height', 100)
                  .attr('x', 955)
                  .attr('y', 165)
                  .on('mouseover', function (t) {
                    i['o']('#picone').style('opacity', 0),
                      i['o']('#txtone').style('opacity', 1);
                  })
                  .on('mouseout', function (t) {
                    i['o']('#picone').style('opacity', 1),
                      i['o']('#txtone').style('opacity', 0);
                  });
                e.append('text')
                  .attr('transform', 'translate(' + [960, 180] + ')')
                  .attr('id', 'txtone')
                  .attr('fill', 'white')
                  .attr('dy', '0')
                  .style('font', '10px roboto')
                  .style('opacity', 0)
                  .text(b.name_of_pic)
                  .call(k, 92);
                e.append('image')
                  .attr('xlink:href', 'sampled_images/'.concat(N, '/', x[1]))
                  .attr('id', 'pictwo')
                  .attr('width', 100)
                  .attr('height', 100)
                  .attr('x', 1065)
                  .attr('y', 165)
                  .on('mouseover', function (t) {
                    i['o']('#pictwo').style('opacity', 0),
                      i['o']('#txttwo').style('opacity', 1);
                  })
                  .on('mouseout', function (t) {
                    i['o']('#pictwo').style('opacity', 1),
                      i['o']('#txttwo').style('opacity', 0);
                  });
                e.append('text')
                  .attr('id', 'txttwo')
                  .attr('transform', 'translate(' + [1070, 180] + ')')
                  .attr('fill', 'white')
                  .attr('dy', '0')
                  .style('font', '10px roboto')
                  .style('opacity', 0)
                  .text(A.name_of_pic)
                  .call(k, 92);
                e.append('image')
                  .attr('id', 'picthree')
                  .attr('xlink:href', 'sampled_images/'.concat(S, '/', x[2]))
                  .attr('width', 100)
                  .attr('height', 100)
                  .attr('x', 1175)
                  .attr('y', 165)
                  .on('mouseover', function (t) {
                    i['o']('#picthree').style('opacity', 0),
                      i['o']('#txtthree').style('opacity', 1);
                  })
                  .on('mouseout', function (t) {
                    i['o']('#picthree').style('opacity', 1),
                      i['o']('#txtthree').style('opacity', 0);
                  });
                e.append('text')
                  .attr('id', 'txtthree')
                  .attr('transform', 'translate(' + [1180, 180] + ')')
                  .attr('fill', 'white')
                  .attr('dy', '0')
                  .style('font', '10px roboto')
                  .style('opacity', 0)
                  .text(C.name_of_pic)
                  .call(k, 92);
                e.append('image')
                  .attr(
                    'xlink:href',
                    'Artists_photo_square/'.concat(
                      t.id,
                      '_',
                      t.artist_name.split(' ').join('_'),
                      '.jpg'
                    )
                  )
                  .attr('width', 80)
                  .attr('height', 80)
                  .attr('x', 960)
                  .attr('y', 304);
                e
                  .append('text')
                  .attr('transform', 'translate(' + [1060, 320] + ')')
                  .attr('fill', 'white')
                  .style('font', '18px roboto slab')
                  .style('font-weight', 'bold')
                  .text(t.artist_name),
                  e
                    .append('text')
                    .attr('transform', 'translate(' + [1060, 340] + ')')
                    .attr('fill', 'white')
                    .style('font', '12px roboto')
                    .text(t.year_of_birth.concat(' ~ ', t.year_of_death)),
                  e
                    .append('text')
                    .attr('transform', 'translate(' + [1060, 360] + ')')
                    .attr('fill', 'white')
                    .style('font', '12px roboto')
                    .text(t.nationality);
                var D = h.find(function (e) {
                  return e.id === t.id;
                });
                e
                  .append('text')
                  .attr('transform', 'translate(' + [1060, 380] + ')')
                  .attr('fill', 'white')
                  .style('font', '12px roboto')
                  .text(D.number_of_paintings.concat(' paintings')),
                  e
                    .append('text')
                    .attr('transform', 'translate(' + [1060, 400] + ')')
                    .attr('fill', 'white')
                    .attr('dy', 0)
                    .style('font', '12px roboto')
                    .text(t.genre.split(',').join(' '))
                    .call(k, 120),
                  console.log(p);
                var F = p.filter(function (e) {
                    return e.id == t.id;
                  }),
                  E = [],
                  $ = [],
                  T = [];
                F.forEach(function (t) {
                  for (var e = 1; e < 11; e++)
                    E.push(t['color' + e.toString() + '-H']),
                      $.push(t['color' + e.toString() + '-S']),
                      T.push(t['color' + e.toString() + '-V']);
                });
                var M = 250,
                  R = 150,
                  j = g
                    .append('svg')
                    .append('g')
                    .attr('transform', 'translate(1000,500)'),
                  B = i['n']().domain([0, 360]).range([0, M]);
                j.append('g')
                  .attr('id', 'x')
                  .attr('class', 'axiswhite')
                  .attr('transform', 'translate(0,' + R + ')')
                  .call(i['a'](B));
                var Y = i['j']()
                    .value(function (t) {
                      return t;
                    })
                    .domain(B.domain())
                    .thresholds(B.ticks(40)),
                  O = (i['i']('.0%'), Y(E)),
                  V = i['n']()
                    .range([R, 0])
                    .domain([
                      0,
                      i['k'](O, function (t) {
                        return t.length;
                      }),
                    ]);
                j.append('g').attr('class', 'axiswhite').call(i['b'](V)),
                  j
                    .append('text')
                    .attr('class', 'axis')
                    .attr('transform', 'translate(120 ,180)')
                    .style('text-anchor', 'middle')
                    .style('fill', 'white')
                    .style('font', '10px roboto')
                    .text('Hue'),
                  j
                    .append('text')
                    .attr('class', 'axis')
                    .attr('transform', 'rotate(-90)')
                    .attr('y', -30)
                    .attr('x', -70)
                    .style('text-anchor', 'middle')
                    .style('fill', 'white')
                    .style('font', '10px roboto')
                    .text('Numbers'),
                  j
                    .append('text')
                    .attr('transform', 'translate(-20 ,-40)')
                    .style('fill', 'white')
                    .style('font', '14px roboto slab')
                    .style('font-weight', 'bold')
                    .text(t.artist_name.concat("'s Overall Color Usage")),
                  j
                    .selectAll('rect')
                    .data(O)
                    .enter()
                    .append('rect')
                    .attr('class', 'bars')
                    .attr('x', 1)
                    .attr('transform', function (t) {
                      return 'translate(' + B(t.x0) + ',' + V(t.length) + ')';
                    })
                    .attr('width', function (t) {
                      return B(t.x1) - B(t.x0) - 1;
                    })
                    .attr('height', function (t) {
                      return R - V(t.length);
                    })
                    .style('fill', 'rgba(255,255,255,0.6)');
                function H(t, e) {
                  console.log(e),
                    j.selectAll('.axis').remove(),
                    j.selectAll('.axiswhite').remove(),
                    j.selectAll('.bars').remove();
                  var r = i['n']();
                  'Hue' == e
                    ? (i['o']('#hue').style('fill', '#fc766a'),
                      i['o']('#saturation').style('fill', 'white'),
                      i['o']('#value').style('fill', 'white'),
                      r.domain([0, 360]),
                      r.range([0, M]))
                    : 'Saturation' == e
                    ? (i['o']('#saturation').style('fill', '#fc766a'),
                      i['o']('#hue').style('fill', 'white'),
                      i['o']('#value').style('fill', 'white'),
                      r.domain([0, 1]),
                      r.range([0, M]))
                    : 'Value' == e &&
                      (i['o']('#value').style('fill', '#fc766a'),
                      i['o']('#saturation').style('fill', 'white'),
                      i['o']('#hue').style('fill', 'white'),
                      r.domain([0, 1]),
                      r.range([0, M])),
                    j
                      .append('g')
                      .attr('id', 'x')
                      .attr('class', 'axiswhite')
                      .attr('transform', 'translate(0,' + R + ')')
                      .call(i['a'](r));
                  var a = i['j']()
                      .value(function (t) {
                        return t;
                      })
                      .domain(r.domain())
                      .thresholds(r.ticks(40)),
                    n = (i['i']('.0%'), a(t)),
                    o = i['n']()
                      .range([R, 0])
                      .domain([
                        0,
                        i['k'](n, function (t) {
                          return t.length;
                        }),
                      ]);
                  j.append('g').attr('class', 'axiswhite').call(i['b'](o)),
                    j
                      .append('text')
                      .attr('class', 'axis')
                      .attr('transform', 'translate(120 ,180)')
                      .style('text-anchor', 'middle')
                      .style('fill', 'white')
                      .style('font', '10px roboto')
                      .text(e),
                    'Hue' == e &&
                      (j
                        .append('svg:image')
                        .attr('class', 'axis')
                        .attr('xlink:href', 'hue-bar-256.png')
                        .attr('transform', 'translate(' + [1, 149] + ')')
                        .style('width', 250)
                        .style('height', 20),
                      i['o']('#x').style('display', 'none')),
                    j
                      .append('text')
                      .attr('class', 'axis')
                      .attr('transform', 'rotate(-90)')
                      .attr('y', -30)
                      .attr('x', -70)
                      .style('text-anchor', 'middle')
                      .style('fill', 'white')
                      .style('font', '10px roboto')
                      .text('Frequency'),
                    j
                      .selectAll('rect')
                      .data(n)
                      .enter()
                      .append('rect')
                      .attr('class', 'bars')
                      .attr('x', 1)
                      .attr('transform', function (t) {
                        return 'translate(' + r(t.x0) + ',' + o(t.length) + ')';
                      })
                      .attr('width', function (t) {
                        return r(t.x1) - r(t.x0) - 1;
                      })
                      .attr('height', function (t) {
                        return R - o(t.length);
                      })
                      .style('fill', 'rgba(255,255,255,0.6)');
                }
                j
                  .append('g')
                  .style('cursor', 'pointer')
                  .append('text')
                  .attr('id', 'hue')
                  .attr('x', 0)
                  .attr('y', -20)
                  .text('Hue')
                  .style('fill', '#fc766a')
                  .style('font-size', 12)
                  .style('text-decoration', 'underline')
                  .on('click', function (t) {
                    H(E, 'Hue');
                  }),
                  j
                    .append('g')
                    .style('cursor', 'pointer')
                    .append('text')
                    .attr('id', 'saturation')
                    .attr('x', 50)
                    .attr('y', -20)
                    .text('Saturation')
                    .style('fill', 'white')
                    .style('font-size', 12)
                    .style('text-decoration', 'underline')
                    .on('click', function (t) {
                      H($, 'Saturation');
                    }),
                  j
                    .append('g')
                    .style('cursor', 'pointer')
                    .append('text')
                    .attr('id', 'value')
                    .attr('x', 130)
                    .attr('y', -20)
                    .text('Value')
                    .style('fill', 'white')
                    .style('font-size', 12)
                    .style('text-decoration', 'underline')
                    .on('click', function (t) {
                      H(T, 'Value');
                    }),
                  j
                    .append('svg:image')
                    .attr('class', 'axis')
                    .attr('xlink:href', 'hue-bar-256.png')
                    .attr('transform', 'translate(' + [1, 149] + ')')
                    .attr('width', '250px')
                    .attr('height', '20px')
                    .style('opacity', 0.6),
                  i['o']('#x').style('display', 'none');
              }
              (window.onclick = function (t) {
                t.target == _ && (_.style.display = 'none');
              }),
                o['a'].$emit('picAmountChanged', this.showingData.length);
            },
            updateChartByFilter: function () {
              console.log('update');
              var t = this,
                e = i['o']('#artistsvg'),
                r = [1260, 1990];
              e.selectAll('rect')
                .style('fill-opacity', 0.05)
                .style('pointer-events', 'none');
              var a = [];
              (a =
                1 == this.artists_list.length && 'All' == this.artists_list[0]
                  ? this.showingData
                  : this.showingData.filter(function (e) {
                      return t.artists_list.includes(e['artist_name']);
                    })),
                console.log(a.length),
                0 == this.paintingYear.length ||
                  (Number(this.paintingYear[0]) == r[0] &&
                    Number(this.paintingYear[1]) == r[1]) ||
                  (console.log('year'),
                  (a = a.filter(function (e) {
                    return (
                      e['year_of_pic'] >= Number(t.paintingYear[0]) &&
                      e['year_of_pic'] <= Number(t.paintingYear[1])
                    );
                  }))),
                '' != this.genre &&
                  (a = a.filter(function (e) {
                    return e['genre'].split(',').includes(t.genre);
                  })),
                '' != this.country &&
                  (a = a.filter(function (e) {
                    return e['nationality'] == t.country;
                  })),
                0 != this.colorAmount.length &&
                  (a = a.filter(function (e) {
                    return (
                      e['amount_of_main_color'] >= Number(t.colorAmount[0]) &&
                      e['amount_of_main_color'] <= Number(t.colorAmount[1])
                    );
                  })),
                0 != this.intensity.length &&
                  (a = a.filter(function (e) {
                    return (
                      100 * e['color_intensity'] >= Number(t.intensity[0]) &&
                      100 * e['color_intensity'] <= Number(t.intensity[1])
                    );
                  })),
                '' != this.colorTheory &&
                  (a = a.filter(function (e) {
                    return e['color_theory_tag']
                      .split(',')
                      .includes(t.colorTheory);
                  }));
              var n = e.selectAll('.one').data(a, function (t) {
                  return t.filename;
                }),
                s = e.selectAll('.two').data(a, function (t) {
                  return t.filename;
                }),
                l = e.selectAll('.three').data(a, function (t) {
                  return t.filename;
                }),
                c = e.selectAll('.four').data(a, function (t) {
                  return t.filename;
                });
              n.style('fill-opacity', 1).style('pointer-events', 'auto'),
                s.style('fill-opacity', 1).style('pointer-events', 'auto'),
                l.style('fill-opacity', 1).style('pointer-events', 'auto'),
                c.style('fill-opacity', 1).style('pointer-events', 'auto'),
                o['a'].$emit('picAmountChanged', a.length);
            },
          },
        },
        l = s,
        c = (r('8bb1'), r('2877')),
        f = Object(c['a'])(l, a, n, !1, null, null, null);
      e['default'] = f.exports;
    },
    a9e3: function (t, e, r) {
      'use strict';
      var a = r('83ab'),
        n = r('da84'),
        i = r('94ca'),
        o = r('6eeb'),
        s = r('5135'),
        l = r('c6b6'),
        c = r('7156'),
        f = r('c04e'),
        u = r('d039'),
        h = r('7c73'),
        p = r('241c').f,
        d = r('06cf').f,
        y = r('9bf2').f,
        g = r('58a8').trim,
        x = 'Number',
        m = n[x],
        v = m.prototype,
        w = l(h(v)) == x,
        b = function (t) {
          var e,
            r,
            a,
            n,
            i,
            o,
            s,
            l,
            c = f(t, !1);
          if ('string' == typeof c && c.length > 2)
            if (((c = g(c)), (e = c.charCodeAt(0)), 43 === e || 45 === e)) {
              if (((r = c.charCodeAt(2)), 88 === r || 120 === r)) return NaN;
            } else if (48 === e) {
              switch (c.charCodeAt(1)) {
                case 66:
                case 98:
                  (a = 2), (n = 49);
                  break;
                case 79:
                case 111:
                  (a = 8), (n = 55);
                  break;
                default:
                  return +c;
              }
              for (i = c.slice(2), o = i.length, s = 0; s < o; s++)
                if (((l = i.charCodeAt(s)), l < 48 || l > n)) return NaN;
              return parseInt(i, a);
            }
          return +c;
        };
      if (i(x, !m(' 0o1') || !m('0b1') || m('+0x1'))) {
        for (
          var _,
            A = function (t) {
              var e = arguments.length < 1 ? 0 : t,
                r = this;
              return r instanceof A &&
                (w
                  ? u(function () {
                      v.valueOf.call(r);
                    })
                  : l(r) != x)
                ? c(new m(b(e)), r, A)
                : b(e);
            },
            C = a
              ? p(m)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                  ','
                ),
            k = 0;
          C.length > k;
          k++
        )
          s(m, (_ = C[k])) && !s(A, _) && y(A, _, d(m, _));
        (A.prototype = v), (v.constructor = A), o(n, x, A);
      }
    },
    baa5: function (t, e, r) {
      var a = r('23e7'),
        n = r('e58c');
      a(
        { target: 'Array', proto: !0, forced: n !== [].lastIndexOf },
        { lastIndexOf: n }
      );
    },
    e25e: function (t, e, r) {
      var a = r('23e7'),
        n = r('e583');
      a({ global: !0, forced: parseInt != n }, { parseInt: n });
    },
    e583: function (t, e, r) {
      var a = r('da84'),
        n = r('58a8').trim,
        i = r('5899'),
        o = a.parseInt,
        s = /^[+-]?0[Xx]/,
        l = 8 !== o(i + '08') || 22 !== o(i + '0x16');
      t.exports = l
        ? function (t, e) {
            var r = n(String(t));
            return o(r, e >>> 0 || (s.test(r) ? 16 : 10));
          }
        : o;
    },
    e58c: function (t, e, r) {
      'use strict';
      var a = r('fc6a'),
        n = r('a691'),
        i = r('50c4'),
        o = r('b301'),
        s = Math.min,
        l = [].lastIndexOf,
        c = !!l && 1 / [1].lastIndexOf(1, -0) < 0,
        f = o('lastIndexOf');
      t.exports =
        c || f
          ? function (t) {
              if (c) return l.apply(this, arguments) || 0;
              var e = a(this),
                r = i(e.length),
                o = r - 1;
              for (
                arguments.length > 1 && (o = s(o, n(arguments[1]))),
                  o < 0 && (o = r + o);
                o >= 0;
                o--
              )
                if (o in e && e[o] === t) return o || 0;
              return -1;
            }
          : l;
    },
  },
]);
//# sourceMappingURL=chunk-1b7594b2.64cffbd4.js.map
