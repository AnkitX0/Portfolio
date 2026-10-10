/**
 * main.js - Core Portfolio Coordinator
 * Handles Navigation, Dark Mode, Contact Form, Scroll Spy, Particles, and Modal Wiring.
 * Fully accessible, mobile-optimized, and free of scroll-hijacking wheel listeners.
 */

(function () {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', initPortfolio);

  function initPortfolio() {
    // 1. Render all data-driven sections first
    if (window.PortfolioRender) {
      window.PortfolioRender.initAll();
    }

    // 2. Setup Interactive Controllers
    setupWorkshopBootSequence();
    setupMobileNav();
    setupScrollSpy();
    setupDualThemeSwitcher();
    setupBackToTop();
    setupContactForm();
    setupHeroParticles();
    setupModalKeyboardDismiss();
    setupCommandPaletteTrigger();

    // 3. Initialize VORTEX Chatbot Engine
    if (window.VortexChatbot && typeof window.VortexChatbot.init === 'function') {
      window.VortexChatbot.init();
    }
  }

  function setupWorkshopBootSequence() {
    const bootScreen = document.getElementById('workshop-boot-screen');
    if (!bootScreen) return;

    const hasSeen = sessionStorage.getItem('ankit_workshop_boot_seen');
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasSeen || prefersReduced) {
      bootScreen.remove();
      return;
    }

    sessionStorage.setItem('ankit_workshop_boot_seen', 'true');
    bootScreen.classList.add('boot-active');

    function finishBoot() {
      if (!bootScreen || !bootScreen.parentNode) return;
      bootScreen.classList.add('boot-fade-out');
      setTimeout(() => {
        if (bootScreen.parentNode) bootScreen.remove();
      }, 350);
      document.removeEventListener('keydown', handleBootKey);
    }

    function handleBootKey(e) {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        finishBoot();
      }
    }

    const skipBtn = document.getElementById('skip-boot-btn');
    if (skipBtn) {
      skipBtn.addEventListener('click', finishBoot);
    }
    document.addEventListener('keydown', handleBootKey);

    // Auto-complete under 2 seconds (strictly 1.6s)
    setTimeout(finishBoot, 1600);
  }

  function setupCommandPaletteTrigger() {
    const triggerBtn = document.getElementById('cmd-palette-trigger');
    if (triggerBtn) {
      triggerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.PortfolioRender && typeof window.PortfolioRender.openCommandPalette === 'function') {
          window.PortfolioRender.openCommandPalette();
        }
      });
    }
  }

  /**
   * Mobile Sidebar Navigation Toggle with Accessible Attributes
   */
  function setupMobileNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.sidebar nav ul li a');

    if (!menuToggle || !sidebar) return;

    // Set initial ARIA attributes
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-controls', 'sidebar-nav');

    function toggleNav(open) {
      const isOpen = open !== undefined ? open : !sidebar.classList.contains('active');
      sidebar.classList.toggle('active', isOpen);
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen && window.innerWidth <= 768 ? 'hidden' : '';
    }

    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleNav();
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        toggleNav(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        toggleNav(false);
        menuToggle.focus();
      }
    });

    // Close sidebar when a navigation link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 992) {
          toggleNav(false);
        }
      });
    });
  }

  /**
   * Scroll Spy - Updates active nav item as user scrolls
   */
  function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.sidebar nav ul li a');

    if (!sections.length || !navLinks.length) return;

    function onScroll() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const triggerOffset = 180;

      let currentSectionId = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - triggerOffset;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute('id');
        }
      });

      // Handle bottom of page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) currentSectionId = lastSection.getAttribute('id');
      }

      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          if (targetId === currentSectionId) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        }
      });
    }

    window.addEventListener('scroll', throttle(onScroll, 100), { passive: true });
    onScroll();
  }

  /**
   * Dual-Identity Theme Switcher: STARK MODE (The Inventor) vs WAYNE MODE (The Strategist)
   */
  function setupDualThemeSwitcher() {
    const STORAGE_KEY = 'portfolio_identity_theme';
    const starkBtn = document.getElementById('theme-btn-stark');
    const wayneBtn = document.getElementById('theme-btn-wayne');
    const hudIdentity = document.getElementById('hud-tag-identity');
    const heroStatusLabel = document.getElementById('hero-status-label');

    const savedTheme = localStorage.getItem(STORAGE_KEY) || 'stark';
    applyTheme(savedTheme, false);

    if (starkBtn) {
      starkBtn.addEventListener('click', () => applyTheme('stark', true));
    }
    if (wayneBtn) {
      wayneBtn.addEventListener('click', () => applyTheme('wayne', true));
    }

    function applyTheme(theme, save = true) {
      const activeTheme = theme === 'wayne' ? 'wayne' : 'stark';
      document.documentElement.setAttribute('data-theme', activeTheme);

      if (save) {
        try {
          localStorage.setItem(STORAGE_KEY, activeTheme);
        } catch (e) {}
      }

      if (starkBtn && wayneBtn) {
        if (activeTheme === 'stark') {
          starkBtn.classList.add('active');
          starkBtn.setAttribute('aria-pressed', 'true');
          wayneBtn.classList.remove('active');
          wayneBtn.setAttribute('aria-pressed', 'false');
        } else {
          wayneBtn.classList.add('active');
          wayneBtn.setAttribute('aria-pressed', 'true');
          starkBtn.classList.remove('active');
          starkBtn.setAttribute('aria-pressed', 'false');
        }
      }

      // Update hero HUD indicators
      if (hudIdentity) {
        hudIdentity.innerHTML = activeTheme === 'stark'
          ? '<i class="fas fa-atom"></i> STARK MODE'
          : '<i class="fas fa-shield-halved"></i> WAYNE MODE';
      }

      if (heroStatusLabel) {
        heroStatusLabel.textContent = activeTheme === 'stark'
          ? 'ARC REACTOR ACTIVE // SYSTEM ONLINE'
          : 'BATCOMPUTER TACTICAL MAINFRAME // SECURE';
      }

      // Notify chatbot if open
      if (window.VortexChatbot && typeof window.VortexChatbot.updateTheme === 'function') {
        window.VortexChatbot.updateTheme(activeTheme);
      }
    }
  }

  /**
   * Back To Top Button
   */
  function setupBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', throttle(() => {
      if (window.scrollY > 350) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    }, 150), { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /**
   * Contact Form Validation & Mailto Generation
   * Accurately communicates that it prepares an email via the user's mail client.
   */
  function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const submitBtn = form.querySelector('button[type="submit"], .btn');

    if (!nameInput || !emailInput || !messageInput) return;

    window.sendEmail = function (e) {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = (subjectInput ? subjectInput.value.trim() : '') || 'Portfolio Inquiry';
      const message = messageInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name) {
        alert('Please enter your name.');
        nameInput.focus();
        return;
      }

      if (!email || !emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
      }

      if (!message) {
        alert('Please enter your message.');
        messageInput.focus();
        return;
      }

      const formattedBody = [
        `Hello Ankit,`,
        ``,
        `You have received an inquiry from your developer portfolio:`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        ``,
        `Message:`,
        message,
        ``,
        `--- Sent via Ankit Singh Portfolio ---`
      ].join('\n');

      const recipient = 'ankitsingh10a@gmail.com';
      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;

      // Friendly notification
      const sendNotice = document.createElement('div');
      sendNotice.style.cssText = 'padding: 0.8rem; background: #e6fffa; border: 1px solid #38b2ac; color: #234e52; border-radius: 0.5rem; margin-top: 1rem; font-size: 0.9rem;';
      sendNotice.textContent = 'Opening your email client with your pre-filled message...';
      form.appendChild(sendNotice);

      setTimeout(() => {
        window.location.href = mailtoUrl;
        setTimeout(() => {
          if (sendNotice.parentNode) sendNotice.parentNode.removeChild(sendNotice);
          form.reset();
        }, 3000);
      }, 300);
    };

    if (form.tagName.toLowerCase() === 'form') {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        window.sendEmail(e);
      });
    }
  }

  /**
   * Hero Particles Initialization with Safety Checks
   */
  function setupHeroParticles() {
    if (typeof particlesJS !== 'function') return;

    // Check prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    try {
      particlesJS('particles-js', {
        particles: {
          number: { value: 38, density: { enable: true, value_area: 850 } },
          color: { value: '#56E0F0' },
          shape: { type: 'circle' },
          opacity: { value: 0.35, random: true },
          size: { value: 2.8, random: true },
          line_linked: {
            enable: true,
            distance: 135,
            color: '#56E0F0',
            opacity: 0.18,
            width: 1
          },
          move: {
            enable: true,
            speed: 1.4,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out'
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' }
          },
          modes: {
            grab: { distance: 130, line_linked: { opacity: 0.38 } },
            push: { particles_nb: 2 }
          }
        },
        retina_detect: true
      });
    } catch (err) {
      console.warn('Particles initialization skipped:', err);
    }
  }

  /**
   * Modal dialog keyboard escape dismiss
   */
  function setupModalKeyboardDismiss() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const overlay = document.getElementById('project-modal-overlay');
        if (overlay && overlay.classList.contains('active')) {
          if (window.PortfolioRender && typeof window.PortfolioRender.closeProjectModal === 'function') {
            window.PortfolioRender.closeProjectModal();
          }
        }
      }
    });
  }

  /**
   * Utility: Throttle
   */
  function throttle(func, limit) {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
})();
