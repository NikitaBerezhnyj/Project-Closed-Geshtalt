import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standard-Component-style.css'
import './Not_Fount.css'

export default function Not_Fount_Component() {
    const { t, i18n } = useTranslation("global");
    return(
        <Container fluid>
            <Row className='not-fount-container'>
                <Col className='not-fount-content' lg={6}>
                    <h1>{t("404.404-h1")}</h1>
                    <p>{t("404.404-p")}</p>
                    <Link to='../' className='more-src'>{t("404.404-link")}</Link>
                </Col>
                <Col className='not-fount-img' lg={6}>
                    <img src="/img/icon.png" alt={t("404.404-alt-text")}></img>
                </Col>
            </Row>
        </Container>
    )
}