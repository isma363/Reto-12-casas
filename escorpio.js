// Crea un programa llamado "Número mágico", donde generarás un número aleatorio y el usuario tendrá que adivinarlo. 
// Considera lo siguiente:
// Si el numero ingresado es mayor, mostrar "El número que ingresaste es mayor al número mágico".
// Si el número ingresado es menor, mostrar "El número que ingresaste es menor al número mágico".
// Si el número ingresado es igual al número mágico, mostrar "Felicidades, adivinaste el número mágico",
// Agregar una opción para finalizar el programa.

var x =(Math.random() * (10 - 1) + 1).toFixed(0);
console.log(x);

function random(){
    
    intento();
}

function intento(){
    var num=prompt("Ingresa un numero del 1 al 10 \nescribe a para finalizar");
    if(num<x){
        alert("El número que ingresaste es menor al número mágico");
        intento();
    }
    if(num>x){
        alert("El número que ingresaste es mayor al número mágico");
        intento();
    }
    if(num==x){
        alert("Felicidades, adivinaste el número mágico");
        return
    }
    if(num=="a"){
        return
    }
    else{
        alert("Opcion no valida")
        intento();
    }}
random();