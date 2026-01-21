document.addEventListener('DOMContentLoaded', () => {

    // Header Scroll Effect
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Animate burger icon (simple rotation via class, can add css for it)
        const spans = menuToggle.querySelectorAll('span');
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            document.body.style.overflow = 'hidden';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                menuToggle.click();
            }
        });
    });

    // --- PREMIUM ANIMATIONS ---

    // 1. Intersection Observer for Scroll Animations with Staggering
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is in view
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                // Handle staggered children if they exist
                const staggerItems = entry.target.querySelectorAll('.stagger-item');
                staggerItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('is-visible');
                    }, index * 100); // 100ms delay between each item
                });

                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections and containers
    document.querySelectorAll('section, .activities-section-grid, .etablissements-grid, .news-grid, .engagements-grid, .footer-grid').forEach(el => {
        sectionObserver.observe(el);
    });

    // 2. Parallax Effect for Background Images (Subtle & Smooth)
    const parallaxElements = document.querySelectorAll('.activity-card, .secondary-card, .news-image');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;

        parallaxElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            // Only animate if in viewport
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const speed = 0.05; // Very subtle speed
                const yPos = -(rect.top * speed);
                el.style.backgroundPosition = `center ${yPos}px`;
            }
        });
    });

    // --- CAROUSEL LOGIC ---
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.control.prev');
    const nextBtn = document.querySelector('.control.next');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        // Wrap around
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        // Update slides
        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');

        // Update dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // 5 seconds
    }

    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Event Listeners
    if (nextBtn) nextBtn.addEventListener('click', () => {
        stopSlideShow();
        nextSlide();
        startSlideShow();
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
        stopSlideShow();
        prevSlide();
        startSlideShow();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideShow();
            showSlide(index);
            startSlideShow();
        });
    });

    // Start auto-play
    startSlideShow();

});
