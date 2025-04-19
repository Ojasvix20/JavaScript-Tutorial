//generate random colours:

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

//fn to set random color as bg color
let change;
const newColor = function () {
  document.querySelector("body").style.backgroundColor = randomColor();
};

//start & stop button actions
document.querySelector("#start").addEventListener("click", function () {
  change = setInterval(newColor, 1000);
});
document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(change);
  change = null; //derefrencing the variable for more professionalism.
});
