function addition(a, b) {
    return a + b;
}

function multiplication(a, b) {
    return a * b;
}

function subtraction(a, b) {
    return a - b;
}

function division(a, b) {
    if (b == 0) {
        alert('Деление на ноль запрещено! ')
        return
    }
    return a / b;
}

console.log(addition(2, 6));
console.log(subtraction(5, 3));
console.log(multiplication(4, 7));
console.log(division(10, 2));
console.log(division(10, 0));