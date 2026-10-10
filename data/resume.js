/**
 * Resume timeline milestones for Ankit Singh.
 * Represents verified academic trajectory, engineering milestones, and student leadership.
 */
const resumeData = {
  downloadUrl: "https://drive.google.com/file/d/1tW_c47UiU-iOrW0963Ve9JfuWRc8z1vk/view?usp=sharing",
  
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering (AI & ML)",
      institution: "Parul University, Vadodara, Gujarat",
      period: "2024 – 2028 (In Progress)",
      details: [
        "Specializing in Artificial Intelligence and Machine Learning with core engineering foundations in Data Structures, Algorithms, and System Architecture.",
        "Hands-on coursework in Object-Oriented Programming (Java), Python scripting, Relational Databases, and Computer Vision.",
        "Active contributor to campus technical teams and hackathon developer squads."
      ]
    },
    {
      degree: "Higher Secondary Certificate (Intermediate)",
      institution: "Vishnu Bhagwaan Public School, Prayagraj, UP",
      period: "2023 – 2024",
      details: [
        "Rigorous coursework in Mathematics, Physics, and Computer Science.",
        "Built early programming fundamentals in Java and Python automation scripts."
      ]
    },
    {
      degree: "Diploma in Java Programming",
      institution: "NexGen Computer Center",
      period: "2022 – 2023",
      details: [
        "Completed structured modular training in Java OOP, desktop UI programming (Swing/AWT), and database management.",
        "Built administrative desktop systems including vehicle registration and library tools."
      ]
    },
    {
      degree: "Foundational Python Certification",
      institution: "Baghel Computer Center",
      period: "2022",
      details: [
        "Learned core algorithmic logic, string manipulation, file handling, and basic data automation."
      ]
    }
  ],

  experience: [
    {
      role: "Lead Software Architect & Developer — HEDS Project",
      organization: "Autonomous Engineering Initiative",
      period: "2025 – Present",
      details: [
        "Designed and implemented a cloud-to-edge print orchestration architecture to eliminate print-shop queues and counter privacy leaks.",
        "Engineered transactional PostgreSQL job queueing utilizing SELECT FOR UPDATE SKIP LOCKED for deterministic concurrency without race conditions.",
        "Created an outbound-only Python edge agent with local SQLite spool persistence and CUPS/IPP printer hardware integration."
      ]
    },
    {
      role: "Full-Stack & ML Engineer — Vortex Interview Intelligence",
      organization: "Developer Team Project",
      period: "2025 – Present",
      details: [
        "Built an end-to-end interview simulation platform with FastAPI, React 19, and Vite.",
        "Integrated MediaPipe FaceMesh computer vision diagnostics and Web Speech API speech cadence analysis.",
        "Formulated a 5-dimension rubric scoring engine and STAR framework answer improvement pipeline."
      ]
    },
    {
      role: "Security & ML Researcher — PhishingGuard Extension",
      organization: "Academic Cybersecurity & ML Project",
      period: "2024 – 2025",
      details: [
        "Developed a Chrome Extension (Manifest V3) and FastAPI backend evaluating URL phishing indicators.",
        "Trained and evaluated Random Forest, SVM, and XGBoost on 11,055 URLs, analyzing real false-positive trade-offs.",
        "Engineered real-time 30-feature vector extraction and deterministic explanation rules."
      ]
    },
    {
      role: "Student Coordinator & Event Organizer",
      organization: "Projection Tech Fest, Parul University",
      period: "2024 – Present",
      details: [
        "Coordinated technical events, coding hackathons, speaker hospitality, and participant workflow for Gujarat's major university tech fest.",
        "Managed operational logistics and stage coordination for student developer tracks."
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = resumeData;
}
