/* ---------- Anno nel footer ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Tema chiaro/scuro ---------- */
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (e) {}
document.getElementById("themeBtn").addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});

/* ---------- Menu mobile ---------- */
const navLinks = document.getElementById("navLinks");
document.getElementById("menuBtn").addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

/* ---------- Effetto macchina da scrivere ---------- */
const phrases = [
  "Software developer in crescita",
  "C# · Python · C++ · Kotlin",
  "Linux, terminale e riparazioni hardware",
  "Appassionato di sicurezza e crittografia",
];
const typedEl = document.getElementById("typed");
let pi = 0, ci = 0, deleting = false;
function type() {
  const word = phrases[pi];
  typedEl.textContent = word.slice(0, ci);
  if (!deleting && ci < word.length) { ci++; setTimeout(type, 70); }
  else if (!deleting) { deleting = true; setTimeout(type, 1600); }
  else if (ci > 0) { ci--; setTimeout(type, 35); }
  else { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 400); }
}
type();

/* ---------- Progetti (letti da projects.js) ---------- */
const grid = document.getElementById("projectGrid");
const filtersEl = document.getElementById("filters");
const emptyMsg = document.getElementById("emptyMsg");
let activeFilter = "Tutti";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderFilters() {
  const tags = new Set();
  PROJECTS.forEach(p => (p.tags || []).forEach(t => tags.add(t)));
  filtersEl.innerHTML = "";
  ["Tutti", ...tags].forEach(tag => {
    const b = el("button", "filter" + (tag === activeFilter ? " active" : ""), tag);
    b.addEventListener("click", () => { activeFilter = tag; renderFilters(); renderProjects(); });
    filtersEl.appendChild(b);
  });
}

function renderProjects() {
  grid.innerHTML = "";
  const list = PROJECTS.filter(p => activeFilter === "Tutti" || (p.tags || []).includes(activeFilter));
  emptyMsg.hidden = list.length > 0;

  list.forEach(p => {
    const card = el("article", "project");
    if (p.year) card.appendChild(el("span", "year mono", p.year));
    card.appendChild(el("h3", "", p.title));
    card.appendChild(el("p", "", p.description));

    const tags = el("div", "tags");
    (p.tags || []).forEach(t => tags.appendChild(el("span", "tag", t)));
    card.appendChild(tags);

    const links = el("div", "links");
    if (p.github) {
      const a = el("a", "", "GitHub ↗");
      a.href = p.github; a.target = "_blank"; a.rel = "noopener";
      links.appendChild(a);
    }
    if (p.download) {
      const a = el("a", "", "Download ↓");
      a.href = p.download; a.target = "_blank"; a.rel = "noopener";
      links.appendChild(a);
    }
    if (links.children.length) card.appendChild(links);
    grid.appendChild(card);
  });
}

if (typeof PROJECTS !== "undefined") { renderFilters(); renderProjects(); }

/* ---------- Animazione all'apparire delle sezioni ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(s => io.observe(s));
