const buttons = document.querySelectorAll(".button");
console.log(buttons);

const body = document.querySelector("body");

buttons.forEach( (b)=>{
    console.log(b);
    b.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        
    })
})
