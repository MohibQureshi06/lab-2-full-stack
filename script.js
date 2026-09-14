// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ============================================
// BUTTON INTERACTIONS
// ============================================

document.querySelector('.btn-hero')?.addEventListener('click', function() {
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const projectName = this.closest('.project-tile').querySelector('h3').textContent;
        alert(`🎉 Thanks for your interest in "${projectName}"!\n\nProject details coming soon!`);
    });
});

document.querySelector('.send-btn')?.addEventListener('click', function() {
    alert('✅ Message sent! I will get back to you soon.');
});

// ============================================
// PROGRESS BAR ANIMATION ON SCROLL
// ============================================

const progressBars = document.querySelectorAll('.progress-fill');

const observerOptions = {
    threshold: 0.1
};

const progressObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        }
    });
}, observerOptions);

progressBars.forEach(bar => progressObserver.observe(bar));

// ============================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ============================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-items a').forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#ff6b9d';
        }
    });
});

// ============================================
// FADE IN ON SCROLL
// ============================================

const fadeInElements = document.querySelectorAll('.skill-category, .project-tile, .stat-card');

const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(el => {
    el.style.opacity = '0';
    fadeInObserver.observe(el);
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log('✨ Ayesha Asim Portfolio Loaded!');
