// Una juguetería tiene mucho éxito en dos productos: payasos y muñecas. Suele hacer venta por correo y la empresa de logística les cobra por paquete, así que deben calcular el peso de los paquetes que se enviarán. Cada payaso pesa 112 grs. y cada muñeca 75 grs.

// Escribe un programa que lea el número de payasos y muñecas vendidos y calcula el peso total del pedido que será enviado, considerando que el peso máximo del paquete es de 1 Kg.
// Muestra en alertas el peso total por cada artículo.
// Muestra en alertas cuantos paquetes se enviarán.

const muñeca=75; 
const payaso=112;

var muñecas=parseFloat(prompt("Cuantas muñecas se vendieron?"));
var payasos=parseFloat(prompt("Cuantos payasos se vendieron?"));
var pesoMuñecas=muñeca*muñecas;
var pesoPayasos=payaso*payasos;
var pesoPaquete=((pesoMuñecas+pesoPayasos)/1000).toFixed(2);
alert("Su paquete pesa: "+pesoPaquete+"Kg")
var cantPaquetes=Math.trunc(pesoPaquete)+1;

var limiteMin=Math.trunc(pesoPaquete)-1;
var limiteMax=Math.trunc(pesoPaquete)+1;

if (pesoPaquete>limiteMin && pesoPaquete<limiteMax){
    alert("se enviaran "+cantPaquetes+ " paquetes");
}

