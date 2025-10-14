document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLogoImg = document.querySelector('.nav-logo img'); // Pilih gambar logo

    // Animasi Navbar saat di-scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if (navLogoImg) {
                navLogoImg.style.transform = 'scale(0.9) rotate(-5deg)'; // Animasi logo
            }
        } else {
            navbar.classList.remove('scrolled');
            if (navLogoImg) {
                navLogoImg.style.transform = 'scale(1) rotate(0deg)'; // Kembali ke normal
            }
        }
    });

    // Animasi Reveal on Scroll
    const revealElements = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null, // Menggunakan viewport sebagai root
        rootMargin: '0px',
        threshold: 0.1 // Ketika 10% elemen terlihat, aktifkan animasi
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing setelah animasi aktif
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // Animasi tambahan untuk elemen yang sudah terlihat saat halaman dimuat
    // Misalnya, hero content harus langsung aktif
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('active');
    }
});
