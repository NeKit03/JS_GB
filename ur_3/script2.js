function f(num) {
    console.log(num);
    console.log(!isNaN(num));
    if (!isNaN(num)) {
        let num1 = parseFloat(num) * 0.87;
        return `Размер заработной платы за вычетом налогов равен ${num1}`;
    } else {
        return 'Значение задано неверно';
    }
}

let num = prompt('Введите число!');
alert(f(num));