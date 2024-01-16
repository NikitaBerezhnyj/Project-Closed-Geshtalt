import { Tab } from 'react-bootstrap';
import { Tabs } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import TheLetterOfDeath_About_Component from "./TheLetterOfDeath_About_Component";
import TheLetterOfDeath_Reader_Component from "./TheLetterOfDeath_Read_Component";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Standard-Component-style.css';
import '../Comics.css';

export default function TheLetterOfDeath_Component(){
    const { t, i18n } = useTranslation("global");

    return(
        <Tabs defaultActiveKey="about" id="justify-tab-example" className="mb-3 fluid-fix" fluid justify>
            <Tab eventKey="about" title={t("comics.comics-tab-1")}>
                <TheLetterOfDeath_About_Component/>
            </Tab>
            <Tab eventKey="comics" title={t("comics.comics-tab-2")}>
                <TheLetterOfDeath_Reader_Component/>
            </Tab>
        </Tabs>
    )
}