// Smooth scroll functionality for the scroll button
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.querySelector('.scroll-btn');
    
    // Show/hide scroll-to-top button
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Show button when scrolled down more than 300px
        if (currentScroll > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    // Scroll to top when button is clicked
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function() {
            window.scrollTo({ 
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Scroll to top pag naclick yung "Fluids"
    const logo = document.querySelector('.navbar-logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ 
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Scroll to About & Topics section if start learning is clicked
    const startBtn = document.querySelector('.start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            const aboutSection = document.getElementById('about-topics');
            if (aboutSection) {
                aboutSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Smooth scroll for navbar links
    const navLinks = document.querySelectorAll('.navbar-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});
