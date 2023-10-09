import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standart-Component-style.css'
import './Book.css';

export default function Book_About_Component(){
    const { t, i18n } = useTranslation("global");

    const getBookPath = () => {
        return `/materials/book/${i18n.language}/Book.pdf`;
    };

    return(
        <Container fluid className='fluid-fix'>
            <Row className='about'>
                <img alt='Обкладинка книги' src='/img/book.png' className='about-img'></img>
                <h1 className='about-title'>{t("book.book-h1")}</h1>
                <div className='w-100 mar-48'>
                    <p className='w-75 mar-auto'>{t("book.book-paragraph")}</p>
                </div>
                <a className="btn w-25 mar-auto mar-48" href={getBookPath()} download>{t("about.download")}</a>
            </Row>
        </Container>
    )
}