function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const resultElement = document.getElementById('result');

    if (isNaN(temperatureInput) || temperatureInput === "") {
        resultElement.innerText = "Please enter a valid number.";
        return;
    }

    let temperature = parseFloat(temperatureInput);

    // Convert input temperature to Celsius
    if (inputUnit === "fahrenheit") {
        temperature = (temperature - 32) * 5 / 9;
    } else if (inputUnit === "kelvin") {
        temperature = temperature - 273.15;
    }

    // Convert Celsius to output temperature unit
    let convertedTemperature;
    if (outputUnit === "fahrenheit") {
        convertedTemperature = (temperature * 9 / 5) + 32;
    } else if (outputUnit === "kelvin") {
        convertedTemperature = temperature + 273.15;
    } else {
        convertedTemperature = temperature;
    }

    resultElement.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)}° ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
}
