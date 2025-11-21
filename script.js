document.addEventListener('DOMContentLoaded', function() {
    // --- 1. NAVBAR SCROLL EFFECT ---
    const navbar = document.querySelector('.navbar');
    const navLogoImg = document.querySelector('.nav-logo img');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if (navLogoImg) navLogoImg.style.transform = 'scale(0.9) rotate(-5deg)';
        } else {
            navbar.classList.remove('scrolled');
            if (navLogoImg) navLogoImg.style.transform = 'scale(1) rotate(0deg)';
        }
    });

    // --- 2. MOBILE MENU TOGGLE ---
    const mobileBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if(mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });
    }

    // --- 3. ANIMASI REVEAL ON SCROLL (Manual Fallback jika AOS gagal) ---
    // Note: Kita sudah pakai library AOS di HTML, tapi ini backup yang bagus.
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });
    revealElements.forEach(el => observer.observe(el));
});
