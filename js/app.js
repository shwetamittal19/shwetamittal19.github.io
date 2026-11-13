/* Builds the page from js/data.js. No build step, no dependencies. */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const areaById = Object.fromEntries(AREAS.map((a) => [a.id, a]));
  const workById = Object.fromEntries(WORK.map((w) => [w.id, w]));
  const areaOf = (w) => areaById[AREA_OF[w.lenses[0]]];
  const inArea = (id) => WORK.filter((w) => areaOf(w).id === id);
  const HIGHLIGHTS = { id: "highlights", label: "Highlights", color: "#5B3DF5", icon: "star", line: "Six pieces that show the range. Start here." };

  const ICONS = {
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z"/>',
    bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    megaphone: '<path d="M3 10v4h3l8 4V6l-8 4H3z"/><path d="M17 9a4 4 0 0 1 0 6"/><path d="M7 14v4a1 1 0 0 0 1 1h1.5"/>',
    bars: '<path d="M5 20V11M11 20V5M17 20v-7M3 20h18"/>',
    shield: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
    code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
    peak: '<path d="M2.5 20l6.5-12 4 6.5 2.5-3.5 6 9h-19z"/><path d="M7 11.7l2 1.6 1.8-1.9"/>'
  };
  const svg = (name) => '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONS[name] + "</svg>";

  function el(tag, attrs, children) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else if (k === "icon") n.innerHTML = svg(v); // static markup from ICONS above
      else if (k === "style") n.style.cssText = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v);
    }
    for (const c of [].concat(children || [])) if (c) n.append(c);
    return n;
  }
  const ico = (name) => el("span", { class: "ico", icon: name });

  /* ───────── Hero ───────── */
  $("portrait").src = PROFILE.photo;
  $("brand-photo").src = PROFILE.photo;
  $("hero-email").href = "mailto:" + PROFILE.email;
  $("hero-linkedin").href = PROFILE.linkedin;

  // Area chips float around the photo; each one jumps to that area's work.
  const spots = [[14, 22], [88, 20], [3, 55], [97, 56], [18, 88], [84, 88]];
  AREAS.forEach((a, i) => {
    $("hero-art").append(el("button", {
      class: "float", type: "button",
      style: `--c:${a.color};--d:${-i * 0.8}s;left:${spots[i][0]}%;top:${spots[i][1]}%`,
      onclick: () => setArea(a.id, true)
    }, [ico(a.icon), a.label.replace(" & operations", "")]));
  });

  /* ───────── Impact numbers ───────── */
  const statColors = ["#5B3DF5", "#EC4899", "#FF6B4A", "#10B981", "#3B82F6"];
  IMPACT.forEach((s, i) => {
    // A stat is either a number that counts up (n) or fixed text such as "6 days → 1 min".
    const b = el("b", { text: s.text || (s.prefix || "") + s.n + (s.suffix || "") });
    if (s.n != null) { b.dataset.n = s.n; b.dataset.prefix = s.prefix || ""; b.dataset.suffix = s.suffix || ""; }
    $("impact").append(el("div", { class: "stat reveal" + (s.wide ? " wide" : ""), style: `--c:${statColors[i % statColors.length]}` }, [b, el("span", { text: s.label })]));
  });
  function countUp(b) {
    const end = Number(b.dataset.n);
    if (reduceMotion || end < 5) return;
    const t0 = performance.now(), dur = 900;
    (function tick(t) {
      const p = Math.min(1, (t - t0) / dur);
      b.textContent = b.dataset.prefix + Math.round(end * (1 - Math.pow(1 - p, 3))) + b.dataset.suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }

  /* ───────── Journey ───────── */
  let stopIdx = -1;
  let playTimer = null;
  const stopsEl = $("stops");
  const playBtn = $("journey-play");
  stopsEl.style.setProperty("--n", JOURNEY.length - 1);

  function showStop(id, fromUser) {
    const i = JOURNEY.findIndex((x) => x.id === id);
    const j = JOURNEY[i];
    const dir = i >= stopIdx ? "r" : "l";
    stopIdx = i;
    stopsEl.style.setProperty("--i", i); // drives the filled part of the line
    [...stopsEl.children].forEach((b, k) => {
      b.setAttribute("aria-selected", String(k === i));
      b.tabIndex = k === i ? 0 : -1;
      b.classList.toggle("done", k < i);
    });
    if (fromUser) {
      const b = stopsEl.children[i];
      stopsEl.scrollTo({ left: b.offsetLeft - (stopsEl.clientWidth - b.offsetWidth) / 2, behavior: reduceMotion ? "auto" : "smooth" });
    }
    const card = $("stop-card");
    card.classList.remove("fade-l", "fade-r");
    void card.offsetWidth; // restart the animation
    card.classList.add("fade-" + dir);
    card.replaceChildren(...[
      el("div", { class: "stop-nav" }, [
        el("button", { class: "round", type: "button", "aria-label": "Previous stop", text: "←", disabled: i === 0 ? "" : null, onclick: () => go(-1) }),
        el("span", { text: (i + 1) + " of " + JOURNEY.length }),
        el("button", { class: "round", type: "button", "aria-label": "Next stop", text: "→", disabled: i === JOURNEY.length - 1 ? "" : null, onclick: () => go(1) })
      ]),
      el("p", { class: "when", text: j.when }),
      el("h3", { text: j.title }),
      el("p", { class: "org", text: j.note ? j.org + " · " + j.note : j.org }),
      el("ul", {}, j.bullets.map((t) => el("li", { text: t }))),
      j.workId ? el("button", { class: "btn primary", type: "button", text: j.cta + " →", onclick: () => openWork(j.workId) }) : null,
      j.area ? el("button", { class: "btn", type: "button", text: j.cta + " →", onclick: () => setArea(j.area, true) }) : null,
      j.link ? el("a", { class: "btn", href: j.link.url, target: "_blank", rel: "noopener", text: j.link.label + " ↗" }) : null
    ].filter(Boolean));
  }
  function stopPlay() {
    clearInterval(playTimer);
    playTimer = null;
    playBtn.textContent = "▶ Play my journey";
    playBtn.setAttribute("aria-pressed", "false");
  }
  function go(d) {
    stopPlay();
    const i = Math.max(0, Math.min(JOURNEY.length - 1, stopIdx + d));
    showStop(JOURNEY[i].id, true);
  }
  JOURNEY.forEach((j) => {
    stopsEl.append(el("button", { class: "stop", type: "button", role: "tab", "data-id": j.id, onclick: () => { stopPlay(); showStop(j.id, true); } }, [
      el("span", { class: "yr", text: j.when }), el("span", { class: "dot" }), el("span", { class: "nm", text: j.short })
    ]));
  });
  stopsEl.addEventListener("keydown", (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    go(e.key === "ArrowRight" ? 1 : -1);
    stopsEl.children[stopIdx].focus();
  });
  // Play walks through every stop from the start; any click stops it.
  playBtn.addEventListener("click", () => {
    if (playTimer) return stopPlay();
    playBtn.textContent = "❚❚ Pause";
    playBtn.setAttribute("aria-pressed", "true");
    showStop(JOURNEY[0].id, true);
    playTimer = setInterval(() => {
      if (stopIdx >= JOURNEY.length - 1) return stopPlay();
      showStop(JOURNEY[stopIdx + 1].id, true);
    }, 3500);
  });
  showStop("ivanti");

  /* ───────── Mission ───────── */
  $("mission-photo").src = MISSION.photo.src;
  $("mission-photo").alt = MISSION.photo.alt;
  $("mission-label").textContent = MISSION.label;
  $("mission-quote").append(MISSION.before, el("span", { class: "warm", text: MISSION.highlight }), MISSION.after);
  if (MISSION.link) $("mission-quote").parentNode.append(el("a", { class: "btn small mission-link", href: MISSION.link.url, text: MISSION.link.label + " →" }));
  const alt = el("b", { text: MISSION.stat.n + MISSION.stat.suffix });
  alt.dataset.n = MISSION.stat.n; alt.dataset.prefix = ""; alt.dataset.suffix = MISSION.stat.suffix;
  $("trail").append(el("div", { class: "altitude reveal" }, [ico("peak"), alt, el("span", { text: MISSION.stat.label })]));
  MISSION.trail.forEach((p) => $("trail").append(el("figure", { class: "reveal" }, [
    el("img", { src: p.src, alt: p.alt, loading: "lazy", style: p.pos ? "object-position:" + p.pos : null })
  ])));

  /* ───────── Work ───────── */
  let current = "highlights";
  let visible = [];

  function tabButton(a, count) {
    return el("button", { class: "tab", type: "button", role: "tab", "data-id": a.id, style: `--c:${a.color}`, onclick: () => setArea(a.id) },
      [ico(a.icon), el("span", { text: a.label.replace(" & operations", "") }), el("small", { text: String(count), "aria-label": count + (count === 1 ? " piece" : " pieces") })]);
  }
  $("tabs").append(tabButton(HIGHLIGHTS, WORK.filter((w) => w.featured).length));
  AREAS.forEach((a) => $("tabs").append(tabButton(a, inArea(a.id).length)));

  function cover(w, a) {
    const kind = COVERS[w.id];
    const box = el("div", { class: "cover " + (kind || "none") });
    if (kind) box.append(el("img", { src: "img/covers/" + w.id + ".jpg", alt: "", loading: "lazy" }));
    else box.innerHTML = svg(a.icon);
    return box;
  }

  function card(w) {
    const a = areaOf(w);
    return el("button", { class: "card reveal", type: "button", style: `--c:${a.color}`, onclick: () => openWork(w.id) }, [
      cover(w, a),
      el("div", { class: "card-body" }, [
        el("div", { class: "meta" }, [
          el("span", { class: "tag", text: a.label }),
          ...(w.tags || []).map((t) => el("span", { class: "chip", text: t })),
          w.status ? el("span", { class: "live", text: w.status }) : null
        ]),
        el("h3", { text: w.title }),
        w.outcome ? el("p", { class: "result", text: w.outcome }) : el("p", { text: w.summary })
      ]),
      el("span", { class: "go", "aria-hidden": "true", text: "→" })
    ]);
  }

  function setArea(id, scroll) {
    current = id;
    const a = id === "highlights" ? HIGHLIGHTS : areaById[id];
    const items = id === "highlights" ? WORK.filter((w) => w.featured) : inArea(id);
    visible = items.map((w) => w.id);
    $("tabs").querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", String(t.dataset.id === id)));
    $("area-line").textContent = a.line;
    $("gallery").replaceChildren(...items.map(card));
    watchReveals();
    if (scroll) $("work").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }

  /* ───────── Case viewer ───────── */
  const modal = $("modal");
  const isWide = () => window.matchMedia("(min-width: 961px)").matches;
  const isPdf = (path) => /\.pdf$/i.test(path);
  let openId = null;

  function showFile(w, idx) {
    const f = w.files[idx];
    const frame = $("m-frame");
    $("m-tabs").querySelectorAll("button").forEach((b, i) => b.setAttribute("aria-selected", String(i === idx)));
    if (isPdf(f.path) && isWide()) {
      frame.replaceChildren(
        el("iframe", { src: f.path + "#view=FitH", title: f.label }),
        el("div", { class: "bar" }, el("a", { class: "btn", href: f.path, target: "_blank", rel: "noopener", text: "Open full screen ↗" }))
      );
    } else {
      frame.replaceChildren(el("div", { class: "fallback" }, [
        COVERS[w.id] && idx === 0 ? el("img", { src: "img/covers/" + w.id + ".jpg", alt: "" }) : null,
        el("p", { text: f.label + (f.mb ? " · " + f.mb + " MB" : "") }),
        el("a", { class: "btn primary", href: f.path, target: "_blank", rel: "noopener", text: isPdf(f.path) ? "Open the file ↗" : "Download the file ↓" })
      ]));
    }
  }

  function openWork(id) {
    const w = workById[id];
    if (!w) return;
    openId = id;
    const a = areaOf(w);
    if (!visible.includes(id)) setArea(w.featured ? "highlights" : a.id);
    modal.style.setProperty("--c", a.color);
    $("m-tag").textContent = [a.label].concat(w.tags || [], w.status || []).join(" · ");
    $("m-title").textContent = w.title;
    $("m-org").textContent = [w.org, w.when, w.team || w.kind].filter(Boolean).join(" · ");
    $("m-summary").textContent = w.summary;
    $("m-points-h").textContent = w.kind === "Team" ? "What we did" : "What I did";
    $("m-points").replaceChildren(...w.points.map((p) => el("li", { text: p })));
    $("m-outcome").textContent = w.outcome ? "Result: " + w.outcome : "";
    $("m-links").replaceChildren(...(w.links || []).map((k) => el("a", { class: "btn primary", href: k.url, target: "_blank", rel: "noopener", text: k.label + " ↗" })));

    const files = w.files || [];
    $("m-body").classList.toggle("no-files", !files.length);
    $("m-viewer").hidden = !files.length;
    $("m-tabs").replaceChildren(...files.map((f, i) => el("button", { type: "button", role: "tab", text: f.label, onclick: () => showFile(w, i) })));
    $("m-tabs").hidden = files.length < 2;
    $("m-frame").replaceChildren();
    if (files.length) showFile(w, 0);

    const i = visible.indexOf(id);
    $("m-count").textContent = (i + 1) + " of " + visible.length + " in " + (current === "highlights" ? "Highlights" : a.label);
    if (!modal.open) modal.showModal();
    $("m-text").scrollTop = 0;
    history.replaceState(null, "", "#work/" + id);
  }
  function step(d) {
    const i = visible.indexOf(openId);
    openWork(visible[(i + d + visible.length) % visible.length]);
  }
  $("m-prev").addEventListener("click", () => step(-1));
  $("m-next").addEventListener("click", () => step(1));
  $("m-close").addEventListener("click", () => modal.close());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
  modal.addEventListener("keydown", (e) => {
    if (e.target.closest("iframe")) return;
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
  modal.addEventListener("close", () => {
    $("m-frame").replaceChildren();
    if (location.hash.startsWith("#work/")) history.replaceState(null, "", "#work");
  });

  /* ───────── Toolbox, beyond work, contact ───────── */
  SKILLS.forEach((g) => $("skills").append(el("div", { class: "skill-group reveal" }, [
    el("h3", { text: g.group }), el("ul", {}, g.items.map((s) => el("li", { text: s })))
  ])));

  $("life-line").textContent = LIFE.line;
  LIFE.photos.forEach((p) => $("mosaic").append(el("figure", { class: "reveal" + (p.shape ? " " + p.shape : "") }, [
    el("img", { src: p.src, alt: p.cap, loading: "lazy" }), el("figcaption", { text: p.cap })
  ])));

  $("contact-links").append(
    el("a", { class: "btn primary", href: "mailto:" + PROFILE.email, text: PROFILE.email }),
    el("a", { class: "btn", href: "tel:+1" + PROFILE.phone.replace(/\D/g, ""), text: PROFILE.phone }),
    el("a", { class: "btn", href: PROFILE.linkedin, target: "_blank", rel: "noopener", text: "LinkedIn ↗" }),
    el("a", { class: "btn", href: PROFILE.github, target: "_blank", rel: "noopener", text: "GitHub ↗" })
  );
  $("year").textContent = String(new Date().getFullYear());

  /* ───────── Reveal on scroll ───────── */
  const io = "IntersectionObserver" in window && !reduceMotion
    ? new IntersectionObserver((entries) => entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        const b = e.target.querySelector && e.target.querySelector("b[data-n]");
        if (b) countUp(b);
        io.unobserve(e.target);
      }), { threshold: 0.12 })
    : null;
  function watchReveals() {
    document.querySelectorAll(".reveal:not(.in)").forEach((n) => (io ? io.observe(n) : n.classList.add("in")));
  }

  /* ───────── Start ───────── */
  setArea("highlights");
  watchReveals();
  function route() {
    const m = location.hash.match(/^#work\/([\w-]+)$/);
    if (m && workById[m[1]]) openWork(m[1]);
  }
  window.addEventListener("hashchange", route);
  route();
})();
