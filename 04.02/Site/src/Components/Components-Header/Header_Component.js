import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Standard-Component-style.css';
import './Header.css';

export default function Header_Component() {
  const { t, i18n } = useTranslation("global");
  const [langBtnClassUA, setLangBtnClassUA] = useState('changer-lang-btn changer-lang-btn-active');
  const [langBtnClassEN, setLangBtnClassEN] = useState('changer-lang-btn');

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      handleLanguageChange(storedLang);
    } else {
      // Встановлення української мови за замовчуванням
      handleLanguageChange('ua');
    }
  }, []);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    
    if (lang === 'ua') {
      setLangBtnClassUA('changer-lang-btn changer-lang-btn-active');
      setLangBtnClassEN('changer-lang-btn');
    } else if (lang === 'en') {
      setLangBtnClassEN('changer-lang-btn changer-lang-btn-active');
      setLangBtnClassUA('changer-lang-btn');
    }

    localStorage.setItem('language', lang);
  };

  return (
    <Navbar expand="md" className="header">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className='nav-brand nav-brand-fix'>
          <span>Project Close Geshtalt</span>
          <img src='/img/icon.png' alt='Лого'></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav-btn' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='nav-item'>{t("header.main")}</Nav.Link>
            <Nav.Link as={Link} to="/music" className='nav-item'>{t('header.music')}</Nav.Link>
            <Nav.Link as={Link} to="/game" className='nav-item'>{t('header.game')}</Nav.Link>
            <Nav.Link as={Link} to="/comics" className='nav-item'>{t('header.comics')}</Nav.Link>
            <Nav.Link as={Link} to="/book" className='nav-item'>{t('header.book')}</Nav.Link>
            {/* Перемикання мови */}
            <Nav>
              <div className='change-lang-div'>
                <button onClick={() => handleLanguageChange("ua")} className={langBtnClassUA}>UA</button>
                <span className='span-bold'>/</span>
                <button onClick={() => handleLanguageChange("en")} className={langBtnClassEN}>EN</button>
              </div>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};