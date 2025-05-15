import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center bg-blue-500 text-white p-4 md:px-24">
      <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">
        ElecTrack
      </h1>
      <h2 className="text-lg md:text-xl font-semibold text-center md:text-left">
        Tükettiğiniz Elektriği Bilin!
      </h2>

      <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
        <a
          href="https://github.com/fatih-suslu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg text-white font-semibold hover:bg-gray-600 transition"
        >
          <FaGithub size={20} /> GitHub
        </a>

        <a
          href="https://linkedin.com/in/fatih-suslu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-500 transition"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>

        <a
          href="https://fatih-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-red-700 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-500 transition"
        >
          <CgProfile size={20} /> Portfolio
        </a>
      </div>
    </header>
  );
}
