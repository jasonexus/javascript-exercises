const convertToCelsius = (fahrenheitTemp) =>
  Math.round((((fahrenheitTemp - 32) * 5) / 9) * 10) / 10;

const convertToFahrenheit = (celsiusTemp) =>
  Math.round(((celsiusTemp * 9) / 5 + 32) * 10) / 10;

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
