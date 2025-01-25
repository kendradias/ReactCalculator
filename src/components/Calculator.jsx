import React, { useState } from 'react';
import { calculatorButtons } from "../data/calculator-bonus-03-button-data";
import '../Calculator.css';
import Header from './Header';

const Calculator = () => {
const [display, setDisplay] = useState('0'); //Current display value
const [memory, setMemory] = useState(null); //Stored memory value
const [waitingForOperand, setWaitingForOperand] = useState(true); //Flag new number input
const [pendingOperator, setPendingOperator] = useState(null); //Current operation
const [firstOperand, setFirstOperand] = useState(null); //First number in operation

const calculate = (rightOperand, pendingOperator) => {
let newResult = 0;
const leftOperand = firstOperand;

switch (pendingOperator) {
    case '+': newResult = leftOperand + rightOperand; break;
    case '-': newResult = leftOperand - rightOperand; break;
    case '*': newResult = leftOperand * rightOperand; break;
    case '/': newResult = leftOperand / rightOperand; break;
    default: newResult = rightOperand;
}
return newResult;
};

// Main handler for all button clicks
const handleButtonClick = (button) => {
switch (button.type) {
    case 'number':
        if (button.text === '.') {
            inputDecimal();
        } else {
            inputDigit(button.value);
        }
        break;
        case 'operator':
        performOperation(button.value);
        break;
        case 'clear':
        button.text === 'AC' ? allClear() : clear();
        break;
        case 'memory':
        handleMemory(button.className);
        break;
        case 'sign':
        toggleSign();
        break;
        case 'percent':
        inputPercent();
        break;
        case 'sqrt':
        inputSquareRoot();
        break;
        case 'enter':
        performOperation('=');
        break;
    }
};

// INPUT HANDLERS
// Handles numeric inputs 
const inputDigit = (digit) => {
    if (waitingForOperand) {
        setDisplay(String(digit));
        setWaitingForOperand(false);
    } else {
        setDisplay(display === '0' ? String(digit) : display + digit);
    }
};

// Handles decimal input
const inputDecimal = () => {
    if (waitingForOperand) {
        setDisplay('0.');
        setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
        setDisplay(display + '.');
    }
};

// CLEAR FUNCTIONS
// Clears current display
const clear = () => {
    setDisplay('0');
    setWaitingForOperand(true);
};

// Resets calculator state
const allClear = () => {
    setDisplay('0');
    setFirstOperand(null);
    setWaitingForOperand(true);
    setPendingOperator(null);
};

// SPECIAL OPERATIONS
// Changes number between positive and negative
const toggleSign = () => {
    setDisplay(String(-parseFloat(display)));
};

// Converts to percentage 
const inputPercent = () => {
    setDisplay(String(parseFloat(display) / 100));
};

// Calculates squareroot
const inputSquareRoot = () => {
    setDisplay(String(Math.sqrt(parseFloat(display))));
};

// MEMORY OPERATIONS
// Routes memory button actions to their respective handlers
const handleMemory = (action) => {
    switch (action) {
        case 'ms': memoryStore(); break;
        case 'mc': memoryClear(); break;
        case 'mr': memoryRecall(); break;
        case 'm-minus': memoryMinus(); break;
        case 'm-plus': memoryPlus(); break;
    }
};

// Stores current display in memory
const memoryStore = () => {
    setMemory(parseFloat(display));
};

// Recalls the value from memory 
const memoryRecall = () => {
    if (memory !== null) {
        setDisplay(String(memory));
        setWaitingForOperand(true);
    }
};

// Clears memory 
const memoryClear = () => {
    setMemory(null);
};

// Adds the display value to memory 
const memoryPlus = () => {
    if (memory !== null) {
        setMemory(memory + parseFloat(display));
    }
};

// Substracts the display value from memory
const memoryMinus = () => {
    if (memory !== null) {
        setMemory(memory - parseFloat(display));
    }
};

// Handles arithmetic operations
const performOperation = (operator) => {
const operand = parseFloat(display);

    if (firstOperand === null) {
        setFirstOperand(operand);
    } else if (pendingOperator) {
        const result = calculate(operand, pendingOperator);
        setDisplay(String(result));
        setFirstOperand(result);
    }
    setWaitingForOperand(true);
    setPendingOperator(operator);
};

// Render the Calculator UI
return (
    <div className="calculator">
        <Header/>
        <div className="display">{display}</div>
        <div className="buttons-grid">
            {calculatorButtons.map((button) => (
                <button
                    key={button.className}
                    onClick={() => handleButtonClick(button)}
                    className={button.type === 'enter' ? 'equal-button' : button.type}
                >
                    {button.text} </button>
            ))}
        </div>
    </div>
  );
};

export default Calculator;