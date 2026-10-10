/**
 * Verified achievements and competitive experience records for Ankit Singh.
 * Clearly preserves exact distinctions: Winner, Finalist, Selected Finalist, Participant.
 */
const achievementsData = [
  {
    id: "smriti-winner",
    title: "Smriti Inter-College Competition",
    role: "Winner (1st Place)",
    tier: "winner",
    year: "2024",
    organization: "Smriti Technical Symposium",
    category: "Technical Competition",
    description: "Secured 1st place in the inter-collegiate technical competition presenting software solutions evaluated on architectural design, UI/UX, and technical execution.",
    icon: "fas fa-trophy"
  },
  {
    id: "theater-winner",
    title: "Intercollegiate Theater Championship",
    role: "1st Place Champion",
    tier: "winner",
    year: "2023",
    organization: "Intercollegiate Cultural Forum",
    category: "Cultural & Leadership",
    description: "Awarded first place in intercollegiate competitive dramatics, demonstrating stage presence, leadership, communication, team coordination, and creative storytelling.",
    icon: "fas fa-theater-masks"
  },
  {
    id: "rajkot-hackathon",
    title: "Rajkot Hackathon",
    role: "Selected Finalist",
    tier: "finalist",
    year: "2024",
    organization: "Regional Engineering Council",
    category: "Hackathon",
    description: "Qualified as a finalist among regional engineering teams by conceptualizing and prototyping real-world software solutions under strict time constraints.",
    icon: "fas fa-medal"
  },
  {
    id: "intelify-finalist",
    title: "Intelify Hackathon",
    role: "Selected Finalist",
    tier: "finalist",
    year: "2024",
    organization: "Intelify Technical Body",
    category: "AI & Innovation Hackathon",
    description: "Shortlisted into the final evaluation round for demonstrating technical architecture and machine learning prototype feasibility.",
    icon: "fas fa-star"
  },
  {
    id: "aitam-finalist",
    title: "AITAM National Hackathon",
    role: "Selected Finalist",
    tier: "finalist",
    year: "2024",
    organization: "AITAM National Tech Board",
    category: "National Hackathon",
    description: "Recognized as a national finalist team after competitive technical screening and prototype evaluation.",
    icon: "fas fa-award"
  },
  {
    id: "cdc-reading",
    title: "CDC Reading Program",
    role: "Finalist / Participant",
    tier: "finalist",
    year: "2025",
    organization: "CDC Reading & Knowledge Initiative",
    category: "Academic & Tech Symposium",
    description: "Selected participant and finalist in the global knowledge and technological literacy presentation sessions.",
    icon: "fas fa-book-reader",
    linkUrl: "https://drive.google.com/file/d/1arHtFavMGhgZ-J4LHQV6D8e-McOZT7DJ/view?usp=drive_link"
  },
  {
    id: "vadodara-hackathon",
    title: "Vadodara Hackathon 5.0",
    role: "Participant",
    tier: "participant",
    year: "2024",
    organization: "Vadodara Innovation Council",
    category: "Regional Hackathon",
    description: "Participated in the 36-hour continuous software engineering sprint solving regional community problems with modern web applications.",
    icon: "fas fa-laptop-code"
  },
  {
    id: "techfest-coordinator",
    title: "Gujarat's Largest Tech Fest ('Projection')",
    role: "Student Coordinator & Host",
    tier: "leadership",
    year: "2023 – Present",
    organization: "Parul University Student Body",
    category: "Student Leadership",
    description: "Organized technical tracks, speaker coordination, participant engagement, and logistics for Parul University's flagship technical festival.",
    icon: "fas fa-users-cog"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = achievementsData;
}
