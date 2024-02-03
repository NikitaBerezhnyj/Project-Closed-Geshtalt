import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Modal_Component from '../../Component-Modal/Modal-Component';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Standard-Component-style.css'
import '../Game.css';

export default function TheLastRest_Component(){
    const { t, i18n } = useTranslation("global");

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const [modalActive, setModalActive] = useState(false);

    return(
        <div>
            <Container fluid className='fluid-fix'>
                <Row>
                    <Col>
                        <h1 className='mar-72'>{t("game.game-1-h1")}</h1>
                    </Col>
                </Row>
                {/* Слайдер */}
                <Carousel activeIndex={index} onSelect={handleSelect} interval={2000} className='mar-96'>
                    <Carousel.Item>
                        <img className="d-block w-50 mar-auto" src="/img/game-screens/game-1/screen1.png" alt="First slide image" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50 mar-auto" src="/img/game-screens/game-1/screen2.png" alt="Second slide image" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-50 mar-auto" src="/img/game-screens/game-1/screen3.png" alt="First slide image" />
                    </Carousel.Item>
                </Carousel>
                {/* Кінець слайдеру */}
                <Container>
                    <Row className='container-game mar-48'>
                        <p className='mar-16'>{t("game.game-1-paragraph-1")}</p>
                        <p className='mar-16'>{t("game.game-1-paragraph-2")}</p>
                        <p className='mar-16'>{t("game.game-1-paragraph-3")}</p>
                        <p className='mar-16'>{t("game.game-1-paragraph-4")}</p>
                        <p className='mar-24'>{t("game.game-1-paragraph-5")}</p>
                        <span className="btn w-25" onClick={() => setModalActive(true)}>{t("about.download")}</span>
                    </Row>
                </Container>
            </Container>
            <Modal_Component active={modalActive} setActive={setModalActive} downloadPath={"/public/materials/games/The last rest.zip"} downloadName={"The last rest.zip"}/>
        </div>
    )
}