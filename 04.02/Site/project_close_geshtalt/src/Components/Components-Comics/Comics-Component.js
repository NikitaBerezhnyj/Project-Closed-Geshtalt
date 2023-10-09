import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Comics_About_Component from './Comics-About-Component';
import Comics_Reader_Component from './Comics-Read-Component';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standart-Component-style.css';
import './Comics.css';

export default function Comics_Component(){
    const { t, i18n } = useTranslation("global");

    return(
    <Tabs defaultActiveKey="about" id="justify-tab-example" className="mb-3 fluid-fix" fluid justify>
        <Tab eventKey="about" title={t("comics.comics-tab-1")}>
            <Comics_About_Component/>
        </Tab>
        <Tab eventKey="comics" title={t("comics.comics-tab-2")}>
            <Comics_Reader_Component/>
        </Tab>
    </Tabs>
    )
}