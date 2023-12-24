function p(r, s) {
    var t = u()
    p = function (v, w) {
      v = v - 135
      var z = t[v]
      return z
    }
    return p(r, s)
  }
  ;(function (aa, ab) {
    var ad = p,
      ae = aa()
    while (true) {
      try {
        var af =
          parseInt(ad(246)) / 1 +
          (-parseInt(ad(214)) / 2) * (-parseInt(ad(290)) / 3) +
          -parseInt(ad(302)) / 4 +
          parseInt(ad(236)) / 5 +
          (-parseInt(ad(284)) / 6) * (-parseInt(ad(271)) / 7) +
          (-parseInt(ad(155)) / 8) * (-parseInt(ad(244)) / 9) +
          (parseInt(ad(144)) / 10) * (-parseInt(ad(228)) / 11)
        if (af === ab) {
          break
        } else {
          ae.push(ae.shift())
        }
      } catch (ag) {
        ae.push(ae.shift())
      }
    }
  })(u, 119136)
  var QRCode
  !(function () {
    var ai = p
    function aj(ak) {
      var am = p
      this[am(234)] = an[am(289)]
      this[am(300)] = ak
      this[am(299)] = []
      for (var ao = [], ap = 0, aq = this[am(300)][am(168)]; aq > ap; ap++) {
        var ar = this[am(300)][am(232)](ap)
        ar > 65536
          ? ((ao[0] = 240 | ((1835008 & ar) >>> 18)),
            (ao[1] = 128 | ((258048 & ar) >>> 12)),
            (ao[2] = 128 | ((4032 & ar) >>> 6)),
            (ao[3] = 128 | (63 & ar)))
          : ar > 2048
          ? ((ao[0] = 224 | ((61440 & ar) >>> 12)),
            (ao[1] = 128 | ((4032 & ar) >>> 6)),
            (ao[2] = 128 | (63 & ar)))
          : ar > 128
          ? ((ao[0] = 192 | ((1984 & ar) >>> 6)), (ao[1] = 128 | (63 & ar)))
          : (ao[0] = ar)
        this[am(299)] = this.parsedData[am(205)](ao)
      }
      this[am(299)][am(168)] != this[am(300)].length &&
        (this[am(299)][am(175)](191),
        this[am(299)].unshift(187),
        this.parsedData[am(175)](239))
    }
    function as(at, au) {
      var aw = p
      this[aw(220)] = at
      this[aw(187)] = au
      this[aw(285)] = null
      this[aw(159)] = 0
      this.dataCache = null
      this.dataList = []
    }
    function ax(ay, az) {
      var bb = p
      if (void 0 == ay[bb(168)]) {
        throw new Error(ay[bb(168)] + '/' + az)
      }
      for (var bc = 0; bc < ay[bb(168)] && 0 == ay[bc]; ) {
        bc++
      }
      this[bb(288)] = new Array(ay.length - bc + az)
      for (var bd = 0; bd < ay[bb(168)] - bc; bd++) {
        this[bb(288)][bd] = ay[bd + bc]
      }
    }
    function be(bf, bg) {
      var bh = p
      this[bh(147)] = bf
      this[bh(189)] = bg
    }
    function bi() {
      var bj = p
      this[bj(192)] = []
      this[bj(168)] = 0
    }
    function bk() {
      var bl = p
      return bl(169) != typeof CanvasRenderingContext2D
    }
    function bm() {
      var bn = p,
        bo = false,
        bp = navigator[bn(245)]
      return (
        /android/i[bn(265)](bp) &&
          ((bo = true),
          (aMat = bp.toString()[bn(136)](/android ([0-9]\.[0-9])/i)),
          aMat && aMat[1] && (bo = parseFloat(aMat[1]))),
        bo
      )
    }
    function bq(br, bs) {
      var bu = p
      for (var bv = 1, bw = bx(br), by = 0, bz = ca.length; bz >= by; by++) {
        var cb = 0
        switch (bs) {
          case 1:
            cb = ca[by][0]
            break
          case 0:
            cb = ca[by][1]
            break
          case 3:
            cb = ca[by][2]
            break
          case 2:
            cb = ca[by][3]
        }
        if (cb >= bw) {
          break
        }
        bv++
      }
      if (bv > ca[bu(168)]) {
        throw new Error(bu(286))
      }
      return bv
    }
    function bx(cd) {
      var cf = p,
        cg = encodeURI(cd)
          [cf(225)]()
          .replace(/\%[0-9a-fA-F]{2}/g, 'a')
      return cg.length + (cg[cf(168)] != cd ? 3 : 0)
    }
    aj[ai(305)] = {
      getLength: function () {
        var ch = ai
        return this[ch(299)][ch(168)]
      },
      write: function (ci) {
        var cj = ai
        for (var ck = 0, cl = this.parsedData[cj(168)]; cl > ck; ck++) {
          ci[cj(201)](this[cj(299)][ck], 8)
        }
      },
    }
    as[ai(305)] = {
      addData: function (cm) {
        var co = ai,
          cp = new aj(cm)
        this[co(287)][co(152)](cp)
        this.dataCache = null
      },
      isDark: function (cq, cr) {
        var cs = ai
        if (0 > cq || this[cs(159)] <= cq || 0 > cr || this[cs(159)] <= cr) {
          throw new Error(cq + ',' + cr)
        }
        return this[cs(285)][cq][cr]
      },
      getModuleCount: function () {
        return this.moduleCount
      },
      make: function () {
        var cv = ai
        this[cv(242)](false, this.getBestMaskPattern())
      },
      makeImpl: function (cw, cx) {
        var cz = ai
        this[cz(159)] = 4 * this.typeNumber + 17
        this[cz(285)] = new Array(this.moduleCount)
        for (var da = 0; da < this[cz(159)]; da++) {
          this.modules[da] = new Array(this.moduleCount)
          for (var db = 0; db < this[cz(159)]; db++) {
            this.modules[da][db] = null
          }
        }
        this[cz(176)](0, 0)
        this.setupPositionProbePattern(this.moduleCount - 7, 0)
        this[cz(176)](0, this[cz(159)] - 7)
        this[cz(145)]()
        this[cz(260)]()
        this.setupTypeInfo(cw, cx)
        this[cz(220)] >= 7 && this[cz(279)](cw)
        null == this[cz(191)] &&
          (this[cz(191)] = as[cz(218)](
            this[cz(220)],
            this[cz(187)],
            this[cz(287)]
          ))
        this.mapData(this[cz(191)], cx)
      },
      setupPositionProbePattern: function (dc, dd) {
        var de = ai
        for (var df = -1; 7 >= df; df++) {
          if (!(-1 >= dc + df || this[de(159)] <= dc + df)) {
            for (var dg = -1; 7 >= dg; dg++) {
              ;-1 >= dd + dg ||
                this[de(159)] <= dd + dg ||
                (this[de(285)][dc + df][dd + dg] =
                  (df >= 0 && 6 >= df && (0 == dg || 6 == dg)) ||
                  (dg >= 0 && 6 >= dg && (0 == df || 6 == df)) ||
                  (df >= 2 && 4 >= df && dg >= 2 && 4 >= dg)
                    ? true
                    : false)
            }
          }
        }
      },
      getBestMaskPattern: function () {
        var di = ai
        for (var dj = 0, dk = 0, dl = 0; 8 > dl; dl++) {
          this[di(242)](true, dl)
          var dm = dn.getLostPoint(this)
          ;(0 == dl || dj > dm) && ((dj = dm), (dk = dl))
        }
        return dk
      },
      createMovieClip: function (dp, dq, dr) {
        var dt = ai,
          du = dp[dt(283)](dq, dr)
        this[dt(275)]()
        for (var dw = 0; dw < this[dt(285)][dt(168)]; dw++) {
          for (var dx = dw * 1, dy = 0; dy < this[dt(285)][dw][dt(168)]; dy++) {
            var dz = dy * 1,
              ea = this[dt(285)][dw][dy]
            ea &&
              (du.beginFill(0, 100),
              du[dt(204)](dz, dx),
              du[dt(171)](dz + 1, dx),
              du.lineTo(dz + 1, dx + 1),
              du[dt(171)](dz, dx + 1),
              du[dt(237)]())
          }
        }
        return du
      },
      setupTimingPattern: function () {
        var eb = ai
        for (var ec = 8; ec < this[eb(159)] - 8; ec++) {
          null == this[eb(285)][ec][6] && (this[eb(285)][ec][6] = 0 == ec % 2)
        }
        for (var ed = 8; ed < this[eb(159)] - 8; ed++) {
          null == this[eb(285)][6][ed] && (this[eb(285)][6][ed] = 0 == ed % 2)
        }
      },
      setupPositionAdjustPattern: function () {
        var ef = ai
        for (
          var eg = dn[ef(161)](this[ef(220)]), eh = 0;
          eh < eg[ef(168)];
          eh++
        ) {
          for (var ei = 0; ei < eg.length; ei++) {
            var ej = eg[eh],
              ek = eg[ei]
            if (null == this[ef(285)][ej][ek]) {
              for (var el = -2; 2 >= el; el++) {
                for (var em = -2; 2 >= em; em++) {
                  this[ef(285)][ej + el][ek + em] =
                    -2 == el ||
                    2 == el ||
                    -2 == em ||
                    2 == em ||
                    (0 == el && 0 == em)
                      ? true
                      : false
                }
              }
            }
          }
        }
      },
      setupTypeNumber: function (en) {
        var ep = ai
        for (var eq = dn.getBCHTypeNumber(this[ep(220)]), er = 0; 18 > er; er++) {
          var es = !en && 1 == (1 & (eq >> er))
          this[ep(285)][Math[ep(194)](er / 3)][(er % 3) + this[ep(159)] - 8 - 3] =
            es
        }
        for (var er = 0; 18 > er; er++) {
          var es = !en && 1 == (1 & (eq >> er))
          this[ep(285)][(er % 3) + this[ep(159)] - 8 - 3][Math[ep(194)](er / 3)] =
            es
        }
      },
      setupTypeInfo: function (et, eu) {
        var ew = ai
        for (
          var ex = (this.errorCorrectLevel << 3) | eu,
            ey = dn[ew(210)](ex),
            ez = 0;
          15 > ez;
          ez++
        ) {
          var fb = !et && 1 == (1 & (ey >> ez))
          6 > ez
            ? (this.modules[ez][8] = fb)
            : 8 > ez
            ? (this[ew(285)][ez + 1][8] = fb)
            : (this[ew(285)][this[ew(159)] - 15 + ez][8] = fb)
        }
        for (var ez = 0; 15 > ez; ez++) {
          var fb = !et && 1 == (1 & (ey >> ez))
          8 > ez
            ? (this[ew(285)][8][this[ew(159)] - ez - 1] = fb)
            : 9 > ez
            ? (this[ew(285)][8][15 - ez - 1 + 1] = fb)
            : (this[ew(285)][8][15 - ez - 1] = fb)
        }
        this[ew(285)][this.moduleCount - 8][8] = !et
      },
      mapData: function (fc, fd) {
        var ff = ai
        for (
          var fg = -1,
            fh = this[ff(159)] - 1,
            fi = 7,
            fj = 0,
            fk = this.moduleCount - 1;
          fk > 0;
          fk -= 2
        ) {
          for (6 == fk && fk--; ; ) {
            for (var fl = 0; 2 > fl; fl++) {
              if (null == this[ff(285)][fh][fk - fl]) {
                var fm = false
                fj < fc[ff(168)] && (fm = 1 == (1 & (fc[fj] >>> fi)))
                var fn = dn[ff(150)](fd, fh, fk - fl)
                fn && (fm = !fm)
                this[ff(285)][fh][fk - fl] = fm
                fi--
                ;-1 == fi && (fj++, (fi = 7))
              }
            }
            if (((fh += fg), 0 > fh || this[ff(159)] <= fh)) {
              fh -= fg
              fg = -fg
              break
            }
          }
        }
      },
    }
    as.PAD0 = 236
    as[ai(309)] = 17
    as.createData = function (fo, fp, fq) {
      var fs = ai
      for (
        var ft = be[fs(138)](fo, fp), fu = new bi(), fv = 0;
        fv < fq[fs(168)];
        fv++
      ) {
        var fw = fq[fv]
        fu[fs(201)](fw[fs(234)], 4)
        fu.put(fw[fs(294)](), dn[fs(160)](fw[fs(234)], fo))
        fw[fs(239)](fu)
      }
      for (var fx = 0, fv = 0; fv < ft[fs(168)]; fv++) {
        fx += ft[fv][fs(189)]
      }
      if (fu[fs(160)]() > 8 * fx) {
        throw new Error(
          'code length overflow. (' + fu[fs(160)]() + '>' + 8 * fx + ')'
        )
      }
      for (
        fu.getLengthInBits() + 4 <= 8 * fx && fu[fs(201)](0, 4);
        0 != fu[fs(160)]() % 8;
  
      ) {
        fu[fs(219)](false)
      }
      for (;;) {
        if (fu[fs(160)]() >= 8 * fx) {
          break
        }
        if ((fu.put(as[fs(269)], 8), fu[fs(160)]() >= 8 * fx)) {
          break
        }
        fu.put(as[fs(309)], 8)
      }
      return as.createBytes(fu, ft)
    }
    as[ai(266)] = function (fy, fz) {
      var gb = ai
      for (
        var gc = 0,
          gd = 0,
          ge = 0,
          gf = new Array(fz[gb(168)]),
          gg = new Array(fz.length),
          gh = 0;
        gh < fz[gb(168)];
        gh++
      ) {
        var gi = fz[gh][gb(189)],
          gj = fz[gh][gb(147)] - gi
        gd = Math[gb(207)](gd, gi)
        ge = Math[gb(207)](ge, gj)
        gf[gh] = new Array(gi)
        for (var gk = 0; gk < gf[gh].length; gk++) {
          gf[gh][gk] = 255 & fy.buffer[gk + gc]
        }
        gc += gi
        var gl = dn[gb(226)](gj),
          gm = new ax(gf[gh], gl[gb(294)]() - 1),
          gn = gm[gb(291)](gl)
        gg[gh] = new Array(gl[gb(294)]() - 1)
        for (var gk = 0; gk < gg[gh][gb(168)]; gk++) {
          var go = gk + gn[gb(294)]() - gg[gh][gb(168)]
          gg[gh][gk] = go >= 0 ? gn[gb(257)](go) : 0
        }
      }
      for (var gp = 0, gk = 0; gk < fz[gb(168)]; gk++) {
        gp += fz[gk][gb(147)]
      }
      for (var gq = new Array(gp), gr = 0, gk = 0; gd > gk; gk++) {
        for (var gh = 0; gh < fz.length; gh++) {
          gk < gf[gh][gb(168)] && (gq[gr++] = gf[gh][gk])
        }
      }
      for (var gk = 0; ge > gk; gk++) {
        for (var gh = 0; gh < fz[gb(168)]; gh++) {
          gk < gg[gh][gb(168)] && (gq[gr++] = gg[gh][gk])
        }
      }
      return gq
    }
    for (
      var dn = {
          PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170],
          ],
          G15: 1335,
          G18: 7973,
          G15_MASK: 21522,
          getBCHTypeInfo: function (gt) {
            var gv = ai
            for (
              var gw = gt << 10;
              dn[gv(146)](gw) - dn[gv(146)](dn[gv(224)]) >= 0;
  
            ) {
              gw ^= dn[gv(224)] << (dn.getBCHDigit(gw) - dn[gv(146)](dn[gv(224)]))
            }
            return ((gt << 10) | gw) ^ dn[gv(174)]
          },
          getBCHTypeNumber: function (gx) {
            var gz = ai
            for (
              var ha = gx << 12;
              dn[gz(146)](ha) - dn[gz(146)](dn[gz(274)]) >= 0;
  
            ) {
              ha ^= dn.G18 << (dn[gz(146)](ha) - dn[gz(146)](dn[gz(274)]))
            }
            return (gx << 12) | ha
          },
          getBCHDigit: function (hb) {
            for (var hc = 0; 0 != hb; ) {
              hc++
              hb >>>= 1
            }
            return hc
          },
          getPatternPosition: function (hd) {
            var he = ai
            return dn[he(258)][hd - 1]
          },
          getMask: function (hf, hg, hh) {
            var hj = ai
            switch (hf) {
              case gs.PATTERN000:
                return 0 == (hg + hh) % 2
              case gs.PATTERN001:
                return 0 == hg % 2
              case gs.PATTERN010:
                return 0 == hh % 3
              case gs[hj(200)]:
                return 0 == (hg + hh) % 3
              case gs[hj(304)]:
                return 0 == (Math[hj(194)](hg / 2) + Math.floor(hh / 3)) % 2
              case gs[hj(179)]:
                return 0 == ((hg * hh) % 2) + ((hg * hh) % 3)
              case gs[hj(301)]:
                return 0 == (((hg * hh) % 2) + ((hg * hh) % 3)) % 2
              case gs[hj(186)]:
                return 0 == (((hg * hh) % 3) + ((hg + hh) % 2)) % 2
              default:
                throw new Error(hj(263) + hf)
            }
          },
          getErrorCorrectPolynomial: function (hk) {
            var hm = ai
            for (var hn = new ax([1], 0), ho = 0; hk > ho; ho++) {
              hn = hn.multiply(new ax([1, hp[hm(195)](ho)], 0))
            }
            return hn
          },
          getLengthInBits: function (hq, hr) {
            var ht = ai
            if (hr >= 1 && 10 > hr) {
              switch (hq) {
                case an[ht(208)]:
                  return 10
                case an[ht(249)]:
                  return 9
                case an[ht(289)]:
                  return 8
                case an[ht(212)]:
                  return 8
                default:
                  throw new Error(ht(158) + hq)
              }
            } else {
              if (27 > hr) {
                switch (hq) {
                  case an[ht(208)]:
                    return 12
                  case an[ht(249)]:
                    return 11
                  case an[ht(289)]:
                    return 16
                  case an.MODE_KANJI:
                    return 10
                  default:
                    throw new Error(ht(158) + hq)
                }
              } else {
                if (!(41 > hr)) {
                  throw new Error('type:' + hr)
                }
                switch (hq) {
                  case an[ht(208)]:
                    return 14
                  case an[ht(249)]:
                    return 13
                  case an[ht(289)]:
                    return 16
                  case an.MODE_KANJI:
                    return 12
                  default:
                    throw new Error('mode:' + hq)
                }
              }
            }
          },
          getLostPoint: function (hu) {
            var hw = ai
            for (var hx = hu.getModuleCount(), hy = 0, hz = 0; hx > hz; hz++) {
              for (var ia = 0; hx > ia; ia++) {
                for (
                  var ib = 0, ic = hu[hw(240)](hz, ia), ie = -1;
                  1 >= ie;
                  ie++
                ) {
                  if (!(0 > hz + ie || hz + ie >= hx)) {
                    for (var ig = -1; 1 >= ig; ig++) {
                      0 > ia + ig ||
                        ia + ig >= hx ||
                        ((0 != ie || 0 != ig) &&
                          ic == hu[hw(240)](hz + ie, ia + ig) &&
                          ib++)
                    }
                  }
                }
                ib > 5 && (hy += 3 + ib - 5)
              }
            }
            for (var hz = 0; hx - 1 > hz; hz++) {
              for (var ia = 0; hx - 1 > ia; ia++) {
                var ih = 0
                hu[hw(240)](hz, ia) && ih++
                hu[hw(240)](hz + 1, ia) && ih++
                hu[hw(240)](hz, ia + 1) && ih++
                hu[hw(240)](hz + 1, ia + 1) && ih++
                ;(0 == ih || 4 == ih) && (hy += 3)
              }
            }
            for (var hz = 0; hx > hz; hz++) {
              for (var ia = 0; hx - 6 > ia; ia++) {
                hu[hw(240)](hz, ia) &&
                  !hu[hw(240)](hz, ia + 1) &&
                  hu.isDark(hz, ia + 2) &&
                  hu[hw(240)](hz, ia + 3) &&
                  hu[hw(240)](hz, ia + 4) &&
                  !hu.isDark(hz, ia + 5) &&
                  hu[hw(240)](hz, ia + 6) &&
                  (hy += 40)
              }
            }
            for (var ia = 0; hx > ia; ia++) {
              for (var hz = 0; hx - 6 > hz; hz++) {
                hu[hw(240)](hz, ia) &&
                  !hu[hw(240)](hz + 1, ia) &&
                  hu[hw(240)](hz + 2, ia) &&
                  hu.isDark(hz + 3, ia) &&
                  hu[hw(240)](hz + 4, ia) &&
                  !hu[hw(240)](hz + 5, ia) &&
                  hu[hw(240)](hz + 6, ia) &&
                  (hy += 40)
              }
            }
            for (var ii = 0, ia = 0; hx > ia; ia++) {
              for (var hz = 0; hx > hz; hz++) {
                hu.isDark(hz, ia) && ii++
              }
            }
            var ij = Math.abs((100 * ii) / hx / hx - 50) / 5
            return (hy += 10 * ij)
          },
        },
        hp = {
          glog: function (ik) {
            var il = ai
            if (1 > ik) {
              throw new Error(il(293) + ik + ')')
            }
            return hp[il(163)][ik]
          },
          gexp: function (im) {
            for (; 0 > im; ) {
              im += 255
            }
            for (; im >= 256; ) {
              im -= 255
            }
            return hp.EXP_TABLE[im]
          },
          EXP_TABLE: new Array(256),
          LOG_TABLE: new Array(256),
        },
        io = 0;
      8 > io;
      io++
    ) {
      hp.EXP_TABLE[io] = 1 << io
    }
    for (var io = 8; 256 > io; io++) {
      hp[ai(230)][io] =
        hp[ai(230)][io - 4] ^
        hp[ai(230)][io - 5] ^
        hp.EXP_TABLE[io - 6] ^
        hp.EXP_TABLE[io - 8]
    }
    for (var io = 0; 255 > io; io++) {
      hp[ai(163)][hp[ai(230)][io]] = io
    }
    ax[ai(305)] = {
      get: function (ip) {
        var iq = ai
        return this[iq(288)][ip]
      },
      getLength: function () {
        var ir = ai
        return this.num[ir(168)]
      },
      multiply: function (is) {
        var iu = ai
        for (
          var iv = new Array(this[iu(294)]() + is[iu(294)]() - 1), iw = 0;
          iw < this[iu(294)]();
          iw++
        ) {
          for (var ix = 0; ix < is[iu(294)](); ix++) {
            iv[iw + ix] ^= hp[iu(195)](
              hp[iu(215)](this.get(iw)) + hp[iu(215)](is[iu(257)](ix))
            )
          }
        }
        return new ax(iv, 0)
      },
      mod: function (iy) {
        var ja = ai
        if (this[ja(294)]() - iy.getLength() < 0) {
          return this
        }
        for (
          var jb = hp[ja(215)](this[ja(257)](0)) - hp[ja(215)](iy.get(0)),
            jc = new Array(this[ja(294)]()),
            jd = 0;
          jd < this[ja(294)]();
          jd++
        ) {
          jc[jd] = this[ja(257)](jd)
        }
        for (var jd = 0; jd < iy.getLength(); jd++) {
          jc[jd] ^= hp[ja(195)](hp[ja(215)](iy[ja(257)](jd)) + jb)
        }
        return new ax(jc, 0)[ja(291)](iy)
      },
    }
    be.RS_BLOCK_TABLE = [
      [1, 26, 19],
      [1, 26, 16],
      [1, 26, 13],
      [1, 26, 9],
      [1, 44, 34],
      [1, 44, 28],
      [1, 44, 22],
      [1, 44, 16],
      [1, 70, 55],
      [1, 70, 44],
      [2, 35, 17],
      [2, 35, 13],
      [1, 100, 80],
      [2, 50, 32],
      [2, 50, 24],
      [4, 25, 9],
      [1, 134, 108],
      [2, 67, 43],
      [2, 33, 15, 2, 34, 16],
      [2, 33, 11, 2, 34, 12],
      [2, 86, 68],
      [4, 43, 27],
      [4, 43, 19],
      [4, 43, 15],
      [2, 98, 78],
      [4, 49, 31],
      [2, 32, 14, 4, 33, 15],
      [4, 39, 13, 1, 40, 14],
      [2, 121, 97],
      [2, 60, 38, 2, 61, 39],
      [4, 40, 18, 2, 41, 19],
      [4, 40, 14, 2, 41, 15],
      [2, 146, 116],
      [3, 58, 36, 2, 59, 37],
      [4, 36, 16, 4, 37, 17],
      [4, 36, 12, 4, 37, 13],
      [2, 86, 68, 2, 87, 69],
      [4, 69, 43, 1, 70, 44],
      [6, 43, 19, 2, 44, 20],
      [6, 43, 15, 2, 44, 16],
      [4, 101, 81],
      [1, 80, 50, 4, 81, 51],
      [4, 50, 22, 4, 51, 23],
      [3, 36, 12, 8, 37, 13],
      [2, 116, 92, 2, 117, 93],
      [6, 58, 36, 2, 59, 37],
      [4, 46, 20, 6, 47, 21],
      [7, 42, 14, 4, 43, 15],
      [4, 133, 107],
      [8, 59, 37, 1, 60, 38],
      [8, 44, 20, 4, 45, 21],
      [12, 33, 11, 4, 34, 12],
      [3, 145, 115, 1, 146, 116],
      [4, 64, 40, 5, 65, 41],
      [11, 36, 16, 5, 37, 17],
      [11, 36, 12, 5, 37, 13],
      [5, 109, 87, 1, 110, 88],
      [5, 65, 41, 5, 66, 42],
      [5, 54, 24, 7, 55, 25],
      [11, 36, 12],
      [5, 122, 98, 1, 123, 99],
      [7, 73, 45, 3, 74, 46],
      [15, 43, 19, 2, 44, 20],
      [3, 45, 15, 13, 46, 16],
      [1, 135, 107, 5, 136, 108],
      [10, 74, 46, 1, 75, 47],
      [1, 50, 22, 15, 51, 23],
      [2, 42, 14, 17, 43, 15],
      [5, 150, 120, 1, 151, 121],
      [9, 69, 43, 4, 70, 44],
      [17, 50, 22, 1, 51, 23],
      [2, 42, 14, 19, 43, 15],
      [3, 141, 113, 4, 142, 114],
      [3, 70, 44, 11, 71, 45],
      [17, 47, 21, 4, 48, 22],
      [9, 39, 13, 16, 40, 14],
      [3, 135, 107, 5, 136, 108],
      [3, 67, 41, 13, 68, 42],
      [15, 54, 24, 5, 55, 25],
      [15, 43, 15, 10, 44, 16],
      [4, 144, 116, 4, 145, 117],
      [17, 68, 42],
      [17, 50, 22, 6, 51, 23],
      [19, 46, 16, 6, 47, 17],
      [2, 139, 111, 7, 140, 112],
      [17, 74, 46],
      [7, 54, 24, 16, 55, 25],
      [34, 37, 13],
      [4, 151, 121, 5, 152, 122],
      [4, 75, 47, 14, 76, 48],
      [11, 54, 24, 14, 55, 25],
      [16, 45, 15, 14, 46, 16],
      [6, 147, 117, 4, 148, 118],
      [6, 73, 45, 14, 74, 46],
      [11, 54, 24, 16, 55, 25],
      [30, 46, 16, 2, 47, 17],
      [8, 132, 106, 4, 133, 107],
      [8, 75, 47, 13, 76, 48],
      [7, 54, 24, 22, 55, 25],
      [22, 45, 15, 13, 46, 16],
      [10, 142, 114, 2, 143, 115],
      [19, 74, 46, 4, 75, 47],
      [28, 50, 22, 6, 51, 23],
      [33, 46, 16, 4, 47, 17],
      [8, 152, 122, 4, 153, 123],
      [22, 73, 45, 3, 74, 46],
      [8, 53, 23, 26, 54, 24],
      [12, 45, 15, 28, 46, 16],
      [3, 147, 117, 10, 148, 118],
      [3, 73, 45, 23, 74, 46],
      [4, 54, 24, 31, 55, 25],
      [11, 45, 15, 31, 46, 16],
      [7, 146, 116, 7, 147, 117],
      [21, 73, 45, 7, 74, 46],
      [1, 53, 23, 37, 54, 24],
      [19, 45, 15, 26, 46, 16],
      [5, 145, 115, 10, 146, 116],
      [19, 75, 47, 10, 76, 48],
      [15, 54, 24, 25, 55, 25],
      [23, 45, 15, 25, 46, 16],
      [13, 145, 115, 3, 146, 116],
      [2, 74, 46, 29, 75, 47],
      [42, 54, 24, 1, 55, 25],
      [23, 45, 15, 28, 46, 16],
      [17, 145, 115],
      [10, 74, 46, 23, 75, 47],
      [10, 54, 24, 35, 55, 25],
      [19, 45, 15, 35, 46, 16],
      [17, 145, 115, 1, 146, 116],
      [14, 74, 46, 21, 75, 47],
      [29, 54, 24, 19, 55, 25],
      [11, 45, 15, 46, 46, 16],
      [13, 145, 115, 6, 146, 116],
      [14, 74, 46, 23, 75, 47],
      [44, 54, 24, 7, 55, 25],
      [59, 46, 16, 1, 47, 17],
      [12, 151, 121, 7, 152, 122],
      [12, 75, 47, 26, 76, 48],
      [39, 54, 24, 14, 55, 25],
      [22, 45, 15, 41, 46, 16],
      [6, 151, 121, 14, 152, 122],
      [6, 75, 47, 34, 76, 48],
      [46, 54, 24, 10, 55, 25],
      [2, 45, 15, 64, 46, 16],
      [17, 152, 122, 4, 153, 123],
      [29, 74, 46, 14, 75, 47],
      [49, 54, 24, 10, 55, 25],
      [24, 45, 15, 46, 46, 16],
      [4, 152, 122, 18, 153, 123],
      [13, 74, 46, 32, 75, 47],
      [48, 54, 24, 14, 55, 25],
      [42, 45, 15, 32, 46, 16],
      [20, 147, 117, 4, 148, 118],
      [40, 75, 47, 7, 76, 48],
      [43, 54, 24, 22, 55, 25],
      [10, 45, 15, 67, 46, 16],
      [19, 148, 118, 6, 149, 119],
      [18, 75, 47, 31, 76, 48],
      [34, 54, 24, 34, 55, 25],
      [20, 45, 15, 61, 46, 16],
    ]
    be[ai(138)] = function (je, jf) {
      var jh = ai,
        ji = be[jh(306)](je, jf)
      if (void 0 == ji) {
        throw new Error(jh(165) + je + jh(197) + jf)
      }
      for (var jj = ji.length / 3, jk = [], jl = 0; jj > jl; jl++) {
        for (
          var jm = ji[3 * jl + 0],
            jn = ji[3 * jl + 1],
            jo = ji[3 * jl + 2],
            jp = 0;
          jm > jp;
          jp++
        ) {
          jk[jh(152)](new be(jn, jo))
        }
      }
      return jk
    }
    be.getRsBlockTable = function (jq, jr) {
      var jt = ai
      switch (jr) {
        case 1:
          return be[jt(250)][4 * (jq - 1) + 0]
        case 0:
          return be.RS_BLOCK_TABLE[4 * (jq - 1) + 1]
        case 3:
          return be.RS_BLOCK_TABLE[4 * (jq - 1) + 2]
        case 2:
          return be[jt(250)][4 * (jq - 1) + 3]
        default:
          return void 0
      }
    }
    bi.prototype = {
      get: function (ju) {
        var jv = ai,
          jw = Math.floor(ju / 8)
        return 1 == (1 & (this[jv(192)][jw] >>> (7 - (ju % 8))))
      },
      put: function (jx, jy) {
        for (var ka = 0; jy > ka; ka++) {
          this.putBit(1 == (1 & (jx >>> (jy - ka - 1))))
        }
      },
      getLengthInBits: function () {
        var kb = ai
        return this[kb(168)]
      },
      putBit: function (kc) {
        var ke = ai,
          kf = Math[ke(194)](this.length / 8)
        this[ke(192)][ke(168)] <= kf && this[ke(192)][ke(152)](0)
        kc && (this[ke(192)][kf] |= 128 >>> this.length % 8)
        this.length++
      },
    }
    var ca = [
        [17, 14, 11, 7],
        [32, 26, 20, 14],
        [53, 42, 32, 24],
        [78, 62, 46, 34],
        [106, 84, 60, 44],
        [134, 106, 74, 58],
        [154, 122, 86, 64],
        [192, 152, 108, 84],
        [230, 180, 130, 98],
        [271, 213, 151, 119],
        [321, 251, 177, 137],
        [367, 287, 203, 155],
        [425, 331, 241, 177],
        [458, 362, 258, 194],
        [520, 412, 292, 220],
        [586, 450, 322, 250],
        [644, 504, 364, 280],
        [718, 560, 394, 310],
        [792, 624, 442, 338],
        [858, 666, 482, 382],
        [929, 711, 509, 403],
        [1003, 779, 565, 439],
        [1091, 857, 611, 461],
        [1171, 911, 661, 511],
        [1273, 997, 715, 535],
        [1367, 1059, 751, 593],
        [1465, 1125, 805, 625],
        [1528, 1190, 868, 658],
        [1628, 1264, 908, 698],
        [1732, 1370, 982, 742],
        [1840, 1452, 1030, 790],
        [1952, 1538, 1112, 842],
        [2068, 1628, 1168, 898],
        [2188, 1722, 1228, 958],
        [2303, 1809, 1283, 983],
        [2431, 1911, 1351, 1051],
        [2563, 1989, 1423, 1093],
        [2699, 2099, 1499, 1139],
        [2809, 2213, 1579, 1219],
        [2953, 2331, 1663, 1273],
      ],
      kg = (function () {
        var kh = ai,
          ki = function (kj, kk) {
            var km = p
            this[km(280)] = kj
            this['_htOption'] = kk
          }
        return (
          (ki[kh(305)][kh(167)] = function (kn) {
            var kp = kh
            function kq(kr, ks) {
              var ku = p,
                kv = document.createElementNS(ku(216), kr)
              for (var kw in ks) ks[ku(199)](kw) && kv[ku(281)](kw, ks[kw])
              return kv
            }
            var kx = this[kp(157)],
              ky = this[kp(280)],
              kz = kn[kp(267)]()
            Math[kp(194)](kx[kp(268)] / kz)
            Math[kp(194)](kx[kp(184)] / kz)
            this[kp(193)]()
            var la = kq(kp(297), {
              viewBox: '0 0 ' + String(kz) + ' ' + String(kz),
              width: kp(137),
              height: kp(137),
              fill: kx[kp(235)],
            })
            la[kp(295)](kp(277), kp(296), kp(206))
            ky[kp(190)](la)
            la[kp(190)](
              kq('rect', {
                fill: kx[kp(222)],
                width: '1',
                height: '1',
                id: kp(233),
              })
            )
            for (var lb = 0; kz > lb; lb++) {
              for (var lc = 0; kz > lc; lc++) {
                if (kn[kp(240)](lb, lc)) {
                  var ld = kq(kp(273), {
                    x: String(lb),
                    y: String(lc),
                  })
                  ld[kp(295)]('http://www.w3.org/1999/xlink', 'href', '#template')
                  la[kp(190)](ld)
                }
              }
            }
          }),
          (ki[kh(305)][kh(193)] = function () {
            var lf = kh
            for (; this[lf(280)][lf(259)](); ) {
              this['_el'][lf(170)](this[lf(280)][lf(217)])
            }
          }),
          ki
        )
      })(),
      lg = ai(297) === document[ai(248)][ai(223)][ai(185)](),
      lh = lg
        ? kg
        : bk()
        ? (function () {
            var lj = ai
            function lk() {
              var lm = p
              this[lm(143)][lm(139)] = this[lm(202)].toDataURL(lm(262))
              this._elImage[lm(140)][lm(154)] = lm(282)
              this[lm(202)][lm(140)].display = lm(162)
            }
            function ln(lo, lp) {
              var lr = p,
                ls = this
              if (
                ((ls['_fFail'] = lp), (ls[lr(213)] = lo), null === ls[lr(177)])
              ) {
                var lt = document[lr(251)](lr(149)),
                  lu = function () {
                    var lv = lr
                    ls[lv(177)] = false
                    ls[lv(180)] && _fFail[lv(164)](ls)
                  },
                  lw = function () {
                    var lx = lr
                    ls[lx(177)] = true
                    ls[lx(213)] && ls[lx(213)][lx(164)](ls)
                  }
                return (
                  (lt.onabort = lu),
                  (lt[lr(221)] = lu),
                  (lt[lr(276)] = lw),
                  (lt[lr(139)] = lr(292)),
                  void 0
                )
              }
              ls[lr(177)] === true && ls[lr(213)]
                ? ls[lr(213)][lr(164)](ls)
                : ls[lr(177)] === false && ls[lr(180)] && ls[lr(180)][lr(164)](ls)
            }
            if (this[lj(166)] && this['_android'] <= 2.1) {
              var ly = 1 / window[lj(241)],
                lz = CanvasRenderingContext2D.prototype[lj(247)]
              CanvasRenderingContext2D.prototype.drawImage = function (
                ma,
                mb,
                mc,
                md,
                me,
                mf,
                mg,
                mh
              ) {
                var mj = lj
                if (mj(182) in ma && /img/i[mj(265)](ma[mj(182)])) {
                  for (var mk = arguments.length - 1; mk >= 1; mk--) {
                    arguments[mk] = arguments[mk] * ly
                  }
                } else {
                  mj(169) == typeof mh &&
                    ((arguments[1] *= ly),
                    (arguments[2] *= ly),
                    (arguments[3] *= ly),
                    (arguments[4] *= ly))
                }
                lz.apply(this, arguments)
              }
            }
            var ml = function (mm, mn) {
              var mp = lj
              this[mp(196)] = false
              this[mp(166)] = bm()
              this._htOption = mn
              this[mp(202)] = document[mp(251)](mp(209))
              this[mp(202)][mp(268)] = mn.width
              this[mp(202)][mp(184)] = mn[mp(184)]
              mm.appendChild(this['_elCanvas'])
              this[mp(280)] = mm
              this[mp(203)] = this[mp(202)].getContext('2d')
              this[mp(196)] = false
              this['_elImage'] = document.createElement('img')
              this._elImage[mp(140)][mp(154)] = mp(162)
              this[mp(280)][mp(190)](this[mp(143)])
              this[mp(177)] = null
            }
            return (
              (ml[lj(305)][lj(167)] = function (mq) {
                var ms = lj,
                  mt = this[ms(143)],
                  mu = this['_oContext'],
                  mv = this['_htOption'],
                  mw = mq.getModuleCount(),
                  mx = mv[ms(268)] / mw,
                  my = mv[ms(184)] / mw,
                  mz = Math.round(mx),
                  na = Math[ms(211)](my)
                mt.style[ms(154)] = ms(162)
                this[ms(193)]()
                for (var nb = 0; mw > nb; nb++) {
                  for (var nc = 0; mw > nc; nc++) {
                    var nd = mq.isDark(nb, nc),
                      ne = nc * mx,
                      nf = nb * my
                    mu[ms(308)] = nd ? mv[ms(222)] : mv[ms(235)]
                    mu[ms(141)] = 1
                    mu[ms(243)] = nd ? mv[ms(222)] : mv[ms(235)]
                    mu[ms(252)](ne, nf, mx, my)
                    mu[ms(148)](
                      Math.floor(ne) + 0.5,
                      Math[ms(194)](nf) + 0.5,
                      mz,
                      na
                    )
                    mu.strokeRect(
                      Math[ms(178)](ne) - 0.5,
                      Math.ceil(nf) - 0.5,
                      mz,
                      na
                    )
                  }
                }
                this['_bIsPainted'] = true
              }),
              (ml[lj(305)][lj(227)] = function () {
                var nh = lj
                this[nh(196)] && ln.call(this, lk)
              }),
              (ml[lj(305)][lj(172)] = function () {
                var ni = lj
                return this[ni(196)]
              }),
              (ml.prototype[lj(193)] = function () {
                var nj = lj
                this[nj(203)][nj(264)](
                  0,
                  0,
                  this[nj(202)][nj(268)],
                  this[nj(202)][nj(184)]
                )
                this[nj(196)] = false
              }),
              (ml[lj(305)].round = function (nk) {
                var nl = lj
                return nk ? Math[nl(194)](1000 * nk) / 1000 : nk
              }),
              ml
            )
          })()
        : (function () {
            var nn = ai,
              no = function (np, nq) {
                var nr = p
                this[nr(280)] = np
                this[nr(157)] = nq
              }
            return (
              (no[nn(305)][nn(167)] = function (ns) {
                var nu = nn
                for (
                  var nv = this[nu(157)],
                    nw = this['_el'],
                    nx = ns.getModuleCount(),
                    ny = Math.floor(nv[nu(268)] / nx),
                    nz = Math[nu(194)](nv.height / nx),
                    oa = [nu(188)],
                    ob = 0;
                  nx > ob;
                  ob++
                ) {
                  oa[nu(152)]('<tr>')
                  for (var oc = 0; nx > oc; oc++) {
                    oa[nu(152)](
                      nu(173) +
                        ny +
                        nu(270) +
                        nz +
                        nu(307) +
                        (ns[nu(240)](ob, oc) ? nv.colorDark : nv[nu(235)]) +
                        nu(231)
                    )
                  }
                  oa[nu(152)](nu(272))
                }
                oa[nu(152)](nu(183))
                nw[nu(153)] = oa[nu(156)]('')
                var od = nw.childNodes[0],
                  oe = (nv[nu(268)] - od[nu(303)]) / 2,
                  of = (nv.height - od[nu(254)]) / 2
                oe > 0 &&
                  of > 0 &&
                  (od[nu(140)][nu(135)] = of + nu(310) + oe + 'px')
              }),
              (no.prototype.clear = function () {
                var oh = nn
                this['_el'][oh(153)] = ''
              }),
              no
            )
          })()
    QRCode = function (oi, oj) {
      var ol = ai
      if (
        ((this[ol(157)] = {
          width: 256,
          height: 256,
          typeNumber: 4,
          colorDark: ol(255),
          colorLight: ol(238),
          correctLevel: 2,
        }),
        ol(229) == typeof oj && (oj = { text: oj }),
        oj)
      ) {
        for (var om in oj) this['_htOption'][om] = oj[om]
      }
      'string' == typeof oi && (oi = document[ol(278)](oi))
      this[ol(166)] = bm()
      this[ol(280)] = oi
      this[ol(256)] = null
      this[ol(253)] = new lh(this[ol(280)], this[ol(157)])
      this[ol(157)][ol(298)] && this.makeCode(this[ol(157)].text)
    }
    QRCode[ai(305)].makeCode = function (on) {
      var op = ai
      this[op(256)] = new as(
        bq(on, this[op(157)].correctLevel),
        this[op(157)][op(261)]
      )
      this[op(256)][op(142)](on)
      this[op(256)][op(275)]()
      this[op(280)][op(151)] = on
      this['_oDrawing'][op(167)](this['_oQRCode'])
      this.makeImage()
    }
    QRCode.prototype[ai(227)] = function () {
      var or = ai
      or(198) == typeof this[or(253)][or(227)] &&
        (!this[or(166)] || this[or(166)] >= 3) &&
        this['_oDrawing'][or(227)]()
    }
    QRCode[ai(305)][ai(193)] = function () {
      var os = ai
      this[os(253)][os(193)]()
    }
    QRCode[ai(181)] = cc
  })()
  function u() {
    var pb = [
      'moduleCount',
      'getLengthInBits',
      'getPatternPosition',
      'none',
      'LOG_TABLE',
      'call',
      'bad rs block @ typeNumber:',
      '_android',
      'draw',
      'length',
      'undefined',
      'removeChild',
      'lineTo',
      'isPainted',
      '<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:',
      'G15_MASK',
      'unshift',
      'setupPositionProbePattern',
      '_bSupportDataURI',
      'ceil',
      'PATTERN101',
      '_fFail',
      'CorrectLevel',
      'nodeName',
      '</table>',
      'height',
      'toLowerCase',
      'PATTERN111',
      'errorCorrectLevel',
      '<table style="border:0;border-collapse:collapse;">',
      'dataCount',
      'appendChild',
      'dataCache',
      'buffer',
      'clear',
      'floor',
      'gexp',
      '_bIsPainted',
      '/errorCorrectLevel:',
      'function',
      'hasOwnProperty',
      'PATTERN011',
      'put',
      '_elCanvas',
      '_oContext',
      'moveTo',
      'concat',
      'http://www.w3.org/1999/xlink',
      'max',
      'MODE_NUMBER',
      'canvas',
      'getBCHTypeInfo',
      'round',
      'MODE_KANJI',
      '_fSuccess',
      '2FkTUxA',
      'glog',
      'http://www.w3.org/2000/svg',
      'lastChild',
      'createData',
      'putBit',
      'typeNumber',
      'onerror',
      'colorDark',
      'tagName',
      'G15',
      'toString',
      'getErrorCorrectPolynomial',
      'makeImage',
      '77VUrePb',
      'string',
      'EXP_TABLE',
      ';"></td>',
      'charCodeAt',
      'template',
      'mode',
      'colorLight',
      '47510shTNGn',
      'endFill',
      '#ffffff',
      'write',
      'isDark',
      'devicePixelRatio',
      'makeImpl',
      'fillStyle',
      '958050hdxqFm',
      'userAgent',
      '30880jBRypG',
      'drawImage',
      'documentElement',
      'MODE_ALPHA_NUM',
      'RS_BLOCK_TABLE',
      'createElement',
      'fillRect',
      '_oDrawing',
      'offsetHeight',
      '#000000',
      '_oQRCode',
      'get',
      'PATTERN_POSITION_TABLE',
      'hasChildNodes',
      'setupTimingPattern',
      'correctLevel',
      'image/png',
      'bad maskPattern:',
      'clearRect',
      'test',
      'createBytes',
      'getModuleCount',
      'width',
      'PAD0',
      'px;height:',
      '7QttWWs',
      '</tr>',
      'use',
      'G18',
      'make',
      'onload',
      'http://www.w3.org/2000/xmlns/',
      'getElementById',
      'setupTypeNumber',
      '_el',
      'setAttribute',
      'block',
      'createEmptyMovieClip',
      '843954qdvKcP',
      'modules',
      'Too long data',
      'dataList',
      'num',
      'MODE_8BIT_BYTE',
      '323937NKRyAL',
      'mod',
      'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
      'glog(',
      'getLength',
      'setAttributeNS',
      'xmlns:xlink',
      'svg',
      'text',
      'parsedData',
      'data',
      'PATTERN110',
      '750492owtFuY',
      'offsetWidth',
      'PATTERN100',
      'prototype',
      'getRsBlockTable',
      'px;background-color:',
      'strokeStyle',
      'PAD1',
      'px ',
      'margin',
      'match',
      '100%',
      'getRSBlocks',
      'src',
      'style',
      'lineWidth',
      'addData',
      '_elImage',
      '126730FTKCys',
      'setupPositionAdjustPattern',
      'getBCHDigit',
      'totalCount',
      'strokeRect',
      'img',
      'getMask',
      'title',
      'push',
      'innerHTML',
      'display',
      '8rnryIi',
      'join',
      '_htOption',
      'mode:',
    ]
    u = function () {
      return pb
    }
    return u()
  }
  
