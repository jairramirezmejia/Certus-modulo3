function addition_and_sample ( number1 = 0, number2=0) {
  if (isNaN(number1) || isNaN(number2) ) {
    return 0;
  } else {
    return number1 + number2;
  }
}

let result = addition_and_sample(2500, 200);
const result2 = document.getElementById("result");
result2.innerText = "El resultado es: " + result;
