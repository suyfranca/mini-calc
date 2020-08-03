
(function (document, window) {
  'use strict;'
  
  let $sumBtn = document.querySelector('[data-js="sum"]');
  let $subBtn = document.querySelector('[data-js="sub"]');
  let $multBtn = document.querySelector('[data-js="mult"]');
  let $divBtn = document.querySelector('[data-js="div"]');
  let $equalBtn = document.querySelector('[data-js="equal"]');
  let $ceBtn = document.querySelector('[data-js="ce"]');

  let $outputCalc = document.querySelector('[data-js="outputCalc"]');
  
  let $buttonsNumber = document.querySelectorAll( '[data-js="buttonNumber"]' );
  Array.prototype.forEach.call( $buttonsNumber, function( button ){
    button.addEventListener('click', outputCalc, false);
  });
  
  $sumBtn.addEventListener('click', operator, false);
  $subBtn.addEventListener('click', operator, false);
  $multBtn.addEventListener('click', operator, false);
  $divBtn.addEventListener('click', operator, false);

  $ceBtn.addEventListener('click', cleanCalc, false);

  $equalBtn.addEventListener('click', result, false);

  function outputCalc(event) {
    if ($outputCalc.value === "0") {
      $outputCalc.value = "";
    }
    $outputCalc.value = $outputCalc.value + this.value;
    return $outputCalc.value;
  }

  function cleanCalc() {
    $outputCalc.value = 0;
  }

  function operator() {
    removeLastItemIfItIsAnOperator();
    $outputCalc.value += this.value;
  }

  function removeLastItemIfItIsAnOperator(){
    if (isLastItemIsEqual()){
      $outputCalc.value = $outputCalc.value.slice(0, -1);
    }
  }

  function isLastItemIsEqual(){
    let operations = ['+', '-', '*', '/'];
    let lastItem = $outputCalc.value.split('').pop();
    return operations.some(function(operator){
      return operator === lastItem;
    });
  }

  function result() {
    removeLastItemIfItIsAnOperator();
    let op = $outputCalc.value.match(/[\+\/\*-]/g);
    let calc = $outputCalc.value.split(/[\+\/\*-]/g);

    switch (op[0]){
      case '+':
        $outputCalc.value = calc.reduce(function (acc, actual) {
          return +acc + +actual;
        });
        return $outputCalc.value;
      case '-':
        $outputCalc.value = calc.reduce(function (acc, actual) {
          return +acc - +actual;
        });
        return $outputCalc.value;
      case '*':
        $outputCalc.value = calc.reduce(function (acc, actual) {
          return +acc * +actual;
        });
        return $outputCalc.value;
      case '/':
        $outputCalc.value = calc.reduce(function (acc, actual) {
          return +acc / +actual;
        });
        return $outputCalc.value;

    }
  } 

})(document, window);