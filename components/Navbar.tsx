"use client";

export default function Navbar() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/70 backdrop-blur-md
        border-b border-white/10
      "
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT */}
        <div className="text-white font-semibold text-lg">
          Shankar K
        </div>

        {/* CENTER */}
        <div className="hidden md:flex items-center gap-8 text-white/70">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* RIGHT */}
        <a
          href="/resume/Shankar_K_Resume.pdf"
          download
          className="
            px-4 py-2 rounded-lg
            bg-sky-500 text-black font-medium
            hover:bg-sky-400 transition
          "
        >
          Resume
        </a>

      </nav>
    </header>
  );
}
