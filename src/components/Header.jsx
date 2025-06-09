import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "@fontsource/inter";

const navLinks = [
  { href: "#intro", label: "Inicio" },
  { href: "#highlights", label: "Proyectos" },
  { href: "#details", label: "Mi proceso" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#gallery", label: "Galería" },
  { href: "#footer", label: "Contacto" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();
  const contentControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      controls.start({
        y: 0,
        scale: 0.97,
        transition: { duration: 0.4, ease: "easeOut" },
      });

      contentControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      controls.start({
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
      });

      contentControls.start({
        opacity: 0,
        y: -10,
        transition: { duration: 0.4, ease: "easeInOut" },
      });
    }
  }, [scrolled]);

  return (
    <motion.header
      animate={controls}
      className="fixed top-0 w-full z-50"
      style={{
        background: "transparent",
        boxShadow: "none",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center font-[Inter]">
        {/* Degradado animado en el nombre */}
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent animate-gradient"
          animate={contentControls}
          initial={{ opacity: 0, y: -10 }}
        >
          Brikman Paul
        </motion.h1>

        {/* Menú limpio y sin bordes */}
        <div className="flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              className="text-white hover:text-cyan-400 text-base font-medium transition-colors"
              animate={contentControls}
              initial={{ opacity: 0, y: -10 }}
            >
              {label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
