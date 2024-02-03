import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Standard-Component-style.css'
import './Modal.css'

export default function Modal_Component({active, setActive, downloadPath, downloadName}) {
    const { t, i18n } = useTranslation("global");
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
                <div className='button-container'>
                    <Button className='close-button' onClick={() => setActive(false)}><b>X</b></Button>
                </div>
                <div className='main-modal-content'>
                    <div className='modal-content-header'>
                        <h1>{t("modal.modal-h1")}</h1>
                    </div>
                    <p>{t("modal.modal-p-1")}</p>
                    <p>
                        {t("modal.modal-p-2")}
                        <Link to='../'>{t("modal.modal-link-1")}</Link>
                        {t("modal.modal-p-3")}
                        <Link to='../game'>{t("modal.modal-link-2")}</Link>
                        {t("modal.modal-p-4")}
                    </p>
                    <p>
                        {t("modal.modal-p-5")}
                        <a href={downloadPath} target="_blank" download={downloadName}>{t("modal.modal-choice-1")}</a>
                        {t("modal.modal-p-6")}
                        <span onClick={() => setActive(false)}>{t("modal.modal-choice-2")}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}