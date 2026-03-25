import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

export default function Hero() {
  return (
    <section style={heroContainer}>
	  <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, margin: 0 }}>
        Leo Rouleau
      </h1>
      <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', color: 'var(--text-dim)' }}>
        Software Engineering Student @PolyMTL
      </h2>
      
      <div style={socialContainer}>
        <a href="https://www.linkedin.com/in/leo-rouleau-364374302/" target="_blank" rel="noreferrer" className="hero-icon">
	  <FaLinkedin />
	</a>
	<a href="https://github.com/Aquamatic123" target="_blank" rel="noreferrer" className="hero-icon">
	  <FaGithub />
	</a>
	<a href="/CV_LEO_ROULEAU.pdf" target="_blank" rel="noreferrer" className="hero-icon">
	  <FaFilePdf />
	</a>

      </div>
    </section>
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
