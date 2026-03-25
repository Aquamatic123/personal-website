import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
      <motion.section
      style={heroContainer}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
	  <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, margin: 0 }}>
        Leo Rouleau
      </h1>
      <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', color: 'var(--text-dim)' }}>
        Software Engineering Student @PolyMTL
      </h2>
      
    <motion.div
      style={socialContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      >
        <a href="https://www.linkedin.com/in/leo-rouleau-364374302/" target="_blank" rel="noreferrer" className="hero-icon">
	  <FaLinkedin />
	</a>
	<a href="https://github.com/Aquamatic123" target="_blank" rel="noreferrer" className="hero-icon">
	  <FaGithub />
	</a>
	<a href="/CV_LEO_ROULEAU.pdf" target="_blank" rel="noreferrer" className="hero-icon">
	  <FaFilePdf />
	</a>

      </motion.div>
    </motion.section>
  );
}

const heroContainer: React.CSSProperties = {
  height: '90vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 2rem',
  textAlign: 'center'
};

const socialContainer: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
}
