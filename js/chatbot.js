/**
 * VORTEX Intelligent Assistant for Ankit Singh's Portfolio.
 * Inspired by Tony Stark's JARVIS Interface & Modern Systems Telemetry.
 * 
 * Security & Reliability First:
 * - ZERO hardcoded API keys in client-side code.
 * - Comprehensive local knowledge base covering education, projects, skills, origin story, and inspirations.
 * - Safe DOM text and element rendering to prevent XSS.
 * - Supports optional server-side backend endpoint via window.VORTEX_BACKEND_URL.
 * - Keyboard accessible, responsive, and mobile-friendly.
 */

(function () {
  "use strict";

  // Knowledge base for offline deterministic responses
  const vortexKnowledge = [
    {
      keywords: ["origin", "origin story", "iron man", "movie", "2016", "spark", "tony stark", "why computer science", "motivation", "beginning"],
      title: "Ankit's Origin Story: 'It Started with a Movie'",
      response: "In 2016, 10-year-old Ankit watched Iron Man for the first time. It wasn't the superhero armor that fascinated him—it was the engineer inside: a person trapped in a cave who looked at fundamental physical laws, understood how components connect, and engineered an arc reactor out of scraps.\n\nKey Realizations:\n• Engineering isn't a title; it's the capability to look at an impossible problem and build a tangible working prototype.\n• JARVIS represented the dream of personal machine intelligence—which turned into studying real computer vision, neural networks, and concurrent distributed software.\n• Ankit's personal engineering philosophy: 'I know I can't build a JARVIS overnight. That's exactly why I started building.'\n\nYou can explore the full interactive narrative in the 'Origin Story' section of this portfolio!",
      links: [
        { label: "Jump to Origin Story", url: "#origin-story" }
      ]
    },
    {
      keywords: ["jarvis", "ai assistant", "protocol", "intelligence"],
      title: "The JARVIS Inspiration vs. Real Engineering",
      response: "JARVIS is the fictional inspiration that ignited Ankit's passion for artificial intelligence. However, Ankit draws a sharp line between fictional movie magic and authentic software engineering:\n\n• Movie JARVIS: Effortless sci-fi consciousness.\n• Real Engineering: MediaPipe FaceMesh landmark extraction, Web Speech API cadence analysis, PyTorch Multilayer Perceptrons, and PostgreSQL row-level locks for transaction concurrency.\n\nAnkit's goal is to engineer AI tools that feel less like science fiction and more like dependable, reproducible engineering.",
      links: [
        { label: "Explore Vortex Interview Platform", url: "#projects" }
      ]
    },
    {
      keywords: ["inspirations", "anime", "fiction", "dr stone", "steins gate", "cyberpunk", "interstellar", "ghost in the shell"],
      title: "The Fiction That Fueled the Builder",
      response: "Ankit draws creative fuel from stories centered around scientific curiosity, experimentation, and obsession with craft:\n\n• Iron Man: Prototyping and building solutions from raw scrap.\n• Dr. Stone: Rebuilding civilization step-by-step using first principles and chemistry.\n• Steins;Gate: The Future Gadget Lab mindset—relentless debugging and experimentation through repeated failures.\n• Cyberpunk: Edgerunners: High-stakes cyber-physical architecture and system performance.\n• Ghost in the Shell: Machine perception and the boundaries of synthetic cognition.\n• Interstellar: Solving existential challenges through physics, courage, and perseverance.",
      links: [
        { label: "View Inspiration Gallery", url: "#inspirations" }
      ]
    },
    {
      keywords: ["command palette", "shortcut", "hotkey", "ctrl+k", "cmd+k"],
      title: "Command Palette [⌘K / Ctrl+K]",
      response: "You can trigger the Iron Man-inspired HUD Command Palette at any time by pressing **Ctrl + K** (or **Cmd + K** on Mac), or clicking the **[⌘K]** button in the navigation header.\n\nIt allows instantaneous keyboard navigation to:\n• All Flagship Projects (HEDS, Vortex, PhishingGuard, ASL Translator)\n• The Origin Story Sequence\n• Inspiration Gallery\n• Technical Skills & Architecture\n• Resume & Contact Systems",
      links: []
    },
    {
      keywords: ["heds", "xerox", "print", "printing", "queue", "cups", "edge", "spool"],
      title: "HEDS — Hybrid Edge Distributed Print System",
      response: "HEDS is Ankit's featured distributed systems project. It solves campus print-shop congestion, USB malware, and document privacy leaks by decoupling file submission from physical execution.\n\nKey Engineering Highlights:\n• PostgreSQL transactional queueing using `SELECT FOR UPDATE SKIP LOCKED` to guarantee deterministic, race-free job claiming.\n• Outbound-only Python edge daemon on the shop network that leases jobs over HTTPS and drives physical printers via CUPS/IPP without opening inbound firewall ports.\n• Local SQLite queue (`local_queue.db`) on the edge machine so print spools survive process crashes.\n• Lease recovery with time-to-live timeouts and safety reconciliation (ambiguous hardware errors transition to RECONCILING rather than wasting paper with blind retries).\n• Automated headless document normalization to canonical A4 PDF streams.",
      links: [
        { label: "View HEDS Repository", url: "https://github.com/AnkitX0/HEDS-Hybrid-Edge-Distributed-Print-System" }
      ]
    },
    {
      keywords: ["vortex", "interview", "mock", "facemesh", "speech", "scoring", "rubric", "star"],
      title: "Vortex — AI Interview Intelligence Platform",
      response: "Vortex is an AI-assisted interview preparation platform designed by Ankit and team to simulate high-pressure technical and behavioral interviews.\n\nKey Highlights:\n• Dynamic question selector matching competencies from an 80+ question database across 4 modes (Practice, Technical, HR/Behavioral, Pressure Incident).\n• MediaPipe FaceMesh for non-verbal diagnostics (eye contact stability, blink rate) and Web Speech API for cadence (WPM, filler word detection).\n• Multi-dimensional rubric scoring (Structure, Technical Depth, Tradeoffs, STAR compliance, Resume Consistency).\n• 'Fix My Answer' engine refactoring weak candidate answers into structured STAR responses without fabricating fictional experience.\n• Built with React 19, Vite, FastAPI, and SQLite.",
      links: [
        { label: "View Vortex Repository", url: "https://github.com/AnkitX0/Interview_System" }
      ]
    },
    {
      keywords: ["phishing", "phishingguard", "extension", "security", "random forest", "url", "malicious", "classifier"],
      title: "PhishingGuard — AI Phishing Detection Extension",
      response: "PhishingGuard is a browser extension and machine learning backend for real-time URL risk assessment.\n\nTechnical Reality & Implementation:\n• Chrome Extension Manifest V3 paired with a FastAPI ML inference backend.\n• Benchmarked Random Forest, SVM, and XGBoost on the UCI Phishing Websites dataset (11,055 URLs, 30 features); Random Forest was selected based on performance and feature interpretability.\n• Evaluated false-positive tradeoffs (baseline ~96.9% accuracy, ~4.0% FPR; honestly acknowledges that target <0.5% FPR was not achieved).\n• Real-time Tier-1 URL lexical feature extraction with deterministic explanations tied strictly to computed feature values.\n• K-Means (k=4) and PCA structural clustering on 4,897 phishing URLs.",
      links: [
        { label: "View PhishingGuard Repo", url: "https://github.com/AnkitX0/PhishingExtensiom" }
      ]
    },
    {
      keywords: ["asl", "sign language", "gesture", "hand", "mediapipe", "pytorch", "landmark"],
      title: "Real-Time ASL Alphabet Gesture Translator",
      response: "This project uses computer vision and deep learning to translate American Sign Language alphabet gestures into text and speech.\n\nImplementation:\n• MediaPipe Hands extracts 21 3D geometric landmarks per hand frame.\n• PyTorch Multilayer Perceptron (MLP) trained on hand landmark coordinate representations to classify alphabet letters.\n• OpenCV camera pipeline normalizes vectors with low latency.\n• Integrated speech synthesis to vocalize recognized signs.\n\nNote: The system translates isolated alphabet gestures; it does not claim full continuous sign language sentence translation.",
      links: [
        { label: "View HandGesture Repository", url: "https://github.com/RaghavXE/HandGesture" }
      ]
    },
    {
      keywords: ["agritrust", "farmer", "agriculture", "mandi", "escrow", "marketplace"],
      title: "AgriTrust — Agricultural Marketplace Prototype",
      response: "AgriTrust is a peer-to-peer agricultural marketplace prototype connecting farmers directly with buyers.\n\nFeatures:\n• Farmer and buyer portal workflows with simulated escrow protection.\n• Mandi market price radar visualization.\n• Delivery proof upload interface supporting photograph and GPS coordinate logging.\n• Note: Escrow and payments are functional prototype workflows for demonstration rather than live banking integrations.",
      links: [
        { label: "View AgriTrust Repository", url: "https://github.com/AnkitX0/AgriTrust" },
        { label: "Live Demo", url: "https://ankitx0.github.io/AgriTrust/" }
      ]
    },
    {
      keywords: ["face recognition", "attendance", "biometric"],
      title: "Face Recognition Attendance System",
      response: "An educational computer vision prototype built with Python and OpenCV.\n\nDetails:\n• Captures video streams, extracts facial bounding boxes, and compares embeddings against enrolled student templates.\n• Automatically logs timestamped attendance into persistent CSV storage with duplicate prevention.\n• Evaluated under indoor laboratory lighting conditions without unverified biometric claims."
    },
    {
      keywords: ["education", "degree", "college", "university", "parul", "btech", "study", "studies"],
      title: "Ankit's Education",
      response: "• B.Tech in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning (AI & ML).\n• Parul University, Vadodara, Gujarat (2024–2028).\n• Prior Education: Vishnu Bhagwaan Public School, Prayagraj, UP (Intermediate in Mathematics, Physics & Computer Science, 2023–2024).\n• Professional Training: Advanced Diploma in Java Programming (NexGen, 2022–2023) and Foundational Python Certification (Baghel, 2022)."
    },
    {
      keywords: ["skills", "tech stack", "languages", "technologies", "tools", "fastapi", "python", "java", "sql"],
      title: "Technical Skills & Stack",
      response: "Ankit's technical competencies across demonstrated implementations:\n\n• Programming: Python, Java (Core & OOP), JavaScript (ES6+), C\n• Backend & APIs: FastAPI, REST API Architecture, Pydantic, Object-Oriented Design\n• Databases & Systems: PostgreSQL (`SELECT FOR UPDATE SKIP LOCKED`), SQLite, Transactional Job Queues, Concurrency & Idempotency\n• AI / ML & Vision: PyTorch, MediaPipe (FaceMesh & Hand Landmarks), OpenCV, Scikit-Learn, NumPy, Pandas\n• Frontend: HTML5 Semantic Web, CSS3 Custom Properties & Responsive Design, React 19, Vite\n• Tools & Infra: Git/GitHub, Linux/Ubuntu, Docker, CUPS/IPP printer protocol, VS Code"
    },
    {
      keywords: ["achievements", "hackathon", "awards", "competition", "winner", "finalist"],
      title: "Achievements & Competitions",
      response: "Verified competitive records:\n\n🏆 Winner (1st Place): Smriti Inter-College Competition (2024)\n🎭 1st Place Champion: Intercollegiate Theater Championship (2023)\n🥈 Selected Finalist: Rajkot Hackathon (2024)\n🚀 Selected Finalist: Intelify Hackathon (2024)\n⚡ Selected Finalist: AITAM National Hackathon (2024)\n📖 Finalist / Participant: CDC Reading Program (2025)\n💻 Participant: Vadodara Hackathon 5.0 (2024)\n👥 Student Coordinator & Host: Gujarat's Flagship Tech Fest ('Projection')"
    },
    {
      keywords: ["certifications", "certificate", "diploma", "credentials", "hackerrank"],
      title: "Certifications & Credentials",
      response: "Verified credentials:\n\n1. Software Engineer Certification — HackerRank (Sept 2024)\n2. Advanced Java Programming Diploma — NexGen Computer Center (2022–2023)\n3. Python Certification — Baghel Computer Center (2022)\n4. AI & Innovation Summit — Workshop Certification (May 2023)\n5. CDC Global Knowledge Fest — Program Certificate (Jan 2025)\n6. TechFest Applied AI Challenge — Competition Honor (Nov 2024)\n\nAll certificates have verified viewable document links in the Certifications section."
    },
    {
      keywords: ["contact", "email", "phone", "reach", "hire", "collaborate", "message"],
      title: "Contact Ankit",
      response: "You can reach Ankit directly through:\n\n• Email: ankitsingh10a@gmail.com\n• LinkedIn: linkedin.com/in/ankit3k\n• GitHub: github.com/AnkitX0\n• Location: Vadodara, Gujarat, India\n\nYou can also use the contact panel at the bottom of this portfolio.",
      links: [
        { label: "Email Ankit", url: "mailto:ankitsingh10a@gmail.com" },
        { label: "LinkedIn Profile", url: "https://www.linkedin.com/in/ankit3k/" },
        { label: "GitHub Profile", url: "https://github.com/AnkitX0" }
      ]
    },
    {
      keywords: ["resume", "cv", "download resume"],
      title: "Ankit's Resume",
      response: "Ankit's latest verified resume details his B.Tech CSE (AI & ML) education, featured engineering projects (HEDS, Vortex, PhishingGuard, HandGesture), competitive hackathon achievements, and technical certifications.",
      links: [
        { label: "Download / View Resume PDF", url: "https://drive.google.com/file/d/1tW_c47UiU-iOrW0963Ve9JfuWRc8z1vk/view?usp=sharing" }
      ]
    },
    {
      keywords: ["github", "repos", "repositories", "code"],
      title: "GitHub Repositories",
      response: "Ankit's active public repositories on GitHub include:\n\n• HEDS — Hybrid Edge Distributed Print System\n• Interview_System — Vortex AI Interview Intelligence\n• PhishingExtensiom — PhishingGuard Chrome MV3 extension\n• AgriTrust — Direct farmer marketplace prototype\n• SignLanguageToVoiceConverter / HandGesture — ASL alphabet translator\n• Plus Java desktop applications (Vehicle Registration, School Management, Ticket Booking).",
      links: [
        { label: "Explore GitHub Profile", url: "https://github.com/AnkitX0" }
      ]
    },
    {
      keywords: ["leetcode", "dsa", "data structures", "algorithms", "problem solving", "rating", "competitive programming", "problems solved"],
      title: "LeetCode & Competitive Programming",
      response: "Ankit has solved **550+ LeetCode problems** with a peak contest rating of **1470**.\n\nKey Focus Areas:\n• Arrays, Two Pointers, Sliding Window, and Hash Maps\n• Binary Search, Divide-and-Conquer, and Greedy Strategies\n• Dynamic Programming (1D & 2D memoization)\n• Trees, Graphs, BFS/DFS traversals, and Graph algorithms\n• Optimizing runtime and memory complexity in Java and Python.",
      links: [
        { label: "View LeetCode Profile", url: "https://leetcode.com/u/ankit_3k/" }
      ]
    }
  ];

  // Quick prompt suggestions
  const quickPrompts = [
    "Origin Story (2016)",
    "What is HEDS?",
    "Tell me about Vortex",
    "LeetCode & DSA",
    "Technical skills",
    "Inspirations Gallery",
    "View Resume",
    "Contact Ankit"
  ];

  function matchQuery(query) {
    const clean = query.toLowerCase().trim();
    if (!clean) return null;

    // Greetings
    if (/^(hi|hello|hey|yo|greetings|good morning|good evening|good afternoon)/.test(clean)) {
      return {
        title: "JARVIS Protocol Online",
        response: "Greetings. I am VORTEX, Ankit Singh's engineering assistant. I can brief you on Ankit's 2016 Iron Man origin story, 550+ solved LeetCode problem solving, distributed systems (like HEDS), AI projects (Vortex, PhishingGuard, ASL Translator), and verified credentials.\n\nSelect a suggestion below or type your query:",
        links: []
      };
    }

    // Who is Ankit
    if (/(who is ankit|tell me about yourself|about ankit|introduce|background)/.test(clean)) {
      return {
        title: "About Ankit Singh",
        response: "Ankit Singh is an AI/ML engineering student at Parul University (2024–2028), based in Vadodara, Gujarat.\n\nHe has solved **550+ LeetCode problems (1470 rating)** and engineers intelligent systems from first principles. Notable projects include HEDS (a concurrency-safe distributed print queue), Vortex (multimodal AI interview evaluation), and PhishingGuard (browser URL risk classification).",
        links: [
          { label: "View Origin Story", url: "#origin-story" },
          { label: "Explore Projects", url: "#projects" }
        ]
      };
    }

    // Keyword matching
    for (const item of vortexKnowledge) {
      for (const kw of item.keywords) {
        if (clean.includes(kw)) {
          return item;
        }
      }
    }

    // Fallback response
    return {
      title: "Query Telemetry",
      response: "I could not find an exact match for that specific inquiry in my local telemetry database.\n\nYou can query me regarding:\n• Ankit's 2016 Origin Story & Iron Man inspiration\n• DSA & LeetCode performance (550+ solved, 1470 rating)\n• Featured Systems: HEDS, Vortex, PhishingGuard, ASL Translator\n• Tech Stack: Python, FastAPI, React 19, PyTorch, PostgreSQL, Java\n• Verified hackathon records, certifications, or direct contact details.",
      links: [
        { label: "View Origin Story", url: "#origin-story" },
        { label: "Explore Projects", url: "#projects" },
        { label: "Contact Ankit", url: "#contact" }
      ]
    };
  }

  let container = null;

  function initChatbot() {
    if (document.getElementById("vortex-chatbot-container")) return;

    // Create modern, unified VORTEX UI
    container = document.createElement("div");
    container.id = "vortex-chatbot-container";
    container.className = "vortex-container";
    container.setAttribute("role", "region");
    container.setAttribute("aria-label", "VORTEX Portfolio Assistant");

    // Floating launcher button with Arc Reactor aesthetics
    const launcher = document.createElement("button");
    launcher.id = "vortex-launcher";
    launcher.className = "vortex-launcher";
    launcher.setAttribute("aria-label", "Open VORTEX AI Assistant");
    launcher.setAttribute("aria-expanded", "false");
    launcher.innerHTML = `
      <div class="reactor-glow" aria-hidden="true"></div>
      <div class="reactor-ring" aria-hidden="true"></div>
      <i class="fas fa-atom" aria-hidden="true"></i>
      <span class="vortex-badge">AI // V2</span>
    `;

    // Chat window with WhatsApp-style UX
    const windowEl = document.createElement("div");
    windowEl.id = "vortex-window";
    windowEl.className = "vortex-window";
    windowEl.setAttribute("aria-hidden", "true");

    // Clean App Header with Assistant Identity and compact controls
    const header = document.createElement("div");
    header.className = "vortex-header";
    header.innerHTML = `
      <div class="vortex-header-info">
        <div class="vortex-avatar">
          <i class="fas fa-atom" aria-hidden="true"></i>
          <span class="vortex-online-dot" aria-hidden="true"></span>
        </div>
        <div class="vortex-header-titles">
          <h3 class="vortex-title">VORTEX // JARVIS</h3>
          <span class="vortex-status">AI Assistant • Online (Local Engine)</span>
        </div>
      </div>
      <div class="vortex-header-actions">
        <button id="vortex-clear-btn" class="vortex-icon-btn" title="Clear chat history" aria-label="Clear chat history">
          <i class="fas fa-trash-can" aria-hidden="true"></i>
        </button>
        <button id="vortex-close-btn" class="vortex-icon-btn" title="Close chat" aria-label="Close chat">
          <i class="fas fa-xmark" aria-hidden="true"></i>
        </button>
      </div>
    `;

    // Messages area (WhatsApp conversation stream)
    const messagesEl = document.createElement("div");
    messagesEl.id = "vortex-messages";
    messagesEl.className = "vortex-messages";
    messagesEl.setAttribute("aria-live", "polite");

    // Suggestions area (clean scroll pills with NO horizontal scrollbar)
    const chipsEl = document.createElement("div");
    chipsEl.id = "vortex-chips";
    chipsEl.className = "vortex-chips";

    quickPrompts.forEach(promptText => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "vortex-chip";
      chip.textContent = promptText;
      chip.addEventListener("click", () => {
        handleUserMessage(promptText);
      });
      chipsEl.appendChild(chip);
    });

    // Composer Input area with paper plane send button & Enter support
    const inputArea = document.createElement("form");
    inputArea.className = "vortex-input-area";
    inputArea.setAttribute("aria-label", "Send message to VORTEX");
    inputArea.innerHTML = `
      <div class="vortex-input-wrap">
        <textarea id="vortex-input" class="vortex-input" rows="1" placeholder="Type a message... (Enter to send)" aria-label="Type your message" autocomplete="off" spellcheck="false"></textarea>
      </div>
      <button type="submit" id="vortex-send-btn" class="vortex-send-btn" aria-label="Send message" title="Send message">
        <i class="fas fa-paper-plane" aria-hidden="true"></i>
      </button>
    `;

    windowEl.appendChild(header);
    windowEl.appendChild(messagesEl);
    windowEl.appendChild(chipsEl);
    windowEl.appendChild(inputArea);

    container.appendChild(launcher);
    container.appendChild(windowEl);
    document.body.appendChild(container);

    // Initial greeting
    addMessage("bot", "JARVIS PROTOCOL INITIALIZED.\n\nI am **VORTEX**, Ankit Singh's engineering assistant. Ask me about his 2016 Iron Man origin story, LeetCode competitive problem solving (550+ solved), distributed print system (HEDS), AI interview platform (Vortex), cybersecurity, or technical skills!");

    // State management
    let isOpen = false;

    function toggleChat(open) {
      isOpen = typeof open === "boolean" ? open : !isOpen;
      if (isOpen) {
        windowEl.classList.add("active");
        windowEl.setAttribute("aria-hidden", "false");
        launcher.setAttribute("aria-expanded", "true");
        launcher.classList.add("open");
        setTimeout(() => {
          const input = document.getElementById("vortex-input");
          if (input) input.focus();
        }, 150);
      } else {
        windowEl.classList.remove("active");
        windowEl.setAttribute("aria-hidden", "true");
        launcher.setAttribute("aria-expanded", "false");
        launcher.classList.remove("open");
      }
    }

    launcher.addEventListener("click", () => toggleChat());
    header.querySelector("#vortex-close-btn").addEventListener("click", () => toggleChat(false));

    // Clear chat with Undo capability
    let previousMessagesState = null;
    header.querySelector("#vortex-clear-btn").addEventListener("click", () => {
      if (messagesEl.children.length === 0) return;
      previousMessagesState = messagesEl.innerHTML;
      messagesEl.innerHTML = "";
      
      const notice = document.createElement("div");
      notice.className = "vortex-notice-pill";
      notice.innerHTML = `
        <span>Conversation cleared.</span>
        <button type="button" class="vortex-undo-btn" id="vortex-undo-btn">UNDO</button>
      `;
      messagesEl.appendChild(notice);

      const undoBtn = notice.querySelector("#vortex-undo-btn");
      if (undoBtn) {
        undoBtn.addEventListener("click", () => {
          if (previousMessagesState) {
            messagesEl.innerHTML = previousMessagesState;
            messagesEl.scrollTop = messagesEl.scrollHeight;
            previousMessagesState = null;
          }
        });
      }
    });

    // Escape key closes chat
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && isOpen) {
        toggleChat(false);
      }
    });

    // Composer textarea: Enter sends, Shift+Enter adds newline
    const chatInput = inputArea.querySelector("#vortex-input");
    if (chatInput) {
      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          const text = chatInput.value.trim();
          if (!text) return;
          chatInput.value = "";
          handleUserMessage(text);
        }
      });
    }

    inputArea.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!chatInput) return;
      const text = chatInput.value.trim();
      if (!text) return;
      chatInput.value = "";
      handleUserMessage(text);
    });

    async function handleUserMessage(userText) {
      addMessage("user", userText);

      // Typing indicator bubble
      const typingEl = document.createElement("div");
      typingEl.className = "vortex-msg-wrapper vortex-msg-bot typing-indicator";
      typingEl.innerHTML = `
        <div class="vortex-msg-bubble">
          <div class="vortex-typing-dots">
            <span class="vortex-dot"></span>
            <span class="vortex-dot"></span>
            <span class="vortex-dot"></span>
          </div>
        </div>
      `;
      messagesEl.appendChild(typingEl);
      messagesEl.scrollTop = messagesEl.scrollHeight;

      // Small natural delay
      await new Promise(res => setTimeout(res, 280));

      if (typingEl.parentNode) {
        typingEl.remove();
      }

      // Check for optional server-side backend endpoint
      if (window.VORTEX_BACKEND_URL) {
        try {
          const response = await fetch(window.VORTEX_BACKEND_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userText })
          });
          if (response.ok) {
            const data = await response.json();
            if (data && data.reply) {
              addMessage("bot", data.reply, data.links);
              return;
            }
          }
        } catch (err) {
          console.warn("Vortex backend endpoint unavailable, falling back to local engine:", err);
        }
      }

      // Local intelligent response
      const match = matchQuery(userText);
      if (match) {
        addMessage("bot", match.response, match.links);
      }
    }

    /**
     * Safely render message without vulnerable innerHTML unescaped text injection.
     */
    function addMessage(sender, text, links) {
      const msgWrapper = document.createElement("div");
      msgWrapper.className = `vortex-msg-wrapper vortex-msg-${sender}`;

      const bubble = document.createElement("div");
      bubble.className = "vortex-msg-bubble";

      // Parse bolding and line breaks safely
      const paragraphs = text.split("\n\n");
      paragraphs.forEach((pText, idx) => {
        const p = document.createElement("p");
        p.className = "vortex-p";

        // Parse lines with bullet points
        const lines = pText.split("\n");
        lines.forEach((line, lineIdx) => {
          if (lineIdx > 0) {
            p.appendChild(document.createElement("br"));
          }

          // Check if line is bullet point
          let content = line;
          if (content.startsWith("• ") || content.startsWith("- ")) {
            content = content.substring(2);
            const bulletSpan = document.createElement("span");
            bulletSpan.className = "vortex-bullet";
            bulletSpan.textContent = "• ";
            p.appendChild(bulletSpan);
          }

          // Safe bold and backtick code text rendering
          const parts = content.split(/(\*\*.*?\*\*|`.*?`)/g);
          parts.forEach(part => {
            if (part.startsWith("**") && part.endsWith("**")) {
              const strong = document.createElement("strong");
              strong.textContent = part.slice(2, -2);
              p.appendChild(strong);
            } else if (part.startsWith("`") && part.endsWith("`")) {
              const code = document.createElement("code");
              code.className = "vortex-code";
              code.textContent = part.slice(1, -1);
              p.appendChild(code);
            } else if (part) {
              p.appendChild(document.createTextNode(part));
            }
          });
        });

        bubble.appendChild(p);
      });

      // Append safe action links if present
      if (Array.isArray(links) && links.length > 0) {
        const linksContainer = document.createElement("div");
        linksContainer.className = "vortex-links";
        links.forEach(linkObj => {
          const a = document.createElement("a");
          a.className = "vortex-link-btn";
          a.textContent = linkObj.label;
          a.href = linkObj.url;
          if (linkObj.url.startsWith("http")) {
            a.target = "_blank";
            a.rel = "noopener noreferrer";
          }
          linksContainer.appendChild(a);
        });
        bubble.appendChild(linksContainer);
      }

      // Add WhatsApp-style timestamp
      const timeSpan = document.createElement("span");
      timeSpan.className = "vortex-msg-time";
      const now = new Date();
      timeSpan.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      bubble.appendChild(timeSpan);

      msgWrapper.appendChild(bubble);
      messagesEl.appendChild(msgWrapper);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }
  }

  function updateAssistantTheme(theme) {
    const isWayne = theme === "wayne";
    const titleEl = document.querySelector(".vortex-title");
    const avatarIcon = document.querySelector(".vortex-avatar i");
    const badgeEl = document.querySelector(".vortex-badge");
    const launcherIcon = document.querySelector("#vortex-launcher i");

    if (titleEl) {
      titleEl.textContent = isWayne ? "VORTEX // BATCOMPUTER" : "VORTEX // JARVIS";
    }
    if (avatarIcon) {
      avatarIcon.className = isWayne ? "fas fa-shield-halved" : "fas fa-atom";
    }
    if (launcherIcon) {
      launcherIcon.className = isWayne ? "fas fa-shield-halved" : "fas fa-atom";
    }
    if (badgeEl) {
      badgeEl.textContent = isWayne ? "BAT // V2" : "AI // V2";
    }
  }

  // Expose on global
  window.VortexChatbot = {
    init: initChatbot,
    matchQuery: matchQuery,
    updateTheme: updateAssistantTheme,
    open: () => {
      const w = document.getElementById("vortex-window");
      const l = document.getElementById("vortex-launcher");
      if (w && !w.classList.contains("active") && l) l.click();
    },
    close: () => {
      const c = document.getElementById("vortex-close-btn");
      if (c) c.click();
    }
  };

  // Initialize on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initChatbot);
  } else {
    initChatbot();
  }
})();
