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

// تابع تغییر زبان
function changeLanguage(lang) {
  localStorage.setItem('language', lang);
  if (lang === 'fa') {
    window.location.href = '/';
  } else {
    window.location.href = '/en/';
  }
}

// تنظیم لینک فعال بر اساس URL فعلی
document.addEventListener('DOMContentLoaded', function () {
  const isEnglish = window.location.pathname.startsWith('/en/');
  const currentLang = isEnglish ? 'en' : 'fa';

  document.querySelectorAll('.lang-link').forEach(link => {
    if (link.dataset.lang === currentLang) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});