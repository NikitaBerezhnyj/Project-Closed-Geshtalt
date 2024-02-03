import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Standard-Component-style.css';
import '../Comics.css';

export default function TheLetterOfDeath_About_Component(){
    const { t, i18n } = useTranslation("global");

    const getComicsPath = () => {
        if(i18n.language == 'en')
        {
            return `/public/materials/comics/TheLetterOfDeath/en/The letter of death. The last sentence.pdf`;
        }
        else
        {
            return `/public/materials/comics/TheLetterOfDeath/ua/Літера смерті. Останній вирок.pdf`;
        }
    };

    return(
        <Container fluid className='fluid-fix'>
            <Row className='about'>
                <img alt={t("comics.comics-2-img-alt")} src='/img/comics1.png' className='about-img'></img>
                <div className='comics-hero'>
                    <h1 className='about-title'>{t("comics.comics-1-h1")}</h1>
                    <p className='mar-16'>{t("comics.comics-1-paragraph-1")}</p>
                    <p className='mar-16'>{t("comics.comics-1-paragraph-2")}</p>
                    <p className='mar-16'>{t("comics.comics-1-paragraph-3")}</p>
                    <p className='mar-16'>{t("comics.comics-1-paragraph-4")}</p>
                    <p className='mar-16'>{t("comics.comics-1-paragraph-5")}</p>
                    <p className='mar-24'>{t("comics.comics-1-paragraph-6")}</p>
                    <a className="btn w-25 mar-auto mar-48" href={getComicsPath()} download>{t("about.download")}</a>
                </div>
            </Row>
        </Container>
    )
}