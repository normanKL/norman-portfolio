import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { useEffect } from "react";

import Home from "./components/Home";
import Project from "./components/Project";
import ProjectList from "./components/ProjectList";
import Experience from "./components/Experience";
import PageNotFound from "./components/PageNotFound";
import cuteDog from './assets/dog-glasses.jpg'


function App() {

  useEffect(() => {
    const handleOrientationChange = () => {
      const rotateMessage = document.querySelector('.rotate-message');
      if (window.innerWidth <= 1200 && window.innerHeight > window.innerWidth) {
        rotateMessage.style.display = 'block';
      } else {
        rotateMessage.style.display = 'none';
      }
    };

    handleOrientationChange();

    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <>
      <div className="rotate-message">
        <p style={{ fontSize: '100%' }}><i className="fas fa-sync-alt"></i> - Please rotate your device to landscape mode.</p>
        <br />
        <img src={cuteDog} alt="rotate" style={{ height: 'auto', width: '100%', border: '3px solid grey', borderRadius: '10px' }} />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/not-found" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
