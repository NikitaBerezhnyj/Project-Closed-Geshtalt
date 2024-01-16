import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standard-Component-style.css';
import './Music.css';

export default function Music_Component(){
    const { t, i18n } = useTranslation("global");

    return(
        <Container fluid className='fluid-fix'>
            <Row className='music-hero'>
                <h1>{t("music.music-h1")}</h1>
                <p>
                {t("music.music-paragraph")} <span>{t("music.music-span")}</span>
                </p>
            </Row>
            <Row className='main-audio-content'>
                <Col className='audio-content' lg={6}>
                    <h3>{t("music.album-1-h3")}</h3>
                    <img src='/img/album1.jpg' alt={t("music.album-1-alt")}></img>
                    <p>{t("music.album-1-paragraph")}</p>
                    <p><span>{t("music.album-1-span")}</span></p>
                    <div className="album-items">
                        <p>1. Поэт без имени (intro)</p>
                        <audio src="../materials/music/Поєт_без_имени/1.Поєт без имени.mp3" controls></audio>
                        <p>2. Моя милая Герда</p>
                        <audio src="../materials/music/Поєт_без_имени/2. Моя милая Герда.mp3" controls></audio>
                        <p>3. Азазель</p>
                        <audio src="../materials/music/Поєт_без_имени/3. Азазель.mp3" controls></audio>
                        <p>4. А я родился в одиночестве... (skit)</p>
                        <audio src="../materials/music/Поєт_без_имени/4. А я родился в одиночестве....mp3" controls></audio>
                        <p>5. Записки сумосшедшего</p>
                        <audio src="../materials/music/Поєт_без_имени/5. Записки сумосшедшего.mp3" controls></audio>
                        <p>6. Персональное царство Морфея (skit)</p>
                        <audio src="../materials/music/Поєт_без_имени/6. Персональное царство Морфея.mp3" controls></audio>
                        <p>7. Заебало</p>
                        <audio src="../materials/music/Поєт_без_имени/7. Заебало.mp3" controls></audio>
                        <p>8. NikName</p>
                        <audio src="../materials/music/Поєт_без_имени/8. NikName.mp3" controls></audio>
                        <p>9. Письмо другу, которого нет (outro)</p>
                        <audio src="../materials/music/Поєт_без_имени/9. Письмо другу, которого нет.mp3" controls></audio>
                        <p></p>
                    </div>
                </Col>
                <Col className='audio-content' lg={6}>
                    <h3>{t("music.album-2-h3")}</h3>
                    <img src='/img/album2.jpg' alt={t("music.album-2-alt")}></img>
                    <p>{t("music.album-2-paragraph")}</p>
                    <p><span>{t("music.album-2-span")}</span></p>
                    <div className="album-items">
                        <p>1. Лютий</p>
                        <audio src="../materials/music/Помилка_вцілілого/1. Лютий.mp3" controls></audio>
                        <p>2. 23.02 (skit)</p>
                        <audio src="../materials/music/Помилка_вцілілого/2. 23.02 .mp3" controls></audio>
                        <p>3. Вогні великого міста</p>
                        <audio src="../materials/music/Помилка_вцілілого/3. Вогні великого міста.mp3" controls></audio>
                        <p>4. Руzzкій воєнний корабль</p>
                        <audio src="../materials/music/Помилка_вцілілого/4. Руzzкій воєнний корабль.mp3" controls></audio>
                        <p>5. Знову тихо (skit)</p>
                        <audio src="../materials/music/Помилка_вцілілого/5. Знову тихо.mp3" controls></audio>
                        <p>6. Помилка вцілілого</p>
                        <audio src="../materials/music/Помилка_вцілілого/6. Помилка вцілілого.mp3" controls></audio>
                        <p>7. Заповіт (skit)</p>
                        <audio src="../materials/music/Помилка_вцілілого/7. Заповіт.mp3" controls></audio>
                        <p>8. Завтра буде гірше</p>
                        <audio src="../materials/music/Помилка_вцілілого/8. Завтра буде гірше.mp3" controls></audio>
                        <p>9. От би...</p>
                        <audio src="../materials/music/Помилка_вцілілого/9. От би....mp3" controls></audio>
                        <p>10. Навчи мене любити</p>
                        <audio src="../materials/music/Помилка_вцілілого/10. Навчи мене любити.mp3" controls></audio>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}