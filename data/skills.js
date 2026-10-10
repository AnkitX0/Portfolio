/**
 * Technical skills dataset organized by engineering domain.
 * Focuses on concrete capabilities and demonstrated work rather than fake percentage progress bars.
 */
const skillsData = [
  {
    category: "Programming Languages",
    icon: "fas fa-code",
    skills: [
      { name: "Python", icon: "fab fa-python", description: "Primary language for AI/ML pipelines, FastAPI services, automation, and computer vision." },
      { name: "Java", icon: "fab fa-java", description: "Object-oriented programming, design patterns, desktop systems, and algorithmic problem solving." },
      { name: "JavaScript", icon: "fab fa-js", description: "Modern ES6+ web development, asynchronous event handling, and DOM architecture." },
      { name: "C", icon: "fas fa-microchip", description: "Foundational systems programming, memory model concepts, and algorithm efficiency." }
    ]
  },
  {
    category: "Backend & API Engineering",
    icon: "fas fa-server",
    skills: [
      { name: "FastAPI", icon: "fas fa-bolt", description: "High-performance asynchronous Python REST APIs with automatic OpenAPI schema generation." },
      { name: "REST API Design", icon: "fas fa-network-wired", description: "Modular API routes, strict request/response validation, error boundaries, and idempotency." },
      { name: "Pydantic & Validation", icon: "fas fa-shield-alt", description: "Schema enforcement, type validation, and data serialization across service boundaries." },
      { name: "Object-Oriented Design", icon: "fas fa-cubes", description: "Clean class hierarchies, encapsulation, and modular architectural separation in Java and Python." }
    ]
  },
  {
    category: "Databases & Distributed Systems",
    icon: "fas fa-database",
    skills: [
      { name: "PostgreSQL", icon: "fas fa-database", description: "Relational modeling, transaction isolation, and row-level concurrency with SELECT FOR UPDATE SKIP LOCKED." },
      { name: "SQLite", icon: "fas fa-file-alt", description: "Durable embedded databases for local edge queues, test persistence, and lightweight storage." },
      { name: "Transactional Queues", icon: "fas fa-tasks", description: "Reliable job queue design, lease-based task dispatching, and time-to-live expiration." },
      { name: "Concurrency & Idempotency", icon: "fas fa-sync-alt", description: "Duplicate prevention, atomic state transitions, and distributed failure recovery state machines." }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "fas fa-brain",
    skills: [
      { name: "PyTorch", icon: "fas fa-fire", description: "Neural network training and inference pipelines for MLP gesture classification." },
      { name: "MediaPipe", icon: "fas fa-hand-paper", description: "Skeletal hand landmark detection (21 3D points) and FaceMesh facial diagnostic cues." },
      { name: "Computer Vision (OpenCV)", icon: "fas fa-camera", description: "Camera stream capture, frame normalization, facial recognition, and real-time bounding box overlays." },
      { name: "Supervised ML (Scikit-Learn)", icon: "fas fa-chart-line", description: "Random Forest, SVM, and XGBoost classification benchmarking, feature importances, and clustering (K-Means, PCA)." }
    ]
  },
  {
    category: "Frontend Development",
    icon: "fas fa-laptop-code",
    skills: [
      { name: "HTML5 & Semantic Web", icon: "fab fa-html5", description: "Accessible markup, semantic document hierarchy, ARIA attributes, and SEO optimization." },
      { name: "CSS3 & Responsive Design", icon: "fab fa-css3-alt", description: "Custom properties design systems, Flexbox, Grid, glassmorphism, and media queries." },
      { name: "React & Vite", icon: "fab fa-react", description: "Component-driven frontend architectures, hooks, state management, and fast builds in full-stack projects." },
      { name: "UI/UX & Accessibility", icon: "fas fa-universal-access", description: "Keyboard navigation, dark/light theme persistence, focus styling, and reduced-motion compliance." }
    ]
  },
  {
    category: "Tools & Infrastructure",
    icon: "fas fa-tools",
    skills: [
      { name: "Git & GitHub", icon: "fab fa-github", description: "Version control, branching workflows, pull requests, and repository maintenance." },
      { name: "Linux & Ubuntu", icon: "fab fa-ubuntu", description: "Command-line environments, Bash scripting, system services, and local server administration." },
      { name: "CUPS / IPP Protocol", icon: "fas fa-print", description: "Network printer communication protocols, printer queues, and hardware spooling abstraction." },
      { name: "VS Code & Tooling", icon: "fas fa-terminal", description: "Integrated development, virtual environments, debugging, and code quality workflows." }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = skillsData;
}
