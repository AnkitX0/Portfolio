document.addEventListener("DOMContentLoaded", function () {
    // Utility functions to select elements
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);

    // 🟢 Visitor Count Tracking
    const visitorCountElement = $(".stat-item h2");
    if (visitorCountElement) {
        let count = parseInt(localStorage.getItem("visitorCount") || "0") + 1;
        localStorage.setItem("visitorCount", count);
        visitorCountElement.textContent = count.toLocaleString();
    }

    // 🟢 Skills Circle Animation
    const skillCircles = $$(".skill-circle");
    if (skillCircles.length > 0) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const percentage = parseInt(entry.target.dataset.percentage);
                        const circle = entry.target.querySelector(".circle-progress");
                        const label = entry.target.querySelector(".skill-percentage");
                        const circumference = 283; // Circle stroke length

                        // Dynamic color change based on percentage
                        const getColor = (value) => {
                            if (value >= 80) return "#28a745"; // Green
                            if (value >= 60) return "#ffc107"; // Yellow
                            if (value >= 40) return "#fd7e14"; // Orange
                            return "#dc3545"; // Red
                        };

                        // Start animation
                        circle.style.transition = "stroke-dashoffset 1.5s ease-in-out, stroke 0.5s ease";
                        circle.style.strokeDashoffset = circumference - (percentage / 100) * circumference;
                        circle.style.stroke = getColor(percentage);
                        label.textContent = `${percentage}%`;
                        label.style.opacity = 1;

                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        skillCircles.forEach((circle) => {
            circle.querySelector(".circle-progress").style.strokeDashoffset = "283"; // Initially hidden
            circle.querySelector(".skill-percentage").style.opacity = "0";
            observer.observe(circle);
        });
    }

    // 🟢 Contact Form Validation & Email Sending
    const contactForm = $("#contactForm");
    if (contactForm) {
        const submitBtn = contactForm.querySelector(".btn");
        const fields = ["name", "email", "subject", "message"];

        const validateForm = () => {
            const allFilled = fields.every((id) => $(`#${id}`).value.trim());
            submitBtn.disabled = !allFilled;
            return allFilled;
        };

        contactForm.addEventListener("input", validateForm);

        window.sendEmail = () => {
            if (!validateForm()) {
                alert("Please fill in all fields before sending.");
                return;
            }

            const [name, email, subject, message] = fields.map((id) => $(`#${id}`).value.trim());
            const emailBody = `Hello Ankit,\n\nYou have received a new message from your portfolio contact form:\n\n`
                            + `🔹 Name: ${name}\n`
                            + `🔹 Email: ${email}\n`
                            + `🔹 Subject: ${subject}\n\n`
                            + `📩 Message:\n${message}\n\n`
                            + `Best Regards,\n${name}`;

            // Open user's default email client with prefilled details
            window.location.href = `mailto:ankitsingh10a@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

            // Clear the form after sending
            contactForm.reset();
            submitBtn.disabled = true;
        };

        validateForm(); // Initial validation
    }

    // 🟢 Sidebar Active Link Update on Scroll & Smooth Scrolling
    const sections = $$("section");
    const navLinks = $$(".sidebar nav ul li a");
    if (sections.length > 0 && navLinks.length > 0) {
        const updateActiveSection = () => {
            let currentSection = "";
            const scrollY = window.scrollY + 100; // Adjust for header height

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    currentSection = section.id;
                }
            });

            navLinks.forEach((link) => {
                const linkHref = link.getAttribute("href").substring(1);
                link.classList.toggle("active", linkHref === currentSection);
            });
        };

        window.addEventListener("scroll", updateActiveSection);
        updateActiveSection(); // Run once on page load

        navLinks.forEach((anchor) => {
            anchor.addEventListener("click", (event) => {
                event.preventDefault();
                const targetSection = $(anchor.getAttribute("href"));
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            });
        });
    }

    // 🟢 Sidebar Toggle for Mobile
    const menuToggle = $(".menu-toggle");
    const sidebar = $(".sidebar");
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        document.addEventListener("click", (event) => {
            if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                sidebar.classList.remove("active");
                menuToggle.classList.remove("active");
            }
        });
    }

    // 🟢 Back to Top Button
    const backToTopButton = $(".back-to-top");
    if (backToTopButton) {
        const toggleBackToTop = () => {
            const isVisible = window.scrollY > 200;
            backToTopButton.style.opacity = isVisible ? "1" : "0";
            backToTopButton.style.pointerEvents = isVisible ? "auto" : "none";
        };

        window.addEventListener("scroll", toggleBackToTop);
        backToTopButton.addEventListener("click", () =>
            window.scrollTo({ top: 0, behavior: "smooth" })
        );
    }

    // 🟢 Dark Mode Toggle
    const darkModeToggle = $(".dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const icon = darkModeToggle.querySelector("i");
            const text = darkModeToggle.querySelector("span");

            if (document.body.classList.contains("dark-mode")) {
                icon.classList.replace("fa-moon", "fa-sun");
                text.textContent = "Light Mode";
            } else {
                icon.classList.replace("fa-sun", "fa-moon");
                text.textContent = "Dark Mode";
            }
        });
    }

    // 🟢 Particles.js Background Animation
    particlesJS("particles-js", {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#b97c50" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: "none", random: true }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                repulse: { distance: 100 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });

    // 🟢 Hero Section Background Animation
    const hero = $(".hero");
    if (hero) {
        hero.addEventListener("mousemove", (event) => {
            const rect = hero.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            hero.style.backgroundPosition = `${x}% ${y}%`;
        });

        hero.addEventListener("mouseleave", () => {
            hero.style.backgroundPosition = "0% 50%";
        });
    }
});