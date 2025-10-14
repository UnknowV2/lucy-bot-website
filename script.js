document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    // Animasi Navbar saat di-scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
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
