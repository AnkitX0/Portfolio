document.addEventListener("DOMContentLoaded",function(){let e=e=>document.querySelector(e),t=e=>document.querySelectorAll(e),n=e(".stat-item h2");if(n){let a=parseInt(localStorage.getItem("visitorCount")||"0")+1;localStorage.setItem("visitorCount",a),n.textContent=a.toLocaleString()}let i=e("#contactForm");if(i){let o=i.querySelector(".btn"),s=["name","email","subject","message"],l=()=>{let t=s.every(t=>e(`#${t}`).value.trim());return o.disabled=!t,t};i.addEventListener("input",l),window.sendEmail=()=>{if(!l())return void alert("Please fill in all fields before sending.");let[t,n,a,r]=s.map(t=>e(`#${t}`).value.trim()),c=`Hello Ankit,

You have received a new message from your portfolio contact form:

🔹 Name: ${t}
🔹 Email: ${n}
🔹 Subject: ${a}

📩 Message:
${r}

Best Regards,
${t}`;window.location.href=`mailto:ankitsingh10a@gmail.com?subject=${encodeURIComponent(a)}&body=${encodeURIComponent(c)}`,i.reset(),o.disabled=!0},l()}let r=window.scrollY,c=window.scrollY,d=!1;function g(){c+=.1*(r-c),window.scrollTo(0,c),Math.abs(r-c)>.5?requestAnimationFrame(g):d=!1}window.addEventListener("wheel",e=>{e.preventDefault(),r+=2*e.deltaY,r=Math.max(0,Math.min(r,document.body.scrollHeight-window.innerHeight)),d||(d=!0,requestAnimationFrame(g))},{passive:!1});let p=t("section"),u=t(".sidebar nav ul li a");if(p.length>0&&u.length>0){let h=()=>{let e="",t=window.scrollY+100;p.forEach(n=>{let a=n.offsetTop,i=n.offsetHeight;t>=a&&t<a+i&&(e=n.id)}),u.forEach(t=>{let n=t.getAttribute("href").substring(1);t.classList.toggle("active",n===e)})};window.addEventListener("scroll",h),h(),u.forEach(t=>{t.addEventListener("click",n=>{n.preventDefault();let a=e(t.getAttribute("href"));a&&(r=a.offsetTop,d||(d=!0,requestAnimationFrame(g)))})})}let m=e(".menu-toggle"),v=e(".sidebar");m&&v&&(m.addEventListener("click",()=>{v.classList.toggle("active"),m.classList.toggle("active")}),document.addEventListener("click",e=>{v.contains(e.target)||m.contains(e.target)||(v.classList.remove("active"),m.classList.remove("active"))}));let b=e(".back-to-top");if(b){let f=()=>{let e=window.scrollY>200;b.style.opacity=e?"1":"0",b.style.pointerEvents=e?"auto":"none"};window.addEventListener("scroll",f),b.addEventListener("click",()=>{r=0,d||(d=!0,requestAnimationFrame(g))})}let y=e(".dark-mode-toggle");y&&y.addEventListener("click",()=>{document.body.classList.toggle("dark-mode");let e=y.querySelector("i"),t=y.querySelector("span");document.body.classList.contains("dark-mode")?(e.classList.replace("fa-moon","fa-sun"),t.textContent="Light Mode"):(e.classList.replace("fa-sun","fa-moon"),t.textContent="Dark Mode")}),particlesJS("particles-js",{particles:{number:{value:50,density:{enable:!0,value_area:800}},color:{value:"#b97c50"},shape:{type:"circle"},opacity:{value:.5,random:!0},size:{value:3,random:!0},move:{enable:!0,speed:2,direction:"none",random:!0}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}},modes:{repulse:{distance:100},push:{particles_nb:4}}},retina_detect:!0});let $=e(".hero");$&&($.addEventListener("mousemove",e=>{let t=$.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*100,a=(e.clientY-t.top)/t.height*100;$.style.backgroundPosition=`${n}% ${a}%`}),$.addEventListener("mouseleave",()=>{$.style.backgroundPosition="0% 50%"}));let k=t(".skill-item");k.length>0&&k.forEach((e,t)=>{e.style.opacity="0",e.style.transform="translateY(20px)",setTimeout(()=>{e.style.transition="opacity 0.5s ease-in-out, transform 0.5s ease-in-out",e.style.opacity="1",e.style.transform="translateY(0)"},100*t)})}),document.addEventListener("DOMContentLoaded",function(){let e=e=>document.querySelector(e),t=[],n=document.createElement("div");n.id="chatbot-btn",n.innerHTML="\uD83D\uDCAC",document.body.appendChild(n);let a=document.createElement("div");async function i(){let n=e("#chatbot-input").value.trim();if(n){o("You",n),t.push({role:"user",text:n}),e("#chatbot-input").value="",o("Bot","⏳ Thinking...");try{let a=await async function(){return(await (await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCmgWmaefuHAUx-NcFsHDHzXD8PLqql1bg",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:`
You are VORTEX — AI of Ankit Singh.

HOW TO ANSWER:
- Always reply with short, exact, factual answers.
- Use bullet points or numbered lists where possible.
- No hype, no unnecessary personality unless requested.
- If vague, ask for clarification before answering.
- Provide links only when relevant to the question.

ABOUT ANKIT:
- Name: Ankit Singh
- Age: 20
- Degree: B.Tech in Computer Science & Engineering (AI & ML)
- University: Parul University, Gujarat, India
- Email: ankitsingh10a@gmail.com
- LinkedIn: https://www.linkedin.com/in/ankit3k/
- GitHub: https://github.com/AnkitX0

SKILLS:
- Frontend: HTML, CSS, JavaScript, GSAP animations
- Backend: Java (Core + OOP mastery), Python
- Databases: MySQL
- AI/ML: NumPy, Pandas, scikit-learn
- Tools: Git, VS Code, Canva, Figma
- Currently Learning: React.js, Node.js, TensorFlow, NLP

PROJECTS:
- Vortex AI — AI assistant modeled after Ankit
- Face Recognition Attendance System
- Portfolio Website (under development)
- Expense Tracker App
- Java Desktop Apps: Sudoku Game, Digital Clock

ACHIEVEMENTS & PARTICIPATION:
- Participated in multiple hackathons and coding competitions
- Attended Gujarat's largest tech fest **"Projection 2025"**
- Actively engages in leadership roles during university tech events
- Contributed to AI/ML workshops and coding challenges
- Recognized for innovative project ideas and problem-solving approach

CERTIFICATIONS:
- Diploma in Java Programming
- Certified in Frontend Web Development
- Completed Python & AI/ML Workshops

PHILOSOPHY:
- Growth over comfort — comfort kills progress
- Fail fast, learn faster, adapt instantly
- If it doesn’t build skill, network, or legacy — delete it

TRAITS:
- Competitive, growth-obsessed, straight talker, creative rebel
- Tony Stark inspired — bold, inventive, solution-driven
- Loves building original, impactful projects

INTERESTS:
- AI/ML innovation
- Creative frontend designs
- Real-world impactful applications

This is the ongoing conversation:
${t.map(e=>`${"user"===e.role?"User":"Bot"}: ${e.text}`).join("\n")}
Bot:`}]}]})})).json())?.candidates?.[0]?.content?.parts?.[0]?.text||"I couldn't understand that."}();document.querySelector("#chatbot-messages").lastChild.remove(),o("Bot",a),t.push({role:"bot",text:a})}catch(i){document.querySelector("#chatbot-messages").lastChild.remove(),o("Bot","⚠️ Error connecting to AI. Try again."),console.error(i)}}}function o(e,t){let n=t.replace(/\*\*(.*?)\*\*/g,"<b>$1</b>");(n=(n=(n=(n=(n=n.replace(/^\s*\*\s?/gm,"")).replace(/\[([^\]]+)\]\(mailto:([^)]+)\)/gi,'Mail: <a href="mailto:$2" target="_blank">$1</a>').replace(/\[([^\]]+)\]\(tel:([^)]+)\)/gi,'Phone: <a href="tel:$2" target="_blank">$1</a>').replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/gi,'<a href="$2" target="_blank">$1</a>')).replace(/(?<!href=")(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank">$1</a>')).replace(/(?<!href="mailto:)([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,'<a href="mailto:$1">$1</a>')).replace(/\n/g,"<br>")).split(/[.?!]\s/).length>2&&(n="<ul>"+n.split(/[.?!]\s/).filter(e=>e.trim()).map(e=>`<li>${e.trim()}</li>`).join("")+"</ul>");let a=document.createElement("div");a.className="You"===e?"msg user":"msg bot",a.innerHTML=`<strong>${e}:</strong> <span class="msg-text"></span>`;let i=document.querySelector("#chatbot-messages");i.appendChild(a),i.scrollTop=i.scrollHeight;let o=a.querySelector(".msg-text");if("Bot"===e){let s=0;!function e(){o.innerHTML=n.substring(0,s)+"|",s++,i.scrollTop=i.scrollHeight,s<=n.length?setTimeout(e,20):o.innerHTML=n}()}else o.innerHTML=n}a.id="chatbot-window",a.innerHTML='\n        <div class="chatbot-header">\uD83D\uDCA1 Chat with VORTEX</div>\n        <div id="chatbot-messages" class="chatbot-messages"></div>\n        <div class="chatbot-input-area">\n            <input type="text" id="chatbot-input" placeholder="Ask me about Ankit...">\n            <button id="chatbot-send">➤</button>\n        </div>\n    ',document.body.appendChild(a),e("#chatbot-messages").addEventListener("wheel",t=>{let n=e("#chatbot-messages");n.scrollHeight>n.clientHeight&&t.stopPropagation()},{passive:!0}),n.addEventListener("click",()=>{a.classList.toggle("show");let e=document.querySelector("#chatbot-messages");a.classList.contains("show")&&0===e.childElementCount&&o("Bot","Hey, I’m Vortex — AI twin of Ankit Singh.")}),e("#chatbot-send").addEventListener("click",i),e("#chatbot-input").addEventListener("keypress",e=>{"Enter"===e.key&&i()})});
