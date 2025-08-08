document.addEventListener("DOMContentLoaded",function(){let e=e=>document.querySelector(e),t=e=>document.querySelectorAll(e),i=e(".stat-item h2");if(i){let n=parseInt(localStorage.getItem("visitorCount")||"0")+1;localStorage.setItem("visitorCount",n),i.textContent=n.toLocaleString()}let o=e("#contactForm");if(o){let a=o.querySelector(".btn"),s=["name","email","subject","message"],l=()=>{let t=s.every(t=>e(`#${t}`).value.trim());return a.disabled=!t,t};o.addEventListener("input",l),window.sendEmail=()=>{if(!l()){alert("Please fill in all fields before sending.");return}let[t,i,n,r]=s.map(t=>e(`#${t}`).value.trim()),c=`Hello Ankit,

You have received a new message from your portfolio contact form:

🔹 Name: ${t}
🔹 Email: ${i}
🔹 Subject: ${n}

📩 Message:
${r}

Best Regards,
${t}`;window.location.href=`mailto:ankitsingh10a@gmail.com?subject=${encodeURIComponent(n)}&body=${encodeURIComponent(c)}`,o.reset(),a.disabled=!0},l()}let r=window.scrollY,c=window.scrollY,d=!1;function h(){c+=(r-c)*.1,window.scrollTo(0,c),Math.abs(r-c)>.5?requestAnimationFrame(h):d=!1}window.addEventListener("wheel",e=>{e.preventDefault(),r+=2*e.deltaY,r=Math.max(0,Math.min(r,document.body.scrollHeight-window.innerHeight)),d||(d=!0,requestAnimationFrame(h))},{passive:!1});let g=t("section"),u=t(".sidebar nav ul li a");if(g.length>0&&u.length>0){let m=()=>{let e="",t=window.scrollY+100;g.forEach(i=>{let n=i.offsetTop,o=i.offsetHeight;t>=n&&t<n+o&&(e=i.id)}),u.forEach(t=>{let i=t.getAttribute("href").substring(1);t.classList.toggle("active",i===e)})};window.addEventListener("scroll",m),m(),u.forEach(t=>{t.addEventListener("click",i=>{i.preventDefault();let n=e(t.getAttribute("href"));n&&(r=n.offsetTop,d||(d=!0,requestAnimationFrame(h)))})})}let p=e(".menu-toggle"),v=e(".sidebar");p&&v&&(p.addEventListener("click",()=>{v.classList.toggle("active"),p.classList.toggle("active")}),document.addEventListener("click",e=>{v.contains(e.target)||p.contains(e.target)||(v.classList.remove("active"),p.classList.remove("active"))}));let y=e(".back-to-top");if(y){let b=()=>{let e=window.scrollY>200;y.style.opacity=e?"1":"0",y.style.pointerEvents=e?"auto":"none"};window.addEventListener("scroll",b),y.addEventListener("click",()=>{r=0,d||(d=!0,requestAnimationFrame(h))})}let f=e(".dark-mode-toggle");f&&f.addEventListener("click",()=>{document.body.classList.toggle("dark-mode");let e=f.querySelector("i"),t=f.querySelector("span");document.body.classList.contains("dark-mode")?(e.classList.replace("fa-moon","fa-sun"),t.textContent="Light Mode"):(e.classList.replace("fa-sun","fa-moon"),t.textContent="Dark Mode")}),particlesJS("particles-js",{particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#b97c50"},shape:{type:"circle"},opacity:{value:.5,random:!0},size:{value:3,random:!0},move:{enable:!0,speed:2,direction:"none",random:!0}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}},modes:{repulse:{distance:100},push:{particles_nb:4}}},retina_detect:!0});let k=e(".hero");k&&(k.addEventListener("mousemove",e=>{let t=k.getBoundingClientRect(),i=(e.clientX-t.left)/t.width*100,n=(e.clientY-t.top)/t.height*100;k.style.backgroundPosition=`${i}% ${n}%`}),k.addEventListener("mouseleave",()=>{k.style.backgroundPosition="0% 50%"}));let $=t(".skill-item");$.length>0&&$.forEach((e,t)=>{e.style.opacity="0",e.style.transform="translateY(20px)",setTimeout(()=>{e.style.transition="opacity 0.5s ease-in-out, transform 0.5s ease-in-out",e.style.opacity="1",e.style.transform="translateY(0)"},100*t)})}),document.addEventListener("DOMContentLoaded",function(){let e=e=>document.querySelector(e),t=`
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
`,i=document.createElement("div");i.id="chatbot-btn",i.innerHTML="\uD83D\uDCAC",document.body.appendChild(i);let n=document.createElement("div");async function o(){let t=e("#chatbot-input").value.trim();if(!t)return;s("You",t),e("#chatbot-input").value="",s("Bot","⏳ Thinking...");let i;if(["hi","hello","hey","yo","sup","good morning","good afternoon","good evening"].includes(t.toLowerCase())){document.querySelector("#chatbot-messages").lastChild.remove(),s("Bot","Hey, I’m Vortex — AI of Ankit Singh. How can I help you?");return}try{let n=await a(t);document.querySelector("#chatbot-messages").lastChild.remove(),s("Bot",n)}catch(o){document.querySelector("#chatbot-messages").lastChild.remove(),s("Bot","⚠️ Error connecting to AI. Try again."),console.error(o)}}async function a(e){return(await (await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCmgWmaefuHAUx-NcFsHDHzXD8PLqql1bg",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:`${t}
User question: ${e}`}]}]})})).json())?.candidates?.[0]?.content?.parts?.[0]?.text||"I couldn't understand that."}function s(e,t){let i=t.replace(/\*\*(.*?)\*\*/g,"<b>$1</b>");(i=i.replace(/\[([^\]]+)\]\(mailto:([^)]+)\)/gi,'Mail: <a href="mailto:$2">$1</a>').replace(/\[([^\]]+)\]\(tel:([^)]+)\)/gi,'Phone: <a href="tel:$2">$1</a>').replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/gi,'<a href="$2" target="_blank">$1</a>')).split(/[.?!]\s/).length>2&&(i="<ul>"+i.split(/[.?!]\s/).filter(e=>e.trim()).map(e=>`<li>${e.trim()}</li>`).join("")+"</ul>");let n=document.createElement("div");n.className="You"===e?"msg user":"msg bot",n.innerHTML=`<strong>${e}:</strong> ${i}`,document.querySelector("#chatbot-messages").appendChild(n),document.querySelector("#chatbot-messages").scrollTop=document.querySelector("#chatbot-messages").scrollHeight}n.id="chatbot-window",n.innerHTML=`
        <div class="chatbot-header">💡 Chat with VORTEX</div>
        <div id="chatbot-messages" class="chatbot-messages"></div>
        <div class="chatbot-input-area">
            <input type="text" id="chatbot-input" placeholder="Ask me about Ankit...">
            <button id="chatbot-send">➤</button>
        </div>
    `,document.body.appendChild(n),e("#chatbot-messages").addEventListener("wheel",t=>{let i=e("#chatbot-messages");i.scrollHeight>i.clientHeight&&t.stopPropagation()},{passive:!0}),i.addEventListener("click",()=>{n.classList.toggle("show")}),e("#chatbot-send").addEventListener("click",o),e("#chatbot-input").addEventListener("keypress",e=>{"Enter"===e.key&&o()})});
