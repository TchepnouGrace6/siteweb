
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


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


const elements = document.querySelectorAll('.fade-in-on-scroll');

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


const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
   
    const formData = {
        nom: document.getElementById('nom').value,
        email: document.getElementById('email').value,
        telephone: document.getElementById('telephone').value,
        sujet: document.getElementById('sujet').value,
        ethnie: document.getElementById('ethnie').value,
        message: document.getElementById('message').value
    };
    
   
    if (!formData.nom || !formData.email || !formData.sujet || !formData.message) {
        showMessage('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
    }
    
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showMessage('Veuillez entrer une adresse email valide.', 'error');
        return;
    }
    
   
    submitForm(formData);
});

function submitForm(data) {
   
    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span>Envoi en cours...</span> ⏳';
    
    
    setTimeout(() => {
        
        showMessage('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.', 'success');
        
        
        contactForm.reset();
        
        
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        
       
        console.log('Données du formulaire:', data);
        
       
    }, 1500);
}

function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Fermer les autres items
        const wasActive = item.classList.contains('active');
        
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        
        // Toggle l'item actuel
        if (!wasActive) {
            item.classList.add('active');
        }
    });
});

// Animation des cartes d'info au survol
const infoCards = document.querySelectorAll('.contact-info-card');

infoCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Validation en temps réel des champs
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('telephone');

emailInput.addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value && !emailRegex.test(this.value)) {
        this.style.borderColor = 'var(--rouge-cameroun)';
    } else {
        this.style.borderColor = '#e0e0e0';
    }
});

phoneInput.addEventListener('input', function() {
    // Permettre seulement les chiffres, espaces, + et -
    this.value = this.value.replace(/[^\d\s\+\-]/g, '');
});

// Animation du compteur de caractères pour le textarea
const messageTextarea = document.getElementById('message');
const maxLength = 1000;

// Créer un compteur de caractères
const charCounter = document.createElement('div');
charCounter.style.cssText = 'text-align: right; font-size: 0.85rem; color: #999; margin-top: 0.3rem;';
messageTextarea.parentNode.appendChild(charCounter);

messageTextarea.addEventListener('input', function() {
    const remaining = maxLength - this.value.length;
    charCounter.textContent = `${this.value.length} / ${maxLength} caractères`;
    
    if (remaining < 100) {
        charCounter.style.color = 'var(--rouge-cameroun)';
    } else {
        charCounter.style.color = '#999';
    }
});

// Initialiser le compteur
messageTextarea.dispatchEvent(new Event('input'));

// Auto-resize du textarea
messageTextarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Effet de focus sur les inputs
const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.2s ease';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});