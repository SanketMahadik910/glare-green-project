import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Animate from './components/Animate';
import Contact from './pages/projects/Contact/Contact';
import Residential from './components/Residential';
import Footer from './components/layout/Footer/Footer';
import BoardOfDirectors from './components/BoardOfDirectors';
import Innovation from './components/Innovation';


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
                  <Footer />
                </>
              }
            />
            <Route path="/about" element={<About id="about" />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/contact" element={<Contact id="contact" />} />
            <Route path="/board-of-directors" element={<BoardOfDirectors />} />
            <Route path="/innovation" element={<Innovation />} />
          </Routes>
        </div>
    
    </Router>
  );
}

export default App;
