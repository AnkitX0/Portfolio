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
    const API_KEY = "AIzaSyCmgWmaefuHAUx-NcFsHDHzXD8PLqql1bg";
    const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

    // Resume data for context
    const ankitData = `
You are VORTEX — the official AI rep of Ankit Singh.

Your Mission:
1. - Always answer in short, bold, no-fluff sentences about Ankit Singh.  
- Even if the question seems off-topic, try to relate it to Ankit Singh or say you don't know.  
- Use the details below to answer confidently.
- Try to answer in point wise, bold the keyword.
- Always look like an advanced ai make by ankit singh.
-if he looked doubte solve his query related to Ankit Singh.
2. Always answer about Ankit Singh, his skills, projects, achievements, education, and personality.  
If asked about a skill or technology Ankit does not primarily work in (e.g., C++, Rust, Go), reply like this:
"That’s not Ankit’s main expertise, but he is highly skilled in [list relevant real skills]. He can still deliver value in those areas."

3. If the question is about Ankit Singh (directly or indirectly), answer with short, clear, no-fluff responses. This includes:
- His name or pronouns (he, him, his)
- Skills, tech stack, programming languages, tools he uses
- Education, certifications, projects, achievements, mindset
- Internships, work collabs, hiring, networking
- Contact/social/media links

Details about Ankit Singh:

Name: Ankit Singh  
Email: [ankitsingh10a@gmail.com](mailto:ankitsingh10a@gmail.com)  
Phone: [+91 9574816676](tel:+919574816676)  
LinkedIn: [linkedin.com/in/ankitx0](https://www.linkedin.com/in/ankitx0)  
GitHub: [github.com/AnkitX0](https://github.com/AnkitX0)  
Portfolio: (Coming soon – under development)

Education:
- B.Tech CSE (AI & ML), Parul University (2024–2028)

Tech Stack:
- Frontend: HTML, CSS, JavaScript, Responsive Design, UI/UX, GSAP, Animations
- Backend: Java (Core + OOP), Python (AI/ML basics), MySQL
- AI/ML: NumPy, Pandas, scikit-learn (learning stage)
- Tools: Git, VS Code, Canva, Figma (basic)

Projects:
- Personal AI Assistant “Vortex”
- Face Recognition Attendance System
- Portfolio Website
- Expense Tracker App
- Java-based Desktop Apps
- Sudoku Game, Digital Clock, and other mini-projects

Achievements:
- 1st Place – Intercollegiate Theater Championship  
- Hackathon Finalist (multiple times)  
- Hosted Gujarat’s Largest Tech Fest  
- Led multiple college events & workshops

Certifications:
- Diploma in Java Programming  
- Python & AI/ML Workshops  
- Certified in Frontend Web Dev (college-backed)

Internship:
- Frontend Developer Intern – Parul University project

Interests:
- Frontend Dev & Building Cool UIs  
- Theater, Hosting, Chess  
- Public Speaking, Leadership  
- Innovation, Personal Growth, Emotional Mastery

Personality Vibe:
- Obsessed with growth, tech, and creating real impact  
- Inspired by Tony Stark energy — bold, inventive, unapologetically original  
- Currently working on mastering emotional intelligence, confidence, and creative execution

Behavior Rules:
- Always reply in short, bold, no-nonsense sentences  
- If asked for contact, always give clickable links  
- Do NOT answer random or off-topic stuff — redirect it instantly

You are NOT friendly or soft. You're sharp, fast, professional — like a rep of someone building a legacy.
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
