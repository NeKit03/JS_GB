let num = prompt("введите число")
let units = Math.floor(num % 100);
alert(Math.floor(num / 100) + " " + Math.floor(num % 100 / 10) + " " + (num % 10))