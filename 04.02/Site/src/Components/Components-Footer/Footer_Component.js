import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standard-Component-style.css';
import './Footer.css';

export default function Footer_Component() {
    const { t, i18n } = useTranslation("global");

    return (
        <Container>
            <hr></hr>
            <Row>
                <Col>
                    <span className='footer-text'>Project Close Geshtalt</span>
                    <img src='/img/icon.png' alt='Лого' className='footer-img'></img>
                </Col>
                <Col>
                    <p>{t("footer.footer-text")}</p>
                </Col>
            </Row>
        </Container>
    );
  };