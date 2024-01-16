import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Standard-Component-style.css';
import '../Comics.css';

export default function WayHome_About_Component(){
    const { t, i18n } = useTranslation("global");

    const getComicsPath = () => {
        return `/materials/comics/${i18n.language}/Comics.pdf`;
    };

    return(
        <Container fluid className='fluid-fix'>
            <Row className='about'>
                <img alt='Обкладинка комікса' src='/img/comics2.png' className='about-img'></img>
                <div className='comics-hero'>
                    <h1 className='about-title'>{t("comics.comics-h1")}</h1>
                    <p className='mar-24'>{t("comics.comics-paragraph")}</p>
                    <a className="btn w-25 mar-auto mar-48" href={getComicsPath()} download>{t("about.download")}</a>
                </div>
            </Row>
        </Container>
    )
}