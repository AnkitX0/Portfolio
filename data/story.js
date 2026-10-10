/**
 * Origin Story Data Configuration
 * The narrative journey from watching Iron Man in 2016 to engineering real-world AI and distributed systems.
 */
const originStoryData = {
  header: {
    tag: "CHRONICLES // 2016 TO PRESENT",
    title: "HOW AN INVENTOR'S WORKSHOP SPARKED CODE.",
    subtitle: "How watching an engineer build an impossible machine in 2016 ignited an obsession with computer science, artificial intelligence, and building real systems from first principles."
  },
  
  timeline: [
    { year: "2016", label: "THE SPARK", detail: "Fascination with invention" },
    { year: "2019", label: "CURIOSITY", detail: "Disassembling logic & computers" },
    { year: "2022", label: "ENGINEERING", detail: "Data structures, Java, Python" },
    { year: "2024", label: "AI/ML", detail: "Parul University B.Tech & Models" },
    { year: "NOW", label: "BUILDING", detail: "Distributed & Intelligent Systems" }
  ],

  scenes: [
    {
      id: "scene-01",
      number: "LOG 01",
      badge: "THE SPARK // 2016",
      title: "The Workshop in the Cave",
      quote: "It wasn't the high-tech suit that captivated me. It was the engineer who built it from scrap.",
      content: "In 2016, I watched Iron Man for the first time. Most kids saw superheroes flying through the sky. What locked into my brain was a man trapped in a cave with scrap metal, a welding torch, and an impossible deadline—who looked at physical laws, understood how electricity, chemistry, and mechanics connected, and built a miniaturized arc reactor out of nothing.\n\nThat was the moment I realized: engineering isn't a job title. It's the ability to look at an intractable problem and build a tangible solution with your own hands.",
      accent: "cyan",
      telemetry: {
        timestamp: "2016.08.14",
        status: "CORE INSPIRATION INITIALIZED",
        parameter: "FASCINATION_INDEX: 100%"
      }
    },
    {
      id: "scene-02",
      number: "LOG 02",
      badge: "THE CURIOSITY // 2019",
      title: "The Engineering Mindset",
      quote: "A place where ideas don't stay theories—they become working prototypes.",
      content: "The fictional workshop represented something I wanted to experience in real life. I became obsessed with how complex systems are engineered: taking discrete components, wiring them together, watching them fail, diagnosing the root cause, and recalibrating the architecture until it works.\n\nI began tearing into computers, automating small desktop tasks, exploring logic gates, and writing my first lines of code. The thrill wasn't just getting a clean compile—it was realizing that software gives anyone the power to construct an entire laboratory on a laptop keyboard.",
      accent: "amber",
      telemetry: {
        timestamp: "2019 – 2021",
        status: "PROTOTYPING MINDSET ENGAGED",
        parameter: "ITERATION_CYCLES: CONTINUOUS"
      }
    },
    {
      id: "scene-03",
      number: "LOG 03",
      badge: "SYNTHETIC COGNITION // 2022",
      title: "JARVIS & Synthetic Intelligence",
      quote: "From sci-fi dream to real computer vision, speech models, and distributed logic.",
      content: "JARVIS made the concept of personal artificial intelligence tangible. But as I grew older, I realized the critical distinction: JARVIS is movie magic, but machine perception, natural language processing, computer vision, and distributed event coordination are real mathematical and software disciplines.\n\nInstead of daydreaming about a fictional Jarvis, I wanted to understand the actual math and engineering: how neural networks extract 3D skeletal landmarks from webcam frames, how speech cadence is timed, and how backend queues handle concurrent transactions without race conditions.",
      accent: "cyan",
      telemetry: {
        timestamp: "2022 – 2023",
        status: "AI/ML DISCIPLINE SELECTED",
        parameter: "FOCUS: PERCEPTION + SYSTEMS"
      }
    },
    {
      id: "scene-04",
      number: "LOG 04",
      badge: "ALGORITHMS TO SYSTEMS // 2024",
      title: "From Curiosity to Code",
      quote: "Turning the screen off and writing the actual production algorithms.",
      content: "That obsession carried me to Parul University for a B.Tech in Computer Science (Artificial Intelligence & Machine Learning). I stopped being an observer and started engineering practical systems:\n\n• HEDS: Solving physical campus print queue congestion using PostgreSQL row-level locks (FOR UPDATE SKIP LOCKED) and an outbound edge daemon.\n• Vortex: Engineering mock interview intelligence with MediaPipe FaceMesh, speech cadence analytics, and STAR answer refactoring.\n• PhishingGuard: Training supervised Random Forest classifiers across 30 URL features to flag malicious websites in real time.\n• ASL Translator: Extracting 21 3D hand coordinates via MediaPipe and classifying alphabet gestures with a custom PyTorch MLP.",
      accent: "amber",
      telemetry: {
        timestamp: "2024 – PRESENT",
        status: "ACTIVE PROTOCOL: B.TECH CSE (AI/ML)",
        parameter: "SYSTEMS_DEPLOYED: MULTI-DOMAIN"
      }
    },
    {
      id: "scene-05",
      number: "LOG 05",
      badge: "THE MISSION // FUTURE",
      title: "The Mission",
      quote: "I know I can't build a JARVIS overnight. That's exactly why I started building.",
      content: "Mastering software engineering and artificial intelligence takes years of relentless debugging, mathematical grounding, architecture design, and production discipline. There are no shortcuts.\n\nEvery distributed queue I lease, every neural network I train, and every hackathon I compete in is a brick laid toward building systems that genuinely empower people. One experiment. One system. One problem solved at a time.",
      accent: "cyan",
      telemetry: {
        timestamp: "2026 & BEYOND",
        status: "CORE PROTOCOL: UNSTOPPABLE BUILD",
        parameter: "TRAJECTORY: ADVANCED SYSTEMS"
      }
    }
  ],

  closingStatement: {
    lead: "I KNOW I CAN'T BUILD A JARVIS OVERNIGHT.",
    punchline: "THAT'S EXACTLY WHY I STARTED BUILDING.",
    supporting: "One experiment. One system. One problem solved at a time."
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = originStoryData;
}
