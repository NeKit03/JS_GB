function cube(num) {
    return num ** 3;
}

const cube2 = num => num ** 3;

alert(cube2(prompt('Введите число 1')) + cube(prompt('Введите число 2')));