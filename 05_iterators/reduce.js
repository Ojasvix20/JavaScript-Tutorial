const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 6);          //integer is the value given to acc

// using arrow fn:

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 1999,
  },
  {
    itemName: "web dev course",
    price: 2499,
  },
  {
    itemName: "data science course",
    price: 5999,
  },
];

const Bill= shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(Bill);

