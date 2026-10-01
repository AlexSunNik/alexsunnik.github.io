// Renders the content from data.js into index.html.

const $ = (sel) => document.querySelector(sel);

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function renderProfile() {
  $("#name").textContent = PROFILE.name;
  $("#title").textContent = `${PROFILE.title} · ${PROFILE.affiliation}`;
  $("#bio").innerHTML = PROFILE.bio.map((p) => `<p>${p}</p>`).join("");
  $("#links").innerHTML = PROFILE.links
    .filter((l) => l.url)
    .map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`)
    .join('<span class="sep">/</span>');

  const photo = $("#photo");
  photo.alt = PROFILE.name;
  photo.onerror = () => {
    const initials = PROFILE.name.replace(/\(.*?\)/g, "").split(/\s+/).filter(Boolean).map((w) => w[0]).join("");
    photo.replaceWith(Object.assign(document.createElement("div"), { className: "photo placeholder", textContent: initials }));
  };
  photo.src = PROFILE.photo;
}

function renderNews() {
  $("#news-list").innerHTML = NEWS.map(
    (n) => `<li><span class="date">${esc(n.date)}</span><span>${n.text}</span></li>`
  ).join("");
}

function thumbHTML(pub) {
  const cat = CATEGORIES[pub.categories[0]] || { color: "#888" };
  const t = pub.thumb || "";
  if (/\.(mp4|webm)$/i.test(t)) {
    return `<video src="${esc(t)}" autoplay muted loop playsinline></video>`;
  }
  if (t) return `<img src="${esc(t)}" alt="" loading="lazy">`;
  // Fallback: colored tile with the paper's short name (text before the colon).
  const short = pub.short || (pub.title.includes(":") ? pub.title.split(":")[0] : `${pub.venue} ${pub.year}`);
  return `<div class="thumb-placeholder" style="--c:${cat.color}">${esc(short)}</div>`;
}

function authorsHTML(authors) {
  return esc(authors).replace(/(Xinglong Sun|X\. Sun)/g, "<b>$1</b>");
}

const LINK_LABELS = { paper: "Paper", arxiv: "arXiv", pdf: "PDF", project: "Project", code: "Code", video: "Video" };

function pubHTML(pub) {
  const tags = pub.categories
    .map((k) => CATEGORIES[k])
    .filter(Boolean)
    .map((c) => `<span class="tag" style="--c:${c.color}">${esc(c.label)}</span>`)
    .join("");
  const links = Object.entries(pub.links || {})
    .filter(([, url]) => url)
    .map(([k, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(LINK_LABELS[k] || k)}</a>`)
    .join(" / ");
  return `
    <article class="pub">
      <div class="thumb">${thumbHTML(pub)}</div>
      <div class="pub-body">
        <span class="venue-badge ${pub.type === "conference" ? "conf" : "preprint"}">${esc(pub.venue)} ${pub.year}</span>
        <div class="pub-title">${esc(pub.title)}</div>
        <div class="pub-authors">${authorsHTML(pub.authors)}</div>
        ${pub.award ? `<div class="award">🏆 ${pub.awardUrl ? `<a href="${esc(pub.awardUrl)}" target="_blank" rel="noopener">${esc(pub.award)}</a>` : esc(pub.award)}</div>` : ""}
        ${links ? `<div class="pub-links">${links}</div>` : ""}
        <div class="tags">${tags}</div>
      </div>
    </article>`;
}

let activeFilter = "all";

function renderFilters() {
  const chips = [
    ["all", "All"],
    ...Object.entries(CATEGORIES).map(([k, c]) => [k, c.label]),
  ];
  $("#filters").innerHTML = chips
    .map(([k, label]) => {
      const color = CATEGORIES[k] ? `style="--c:${CATEGORIES[k].color}"` : "";
      return `<button class="chip${k === activeFilter ? " active" : ""}" data-key="${k}" ${color}>${esc(label)}</button>`;
    })
    .join("");
  $("#filters").onclick = (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeFilter = btn.dataset.key;
    renderFilters();
    renderPubs();
  };
}

function renderPubs() {
  const pubs = PUBLICATIONS.filter((p) =>
    activeFilter === "all" || p.categories.includes(activeFilter)
  ).sort((a, b) => b.year - a.year);
  $("#pub-list").innerHTML = pubs.length ? pubs.map(pubHTML).join("") : `<p class="muted">No publications in this category yet.</p>`;
}

function renderTalks() {
  // Hide the section (and its nav link) until there are talks to show.
  if (!TALKS.length) {
    $("#talks").remove();
    $('.nav-links a[href="#talks"]').remove();
    return;
  }
  $("#talks-list").innerHTML = TALKS.map((t) => {
    const title = t.url ? `<a href="${esc(t.url)}" target="_blank" rel="noopener">${esc(t.title)}</a>` : esc(t.title);
    return `<li><span class="date">${esc(t.date)}</span><span><b>${title}</b><br><span class="muted">${esc(t.venue)}</span></span></li>`;
  }).join("");
}

function renderExperience() {
  $("#exp-list").innerHTML = EXPERIENCE.map(
    (e) => `
    <li>
      <div class="exp-head"><span class="org">${(e.logos || [])
        .map((k) => `<img class="exp-logo" src="${esc(LOGOS[k])}" alt="">`)
        .join("")}${esc(e.org)}</span><span class="date">${esc(e.dates)}</span></div>
      <div class="role">${esc(e.role)} <span class="muted">· ${esc(e.place)}</span></div>
      ${e.note ? `<div class="muted">${esc(e.note)}</div>` : ""}
    </li>`
  ).join("");
}

function renderHonors() {
  $("#awards-list").innerHTML = AWARDS.map((a) =>
    `<li>${a.url ? `<a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.text)}</a>` : esc(a.text)}</li>`
  ).join("");
  $("#honors-list").innerHTML = HONORS.map((h) => `<li>${esc(h)}</li>`).join("");
  $("#service-list").innerHTML = SERVICE.map((s) => `<li>${esc(s)}</li>`).join("");
}

renderProfile();
renderNews();
renderFilters();
renderPubs();
renderTalks();
renderExperience();
renderHonors();
$("#year").textContent = new Date().getFullYear();
