import { Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Standard-Component-style.css'
import '../Book.css';

export default function TheIntermediateGeneration_About_Component(){
    const { t, i18n } = useTranslation("global");

    const getBookPath = () => {
        if(i18n.language == 'en')
        {
            return `/public/materials/book/IntermediateGeneration/en/Intermediate Generation.pdf`;
        }
        else
        {
            return `/public/materials/book/IntermediateGeneration/ua/Проміжне покоління.pdf`;
        }
    };

    return(
        <Container fluid className='fluid-fix'>
            <Row className='about'>
                <img alt='Обкладинка книги' src='/img/book2.png' className='about-img'></img>
                <div className='book-hero'>
                    <h1 className='about-title'>{t("book.book-2-h1")}</h1>
                    <p className='mar-16'>{t("book.book-2-paragraph-1")}</p>
                    <p className='mar-16'>{t("book.book-2-paragraph-2")}</p>
                    <p className='mar-16'>{t("book.book-2-paragraph-3")}</p>
                    <p className='mar-16'>{t("book.book-2-paragraph-4")}</p>
                    <p className='mar-16'>{t("book.book-2-paragraph-5")}</p>
                    <p className='mar-24'>{t("book.book-2-paragraph-6")}</p>
                    <a className="btn w-25 mar-auto mar-48" href={getBookPath()} download>{t("about.download")}</a>
                </div>
            </Row>
        </Container>
    )
}