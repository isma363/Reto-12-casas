var carreritas=["Lucia","Roberto","Maria","Jesus","Andrea","Jose"];

console.log(carreritas);
carreritas.forEach(function(elemento, indice, array) {
    console.log(indice+1,elemento);
})


//1[federico "Lucia","Cristobal","Fernando","Armando","Roberto","Andrea","Maria","Jesus"];
carreritas.splice(4,4)
carreritas.splice(2, 0, "Andrea");
carreritas.splice(1, 0, "Cristobal","Fernando","Armando");
carreritas.unshift("Federico");
console.log(carreritas);


carreritas.forEach(function(elemento, indice, array) {
    console.log(indice+1,elemento);
})
console.log(carreritas);