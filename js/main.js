// ====== Image Slider ======
const imageSlides = document.querySelectorAll('.slide');
let currentImageSlide = 0;

function showNextImageSlide() {
    // حذف کلاس active از همه
    imageSlides.forEach(slide => {
        slide.classList.remove('active');
    });

    // انتخاب اسلاید جدید
    currentImageSlide = (currentImageSlide + 1) % imageSlides.length;

    // افزودن کلاس active
    imageSlides[currentImageSlide].classList.add('active');
}

if (imageSlides.length > 0) {
    imageSlides[0].classList.add('active');
    setInterval(showNextImageSlide, 3000);
}

// ====== Quote Slider ======
const quoteSlides = document.querySelectorAll('.quote-slide');
let currentQuoteSlide = 0;

function showNextQuoteSlide() {
    quoteSlides.forEach(slide => {
        slide.classList.remove('active');
    });
    currentQuoteSlide = (currentQuoteSlide + 1) % quoteSlides.length;
    quoteSlides[currentQuoteSlide].classList.add('active');
}

if (quoteSlides.length > 0) {
    quoteSlides[0].classList.add('active');
    setInterval(showNextQuoteSlide, 4000);
}

// ====== Read More / Read Less Toggle ======
function toggleText() {
    const extraTexts = document.querySelectorAll('.extra-text');
    const toggleBtn = document.getElementById('toggle-btn');

    let isExpanded = false;

    extraTexts.forEach(p => {
        if (p.style.display === 'none' || p.style.display === '') {
            p.style.display = 'block';
            isExpanded = true;
        } else {
            p.style.display = 'none';
            isExpanded = false;
        }
    });

    toggleBtn.textContent = isExpanded ? 'Read Less' : 'Read More';
}

// ====== Mobile Menu Toggle ======
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.scrollY - 70,
                behavior: 'smooth'
            });
        }
    });
});