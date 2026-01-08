// Tab Navigation System
document.addEventListener('DOMContentLoaded', function() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const menuToggle = document.querySelector('.menu-toggle');
    const navTabsContainer = document.querySelector('.nav-tabs');
    
    // Tab switching functionality
    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            navTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => {
                content.classList.remove('active');
                // Reset scroll position
                content.scrollTop = 0;
                // Force reflow to reset animations
                void content.offsetHeight;
            });
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                // Small delay for smooth transition
                setTimeout(() => {
                    targetContent.classList.add('active');
                }, 50);
            }
            
            // Close mobile menu if open
            if (navTabsContainer && navTabsContainer.classList.contains('active')) {
                navTabsContainer.classList.remove('active');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Mobile menu toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navTabsContainer.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navTabsContainer.contains(e.target)) {
            if (navTabsContainer.classList.contains('active')) {
                navTabsContainer.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
    
    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Here you would typically send the data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message, ' + name + '! We will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Smooth scroll behavior for tab content
    const tabContentElements = document.querySelectorAll('.tab-content');
    tabContentElements.forEach(content => {
        content.addEventListener('scroll', function() {
            // Optional: Add parallax or other scroll effects here
        });
    });
    
    // Prevent body scroll when tab content is scrolling
    tabContents.forEach(content => {
        content.addEventListener('wheel', function(e) {
            const isScrolling = this.scrollHeight > this.clientHeight;
            if (!isScrolling) {
                e.preventDefault();
            }
        });
    });
});
