// import { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../Standard-Component-style.css';
// import '../Comics.css';

// export default function WayHome_Reader_Component() {
//     const { t, i18n } = useTranslation("global");

//     useEffect(() => {
//         const pageComics = document.getElementById("page-comics");
//         const pageNum = document.getElementById("page-num");
//         const leftBtnComics = document.getElementById("left-btn-comics");
//         const rightBtnComics = document.getElementById("right-btn-comics");

//         let pageComicsNum = 1;

//         function updateComicsImage() {
//             const imagePath = `/materials/comics/${i18n.language}/${pageComicsNum}.jpg`;
//             pageComics.src = imagePath;
//             pageNum.textContent = pageComicsNum;
//         }

//         leftBtnComics.addEventListener("click", () => {
//             if (pageComicsNum === 1) {
//                 alert("First page");
//             } else {
//                 pageComicsNum -= 1;
//                 updateComicsImage();
//             }
//         });

//         rightBtnComics.addEventListener("click", () => {
//             if (pageComicsNum === 56) {
//                 alert("Last page");
//             } else {
//                 pageComicsNum += 1;
//                 updateComicsImage();
//             }
//         });

//         updateComicsImage();

//         // Cleanup event listeners when the component unmounts
//         return () => {
//             leftBtnComics.removeEventListener("click", () => {});
//             rightBtnComics.removeEventListener("click", () => {});
//         };
//     }, [i18n.language]);

//     return (
//         <div fluid className='fluid-fix'>
//             <div className='reader-comics'>
//                 <div className='comics-btn'><button className="left-btn-comics" id="left-btn-comics">{t("comics.comics-left-btn")}</button></div>
//                 <div className='page-wrap'><img src="/home/nikname/Проекти/Project-Closed-Geshtalt/04.02/Site/project_close_geshtalt/public/materials/comics/1.jpg" id="page-comics" alt='Сторінка комікса' className='comics-page'></img></div>
//                 <div className='comics-btn'><button className="right-btn-comics" id="right-btn-comics">{t("comics.comics-right-btn")}</button></div>
//             </div>
//             <div>
//                 <span id="page-num" className='span-bold'>1</span><span className='span-bold'> / 56</span>
//             </div>
//         </div>
//     )
// }

// import { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../Standard-Component-style.css';
// import '../Comics.css';

// export default function TheLetterOfDeath_Reader_Component() {
//     const { t, i18n } = useTranslation("global");

//     useEffect(() => {
//         const pageComics = document.getElementById("page-comics");
//         const pageNum = document.getElementById("page-num");
//         const leftBtnComics = document.getElementById("left-btn-comics");
//         const rightBtnComics = document.getElementById("right-btn-comics");

//         let pageComicsNum = 1;

//         function updateComicsImage() {
//             const imagePath = `/materials/comics/${i18n.language}/${pageComicsNum}.jpg`;
//             pageComics.src = imagePath;
//             pageNum.textContent = pageComicsNum;
//         }

//         leftBtnComics.addEventListener("click", () => {
//             if (pageComicsNum === 1) {
//                 alert("First page");
//             } else {
//                 pageComicsNum -= 1;
//                 updateComicsImage();
//             }
//         });

//         rightBtnComics.addEventListener("click", () => {
//             if (pageComicsNum === 56) {
//                 alert("Last page");
//             } else {
//                 pageComicsNum += 1;
//                 updateComicsImage();
//             }
//         });

//         updateComicsImage();

//         // Cleanup event listeners when the component unmounts
//         return () => {
//             leftBtnComics.removeEventListener("click", () => {});
//             rightBtnComics.removeEventListener("click", () => {});
//         };
//     }, [i18n.language]);

//     return (
//         <div fluid className='fluid-fix'>
//             <div className='reader-comics'>
//                 <div className='comics-btn'><button className="left-btn-comics" id="left-btn-comics">{t("comics.comics-left-btn")}</button></div>
//                 <div className='page-wrap'><img src="/home/nikname/Проекти/Project-Closed-Geshtalt/04.02/Site/project_close_geshtalt/public/materials/comics/1.jpg" id="page-comics" alt='Сторінка комікса' className='comics-page'></img></div>
//                 <div className='comics-btn'><button className="right-btn-comics" id="right-btn-comics">{t("comics.comics-right-btn")}</button></div>
//             </div>
//             <div>
//                 <span id="page-num" className='span-bold'>1</span><span className='span-bold'> / 56</span>
//             </div>
//         </div>
//     )
// }

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Standard-Component-style.css';
import '../Comics.css';

export default function WayHome_Reader_Component() {
    const { t, i18n } = useTranslation("global");

    useEffect(() => {
        const pageComics = document.getElementById("page-comics");
        const pageNum = document.getElementById("page-num");
        const leftBtnComics = document.getElementById("left-btn-comics");
        const rightBtnComics = document.getElementById("right-btn-comics");

        let pageComicsNum = 1;

        function updateComicsImage() {
            const imagePath = `/materials/comics/${i18n.language}/${pageComicsNum}.jpg`;
            pageComics.src = imagePath;
            pageNum.textContent = pageComicsNum;
        }

        leftBtnComics.addEventListener("click", () => {
            if (pageComicsNum === 1) {
                alert("First page");
            } else {
                pageComicsNum -= 1;
                updateComicsImage();
            }
        });

        rightBtnComics.addEventListener("click", () => {
            if (pageComicsNum === 56) {
                alert("Last page");
            } else {
                pageComicsNum += 1;
                updateComicsImage();
            }
        });

        updateComicsImage();

        // Cleanup event listeners when the component unmounts
        return () => {
            leftBtnComics.removeEventListener("click", () => {});
            rightBtnComics.removeEventListener("click", () => {});
        };
    }, [i18n.language]);

    return (
        <div fluid className='fluid-fix'>
            <div className='reader-comics'>
                <button className="left-btn-comics" id="left-btn-comics" style={{ width: "50%" }}>{t("comics.comics-left-btn")}</button>
                <div className='page-wrap'>
                    <img src="/home/nikname/Проекти/Project-Closed-Geshtalt/04.02/Site/project_close_geshtalt/public/materials/comics/1.jpg" id="page-comics" alt='Сторінка комікса' className='comics-page'></img>
                </div>
                <button className="right-btn-comics" id="right-btn-comics" style={{ width: "50%" }}>{t("comics.comics-right-btn")}</button>
            </div>
            <div>
                <span id="page-num" className='span-bold'>1</span><span className='span-bold'> / 56</span>
            </div>
        </div>
    )
}