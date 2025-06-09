import React, { useState } from "react";
import {
  FaLaptopCode,
  FaHeadphonesAlt,
  FaChalkboardTeacher,
  FaMicrochip,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player"; // Importación agregada

const timelineData = [
  { year: 2010, label: "Inicio Profesional", icon: <FaChalkboardTeacher size={32}/> },
  { year: 2014, label: "Primeros Proyectos", icon: <FaLaptopCode size={32} /> },
  { year: 2018, label: "Desarrollo y Producción", icon: <FaHeadphonesAlt size={32}/> },
  { year: 2022, label: "Especialización", icon: <FaChalkboardTeacher size={32}/> },
  { year: 2025, label: "Ingeniero y Productor", icon: <FaMicrochip size={32}/> },
];

const descriptions = [
  "2010: Inicio en programación y producción musical, explorando tecnologías y software básico.",
  "2014: Desarrollo de los primeros proyectos de software y producción de beats profesionales.",
  "2018: Consolidación como desarrollador full-stack y productor.",
  "2022: Discografía general.",
  "2025: Profesional completo en ingeniería de sistemas y producción musical, creando proyectos integrales innovadores.",
];

export default function Timeline() {/*renderizado de video con reproducción automática */
  const [active, setActive] = useState(null);

  return (
    <section className="relative w-full px-6 py-20 text-white min-h-[300px] overflow-visible">
      
      {/* 🎥 Video de fondo */}
      <ReactPlayer
        url="https://www.youtube.com/watch?v=98zw0ym8ho4" /* Ejemplo de insercion de video de daft punk */
        loop
        muted
        width="100%"
        height="100%"
        className="absolute top-0 left-0 z-0 pointer-events-none"
      />

      {/* Capa de gradiente encima del video */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-900 via-black/80 to-yellow-500 opacity-90"></div>

      {/* Contenido sobre el video */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-14 text-center drop-shadow">
          Mi Evolución Profesional (2010 - 2025)
        </h2>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center gap-20">
          {timelineData.map((item, idx) => (
            <div
              key={item.year}
              className="flex flex-col items-center cursor-pointer focus:outline-none"
              onClick={() => setActive(idx === active ? null : idx)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setActive(idx === active ? null : idx);
                }
              }}
              tabIndex={0}
              style={{ width: 120 }}
              /*reproducio de audio leve calculo definido en capas de colores*/
            >
              <motion.div
                initial={false}
                animate={{
                  scale: idx === active ? 1.3 : 1,
                  rotate: idx === active ? 360 : 0,
                  boxShadow: idx === active
                    ? "0 0 15px rgba(203, 213, 255, 0.8)"
                    : "none",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`rounded-full p-4 bg-purple-700/20 hover:bg-purple-500/40`}
                title={item.label}
              >
                <div className="text-white">{item.icon}</div>
              </motion.div>

              <div
                className={`mt-2 font-semibold text-center ${
                  idx === active ? "text-white" : "text-purple-300"
                }`}
              >
                {item.label}
              </div>
              <div
                className={`text-xs mt-1 ${
                  idx === active ? "font-bold text-yellow-300" : "text-purple-400"
                }`}
              >
                {item.year}
              </div>
            </div>
          ))}
        </div>
        {/*   /*Animación de efecto suave*/}




   {/* Video de fondo */}
      <ReactPlayer
        url=""
        playing
        loop
        muted
        width="100%"
        height="100%"
        className="absolute top-0 left-0 z-0 pointer-events-none"
      />







{/* /*////////////////////////////////////////////////////////////////////////////////////*/
 }

       {/*  <AnimatePresence>
          {active !== null && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto mt-12 p-6 text-center rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, #3b0764 0%, #000000 50%, #facc15 100%)",
                color: "rgba(255,255,255,0.95)",
              }}
            >
              <p className="text-lg m-0">{descriptions[active]}</p>
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </section>
  );
}
