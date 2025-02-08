let tg = window.Telegram.WebApp;

document.addEventListener("DOMContentLoaded", function () {
    let products = [
        { id: 1, name: "Букет Роз", price: 1500 },
        { id: 2, name: "Лилии", price: 1200 },
        { id: 3, name: "Комнатное растение", price: 800 }
    ];

    let productsContainer = document.getElementById("products");

    products.forEach(product => {
        let item = document.createElement("div");
        item.innerHTML = `<p>${product.name} - ${product.price} руб.</p>
                          <button onclick="addToCart(${product.id})">Добавить в корзину</button>`;
        productsContainer.appendChild(item);
    });
});

let cart = [];

function addToCart(id) {
    cart.push(id);
    alert("Товар добавлен в корзину!");
}

document.getElementById("checkout").addEventListener("click", function () {
    tg.sendData(JSON.stringify(cart));
    tg.close();
});
