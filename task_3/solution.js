function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    let itemCountText = "";
    let sum = product.count * product.price;
    itemCountText = itemCountText + product.count + ` × ` + product.price + ` ₽ = ` + sum + ` ₽`;


    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
