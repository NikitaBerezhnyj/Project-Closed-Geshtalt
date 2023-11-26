import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standart-Component-style.css';
import './Game.css';

export default function Game_Componet(){
    const { t, i18n } = useTranslation("global");

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return(
        <Container fluid className='fluid-fix'>
            <Row>
                <Col>
                    <h1 className='mar-72'>{t("game.game-h1")}</h1>
                </Col>
            </Row>
            {/* Слайдер */}
            <Carousel activeIndex={index} onSelect={handleSelect} interval={2000} className='mar-96'>
                <Carousel.Item>
                    <img className="d-block w-50 mar-auto" src="/img/game/screen1.png" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-50 mar-auto" src="/img/game/screen2.png" alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-50 mar-auto" src="/img/game/screen3.png" alt="First slide" />
                </Carousel.Item>
            </Carousel>
            {/* Кінець слайдеру */}
            <Row className='container-game'>
                <p>{t("game.game-paragraph-1")}</p>
                <p>{t("game.game-paragraph-2")}</p>
                <p>{t("game.game-paragraph-3")}</p>
                <p>{t("game.game-paragraph-4")}</p>
                <p><span>{t("game.game-span")}</span></p>
            </Row>
            <hr></hr>
            <Row className='container-game mar-48'>
                <p>{t("game.game-pre-btn")}</p>
                <a href="../materials/The last vacation.zip" target="_blank" download="The last vacation.zip" className="btn w-25">{t("game.game-btn")}</a>
            </Row>
        </Container>
    )
}