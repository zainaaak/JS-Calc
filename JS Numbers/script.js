// Mathg in JS
// JS understand many ops + - * /
// js can perform math on variablez

let x = 1;
let y = 4;
let z = x - y;
console.log(z);

document.getElementById("add-btn").addEventListener("click", addNums);

function addNums() {
  // input
  var num1 = Number(document.getElementById("num-1-input").value);
  var num2 = Number(document.getElementById("num-2-input").value);

  // p[rocess
  var answer = num1 + num2;

  // output
  document.getElementById("add-answer").innerHTML = answer;
  console.log(output);
}

document.getElementById("sub-btn").addEventListener("click", subNums);

function subNums() {
  // input
  let num3 = Number(document.getElementById("subtract1").value);
  let num4 = Number(document.getElementById("subtract2").value);
  // process
  let answer = num3 - num4;

  // output
  document.getElementById("sub-ans").innerHTML = answer;
  console.log(output);
}

document.getElementById("multi-btn").addEventListener("click", multiplyNums);

function multiplyNums() {
  // input
  let num1 = Number(document.getElementById("multi1").value);
  let num2 = Number(document.getElementById("multi2").value);

  // process
  let answer = num1 * num2;

  // output
  document.getElementById("multi-ans").innerHTML = answer;
}

document.getElementById("divide-btn").addEventListener("click", divideNums);

function divideNums() {
  // input
  let num1 = Number(document.getElementById("divide1").value);
  let num2 = Number(document.getElementById("divide2").value);
  // process
  let answer = num1 / num2;

  // output
  document.getElementById("divide-ans").innerHTML = answer;
}
