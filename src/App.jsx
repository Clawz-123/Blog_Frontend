import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element={<Post />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
