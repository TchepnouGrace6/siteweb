// Menu Toggle pour mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fermer le menu au clic sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Effet d'apparition au défilement
const elements = document.querySelectorAll('.fade-in-on-scroll');

function handleScroll() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

// Observer pour une meilleure performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

elements.forEach(el => {
    observer.observe(el);
});

// Animation des numéros pour les objectifs
const objectifNumeros = document.querySelectorAll('.objectif-numero');

function animateNumbers() {
    objectifNumeros.forEach(numero => {
        const rect = numero.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            numero.style.opacity = '0.8';
            numero.style.transform = 'scale(1.1)';
            setTimeout(() => {
                numero.style.transform = 'scale(1)';
            }, 300);
        }
    });
}

window.addEventListener('scroll', animateNumbers);
window.addEventListener('load', () => {
    handleScroll();
    animateNumbers();
});