export default function Hero() {
  return (
    <section style={heroStyle}>
      <div style={contentStyle}>
        <h1 style={nameStyle}>Leo Rouleau</h1>
        <p style={taglineStyle}>
          Software Engineering Student @ <span style={{ color: '#E31837' }}>Polytechnique Montréal</span>
        </p>
        <p style={descriptionStyle}>
          Building compilers, ricing Linux, and tracking NHL stats. 
          Currently developing the <strong>jlox</strong> interpreter.
        </p>
        
        <div style={buttonContainerStyle}>
          <a href="#projects" style={primaryButtonStyle}>View Projects</a>
          <a href="https://github.com/yourusername" style={secondaryButtonStyle}>GitHub</a>
        </div>
      </div>
    </section>
  );
}

const heroStyle: React.CSSProperties = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f9f9f9',
  padding: '0 2rem',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  maxWidth: '800px',
};

const nameStyle = {
  fontSize: '4rem',
  margin: '0',
  color: '#1a1a1a',
  letterSpacing: '-1px',
};

const taglineStyle = {
  fontSize: '1.5rem',
  color: '#555',
  margin: '1rem 0',
};

const descriptionStyle = {
  fontSize: '1.1rem',
  color: '#777',
  lineHeight: '1.6',
  marginBottom: '2rem',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
};

const primaryButtonStyle = {
  padding: '0.8rem 2rem',
  backgroundColor: '#1a1a1a',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '6px',
  fontWeight: '600',
};

const secondaryButtonStyle = {
  ...primaryButtonStyle,
  backgroundColor: 'transparent',
  color: '#1a1a1a',
  border: '1px solid #1a1a1a',
};
