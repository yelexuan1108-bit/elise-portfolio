/* ============================================================
   语言切换 + 动态内容渲染 + 滚动淡入
   ============================================================ */

(function () {
  const LANG_KEY = "elise-lang";

  /* ---------- 工具 ---------- */
  function lookup(dict, path) {
    return path.split(".").reduce(function (obj, key) {
      return obj ? obj[key] : undefined;
    }, dict);
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text; // textContent 赋值，天然防注入
    return node;
  }

  /* ---------- 渲染各分区 ---------- */
  function renderHeroStats(dict) {
    const box = document.getElementById("hero-stats");
    box.textContent = "";
    dict.hero.stats.forEach(function (s) {
      const stat = el("div", "stat");
      stat.appendChild(el("b", null, s.num));
      stat.appendChild(document.createTextNode(s.label));
      box.appendChild(stat);
    });
  }

  function renderAboutTags(dict) {
    const box = document.getElementById("about-tags");
    box.textContent = "";
    dict.about.tags.forEach(function (t) {
      box.appendChild(el("span", "tag", t));
    });
  }

  function renderEducation(dict) {
    const box = document.getElementById("edu-list");
    box.textContent = "";
    dict.education.list.forEach(function (item) {
      const row = el("div", "edu-item reveal");
      const left = el("div");
      const schoolLine = el("p", "edu-school");
      schoolLine.appendChild(document.createTextNode(item.school));
      if (item.note) schoolLine.appendChild(el("span", "edu-note", item.note));
      left.appendChild(schoolLine);
      left.appendChild(el("p", "edu-degree", item.degree));
      row.appendChild(left);
      row.appendChild(el("p", "edu-period", item.period));
      box.appendChild(row);
    });

    const honors = document.getElementById("honors");
    honors.textContent = "";
    honors.classList.add("reveal");
    const bold = el("b", null, dict.education.honorsTitle);
    honors.appendChild(bold);
    honors.appendChild(document.createTextNode(dict.education.honors));
  }

  function renderInternships(dict) {
    const box = document.getElementById("intern-list");
    box.textContent = "";
    dict.internships.list.forEach(function (item) {
      const li = el("div", "timeline-item reveal");
      const card = el("div", "intern-card");

      const head = el("div", "intern-head");
      head.appendChild(el("div", "intern-badge", item.badge));
      const info = el("div");
      info.appendChild(el("p", "intern-org", item.org));
      info.appendChild(el("p", "intern-role", item.role));
      head.appendChild(info);
      const meta = el("div", "intern-meta");
      meta.appendChild(el("div", null, item.period));
      meta.appendChild(el("div", null, item.place));
      head.appendChild(meta);
      card.appendChild(head);

      const points = el("ul", "intern-points");
      item.points.forEach(function (p) {
        points.appendChild(el("li", null, p));
      });
      card.appendChild(points);

      li.appendChild(card);
      box.appendChild(li);
    });
  }

  function renderProjects(dict) {
    const box = document.getElementById("project-grid");
    box.textContent = "";
    dict.projects.list.forEach(function (item) {
      const card = el("div", "project-card reveal");
      card.appendChild(el("span", "project-tag", item.tag));
      card.appendChild(el("h3", "project-title", item.title));
      card.appendChild(el("p", "project-period", item.period));
      card.appendChild(el("p", "project-desc", item.desc));
      box.appendChild(card);
    });
  }

  function renderSkills(dict) {
    const certs = document.getElementById("skill-certs");
    certs.textContent = "";
    dict.skills.certs.forEach(function (c) {
      certs.appendChild(el("span", "chip", c));
    });
    const tools = document.getElementById("skill-tools");
    tools.textContent = "";
    dict.skills.tools.forEach(function (t) {
      tools.appendChild(el("span", "chip", t));
    });
  }

  /* ---------- 语言应用 ---------- */
  function applyLang(lang) {
    const dict = I18N[lang];

    document.documentElement.lang = lang;
    document.title = dict.meta.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", dict.meta.desc);

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      const val = lookup(dict, node.dataset.i18n);
      if (val != null) node.textContent = val;
    });

    document.getElementById("lang-toggle").textContent =
      lang === "zh" ? "EN" : "中";

    renderHeroStats(dict);
    renderAboutTags(dict);
    renderEducation(dict);
    renderInternships(dict);
    renderProjects(dict);
    renderSkills(dict);

    observeReveals();
  }

  /* ---------- 滚动淡入 ---------- */
  let revealObserver = null;

  function observeReveals() {
    const nodes = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("in"); });
      return;
    }
    if (revealObserver) revealObserver.disconnect();
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    nodes.forEach(function (n) { revealObserver.observe(n); });
  }

  /* ---------- 初始化 ---------- */
  function init() {
    const saved = localStorage.getItem(LANG_KEY);
    const lang = saved === "en" || saved === "zh" ? saved : "zh";
    applyLang(lang);

    document.getElementById("lang-toggle").addEventListener("click", function () {
      const next = document.documentElement.lang === "zh" ? "en" : "zh";
      localStorage.setItem(LANG_KEY, next);
      applyLang(next);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
