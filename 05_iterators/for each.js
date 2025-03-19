const coding = ["python", "c++", "java", "swift", "kotlin"];

// coding.forEach(function (val){ //fn has no name bcz it is callback
//     console.log(val);

// })

// coding.forEach( (item)=>{
//     console.log(item);

// })

// function printMe(items){
//     console.log(items);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, coding) => {
//   console.log(item, index, coding);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((items)=>{
    // console.log(items);
    console.log(items.languageName);
    
})