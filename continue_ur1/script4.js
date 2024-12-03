const products1 = [{
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"],
    },
    {
        id: 8,
        price: 78,
    },
];

console.log("4 задание");

// Продукты с фотографиями
const f1 = products1.filter(product => product.photos && product.photos.length > 0);
console.log('Продукты с фотографиями:\n', f1);

// Сортировка по цене
const f2 = products1.slice().sort((a, b) => a.price - b.price);
console.log('Сортированные продукты:\n', f2);