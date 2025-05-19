const promise1 = new Promise(function(resolve, reject){
    //things that can be done using promises:
    //Do an async task
    // DB calls, cryptography, network
    
    setTimeout(function() {
        console.log('Async task is complete');
        resolve()
    },1000)
});

promise1.then(function () {
    console.log("promise consumed.");
    
})

new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve();        
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})