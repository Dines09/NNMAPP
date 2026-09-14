/* 2/O Bridge Reference — offline app logic */

var TABS = {
  equip:   { data: EQUIPMENT, head: "NMM Ch 13 — Navigation Equipment",
             note: "Tap any equipment for its checks, settings, markings and record-retention rules." },
  passage: { data: PASSAGE,   head: "Passage Planning — TEC-25 + NMM Ch 7",
             note: "Priority coded: MUST (mandatory) · SHOULD (expected) · GOOD (best practice)." },
  duty:    { data: DUTIES,    head: "2nd Officer — Duties & Responsibilities",
             note: "Consolidated from PAM 9.4 and NMM 4.2." },
  arr:     { data: ARRDEP,    head: "Arrival & Departure — NMM 10.1",
             note: "From NMM 10.1. Tap a card for the checks in that phase." }
};
var curTab = "equip";
var myZone = localStorage.getItem("zone") || Intl.DateTimeFormat().resolvedOptions().timeZone;

/* ---------- theme ---------- */
function sysDark() { return window.matchMedia("(prefers-color-scheme: dark)").matches; }
function curTheme() { return document.documentElement.getAttribute("data-theme") || (sysDark() ? "dark" : "light"); }
document.getElementById("themeb").addEventListener("click", function () {
  var next = curTheme() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  this.textContent = next === "dark" ? "☀" : "◐";
});
document.getElementById("themeb").textContent = curTheme() === "dark" ? "☀" : "◐";

/* ---------- clocks ---------- */
function offsetOf(tz, d) {
  var s = new Intl.DateTimeFormat("en-US", {
    timeZone: tz, hour12: false,
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit"
  }).formatToParts(d).reduce(function (a, p) { a[p.type] = p.value; return a; }, {});
  var h = s.hour === "24" ? 0 : +s.hour;
  var asUTC = Date.UTC(+s.year, s.month - 1, +s.day, h, +s.minute, +s.second);
  return Math.round((asUTC - Math.floor(d.getTime() / 1000) * 1000) / 60000);
}
function offStr(tz, d) {
  var m = offsetOf(tz, d), sg = m < 0 ? "-" : "+";
  m = Math.abs(m);
  var hh = Math.floor(m / 60), mm = m % 60;
  return "UTC" + sg + hh + (mm ? ":" + (mm < 10 ? "0" + mm : mm) : "");
}
function hhmm(tz, d) {
  return new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour12: false, hour: "2-digit", minute: "2-digit" }).format(d);
}
function zoneLabel(tz) {
  for (var i = 0; i < ZONES.length; i++) if (ZONES[i].z === tz) return ZONES[i];
  return { z: tz, c: tz.split("/").pop().replace(/_/g, " "), n: "", a: "" };
}
function tick() {
  var d = new Date();
  document.getElementById("utcT").textContent = hhmm("UTC", d);
  document.getElementById("locT").textContent = hhmm(myZone, d);
  var z = zoneLabel(myZone);
  document.getElementById("locZ").textContent = z.c + " " + offStr(myZone, d).replace("UTC", "");
  if (document.getElementById("sheet").classList.contains("on")) paintZoneTimes(d);
}

/* ---------- helpers ---------- */
function esc(s) {
  return String(s).replace(/[&<>"]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
  });
}
var PRI = { 1: ["MUST", "t1"], 2: ["SHOULD", "t2"], 3: ["GOOD", "t3"] };

/* ---------- dock glide ---------- */
function moveGlide() {
  var b = document.querySelector("#dock button.on");
  var g = document.getElementById("glide");
  if (!b || !g) return;
  g.style.width = b.offsetWidth + "px";
  g.style.transform = "translateX(" + b.offsetLeft + "px)";
}

/* ---------- list + detail ---------- */
function renderList() {
  var t = TABS[curTab];
  var h = '<div class="sec-h">' + esc(t.head) + "</div><div class=tiles>";
  t.data.forEach(function (it, i) {
    var chip = it.r || it.phase || "";
    h += '<div class=tile data-i="' + i + '">' +
      '<div class=ic>' + it.icon + "</div>" +
      '<div class=nm>' + esc(it.name) + "</div>" +
      '<div class=mt>' + esc(it.sec || it.src || "") + "</div>" +
      (chip ? '<div class=rr>' + esc(chip) + "</div>" : "") +
      "</div>";
  });
  h += "</div><div class=note>" + esc(t.note) +
       " Reference only — always verify against the current manual revision and your vessel-specific checklists.</div>";
  document.getElementById("list").innerHTML = h;
  document.getElementById("list").style.display = "";
  document.getElementById("detail").classList.remove("on");
}
function openItem(i) {
  var it = TABS[curTab].data[i];
  var chip = it.r || it.phase || "";
  var h = '<button class=back id=backb>&#8249; Back</button>' +
    '<div class=dh><div class=ic>' + it.icon + "</div><div>" +
    "<h2>" + esc(it.name) + "</h2>" +
    '<div class=sub>' + esc(it.sec ? (curTab === "passage" ? it.sec : "NMM " + it.sec) : it.src || "") + "</div>" +
    (chip ? '<div class=rr>' + esc(chip) + "</div>" : "") +
    "</div></div>";
  it.groups.forEach(function (g, gi) {
    var p = PRI[g.pri];
    h += '<div class="grp' + (g.warn ? " w" : "") + (gi === 0 ? " open" : "") + '">' +
      '<div class=gh><div class=gt>' + esc(g.t) +
      (p ? ' <span class="tag ' + p[1] + '">' + p[0] + "</span>" : "") + "</div>" +
      '<div style="display:flex;align-items:center;gap:8px">' +
      '<span class=gn>' + g.items.length + "</span><span class=ar>&#9656;</span></div></div>" +
      '<div class=gc><ul class=its>';
    g.items.forEach(function (x) { h += "<li>" + esc(x) + "</li>"; });
    h += "</ul></div></div>";
  });
  if (it.sec) h += '<div class=srcline>Source: ' + esc(curTab === "passage" ? it.sec : "Navigation and Mooring Manual, section " + it.sec) + ".</div>";
  else if (it.src) h += '<div class=srcline>Source: ' + esc(it.src) + ".</div>";
  var d = document.getElementById("detail");
  d.innerHTML = h;
  d.classList.add("on");
  document.getElementById("list").style.display = "none";
  window.scrollTo(0, 0);
}

/* ---------- zone picker ---------- */
var shownZones = [];
function renderZones(q) {
  q = (q || "").trim().toLowerCase();
  var out = [];
  for (var i = 0; i < ZONES.length && out.length < 300; i++) {
    var z = ZONES[i];
    if (!q || z.c.toLowerCase().indexOf(q) >= 0 || z.n.toLowerCase().indexOf(q) >= 0 ||
        z.a.toLowerCase().indexOf(q) >= 0 || z.z.toLowerCase().indexOf(q) >= 0) out.push(z);
  }
  shownZones = out;
  if (!out.length) {
    document.getElementById("zlist").innerHTML =
      '<div class=zempty>No match for &ldquo;' + esc(q) + '&rdquo;.<br>Try a country, city or port name.</div>';
    return;
  }
  var d = new Date(), h = "";
  out.forEach(function (z, i) {
    h += '<div class="zi' + (z.z === myZone ? " cur" : "") + '" data-z="' + i + '">' +
      '<div class=zl><div class=zc>' + esc(z.c) + "</div>" +
      '<div class=zn>' + esc(z.n + (z.a ? " · " + z.a : "")) + "</div></div>" +
      '<div class=zt><div class=t data-tz="' + esc(z.z) + '">' + hhmm(z.z, d) + "</div>" +
      '<div class=o>' + offStr(z.z, d) + "</div></div></div>";
  });
  document.getElementById("zlist").innerHTML = h;
}
function paintZoneTimes(d) {
  var els = document.querySelectorAll("#zlist .zt .t");
  for (var i = 0; i < els.length; i++) els[i].textContent = hhmm(els[i].getAttribute("data-tz"), d);
}
function openSheet() {
  document.getElementById("sheet").classList.add("on");
  var q = document.getElementById("zq");
  q.value = "";
  renderZones("");
  setTimeout(function () { q.focus(); }, 60);
}
function closeSheet() { document.getElementById("sheet").classList.remove("on"); }

/* ---------- events ---------- */
document.getElementById("dock").addEventListener("click", function (e) {
  var b = e.target.closest("button");
  if (!b) return;
  curTab = b.getAttribute("data-t");
  [].forEach.call(this.querySelectorAll("button"), function (x) { x.classList.toggle("on", x === b); });
  moveGlide();
  renderList();
  window.scrollTo(0, 0);
});
document.getElementById("list").addEventListener("click", function (e) {
  var t = e.target.closest(".tile");
  if (t) openItem(+t.getAttribute("data-i"));
});
document.getElementById("detail").addEventListener("click", function (e) {
  if (e.target.closest("#backb")) { renderList(); window.scrollTo(0, 0); return; }
  var gh = e.target.closest(".gh");
  if (gh) gh.parentNode.classList.toggle("open");
});
document.getElementById("locPill").addEventListener("click", openSheet);
document.getElementById("shClose").addEventListener("click", closeSheet);
document.getElementById("sheet").addEventListener("click", function (e) { if (e.target === this) closeSheet(); });
document.getElementById("zq").addEventListener("input", function () { renderZones(this.value); });
document.getElementById("zlist").addEventListener("click", function (e) {
  var r = e.target.closest(".zi");
  if (!r) return;
  myZone = shownZones[+r.getAttribute("data-z")].z;
  localStorage.setItem("zone", myZone);
  tick();
  closeSheet();
});
window.addEventListener("resize", moveGlide);

/* ---------- go ---------- */
renderList();
tick();
setInterval(tick, 1000);
moveGlide();
setTimeout(moveGlide, 100);   // after webfont/layout settles
if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(function () {});
