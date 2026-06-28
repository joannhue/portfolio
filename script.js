const html = document.documentElement;
const langBtn = document.getElementById('langBtn');
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

let lang = 'en';

function translatePage(nextLang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    const value = el.getAttribute(`data-${nextLang}`);
    if (value) el.innerHTML = value;
  });

  if (langBtn) langBtn.textContent = nextLang === 'en' ? '中文' : 'EN';
  html.lang = nextLang === 'en' ? 'en' : 'zh-CN';
  lang = nextLang;
}

if (langBtn) {
  langBtn.addEventListener('click', () => {
    translatePage(lang === 'en' ? 'zh' : 'en');
  });
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

document.querySelectorAll('.navlinks a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks) navLinks.classList.remove('open');
  });
});
