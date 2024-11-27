function f(a, b, array) {
    array.splice(array.indexOf(a), 1);
    array.splice(array.indexOf(b), 1);
    return array;

}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let a = parseInt(prompt('введите индекс 1-го удаляемого числа '));
let b = parseInt(prompt('введите индекс 2-го удаляемого числа '));
array = f(a, b, array)
array.forEach(function(elem) {
    console.log(elem);
});