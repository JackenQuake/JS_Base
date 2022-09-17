'use strict';

// 1. получите все кнопки и сохраните в переменную

let tmp1 = document.querySelectorAll('button');

// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick

tmp1.forEach(function (a) {
    a.addEventListener('click', function (b) {
        handleClick(b);
    })
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:

    const cardNode = clickedButtonEvent.target.parentNode; // const cardNode = ;

    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        wrap: cardNode, // здесь элемент с классом .product
        img: cardNode.querySelector('img'), // здесь картинка внутри .product
        productName: cardNode.querySelector('.productName'), // здесь .productName, который внутри .product
        button: cardNode.querySelector('button'), // здесь button, который внутри .product
    };

    // 4. получаем текст на кнопке, которая внутри .product

    let tmp2 = card.button.innerText;

    if (tmp2 === 'Подробнее') { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
        // 4.2 если да, то передаем объект card в функцию showMoreText
        showMoreText(card);
    } else if (tmp2 === 'Отмена') { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
        // 4.4 если да, то передаем объект card в функцию hideMoreText
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    card.img.style.display = 'block'; // 5. картинке внутри .product ставим стиль display: block

    card.wrap.querySelector('.desc').remove(); // 5.1 внутри .product находим элемент с классом .desc и удаляем его

    card.button.innerText = 'Подробнее'; // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"

}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    card.img.style.display = 'none'; // 6. картинке внутри .product ставим display: none

    let tmp3 = '<br>Сделайте, чтобы при клике по кнопке, вместо картинки над этой кнопкой появлялся какой-нибудь текст.<br><br>'; // 6.1 сохраняем произвольный текст в переменную

    card.productName.insertAdjacentHTML('afterend', `<div class="desc", style="font-size: 70%">${tmp3}</div>`); // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1

    card.button.innerText = 'Отмена'; // 6.3 внутри .product у кнопки текст ставим "Отмена"

}