// Arrays - 02

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// Adding 2 arrays:

// marvel_heros.push(dc_heros); // this is not appropriate because push will add dc_heros into marvel_heros as a sub array.
// console.log(marvel_heros);

// joining the 2 arrays. using 'concat' method. this has to be stored in a new variable

// const all_heros= marvel_heros.concat(dc_heros)
// console.log(all_heros);

// Another and sort of better way is to use the "spread" operator.

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

// spread is better as we can also join multiple (more than 2) arrays in one go.

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const real_another_array = another_array.flat(Infinity); //the argument passed here is the limit of depth upto which u want to solve(flatten) the array
console.log(real_another_array);

console.log(Array.isArray("ramesh"));
console.log(Array.from("ramesh"));
console.log(Array.from({ name: "Ramesh" })); // need to tell on what base we have to make array: key or value

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
