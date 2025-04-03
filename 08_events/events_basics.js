// Javascript is a sequentially run language but there are exceptions

// document.getElementById('owl').onclick=function () {
//     alert("owl clicked")
// }
//we use event listeneres instead of functions like onclick because thats more modern and includes more features.

// AN EVENT LISTENER:

// document.getElementById("owl").addEventListener("click", function (params) {
//   alert("Owl clicked");
// });

//event listener is the best approach amongst all others, however we have few other approaches as well like:
// attachEvent -  old way during the time of internet eplorer
// JQuery - on

// types of events:
// type, timestamp, defaultPrevented
//target, toElement, srcElement, currentTarget,
//clientX, clientY, screenX, screenY
//altKey, ctrlKey, shiftKey, keyCode 

// document.getElementById('owl').addEventListener("click", function (e) {
//     console.log(e);

// }, false)       //the third parameter (true or false) tells abt event propagation 

document.getElementById('images').addEventListener("click", function (e) {
    console.log("clicked inside the ul");

}, false)


document.getElementById('owl').addEventListener("click", function (e) {
    console.log("owl clicked");
    e.stopPropagation()     //stops the event propagation from child to parent
}, false)

// there are 2 types of propagation modes:
//1. Bubbling (3rd param= false): event goes from child to parent.
//Owl clicked --> clicked inside the ul

//2. Capturing (3rd param= true): The event goes from parent to child
// clicked inside the ul --> Owl clicked 

//preventDefault event:
document.getElementById("google").addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();    //to stop bubbling propgation
    console.log("google clicked");

}, false)
