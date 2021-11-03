class Calculator {
constructor(perviousOperandTextElement,currentOperandTextElement){
this.perviousOperandTextElement= perviousOperandTextElement
this.currentOperandTextElement = currentOperandTextElement
this.clear()
}

clear() {
this.currentOperand =''
this .perviousOperand = ''
this.operation=undefined
}
delete(){



}
appendNumber(number){


}

chooseOperation(operation){


}
compute(){



}

updateDisplay(){


}
}


const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = deleteButton.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const perviousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
