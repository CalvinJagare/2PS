// Smooth and elegant scroll effects
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#hero');
    const logo = document.querySelector('.logo');
    const heroContent = document.querySelector('.hero-content');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (hero && scrolled < window.innerHeight) {
        // Gentle parallax on floating elements
        const elements = document.querySelectorAll('.element');
        elements.forEach((element, index) => {
            const speed = 0.15 + (index * 0.05);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });

        // Light rays subtle movement
        const lightRays = document.querySelector('.light-rays');
        if (lightRays) {
            lightRays.style.transform = `translateY(${scrolled * 0.2}px)`;
        }

        // Logo elegantly shrinks and fades
        if (logo) {
            const scale = Math.max(0.6, 1 - (scrolled / window.innerHeight) * 0.4);
            const opacity = Math.max(0, 1 - (scrolled / window.innerHeight) * 1.3);
            logo.style.transform = `scale(${scale})`;
            logo.style.opacity = opacity;
        }

        // Hero content smooth fade
        if (heroContent) {
            const opacity = Math.max(0, 1 - (scrolled / window.innerHeight) * 1.1);
            heroContent.style.opacity = opacity;
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        }

        // Scroll indicator fades quickly
        if (scrollIndicator) {
            const opacity = Math.max(0, 1 - (scrolled / 300));
            scrollIndicator.style.opacity = opacity;
        }

        // Subtle parallax on entire hero
        hero.style.transform = `translateY(${scrolled * 0.4}px)`;
    }

    // Direction-aware scroll detection
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        document.body.classList.add('scrolling-down');
        document.body.classList.remove('scrolling-up');
    } else {
        document.body.classList.add('scrolling-up');
        document.body.classList.remove('scrolling-down');
    }
    lastScrollTop = st <= 0 ? 0 : st;
});

// Smooth scroll for navigation links
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe team members
document.querySelectorAll('.team-member').forEach((member, index) => {
    member.style.opacity = '0';
    member.style.transform = 'translateY(30px)';
    member.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(member);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('#hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add active class to service cards on hover
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('active');
    });
    
    card.addEventListener('mouseleave', function() {
        this.classList.remove('active');
    });
});

// Initialize hero section as visible
const heroSection = document.querySelector('#hero');
if (heroSection) {
    heroSection.style.opacity = '1';
    heroSection.style.transform = 'translateY(0)';
}

// Add cursor trail effect (optional - can be removed if too much)
let cursorTrail = [];
const trailLength = 5;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        cursorTrail.push({x: e.clientX, y: e.clientY});
        if (cursorTrail.length > trailLength) {
            cursorTrail.shift();
        }
    }
});

console.log('Two-Points Studios website loaded successfully! 2P 🎬📸🎨');
