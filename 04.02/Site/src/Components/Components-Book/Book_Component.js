import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standard-Component-style.css';
import './Book.css';

export default function Book_Component(){
    const { t, i18n } = useTranslation("global");

    return(
        <Container fluid className='fluid-fix'>
            <Row className='book-hero'>
                <h1>{t("book.book-h1")}</h1>
                <p>
                    {t("book.book-paragraph")} <span>{t("book.book-span")}</span>
                </p>
            </Row>
            <Row className='main-book-content'>
                <Col className='book-content'>
                    <h3>{t("book.book-1-about-h3")}</h3>
                    <div className='book-img-container mar-36'>
                        <img src='/img/book1.png' alt={t("book.book-1-about-alt")}></img>
                    </div>
                    <p>{t("book.book-1-about-paragraph")}</p>
                    <Link to='thirtieth-year-after-our-era/' className='more-src'>{t("about.learn-more")}</Link>
                </Col>
                <Col className='book-content'>
                    <h3>{t("book.book-2-about-h3")}</h3>
                    <div className='book-img-container mar-36'>
                        <img src='/img/book2.png' alt={t("book.book-2-about-alt")}></img>
                    </div>
                    <p>{t("book.book-2-about-paragraph")}</p>
                    <Link to='the-intermediate-generation/' className='more-src'>{t("about.learn-more")}</Link>
                </Col>
            </Row>
        </Container>
    )
}