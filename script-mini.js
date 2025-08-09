document.addEventListener("DOMContentLoaded",function(){let e=e=>document.querySelector(e),t=e=>document.querySelectorAll(e),n=e(".stat-item h2");if(n){let i=parseInt(localStorage.getItem("visitorCount")||"0")+1;localStorage.setItem("visitorCount",i),n.textContent=i.toLocaleString()}let o=e("#contactForm");if(o){let a=o.querySelector(".btn"),s=["name","email","subject","message"],r=()=>{let t=s.every(t=>e(`#${t}`).value.trim());return a.disabled=!t,t};o.addEventListener("input",r),window.sendEmail=()=>{if(!r())return void alert("Please fill in all fields before sending.");let[t,n,i,l]=s.map(t=>e(`#${t}`).value.trim()),c=`Hello Ankit,

You have received a new message from your portfolio contact form:

🔹 Name: ${t}
🔹 Email: ${n}
🔹 Subject: ${i}

📩 Message:
${l}

Best Regards,
${t}`;window.location.href=`mailto:ankitsingh10a@gmail.com?subject=${encodeURIComponent(i)}&body=${encodeURIComponent(c)}`,o.reset(),a.disabled=!0},r()}let l=window.scrollY,c=window.scrollY,d=!1;function g(){c+=.1*(l-c),window.scrollTo(0,c),Math.abs(l-c)>.5?requestAnimationFrame(g):d=!1}window.addEventListener("wheel",e=>{e.preventDefault(),l+=2*e.deltaY,l=Math.max(0,Math.min(l,document.body.scrollHeight-window.innerHeight)),d||(d=!0,requestAnimationFrame(g))},{passive:!1});let h=t("section"),p=t(".sidebar nav ul li a");if(h.length>0&&p.length>0){let u=()=>{let e="",t=window.scrollY+100;h.forEach(n=>{let i=n.offsetTop,o=n.offsetHeight;t>=i&&t<i+o&&(e=n.id)}),p.forEach(t=>{let n=t.getAttribute("href").substring(1);t.classList.toggle("active",n===e)})};window.addEventListener("scroll",u),u(),p.forEach(t=>{t.addEventListener("click",n=>{n.preventDefault();let i=e(t.getAttribute("href"));i&&(l=i.offsetTop,d||(d=!0,requestAnimationFrame(g)))})})}let m=e(".menu-toggle"),v=e(".sidebar");m&&v&&(m.addEventListener("click",()=>{v.classList.toggle("active"),m.classList.toggle("active")}),document.addEventListener("click",e=>{v.contains(e.target)||m.contains(e.target)||(v.classList.remove("active"),m.classList.remove("active"))}));let b=e(".back-to-top");if(b){let f=()=>{let e=window.scrollY>200;b.style.opacity=e?"1":"0",b.style.pointerEvents=e?"auto":"none"};window.addEventListener("scroll",f),b.addEventListener("click",()=>{l=0,d||(d=!0,requestAnimationFrame(g))})}let y=e(".dark-mode-toggle");y&&y.addEventListener("click",()=>{document.body.classList.toggle("dark-mode");let e=y.querySelector("i"),t=y.querySelector("span");document.body.classList.contains("dark-mode")?(e.classList.replace("fa-moon","fa-sun"),t.textContent="Light Mode"):(e.classList.replace("fa-sun","fa-moon"),t.textContent="Dark Mode")}),particlesJS("particles-js",{particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#b97c50"},shape:{type:"circle"},opacity:{value:.5,random:!0},size:{value:3,random:!0},move:{enable:!0,speed:2,direction:"none",random:!0}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}},modes:{repulse:{distance:100},push:{particles_nb:4}}},retina_detect:!0});let k=e(".hero");k&&(k.addEventListener("mousemove",e=>{let t=k.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*100,i=(e.clientY-t.top)/t.height*100;k.style.backgroundPosition=`${n}% ${i}%`}),k.addEventListener("mouseleave",()=>{k.style.backgroundPosition="0% 50%"}));let E=t(".skill-item");E.length>0&&E.forEach((e,t)=>{e.style.opacity="0",e.style.transform="translateY(20px)",setTimeout(()=>{e.style.transition="opacity 0.5s ease-in-out, transform 0.5s ease-in-out",e.style.opacity="1",e.style.transform="translateY(0)"},100*t)})}),document.addEventListener("DOMContentLoaded",function(){let e=e=>document.querySelector(e),t=document.createElement("div");t.id="chatbot-btn",t.innerHTML="\uD83D\uDCAC",document.body.appendChild(t);let n=document.createElement("div");async function i(){let t=e("#chatbot-input").value.trim();if(t){o("You",t),e("#chatbot-input").value="",o("Bot","⏳ Thinking...");if(["hi","hello","hey","yo","sup","good morning","good afternoon","good evening"].includes(t.toLowerCase()))return document.querySelector("#chatbot-messages").lastChild.remove(),void o("Bot","Hey, I’m Vortex — AI of Ankit Singh. How can I help you?");try{let n=await async function(e){return(await (await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCmgWmaefuHAUx-NcFsHDHzXD8PLqql1bg",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:`
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

User question: ${e}`}]}]})})).json())?.candidates?.[0]?.content?.parts?.[0]?.text||"I couldn't understand that."}(t);document.querySelector("#chatbot-messages").lastChild.remove(),o("Bot",n)}catch(i){document.querySelector("#chatbot-messages").lastChild.remove(),o("Bot","⚠️ Error connecting to AI. Try again."),console.error(i)}}}function o(e,t){let n=t.replace(/\*\*(.*?)\*\*/g,"<b>$1</b>");(n=n.replace(/\[([^\]]+)\]\(mailto:([^)]+)\)/gi,'Mail: <a href="mailto:$2">$1</a>').replace(/\[([^\]]+)\]\(tel:([^)]+)\)/gi,'Phone: <a href="tel:$2">$1</a>').replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/gi,'<a href="$2" target="_blank">$1</a>')).split(/[.?!]\s/).length>2&&(n="<ul>"+n.split(/[.?!]\s/).filter(e=>e.trim()).map(e=>`<li>${e.trim()}</li>`).join("")+"</ul>");let i=document.createElement("div");i.className="You"===e?"msg user":"msg bot",i.innerHTML=`<strong>${e}:</strong> ${n}`,document.querySelector("#chatbot-messages").appendChild(i),document.querySelector("#chatbot-messages").scrollTop=document.querySelector("#chatbot-messages").scrollHeight}n.id="chatbot-window",n.innerHTML='\n        <div class="chatbot-header">\uD83D\uDCA1 Chat with VORTEX</div>\n        <div id="chatbot-messages" class="chatbot-messages"></div>\n        <div class="chatbot-input-area">\n            <input type="text" id="chatbot-input" placeholder="Ask me about Ankit...">\n            <button id="chatbot-send">➤</button>\n        </div>\n    ',document.body.appendChild(n),e("#chatbot-messages").addEventListener("wheel",t=>{let n=e("#chatbot-messages");n.scrollHeight>n.clientHeight&&t.stopPropagation()},{passive:!0}),t.addEventListener("click",()=>{n.classList.toggle("show")}),e("#chatbot-send").addEventListener("click",i),e("#chatbot-input").addEventListener("keypress",e=>{"Enter"===e.key&&i()})});
