//First, dynamically generate DOM
const buttonTray = document.querySelector('.button-tray');
const calcWindow = document.querySelector('.calculator-windwow');
const buttons = document.querySelectorAll('.button');
//set a function or variable to modify calc window
function getWindow() {
    return calcWindwow.textContent;
};

//give each button their own return
function getButtonText() {
	return this.textContent;
};
//and add it to each button
for (each of buttons) {
	each.addEventListener('click', getButtonText);
}

//function to take input from button to push it to window


//Then implement math functionality within calculator window
//add fnct
//subtract fnc
//multiply func
//divite func
//operate fnc- take operator and 2 vars and call above func
 

//implement nice-to-haves in dom 
//like clearScreen();


//SPECS
//must ONLY work on TWO (2) numbers and ONE (1) operator
//Round answers 
//Error handling if operate() is called [equal sign pressed] before input complete
//eraseAll() to kill all data in input
//backspace() to backspace 
//needs funky divideBy0 message
//Apparently double-pressing the operator is bad
//Add decimal input
//After results are displayed, need to start new calculation

//THIS C++came to me in a dream
// use DOM to dynamically generate grid
//and to fix the problem of
//generating your whole button setup



