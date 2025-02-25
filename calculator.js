const display = document.getElementById("output");
let negated = Boolean(false);
let bracket = Boolean(false);


function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}

function clearDisplay(){
    display.value = "";
    negated = false;
}

function negate(){
    if(!negated){
        display.value = "-" + display.value;
    }
    else{
        let temp = display.value;
        temp = temp.substring(1);
        display.value = temp;
    }
    negated = !negated;
}

function brackets(){
    if(!bracket){
        display.value += "(";
    }
    else{
        display.value += ")";
    }
    bracket = !bracket;
}

