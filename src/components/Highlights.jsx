import { motion } from "framer-motion";

const highlights = [
  " Álbum 'particles of sorrow Edm.",
  "Manejo Avanzado de Angular 16",
  "Beats Originales, capas de secuencias  ",
  " Autenticación ",
  " Panel administrativo con gráficos y gestión de usuarios",
  " Composición de Letras",
  " Profesional de FL Studio para mezclas y mastering",
  " Diseño Experiencia UI/UX",
  " Desarrollo React Vite",
  " Proyectos en constante evolución con enfoque ágil",
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Highlights() {
  return (
    <section
      id="highlights"
      className="min-h-screen flex items-center text-white"
      style={{
        background: "linear-gradient(to bottom, #7c3df2, #f238a5)",
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-20 gap-8">
        {/* Imagen lado izquierdo */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          className="flex justify-center md:justify-start"
        >
          <img
            src="images/4529196.png"
            alt="Intro Personaje"
            className="w-full md:w-[800px] max-w-none mix-blend-lighten opacity-95 backdrop-blur-sm transition duration-500"
          />
        </motion.div>

        {/* Texto lado derecho con lista animada */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Proyectos y Logros Destacados
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto md:mx-0 mb-6">
            Desde beats con alma hasta sistemas inteligentes, combino creatividad y técnica.
          </p>
          <motion.ul className="space-y-2 text-left list-disc list-inside">
            {highlights.map((text, idx) => (
              <motion.li key={idx} variants={item}>
                {text}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Highlights;
