
(function (document, window) {
  'use strict;'

  let $outputCalc = document.querySelector('[data-js="outputCalc"]');

  let $buttonsNumber = document.querySelectorAll( '[data-js="buttonNumber"]' );
  Array.prototype.forEach.call( $buttonsNumber, function( button ){
    button.addEventListener('click', outputCalc, false);
  });

  let $sumBtn = document.querySelector('[data-js="sum"]');
  let $subBtn = document.querySelector('[data-js="sub"]');
  let $multBtn = document.querySelector('[data-js="mult"]');
  let $divBtn = document.querySelector('[data-js="div"]');
  let $equalBtn = document.querySelector('[data-js="equal"]');
  let $ceBtn = document.querySelector('[data-js="ce"]');

  let temp = "";

  function outputCalc() {
    if ($outputCalc.value === "0") {
      $outputCalc.value = "";
    }
    $outputCalc.value = $outputCalc.value + this.value;
    temp = $outputCalc.value;
    console.log(temp);
  }

  function cleanCalc() {
    $outputCalc.value = 0;
    temp = 0;
  }

  function operator() {
    temp += this.value;
    $outputCalc.value = temp;
  }

  function result() {
    let op = temp.match(/[\+\/\*-]/g);
    let calc = temp.split(/[\+\/\*-]/g);

    if (op[0] === "+") {
      $outputCalc.value = calc.reduce(function (acc, actual) {
        return +acc + +actual;
      });
      temp = $outputCalc.value;
      return temp;
    }
    if (op[0] === "-") {
      $outputCalc.value = calc.reduce(function (acc, actual) {
        return +acc - +actual;
      });
      temp = $outputCalc.value;
      return temp;
    }
    if (op[0] === "*") {
      $outputCalc.value = calc.reduce(function (acc, actual) {
        return +acc * +actual;
      });
      temp = $outputCalc.value;
      return temp;
    }
    if (op[0] === "/") {
      $outputCalc.value = calc.reduce(function (acc, actual) {
        return +acc / +actual;
      });
      temp = $outputCalc.value;
      return temp;
    }
  }

  $sumBtn.addEventListener('click', operator, false);
  $subBtn.addEventListener('click', operator, false);
  $multBtn.addEventListener('click', operator, false);
  $divBtn.addEventListener('click', operator, false);

  $ceBtn.addEventListener('click', cleanCalc, false);

  $equalBtn.addEventListener('click', result, false);

})(document, window);