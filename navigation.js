// Navigation functionality module
export function initializeNavigation() {
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);
            
            // Update active state
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Scroll to section
            if (target === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', () => {
        const sections = ['home', 'artists', 'about'];
        const scrollPos = window.scrollY + 200;
        
        let currentSection = 'home';
        
        sections.forEach(section => {
            const element = section === 'home' ? 
                document.querySelector('.hero') : 
                document.getElementById(section);
            
            if (element) {
                const top = element.offsetTop;
                const bottom = top + element.offsetHeight;
                
                if (scrollPos >= top && scrollPos < bottom) {
                    currentSection = section;
                }
            }
        });
        
        // Update active state
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`[href="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    });
}

export function initializeParallax() {
    // Add parallax effect to background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.neon-background');
        const speed = scrolled * 0.5;
        
        parallax.style.transform = `translateY(${speed}px)`;
    });
}