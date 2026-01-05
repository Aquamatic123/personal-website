export default function Hero() {
  return (
    <section style={heroContainer}>
	  <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, margin: 0 }}>
        Leo Rouleau
      </h1>
      <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', color: 'var(--text-dim)' }}>
        Software Engineering Student @Polytechnique
      </h2>
      
      {/*<div style={{ marginTop: '3rem' }}>
       <a href="#projects" style={primaryBtn}>View My Projects</a>
       </div> */}
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

const primaryBtn: React.CSSProperties = {
  padding: '1rem 2.5rem',
  backgroundColor: 'var(--habs-red)',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '4px',
  fontWeight: 'bold',
  boxShadow: '0 4px 14px 0 rgba(227, 24, 55, 0.39)',
  transition: 'transform 0.2s ease'
};
