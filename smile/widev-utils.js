// ==============================
// 🚀 NUEVAS UTILIDADES OPTIMIZADAS v10
// ==============================

// === DEBOUNCE & THROTTLE ===
export const wiDebounce = (fn, delay) => {let t; return (...a) => {clearTimeout(t); t = setTimeout(() => fn(...a), delay);}};
export const wiThrottle = (fn, delay) => {let l = 0; return (...a) => {const n = Date.now(); if (n - l >= delay) {l = n; fn(...a);}}};

// === ASYNC UTILITIES ===
export const wiAsync = {
  async try(fn, eh = console.error) {try {return [await fn(), null]} catch (e) {eh(e); return [null, e]}},
  async retry(fn, r = 3, d = 1000) {for (let i = 0; i < r; i++) {try {return await fn()} catch (e) {if (i === r - 1) throw e; await new Promise(res => setTimeout(res, d * (i + 1)))}}},
  async timeout(fn, ms) {return Promise.race([fn(), new Promise((_, rej) => setTimeout(() => rej(new Error('Timeout')), ms))])}
};

// === PATH UTILITIES ===
export const wiPath = {
  clean(p) {const b = import.meta?.env?.BASE_URL || '/'; if (b !== '/' && p.startsWith(b)) p = p.slice(b.length - 1); return p === '/' || p === '' ? '/hora' : p},
  update(p, t = '') {const u = p === '/hora' ? '/' : p; window.history.pushState({ path: p }, t, u); if (t) document.title = t},
  params() {return Object.fromEntries(new URLSearchParams(location.search))},
  setParams(p) {const u = new URL(location); Object.entries(p).forEach(([k, v]) => u.searchParams.set(k, v)); history.pushState({}, '', u)}
};

// === ANIMATE UTILITIES ===
export const wiAnimate = {
  async fade(s, c, d = 150) {const $e = $(s); await $e.animate({ opacity: 0 }, d).promise(); $e.html(c); await $e.animate({ opacity: 1 }, d).promise()},
  async slide(s, sh = null) {const $e = $(s); if (sh === null) sh = !$e.is(':visible'); return sh ? $e.slideDown().promise() : $e.slideUp().promise()},
  shake(s) {$(s).addClass('shake'); setTimeout(() => $(s).removeClass('shake'), 500)},
  pulse(s) {$(s).addClass('pulse'); setTimeout(() => $(s).removeClass('pulse'), 500)}
};

// === EVENT DELEGATION ===
export const wiEvent = (s, e, h, o = {}) => {
  const { debounce = 0, throttle = 0, once = false } = o;
  let fn = h;
  if (debounce) fn = wiDebounce(h, debounce);
  if (throttle) fn = wiThrottle(h, throttle);
  const en = once ? `${e}.once` : e;
  $(document).on(en, s, fn);
  return () => $(document).off(en, s, fn);
};

// === CACHE SYSTEM ===
export const wiCache = (ns, dh = 1) => ({
  async get(k, fb) {const c = getls(`${ns}:${k}`); if (c) return c; const v = typeof fb === 'function' ? await fb() : fb; this.set(k, v); return v},
  set(k, v, h = dh) {savels(`${ns}:${k}`, v, h)},
  clear() {Object.keys(localStorage).filter(k => k.startsWith(`${ns}:`)).forEach(k => localStorage.removeItem(k))},
  memoize(fn, kf = (...a) => JSON.stringify(a)) {return async (...a) => {const k = kf(...a); return this.get(k, () => fn(...a))}}
});

// === LAZY LOADING ===
export const wiLazy = {
  images(s = 'img[data-src]') {const o = new IntersectionObserver(e => e.forEach(en => {if (en.isIntersecting) {const i = en.target; i.src = i.dataset.src; o.unobserve(i)}})); $(s).each((_, i) => o.observe(i))},
  modules(s, l) {const o = new IntersectionObserver(e => e.forEach(async en => {if (en.isIntersecting) {const m = await l(); $(en.target).html(m.render()); o.unobserve(en.target)}})); $(s).each((_, el) => o.observe(el))}
};

// === VALIDATION ===
export const wiValidate = {
  rules: {
    required: v => v?.trim() !== '',
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    min: (v, l) => v?.length >= l,
    max: (v, l) => v?.length <= l,
    number: v => !isNaN(Number(v)),
    url: v => /^https?:\/\/.+/.test(v)
  },
  field(v, r) {for (const [ru, p] of Object.entries(r)) {const val = this.rules[ru]; if (!val(v, p)) return { valid: false, rule: ru}} return { valid: true }},
  form(s) {const e = {}; $(s).find('[data-validate]').each((_, el) => {const $e = $(el); const r = JSON.parse($e.data('validate')); const res = this.field($e.val(), r); if (!res.valid) {e[$e.attr('name')] = res.rule; $e.addClass('error')} else {$e.removeClass('error')}}); return { valid: Object.keys(e).length === 0, errors: e }}
};
