'use strict';

let amount = Number(prompt("Введите количество денег, которые хотите положить на счет в банке:"));
let str = "";

let lastdigit = parseInt(amount) % 10; // остаток от деления на 10 - послледняя цифра
let lasttwodigits = parseInt(amount) % 100; // остаток от деления на 100 - 2 послдении цифры
// тут в принципе уместно добавить нембольшой код обработки дробной части через getDecimal(a) - для получения копеек и вставить аналогичный switch - case для уже копеек - но этого не требуется, поэтому - обрабатываем только целую часть!

switch (lastdigit) {

    case 1: {
        str = "рубль";
        break;
    };
    case 2: ;
    case 3: ;
    case 4: {
        str = "рубля";
        break;
    };
    case 5: ;
    case 6: ;
    case 7: ;
    case 8: ;
    case 9: ;
    case 0: ;

    default: {
        str = "рублей";
    };

};

if ((lasttwodigits > 10) && (lasttwodigits < 20)) str = "рублей";

alert(`Ваша сумма в ${String(amount)} ${str} успешно зачислена.`);
//alert("Ваша сумма в " + String(amount) + " " + str + " успешно зачислена.");