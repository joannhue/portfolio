const html = document.documentElement;
    const langBtn = document.getElementById('langBtn');
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    const year = document.getElementById('year');
    year.textContent = new Date().getFullYear();

    let lang = 'en';

    function translatePage(nextLang) {
      document.querySelectorAll('[data-en]').forEach(el => {
        const value = el.getAttribute(`data-${nextLang}`);
        if (value) el.innerHTML = value;
      });
      langBtn.textContent = nextLang === 'en' ? '中文' : 'EN';
      html.lang = nextLang === 'en' ? 'en' : 'zh-CN';
      lang = nextLang;
    }

    langBtn.addEventListener('click', () => {
      translatePage(lang === 'en' ? 'zh' : 'en');
    });

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });