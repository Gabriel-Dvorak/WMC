const words = ["Daniel", "Lisa", "Philipp", "Kurt", "Charlie"];
let resultat = [];
for(let word of words){
    if(word.length > 4){
        resultat.push(word);
    }
};

console.log(resultat);



const fruits = [
    { symbol: "🍌", price: 1.5, name: "banana", isSweet: true },
    { symbol: "🍎", price: 2.5, name: "apple", isSweet: false },
    { symbol: "🥝", price: 0.5, name: "kiwi", isSweet: false },
];

const onlyIsSweet = fruits.filter(fruit => fruit.isSweet);

console.log(onlyIsSweet);


const array = [1,4,9,16];
let resultat1 = [];

for(let i of array){
    resultat1.push(i*2);
}
console.log(resultat1);


const upperCasedName = fruits.map(fruit => ({...fruit, name: fruit.name.toUpperCase()}));
console.log(upperCasedName);


const filterMap = fruits.filter(fruit => fruit.price > 2).map(fruit => ({symbol : fruit.symbol , price: fruit.price}));
console.log(filterMap);

