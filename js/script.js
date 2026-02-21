// Language Management
let currentLanguage = 'fr';

const translations = {
    'fr': {
        'Accueil': 'Accueil',
        'À propos': 'À propos',
        'Chambres': 'Chambres',
        'Services': 'Services',
        'Galerie': 'Galerie',
        'Contact': 'Contact',
        'Bienvenue à Notre Hôtel': 'Bienvenue à Notre Hôtel',
        'Confort, qualité et hospitalité': 'Confort, qualité et hospitalité',
        'Voir nos chambres': 'Voir nos chambres',
        'Réserver maintenant': 'Réserver maintenant',
        'Nos Services': 'Nos Services',
        'WiFi Gratuit': 'WiFi Gratuit',
        'Connexion rapide dans toutes les chambres': 'Connexion rapide dans toutes les chambres',
        'Confort': 'Confort',
        'Chambres spacieuses et bien équipées': 'Chambres spacieuses et bien équipées',
        'Restaurant': 'Restaurant',
        'Cuisine délicieuse et service attentif': 'Cuisine délicieuse et service attentif',
        'Service 24/7': 'Service 24/7',
        'Assistance disponible à tout moment': 'Assistance disponible à tout moment',
        'Prêt à réserver ?': 'Prêt à réserver ?',
        'Contactez-nous dès maintenant pour vos réservations': 'Contactez-nous dès maintenant pour vos réservations',
        'E-mail': 'E-mail',
        'Email': 'E-mail',
        'Notre Hôtel': 'Notre Hôtel',
        'Votre destination idéale pour un séjour agréable': 'Votre destination idéale pour un séjour agréable',
        'Liens': 'Liens',
        'Adresse: Votre adresse': 'Adresse: Votre adresse',
        'Téléphone': 'Téléphone',
        'Phone': 'Téléphone',
        'Home': 'Accueil',
        'About': 'À propos',
        'Rooms': 'Chambres',
        'Services': 'Services',
        'Gallery': 'Galerie',
        'Tous droits réservés': 'Tous droits réservés',
        'All rights reserved': 'Tous droits réservés'
    },
    'en': {
        'Accueil': 'Home',
        'À propos': 'About',
        'Chambres': 'Rooms',
        'Services': 'Services',
        'Galerie': 'Gallery',
        'Contact': 'Contact',
        'Bienvenue à Notre Hôtel': 'Welcome to Our Hotel',
        'Confort, qualité et hospitalité': 'Comfort, quality and hospitality',
        'Voir nos chambres': 'View our rooms',
        'Réserver maintenant': 'Book now',
        'Nos Services': 'Our Services',
        'WiFi Gratuit': 'Free WiFi',
        'Connexion rapide dans toutes les chambres': 'Fast connection in all rooms',
        'Confort': 'Comfort',
        'Chambres spacieuses et bien équipées': 'Spacious and well-equipped rooms',
        'Restaurant': 'Restaurant',
        'Cuisine délicieuse et service attentif': 'Delicious food and attentive service',
        'Service 24/7': '24/7 Service',
        'Assistance disponible à tout moment': 'Assistance available anytime',
        'Prêt à réserver ?': 'Ready to book?',
        'Contactez-nous dès maintenant pour vos réservations': 'Contact us now for your reservations',
        'E-mail': 'Email',
        'Email': 'Email',
        'Notre Hôtel': 'Our Hotel',
        'Votre destination idéale pour un séjour agréable': 'Your ideal destination for a pleasant stay',
        'Liens': 'Links',
        'Adresse: Votre adresse': 'Address: Your address',
        'Téléphone': 'Phone',
        'Phone': 'Phone',
        'Home': 'Home',
        'About': 'About',
        'Rooms': 'Rooms',
        'Services': 'Services',
        'Gallery': 'Gallery',
        'Tous droits réservés': 'All rights reserved',
        'All rights reserved': 'All rights reserved'
    }
};

// Initialize language toggle
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    currentLanguage = savedLanguage;
    updateLanguageButton();

    // Language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }

    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Initialize page based on current language
    switchLanguage(currentLanguage);
});

function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    localStorage.setItem('selectedLanguage', currentLanguage);
    switchLanguage(currentLanguage);
    updateLanguageButton();
}

function updateLanguageButton() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = currentLanguage === 'fr' ? 'EN' : 'FR';
    }
    document.documentElement.lang = currentLanguage;
}

function switchLanguage(lang) {
    document.querySelectorAll('[data-fr][data-en]').forEach(element => {
        const frenchText = element.getAttribute('data-fr');
        const englishText = element.getAttribute('data-en');
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = lang === 'fr' ? frenchText : englishText;
        } else {
            element.textContent = lang === 'fr' ? frenchText : englishText;
        }
    });

    // Update page title based on current page
    updatePageTitle();
}

function updatePageTitle() {
    const pageTitles = {
        'index.html': currentLanguage === 'fr' ? 'Notre Hôtel - Accueil' : 'Our Hotel - Home',
        'about.html': currentLanguage === 'fr' ? 'À propos - Notre Hôtel' : 'About - Our Hotel',
        'rooms.html': currentLanguage === 'fr' ? 'Chambres - Notre Hôtel' : 'Rooms - Our Hotel',
        'services.html': currentLanguage === 'fr' ? 'Services - Notre Hôtel' : 'Services - Our Hotel',
        'gallery.html': currentLanguage === 'fr' ? 'Galerie - Notre Hôtel' : 'Gallery - Our Hotel',
        'contact.html': currentLanguage === 'fr' ? 'Contact - Notre Hôtel' : 'Contact - Our Hotel'
    };
}

// Contact Form Handler
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Get form values
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    
    // Validate form
    if (!name || !email || !message) {
        const alertMsg = currentLanguage === 'fr' 
            ? 'Veuillez remplir tous les champs obligatoires.'
            : 'Please fill all required fields.';
        alert(alertMsg);
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const alertMsg = currentLanguage === 'fr'
            ? 'Veuillez entrer une adresse e-mail valide.'
            : 'Please enter a valid email address.';
        alert(alertMsg);
        return;
    }
    
    // Here you would normally send the data to a server
    // For now, we'll show a success message
    const successMsg = currentLanguage === 'fr'
        ? 'Merci ! Votre message a été envoyé avec succès. Nous vous répondrons bientôt.'
        : 'Thank you! Your message has been sent successfully. We will reply soon.';
    
    alert(successMsg);
    form.reset();
}

// Smooth scroll for anchor links
document.addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const sectionId = target.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Lazy load images (optional, for performance)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Dark mode toggle (optional)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Utility function to check if we're on mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Scroll to top button (optional)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Window resize handler
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Handle responsive changes
    }, 250);
});
