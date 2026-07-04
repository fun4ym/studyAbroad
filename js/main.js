/* ============================================================
   studyAbroad Shared JavaScript
   Features: language toggle (ZH/EN), nav anchor redirect,
   analytics, localStorage persistence
   ============================================================ */

// ── Language Toggle ──
(function(){
  var toggleBtn = document.getElementById('lang-toggle');
  if (!toggleBtn) return;

  var savedLang = localStorage.getItem('studyAbroad_lang') || 'zh';
  document.body.className = 'lang-' + savedLang;

  function updateBtn() {
    toggleBtn.innerHTML = document.body.classList.contains('lang-zh')
      ? '🌐 English'
      : '🇨🇳 中文';
  }
  updateBtn();

  toggleBtn.addEventListener('click', function() {
    var newLang = document.body.classList.contains('lang-zh') ? 'en' : 'zh';
    document.body.className = 'lang-' + newLang;
    localStorage.setItem('studyAbroad_lang', newLang);
    window.scrollTo({top: 0, behavior: 'smooth'});
    updateBtn();
  });
})();

// ── Nav Anchor Redirect ──
(function(){
  var navLinks = document.querySelectorAll('.brand-nav a[href^="#"]');
  if (!navLinks.length) return;

  function resolveAnchor(hash) {
    var id = hash.replace('#', '');
    if (document.body.classList.contains('lang-en')) return id + '-en';
    return id;
  }

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var hash = this.getAttribute('href');
      if (!hash || hash === '#') return;
      if (this.closest('.nav-dropdown')) return;
      if (this.classList.contains('dd-disabled')) return;

      e.preventDefault();
      var targetId = resolveAnchor(hash);
      var target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, null, '#' + targetId);
      }
    });
  });
})();

// ── Active Nav Highlight ──
(function(){
  var sections = document.querySelectorAll('[id$="-zh"], [id$="-en"]');
  var navLinks = document.querySelectorAll('.brand-nav a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id.replace(/-zh$|-en$/, '');
        navLinks.forEach(function(a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(function(s) { observer.observe(s); });
})();
