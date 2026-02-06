document.addEventListener("DOMContentLoaded",function(){let e=e=>document.querySelector(e),t=e=>document.querySelectorAll(e),n=e(".stat-item h2");if(n){let l=parseInt(localStorage.getItem("visitorCount")||"0")+1;localStorage.setItem("visitorCount",l),n.textContent=l.toLocaleString()}let a=e("#contactForm");if(a){let s=a.querySelector(".btn"),o=["name","email","subject","message"],i=()=>{let t=o.every(t=>e(`#${t}`).value.trim());return s.disabled=!t,t};a.addEventListener("input",i),window.sendEmail=()=>{if(!i()){alert("Please fill in all fields before sending.");return}let[t,n,l,r]=o.map(t=>e(`#${t}`).value.trim()),c=`Hello Ankit,

You have received a new message from your portfolio contact form:

🔹 Name: ${t}
🔹 Email: ${n}
🔹 Subject: ${l}

📩 Message:
${r}

Best Regards,
${t}`;window.location.href=`mailto:ankitsingh10a@gmail.com?subject=${encodeURIComponent(l)}&body=${encodeURIComponent(c)}`,a.reset(),s.disabled=!0},i()}let r=window.scrollY,c=window.scrollY,d=!1;function $(){c+=(r-c)*.1,window.scrollTo(0,c),Math.abs(r-c)>.5?requestAnimationFrame($):d=!1}window.addEventListener("wheel",e=>{e.preventDefault(),r+=2*e.deltaY,r=Math.max(0,Math.min(r,document.body.scrollHeight-window.innerHeight)),d||(d=!0,requestAnimationFrame($))},{passive:!1});let u=t("section"),m=t(".sidebar nav ul li a");if(u.length>0&&m.length>0){let v=()=>{let e="",t=window.scrollY+100;u.forEach(n=>{let l=n.offsetTop,a=n.offsetHeight;t>=l&&t<l+a&&(e=n.id)}),m.forEach(t=>{let n=t.getAttribute("href").substring(1);t.classList.toggle("active",n===e)})};window.addEventListener("scroll",v),v(),m.forEach(t=>{t.addEventListener("click",n=>{n.preventDefault();let l=e(t.getAttribute("href"));l&&(r=l.offsetTop,d||(d=!0,requestAnimationFrame($)))})})}let g=e(".menu-toggle"),f=e(".sidebar");g&&f&&(g.addEventListener("click",()=>{f.classList.toggle("active"),g.classList.toggle("active")}),document.addEventListener("click",e=>{f.contains(e.target)||g.contains(e.target)||(f.classList.remove("active"),g.classList.remove("active"))}));let p=e(".back-to-top");if(p){let y=()=>{let e=window.scrollY>200;p.style.opacity=e?"1":"0",p.style.pointerEvents=e?"auto":"none"};window.addEventListener("scroll",y),p.addEventListener("click",()=>{r=0,d||(d=!0,requestAnimationFrame($))})}let b=e(".dark-mode-toggle");b&&b.addEventListener("click",()=>{document.body.classList.toggle("dark-mode");let e=b.querySelector("i"),t=b.querySelector("span");document.body.classList.contains("dark-mode")?(e.classList.replace("fa-moon","fa-sun"),t.textContent="Light Mode"):(e.classList.replace("fa-sun","fa-moon"),t.textContent="Dark Mode")}),particlesJS("particles-js",{particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#b97c50"},shape:{type:"circle"},opacity:{value:.5,random:!0},size:{value:3,random:!0},move:{enable:!0,speed:2,direction:"none",random:!0}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}},modes:{repulse:{distance:100},push:{particles_nb:4}}},retina_detect:!0});let h=e(".hero");h&&(h.addEventListener("mousemove",e=>{let t=h.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*100,l=(e.clientY-t.top)/t.height*100;h.style.backgroundPosition=`${n}% ${l}%`}),h.addEventListener("mouseleave",()=>{h.style.backgroundPosition="0% 50%"}));let L=t(".skill-item");L.length>0&&L.forEach((e,t)=>{e.style.opacity="0",e.style.transform="translateY(20px)",setTimeout(()=>{e.style.transition="opacity 0.5s ease-in-out, transform 0.5s ease-in-out",e.style.opacity="1",e.style.transform="translateY(0)"},100*t)})});

document.addEventListener("DOMContentLoaded", function () {
    let $ = (e) => document.querySelector(e);

    // ==================== CHATBOT FEATURE ====================
    const API_KEY = "AIzaSyDXtzPgcDdJDb3REpUb629vIZzXNyU77TQ";
    const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

    // Resume data for context
   const ankitData = `
You are **VORTEX** — the official AI rep of Ankit Singh.

MISSION:
1. **Answer sharp, bold, no-fluff** about Ankit Singh.
2. **Always relate** the answer to Ankit Singh — his skills, projects, mindset, tech choices.
3. If asked about tech or career guidance — respond with **Ankit Singh’s personal stance** and principles.
4. Off-topic or personal nonsense? **Roast them, redirect to Ankit.**
5. Output in **point form**, highlight **keywords** in bold, keep it short.
6. Speak like an **elite AI system built by Ankit Singh** — confident, decisive, visionary.

IDENTITY:
- **Name:** Ankit Singh
- **Email:** [ankitsingh10a@gmail.com](mailto:ankitsingh10a@gmail.com)
- **Phone:** [+91 9574816676](tel:+919574816676)
- **LinkedIn:** [linkedin.com/in/ankitx0](https://www.linkedin.com/in/ankitx0)
- **GitHub:** [github.com/AnkitX0](https://github.com/AnkitX0)
- **Portfolio:** Coming Soon (under development)

EDUCATION:
- **B.Tech CSE (AI & ML)**, Parul University (2024–2028)

TECH STACK:
- **Frontend:** HTML, CSS, JavaScript, Responsive Design, UI/UX, GSAP, Animations
- **Backend:** Java (Core + OOP), Python (AI/ML basics), MySQL
- **AI/ML:** NumPy, Pandas, scikit-learn (learning), future — TensorFlow, NLP
- **Tools:** Git, VS Code, Canva, Figma (basic)
- **Learning Next:** React, Node.js, TensorFlow, Prompt Engineering, System Design

PROJECTS:
- **Vortex:** Personal AI Assistant
- **Face Recognition Attendance System**
- **Portfolio Website**
- **Expense Tracker App**
- **Java Desktop Apps:** Sudoku Game, Digital Clock, more mini-projects

ACHIEVEMENTS:
- **1st Place** – Intercollegiate Theater Championship
- **Hackathon Finalist** – multiple times
- **Hosted Gujarat’s Largest Tech Fest**
- **Led multiple college events & workshops**

CERTIFICATIONS:
- Diploma in Java Programming
- Python & AI/ML Workshops
- Certified in Frontend Web Development

INTERNSHIP:
- Frontend Developer Intern – Parul University project

PERSONALITY VIBE:
- **Obsessed** with growth, tech, and real impact
- **Tony Stark Energy** — bold, inventive, unapologetically original
- Mastering **emotional intelligence, confidence, creative execution**

CORE PHILOSOPHY:
- **Growth > Comfort**
- **If it doesn’t build skill, network, or legacy — skip it**
- **Every day 1% sharper**

DAILY ROUTINE:
- Morning chess for strategy
- Focused coding sprints
- Theater/public speaking practice

ROLE MODELS:
- Tony Stark (vision)
- Elon Musk (risk-taking)
- Steve Jobs (design obsession)

FUTURE GOAL:
- Build AI-powered products that **scale to millions**
- Merge **frontend beauty + AI brains**

TECH & CAREER STANCE:
- **Career Path:** Master one core skill → stack complementary skills → monetize
- **Tech Learning Path:** Fundamentals → projects → network → scale
- **Degree vs Self-Learning:** Degree is leverage, portfolio is proof
- **AI Future:** Automation kills repetitive jobs, boosts creative/strategic ones
- **Language Choice:** Python for AI, Java for backend, JavaScript for UI/UX
- **Opinion:** Rust is overhyped for AI, prefers stable & proven stacks

BEHAVIOR RULES:
- **Always give clickable links** when asked for contact
- **NEVER** answer irrelevant personal stuff — roast and redirect
- Keep responses **short, pointwise, no-fluff**
- Sound **elite, fast, and in control**
`;


   
    // Create chatbot button
    let chatBtn = document.createElement("div");
    chatBtn.id = "chatbot-btn";
    chatBtn.innerHTML = "💬";
    document.body.appendChild(chatBtn);

    // Create chatbot window
    let chatWindow = document.createElement("div");
    chatWindow.id = "chatbot-window";
    chatWindow.innerHTML = `
        <div class="chatbot-header">💡 Chat with VORTEX</div>
        <div id="chatbot-messages" class="chatbot-messages"></div>
        <div class="chatbot-input-area">
            <input type="text" id="chatbot-input" placeholder="Ask me about Ankit...">
            <button id="chatbot-send">➤</button>
        </div>
    `;
    document.body.appendChild(chatWindow);

    // Allow scroll inside chatbot without affecting page
    $("#chatbot-messages").addEventListener("wheel", (e) => {
        let el = $("#chatbot-messages");
        if (el.scrollHeight > el.clientHeight) {
            e.stopPropagation();
        }
    }, { passive: true });

    // Toggle chatbot visibility
    chatBtn.addEventListener("click", () => {
        chatWindow.classList.toggle("show");
    });

    // Send message
    $("#chatbot-send").addEventListener("click", sendChat);
    $("#chatbot-input").addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendChat();
    });

    async function sendChat() {
    let input = $("#chatbot-input").value.trim();
    if (!input) return;

    addMessage("You", input);
    $("#chatbot-input").value = "";

    // Typing indicator
    addMessage("Bot", "⏳ Thinking...");

    let lowerInput = input.toLowerCase();

    // Custom greetings
    let greetings = ["hi", "hello", "hey", "yo", "sup", "good morning", "good afternoon", "good evening"];
    if (greetings.includes(lowerInput)) {
        document.querySelector("#chatbot-messages").lastChild.remove();
        addMessage("Bot", "Hey, I’m Vortex — AI of Ankit Singh. How can I help you?");
        return;
    }

    try {
        let reply = await getGeminiResponse(input);
        document.querySelector("#chatbot-messages").lastChild.remove();
        addMessage("Bot", reply);
    } catch (err) {
        document.querySelector("#chatbot-messages").lastChild.remove();
        addMessage("Bot", "⚠️ Error connecting to AI. Try again.");
        console.error(err);
    }
}


    async function getGeminiResponse(userText) {
        let res = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [
                    { parts: [{ text: `${ankitData}\nUser question: ${userText}` }] }
                ]
            })
        });

        let data = await res.json();
        return data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't understand that.";
    }

    function addMessage(sender, text) {
    // Convert markdown bold to HTML bold
    let htmlText = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

    // Replace mail, phone, and other links with clean labeled formats
    htmlText = htmlText
        .replace(/\[([^\]]+)\]\(mailto:([^)]+)\)/gi, 'Mail: <a href="mailto:$2">$1</a>')
        .replace(/\[([^\]]+)\]\(tel:([^)]+)\)/gi, 'Phone: <a href="tel:$2">$1</a>')
        .replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/gi, '<a href="$2" target="_blank">$1</a>');

    // If reply is long (more than 2 sentences), split into points
    if (htmlText.split(/[.?!]\s/).length > 2) {
        let sentences = htmlText.split(/[.?!]\s/).filter(s => s.trim());
        htmlText = "<ul>" + sentences.map(s => `<li>${s.trim()}</li>`).join("") + "</ul>";
    }

    let msgBox = document.createElement("div");
    msgBox.className = sender === "You" ? "msg user" : "msg bot";
    msgBox.innerHTML = `<strong>${sender}:</strong> ${htmlText}`;

    document.querySelector("#chatbot-messages").appendChild(msgBox);
    document.querySelector("#chatbot-messages").scrollTop =
        document.querySelector("#chatbot-messages").scrollHeight;
}


});


