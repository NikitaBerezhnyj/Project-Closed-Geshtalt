import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Standard-Component-style.css'
import '../Book.css';

export default function ThirtiethYearAfterOurEra_About_Component(){
    const { t, i18n } = useTranslation("global");

    const getBookPath = () => {
        return `/materials/book/${i18n.language}/Book.pdf`;
    };

    return(

        <Container fluid className='fluid-fix'>
            <Row className='about'>
                <img alt='Обкладинка комікса' src='/img/book1.png' className='about-img'></img>
                <div className='book-hero'>
                    <h1 className='about-title'>{t("book.book-h1")}</h1>
                    <p className='mar-24'>{t("book.book-paragraph")}</p>
                    <a className="btn w-25 mar-auto mar-48" href={getBookPath()} download>{t("about.download")}</a>
                </div>
            </Row>
        </Container>
    )
}