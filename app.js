var titles = document.getElementsByClassName("title");

console.log(Array.isArray(titles)) //Comprobamos si es un array (false)
console.log(Array.isArray(Array.from(titles))) //Comprobamos si es un array (true)

Array.from(titles).forEach(function(item){ //Iteramos sobre el arreglo ya convertido
    console.log(item);
})