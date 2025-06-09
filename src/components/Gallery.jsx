import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const images = [
  "/images/1.jpg",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png",
  "/images/6.png",
  "/images/7.png",
  "/images/8.png",
  "/images/9.png",
  "/images/10.png",
];

function AnimatedImage({ src, alt, onClick, index }) {
  const ref = React.useRef(null);
  // Detecta cada vez que la imagen está visible
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      className="w-[300px] h-[170px] object-cover rounded-lg shadow-lg flex-shrink-0 cursor-pointer"
      loading="lazy"
      draggable={false}
      onClick={onClick}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ scale: 1.07, boxShadow: "0 15px 30px rgba(0,0,0,0.35)" }}
    />
  );
}

export default function Gallery() {
  const scrollContainerRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  const openImage = (idx) => {
    setExpandedIndex(idx);
  };

  const closeModal = () => {
    setExpandedIndex(null);
  };

  useEffect(() => {
    if (expandedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setExpandedIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowLeft") {
        setExpandedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expandedIndex]);

  return (
    <section
      id="gallery"
      className="w-full py-6 flex flex-col items-center overflow-hidden"
      style={{
        backgroundColor: "#d8b012",
        border: "none",
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <style jsx>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>

      <div className="w-full flex items-center space-x-4 px-4">
        <button
          onClick={scrollLeft}
          aria-label="Scroll left"
          className="text-4xl font-bold opacity-50 hover:opacity-90 select-none"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          &#60;
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-none space-x-4 flex-grow"
          style={{
            scrollBehavior: "smooth",
            background: "transparent",
            border: "none",
            borderRadius: 0,
          }}
        >
          {images.map((src, idx) => (
            <AnimatedImage
              key={idx}
              src={src}
              alt={`gallery-img-${idx + 1}`}
              onClick={() => openImage(idx)}
              index={idx}
            />
          ))}
        </div>

        <button
          onClick={scrollRight}
          aria-label="Scroll right"
          className="text-4xl font-bold opacity-50 hover:opacity-90 select-none"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          &#62;
        </button>
      </div>

      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={images[expandedIndex]}
              alt="Expanded"
              className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
