import React from 'react';
import './App.css';
import { Home } from './pages/Home/index';
import { Blog } from './pages/Blog/index';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;

