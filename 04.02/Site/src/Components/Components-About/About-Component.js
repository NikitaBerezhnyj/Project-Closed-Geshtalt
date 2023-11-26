import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standart-Component-style.css'
import './About.css'

export default function About_Component(){
    const { t, i18n } = useTranslation("global");

    const getBookPath = () => {
        return `/materials/book/${i18n.language}/Book.pdf`;
    };

    const getComicsPath = () => {
        return `/materials/comics/${i18n.language}/Comics.pdf`;
    };

    return(
        <Container fluid className='fluid-fix'>
            <Container fluid>
                <Row className='hero mar-auto mar-96'>
                    <h1>{t("about.hero-h1")}</h1>
                    <h3>{t("about.hero-h3")}</h3>
                    <p>
                    {t("about.hero-paragraph")} <span>{t("about.hero-span")}</span>
                    </p>
                    <p>
                        <span>{t("about.hero-span-presentation-1")}<br></br></span>
                        <span>{t("about.hero-span-presentation-2")}<br></br></span>
                        <span>{t("about.hero-span-presentation-3")}<br></br></span>
                        <span>{t("about.hero-span-presentation-4")}<br></br></span>
                    </p>
                    <img src='/img/photo.png' alt={t("about.hero-alt-text")}></img>
                </Row>
            </Container>
            <Container className='project-items mar-96' fluid>
                {/* Музика */}
                <Row className='project-item mar-72'>
                    <Col className='project-item-text mar-48' lg={6}>
                        <h3>{t("about.music-h3")}</h3>
                        <p><span className='span-bold'>{t("about.music-about")}</span></p>
                        <p><span className='span-bold'>{t("about.music-span-1")}</span>{t("about.music-paragraph-1")}</p>
                        <p><span className='span-bold'>{t("about.music-span-2")}</span>{t("about.music-paragraph-2")}</p>
                        <p>{t("about.music-paragraph-3")}</p>
                        <Link to='/music' className='more-src'>{t("about.learn-more")}</Link>
                        <br></br>
                        <a href="/materials/Music.zip" target="_blank" download="NikName albums.zip" class="btn">{t("about.download")}</a>
                    </Col>
                    <Col className='project-item-img' lg={6}>
                        <img src="/img/music.png" alt={t("about.music-alt-text")}></img>
                    </Col>
                </Row>
                {/* Візуальна новела */}
                <Row className='project-item mar-72'>
                    <Col className='project-item-text mar-48' lg={6}>
                    <h3>{t("about.game-h3")}</h3>
                    <p><span className='span-bold'>{t("about.game-about")}</span></p>
                    <p>{t("about.game-paragraph-1")} <span className='span-bold'>{t("about.game-span")}</span>{t("about.game-paragraph-2")}</p>
                    <Link to='/game' className='more-src'>{t("about.learn-more")}</Link>
                    <br></br>
                    <a href="/materials/The last vacation.zip" target="_blank" download="The last vacation.zip" className="btn">{t("about.download")}</a>
                    </Col>
                    <Col className='project-item-img' lg={6}>
                        <img src="/img/visual-novel.png" alt={t("about.game-alt-text")}></img>
                    </Col>
                </Row>
                {/* Комікс */}
                <Row className='project-item mar-72'>
                    <Col className='project-item-text mar-48' lg={6}>
                        <h3>{t("about.comics-h3")}</h3>
                        <p><span className='span-bold'>{t("about.comics-about")}</span></p>
                        <p>{t("about.comics-paragraph-1")} <span className='span-bold'>{t("about.comics-span")}</span>{t("about.comics-paragraph-2")}</p>
                        <Link to='/comics' className='more-src'>{t("about.learn-more")}</Link>
                        <br></br>
                        <a className="btn" href={getComicsPath()} download>{t("about.download")}</a>

                    </Col>
                    <Col className='project-item-img' lg={6}>
                        <img src="/img/comics.png" alt={t("about.comics-alt-text")}></img>
                    </Col>
                </Row>
                {/* Книга */}
                <Row className='project-item mar-96'>
                    <Col className='project-item-text mar-48' lg={6}>
                        <h3>{t("about.book-h3")}</h3>
                        <p><span className='span-bold'>{t("about.book-about")}</span></p>
                        <p>{t("about.book-paragraph-1")} <span className='span-bold'>{t("about.book-span")}</span>{t("about.book-paragraph-2")}</p>
                        <Link to='/comics' className='more-src'>{t("about.learn-more")}</Link>
                        <br></br>
                        <a className="btn" href={getBookPath()} download>{t("about.download")}</a>
                    </Col>
                    <Col className='project-item-img' lg={6}>
                        <img src="/img/book.png" alt={t("about.book-alt-text")}></img>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}