import './App.css';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from '../src/Components/Component-Loader/Loader';
import About_page from './Pages/About-Page';
import Music_page from './Pages/Music-Page';
import Game_page from './Pages/Game-Page';
import Comics_page from './Pages/Comics-Page';
import Book_page from './Pages/Book-Page';

export default function App() {
  return (
    <Router>
      <div>
        {/* Додаємо компонент Loader для прогрузки сторінки */}
        <Loader />

        {/* Перемикання сторінок */}
        <Routes>
          <Route path="/" element={<About_page />} />
          <Route path="/music" element={<Music_page />} />
          <Route path="/game" element={<Game_page />} />
          <Route path="/comics" element={<Comics_page />} />
          <Route path="/book" element={<Book_page />} />
        </Routes>
      </div>
    </Router>
  );
}