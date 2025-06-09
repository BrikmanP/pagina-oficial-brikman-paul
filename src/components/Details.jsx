import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const details = [
  {
    title: (
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Producción Musical
        <br className="hidden md:block" />
      </h1>
    ),
    description:
      "Fl studio 21 Edicion Mezlca Materizacción",
  },
  {
    title: (
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Desarrollo Web
        <br className="hidden md:block" />
      </h1>
    ),
    description:
      "Gestión de usuarios.",
  },
  {
    title: (
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Tecnologías Frontend
        <br className="hidden md:block" />
      </h1>
    ),
    description:
      "Interfaces intuitivas y atractivas.",
  },
  {
    title: (
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Backend y Bases de Datos
        <br className="hidden md:block" />
      </h1>
    ),
    description:
      "Scripts en Java y JavaScript.",
  },
  {
    title: (
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Metodologías Ágiles
        <br className="hidden md:block" />
      </h1>
    ),
    description:
      "Implementación de proyectos en constante evolución usando metodologías ágiles para optimizar resultados y adaptabilidad.",
  },
];

export default function Details() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="details"
      className="min-h-screen bg-gradient-to-b from-[#9F5CFF] to-[#5B00A7] text-white flex items-center"
    >
      <div className="container mx-auto px-4 md:flex md:items-center md:gap-16">
        {/* Imagen izquierda */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
          <img
            src="images/10691784.png"
            alt="Intro Personaje"
            className="w-full md:w-[600px] max-w-none mix-blend-lighten opacity-95 backdrop-blur-sm transition duration-500"
          />
        </div>

        {/* Contenido derecho */}
        <div className="md:w-1/2 flex">
          {/* Lista de puntos vertical */}
          <ul className="flex flex-col items-center md:items-start space-y-6 mr-10">
            {details.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-5 h-5 rounded-full cursor-pointer transition-all ${
                  activeIndex === index
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/40 hover:bg-white"
                }`}
                title={`Detalle ${index + 1}`}
              />
            ))}
          </ul>

          {/* Texto del detalle activo con animación */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {details[activeIndex].title}
                </h3>
                <p className="text-lg leading-relaxed">
                  {details[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
