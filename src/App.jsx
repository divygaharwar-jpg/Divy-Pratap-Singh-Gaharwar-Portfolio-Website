import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import { useTheme } from './hooks/useTheme';
import './App.css';

function App() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <Router>
      <div className={`min-h-screen text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-[#070A10] transition-colors duration-300 font-sans`}>
        <Routes>
          <Route path="/" element={<Home isDark={isDark} toggleTheme={toggleTheme} />} />
          <Route path="/blog/:slug" element={<BlogPost isDark={isDark} toggleTheme={toggleTheme} />} />
          <Route path="*" element={<Home isDark={isDark} toggleTheme={toggleTheme} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
