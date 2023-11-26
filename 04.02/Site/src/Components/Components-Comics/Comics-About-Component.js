import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standart-Component-style.css';
import './Comics.css';

export default function Comics_About_Component(){
    const { t, i18n } = useTranslation("global");

    const getComicsPath = () => {
        return `/materials/comics/${i18n.language}/Comics.pdf`;
    };

    return(
        <Container fluid className='fluid-fix'>
            <Row className='about'>
                <img alt='Обкладинка комікса' src='/img/comics.png' className='about-img'></img>
                <h1 className='about-title'>{t("comics.comics-h1")}</h1>
                <div className='w-100 mar-48'>
                    <p className='w-75 mar-auto'>{t("comics.comics-paragraph")}</p>
                </div>
                <a className="btn w-25 mar-auto mar-48" href={getComicsPath()} download>{t("about.download")}</a>
            </Row>
        </Container>
    )
}