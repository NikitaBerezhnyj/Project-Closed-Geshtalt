import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standard-Component-style.css';
import './Game.css';

export default function Game_Component(){
    const { t, i18n } = useTranslation("global");

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return(
        <Container fluid className='fluid-fix'>
            <Row className='game-hero'>
                <h1>{t("game.game-h1")}</h1>
                <p>
                {t("game.game-paragraph")} <span>{t("game.game-span")}</span>
                </p>
            </Row>
            <Row className='main-game-content'>
                <Col className='game-content'>
                    <h3>{t("game.game-1-about-h3")}</h3>
                    <div className='game-img-container mar-36'>
                        <img src='/img/game1.png' alt={t("game.game-1-about-alt")}></img>
                    </div>
                    <p>{t("game.game-1-about-paragraph")}</p>
                    <Link to='the-last-rest/' className='more-src'>{t("about.learn-more")}</Link>
                </Col>
                <Col className='game-content'>
                    <h3>Під домом</h3>
                    <div className='game-img-container mar-36'>
                        <img src='/img/game2.png' alt={t("game.game-2-about-alt")}></img>
                    </div>
                    <p>{t("game.game-2-about-paragraph")}</p>
                    <Link to='under-home/' className='more-src'>{t("about.learn-more")}</Link>
                </Col>
            </Row>
        </Container>
    )
}