import Navbar from "../components/navbar";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <main
  id="home"
  className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#111827] text-white relative overflow-hidden"
  data-aos="fade-up"
>
  {/* Sparkle BG */}
  <div className="absolute w-72 h-72 bg-blue-500 opacity-30 blur-3xl rounded-full top-10 left-10 animate-pulse" />
  <div className="absolute w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full bottom-10 right-10 animate-pulse" />

  {/* Text Content */}
  <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
    Hey, I&apos;m Teesta 
  </h1>

  <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 text-center mb-4">
    Code. Create. Repeat.
  </h2>

  <p className="text-md sm:text-lg text-gray-400 text-center max-w-xl mb-6">
    Turning coffee into code, and ideas into intelligent machines ☕💡🤖
  </p>

  {/* Scroll Button */}
  <div className="flex flex-col sm:flex-row gap-4 mt-6">
  <a
    href="#about"
    className="text-sm sm:text-base px-6 py-2 border border-cyan-400 text-cyan-300 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 text-center"
  >
    ↓ Explore More
  </a>
  <a
    href="/Teesta_Sarkar_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm sm:text-base px-6 py-2 border border-fuchsia-500 text-fuchsia-300 rounded-full hover:bg-fuchsia-500 hover:text-black transition-all duration-300 text-center"
  >
    📄 View Resume
  </a>
</div>

</main>


      {/* About Section */}
      <section id="about" className="bg-[#0f0f0f] text-white px-6 py-24" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-10 text-cyan-400 tracking-tight text-center">
            👩🏻‍💻 About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-loose text-justify md:text-center max-w-4xl mx-auto">
            I&apos;m <span className="font-semibold text-white">Teesta Sarkar</span>, a BTech student at PES University, Bengaluru (Class of 2027),
            majoring in Computer Science with a specialization in Artificial Intelligence & Machine Learning.
            I live at the crossroads of logic and creativity — constantly building, breaking, and learning. Whether it&apos;s
            developing a facial-voice recognition system, exploring ethical hacking, or joining a 2 AM hackathon, 
            I thrive in solving problems that blend math, code, and imagination.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-black text-white px-6 py-24" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-10 text-blue-400 tracking-tight text-center">
            💼 Experience
          </h2>
          <div className="grid gap-12 max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-cyan-500 shadow-md" data-aos="zoom-in">
              <h3 className="text-xl font-bold text-cyan-300">BTech in CSE (AI & ML) — PES University</h3>
              <p className="text-sm text-gray-400">Aug 2023 – June 2027 | Bengaluru, India</p>
              <p className="text-gray-300 mt-3 text-base leading-relaxed">
                Coursework focused on Artificial Intelligence, Machine Learning, Data Structures,
                and Computer Networks. Member of the Technical Club, Mathematics Club, and the Healthcare Research Center.
                Led and participated in multiple academic projects, hackathons, and tech symposiums.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-blue-500 shadow-md" data-aos="zoom-in">
              <h3 className="text-xl font-bold text-blue-300">Freelance Developer & Research Enthusiast</h3>
              <p className="text-sm text-gray-400">2024 – Present</p>
              <p className="text-gray-300 mt-3 text-base leading-relaxed">
                Developed dual-mode authentication systems (face + voice), built full-stack projects
                with React/Next.js and MongoDB, and explored Generative AI and cybersecurity. 
                Earned certifications from IBM, Google, and Infosys in Data Science, AI, and Ethical Hacking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-[#0a0a0a] text-white px-6 py-24" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-cyan-400 text-center">🛠️ Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-cyan-500 shadow-md" data-aos="zoom-in">
              <h3 className="text-xl font-bold text-cyan-300">Face & Voice Recognition System</h3>
              <p className="text-gray-300 mt-2 mb-3">
                A biometric dual-auth system that uses both facial and voice data to authenticate users securely.
              </p>
              <ul className="text-sm text-gray-400 mb-3 list-disc list-inside">
                <li>OpenCV</li><li>SpeechRecognition</li><li>Python</li><li>Tkinter</li>
              </ul>
              <a href="https://github.com/Teestasarkar/face-voice-recognition" target="_blank" rel="noopener noreferrer" className="inline-block text-cyan-300 hover:underline">
                View on GitHub →
              </a>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-blue-500 shadow-md" data-aos="zoom-in">
              <h3 className="text-xl font-bold text-blue-300">Data Science Ecosystem</h3>
              <p className="text-gray-300 mt-2 mb-3">
                A beginner-friendly Jupyter notebook summarizing the tools, libraries, and lifecycle of a Data Science project.
              </p>
              <ul className="text-sm text-gray-400 mb-3 list-disc list-inside">
                <li>Python</li><li>Jupyter Notebook</li>
              </ul>
              <a href="https://github.com/Teestasarkar/DataScienceEcosystem" target="_blank" rel="noopener noreferrer" className="inline-block text-blue-300 hover:underline">
                View on GitHub →
              </a>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-green-500 shadow-md" data-aos="zoom-in">
              <h3 className="text-xl font-bold text-green-300">Historical Stock Analysis</h3>
              <p className="text-gray-300 mt-2 mb-3">
                Analyzed trends of Indian stocks using technical indicators and moving averages to study market patterns over time.
              </p>
              <ul className="text-sm text-gray-400 mb-3 list-disc list-inside">
                <li>Pandas</li><li>Matplotlib</li><li>Plotly</li>
              </ul>
              <a href="https://github.com/Teestasarkar/Historical-Stock-Analysis" target="_blank" rel="noopener noreferrer" className="inline-block text-green-300 hover:underline">
                View on GitHub →
              </a>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-pink-500 shadow-md" data-aos="zoom-in">
              <h3 className="text-xl font-bold text-pink-300">Trader Behavior Insights</h3>
              <p className="text-gray-300 mt-2 mb-3">
                Mapped historical trading behavior to market sentiment (Fear & Greed Index) using data science and visual analytics.
              </p>
              <ul className="text-sm text-gray-400 mb-3 list-disc list-inside">
                <li>Pandas</li><li>Seaborn</li><li>Plotly</li><li>EDA</li>
              </ul>
              <a href="https://github.com/Teestasarkar/trader_behavior_insights" target="_blank" rel="noopener noreferrer" className="inline-block text-pink-300 hover:underline">
                View on GitHub →
              </a>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-xl border-l-4 border-yellow-500 shadow-md" data-aos="zoom-in">
              <h3 className="text-xl font-bold text-yellow-300">Polynova (Coming Soon)</h3>
              <p className="text-gray-300 mt-2 mb-3">
                A fine-tuned AI tutor that adapts to your college syllabus. Built to personalize technical learning and boost academic clarity.
              </p>
              <ul className="text-sm text-gray-400 list-disc list-inside">
                <li>LLMs / NLP</li><li>Prompt Engineering</li><li>Custom Fine-Tuning</li><li>Student-centric UX</li>
              </ul>
              <p className="text-sm text-gray-400 italic mt-2">* Currently in development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-black text-white px-6 py-24" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12 text-green-400 text-center">🧠 Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-300 text-base leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-green-300 mb-2">Languages</h3>
              <p>Python, C/C++, JavaScript, HTML, TailwindCSS</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-300 mb-2">Frameworks & Libraries</h3>
              <p>React, Next.js, Flask, Bootstrap, OpenCV, Pandas, NumPy, Matplotlib, Seaborn, Plotly</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-300 mb-2">Databases & Tools</h3>
              <p>MongoDB, MySQL, Git, GitHub, VS Code, Colab, Jupyter, Figma, Canva</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-300 mb-2">Core Concepts</h3>
              <p>Machine Learning, Deep Learning, Cybersecurity, NLP, Prompt Engineering, DSA, OS, CN, DBMS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#0f0f0f] text-white px-6 py-24" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-purple-400">📬 Let&apos;s Connect</h2>
          <p className="text-lg text-gray-300 mb-8">Have an opportunity, idea, or just want to say hi? Reach out — I&apos;d love to chat!</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sarkarmou0610@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
            >Email Me</a>
            <a
              href="https://www.linkedin.com/in/teesta-sarkar-a305a0286"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
            >LinkedIn</a>
            <a
              href="https://github.com/Teestasarkar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-full font-semibold transition duration-300"
            >GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
  className="bg-black text-gray-500 py-6 text-center border-t border-gray-800"
  data-aos="fade-in"
  data-aos-offset="0"
  data-aos-duration="600"
>
  <p className="text-sm">
    © {new Date().getFullYear()} Teesta Sarkar · Made with 💻 and ☕
  </p>
</footer>

    </>
  );
}
