import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
 <footer
  id="footer"
  className="min-h-[40vh] text-white flex items-center justify-center"
  style={{
    background: `linear-gradient(
      180deg,
      #FFD600 40%,/* amarillo fuerte */
      #FFF9C4 60%,        /* amarillo claro */
      rgba(255, 255, 255, 0.8) 100% /* blanco translúcido al final */
    )`,
  }}
>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl font-semibold mb-3 text-black">Conectemos</h2>
        <div className="flex justify-center space-x-6 text-2xl text-black">
          <a
            href="https://github.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaGithub/>
          </a>
          <a
            href="https://www.linkedin.com/in/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaInstagram />
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
