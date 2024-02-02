// Se accede a los elementos de index.html para guardar los valores de temperaturas

let grados_celsius = document.getElementById("celsius");
let grados_fahrenheit = document.getElementById("fahrenheit");
let grados_kelvin = document.getElementById("kelvin");

// Se pide al usuario el valor de la temperatura en grados celcius

let temperatura = parseFloat(prompt("Temperatura en celsius: "));

// Se muestra el valor de la temperatura en la página
grados_celsius.innerHTML=`Temperatura en grados celsius: ${temperatura} °C`;

// Se crean las funciones para convertir de grados a celsius y kelvin
function fahrenheit(celsius){
	return celsius*9/5+32;
}

function kelvin(celsius){
	return celsius+273.15;
}

// Se muestran los valores de la temperatura en grados fahrenheit y kelvin

grados_kelvin.innerHTML=`Temperatura en grados Kelvin: ${kelvin(temperatura)} °K`;

grados_fahrenheit.innerHTML=`Temperatura en grados Fahrenheit: ${fahrenheit(temperatura)} °F`