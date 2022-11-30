const inputSoles = document.getElementById("inputSoles");

const result = document.getElementById("result");

const inputDollars = document.getElementById("inputDollars")

inputSoles.addEventListener('change', convertionSolesDollars);

function convertionSolesDollars() {
  let resultSoles = parseFloat(inputSoles.value);
  inputDollars = resultSoles * 3.84;
  return 
}
