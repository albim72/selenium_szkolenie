function calculate() {

'use strict'

var cost;
var type = document.getElementById("type");
var years = document.getElementById("years");

if(years && years.value){
    years = parseInt(years.value, 10);
}

if(type && type.value && years && (years>0)){

    switch(type.value){
        case 'basic':
            cost = 10.00;
            break;
        case 'premium':
            cost = 15.00;
            break;
        case 'gold':
            cost = 20.00;
            break;
        case 'platinum':
            cost = 25.00;
            break;
    
    

    }

    cost*=years;
    if(years>1){
        cost*=.80;
    }

    document.getElementById("cost").value = "$" + cost.toFixed(2);

}
else {
    document.getElementById("cost").value = "Proszę wprowadzić poprawne dane!";
}

return false;

}

function init() {
    'use strict'
    document.getElementById("theForm").onsubmit = calculate;
}

window.addEventListener("load", init, false);