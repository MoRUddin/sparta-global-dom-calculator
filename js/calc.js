document.addEventListener('DOMContentLoaded', function() {

  var buttonNum = document.getElementsByClassName('buttonNum');
  var operator = document.getElementsByClassName('operator');
  var buttonClear = document.getElementsByClassName('buttonClear');
  var equals = document.getElementsByClassName('equals');
  var screen = document.getElementById('screen');

  var currentNum = '';
  var operation = '';
  var firstNum;
  var secondNum;
  var opPressed = false;

  for (var i=0; i<buttonNum.length; i++) {
    buttonNum[i].addEventListener('click',function(event) {
    currentNum = addToNum(currentNum, event.target.innerHTML);
    });
  }
  for (var i=0; i<operator.length; i++) {
    operator[i].addEventListener('click', function(event) {
      operatorClicked(event.target.innerHTML);
    });
  }
  buttonClear[0].addEventListener('click', function(){
    clearAll();
  });
  equals[0].addEventListener('click', function() {
    storeNum(currentNum);
    calc();
  })

  function show(viewBox){
    screen.innerHTML = viewBox;
  }
  function addToNum(fullNum, wordNum) {
    fullNum += wordNum;
    show(fullNum);
    return fullNum;
  }
  function operatorClicked(sign) {
    operation = sign;
    storeNum(currentNum);
    opPressed = true;
    currentNum = '';
  }
  function storeNum(storedNum){
    if(!opPressed){
      firstNum = parseFloat(storedNum);
    }else {
      secondNum = parseFloat(storedNum);
    }
  }
  function calc(){
    switch (operation) {
      case '+':
        show(firstNum+secondNum);
        firstNum = firstNum+secondNum;
        secondNum = 0;
        currentNum = firstNum.toString();
        opPressed = false;
        break;
      case '-':
        show(firstNum-secondNum);
        firstNum = firstNum-secondNum;
        secondNum = 0;
        currentNum = firstNum.toString();
        opPressed = false;
        break;
      case '*':
        show(firstNum*secondNum);
        firstNum = firstNum*secondNum;
        secondNum = 0;
        currentNum = firstNum.toString();
        opPressed = false;
        break;
      case '/':
        show(firstNum/secondNum);
        firstNum = firstNum/secondNum;
        secondNum = 0;
        currentNum = firstNum.toString();
        opPressed = false;
        break;
      default:
        currentNum = '';
        operation = '';
        firstNum = 0;
        secondNum = 0;
        opPressed = false;
        show(0);
    }
  }
  function clearAll() {
    currentNum = '';
    operation = '';
    firstNum = 0;
    secondNum = 0;
    opPressed = false;
    show(0);
  }

});
