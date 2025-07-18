// Scroll animation ke liye JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInOnScroll = function() {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    // Pehle check karein
    fadeInOnScroll();
    
    // Scroll hone par check karein
    window.addEventListener('scroll', fadeInOnScroll);
  });
