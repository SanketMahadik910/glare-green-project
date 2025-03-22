import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Animate from './components/Animate';
import Contact from './components/Contact';
import Residential from './components/Residential';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <About id="about" />
                <Project id="project" />
                <Animate />
                <Contact id="contact" />
              </>
            } 
          />
          <Route path="/about" element={<About id="about"/>} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/contact" element={<Contact id="contact"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;