function F(num) {
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            console.log(`${i} – это ноль`);
        } else if (i % 2 === 0) {
            console.log(`${i} – четное число`);
        } else {
            console.log(`${i} – нечетное число`);
        }

    }
}
F(prompt('введите число!'))