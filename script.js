// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    if (n >= slides.length) {
        currentSlide = 0;
    }

    if (n < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
    // Auto change slide every 3 seconds
    setInterval(nextSlide, 3000);
});

// ==================== کد تغییر زبان ====================
function changeLanguage(lang) {
  localStorage.setItem('language', lang);
  window.location.href = lang === 'fa' ? '/fa/' : '/en/';
}

// تنظیم زبان فعلی
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = window.location.pathname.includes('/fa/') ? 'fa' : 'en';
  document.querySelectorAll('.lang-link').forEach(link => {
    if (link.textContent === currentLang.toUpperCase()) {
      link.classList.add('active');
    }
  });
});