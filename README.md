# sparta-global-dom-calculator
a calculator made in JS using DOM

## Task
Add full functionality to a calculator shell using only DOM.

## Implementation
1. Imports from the html file, used to access them within the js file
```js
var buttonNum = document.getElementsByClassName('buttonNum');
var operator = document.getElementsByClassName('operator');
var buttonClear = document.getElementsByClassName('buttonClear');
var equals = document.getElementsByClassName('equals');
var screen = document.getElementById('screen');
```
2. I used this primarily to display to the screen and to collect numbers as the user types.
```js
var currentNum = '';
```

3. I used these for storing values.
```js
var operation = '';
var firstNum;
var secondNum;
```
4. This was used to switch the storage location between the first and second number
```js
var opPressed = false;
```

## How it works
* Whenever the number buttons are pressed they are added to the string `currentNum` (to later be parsed into floats for calculation.)
* When the user clicks an operation button the current number is stored into the first number, the operation itself is stored, and the current number is cleared.
* Once the user clicks the = button the current number will be stored into the second number and the calculation occurs.
* After calculation the answer is stored in the first number and the boolean is flipped again, so the user can continue typing on the first number or store it in the second number by clicking an operation.

## Functions
This function was used to continually update the calculator screen
```js
function show(viewBox){
  screen.innerHTML = viewBox;
}
```
This is where the boolean determines whether to store the current number in the first number or second number.
```js
function storeNum(storedNum){
  if(!opPressed){
    firstNum = parseFloat(storedNum);
  }else {
    secondNum = parseFloat(storedNum);
  }
}
```
