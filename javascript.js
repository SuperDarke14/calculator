//First, dynamically generate DOM
const buttonTray = document.querySelector('.button-tray');
const calcWindow = document.querySelector('.calculator-window');
const buttons = document.querySelectorAll('.button');
const operatorButton = document.querySelectorAll('.operatorButton');

//yay, global variables :)
let operandA = undefined;
let operandB = undefined;
let operator = undefined;
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
	each.addEventListener('click', addToWindow);
	
};
for (each of operatorButton) {
	each.removeEventListener('click', addToWindow);
	each.addEventListener('click', function () { if (!operandA) {operandA = calcWindow.textContent.trim()}; operator = this.textContent; clearWindow()}); 
		//check if operand A or operand B
		//add operator to operator var
		//clear window
}

const equalsButton = document.querySelector('.equalsButton');
equalsButton.removeEventListener('click', addToWindow) // this allows us  to unclobber the styling
equalsButton.addEventListener('click', () => {operandB = calcWindow.textContent});
equalsButton.addEventListener('click', () => {calcWindow.textContent = operate(operandA, operandB, operator); clearOperands(); });

const eraseButton = document.querySelector('.eraseButton');
eraseButton.removeEventListener('click', addToWindow);
eraseButton.addEventListener('click', () => {calcWindow.textContent =''; clearOperands();});

const bksp = document.querySelector('.backspaceButton');
bksp.removeEventListener('click', addToWindow);
bksp.addEventListener('click', () => {calcWindow.textContent = calcWindow.textContent.slice(0, -1);});
//function to take input from button to push it to window
function addToWindow() {
	const value = this.textContent;
	temp = calcWindow.textContent + value;
	calcWindow.textContent = temp;
	//in order to concatenate the string,
	//because of calcWindow only returning a DOM node,
	//we must do this weirdness
	return value;
}
function clearWindow() {
	calcWindow.textContent = '';
}
function storeAsOperand(variable) {
	//This function must ONLY be called with the argument as 
	//either a or b
	switch (variable) {
		case a:
			operandA = this.textContent;
			break;
		case b: operandB = this.textContent;
			break;
	}
}
function clearOperands() {
	let operandA = undefined;
	let operandB = undefined;
	let operator = undefined;
}
//Then implement math functionality within calculator window
//add fnct
function sum(a, b) {
	return (a * 1) + (b * 1)
	//do this goofiness to ensure that each is an int
	//because you can't be too sure about things
}
//subtract fnc
function subtract(a, b) {
	return (a * 1) - (b * 1)
}
//multiply func
function multiply(a, b) {
	return (a * 1) * (b * 1)
}
//divide func
function divide(a, b) {
	return (a * 1) / (b * 1)
}
//operate fnc- take operator and 2 vars and call above func
function operate (a, b, operation) {
	clearOperands();

	switch (operation){
		case '+':
			return sum(a, b);
			break;
		case '-':
			return subtract(a, b);
			break;
		case '*':
			return multiply(a, b);
			break;
		case '/':
			if (b === 0) {
				return 'You stupid';
				break;
				};
			return divide(a, b);
			break;
		}
	//since this is after the return statement, 
	//the operands may not be cleared. Perhaps calling it before MAY not clobber the operands 
	//if they are also the args to the function
}

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



