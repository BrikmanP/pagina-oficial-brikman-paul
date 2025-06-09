import { useEffect, useState } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Highlights from './components/Highlights';
import Details from './components/Details';
import Trayectoria from './components/Trayectoria';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const sections = [
  { id: 'intro', color: '#5B00A7' },       // morado oscuro
  { id: 'highlights', color: '#f238a5' },  // rosa/fucsia
  { id: 'details', color: '#9f7dfb' },     // lila
  { id: 'trayectoria', color: '#FF6F00' }, // naranja fuerte
  { id: 'gallery', color: '#FFD54F' },     // amarillo claro
  { id: 'footer', color: '#5B00A7' }       // morado oscuro (para cerrar el ciclo)
];

function App() {
  const [bgColor, setBgColor] = useState(sections[0].color);

  useEffect(() => {
    const handleScroll = () => {
      let newColor = sections[0].color;
      let newHash = `#${sections[0].id}`;

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          newColor = sections[i].color;
          newHash = `#${sections[i].id}`;
          break;
        }
      }

      setBgColor(newColor);

      if (window.location.hash !== newHash) {
        window.history.replaceState(null, '', newHash);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: bgColor, transition: 'background-color 0.8s ease' }}>
      <Header />
      <section id="intro"><Intro /></section>
      <section id="highlights"><Highlights /></section>
      <section id="details"><Details /></section>
      <section id="trayectoria"><Trayectoria /></section>
      <section id="gallery"><Gallery /></section>
      <section id="footer"><Footer /></section>
    </div>
  );
}

export default App;
