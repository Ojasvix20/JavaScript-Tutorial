#First DOM Project

Color Switcher

switch background color of body according to the color pallete selected.

```javascript
const buttons = document.querySelectorAll(".button");
console.log(buttons);

const body = document.querySelector("body");

buttons.forEach((b) => {
    console.log(b);
    b.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === "white") {
            body.style.backgroundColor = e.target.id;
        }else if (e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }else if(e.target.id==="yellow"){
            body.style.backgroundColor=e.target.id;
        }else if(e.target.id==="purple"){
            body.style.backgroundColor=e.target.id;
        }

    })
})
