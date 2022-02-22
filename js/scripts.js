// $(function() {
//     $(".slider").slick()
// })
new Swiper(".swiper", {
    navigation: {
        nextEl: ".btns__btn_next",
        prevEl: ".btns__btn_prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    centeredSlides: true,
    loop: true,
    loopSlides: 5,
    spaceBetween: 32,
    initialSlide: 1,
    speed: 800,
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    parallax: true,
},);

// спойлеры
let spoiler = document.querySelectorAll(".list-header__item_dropdown");
let dropDownList = document.querySelectorAll(".dropdown-list");

for (let i = 0; i < spoiler.length; i++) {
    spoiler[i].addEventListener("click", function() {
        dropDownList[i].classList.toggle("active");
    })
}

// бургер
let burger = document.querySelector(".header__burger");
let headerList = document.querySelector(".list-header");
let body = document.querySelector("body");

burger.addEventListener("click", function() {
    burger.classList.toggle("active");
    headerList.classList.toggle("active");
    body.classList.toggle("lock");
})
