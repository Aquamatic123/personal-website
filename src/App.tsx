import Hero from './components/Hero';
import About from './components/About';
import './index.css';

function App() {
  return (
    <div className="app-container">
      {/* This is the only thing we want to see for now */}
      <Hero />
      <About />
      {/* We will add About, Projects, etc. one by one later */}
    </div>
  );
}

export default App;
