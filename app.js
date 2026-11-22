// CONFIG: nguồn dữ liệu duy nhất của thiệp (PLAN mục 3). Đổi dữ liệu thì chỉ sửa ở đây.
const CONFIG = (() => {
  const c = {
    inviter:     "Nguyễn Mạnh Hùng",
    schoolFull:  "Trung học phổ thông Thạch Thất",
    schoolShort: "THPT Thạch Thất",
    className:   "12A01",
    dateText:    "29/11/2026",
    timeText:    "9h30 – 11h30",
    startISO:    "2026-11-29T10:30:00+07:00", // mốc đếm ngược, cứng +07:00
    endISO:      "2026-11-29T12:00:00+07:00", // sau mốc này = "đã diễn ra"
    phone:       "0345006912",                // GĐ8 (D33): dùng cho tel:
    phoneText:   "0345 006 912",              // GĐ8 (D33): chữ hiển thị
  };
  for (const k in c) c[k] = c[k].normalize("NFC");
  return Object.freeze(c);
})();

// ===== S2: render chữ, dải lụa (từ spike), intro =====
(() => {
  const C = CONFIG, $ = id => document.getElementById(id), NS = 'http://www.w3.org/2000/svg', root = document.documentElement;
  const q = new URLSearchParams(location.search), P = (k, d) => (q.has(k) && isFinite(+q.get(k))) ? +q.get(k) : d;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const T = { title: `Kỉ yếu lớp ${C.className}`, school: C.schoolShort, inviter: C.inviter, date: C.dateText, time: C.timeText, thanks: 'Thank you!', phoneText: C.phoneText };

  // 1) Chữ: điền từ CONFIG; h1/h2 tách chữ cái (NFC, bọc theo từ, aria-label ở cha)
  document.querySelectorAll('[data-t]').forEach(el => {
    const s = T[el.dataset.t].normalize('NFC');
    if (!('split' in el.dataset)) { el.textContent = s; return; }
    el.setAttribute('aria-label', s); el.textContent = '';
    let i = 0; const words = s.split(' ');
    words.forEach((w, k) => {
      const ws = document.createElement('span'); ws.className = 'w'; ws.setAttribute('aria-hidden', 'true');
      for (const c of Array.from(w)) { const x = document.createElement('span'); x.className = 'ch'; x.textContent = c; x.style.setProperty('--i', i++); ws.appendChild(x); }
      el.appendChild(ws); if (k < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
  });

  $('tel').href = 'tel:' + C.phone;      // GĐ8 (D33): số lấy từ CONFIG, không gõ cứng ở HTML

  // 2) Dải lụa cách B. D13: tự giảm chất lượng nếu TB frame > 20ms trong 1 giây
  const LV = [{ n: 40, cap: 0 }, { n: 32, cap: 0 }, { n: 24, cap: 0 }, { n: 24, cap: 30 }];
  const PT = 48, G = 5, svg = $('bg'), world = $('world'), layer = $('layer'), grad = $('g'), fr = $('fr'), frSvg = $('frame');
  let lv = Math.min(LV.length - 1, P('lv', 0)), N, CAP, U, L, B, W, H, rot, els = [], groups = [], xs = [], xm = [];
  const ax = new Float64Array(PT), wd = new Float64Array(PT);
  let t = 0, prev = 0, last = 0, raf = 0, introEl = null, acc = 0, nf = 0;
  const band = u => Math.min(G - 1, Math.floor(Math.abs(u) * G)), opac = b => (.95 - .6 * b / (G - 1)).toFixed(2);

  function layout() {
    N = LV[lv].n; CAP = LV[lv].cap; U = Array.from({ length: N }, (_, i) => -1 + 2 * i / (N - 1));
    W = innerWidth; H = innerHeight;
    rot = q.has('rot') ? P('rot', 0) : (H > W ? 90 : 0);
    L = rot ? H : W; B = rot ? W : H;
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    world.setAttribute('transform', rot ? `translate(${W} 0) rotate(90)` : '');
    grad.setAttribute('x2', L);
    xs = []; xm = [];
    for (let j = 0; j < PT; j++) {
      xs.push((L * (-.05 + 1.1 * j / (PT - 1))).toFixed(1));
      xm.push((L * (-.05 + 1.1 * (j + .5) / (PT - 1))).toFixed(1));
    }
    groups = Array.from({ length: G }, () => []);
    U.forEach((u, i) => groups[band(u)].push(i));
    layer.textContent = ''; els = [];
    groups.forEach((_, g) => { const p = document.createElementNS(NS, 'path'); p.setAttribute('stroke-opacity', opac(g)); layer.appendChild(p); els.push(p); });
    const m = W < 600 ? 14 : 24;      // khung SVG riêng (phương án D14)
    frSvg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    fr.setAttribute('x', m); fr.setAttribute('y', m); fr.setAttribute('width', W - 2 * m); fr.setAttribute('height', H - 2 * m);
  }
  function cols(t) {
    const A1 = B * .14, A2 = B * .06, Wm = B * .17, cy = B / 2;
    for (let j = 0; j < PT; j++) {
      const s = -.05 + 1.1 * j / (PT - 1);
      ax[j] = cy + A1 * Math.sin(5.34 * s + .5 * t) + A2 * Math.sin(11.94 * s - .35 * t + 1.3);
      wd[j] = Wm * (.75 + .25 * Math.sin(3.77 * s + .3 * t)) * Math.sin(7.85 * s + .7 * t);
    }
  }
  function lineD(u) {
    let d = 'M' + xs[0] + ' ' + (ax[0] + wd[0] * u).toFixed(1);
    for (let j = 1; j < PT - 1; j++) {
      const y = ax[j] + wd[j] * u, yn = ax[j + 1] + wd[j + 1] * u;
      d += 'Q' + xs[j] + ' ' + y.toFixed(1) + ' ' + xm[j] + ' ' + ((y + yn) / 2).toFixed(1);
    }
    return d + 'L' + xs[PT - 1] + ' ' + (ax[PT - 1] + wd[PT - 1] * u).toFixed(1);
  }
  function draw(t) {
    cols(t);
    for (let g = 0; g < G; g++) { let d = ''; for (const k of groups[g]) d += lineD(U[k]); els[g].setAttribute('d', d); }
  }
  function tick(now) {                 // MỘT vòng rAF chính (ràng buộc mục 4)
    raf = requestAnimationFrame(tick);
    if (CAP && now - last < 1000 / CAP - 1) return;
    const dt = now - last; last = now;
    const ds = Math.min(now - prev, 100) / 1000; t += ds; prev = now;
    draw(t); par(ds);
    if (!CAP && dt < 100) {            // lưới an toàn D13
      acc += dt; nf++;
      if (acc >= 1000) { if (nf >= 20 && acc / nf > 20 && lv < LV.length - 1) { lv++; layout(); draw(t); } acc = nf = 0; }
    }
  }
  function start() { cancelAnimationFrame(raf); if (RM) return; prev = last = performance.now(); acc = nf = 0; raf = requestAnimationFrame(tick); }

  // 2b) GĐ6 (D23): parallax chuột, chỉ desktop. Dùng chung vòng rAF (par gọi trong tick), lerp theo thời gian thật.
  // Gắn lên #bg và #frame (phần tử bao ngoài, không có animation riêng). ?px=0 tắt, ?px=2 gấp đôi (để so sánh).
  const DM = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 900px)'), PX = P('px', 1);
  const PL = [[svg, 14], [frSvg, -5]];   // [phần tử, biên độ px]; dải lụa lệch theo chuột, khung lệch ngược nhẹ hơn (tạo độ sâu); đặt 0 để tắt từng lớp
  let tx = 0, ty = 0, cx = 0, cy = 0, ps = '';
  function par(ds) {
    const a = DM.matches ? PX : 0, k = 1 - Math.exp(-ds * 6);
    cx = Math.abs(tx * a - cx) < .002 ? tx * a : cx + (tx * a - cx) * k;
    cy = Math.abs(ty * a - cy) < .002 ? ty * a : cy + (ty * a - cy) * k;
    const s = cx.toFixed(3) + ',' + cy.toFixed(3);
    if (s === ps) return; ps = s;      // không đổi thì không ghi style
    for (const [el, m] of PL) el.style.transform = `translate3d(${(cx * m).toFixed(2)}px,${(cy * m).toFixed(2)}px,0)`;
  }
  if (!RM) {
    const cl = v => Math.max(-1, Math.min(1, v));
    addEventListener('pointermove', e => { if (e.pointerType === 'mouse') { tx = cl(e.clientX / innerWidth * 2 - 1); ty = cl(e.clientY / innerHeight * 2 - 1); } }, { passive: true });
    root.addEventListener('mouseleave', () => { tx = ty = 0; });
  }

  // 3) Intro: t đóng băng, mỗi đường 1 path pathLength=1; xong mới bật rAF
  function buildIntro() {
    cols(0); introEl = document.createElementNS(NS, 'g'); introEl.setAttribute('class', 'rib');
    U.forEach((u, i) => { const p = document.createElementNS(NS, 'path'); p.setAttribute('d', lineD(u)); p.setAttribute('pathLength', 1);
      p.setAttribute('stroke-opacity', opac(band(u))); p.style.setProperty('--i', i); introEl.appendChild(p); });
    layer.style.display = 'none'; world.appendChild(introEl);
  }
  function finishIntro() {
    if (!introEl) return;
    introEl.remove(); introEl = null; layer.style.display = '';
    root.classList.remove('intro', 'go'); draw(t); start();
  }

  layout(); draw(0);
  // resize/xoay: dựng lại sau debounce; đặt TRƯỚC nhánh RM để dải đứng yên + khung cũng dựng lại đúng khi xoay màn (GĐ6)
  let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { if (innerWidth === W && innerHeight === H) return; layout(); draw(t); }, 150); });
  if (RM) return;          // dải đứng yên, không intro
  buildIntro();
  Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1500))]).then(() => {
    root.classList.add('go'); setTimeout(finishIntro, 4000);   // GĐ8 (D32): 4s, đủ cho 2 dòng mới (--d ≤ 2,9s + fade 0,8s)
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) cancelAnimationFrame(raf); else if (!introEl) start(); });
})();
// ===== S3: countdown odometer (GĐ4) =====
(() => {
  const C = CONFIG, $ = id => document.getElementById(id);
  const q = new URLSearchParams(location.search);
  // Bản dev = localhost / IP mạng nội bộ / file://. Chỉ ở đây mới có ?now=
  const DEV = location.protocol === 'file:' || /^(localhost|\[::1\]|127\.|192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)|\.local$/.test(location.hostname);
  const START = Date.parse(C.startISO), END = Date.parse(C.endISO);
  let off = 0;                          // ?now=2026-11-29T10:29:50%2B07:00 (nhớ mã hoá dấu + thành %2B); đồng hồ chạy tiếp từ mốc đó
  if (DEV && q.has('now')) { const v = q.get('now').trim(), p = /^\d{10,}$/.test(v) ? +v : Date.parse(v.replace(' ', '+')); if (isFinite(p)) off = p - Date.now(); }
  const now = () => Date.now() + off;

  // ---------- GĐ4: countdown odometer ----------
  const GRID = $('cd-grid'), MSG = $('cd-msg'), SR = $('cd-sr');
  const units = [['Ngày'], ['Giờ'], ['Phút'], ['Giây']].map(([label]) => {
    const u = document.createElement('div'), g = document.createElement('div'), l = document.createElement('span');
    u.className = 'cu'; g.className = 'cdg'; l.className = 'cl'; l.textContent = label.normalize('NFC');
    u.append(g, l); GRID.appendChild(u); return { g, cols: [] };
  });
  function mkCol() {                    // cột [9,0,1,…,9]: chữ số d nằm ở vị trí d+1; vị trí 0 là "9" đệm để 0→9 trượt liền
    const dg = document.createElement('span'), rl = document.createElement('span');
    dg.className = 'dg'; rl.className = 'rl';
    for (const n of [9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) { const s = document.createElement('span'); s.textContent = n; rl.appendChild(s); }
    dg.appendChild(rl); return { dg, rl, d: -1, wrap: false, tm: 0 };
  }
  function place(c, i, anim) {
    if (!anim) { c.rl.style.transition = 'none'; c.rl.style.transform = 'translateY(calc(var(--dh) * ' + (-i) + '))'; void c.rl.offsetWidth; c.rl.style.transition = ''; }
    else c.rl.style.transform = 'translateY(calc(var(--dh) * ' + (-i) + '))';
  }
  function settle(c) { if (c.tm) { clearTimeout(c.tm); c.tm = 0; } if (c.wrap) { c.wrap = false; place(c, 10, false); } }
  function setDigit(c, d, anim) {
    if (d === c.d) return;
    settle(c);
    if (c.d < 0 || !anim) place(c, d + 1, false);                                  // lần đầu / quay lại tab / nhảy cách quãng: không animate
    else if (c.d === 0 && d === 9) { c.wrap = true; place(c, 0, true); c.tm = setTimeout(() => { c.tm = 0; settle(c); }, 520); }
    else if (d === c.d - 1) place(c, d + 1, true);
    else place(c, d + 1, false);
    c.d = d;
  }
  function setUnit(u, val, anim) {      // tối thiểu 2 chữ số; "ngày" tự thêm cột khi ≥ 100
    const s = String(val).padStart(2, '0');
    if (u.cols.length !== s.length) { u.g.textContent = ''; u.cols = Array.from(s, mkCol); u.cols.forEach(c => u.g.appendChild(c.dg)); anim = false; }
    for (let i = 0; i < s.length; i++) setDigit(u.cols[i], +s[i], anim);
  }
  let phase = '', lastMin = -1, tmr = 0;
  function render(anim) {
    const t = now(), ph = t < START ? 'before' : t < END ? 'live' : 'done';
    if (ph !== phase) {
      phase = ph; anim = false; lastMin = -1;
      GRID.hidden = ph !== 'before'; MSG.hidden = ph === 'before';
      if (ph !== 'before') { const s = (ph === 'live' ? 'Kỉ yếu đang diễn ra' : 'Kỉ yếu đã diễn ra').normalize('NFC'); MSG.textContent = s; SR.textContent = s; }
    }
    if (ph !== 'before') return;
    const s = Math.ceil((START - t) / 1000), d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60);
    setUnit(units[0], d, anim); setUnit(units[1], h, anim); setUnit(units[2], m, anim); setUnit(units[3], s % 60, anim);
    const mk = Math.floor(s / 60);      // dòng chữ ẩn cho trình đọc màn hình: chỉ đổi mỗi phút
    if (mk !== lastMin) { lastMin = mk; SR.textContent = `Còn ${d} ngày ${h} giờ ${m} phút nữa đến kỉ yếu.`.normalize('NFC'); }
  }
  function sched() {                    // timer riêng 1 giây, canh sát mốc giây; không dùng vòng rAF của dải lụa
    clearTimeout(tmr); if (phase === 'done') return;
    tmr = setTimeout(() => { render(true); sched(); }, 1000 - (now() % 1000) + 5);
  }
  render(false); sched();
  document.addEventListener('visibilitychange', () => {   // tab ẩn: dừng; quay lại: cập nhật ngay, không bù animation
    clearTimeout(tmr); if (!document.hidden) { render(false); sched(); }
  });
})();