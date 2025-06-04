let name = "Tunnu";
const repoCount = 50;

// console.log(name+repoCount+" OK");
// The above is an old method and isnt very effecient or smart. So we use the following now:

// String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Tunna_x1");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
// console.log(gameName);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("T"));
const newStr = gameName.substring(0, 4);
console.log(newStr);

const anotherStr = gameName.slice(-6, 5);
console.log(anotherStr);

const String1 = "    ramesh    ";
console.log(String1);
console.log(String1.trim());

const url = "https://%20google.com/newpage";
console.log(url);

console.log(url.replace("%20", "-"));

console.log(url.includes("google"));


console.log(gameName.split("_")); //splits into array elements where "_" exists.
