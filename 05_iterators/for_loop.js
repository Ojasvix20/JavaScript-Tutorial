// for looop

// for (let index = 0; index < 8; index++) {
//     const element = index;
//     console.log(element);
//     //the scope of variables 'index' and 'element' in local, and cant be accessed outside the for loop
// }

// for (let i = 0; i < 5; i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 0; j < 5; j++) {
//         // console.log(`Outer loop value ${i} and Inner loop value ${j}`);
//         console.log(`${i} + ${j} = ${ i + j}`);
        
//     }   
// }


const myArr=["flash","batman","superman"];
for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
    
}

// break and continue

console.log("example of break \n");

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        break;        
    }
    console.log(`The value of i is ${index}`);
    
}

console.log("\nexample of continue \n");
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        continue;        
    }
    console.log(`The value of i is ${index}`);
    
} 