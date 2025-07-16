// components/Navbar.js
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-tight">
          teestaverse<span className="animate-pulse"> 🚀</span>
        </div>
        <ul className="hidden md:flex space-x-8 text-white text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-cyan-400 transition-colors duration-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition-colors duration-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
