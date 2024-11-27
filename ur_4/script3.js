function create_array() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(Math.floor(Math.random() * 10));
    }
    console.log('созданный массив');
    array.forEach(element => {
        console.log(element);
    });
    return array;
}

function sum(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    console.log('сумма элементов');
    return sum;
}

function mn(array) {
    let mn = array[0];
    for (let i = 1; i < array.length; i++) {
        mn = i < mn ? i : mn;
    }
    console.log('минимальное число');
    return mn;
}

let array1 = [];
array1 = create_array();
console.log(sum(array));
console.log(mn(array));
console.log('Наличие 3');
console.log(array.includes(3));