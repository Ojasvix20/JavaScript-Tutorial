// includes loops primarily ment for arrays

// ["","",""]
// [{},{},{}]

const arr= [1,2,3,4,5,6,7];
for (const num of arr) {
    // console.log(num);
}

const greeting= "Hello World";
for (const greet of greeting) {
    // console.log(`Each Character is ${greet}`);
    
}

// Maps

const map = new Map();
map.set("IN","India")
map.set("FR","France")
map.set("USA","United States Of America")

map.set("IN","India")    //maps have unique value (adding duplicates wont actually add in the map)

// console.log(map);

// for (const key of map) {
//     console.log(key);
// }

for (const [key,value] of map) {
    console.log(key + ":- "+ value );
    
}

// forof in objects

const myObj={
    'game1':'NFS',
    'game2': 'GTA'
}

// for (const [key,value] of myObj) {
//     console.log(key =":- " +value );
    
// }    //forof loop doesn't work with objects 