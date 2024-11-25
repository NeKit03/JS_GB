let day = prompt("введите дату! ")
if (day >= 1 && day <= 10) {
    decade = '1-ая';
} else if (day > 10 && day <= 20) {
    decade = '2-ая';
} else if (day > 20 && day <= 31) {
    decade = '3-ая';
} else {
    decade = 'некорректное число';
}

alert(decade)
console.log(`Число ${day} попадает в ${decade} декаду месяца.`)