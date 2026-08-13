/* ============================================
JointBrex™ — Main JavaScript (SlimTide structure)
============================================ */
document.addEventListener('DOMContentLoaded', function () {
  /* FAQ Accordion */
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.parentElement;
      document.querySelectorAll('.faq-item').forEach(function (i) {
        if (i !== item) i.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });

  /* Smooth Scroll */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        var navLinks = document.querySelector('.nav-links');
        if (navLinks) navLinks.classList.remove('active');
      }
    });
  });

  /* Nav Scroll Effect */
  var nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* Mobile Nav Toggle */
  var toggle = document.querySelector('.mobile-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () { navLinks.classList.toggle('active'); });
  }

  /* Scroll Reveal */
  var reveals = document.querySelectorAll('.why-card, .mech-card, .ing-card, .ben-card, .review-card, .price-card, .form-card');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = entry.target.classList.contains('featured') ? 'scale(1.03)' : 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    reveals.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  /* Back to Top */
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      backToTop.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    backToTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* Current Year */
  var yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});