document.addEventListener("DOMContentLoaded", function() {
    let tg = window.Telegram.WebApp;
    tg.expand();

    document.getElementById("orderButton").addEventListener("click", function() {
        tg.sendData("Заказ оформлен!");
        tg.close();
    });
});
