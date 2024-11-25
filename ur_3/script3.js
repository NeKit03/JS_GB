function max_num(a, b, c) {
    let mx = a;
    mx = b > mx ? b : mx
    mx = c > mx ? c : mx
    return mx;
}

let num1 = parseFloat(prompt('Введите первое число:'));
let num2 = parseFloat(prompt('Введите второе число:'));
let num3 = parseFloat(prompt('Введите третье число:'));

alert(max_num(num1, num2, num3));