const cart = document.getElementById("cart");
const heart = document.getElementById("heart");
const phone = document.getElementById("phone");

cart.addEventListener("click", function () {
    alert("Корзина пока пустая 🛒");
});

heart.addEventListener("click", function () {
    alert("Товар добавлен в избранное ❤️");
});

phone.addEventListener("click", function () {
    alert("Свяжитесь с нами по телефону");
});

const arrows = document.querySelectorAll(".arrow");

arrows.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Переходим в каталог");
    });
});












const favorites = document.querySelectorAll(".favorite");

favorites.forEach((button) => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        if (button.classList.contains("active")) {
            button.textContent = "♥️";
        } else {
            button.textContent = "♡";
        }

    });

});


// ==========================
// Корзина
// ==========================

const cartButtons = document.querySelectorAll(".add-cart");

let cartCount = 0;

cartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        cartCount++;

        button.textContent = "✓";

        setTimeout(() => {
            button.textContent = "🛒";
        }, 1000);

        console.log("Товаров в корзине:", cartCount);

    });

});


// ==========================
//Фильтр категорий
// ==========================

const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const category = button.textContent.replace("—", "").trim();

        alert("Вы выбрали категорию: " + category);

    });

});









// Лайк
document.getElementById("like").onclick = function () {
    this.textContent = "♥️";
};

document.getElementById("like2").onclick = function () {
    this.textContent = "♥️";
};


// Корзина
document.getElementById("cart").onclick = function () {
    alert("Товар добавлен в корзину!");
};

document.getElementById("cart2").onclick = function () {
    alert("Товар добавлен в корзину!");
};


// Кнопки
document.getElementById("next").onclick = function () {
    alert("Следующие товары");
};

document.getElementById("prev").onclick = function () {
    alert("Предыдущие товары");
};









