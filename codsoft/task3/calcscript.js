// simple calc script
let display = document.getElementById('display');
let current = '';

function press(num){
    // add pressed button to current
    current += num;
    display.innerText = current;
}

// do the calculation
function calculate(){
    try{
        display.innerText = eval(current);
        current = display.innerText;
    }catch(err){
        display.innerText = "Err";
        current = '';
    }
}

// clear display
function clearDisplay(){
    current = '';
    display.innerText = '0';
}
