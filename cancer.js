// Crea una calculadora para convertir un valor ingresado por el usuario a grados Celsius, Farenheit y Kelvin.

// Considera:
// Solicitar el valor por medio de un prompt.
// Crear funciones para realizar los cálculos.
// Mostrar los resultados mediante alertas.

var grados=parseFloat(prompt("Ingrese los grados en celsius: "));
var convertir=prompt("desea convertir a: \n1-Farenheit\n2-Kelvin");

var farenheit=(grados*1.8)+32;
var kelvin= grados+273.15;

function conversion(){
    if (convertir==1){//
        alert("El valor en Farenheit es: "+farenheit+"º");
    } 
    if (convertir==2){//
        alert("El valor en Kelvin es: "+kelvin+"º");
    } else{
        alert("opcion invalida");
    }
}
conversion();