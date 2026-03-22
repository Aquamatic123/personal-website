export default function About() {
    return (
	<section style={aboutContainer}>
	    <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 800, margin: 0 }}>
	    About me
	    </h2>
	      <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', fontWeight: 100, margin: 0 }}>
		I am a software engineering student at Polytechnique Montreal. I enjoy writing low-level code, learning about computers and also sometimes making websites!
	      </p>
	</section>
    );
}

const aboutContainer: React.CSSProperties = {
  height : '90vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 2rem',
  textAlign: 'center'
};
