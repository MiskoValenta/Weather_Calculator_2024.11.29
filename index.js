//Vybírá ID z html a přiřazuje je do proměnných

const unitSelect = document.getElementById('unit');
const temperatureInput = document.getElementById('temperature');
const calculateButton = document.getElementById('calculateButton');
const resultSpan = document.getElementById('result');

//funkce, která rozeznává, jestli je číslo nebo není a vrací výsledek

function convertTemperature() {
  const unit = unitSelect.value;
  const temperature = parseFloat(temperatureInput.value); 

  if (isNaN(temperature)) {
    resultSpan.textContent = 'Please enter a valid number!';
    return;
  }
  //NaN znamená: Not a Number, hledá, jestli to je nebo není čísl


  let convertedTemperature;
  if (unit === 'Celsius') {
    convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius
    resultSpan.textContent = `${convertedTemperature.toFixed(2)} °C`;
  } else if (unit === 'Fahrenheit') {
    convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit
    resultSpan.textContent = `${convertedTemperature.toFixed(2)} °F`;
  }
}

//přiřazuje funkci k tlačítku
calculateButton.addEventListener('click', convertTemperature);

//Allert na stránku, když se načte
window.onload = function() {
  alert('Welcome to the Weather Calculator!');
};

// Udělal přes AI, protože mě sralo, když to restartovalo stránku, poté co jsem zmáčkl enter
temperatureInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default form submission
    calculateButton.click(); // Trigger the calculate button click
  }
});