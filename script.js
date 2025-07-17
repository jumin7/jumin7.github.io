// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll-based header styling
const header = document.querySelector('header');
const layers = document.querySelectorAll('.parallax .layer');
const nav = document.querySelector('.main-nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Header show/hide (only if header exists)
    if (header) {
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up', 'scroll-down');
        } else if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
    }

    // Parallax effect for background layers
    layers.forEach((el, idx) => {
        const speed = (idx + 1) * 0.3; // different speed per layer
        el.style.transform = `translateY(${currentScroll * speed}px)`;
    });

    // Navbar background toggle
    if (nav) {
        if (currentScroll > 50) {
            nav.classList.add('nav-colored');
        } else {
            nav.classList.remove('nav-colored');
        }
    }

    lastScroll = currentScroll;
}); 