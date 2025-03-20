// forin loop

// iterating object:
const myObj = {
  js: "javaScript",
  py: "Python",
  cpp: "C++",
  rb: "Ruby",
};

for (const key in myObj) {
  console.log(`${key} is the shortcut for ${myObj[key]}`);
}

const prog = ["python", "C++", "Java", "JavaScript"];
for (const key in prog) {
    console.log(prog[key]);
    
}
