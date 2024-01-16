import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Standard-Component-style.css'
import '../Book.css';

export default function TheIntermediateGeneration_Read_Component() {
    const { t, i18n } = useTranslation("global");

    const getBookPath = () => {
        return `/materials/book/${i18n.language}/Book.pdf`;
    };

    return (
        <div fluid className='reader-book fluid-fix mar-96'>
            <embed src={getBookPath()} className="mar-96"></embed>
        </div>
    );
}
