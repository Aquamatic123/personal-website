export default function Hero() {
  return (
    <section style={heroContainer}>
	  <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 800, margin: 0 }}>
        Leo Rouleau
      </h1>
      <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', color: 'var(--text-dim)' }}>
        Software Engineering Student @PolyMTL
      </h2>
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
