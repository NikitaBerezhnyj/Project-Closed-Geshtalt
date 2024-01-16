import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TheLetterOfDeath_About_Component from './ThirtiethYearAfterOurEra_About_Component';
import TheLetterOfDeath_Read_Component from './ThirtiethYearAfterOurEra_Read_Component';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Standard-Component-style.css'
import '../Book.css';

export default function ThirtiethYearAfterOurEra_Component(){
    const { t, i18n } = useTranslation("global");

    return(
    <Tabs defaultActiveKey="about" id="justify-tab-example" className="mb-3 fluid-fix" fluid justify>
        <Tab eventKey="about" title={t("book.book-tab-1")} >
            <TheLetterOfDeath_About_Component/>
        </Tab>
        <Tab eventKey="comics" title={t("book.book-tab-2")}>
            <TheLetterOfDeath_Read_Component/>
        </Tab>
    </Tabs>
    )
}