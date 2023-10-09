// Кнопка для скролу у верх
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
});

// Зворотній відлік до патчу
let countdown = document.querySelector("#countdown");
let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let end = new Date("2024-02-04T00:00:00");
let countdownInterval = setInterval(function() {
    let now = new Date();
    let elapsed = (end - now) / 1000;
    days.textContent = Math.floor(elapsed / (60 * 60 * 24));
    hours.textContent = Math.floor(elapsed / (60 * 60)) % 24;
    minutes.textContent = Math.floor(elapsed / 60) % 60;
    seconds.textContent = Math.floor(elapsed) % 60;
    if (elapsed <= 0) {
        clearInterval(countdownInterval);
        countdown.textContent = "Спливло!";
    }
}, 1000);

// Перемикання вкладок 'Про комікс' та 'Читати'
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// Перемикання сторінок для комікса
const pageComics = document.getElementById("page-comics");
const pageNum = document.getElementById("page-num");
const leftBtnComics = document.getElementById("left-btn-comics");
const rightBtnComics = document.getElementById("right-btn-comics");
let pageComicsNum = 1;
// Оновлення зображення коміксу
function updateComicsImage() {
    // pageComics.src = `../img/comics/${pageComicsNum}.jpg`;
    pageComics.src = `../materials/comics/${pageComicsNum}.jpg`;
    pageNum.textContent = pageComicsNum;
}
// Перевірка натискання лівої кнопки та обраховування поточної сторінки
leftBtnComics.addEventListener("click", () => {
    if (pageComicsNum === 1) {
        alert("First page");
    } else {
        pageComicsNum -= 1;
        updateComicsImage();
    }
});
// Перевірка натискання правої кнопки та обраховування поточної сторінки
rightBtnComics.addEventListener("click", () => {
    if (pageComicsNum === 56) {
        alert("Last page");
    } else {
        pageComicsNum += 1;
        updateComicsImage();
    }
});
// Ініціалізація зображення коміксу на початку
updateComicsImage();