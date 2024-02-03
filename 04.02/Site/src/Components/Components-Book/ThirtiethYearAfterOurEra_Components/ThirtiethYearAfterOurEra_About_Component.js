import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Standard-Component-style.css'
import '../Book.css';

export default function ThirtiethYearAfterOurEra_About_Component(){
    const { t, i18n } = useTranslation("global");

    const getBookPath = () => {
        if(i18n.language == 'en')
        {
            return `/public/materials/book/ThirtiethYearAfterOurEra/en/Thirtieth Year After Our Era.pdf`;
        }
        else
        {
            return `/public/materials/book/ThirtiethYearAfterOurEra/ua/Тридцяти рік після нашої ери.pdf`;
        }
    };

    return(

        <Container fluid className='fluid-fix'>
            <Row className='about'>
                <img alt='Обкладинка комікса' src='/img/book1.png' className='about-img'></img>
                <div className='book-hero'>
                    <h1 className='about-title'>{t("book.book-1-h1")}</h1>
                    <p className='mar-16'>{t("book.book-1-paragraph-1")}</p>
                    <p className='mar-16'>{t("book.book-1-paragraph-2")}</p>
                    <p className='mar-16'>{t("book.book-1-paragraph-3")}</p>
                    <p className='mar-16'>{t("book.book-1-paragraph-4")}</p>
                    <p className='mar-16'>{t("book.book-1-paragraph-5")}</p>
                    <p className='mar-24'>{t("book.book-1-paragraph-6")}</p>
                    <a className="btn w-25 mar-auto mar-48" href={getBookPath()} download>{t("about.download")}</a>
                </div>
            </Row>
        </Container>
    )
}