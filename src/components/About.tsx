import { motion } from 'framer-motion';

export default function About() {
    return (
	<motion.section
	style={aboutContainer}
	initial={{ opacity: 0, y: 50 }} // Starts invisible and 50px lower
        whileInView={{ opacity: 1, y: 0 }} // Animates to fully visible and original position
        viewport={{ once: true, margin: "-100px" }} // 'once: true' ensures it only animates the first time you scroll to it
	transition={{ duration: 0.8, ease: "easeOut" }}
	>
	    <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 800, margin: 0 }}>
	    About me
	    </h2>
	      <p style={{ fontSize: 'clamp(1rem, 1.2vw, 1.2rem)', fontWeight: 100, margin: 0 }}>
		I am a software engineering student at Polytechnique Montreal. I enjoy writing low-level code, learning about computers and also sometimes making websites!
	      </p>
	</motion.section>
    );
}

const aboutContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '80px 2rem',
  textAlign: 'center'
};
