/**
 * Verified certifications and training records for Ankit Singh.
 * Distinguishes between formal diplomas, certifications, workshops, and participation.
 */
const certificationsData = [
  {
    id: "hackerrank-se",
    title: "Software Engineer Certification",
    type: "Professional Assessment",
    issuer: "HackerRank",
    date: "September 2024",
    icon: "fas fa-code",
    frontText: "Standardized assessment validating algorithmic problem-solving, data structures, and core software engineering concepts.",
    backText: "Verified competency in algorithms, data structures, and foundational problem solving.",
    verifyUrl: "https://drive.google.com/file/d/1gkoUk6QE1hmeon-0GwP7-ToBEtHL6H5M/view?usp=sharing"
  },
  {
    id: "java-diploma",
    title: "Java Programming Diploma",
    type: "Technical Diploma",
    issuer: "NexGen Computer Center",
    date: "November 2022 – December 2023",
    icon: "fab fa-java",
    frontText: "Comprehensive curriculum covering Java syntax, OOP architecture, desktop GUIs, and database connectivity.",
    backText: "Completed advanced modular coursework in object-oriented development and desktop applications.",
    verifyUrl: "https://drive.google.com/file/d/1JLunCq1MWRyU9ttmpwMrMQHKpGC-8DQY/view?usp=drive_link"
  },
  {
    id: "python-cert",
    title: "Python Certification",
    type: "Certification Course",
    issuer: "Baghel Computer Center",
    date: "June 2022 – August 2022",
    icon: "fab fa-python",
    frontText: "Fundamental training in Python language constructs, automation scripting, and computational problem-solving.",
    backText: "Mastered core Python programming, data structures, and basic scripting automation.",
    verifyUrl: "https://drive.google.com/file/d/1xdsM1nGG-9C2OdMuK-KQnvTyqsoitkTd/view?usp=drive_link"
  },
  {
    id: "ai-workshop",
    title: "AI & Innovation Summit",
    type: "Technical Workshop",
    issuer: "AI Innovation Summit",
    date: "May 2023",
    icon: "fas fa-robot",
    frontText: "Intensive workshop exploring applied machine learning workflows, artificial intelligence paradigms, and real-world architectures.",
    backText: "Explored machine learning pipelines, practical neural networks, and industry use-cases.",
    verifyUrl: "https://drive.google.com/file/d/1tlaSn9IqT16J0r_2DVbP_iB6n0pZBpym/view?usp=drive_link"
  },
  {
    id: "cdc-funfest",
    title: "CDC Global Knowledge Fest",
    type: "Academic Program",
    issuer: "CDC Reading Program",
    date: "January 2025",
    icon: "fas fa-book",
    frontText: "International reading and collaborative knowledge-sharing symposium on emerging technology and literacy.",
    backText: "Participated in global student exchange and knowledge presentation rounds.",
    verifyUrl: "https://drive.google.com/file/d/1arHtFavMGhgZ-J4LHQV6D8e-McOZT7DJ/view?usp=drive_link"
  },
  {
    id: "techfest-ai",
    title: "TechFest Innovation Challenge",
    type: "Competition Honor",
    issuer: "TechFest Technical Body",
    date: "November 2024",
    icon: "fas fa-trophy",
    frontText: "Competitive technical hackathon presenting an applied AI prototype solution evaluated on feasibility and implementation.",
    backText: "Recognized for prototyping an end-to-end applied AI software solution under competition time limits.",
    verifyUrl: "https://drive.google.com/file/d/1arHtFavMGhgZ-J4LHQV6D8e-McOZT7DJ/view?usp=drive_link"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = certificationsData;
}
