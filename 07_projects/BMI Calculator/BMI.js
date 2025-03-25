const form = document.querySelector('form');

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const r = document.querySelector('#results');

    if (h === '' || h < 0 || isNaN(h)) {
        r.innerHTML = `Please Give A Valid Height ${h}`
    } else if (w === '' || w < 0 || isNaN(w)) {
        r.innerHTML = `Please Give A Valid Height ${w}`
    } else {
        const bmi = (w / ((h * h) / 10000)).toFixed(2)
        // show the result
        if(bmi<18.6){
            r.innerHTML=`<span> Your BMI is: ${bmi}, You're Underweight! </span>`
        }
        else if(bmi>18.6 && bmi<24.9){
            r.innerHTML=`<span> Your BMI is: ${bmi}, You're Healthy! </span>`
        }
        if(bmi>24.9){
            r.innerHTML=`<span> Your BMI is: ${bmi}, You're Overweight! </span>`
        }
    }
})