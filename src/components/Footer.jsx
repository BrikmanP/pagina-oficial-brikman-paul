import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaSpotify, FaApple } from "react-icons/fa";

function Footer() {
  return (
    <footer
      id="footer"
      className="min-h-[40vh] text-white flex items-center justify-center"
      style={{
        background: `linear-gradient(
          180deg,
          #FFD600 40%,
          #FFF9C4 60%,
          rgba(255, 255, 255, 0.8) 100%
        )`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-3 text-black">Conectemos</h2>
        <div className="flex justify-center space-x-6 text-2xl text-black">
          <a
            href="https://github.com/BrikmanP"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/brikmanpaulmorales/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/almasmentales?utm_source=qr&igsh=OWNpNmMwMGh1eWNv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@BrikmanPauls"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://open.spotify.com/intl-es/artist/6TVffrYkUOFLu72xEKcdQs?si=CUYaHHxYSw6ITgt7dYTJ9w"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaSpotify />
          </a>
          <a
            href="https://music.apple.com/co/artist/mente-y-alma/1503744018"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaApple />
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-900">
          © {new Date().getFullYear()} Brikman Paul. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
