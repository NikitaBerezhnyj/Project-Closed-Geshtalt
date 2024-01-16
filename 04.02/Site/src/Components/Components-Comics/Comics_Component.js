import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standard-Component-style.css';
import './Comics.css';

export default function Comics_Component(){
    const { t, i18n } = useTranslation("global");

    return(
        <Container fluid className='fluid-fix'>
            <Row className='comics-hero'>
                <h1>{t("comics.comics-h1")}</h1>
                <p>
                    {t("comics.comics-paragraph")} <span>{t("comics.comics-span")}</span>
                </p>
            </Row>
            <Row className='main-comics-content'>
                <Col className='comics-content'>
                    <h3>{t("comics.comics-1-about-h3")}</h3>
                    <div className='comics-img-container mar-36'>
                        <img src='/img/comics1.png' alt={t("comics.comics-1-about-alt")}></img>
                    </div>
                    <p>{t("comics.comics-1-about-paragraph")}</p>
                    <Link to='the-letter-of-death/' className='more-src'>{t("about.learn-more")}</Link>
                </Col>
                <Col className='comics-content'>
                    <h3>{t("comics.comics-2-about-h3")}</h3>
                    <div className='comics-img-container mar-36'>
                        <img src='/img/comics2.png' alt={t("comics.comics-2-about-alt")}></img>
                    </div>
                    <p>{t("comics.comics-2-about-paragraph")}</p>
                    <Link to='way-home/' className='more-src'>{t("about.learn-more")}</Link>
                </Col>
            </Row>
        </Container>
    )
}