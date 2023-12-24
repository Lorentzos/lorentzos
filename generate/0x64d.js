;(function (b, c) {
  var f = b()
  while (true) {
    try {
      var g =
        (-parseInt('3jhKkVC') / 1) * (-parseInt('28878UDpxNL') / 2) +
        (-parseInt('759pkQsoo') / 3) * (-parseInt('1756Octwhh') / 4) +
        (parseInt('20IbBauf') / 5) * (-parseInt('246894KSrDsf') / 6) +
        (-parseInt('328468ogMKpK') / 7) * (parseInt('24FVtgYT') / 8) +
        (-parseInt('203562JYaqoh') / 9) * (-parseInt('40IZoTHO') / 10) +
        (parseInt('11pRZRrd') / 11) * (-parseInt('325524SAjsth') / 12) +
        (parseInt('52cSKrus') / 13) * (parseInt('1027502HWOvER') / 14)
      if (g === c) {
        break
      } else {
        f.push(f.shift())
      }
    } catch (h) {
      f.push(f.shift())
    }
  }
})(i, 205933)
;(function (j, k) {
  var m = n,
    o = j()
  while (true) {
    try {
      var p =
        (-parseInt(m(527)) / 1) * (-parseInt(m(509)) / 2) +
        (-parseInt(m(506)) / 3) * (-parseInt(m(493)) / 4) +
        -parseInt(m(532)) / 5 +
        (parseInt(m(530)) / 6) * (parseInt(m(514)) / 7) +
        -parseInt(m(501)) / 8 +
        (-parseInt(m(517)) / 9) * (-parseInt(m(518)) / 10) +
        -parseInt(m(507)) / 11
      if (p === k) {
        break
      } else {
        o.push(o.shift())
      }
    } catch (q) {
      o.push(o.shift())
    }
  }
})(r, 418392)
function s() {
  var u = n,
    v = [
      u(533),
      'getContext',
      u(503),
      u(494),
      '7445amzJad',
      u(502),
      u(526),
      u(499),
      u(510),
      u(513),
      u(505),
      u(528),
      u(525),
      u(498),
      'width',
      u(520),
      u(523),
      'scrollIntoView',
      u(497),
      u(519),
      'href',
      '267630lnPmEE',
      u(504),
      u(500),
      u(511),
      'querySelector',
      u(524),
      'canvas',
      u(515),
      u(508),
      u(516),
    ]
  s = function () {
    return v
  }
  return s()
}
function w(x, y) {
  var z = s()
  w = function (aa, ab) {
    aa = aa - 443
    var ac = z[aa]
    return ac
  }
  return w(x, y)
}
;(function (ad, ae) {
  var ag = n,
    ah = w,
    ai = ad()
  while (true) {
    try {
      var aj =
        parseInt(ah(458)) / 1 +
        parseInt(ah(445)) / 2 +
        -parseInt(ah(443)) / 3 +
        (-parseInt(ah(469)) / 4) * (parseInt(ah(457)) / 5) +
        -parseInt(ah(461)) / 6 +
        parseInt(ah(465)) / 7 +
        (parseInt(ah(455)) / 8) * (parseInt(ah(466)) / 9)
      if (aj === ae) {
        break
      } else {
        ai[ag(522)](ai[ag(529)]())
      }
    } catch (ak) {
      ai.push(ai.shift())
    }
  }
})(s, 205703)
function r() {
  var as = [
    '229625GfJZMJ',
    '1016jhDyNg',
    'classList',
    'fillStyle',
    '3YnhbAP',
    '4990777GAHMnn',
    'style',
    '384074eEfHhK',
    '1689162mXFnxr',
    'getElementById',
    'qrcode',
    'toDataURL',
    '259WzrFQp',
    'drawImage',
    'visible',
    '288NMNZnj',
    '215540eaLaMU',
    'add',
    'fillRect',
    'createElement',
    'push',
    '64TUuJrC',
    'Please enter a valid link.',
    '1161167gLxFoU',
    'value',
    '2tOrxof',
    'display',
    'shift',
    '69870SMQAwY',
    'linkInput',
    '741500CyfFQZ',
    'qrcode-container',
    'Error generating QR code. Please try again.',
    'innerHTML',
    '619444qriKUo',
    'height',
    'smooth',
    'block',
    'downloadLink',
    '9657XxAMmk',
    'error',
    '136974TiUNZw',
    '5113032JhbBxG',
  ]
  r = function () {
    return as
  }
  return r()
}
function n(au, av) {
  var aw = r()
  n = function (ax, ay) {
    ax = ax - 493
    var az = aw[ax]
    return az
  }
  return n(au, av)
}
function generateQRCode() {
  var bb = n,
    bc = w,
    bd = document[bc(446)](bb(531))[bc(459)],
    be = document[bc(446)](bc(453)),
    bf = document[bb(511)](bb(512)),
    bg = document[bc(446)](bc(471))
  if (!bd) {
    alert(bc(448))
    return
  }
  bf[bb(535)] = ''
  try {
    var bh = new QRCode(bf, {
      text: bd,
      width: 128,
      height: 128,
    })
    bg[bc(451)][bc(464)] = bb(496)
    var bi = bf[bc(447)](bc(449)),
      bj = document[bb(521)](bc(449)),
      bk = bj[bc(454)]('2d')
    bj[bc(467)] = bi[bc(467)] + 40
    bj[bc(456)] = bi[bc(456)] + 40
    bk[bc(463)] = '#ffffff'
    bk[bc(468)](0, 0, bj[bc(467)], bj[bc(456)])
    bk[bc(450)](bi, 20, 20)
    bg[bc(473)] = bj[bc(462)]('image/png')
    bf[bc(444)][bc(472)](bc(452))
    be[bc(470)]({ behavior: bb(495) })
  } catch (bl) {
    console[bc(460)]('Error generating QR code:', bl)
    alert(bb(534))
  }
}
