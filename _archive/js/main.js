/* ============================================================
   COATESVILLE – Main JavaScript
============================================================ */

/* ---- Navbar scroll ---- */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

/* ---- Mobile menu ---- */
const hamburger        = document.getElementById('hamburger');
const navMobile        = document.getElementById('navMobile');
const mobileOverlay    = document.getElementById('mobileOverlay');
const mobileCloseBtn   = document.getElementById('mobileClose');

function openMenu() {
  navMobile?.classList.add('open');
  mobileOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  navMobile?.classList.remove('open');
  mobileOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', openMenu);
mobileOverlay?.addEventListener('click', closeMenu);
mobileCloseBtn?.addEventListener('click', closeMenu);

/* ---- Scroll animations ---- */
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => io.observe(el));
}

/* ---- Stats counter ---- */
function runCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const suffix   = el.dataset.suffix || '';
  const duration = 1800;
  const tick     = 16;
  const step     = target / (duration / tick);
  let current    = 0;

  const t = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(t);
    }
    el.textContent = Math.floor(current) + suffix;
  }, tick);
}

const statEls = document.querySelectorAll('.stat-number[data-target]');
if (statEls.length) {
  const statIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.counted) {
        e.target.dataset.counted = '1';
        runCounter(e.target);
        statIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => statIO.observe(el));
}

/* ---- Gallery filter ---- */
const filterBtns  = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const cat = btn.dataset.filter;
    galleryItems.forEach(item => {
      const show = cat === 'all' || item.dataset.category === cat;
      item.style.transition = 'opacity 0.3s';
      if (show) {
        item.style.display = '';
        requestAnimationFrame(() => { item.style.opacity = '1'; });
      } else {
        item.style.opacity = '0';
        setTimeout(() => { item.style.display = 'none'; }, 300);
      }
    });
  });
});

/* ---- Lightbox ---- */
const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightboxImg');
const lightboxCap  = document.getElementById('lightboxCap');

if (lightbox && lightboxImg) {
  const imgs = [...document.querySelectorAll('.gallery-item img')];
  let idx = 0;

  function openLB(i) {
    idx = i;
    lightboxImg.src = imgs[i].src;
    if (lightboxCap) lightboxCap.textContent = `${i + 1} / ${imgs.length}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLB() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function prevImg() { idx = (idx - 1 + imgs.length) % imgs.length; openLB(idx); }
  function nextImg() { idx = (idx + 1) % imgs.length;                openLB(idx); }

  document.querySelectorAll('.gallery-item').forEach((item, i) => {
    item.addEventListener('click', () => openLB(i));
  });

  document.getElementById('lightboxClose')?.addEventListener('click', closeLB);
  document.getElementById('lightboxPrev')?.addEventListener('click', prevImg);
  document.getElementById('lightboxNext')?.addEventListener('click', nextImg);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLB(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape')      closeLB();
    if (e.key === 'ArrowLeft')   prevImg();
    if (e.key === 'ArrowRight')  nextImg();
  });
}

/* ---- Contact form ---- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    const fields = ['name','email','subject','message'];
    fields.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.remove('error');
        if (!el.value.trim()) { el.classList.add('error'); valid = false; }
      }
    });

    const emailEl = document.getElementById('email');
    if (emailEl && emailEl.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      emailEl.classList.add('error');
      valid = false;
    }

    if (!valid) return;

    const btn = contactForm.querySelector('[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Mengirim...';
    btn.disabled = true;

    setTimeout(() => {
      contactForm.style.display = 'none';
      const success = document.getElementById('formSuccess');
      if (success) success.style.display = 'block';

      setTimeout(() => {
        contactForm.style.display = '';
        if (success) success.style.display = 'none';
        contactForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;
      }, 4000);
    }, 1600);
  });
}

/* ---- Active nav link ---- */
(function() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();
