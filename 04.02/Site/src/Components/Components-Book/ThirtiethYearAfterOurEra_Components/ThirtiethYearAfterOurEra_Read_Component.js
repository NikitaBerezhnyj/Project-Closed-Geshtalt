import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Standard-Component-style.css'
import '../Book.css';

export default function ThirtiethYearAfterOurEra_Read_Component() {
    const { t, i18n } = useTranslation("global");

    const getBookPath = () => {
        if(i18n.language == 'en')
        {
            return `${process.env.PUBLIC_URL}/materials/book/ThirtiethYearAfterOurEra/en/Thirtieth Year After Our Era.pdf`;
        }
        else
        {
            return `${process.env.PUBLIC_URL}/materials/book/ThirtiethYearAfterOurEra/ua/Тридцяти рік після нашої ери.pdf`;
        }
    };  

    return (
        <div fluid className='reader-book fluid-fix mar-96'>
            <embed src={getBookPath()} className="mar-96"></embed>
        </div>
    );
}