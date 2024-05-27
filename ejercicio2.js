function convertirTemperatura() {
    let temperaturaCelsius = prompt("Ingresa la temperatura en grados Celsius:");

    while (isNaN(temperaturaCelsius) || temperaturaCelsius.trim() === "") {
        alert("Valor inválido. Por favor, ingresa un NUMERO");
        temperaturaCelsius = prompt("Por favor, ingresa la temperatura en grados Celsius:");
    }

    temperaturaCelsius = Number(temperaturaCelsius);

    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    let temperaturaKelvin = temperaturaCelsius + 273.15;

    console.log(`Grados Kelvin: ${temperaturaKelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}`);

    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `<p>Grados Kelvin: ${temperaturaKelvin.toFixed(2)}</p>
                               <p>Grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}</p>`;
}
