/**
 * Professional profile configuration for Ankit Singh.
 * Centralized, authoritative single source of truth for portfolio identity,
 * competitive programming metrics, and engineering narrative.
 */
const profileData = {
  name: "Ankit Singh",
  role: "AI/ML · SOFTWARE ENGINEERING · SYSTEMS",
  specialization: "AI/ML Systems & Backend Engineering",
  headline: "I want to build the things I once thought were impossible.",
  heroSubtext: "I'm an AI/ML student who enjoys turning ambitious ideas into working systems, from computer vision and intelligent applications to distributed software architecture.",
  avatar: "images/jprofile.jpeg",
  
  about: {
    headline: "Curious enough to imagine it. Stubborn enough to build it.",
    paragraphs: [
      "I got interested in technology after watching Iron Man in 2016. The idea that someone could understand how things work, experiment, and turn an ambitious idea into a real system stayed with me.",
      "That curiosity eventually led me to computer science and AI/ML. Now I build projects to understand the engineering underneath the interface, from backend architecture and distributed queues to computer vision and intelligent applications.",
      "I'm still learning. The goal is to keep building systems that make me better at the craft."
    ],
    interactiveHighlights: [
      {
        id: "inventor",
        title: "THE INVENTOR",
        subtitle: "Building & Experimentation",
        icon: "fas fa-atom",
        desc: "Turning ambitious ideas and perception models into working prototypes from scratch through rapid, hands-on iteration."
      },
      {
        id: "engineer",
        title: "THE ENGINEER",
        subtitle: "Architecture & Problem-Solving",
        icon: "fas fa-microchip",
        desc: "Designing distributed queue systems, fault-tolerant edge pipelines, and rigorous algorithmic problem-solving."
      },
      {
        id: "strategist",
        title: "THE STRATEGIST",
        subtitle: "Discipline & Long-Term Mastery",
        icon: "fas fa-shield-halved",
        desc: "Consistent competitive programming practice (550+ LeetCode), tactical preparation, and compounding technical depth."
      }
    ],
    milestones: [
      { step: "2016", label: "The Spark", desc: "Curiosity ignited by engineering from first principles", link: "#origin-story" },
      { step: "CS", label: "Computer Science", desc: "Core algorithms, data structures & systems foundations", link: "#skills" },
      { step: "AI/ML", label: "Machine Learning", desc: "Computer vision, PyTorch, MediaPipe & applied intelligence", link: "#projects" },
      { step: "BUILD", label: "Real Systems", desc: "Architecting HEDS, Vortex, and resilient software", link: "#projects" }
    ],
    highlights: [
      { icon: "fas fa-graduation-cap", label: "Program", value: "B.Tech CSE (AI & ML)" },
      { icon: "fas fa-university", label: "Institution", value: "Parul University (2024–2028)" },
      { icon: "fas fa-code", label: "LeetCode Profile", value: "550+ Solved (1470 Rating)", isLink: true, href: "https://leetcode.com/u/ankit_3k/" },
      { icon: "fas fa-microchip", label: "Core Focus", value: "AI/ML & Distributed Systems" },
      { icon: "fas fa-envelope", label: "Email", value: "ankitsingh10a@gmail.com", isLink: true, href: "mailto:ankitsingh10a@gmail.com" },
      { icon: "fab fa-github", label: "GitHub", value: "github.com/AnkitX0", isLink: true, href: "https://github.com/AnkitX0" }
    ]
  },

  contact: {
    email: "ankitsingh10a@gmail.com",
    phone: "+91 9574816676",
    location: "Vadodara, Gujarat, India",
    github: "https://github.com/AnkitX0",
    linkedin: "https://www.linkedin.com/in/ankit3k/",
    leetcode: "https://leetcode.com/u/ankit_3k/",
    resumeUrl: "https://drive.google.com/file/d/1tW_c47UiU-iOrW0963Ve9JfuWRc8z1vk/view?usp=sharing",
    portfolioUrl: "https://ankitx0.github.io/Portfolio/"
  },

  // Competitive Programming & Verified Engineering Metrics
  stats: [
    {
      numericValue: 550,
      value: "550+",
      label: "LeetCode Problems",
      sublabel: "Data Structures & Algos",
      icon: "fas fa-code",
      link: "https://leetcode.com/u/ankit_3k/"
    },
    {
      numericValue: 1470,
      value: "1470",
      label: "LeetCode Rating",
      sublabel: "Contest Performance",
      icon: "fas fa-chart-line",
      link: "https://leetcode.com/u/ankit_3k/"
    },
    {
      numericValue: 6,
      value: "6+",
      label: "Flagship Systems",
      sublabel: "Verified Prototypes",
      icon: "fas fa-network-wired",
      link: "#projects"
    },
    {
      numericValue: 3,
      value: "3+",
      label: "Hackathon Finals",
      sublabel: "Competitions & Wins",
      icon: "fas fa-trophy",
      link: "#achievements"
    }
  ],

  hudStatus: {
    stark: {
      system: "JARVIS PROTOCOL // ONLINE",
      mode: "INVENTOR // ACTIVE",
      telemetry: "LATENCY: 12ms // ARC REACTOR NOMINAL",
      location: "VADODARA, GUJARAT, IN [22.3072° N, 73.1812° E]"
    },
    wayne: {
      system: "BATCOMPUTER MAINFRAME // SECURE",
      mode: "STRATEGIST // SURVEILLANCE & BUILD",
      telemetry: "TACTICAL CORES: 100% // ENCRYPTION ACTIVE",
      location: "VADODARA, GUJARAT, IN [22.3072° N, 73.1812° E]"
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = profileData;
}
