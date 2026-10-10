/**
 * js/render.js - Data-driven DOM rendering functions for Ankit Singh's Portfolio.
 * Dark Cinematic Engineering aesthetic, Origin Story, Inspirations Gallery,
 * Project Banners, HUD Telemetry, and Command Palette.
 */

(function () {
  "use strict";

  // Global namespace for render utilities
  const PortfolioRenderer = {
    renderProfile,
    renderStats,
    renderOriginStory,
    renderInspirations,
    renderSkills,
    renderCertifications,
    renderAchievements,
    renderResume,
    renderProjects,
    setupProjectFilters,
    setupProjectModal,
    openProjectModal,
    closeProjectModal,
    setupCommandPalette,
    openCommandPalette,
    closeCommandPalette,
    initAll
  };

  window.PortfolioRenderer = PortfolioRenderer;
  window.PortfolioRender = PortfolioRenderer;

  function renderProfile() {
    if (typeof profileData === "undefined") return;

    // Header / sidebar profile
    const profileNameEl = document.querySelector(".sidebar .profile h2");
    if (profileNameEl) profileNameEl.textContent = profileData.name;

    const profileRoleEl = document.querySelector(".sidebar .profile p");
    if (profileRoleEl) profileRoleEl.textContent = "AI/ML & Systems Engineering • 2024–28";

    // Sidebar Avatar -> Update to jprofile.jpeg
    const sidebarAvatar = document.querySelector(".sidebar .profile img");
    if (sidebarAvatar) {
      sidebarAvatar.src = profileData.avatar || "images/jprofile.jpeg";
    }

    // Hero Avatar -> Update to jprofile.jpeg
    const heroAvatar = document.querySelector(".hero-image img");
    if (heroAvatar) {
      heroAvatar.src = profileData.avatar || "images/jprofile.jpeg";
    }

    // About Avatar -> Update to jprofile.jpeg
    const aboutAvatar = document.querySelector(".about-image img");
    if (aboutAvatar) {
      aboutAvatar.src = profileData.avatar || "images/jprofile.jpeg";
    }

    // Social links in sidebar
    const sidebarSocials = document.querySelector("#sidebar-social-links") || document.querySelector(".sidebar .social-links");
    if (sidebarSocials) {
      sidebarSocials.innerHTML = `
        <a href="${profileData.contact.github}" target="_blank" rel="noopener noreferrer" aria-label="Visit Ankit Singh's GitHub profile"><i class="fab fa-github"></i></a>
        <a href="${profileData.contact.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Visit Ankit Singh's LinkedIn profile"><i class="fab fa-linkedin"></i></a>
        <a href="${profileData.contact.leetcode}" target="_blank" rel="noopener noreferrer" aria-label="Visit Ankit Singh's LeetCode profile"><i class="fas fa-code"></i></a>
        <a href="mailto:${profileData.contact.email}" aria-label="Email Ankit Singh"><i class="fas fa-envelope"></i></a>
      `;
    }

    // Hero headline and subtext
    const heroTitle = document.querySelector(".hero-text h1");
    if (heroTitle) {
      heroTitle.innerHTML = `Hi, I'm <span>${profileData.name}</span>`;
    }

    const heroRoleTag = document.getElementById("hero-role-tag");
    if (heroRoleTag) {
      heroRoleTag.textContent = profileData.role;
    }

    const heroHeadline = document.getElementById("hero-headline") || document.querySelector(".hero-tagline");
    if (heroHeadline) {
      heroHeadline.textContent = `"${profileData.headline}"`;
    }

    const heroSubtext = document.getElementById("hero-subtext") || document.querySelector(".hero-summary");
    if (heroSubtext) {
      heroSubtext.textContent = profileData.heroSubtext;
    }

    // About narrative: Personal story with 3 interactive highlights & progression milestones
    const narrativeContainer = document.getElementById("about-narrative-container");
    if (narrativeContainer && profileData.about) {
      const paragraphs = profileData.about.paragraphs || [profileData.about.story];
      const highlights = profileData.about.interactiveHighlights || [];

      narrativeContainer.innerHTML = `
        <div class="about-story-card">
          <div class="about-story-header">
            <span class="hud-mono-tag"><i class="fas fa-terminal"></i> PROFILE MANIFESTO</span>
            <h3 class="about-story-heading">"${profileData.about.headline}"</h3>
          </div>
          <div class="about-story-paragraphs">
            ${paragraphs.map(p => `<p class="about-story-text">${p}</p>`).join("")}
          </div>

          <!-- 3 Interactive Pillars: The Inventor, The Engineer, The Strategist -->
          <div class="about-highlights-deck" role="region" aria-label="Core Engineering Pillars">
            ${highlights.map((h, i) => `
              <div class="about-highlight-card ${i === 0 ? 'active' : ''}" data-highlight-id="${h.id}" tabindex="0" role="button" aria-expanded="${i === 0 ? 'true' : 'false'}">
                <div class="highlight-card-top">
                  <div class="highlight-icon-wrap"><i class="${h.icon}" aria-hidden="true"></i></div>
                  <div class="highlight-titles">
                    <span class="highlight-tag">${h.title}</span>
                    <h4 class="highlight-subtitle">${h.subtitle}</h4>
                  </div>
                  <i class="fas fa-chevron-down highlight-chevron" aria-hidden="true"></i>
                </div>
                <p class="highlight-desc">${h.desc}</p>
              </div>
            `).join("")}
          </div>
          
          <div class="about-milestones-track" role="navigation" aria-label="Engineering progression milestones">
            ${(profileData.about.milestones || []).map((m, idx) => `
              <a href="${m.link}" class="about-milestone-pill" title="${m.desc}">
                <span class="milestone-step">${m.step}</span>
                <span class="milestone-label">${m.label}</span>
                ${idx < profileData.about.milestones.length - 1 ? '<i class="fas fa-arrow-right milestone-arrow" aria-hidden="true"></i>' : ''}
              </a>
            `).join("")}
          </div>

          <div class="about-action-links">
            <a href="#origin-story" class="btn btn-secondary-hud btn-sm"><i class="fas fa-atom"></i> Read Origin Narrative (2016)</a>
            <a href="#projects" class="btn btn-sm"><i class="fas fa-layer-group"></i> Explore Engineered Systems</a>
          </div>
        </div>
      `;

      // Attach interaction to the 3 highlight cards
      setupAboutHighlightInteractions();
    }

    // About highlights cards (program, institution, etc.)
    const aboutInfoContainer = document.getElementById("about-info-grid") || document.querySelector(".about-info");
    if (aboutInfoContainer && profileData.about && profileData.about.highlights) {
      aboutInfoContainer.innerHTML = profileData.about.highlights.map(item => `
        <div class="info-card">
          <i class="${item.icon}" aria-hidden="true"></i>
          <div class="info-text">
            <strong>${item.label}</strong>
            ${item.isLink ? `<a href="${item.href}" ${item.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ''}>${item.value}</a>` : `<span>${item.value}</span>`}
          </div>
        </div>
      `).join("");
    }
  }

  function setupAboutHighlightInteractions() {
    const cards = document.querySelectorAll(".about-highlight-card");
    cards.forEach(card => {
      const toggle = () => {
        const isActive = card.classList.contains("active");
        cards.forEach(c => {
          c.classList.remove("active");
          c.setAttribute("aria-expanded", "false");
        });
        if (!isActive) {
          card.classList.add("active");
          card.setAttribute("aria-expanded", "true");
        }
      };

      card.addEventListener("click", toggle);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
      // Desktop hover activation
      card.addEventListener("mouseenter", () => {
        if (window.matchMedia("(hover: hover)").matches) {
          cards.forEach(c => {
            c.classList.remove("active");
            c.setAttribute("aria-expanded", "false");
          });
          card.classList.add("active");
          card.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  function renderStats() {
    if (typeof profileData === "undefined" || !profileData.stats) return;
    const statsContainer = document.getElementById("hero-stats-grid") || document.querySelector(".stats-grid");
    if (!statsContainer) return;

    statsContainer.innerHTML = profileData.stats.map((stat, idx) => `
      <div class="stat-item" data-index="${idx}">
        <div class="stat-hud-corner" aria-hidden="true"></div>
        <div class="stat-item-top">
          <i class="${stat.icon}" aria-hidden="true"></i>
          <span class="stat-sublabel">${stat.sublabel || 'TELEMETRY'}</span>
        </div>
        <h3 class="stat-number" data-target="${stat.numericValue || 0}">${stat.value}</h3>
        <p class="stat-title">${stat.label}</p>
        ${stat.link ? `<a href="${stat.link}" ${stat.link.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''} class="stat-link-arrow" aria-label="View verified ${stat.label}"><i class="fas fa-arrow-up-right-from-square"></i></a>` : ''}
      </div>
    `).join("");

    animateStatsCounters();
  }

  function animateStatsCounters() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const statEls = document.querySelectorAll(".stat-item .stat-number");
    statEls.forEach(el => {
      const target = parseInt(el.getAttribute("data-target"), 10);
      if (!target || isNaN(target)) return;
      const originalText = el.textContent;
      const hasPlus = originalText.includes("+");
      const duration = 1200;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);
        el.textContent = current + (hasPlus ? "+" : "");
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = originalText;
        }
      }
      requestAnimationFrame(update);
    });
  }

  /**
   * Render the Compact, Expandable 5-Scene Origin Story
   */
  function renderOriginStory() {
    if (typeof originStoryData === "undefined") return;

    const timelineContainer = document.getElementById("origin-timeline-track");
    if (timelineContainer && originStoryData.timeline) {
      timelineContainer.innerHTML = originStoryData.timeline.map((node, idx) => `
        <div class="timeline-node ${idx === 0 ? 'active' : ''}" data-year="${node.year}">
          <div class="timeline-node-dot"></div>
          <div class="timeline-node-year">${node.year}</div>
          <div class="timeline-node-label">${node.label}</div>
        </div>
      `).join("");
    }

    const scenesContainer = document.getElementById("origin-scenes-container");
    if (scenesContainer && originStoryData.scenes) {
      scenesContainer.innerHTML = originStoryData.scenes.map((scene, idx) => `
        <article class="origin-scene-card scene-${scene.accent} collapsed" id="${scene.id}" tabindex="0" role="button" aria-expanded="false" aria-controls="${scene.id}-content">
          <div class="scene-header">
            <div class="scene-meta">
              <span class="scene-badge"><i class="fas fa-terminal"></i> ${scene.badge}</span>
              <span class="scene-telemetry-stamp">${scene.telemetry.timestamp}</span>
            </div>
            <div class="scene-toggle-trigger" aria-hidden="true">
              <span class="toggle-label">EXPAND LOG</span>
              <i class="fas fa-chevron-down toggle-icon"></i>
            </div>
          </div>
          <h3 class="scene-title">${scene.title}</h3>
          <p class="scene-memorable-quote">${scene.quote}</p>
          <div class="scene-body" id="${scene.id}-content">
            <div class="scene-body-inner">
              ${scene.content.split("\n\n").map(para => `<p>${para}</p>`).join("")}
              <div class="scene-footer-telemetry">
                <span><i class="fas fa-microchip"></i> ${scene.telemetry.status}</span>
                <span class="telemetry-param">${scene.telemetry.parameter}</span>
              </div>
            </div>
          </div>
        </article>
      `).join("");

      // Setup expandable scene interaction (Click, Keyboard, Desktop Hover)
      setupOriginSceneInteractions();
    }

    const closingEl = document.getElementById("origin-closing-statement");
    if (closingEl && originStoryData.closingStatement) {
      closingEl.innerHTML = `
        <div class="origin-mission-box">
          <div class="mission-hud-ring" aria-hidden="true"></div>
          <p class="mission-lead">${originStoryData.closingStatement.lead}</p>
          <h2 class="mission-punchline">${originStoryData.closingStatement.punchline}</h2>
          <p class="mission-supporting">${originStoryData.closingStatement.supporting}</p>
          <a href="#projects" class="btn btn-primary-hud"><i class="fas fa-layer-group"></i> Inspect My Engineered Systems</a>
        </div>
      `;
    }
  }

  function setupOriginSceneInteractions() {
    const sceneCards = document.querySelectorAll(".origin-scene-card");
    sceneCards.forEach(card => {
      const toggleScene = () => {
        const isCollapsed = card.classList.contains("collapsed");
        if (isCollapsed) {
          card.classList.remove("collapsed");
          card.classList.add("expanded");
          card.setAttribute("aria-expanded", "true");
          const label = card.querySelector(".toggle-label");
          if (label) label.textContent = "COLLAPSE";
        } else {
          card.classList.remove("expanded");
          card.classList.add("collapsed");
          card.setAttribute("aria-expanded", "false");
          const label = card.querySelector(".toggle-label");
          if (label) label.textContent = "EXPAND LOG";
        }
      };

      card.addEventListener("click", (e) => {
        // Prevent toggle if clicking links inside expanded card
        if (e.target.closest("a")) return;
        toggleScene();
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleScene();
        }
      });

      // Desktop hover expand for fluid discovery
      card.addEventListener("mouseenter", () => {
        if (window.matchMedia("(hover: hover) and (min-width: 900px)").matches) {
          card.classList.remove("collapsed");
          card.classList.add("expanded");
          card.setAttribute("aria-expanded", "true");
          const label = card.querySelector(".toggle-label");
          if (label) label.textContent = "COLLAPSE";
        }
      });

      card.addEventListener("mouseleave", () => {
        if (window.matchMedia("(hover: hover) and (min-width: 900px)").matches) {
          card.classList.remove("expanded");
          card.classList.add("collapsed");
          card.setAttribute("aria-expanded", "false");
          const label = card.querySelector(".toggle-label");
          if (label) label.textContent = "EXPAND LOG";
        }
      });
    });
  }

  /**
   * Render Inspirations: Curated Characters and Philosophies
   */
  function renderInspirations() {
    if (typeof inspirationsData === "undefined") return;
    const galleryGrid = document.getElementById("inspirations-grid");
    if (!galleryGrid) return;

    galleryGrid.innerHTML = inspirationsData.map(item => `
      <div class="inspiration-card" data-inspiration-id="${item.id}" style="--accent-border: ${item.borderColor}; --accent-bg: ${item.visualColor};">
        <div class="inspiration-card-header">
          <div class="inspiration-icon-box">
            <i class="${item.icon}" aria-hidden="true"></i>
          </div>
          <div>
            <span class="inspiration-theme-tag">${item.themeTag}</span>
            <h3 class="inspiration-title">${item.title}</h3>
          </div>
        </div>
        <div class="inspiration-medium">${item.medium}</div>
        <div class="inspiration-core-theme">
          <strong>THEME:</strong> ${item.theme}
        </div>
        ${item.lesson ? `
          <div class="inspiration-lesson">
            <i class="fas fa-bolt" aria-hidden="true"></i>
            <div><strong>CORE LESSON:</strong> ${item.lesson}</div>
          </div>
        ` : ''}
        <p class="inspiration-reflection">${item.reflection}</p>
      </div>
    `).join("");
  }

  function renderSkills() {
    if (typeof skillsData === "undefined") return;
    const skillsContainer = document.getElementById("skills-container") || document.querySelector(".skills-grid");
    if (!skillsContainer) return;

    skillsContainer.innerHTML = skillsData.map(group => `
      <div class="skills-category-group">
        <h3 class="skills-category-title">
          <i class="${group.icon}" aria-hidden="true"></i> ${group.category}
        </h3>
        <div class="skills-grid">
          ${group.skills.map(skill => `
            <div class="skill-card" data-skill="${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}">
              <div class="skill-card-header">
                <div class="skill-card-icon">
                  <i class="${skill.icon}" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 class="skill-card-title">${skill.name}</h4>
                  <span class="badge ${skill.level === 'Demonstrated' ? 'badge-verified' : 'badge-featured'}">${skill.level}</span>
                </div>
              </div>
              <p class="skill-card-description">${skill.description}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  function renderCertifications() {
    if (typeof certificationsData === "undefined") return;
    const certGrid = document.getElementById("certifications-grid") || document.querySelector(".certifications-grid");
    if (!certGrid) return;

    certGrid.innerHTML = certificationsData.map(cert => `
      <div class="cert-item flip-card" tabindex="0" role="region" aria-label="${cert.title} by ${cert.issuer}">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <span class="tag badge-verified">${cert.type}</span>
            <i class="${cert.icon} cert-icon" aria-hidden="true"></i>
            <h3>${cert.title}</h3>
            <p>${cert.issuer}</p>
            <span class="flip-hint-badge"><i class="fas fa-sync-alt"></i> Tap to inspect</span>
          </div>
          <div class="flip-card-back">
            <h3>${cert.title}</h3>
            <p>${cert.backText}</p>
            <span class="date"><i class="far fa-calendar-alt"></i> ${cert.date}</span>
            ${cert.verifyUrl ? `<a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-cyan"><i class="fas fa-external-link-alt"></i> View Certificate</a>` : ''}
          </div>
        </div>
      </div>
    `).join("");

    // Mobile tap support for flip cards
    const flipCards = certGrid.querySelectorAll(".flip-card");
    flipCards.forEach(card => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          card.classList.toggle("flipped");
        }
      });
    });
  }

  function renderAchievements() {
    if (typeof achievementsData === "undefined") return;
    const achievementsContainer = document.getElementById("achievements-grid") || document.querySelector(".achievements-grid");
    if (!achievementsContainer) return;

    achievementsContainer.innerHTML = achievementsData.map(item => `
      <div class="achievement-card">
        <div class="achievement-card-header">
          <span class="achievement-badge ${item.tier === 'winner' ? 'badge-win' : item.tier === 'finalist' ? 'badge-finalist' : 'badge-participant'}">
            ${item.role}
          </span>
          <span class="achievement-year">${item.year || ''}</span>
        </div>
        <h3>${item.title}</h3>
        <div class="achievement-org">${item.organization || item.category || ''}</div>
        <p class="achievement-desc">${item.description}</p>
        ${item.linkUrl ? `
          <a href="${item.linkUrl}" target="_blank" rel="noopener noreferrer" class="achievement-link">
            <i class="fas fa-certificate"></i> View Certificate / Record
          </a>
        ` : ''}
      </div>
    `).join("");
  }

  function renderResume() {
    if (typeof resumeData === "undefined") return;
    const resumeContainer = document.getElementById("resume-timeline") || document.querySelector(".resume-content");
    if (!resumeContainer) return;

    resumeContainer.innerHTML = `
      <div class="resume-column">
        <h3 class="resume-subtitle"><i class="fas fa-graduation-cap" aria-hidden="true"></i> Academic Path</h3>
        ${resumeData.education.map(item => `
          <div class="resume-item timeline-item">
            <div class="timeline-dot" aria-hidden="true"></div>
            <h4>${item.degree}</h4>
            <div class="organization">${item.institution}</div>
            <span class="date"><i class="far fa-calendar-alt"></i> ${item.period}</span>
            <div class="description">
              <p>${item.details.join(" ")}</p>
            </div>
          </div>
        `).join("")}
      </div>

      <div class="resume-column">
        <h3 class="resume-subtitle"><i class="fas fa-laptop-code" aria-hidden="true"></i> Engineering & Projects</h3>
        ${resumeData.experience.map(item => `
          <div class="resume-item timeline-item">
            <div class="timeline-dot" aria-hidden="true"></div>
            <h4>${item.role}</h4>
            <div class="organization">${item.organization}</div>
            <span class="date"><i class="far fa-calendar-alt"></i> ${item.period}</span>
            <div class="description">
              <p>${item.details.join(" ")}</p>
            </div>
          </div>
        `).join("")}
      </div>
    `;

    // Resume download link
    const resumeBtn = document.querySelector(".download-resume");
    if (resumeBtn && resumeData.downloadUrl) {
      resumeBtn.href = resumeData.downloadUrl;
      resumeBtn.setAttribute("target", "_blank");
      resumeBtn.setAttribute("rel", "noopener noreferrer");
    }
  }

  let currentCategory = "all";

  function renderProjects(filterCategory = "all") {
    if (typeof projectsData === "undefined") return;
    currentCategory = filterCategory;

    const grid = document.getElementById("projects-grid") || document.querySelector(".projects-grid") || document.querySelector(".project-grid");
    if (!grid) return;

    // Filter projects
    const filtered = filterCategory === "all"
      ? projectsData
      : projectsData.filter(p => p.category === filterCategory || (filterCategory === "featured" && p.featured));

    grid.innerHTML = filtered.map(p => `
      <article class="project-card ${p.featured ? 'featured-card' : ''}" data-project-id="${p.id}">
        <div class="project-card-header">
          <img src="${p.image}" alt="${p.title} architecture banner" loading="lazy" class="project-banner-img" onerror="this.src='images/banner.jpg';">
          <div class="project-header-overlay"></div>
          <span class="project-status-tag">${p.status}</span>
        </div>

        <div class="project-card-body">
          <div class="project-category-label">${p.categoryName || p.category}</div>
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-summary">${p.summary}</p>
          
          ${p.architectureHighlight ? `
            <div class="project-arch-highlight">
              <strong>Architecture:</strong> ${p.architectureHighlight}
            </div>
          ` : ''}

          <div class="project-tech-chips" aria-label="Technology Stack">
            ${p.technologies.slice(0, 5).map(t => `<span class="tech-chip">${t}</span>`).join("")}
            ${p.technologies.length > 5 ? `<span class="tech-chip">+${p.technologies.length - 5}</span>` : ''}
          </div>

          <div class="project-card-actions">
            <button type="button" class="btn btn-sm btn-secondary-hud" data-open-modal="${p.id}" aria-label="View deep dive architecture for ${p.title}">
              <i class="fas fa-microchip"></i> Architecture
            </button>
            ${p.repositoryUrl ? `
              <a href="${p.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-cyan" aria-label="GitHub repository for ${p.title}">
                <i class="fab fa-github"></i> Code
              </a>
            ` : ''}
            ${p.demoUrl ? `
              <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-preview" aria-label="Live preview for ${p.title}">
                <i class="fas fa-eye"></i> Demo
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `).join("");

    // Reattach modal triggers
    const detailBtns = grid.querySelectorAll("[data-open-modal]");
    detailBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const pId = btn.getAttribute("data-open-modal");
        openProjectModal(pId);
      });
    });
  }

  function setupProjectFilters() {
    const filterContainer = document.getElementById("project-filters");
    if (!filterContainer) return;

    const categories = [
      { id: "all", label: "All Systems" },
      { id: "featured", label: "★ Flagship Core" },
      { id: "distributed", label: "Distributed Systems" },
      { id: "ai-ml", label: "AI & Computer Vision" },
      { id: "security", label: "Cybersecurity" },
      { id: "web", label: "Web Applications" },
      { id: "java", label: "Java Desktop" }
    ];

    filterContainer.innerHTML = categories.map(cat => `
      <button type="button" class="filter-btn ${cat.id === 'all' ? 'active' : ''}" data-filter="${cat.id}">
        ${cat.label}
      </button>
    `).join("");

    filterContainer.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        filterContainer.querySelectorAll(".filter-btn").forEach(p => p.classList.remove("active"));
        btn.classList.add("active");
        const filterVal = btn.getAttribute("data-filter");
        renderProjects(filterVal);
      });
    });
  }

  function setupProjectModal() {
    const modalOverlay = document.getElementById("project-modal-overlay");
    if (!modalOverlay) return;

    const closeBtn = document.getElementById("modal-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", closeProjectModal);
    }

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeProjectModal();
    });
  }

  function openProjectModal(projectId) {
    if (typeof projectsData === "undefined") return;
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const modalOverlay = document.getElementById("project-modal-overlay");
    const modalTitle = document.getElementById("modal-project-title");
    const modalBody = document.getElementById("modal-project-body");
    const modalFooter = document.getElementById("modal-project-footer");

    if (!modalOverlay || !modalBody) return;

    if (modalTitle) {
      modalTitle.textContent = project.title;
    }

    modalBody.innerHTML = `
      <div class="modal-banner-preview">
        <img src="${project.image}" alt="${project.title} detailed architecture banner" class="modal-banner-img" onerror="this.src='images/banner.jpg';">
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-tag"></i> Overview & System Status</div>
        <p><strong>Status:</strong> ${project.status} • <strong>Domain:</strong> ${project.categoryName || project.category}</p>
        <p style="margin-top:0.4rem;">${project.summary}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-exclamation-triangle"></i> Problem Statement</div>
        <p>${project.problem}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-lightbulb"></i> Engineered Solution</div>
        <p>${project.solution}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-cogs"></i> Technical Architecture & Implementation</div>
        <ul style="padding-left:1.2rem; margin:0.4rem 0; color:#cbd5e1;">
          ${project.implementation.map(item => `<li style="margin-bottom:0.35rem;">${item}</li>`).join("")}
        </ul>
      </div>

      <div class="modal-section">
        <div class="modal-section-title"><i class="fas fa-microchip"></i> Technology Stack</div>
        <div style="display:flex; flex-wrap:wrap; gap:0.4rem; margin-top:0.4rem;">
          ${project.technologies.map(t => `<span class="tech-chip">${t}</span>`).join("")}
        </div>
      </div>

      ${project.notes ? `
        <div class="modal-section" style="background:rgba(86,224,240,0.08); padding:0.85rem; border-radius:0.4rem; border-left:3px solid var(--reactor-cyan);">
          <div class="modal-section-title" style="margin-bottom:0.25rem;"><i class="fas fa-shield-alt"></i> Verification & Scope Bounds</div>
          <p style="font-size:0.88rem; margin:0; color:#e2e8f0;">${project.notes}</p>
        </div>
      ` : ''}
    `;

    if (modalFooter) {
      modalFooter.innerHTML = `
        ${project.repositoryUrl ? `
          <a href="${project.repositoryUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-cyan">
            <i class="fab fa-github"></i> Repository
          </a>
        ` : ''}
        ${project.demoUrl ? `
          <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-preview">
            <i class="fas fa-eye"></i> Live Demo
          </a>
        ` : ''}
        <button type="button" class="btn btn-sm btn-secondary-hud" onclick="PortfolioRenderer.closeProjectModal()">Close Diagnostic</button>
      `;
    }

    modalOverlay.classList.add("active");
    modalOverlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    const modalOverlay = document.getElementById("project-modal-overlay");
    if (!modalOverlay) return;
    modalOverlay.classList.remove("active");
    modalOverlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  /**
   * Command Palette (Ctrl+K / Cmd+K)
   */
  function setupCommandPalette() {
    let paletteOverlay = document.getElementById("command-palette-overlay");
    if (!paletteOverlay) {
      paletteOverlay = document.createElement("div");
      paletteOverlay.id = "command-palette-overlay";
      paletteOverlay.className = "command-palette-overlay";
      paletteOverlay.setAttribute("role", "dialog");
      paletteOverlay.setAttribute("aria-modal", "true");
      paletteOverlay.setAttribute("aria-hidden", "true");

      paletteOverlay.innerHTML = `
        <div class="command-palette-dialog">
          <div class="palette-header">
            <div class="palette-input-wrap">
              <i class="fas fa-terminal"></i>
              <input type="text" id="palette-search-input" placeholder="Type a command or jump to system... (e.g. 'HEDS', 'Origin', 'Skills')" autocomplete="off" />
            </div>
            <span class="palette-esc-badge">ESC</span>
          </div>
          <div class="palette-results" id="palette-results-list"></div>
          <div class="palette-footer">
            <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Execute</span>
            <span><kbd>ESC</kbd> Close</span>
          </div>
        </div>
      `;

      document.body.appendChild(paletteOverlay);

      // Close handlers
      paletteOverlay.addEventListener("click", (e) => {
        if (e.target === paletteOverlay) closeCommandPalette();
      });

      const searchInput = paletteOverlay.querySelector("#palette-search-input");
      if (searchInput) {
        searchInput.addEventListener("input", () => {
          renderPaletteItems(searchInput.value.trim());
        });
      }
    }

    // Global Key Listener for Ctrl+K / Cmd+K
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const overlay = document.getElementById("command-palette-overlay");
        if (overlay && overlay.classList.contains("active")) {
          closeCommandPalette();
        } else {
          openCommandPalette();
        }
      } else if (e.key === "Escape") {
        const overlay = document.getElementById("command-palette-overlay");
        if (overlay && overlay.classList.contains("active")) {
          closeCommandPalette();
        }
      }
    });

    renderPaletteItems("");
  }

  const paletteCommands = [
    { title: "Origin Story // 2016 Spark", category: "Narrative", href: "#origin-story", icon: "fas fa-history" },
    { title: "HEDS Distributed Print System", category: "Project", action: () => openProjectModal("heds"), icon: "fas fa-network-wired" },
    { title: "Vortex AI Interview Intelligence", category: "Project", action: () => openProjectModal("vortex"), icon: "fas fa-brain" },
    { title: "PhishingGuard ML Extension", category: "Project", action: () => openProjectModal("phishingguard"), icon: "fas fa-shield-alt" },
    { title: "ASL Alphabet Gesture Translator", category: "Project", action: () => openProjectModal("asl-translator"), icon: "fas fa-hands" },
    { title: "Cultural & Anime Inspirations", category: "Inspiration", href: "#inspirations", icon: "fas fa-film" },
    { title: "Technical Skills Matrix", category: "Engineering", href: "#skills", icon: "fas fa-microchip" },
    { title: "Competitive Achievements", category: "Honors", href: "#achievements", icon: "fas fa-trophy" },
    { title: "Certifications & Diplomas", category: "Credentials", href: "#certifications", icon: "fas fa-certificate" },
    { title: "Download Verified Resume", category: "Document", action: () => window.open(profileData.contact.resumeUrl, "_blank"), icon: "fas fa-file-pdf" },
    { title: "Launch VORTEX Assistant", category: "AI Tool", action: () => { const l = document.getElementById("vortex-launcher"); if (l) l.click(); }, icon: "fas fa-atom" },
    { title: "Get in Touch // Send Message", category: "Contact", href: "#contact", icon: "fas fa-paper-plane" }
  ];

  function renderPaletteItems(filterText) {
    const listEl = document.getElementById("palette-results-list");
    if (!listEl) return;

    const query = filterText.toLowerCase();
    const filtered = paletteCommands.filter(c => 
      c.title.toLowerCase().includes(query) || c.category.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
      listEl.innerHTML = `<div class="palette-empty-state">No matching telemetry commands found for "${filterText}"</div>`;
      return;
    }

    listEl.innerHTML = filtered.map((item, idx) => `
      <div class="palette-item ${idx === 0 ? 'selected' : ''}" data-idx="${idx}">
        <div class="palette-item-left">
          <i class="${item.icon}"></i>
          <span class="palette-item-title">${item.title}</span>
        </div>
        <span class="palette-item-cat">${item.category}</span>
      </div>
    `).join("");

    // Click handler for items
    listEl.querySelectorAll(".palette-item").forEach(el => {
      el.addEventListener("click", () => {
        const idx = parseInt(el.getAttribute("data-idx"), 10);
        executePaletteItem(filtered[idx]);
      });
    });
  }

  function executePaletteItem(item) {
    closeCommandPalette();
    if (item.action) {
      item.action();
    } else if (item.href) {
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function openCommandPalette() {
    const overlay = document.getElementById("command-palette-overlay");
    if (!overlay) return;
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    const input = document.getElementById("palette-search-input");
    if (input) {
      input.value = "";
      renderPaletteItems("");
      setTimeout(() => input.focus(), 80);
    }
  }

  function closeCommandPalette() {
    const overlay = document.getElementById("command-palette-overlay");
    if (!overlay) return;
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
  }

  function initAll() {
    renderProfile();
    renderStats();
    renderOriginStory();
    renderInspirations();
    renderSkills();
    renderCertifications();
    renderAchievements();
    renderResume();
    setupProjectFilters();
    renderProjects("all");
    setupProjectModal();
    setupCommandPalette();
  }
})();
