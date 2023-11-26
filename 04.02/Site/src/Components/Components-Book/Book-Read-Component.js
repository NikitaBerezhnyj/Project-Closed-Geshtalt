import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standart-Component-style.css'
import './Book.css';

export default function Book_Read_Component() {
    const { t, i18n } = useTranslation("global");

    const getBookPath = () => {
        return `/materials/book/${i18n.language}/Book.pdf`;
    };

    return (
        <div fluid className='reader-book mar-96 fluid-fix'>
            <iframe title='Книга' src={getBookPath()} frameBorder="0" className="book mar-96"></iframe>
        </div>
    );
}
