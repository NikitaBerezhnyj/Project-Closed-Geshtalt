import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader_Component from './Components/Component-Loader/Loader_Component'
// Головна сторінка
import About_Page from './Pages/About-Pages/About_Page';
// Сторінка музики
import Music_Page from './Pages/Music-Pages/Music_Page';
// Сторінки ігор
import Game_Page from './Pages/Game-Pages/Game_Page';
import TheLastRest_Page from './Pages/Game-Pages/TheLastRest_Page';
import UnderHome_Page from './Pages/Game-Pages/UnderHome_Page';
// Сторінки Коміксів
import Comics_Page from './Pages/Comics-Pages/Comics_Page';
import TheLetterOfDeath_Page from './Pages/Comics-Pages/TheLetterOfDeath_Page';
import WayHome_Page from './Pages/Comics-Pages/WayHome_Page';
// Сторінки Книг
import Book_Page from './Pages/Book-Pages/Book_Page';
import ThirtiethYearAfterOurEra_Page from './Pages/Book-Pages/ThirtiethYearAfterOurEra_Page';
import TheIntermediateGeneration_Page from './Pages/Book-Pages/TheIntermediateGeneration_Page';
// Сторінка помилки 404
import Not_Fount_Page from './Pages/Not-Fount-Pages/Not_Fount_Page';

export default function App() {
  return (
    <Router>
      <div>
        {/* Додаємо компонент Loader для прогрузки сторінки */}
        <Loader_Component />

        {/* Перемикання сторінок */}
        <Routes>
          <Route path="/" element={<About_Page />} />
          <Route path="/music" element={<Music_Page />} />
          {/* Сторінки ігор */}
          <Route path="/game" element={<Game_Page />} />
          <Route path="/game/the-last-rest" element={<TheLastRest_Page />} />
          <Route path="/game/under-home" element={<UnderHome_Page />} />
          {/* Сторінки комісів */}
          <Route path="/comics" element={<Comics_Page />} />
          <Route path="/comics/the-letter-of-death" element={<TheLetterOfDeath_Page />} />
          <Route path="/comics/way-home" element={<WayHome_Page />} />
          {/* Сторінки книг */}
          <Route path="/book" element={<Book_Page />} />
          <Route path="/book/thirtieth-year-after-our-era" element={<ThirtiethYearAfterOurEra_Page />} />
          <Route path="/book/the-intermediate-generation" element={<TheIntermediateGeneration_Page />} />
          {/* Помилка 404 */}
          <Route path='*' element={<Not_Fount_Page />} />
        </Routes>
      </div>
    </Router>
  );
}